(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{DTiL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(a("4gYi")),r=d(a("pNQN"));function d(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{vodTranscode:"",vodWatermark:"",vodExt:"",vodSize:"",subApplication:"",screenshot:"",vodTaskflowGif:"",vodUrlKey:"",vodUrlExpire:""}},created:function(){var e=this.$route.query.type;this.type=e,this.tencentCloudSms()},methods:{tencentCloudSms:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.vodTranscode=t.readdata._data.qcloud.qcloud_vod_transcode,e.vodWatermark=t.readdata._data.qcloud.qcloud_vod_watermark,e.vodExt=t.readdata._data.qcloud.qcloud_vod_ext,e.vodSize=t.readdata._data.qcloud.qcloud_vod_size,e.subApplication=t.readdata._data.qcloud.qcloud_vod_sub_app_id,e.screenshot=t.readdata._data.qcloud.qcloud_vod_cover_template,e.vodTaskflowGif=t.readdata._data.qcloud.qcloud_vod_taskflow_gif,e.vodUrlKey=t.readdata._data.qcloud.qcloud_vod_url_key,e.vodUrlExpire=t.readdata._data.qcloud.qcloud_vod_url_expire)}))},Submission:function(){var e=this;""!==this.vodTranscode?this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"qcloud_vod_sub_app_id",value:this.subApplication,tag:"qcloud"}},{attributes:{key:"qcloud_vod_transcode",value:this.vodTranscode,tag:"qcloud"}},{attributes:{key:"qcloud_vod_watermark",value:this.vodWatermark,tag:"qcloud"}},{attributes:{key:"qcloud_vod_cover_template",value:this.screenshot,tag:"qcloud"}},{attributes:{key:"qcloud_vod_ext",value:this.vodExt,tag:"qcloud"}},{attributes:{key:"qcloud_vod_size",value:this.vodSize,tag:"qcloud"}},{attributes:{key:"qcloud_vod_taskflow_gif",value:this.vodTaskflowGif,tag:"qcloud"}},{attributes:{key:"qcloud_vod_url_key",value:this.vodUrlKey,tag:"qcloud"}},{attributes:{key:"qcloud_vod_url_expire",value:this.vodUrlExpire,tag:"qcloud"}}]}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.$message({message:"提交成功",type:"success"}),e.tencentCloudSms())})):this.$message("请填写转码模板")}},components:{Card:o.default,CardRow:r.default}}},UTuH:function(e,t,a){"use strict";a.r(t);var o=a("mHaE"),r=a("zSyx");for(var d in r)"default"!==d&&function(e){a.d(t,e,(function(){return r[e]}))}(d);var s=a("KHd+"),l=Object(s.a)(r.default,o.a,o.b,!1,null,null,null);t.default=l.exports},mHaE:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{attrs:{header:"视频配置"}}),e._v(" "),a("Card",{attrs:{header:"子应用："}},[a("CardRow",{attrs:{description:"请填写子应用 ID，如果没有开启子应用，此处留空即可，留空将自动采用主应用。"},scopedSlots:e._u([{key:"tail",fn:function(){return[a("a",{attrs:{href:"https://cloud.tencent.com/product/vod",target:"_blank"}},[e._v("未申请？点此申请")])]},proxy:!0}])},[a("el-input",{attrs:{clearable:""},model:{value:e.subApplication,callback:function(t){e.subApplication=t},expression:"subApplication"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"转码模板："}},[a("CardRow",{attrs:{description:"腾讯云账户 - 云点播 - 视频转码模板中的模板ID。还需在回调设置中配置下回调URL，回调URL为：http(s)://当前域名/api/threads/notify/video，回调事件请选择”视频上传完成回调“和”视频转码完成回调“。"}},[a("el-input",{attrs:{clearable:""},model:{value:e.vodTranscode,callback:function(t){e.vodTranscode=t},expression:"vodTranscode"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"水印模板："}},[a("CardRow",{attrs:{description:"腾讯云账户 - 云点播 - 视频处理设置 - 模板设置 - 水印模板中的模板ID，如果不填写则不启用视频水印。"}},[a("el-input",{attrs:{clearable:""},model:{value:e.vodWatermark,callback:function(t){e.vodWatermark=t},expression:"vodWatermark"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"截图模板："}},[a("CardRow",{attrs:{description:"请填写腾讯云账户 - 云点播 - 视频处理设置 - 模板设置 - 截图模板中的模板ID，如果不填写则采用默认截图模板。"}},[a("el-input",{attrs:{clearable:""},model:{value:e.screenshot,callback:function(t){e.screenshot=t},expression:"screenshot"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"动图封面任务流名称："}},[a("CardRow",{attrs:{description:"请填写腾讯云账户 - 云点播 - 视频处理设置 - 任务流设置中的任务流名称。如果创建新任务流，必须勾选“转动图”，选择合适的转动图gif模板并设置合适的时间段。如果填写了动图模板名称，则“截图模板”设置失效。"}},[a("el-input",{attrs:{clearable:""},model:{value:e.vodTaskflowGif,callback:function(t){e.vodTaskflowGif=t},expression:"vodTaskflowGif"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"云点播防盗链 Key："}},[a("CardRow",{attrs:{description:"请填写腾讯云账户 - 云点播 - 分发播放设置 - 域名管理 - 设置中的Key 防盗链。"}},[a("el-input",{attrs:{clearable:""},model:{value:e.vodUrlKey,callback:function(t){e.vodUrlKey=t},expression:"vodUrlKey"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"云点播防盗链签名有效期："}},[a("CardRow",{attrs:{description:"单位秒。过期后该 URL 将不再有效，返回 403 响应码。考虑到机器之间可能存在时间差，防盗链 URL 的实际过期时间一般比指定的过期时间长 5 分钟，即额外给出 300 秒的容差时间。建议过期时间戳不要过短，确保视频有足够时间完整播放。"}},[a("el-input",{attrs:{clearable:""},model:{value:e.vodUrlExpire,callback:function(t){e.vodUrlExpire=t},expression:"vodUrlExpire"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"支持的视频扩展名:"}},[a("CardRow",{attrs:{description:"多个请用,隔开，例如 wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb"}},[a("el-input",{attrs:{clearable:""},model:{value:e.vodExt,callback:function(t){e.vodExt=t},expression:"vodExt"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"支持的最大尺寸:"}},[a("CardRow",{attrs:{description:"单位：MB"}},[a("el-input",{attrs:{clearable:""},model:{value:e.vodSize,callback:function(t){e.vodSize=t},expression:"vodSize"}})],1)],1),e._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.Submission}},[e._v("提交")])],1)],1)},r=[]},vpuj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(a("QbLZ"));a("lpfh");var r=d(a("DTiL"));function d(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)({name:"tencent-cloud-config-sms-view"},r.default)},zSyx:function(e,t,a){"use strict";a.r(t);var o=a("vpuj"),r=a.n(o);for(var d in o)"default"!==d&&function(e){a.d(t,e,(function(){return o[e]}))}(d);t.default=r.a}}]);