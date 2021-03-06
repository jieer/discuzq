<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Commands\Thread;

use App\Censor\Censor;
use App\Commands\Post\CreatePost;
use App\Events\Thread\Created;
use App\Events\Thread\Saving;
use App\Models\PostMod;
use App\Models\Thread;
use App\Models\User;
use App\Validators\ThreadValidator;
use Carbon\Carbon;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Auth\Exception\PermissionDeniedException;
use Discuz\Foundation\EventsDispatchTrait;
use Exception;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Contracts\Events\Dispatcher as EventDispatcher;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

class CreateThread
{
    use AssertPermissionTrait;
    use EventsDispatchTrait;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The attributes of the new thread.
     *
     * @var array
     */
    public $data;

    /**
     * The current ip address of the actor.
     *
     * @var array
     */
    public $ip;

    /**
     * The current port of the actor.
     *
     * @var int
     */
    public $port;

    /**
     * @param User $actor
     * @param array $data
     * @param string $ip
     * @param string $port
     */
    public function __construct(User $actor, array $data, $ip, $port)
    {
        $this->actor = $actor;
        $this->data = $data;
        $this->ip = $ip;
        $this->port = $port;
    }

    /**
     * @param EventDispatcher $events
     * @param BusDispatcher $bus
     * @param Censor $censor
     * @param Thread $thread
     * @param ThreadValidator $validator
     * @return Thread
     * @throws PermissionDeniedException
     * @throws ValidationException
     * @throws Exception
     */
    public function handle(EventDispatcher $events, BusDispatcher $bus, Censor $censor, Thread $thread, ThreadValidator $validator)
    {
        $this->events = $events;

        $thread->type = (int) Arr::get($this->data, 'attributes.type', Thread::TYPE_OF_TEXT);

        $this->canCreateThread($thread->type);

        // 敏感词校验
        $title = $censor->checkText(Arr::get($this->data, 'attributes.title'));
        $content = $censor->checkText(Arr::get($this->data, 'attributes.content'));

        // 视频帖、图片帖不传内容是设置默认内容
        if (! $content) {
            switch ($thread->type) {
                case Thread::TYPE_OF_VIDEO:
                    $content = '分享视频';
                    break;
                case Thread::TYPE_OF_IMAGE:
                    $content = '分享图片';
                    break;
            }
        }

        Arr::set($this->data, 'attributes.content', $content);

        // 存在审核敏感词/发布视频主题时，将主题放入待审核
        if ($censor->isMod || $thread->type == Thread::TYPE_OF_VIDEO) {
            $thread->is_approved = Thread::UNAPPROVED;
        }

        $thread->user_id = $this->actor->id;
        $thread->created_at = Carbon::now();

        // 长文帖需要设置标题
        if ($thread->type === Thread::TYPE_OF_LONG) {
            $thread->title = $title;
        }

        // 非文字贴可设置价格
        if ($thread->type !== Thread::TYPE_OF_TEXT) {
            // 是否有权发布付费贴
            if ($thread->price = (float) Arr::get($this->data, 'attributes.price', 0)) {
                $this->assertCan($this->actor, 'createThreadPaid');
            }

            // 付费长文帖可设置免费阅读字数
            if ($thread->type === Thread::TYPE_OF_LONG && $thread->price) {
                $thread->free_words = (int) Arr::get($this->data, 'attributes.free_words', 0);
            }
        }

        $thread->setRelation('user', $this->actor);

        $thread->raise(new Created($thread));

        $this->events->dispatch(
            new Saving($thread, $this->actor, $this->data)
        );

        // 发帖验证码
        $captcha = '';  // 默认为空将不走验证
        if (!$this->actor->isAdmin() && $this->actor->can('createThreadWithCaptcha')) {
            $captcha = [
                Arr::get($this->data, 'attributes.captcha_ticket', ''),
                Arr::get($this->data, 'attributes.captcha_rand_str', ''),
                $this->ip,
            ];
        }

        $validator->valid($thread->getAttributes() + compact('captcha'));

        $thread->save();

        try {
            $post = $bus->dispatch(
                new CreatePost($thread->id, $this->actor, $this->data, $this->ip, $this->port)
            );
        } catch (Exception $e) {
            $thread->delete();

            throw $e;
        }

        // 记录触发的审核词
        if ($thread->is_approved === Thread::UNAPPROVED && $censor->wordMod) {
            $stopWords = new PostMod;
            $stopWords->stop_word = implode(',', array_unique($censor->wordMod));

            $post->stopWords()->save($stopWords);
        }

        $thread->setRawAttributes($post->thread->getAttributes(), true);
        $thread->setLastPost($post);

        $this->dispatchEventsFor($thread, $this->actor);

        $thread->save();

        return $thread;
    }

    /**
     * 是否有权限发布主题
     *
     * @param int $type
     * @throws PermissionDeniedException
     */
    protected function canCreateThread($type)
    {
        switch ($type) {
            case Thread::TYPE_OF_TEXT:
                $this->assertCan($this->actor, 'createThread');
                break;
            case Thread::TYPE_OF_LONG:
                $this->assertCan($this->actor, 'createThreadLong');

                // 是否有权发布音频
                if (Arr::get($this->data, 'attributes.file_id', '')) {
                    $this->assertCan($this->actor, 'createAudio');
                }
                break;
            case Thread::TYPE_OF_VIDEO:
                $this->assertCan($this->actor, 'createThreadVideo');
                break;
            case Thread::TYPE_OF_IMAGE:
                $this->assertCan($this->actor, 'createThreadImage');
                break;
            default:
                // TODO 是否允许发布其他未知类型主题
        }
    }
}
