<template>
    <div class="bind-phone-box">
      <BindPhoneHeader></BindPhoneHeader>
      <main class='bind-phone-main'>

        <div class="login-module-title-box">
          <h2 class="login-module-title">绑定手机号</h2>
        </div>

        <div class="login-module-form">
          <van-cell-group>
            <van-field
              label="手机号"
              placeholder="请输入您的手机号"
              v-model="phoneNum"
            />

            <van-field
              center
              clearable
              label="验证码"
              placeholder="请输入验证码"
              v-model="verifyNum"
            >
              <van-button slot="button" @click="sendSmsCode" :class="{'grayBg':isGray}" size="small" type="default">{{ btnContent }}</van-button>
            </van-field>

          </van-cell-group>
        </div>


        <div class="bind-phone-btn">
          <van-button type="primary" :loading="btnLoading" @click="bindPhone()">提交</van-button>
        </div>

      </main>
      <BindPhoneFooter></BindPhoneFooter>
    </div>
</template>

<script>
import '../../../defaultLess/m_site/modules/loginSignUpModule.less'
import '../../../defaultLess/m_site/common/common.less'

import bindPhoneCon from '../../../controllers/m_site/login/bindPhoneCon';
export default {
    name: "bind-phone-view",
  ...bindPhoneCon
}
</script>
