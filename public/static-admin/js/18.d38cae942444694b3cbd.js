(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8ZUA":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(t("QbLZ"));t("L5x9");var n=a(t("L/az"));function a(e){return e&&e.__esModule?e:{default:e}}i.default=(0,s.default)({name:"adminIndex"},n.default)},Elsq:function(e,i,t){"use strict";t.r(i);var s=t("8ZUA"),n=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(i,e,(function(){return s[e]}))}(a);i.default=n.a},"L/az":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(t("VVfg")),n=a(t("y0A3"));function a(e){return e&&e.__esModule?e:{default:e}}i.default={data:function(){return{indexTitle:"管理中心首页",sideTitle:"首页",navList:[{id:0,title:"首页",name:"home",submenu:[{id:0,title:"管理中心首页",name:"controlCenter",icon:"iconshouye"}]},{id:1,title:"全局",name:"global",submenu:[{id:0,title:"站点设置",name:"siteSet",icon:"iconzhandianshezhi"},{id:1,title:"注册设置",name:"signUpSet",icon:"iconzhuceshezhi"},{id:2,title:"微信设置",name:"worthMentioningSet",icon:"icondisanfangdenglushezhi"},{id:3,title:"支付设置",name:"paySet",icon:"iconzhifushezhi"},{id:4,title:"附件设置",name:"annexSet",icon:"iconfujianshezhi"},{id:5,title:"水印设置",name:"waterMarkSet",icon:"iconwatermark"},{id:6,title:"内容过滤设置",name:"contentFilteringSet",icon:"iconneirongguolvshezhi"},{id:7,title:"腾讯云设置",name:"tencentCloudSet",icon:"icontengxunyun"},{id:8,title:"通知设置",name:"noticeSet",icon:"icontongzhi",submenu:[{id:81,title:"系统通知",name:"noticeSet",icon:"icontongzhi"},{id:82,title:"微信通知",name:"noticeSet",icon:"icontongzhi"}]}]},{id:2,title:"用户",name:"user",submenu:[{id:20,title:"用户管理",name:"userManage",icon:"iconyonghuguanli"},{id:21,title:"用户角色",name:"userRol",icon:"iconjiaoseguanli"},{id:22,title:"用户审核",name:"userReview",icon:"iconyonghushenhe"}]},{id:3,title:"内容",name:"cont",submenu:[{id:0,title:"内容分类",name:"contClass",icon:"iconneirongfenlei"},{id:1,title:"内容管理",name:"contManage",icon:"iconneirongguanli",submenu:[{id:11,title:"最新主题",name:"contManage",icon:"iconneirongguanli"},{id:13,title:"最新回复",name:"contManage",icon:"iconneirongguanli"}]},{id:2,title:"内容审核",name:"contReview",icon:"iconneirongshenhe",submenu:[{id:21,title:"主题审核",name:"contReview",icon:"iconneirongshenhe"},{id:22,title:"回复审核",name:"contReview",icon:"iconneirongshenhe"}]},{id:3,title:"话题管理",name:"topicManagement",icon:"icontopicmanagement"},{id:4,title:"回收站",name:"recycleBin",icon:"iconhuishouzhan",submenu:[{id:41,title:"主题",name:"recycleBin",icon:"iconhuishouzhan"},{id:42,title:"回复",name:"recycleBin",icon:"iconhuishouzhan"}]}]},{id:4,title:"财务",name:"finance",submenu:[{id:40,title:"资金明细",name:"fundDetails",icon:"iconzijinmingxi"},{id:41,title:"订单记录",name:"orderRecord",icon:"icondingdanjilu"},{id:42,title:"提现管理",name:"withdrawMange",icon:"icontixianguanli",submenu:[{id:421,title:"提现申请",name:"withdrawMange",icon:"icontixianguanli"},{id:422,title:"提现设置",name:"withdrawMange",icon:"icontixianguanli"}]},{id:43,title:"财务统计",name:"financialStatistics",icon:"iconcaiwutongji"}]}],navSelect:"",sideList:[],sideSelect:"",sideSubmenu:[],sideSubmenuSelect:"",userName:""}},methods:{menuClick:function(e){switch(this.sideTitle=e.title,this.navSelect=e.name,e.name){case"home":this.sideList=this.navList[0].submenu,this.sideSelect=this.navList[0].submenu[0].name,this.indexTitle=this.navList[0].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/home"});break;case"global":this.sideList=this.navList[1].submenu,this.sideSelect=this.navList[1].submenu[0].name,this.indexTitle=this.navList[1].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/site-set"});break;case"user":this.sideList=this.navList[2].submenu,this.sideSelect=this.navList[2].submenu[0].name,this.indexTitle=this.navList[2].submenu[0].title,this.sideSubmenu=void 0===this.navList[2].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/user-manage"});break;case"cont":this.sideList=this.navList[3].submenu,this.sideSelect=this.navList[3].submenu[0].name,this.indexTitle=this.navList[3].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/cont-class"});break;case"finance":this.sideList=this.navList[4].submenu,this.sideSelect=this.navList[4].submenu[0].name,this.indexTitle=this.navList[4].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/fund-details"});break;default:this.sideList=[]}},sideClick:function(e){switch(this.sideSelect=e.name,this.indexTitle=e.title,this.sideSubmenu=[],e.name){case"controlCenter":this.$router.push({path:"/admin/home"});break;case"siteSet":this.$router.push({path:"/admin/site-set",query:{name:"站点设置"}});break;case"signUpSet":this.$router.push({path:"/admin/sign-up-set"});break;case"worthMentioningSet":this.$router.push({path:"/admin/worth-mentioning-set"});break;case"paySet":this.$router.push({path:"/admin/pay-set"});break;case"annexSet":this.$router.push({path:"/admin/annex-set"});break;case"waterMarkSet":this.$router.push({path:"/admin/water-mark-set"});break;case"contentFilteringSet":this.$router.push({path:"/admin/content-filter-set"});break;case"tencentCloudSet":this.$router.push({path:"/admin/tencent-cloud-set"});break;case"noticeSet":this.sideSubmenu=this.navList[1].submenu[8].submenu,this.sideSubmenuSelect=this.navList[1].submenu[8].submenu[0].title,this.$router.push({path:"/admin/system-notice"});break;case"adminUserManage":this.$router.push({path:"/admin/user-manage-set"});break;case"adminRoleManage":this.$router.push({path:"/admin/role-manage-set"});break;case"userManage":this.$router.push({path:"/admin/user-manage"});break;case"userRol":this.$router.push({path:"/admin/user-rol"});break;case"userReview":this.$router.push({path:"/admin/user-review"});break;case"contClass":this.$router.push({path:"/admin/cont-class"});break;case"contManage":this.sideSubmenu=this.navList[3].submenu[1].submenu,this.sideSubmenuSelect=this.navList[3].submenu[1].submenu[0].title,this.$router.push({path:"/admin/cont-manage"});break;case"contReview":this.sideSubmenu=this.navList[3].submenu[2].submenu,this.sideSubmenuSelect=this.navList[3].submenu[2].submenu[0].title,this.$router.push({path:"/admin/cont-review"});break;case"recycleBin":this.sideSubmenu=this.navList[3].submenu[4].submenu,this.sideSubmenuSelect=this.navList[3].submenu[4].submenu[0].title,this.$router.push({path:"/admin/recycle-bin"});break;case"topicManagement":this.$router.push({path:"/admin/topic-management"});break;case"fundDetails":this.$router.push({path:"/admin/fund-details"});break;case"orderRecord":this.$router.push({path:"/admin/order-record"});break;case"withdrawMange":this.sideSubmenu=this.navList[4].submenu[2].submenu,this.sideSubmenuSelect=this.navList[4].submenu[2].submenu[0].title,this.$router.push({path:"/admin/withdrawal-application"});break;case"financialStatistics":this.$router.push({path:"/admin/financial-statistics"})}},jumpIndex:function(){n.default.baseUrl,this.$router.push({path:"/admin"})},sideSubmenuClick:function(e){switch(e){case"系统通知":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/system-notice"});break;case"微信通知":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/wx-notice"});break;case"最新主题":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/cont-manage"});break;case"最新回复":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/latest-reply"});break;case"主题审核":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/cont-review"});break;case"回复审核":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/reply-review"});break;case"主题":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/recycle-bin"});break;case"回复":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/recycle-bin-reply"});break;case"提现申请":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/withdrawal-application"});break;case"提现设置":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/withdrawal-setting"});break;default:this.$message.error("没有当前页面，跳转404页面")}},setDataStatus:function(){var e=this.$router.history.current.meta.attribution,i=this.$router.history.current.meta.name,t=this.$router.history.current.meta.title;switch(e){case"首页":this.navSelect=this.navList[0].name,this.indexTitle=t,this.sideTitle=e,this.sideSelect=i,this.sideList=this.navList[0].submenu;break;case"全局":this.navSelect=this.navList[1].name,this.indexTitle=t,this.sideTitle=e,this.sideSelect=i,this.sideList=this.navList[1].submenu;break;case"用户":this.navSelect=this.navList[2].name,this.indexTitle=t,this.sideTitle=e,this.sideSelect=i,this.sideList=this.navList[2].submenu;break;case"内容":this.navSelect=this.navList[3].name,this.indexTitle=t,this.sideTitle=e,this.sideSelect=i,this.sideList=this.navList[3].submenu;break;case"财务":this.navSelect=this.navList[4].name,this.indexTitle=t,this.sideTitle=e,this.sideSelect=i,this.sideList=this.navList[4].submenu;break;default:this.$message.error("获取菜单出错")}var s=this.$router.history.current.meta.alias;if(s)switch(s){case"系统通知":this.sideSubmenu=this.navList[1].submenu[8].submenu,this.sideSubmenuSelect=this.navList[1].submenu[8].submenu[0].title;break;case"微信通知":this.sideSubmenu=this.navList[1].submenu[8].submenu,this.sideSubmenuSelect=this.navList[1].submenu[8].submenu[1].title;break;case"最新主题":this.sideSubmenu=this.navList[3].submenu[1].submenu,this.sideSubmenuSelect=this.navList[3].submenu[1].submenu[0].title;break;case"最新回复":this.sideSubmenu=this.navList[3].submenu[1].submenu,this.sideSubmenuSelect=this.navList[3].submenu[1].submenu[1].title;break;case"主题审核":this.sideSubmenu=this.navList[3].submenu[2].submenu,this.sideSubmenuSelect=this.navList[3].submenu[2].submenu[0].title;break;case"回复审核":this.sideSubmenu=this.navList[3].submenu[2].submenu,this.sideSubmenuSelect=this.navList[3].submenu[2].submenu[1].title;break;case"主题":this.sideSubmenu=this.navList[3].submenu[4].submenu,this.sideSubmenuSelect=this.navList[3].submenu[4].submenu[0].title;break;case"回复":this.sideSubmenu=this.navList[3].submenu[4].submenu,this.sideSubmenuSelect=this.navList[3].submenu[4].submenu[1].title;break;case"提现申请":this.sideSubmenu=this.navList[4].submenu[2].submenu,this.sideSubmenuSelect=this.navList[4].submenu[2].submenu[0].title;break;case"提现设置":this.sideSubmenu=this.navList[4].submenu[2].submenu,this.sideSubmenuSelect=this.navList[4].submenu[2].submenu[1].title;break;default:this.sideSubmenu=[],this.$message.error("当下没有侧边栏子菜单")}},quitClick:function(){localStorage.clear(),this.$router.push({path:"/admin/login"})}},created:function(){this.setDataStatus(),this.userName=s.default.getLItem("username")},watch:{$route:function(){this.setDataStatus()}}}},L5x9:function(e,i,t){},UEf0:function(e,i,t){"use strict";t.d(i,"a",(function(){return s})),t.d(i,"b",(function(){return n}));var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-container",{staticClass:"index-container-box"},[t("el-header",{staticClass:"index-header",attrs:{height:"80px"}},[t("h1",{staticClass:"index-header__icon"},[t("a",{attrs:{href:"/admin/home"}},[t("img",{attrs:{src:"/static-admin/images/admin-logo-x2.png",alt:"Logo"}})])]),e._v(" "),t("div",{staticClass:"index-header__nav"},[t("ul",{staticClass:"menu-demo"},e._l(e.navList,(function(i,s){return t("li",{key:s,staticClass:"menu-item",class:e.navSelect===i.name?"is-active":"",on:{click:function(t){return e.menuClick(i)}}},[e._v("\n          "+e._s(i.title)+"\n        ")])})),0)]),e._v(" "),t("div",{staticClass:"index-header__info-menu"},[t("span",[e._v("您好，"+e._s(e.userName))]),e._v(" "),t("span",{on:{click:e.quitClick}},[e._v(" [退出]")]),e._v(" "),t("span",{staticClass:"site-home"},[t("a",{attrs:{href:e.appConfig.baseUrl,target:"_blank"}},[e._v(e._s(e.$t("admin.siteHome")))])])])]),e._v(" "),t("el-container",{staticClass:"index-main-con"},[t("el-aside",{staticClass:"index-main-con__side",attrs:{width:"256px"}},[t("div",{staticClass:"index-main-con__side-title"},[t("span",[e._v(e._s(e.sideTitle))])]),e._v(" "),t("div",{staticClass:"index-main-con__side-list"},[t("ul",{staticClass:"index-side-ul"},e._l(e.sideList,(function(i){return t("li",{staticClass:"index-side-li",class:e.sideSelect===i.name?"is-active":"",on:{click:function(t){return e.sideClick(i)}}},[t("span",{staticClass:"iconfont",class:i.icon}),e._v(" "),t("span",[e._v(e._s(i.title))])])})),0)]),e._v(" "),t("div",{staticClass:"index-main-con__side-footer"},[t("p",[e._v("Powered by Discuz! Q")])])]),e._v(" "),t("el-main",{ref:"indexMainCon",staticClass:"index-main-con__main"},[t("div",{staticClass:"index-main-con__main-title"},[t("h1",[e._v(e._s(e.indexTitle))]),e._v(" "),t("div",{staticClass:"index-main-con__main-title__class"},[e.sideSubmenu.length>0?t("i"):e._e(),e._v(" "),e._l(e.sideSubmenu,(function(i,s){return t("span",{key:s,class:i.title===e.sideSubmenuSelect?"is-active":"",on:{click:function(t){return e.sideSubmenuClick(i.title)}}},[e._v(e._s(i.title))])}))],2)]),e._v(" "),t("div",{staticClass:"router-con"},[t("router-view")],1)])],1)],1)},n=[]},VzPW:function(e,i,t){"use strict";t.r(i);var s=t("UEf0"),n=t("Elsq");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);var u=t("KHd+"),h=Object(u.a)(n.default,s.a,s.b,!1,null,null,null);i.default=h.exports}}]);