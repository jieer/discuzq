(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-share-site"],{"02fa":function(t,e,i){var o=i("9b47");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("4f06").default)("b731f208",o,!0,{sourceMap:!1,shadowMode:!1})},"04a8":function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page-message[data-v-3d60b880]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page-message--icon[data-v-3d60b880]{height:%?140?%;margin:%?140?% 0 %?40?%}.page-message--inner[data-v-3d60b880]{position:relative;padding-bottom:%?20?%;margin-top:%?140?%;text-align:center}.page-message--title[data-v-3d60b880]{max-width:%?510?%;margin:0 auto %?20?%;font-size:%?34?%;font-weight:700;line-height:%?45?%;color:#333}.page-message--subtitle[data-v-3d60b880]{max-width:%?510?%;margin:0 auto %?50?%;font-size:%?28?%;font-weight:400;line-height:%?37?%;color:#aaa}.out[data-v-3d60b880]{height:%?90?%;margin-bottom:%?40?%}.out .page-message--exit[data-v-3d60b880]{position:absolute;bottom:0;left:50%;z-index:1;width:%?510?%;height:%?90?%;margin:0 auto;opacity:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.navigator-hover[data-v-3d60b880]{background-color:transparent}.close-btn[data-v-3d60b880]{width:%?510?%;height:%?90?%;margin:%?50?% auto 0;font-size:%?28?%;font-weight:400;line-height:%?90?%;color:#fff;text-align:center;background:#1878f3;border:%?2?% solid 2px #ededed}',""]),t.exports=e},"0bf9":function(t,e,i){"use strict";i.r(e);var o=i("84be"),n=i("866b");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("bc6d");var a=i("f0c5"),s=Object(a.a)(n.default,o.b,o.c,!1,null,"4da03e3f",null,!1,o.a,void 0);e.default=s.exports},"12cf":function(t,e,i){"use strict";var o=i("4ea4");i("99af"),i("fb6a");var n=o(i("b469")),r=o(i("6f74")),a=o(i("4c82")),s=i("81f7"),d=i("fe07");t.exports={mixins:[n.default,r.default,a.default],methods:{handleLogin:function(t){return a.default.isWeixin().isWeixin&&this.forums&&this.forums.passport&&this.forums.passport.offiaccount_close?(uni.setStorage({key:"inviteCode",data:t}),this.$store.dispatch("session/wxh5Login")):this.login("","",t),!1},login:function(t,e,i){var o="/pages/home/index";a.default.isWeixin().isWeixin&&this.forums&&this.forums.passport&&this.forums.passport.offiaccount_close?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/register-bind?url=".concat(o,"&validate=").concat(this.forums.set_reg.register_validate,"&token=").concat(e,"&code=").concat(i)}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/verification-code-login?url=".concat(o,"&validate=").concat(this.forums.set_reg.register_validate,"&token=").concat(e,"&code=").concat(i)}),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&this.noSenseh5Register(e,t,i)):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/register?url=".concat(o,"&validate=").concat(this.forums.set_reg.register_validate,"&code=").concat(i)}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/verification-code-login?url=".concat(o,"&validate=").concat(this.forums.set_reg.register_validate,"&code=").concat(i)}),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(this.forums&&this.forums.qcloud&&this.forums.qcloud.qcloud_sms?uni.navigateTo({url:"/pages/user/verification-code-login?url=".concat(o,"&validate=").concat(this.forums.set_reg.register_validate,"&code=").concat(i)}):uni.navigateTo({url:"/pages/user/register?url=".concat(o,"&validate=").concat(this.forums.set_reg.register_validate,"&code=").concat(i)})))},noSenseh5Register:function(t,e,i){var o=this,n="";if(this.state)n=e;else if(e.length>=15){var r=e.slice(0,9);n="".concat(r).concat((0,s.getRandomChars)(6))}else n="".concat(e).concat((0,s.getRandomChars)(6));var a={data:{attributes:{username:n,password:"",token:t}}};""!==i&&(a.data.attributes.code=i),this.$store.dispatch("session/h5Register",a).then((function(n){n&&n.data&&n.data.data&&n.data.data.id&&(o.state=!0,o.logind(),uni.showToast({title:d.i18n.t("user.registerSuccess"),duration:2e3})),n&&n.data&&n.data.errors&&"validation_error"===n.data.errors[0].code&&(o.state=!1,o.noSenseh5Register(t,e,i))})).catch((function(t){}))}}}},2343:function(t,e,i){"use strict";var o=i("02fa");i.n(o).a},"29c4":function(t,e,i){"use strict";i.r(e);var o=i("9dc6"),n=i("cb43");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2343");var a=i("f0c5"),s=Object(a.a)(n.default,o.b,o.c,!1,null,"66deca25",null,!1,o.a,void 0);e.default=s.exports},"368d":function(t,e,i){t.exports=i.p+"static/img/msg-warning.0c78a551.svg"},"44cc":function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("d4ec")),r=o(i("bee2")),a=function(){function t(){(0,n.default)(this,t)}return(0,r.default)(t,[{key:"palette",value:function(t){return{width:"700px",height:"980px",background:"#ffffff",views:[{type:"rect",css:{background:"#1878F3",width:"700px",height:"450px",top:"0px",left:"0px",rotate:"0",borderRadius:"",shadow:"",color:"#1878F3"}},{type:"image",url:t.userheader,css:{width:"80px",height:"80px",top:"40px",left:"40px",rotate:"0",borderRadius:"40px",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"text",text:t.username,css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"500px",height:"40.04px",top:"41px",left:"140px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"bold",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.slitename,css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"500px",height:"34.32px",top:"88px",left:"140px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"24px",fontWeight:"400",maxLines:"1",lineHeight:"34.632000000000005px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"image",url:t.slitelogo,css:{height:"88px",top:"232.99999999999997px",left:"".concat(t.leftwidth,"px"),rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"text",text:t.member,css:{color:"rgba(255,255,255,0.5)",background:"rgba(0,0,0,0)",width:"53px",height:"37.18000000000001px",top:"365px",left:"160px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"26px",fontWeight:"400",maxLines:"1",lineHeight:"37.51800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"".concat(t.themnumber),css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"89px",height:"40.04px",top:"364px",left:"227px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.contents,css:{color:"rgba(255,255,255,0.5)",background:"rgba(0,0,0,0)",width:"53px",height:"37.18000000000001px",top:"365px",left:"381px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"26px",fontWeight:"400",maxLines:"1",lineHeight:"37.51800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"".concat(t.contdata),css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"92px",height:"40.04px",top:"364px",left:"448px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.siteintroduction,css:{color:"#333333",background:"rgba(0,0,0,0)",width:"113px",height:"40.04px",top:"500px",left:"40px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"bold",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.introd,css:{color:"#6D6D6D",background:"rgba(0,0,0,0)",width:"622px",height:"122.304px",top:"557px",left:"40px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"5",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#F9FAFC",width:"700px",height:"200px",top:"782px",left:"0px",rotate:"0",borderRadius:"",shadow:"",color:"#F9FAFC"}},{type:"image",url:t.userweixincode,css:{width:"140px",height:"140px",top:"812px",left:"40px",rotate:"0",borderRadius:"0px",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"text",text:t.longpressrecog,css:{color:"#333333",background:"rgba(0,0,0,0)",width:"338px",height:"40.04px",top:"842px",left:"210px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.comefrom+t.slitename,css:{color:"#AAAAAA",background:"rgba(0,0,0,0)",width:"450px",height:"34.32px",top:"889px",left:"210px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"24px",fontWeight:"400",maxLines:"1",lineHeight:"34.632000000000005px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}}]}}}]),t}();e.default=a},"45b6":function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("d4ec")),r=o(i("bee2")),a=function(){function t(){(0,n.default)(this,t)}return(0,r.default)(t,[{key:"palette",value:function(t){return{width:"700px",height:"980px",background:"#ffffff",views:[{type:"rect",css:{background:"#1878F3",width:"700px",height:"450px",top:"0px",left:"0px",rotate:"0",borderRadius:"",shadow:"",color:"#1878F3"}},{type:"text",text:t.siteintroduction,css:{color:"#333333",background:"rgba(0,0,0,0)",width:"113px",height:"40.04px",top:"500px",left:"40px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"bold",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.introd,css:{color:"#6D6D6D",background:"rgba(0,0,0,0)",width:"622px",height:"122.304px",top:"557px",left:"40px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"5",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#F9FAFC",width:"700px",height:"200px",top:"782px",left:"0px",rotate:"0",borderRadius:"",shadow:"",color:"#F9FAFC"}},{type:"image",url:t.userweixincode,css:{"min-width":"140px",height:"140px",top:"812px",left:"40px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"text",text:t.longpressrecog,css:{color:"#333333",background:"rgba(0,0,0,0)",width:"338px",height:"40.04px",top:"842px",left:"210px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.comefrom+t.slitename,css:{color:"#AAAAAA",background:"rgba(0,0,0,0)",width:"450px",height:"34.32px",top:"889px",left:"210px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"24px",fontWeight:"400",maxLines:"1",lineHeight:"34.632000000000005px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"image",url:t.sliteback,css:{width:"700px",height:"450px",top:"0px",left:"0px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"image",url:t.userheader,css:{width:"80px",height:"80px",top:"40px",left:"40px",rotate:"0",borderRadius:"40px",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"text",text:t.username,css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"500px",height:"40.04px",top:"41px",left:"140px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"bold",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.slitename,css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"500px",height:"34.32px",top:"88px",left:"140px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"24px",fontWeight:"400",maxLines:"1",lineHeight:"34.632000000000005px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"image",url:t.slitelogo,css:{height:"88px",top:"232.99999999999997px",left:"".concat(t.leftwidth,"px"),rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"text",text:t.member,css:{color:"rgba(255,255,255,0.5)",background:"rgba(0,0,0,0)",width:"53px",height:"37.18000000000001px",top:"365px",left:"160px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"26px",fontWeight:"400",maxLines:"1",lineHeight:"37.51800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"".concat(t.themnumber),css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"89px",height:"40.04px",top:"364px",left:"227px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:t.contents,css:{color:"rgba(255,255,255,0.5)",background:"rgba(0,0,0,0)",width:"53px",height:"37.18000000000001px",top:"365px",left:"381px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"26px",fontWeight:"400",maxLines:"1",lineHeight:"37.51800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"".concat(t.contdata),css:{color:"#FFFFFF",background:"rgba(0,0,0,0)",width:"92px",height:"40.04px",top:"364px",left:"448px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"28px",fontWeight:"400",maxLines:"1",lineHeight:"40.40400000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}}]}}}]),t}();e.default=a},4657:function(t,e,i){var o=i("9497");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("4f06").default)("3aeaf40c",o,!0,{sourceMap:!1,shadowMode:!1})},"46a6":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-loading",props:{color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var t={};return t.width=this.size+"rpx",t.height=this.size+"rpx",t.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7"),t}}};e.default=o},"4c82":function(t,e,i){"use strict";var o=i("4ea4");i("c975"),i("ac1f"),i("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("e143")),r={isWeixin:function(){var t=navigator.userAgent.toLowerCase(),e=t.indexOf("android")>-1||t.indexOf("adr")>-1,i=!!t.match(/\(i[^;]+;( u;)? cpu.+mac os x/),o=e||i;return{isWeixin:-1!==t.indexOf("micromessenger"),isPhone:o,isPc:!t.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}}};n.default.prototype.appCommonH||(n.default.prototype.appCommonH=r);var a=r;e.default=a},5405:function(t,e,i){"use strict";var o=i("4ea4");i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=o(i("5530")),a=o(i("ade3")),s=i("2f62"),d=i("fe07"),c="type_404",l="site_closed",u="not_install",f="ban_user",p="thread_deleted",h="post_deleted",g="dataerro",m="type_401",x="user_deleted",b=(n={},(0,a.default)(n,c,{title:d.i18n.t("core.page_not_found"),subtitle:d.i18n.t("core.page_not_found_detail"),btnTxt:d.i18n.t("core.back_history"),icon:"@/static/msg-404.svg",btnclickType:"toBack"}),(0,a.default)(n,l,{title:d.i18n.t("core.site_closed"),subtitle:"",btnTxt:d.i18n.t("core.close"),icon:"@/static/msg-warning.svg",btnclickType:"siteClose"}),(0,a.default)(n,u,{title:d.i18n.t("core.not_install"),subtitle:"",btnTxt:d.i18n.t("core.close"),icon:"@/static/msg-warning.svg",btnclickType:"siteClose"}),(0,a.default)(n,f,{title:d.i18n.t("core.ban_user"),subtitle:"",btnTxt:d.i18n.t("core.close"),icon:"@/static/msg-warning.svg",btnclickType:"siteClose"}),(0,a.default)(n,p,{title:d.i18n.t("core.thread_deleted"),subtitle:d.i18n.t("core.page_not_found_detail"),btnTxt:d.i18n.t("core.back_history"),icon:"@/static/msg-warning.svg",btnclickType:"toBack"}),(0,a.default)(n,h,{title:d.i18n.t("core.post_deleted"),subtitle:d.i18n.t("core.page_not_found_detail"),btnTxt:d.i18n.t("core.back_history"),icon:"@/static/msg-warning.svg",btnclickType:"toBack"}),(0,a.default)(n,g,{title:d.i18n.t("home.ioschoicetitle"),subtitle:d.i18n.t("home.ioschoicecontent"),btnTxt:d.i18n.t("discuzq.pageHeader.title"),icon:"@/static/msg-warning.svg",btnclickType:"toBack"}),(0,a.default)(n,m,{title:d.i18n.t("core.noViewPermission"),subtitle:"",btnTxt:d.i18n.t("core.back_history"),icon:"@/static/msg-404.svg",btnclickType:"toHome"}),(0,a.default)(n,x,{title:d.i18n.t("core.userDeleted"),subtitle:"",btnTxt:d.i18n.t("core.back_history"),icon:"@/static/msg-404.svg",btnclickType:"toHome"}),n),v={filters:{closedError:function(t,e,i){return e&&e.detail&&i===l?e.detail[0]:t}},computed:(0,r.default)({},(0,s.mapState)({forumError:function(t){return t.forum.error}}),{message:function(){return b[this.forumError.code]||{}},show:function(){return[c,l,u,f,p,h,m,x].indexOf(this.forumError.code)>=0},inshow:function(){return[g].indexOf(this.forumError.code)>=0}}),methods:{handleClick:function(){if(this.forumError.code===m||this.forumError.code===p||this.forumError.code===c||this.forumError.code===h||this.forumError.code===x){var t=getCurrentPages();0===t.indexOf(t[t.length-1])?uni.redirectTo({url:"/pages/home/index"}):uni.navigateBack({delta:1})}},handleLoginClick:function(){uni.navigateTo({url:"/pages/user/login?url=/pages/home/index&register=false"})}}};e.default=v},"57c2":function(t,e,i){var o=i("f6f3");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("4f06").default)("74220d54",o,!0,{sourceMap:!1,shadowMode:!1})},6058:function(t,e,i){var o=i("04a8");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("4f06").default)("36a55942",o,!0,{sourceMap:!1,shadowMode:!1})},"62b2":function(t,e,i){"use strict";i.r(e);var o=i("f823"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},"6f74":function(t,e,i){"use strict";var o=i("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),i=uni.getStorageSync(o.STORGE_GET_USER_TIME);if(t||(e-i)/1e3>60){var n={include:"groups,wechat"},r=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:r}}),this.$store.dispatch("jv/get",["users/".concat(r),{params:n}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(o.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"802a":function(t,e,i){"use strict";i.r(e);var o=i("de97"),n=i("e7a8");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("ce59");var a=i("f0c5"),s=Object(a.a)(n.default,o.b,o.c,!1,null,"7570bd53",null,!1,o.a,void 0);e.default=s.exports},"81f7":function(t,e,i){"use strict";i("a15b"),i("d81d"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.getRandomChars=void 0;e.getRandomChars=function(t){var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array(t).join().split(",").map((function(){return e.charAt(Math.floor(Math.random()*e.length))})).join("")}},8397:function(t,e,i){"use strict";i.r(e);var o=i("96e7"),n=i("62b2");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("8c6c");var a=i("f0c5"),s=Object(a.a)(n.default,o.b,o.c,!1,null,"98d6c216",null,!1,o.a,void 0);e.default=s.exports},"84be":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={quiPage:i("29c4").default,quiButton:i("8397").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("qui-page",{attrs:{"data-qui-theme":t.theme}},[i("v-uni-view",{staticClass:"painter"},[i("v-uni-view",{staticClass:"canvas-box"},[i("v-uni-view",{staticClass:"cent"},[i("v-uni-image",{staticClass:"cent-image",attrs:{src:t.imagePath,mode:"widthFix","show-menu-by-longpress":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"box-img"},[i("painter",{attrs:{"custom-style":"margin-left: 40rpx; height: 0rpx; position:fixed",palette:t.template,"width-pixels":"2080"},on:{imgErr:function(e){arguments[0]=e=t.$handleEvent(e),t.imgErr.apply(void 0,arguments)},imgOK:function(e){arguments[0]=e=t.$handleEvent(e),t.onImgOK.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"btn-box"},[i("qui-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fun.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("share.savealbum")))])],1)],1)],1)},r=[]},"866b":function(t,e,i){"use strict";i.r(e);var o=i("b5da"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},"8c6c":function(t,e,i){"use strict";var o=i("def2");i.n(o).a},9497:function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* stylelint-disable */.u-loading-circle[data-v-7570bd53]{display:inline-block;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #1878f3;-webkit-animation:u-circle-data-v-7570bd53 1s linear infinite;animation:u-circle-data-v-7570bd53 1s linear infinite}@-webkit-keyframes u-circle-data-v-7570bd53{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-circle-data-v-7570bd53{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"955f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={quiButton:i("8397").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"page-message"},[o("v-uni-view",{staticClass:"page-message--inner"},["404"===t.forumError.code?o("v-uni-image",{staticClass:"page-message--icon",attrs:{src:i("e972"),mode:"aspectFit","lazy-load":!0}}):t._e(),t.show||t.inshow?o("v-uni-image",{staticClass:"page-message--icon",attrs:{src:i("368d"),mode:"aspectFit","lazy-load":!0}}):t._e(),t.message.title?o("v-uni-view",{staticClass:"page-message--title"},[t._v(t._s(t.message.title))]):t._e(),t.inshow?o("v-uni-view",{staticClass:"page-message--subtitle"},[t._v(t._s(t.message.subtitle))]):t._e(),t.inshow?o("v-uni-navigator",{staticClass:"close-btn",attrs:{"open-type":"exit",target:"miniProgram"}},[t._v(t._s(t.message.btnTxt))]):t._e(),t.show?o("v-uni-view",{staticClass:"page-message--subtitle"},[t._v(t._s(t._f("closedError")(t.message.subtitle,t.forumError,t.forumError.code)))]):t._e(),t.show&&"toBack"==t.message.btnclickType||t.show&&"tHome"==t.message.btnclickType?o("qui-button",{staticClass:"out-btn",attrs:{size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(t.message.btnTxt))]):t._e(),"site_closed"===t.forumError.code?o("qui-button",{attrs:{size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLoginClick.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("core.admin_login")))]):t._e()],1)],1)},r=[]},"96e7":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-uni-button",{staticClass:"qui-button--button",attrs:{type:t.type,size:t.size,plain:t.plain,disabled:t.disabled,loading:t.loading,"form-type":t.formType,"open-type":t.openType,"hover-stop-propagation":t.hoverStopPropagation,"app-parameter":t.appParameter,lang:t.lang,"session-from":t.sessionFrom,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOpenSetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLaunchApp.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[]},"9ac3":function(t,e,i){"use strict";var o=i("4ea4");i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("5530")),r=i("2f62"),a=o(i("6f74")),s=o(i("b469")),d=o(i("12cf")),c=o(i("4c82")),l={mixins:[s.default,c.default,a.default,d.default],computed:(0,n.default)({},(0,r.mapState)({forumError:function(t){return t.forum.error}}),{loading:function(){return this.forumError.loading},showMessage:function(){return-1!==["not_install","site_closed","ban_user","model_not_found","dataerro","permission_denied"].indexOf(this.forumError.code)}}),watch:{forumError:function(t){!1!==t.loading||t.code||this.$emit("pageLoaded")}},mounted:function(){var t=this;this.$store.dispatch("session/setAuth",{open:function(){c.default.isWeixin().isWeixin&&t.forums&&t.forums.passport&&t.forums.passport.offiaccount_close?t.$store.dispatch("session/wxh5Login"):t.login()}})},methods:{}};e.default=l},"9b47":function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.qui-page[data-v-66deca25]{width:100%;min-height:100%;color:var(--qui-FC-333);background-color:var(--qui-BG-1);-webkit-transition:.4s;transition:.4s}',""]),t.exports=e},"9dc6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={uLoading:i("802a").default,quiPageMessage:i("e694").default},n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"qui-page"},[this.loading?e("v-uni-view",{staticClass:"loading"},[e("u-loading",{attrs:{size:60}})],1):this.showMessage?e("qui-page-message"):e("v-uni-view",[this._t("default")],2)],1)},r=[]},a31e:function(t,e,i){"use strict";i.r(e);var o=i("5405"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},b5da:function(t,e,i){"use strict";var o=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("45b6")),r=o(i("44cc")),a={mixins:[o(i("b469")).default],data:function(){return{userid:"",imagePath:"",width:700,template:{},headerImg:"",headerName:"",slitename:"",slitelogo:"",sliteback:"",themnumber:"",contdata:"",introd:"",themwidth:180,renamewidth:400,openSettingBtnHidden:!0,jurisdiction:!0,leftwidth:253,pages:"/pages/home/index"}},onLoad:function(){var t=this;uni.showLoading({title:this.i18n.t("share.generating"),mask:!0}),"public"===this.forums.set_site.site_mode?this.pages="/pages/home/index":"pay"===this.forums.set_site.site_mode&&(this.pages="/pages/site/index"),this.$nextTick((function(){t.userid=t.usersid,t.slitename=t.forums.set_site.site_name,t.slitelogo=t.forums.set_site.site_header_logo||"".concat(t.$u.host(),"static/logo.png"),t.sliteback=t.forums.set_site.site_background_image,t.themnumber=t.forums.other.count_users,t.contdata=t.forums.other.count_threads,t.introd=t.forums.set_site.site_introduction||t.i18n.t("share.nothing"),t.usertitle()}))},computed:{usersid:function(){return this.$store.getters["session/get"]("userId")},userInfo:function(){return this.$store.getters["jv/get"]("users/".concat(this.userid))}},methods:{usertitle:function(){var t=this,e=this;this.headerName=this.userInfo.username,this.themwidth=28*this.headerName.length+3,this.themwidth>=240&&(this.themwidth=240),this.renamewidth=160+this.themwidth,this.headerImg=this.userInfo.avatarUrl||"".concat(this.$u.host(),"static/images/noavatar.gif"),this.slitelogo&&uni.getImageInfo({src:e.slitelogo,success:function(t){var i=t.width*(88/t.height);e.leftwidth=(700-i)/2}}),setTimeout((function(){t.initData()}),300)},initData:function(){var t={username:this.headerName+this.i18n.t("share.recomment"),userheader:this.headerImg,slitename:this.slitename,slitelogo:this.slitelogo,sliteback:this.sliteback,themnumber:this.themnumber,contdata:this.contdata,introd:this.introd,leftwidth:this.leftwidth,userweixincode:"".concat(this.$u.host(),"api/oauth/wechat/miniprogram/code?path=").concat(this.pages),namewidth:this.themwidth,renamewidth:this.renamewidth,longpressrecog:this.i18n.t("share.longpressrecog"),recomment:this.i18n.t("share.recomment"),siteintroduction:this.i18n.t("share.siteintroduction"),comefrom:this.i18n.t("share.comefrom"),member:this.i18n.t("share.member"),contents:this.i18n.t("share.contents")};this.sliteback?this.template=(new n.default).palette(t):this.template=(new r.default).palette(t)},onImgOK:function(t){this.imagePath=t.detail.path,uni.hideLoading()},imgErr:function(){uni.hideLoading(),uni.showModal({title:this.i18n.t("discuzq.msgbox.title"),content:this.i18n.t("share.buildfailed"),showCancel:!1})},fun:function(){var t=this;uni.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.jurisdiction=e.authSetting["scope.writePhotosAlbum"]:t.jurisdiction=!1}}),this.jurisdiction||uni.openSetting({success:function(e){t.jurisdiction=e.authSetting["scope.writePhotosAlbum"]}}),uni.showModal({title:t.i18n.t("discuzq.msgbox.title"),content:t.i18n.t("share.confirm"),success:function(e){e.confirm&&uni.saveImageToPhotosAlbum({filePath:t.imagePath,success:function(){uni.showToast({title:t.i18n.t("share.successfully"),icon:"none",duration:2e3})},fail:function(e){"saveImageToPhotosAlbum:fail auth deny"===e.errMsg&&(t.jurisdiction=!1),uni.showToast({title:t.i18n.t("share.savefailed"),icon:"none",duration:2e3})}})}})},previewImage:function(){var t=this.imagePath;uni.previewImage({current:t,urls:[t]})}}};e.default=a},bc6d:function(t,e,i){"use strict";var o=i("57c2");i.n(o).a},cb43:function(t,e,i){"use strict";i.r(e);var o=i("9ac3"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},ce59:function(t,e,i){"use strict";var o=i("4657");i.n(o).a},d3c3:function(t,e,i){"use strict";var o=i("6058");i.n(o).a},de97:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("v-uni-view",{staticClass:"u-loading u-loading-circle",style:[this.cricleStyle]}):this._e()},n=[]},def2:function(t,e,i){var o=i("e13c");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("4f06").default)("3f6cd708",o,!0,{sourceMap:!1,shadowMode:!1})},e13c:function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.qui-button--button[data-v-98d6c216]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:var(--qui-FC-TAG);background-color:var(--qui-BG-F9F);border-radius:%?7?%}.qui-button--button[type="primary"][data-v-98d6c216]{color:#fff;background-color:#1878f3}.qui-button--button[type="warn"][data-v-98d6c216]{color:#fff;background-color:#ee0a24}.qui-button--button[type="success"][data-v-98d6c216]{color:#fff;background-color:#07c160}.qui-button--button[size="large"][data-v-98d6c216]{width:%?670?%;height:%?90?%;font-size:%?28?%;border-radius:0}.qui-button--button[size="max"][data-v-98d6c216]{width:100%;height:%?90?%;font-size:%?28?%}.qui-button--button[size="medium"][data-v-98d6c216]{width:%?510?%;height:%?90?%;font-size:%?26?%}.qui-button--button[size="default"][data-v-98d6c216]{height:%?70?%;padding:%?18?% %?20?%;font-size:%?24?%}.qui-button--button[size="post"][data-v-98d6c216]{width:%?200?%;height:%?100?%;font-size:%?40?%}.qui-button--button[plain][type="primary"][data-v-98d6c216]{color:#1878f3;background-color:#fff;border-color:currentColor}.qui-button--button[plain][type="warn"][data-v-98d6c216]{color:#ee0a24;background-color:#fff;border-color:currentColor}.qui-button--button[plain][type="success"][data-v-98d6c216]{color:#07c160;background-color:#fff;border-color:currentColor}.qui-button--button[plain][type="post"][data-v-98d6c216]{color:#333;background-color:#fff;border:none;border-radius:%?7?%;box-shadow:0 %?2?% %?4?% rgba(0,0,0,.05)}.qui-button--button[disabled][data-v-98d6c216]{cursor:not-allowed;opacity:.6}',""]),t.exports=e},e694:function(t,e,i){"use strict";i.r(e);var o=i("955f"),n=i("a31e");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("d3c3");var a=i("f0c5"),s=Object(a.a)(n.default,o.b,o.c,!1,null,"3d60b880",null,!1,o.a,void 0);e.default=s.exports},e7a8:function(t,e,i){"use strict";i.r(e);var o=i("46a6"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},e972:function(t,e,i){t.exports=i.p+"static/img/msg-404.e11dc2d7.svg"},f6f3:function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.painter[data-v-4da03e3f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100vw;height:100vh;background-color:var(--qui-BG-2)}.canvas-box[data-v-4da03e3f]{width:100%;height:100%;padding-top:%?41?%;margin-bottom:%?80?%}.cent[data-v-4da03e3f]{width:%?700?%;height:%?980?%;margin:0 auto;background:var(--qui-FC-FFF);border-radius:10px;box-shadow:0 %?3?% %?6?% rgba(0,0,0,.16)}.cent .cent-image[data-v-4da03e3f]{display:block;width:100%;height:100%}#front[data-v-4da03e3f]{position:fixed;width:0;height:0}.btn-box[data-v-4da03e3f]{margin:0 0 %?40?% %?40?%}uni-canvas[data-v-4da03e3f]{width:600px;height:300px}',""]),t.exports=e},f823:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{size:{type:String,default:"default"},type:{type:String,default:"default"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"zh_CN"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1}},methods:{handleGetPhoneNumber:function(t){this.$emit("getphonenumber",t)},handleGetUserInfo:function(t){this.$emit("getuserinfo",t)},handleError:function(t){this.$emit("error",t)},handleOpenSetting:function(t){this.$emit("opensetting",t)},handleLaunchApp:function(t){this.$emit("launchapp",t)},handleClick:function(t){this.$emit("click",t)}}};e.default=o}}]);