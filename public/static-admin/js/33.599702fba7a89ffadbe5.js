(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"3JVg":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=d(a("4gYi")),i=d(a("Dt3C")),r=d(a("rWG0")),n=d(a("7qpD")),o=d(a("VVfg")),l=d(a("CKnL")),c=d(a("6NK7"));function d(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{searchUserName:"",keyWords:"",operator:"",categoriesList:[],categoriesListSelect:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},releaseTime:["",""],deleteTime:["",""],radioList:"",deleteStatusList:[],appleAll:!1,themeList:[],currentPaga:1,total:0,pageCount:1,submitForm:[],showViewer:!1,url:[],subLoading:!1,btnLoading:0}},methods:{titleIcon:function(e){return c.default.titleIcon(e)},imgShowClick:function(e,t){var a=this;this.url=[];var s=[];e.forEach((function(e){s.push(e._data.url)})),this.url.push(s[t]),s.forEach((function(e,s){s>t&&a.url.push(e)})),s.forEach((function(e,s){s<t&&a.url.push(e)})),this.showViewer=!0},closeViewer:function(){this.showViewer=!1},radioChange:function(e,t){switch(e){case"还原":this.submitForm[t].attributes.isDeleted=!1,this.submitForm[t].hardDelete=!1;break;case"删除":this.submitForm[t].hardDelete=!0}},searchClick:function(){this.currentPaga=1,this.getPostsList(1)},handleCurrentChange:function(e){document.getElementsByClassName("index-main-con__main")[0].scrollTop=0,o.default.setLItem("currentPag",e),this.currentPaga=e,this.getPostsList(e)},submitClick:function(){var e=this;this.subLoading=!0,this.deleteStatusList=[];var t=[];this.submitForm.forEach((function(a,s){a.hardDelete&&e.deleteStatusList.push(a.id),a.attributes.isDeleted||t.push(a.id)})),this.deleteStatusList.length>0&&this.deletePostsBatch(this.deleteStatusList.join(",")),t.length>0&&this.patchPostsBatch(this.submitForm)},allOperationsSubmit:function(e){var t=this;this.btnLoading=e;var a="";switch(e){case 1:this.submitForm.forEach((function(e,a){t.submitForm[a].attributes.isDeleted=!1})),this.patchPostsBatch(this.submitForm);break;case 2:this.submitForm.forEach((function(e,s){s<t.submitForm.length-1?a=a+e.id+",":a+=e.id})),this.deletePostsBatch(a)}},formatDate:function(e){return this.$dayjs(e).format("YYYY-MM-DD HH:mm")},getPostsList:function(e){var t=this;this.appFetch({url:"posts",method:"get",data:{include:["user","replyUser","thread","thread.category","thread.firstPost","deletedUser","lastDeletedLog","images"],"filter[isDeleted]":"yes","filter[username]":this.searchUserName,"page[number]":e,"page[size]":10,"filter[q]":this.keyWords,"filter[categoryId]":this.categoriesListSelect,"filter[deletedUsername]":this.operator,"filter[createdAtBegin]":this.releaseTime[0],"filter[createdAtEnd]":this.releaseTime[1],"filter[deletedAtBegin]":this.deleteTime[0],"filter[deletedAtEnd]":this.deleteTime[1],sort:"-deletedAt"}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.themeList=[],t.submitForm=[],t.themeList=e.readdata,t.total=e.meta.postCount,t.pageCount=e.meta.pageCount,t.themeList.forEach((function(e,a){t.submitForm.push({Select:"无",radio:"",type:"posts",id:e._data.id,attributes:{isDeleted:!0,message:""}})})))})).catch((function(e){}))},getCategories:function(){var e=this;this.appFetch({url:"categories",method:"get",data:{}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.categoriesList=[],t.data.forEach((function(t,a){e.categoriesList.push({name:t.attributes.name,id:t.id})})))})).catch((function(e){}))},patchPostsBatch:function(e){var t=this;this.appFetch({url:"postsBatch",method:"patch",data:{data:e}}).then((function(e){t.subLoading=!1,t.btnLoading=0,e.errors?t.$message.error(e.errors[0].code):e.meta&&e.data?t.$message.error("操作失败！"):(t.getPostsList(Number(o.default.getLItem("currentPag"))||1),t.$message({message:"操作成功",type:"success"}))})).catch((function(e){}))},patchPosts:function(e,t){var a=this;this.appFetch({url:"threads",method:"patch",splice:"/"+t,data:{data:e}}).then((function(e){a.subLoading=!1,a.btnLoading=0,e.errors?a.$message.error(e.errors[0].code):e.meta&&e.data?(a.checkedTheme=[],a.$message.error("操作失败！")):(a.getPostsList(Number(o.default.getLItem("currentPag"))||1),a.$message({message:"操作成功",type:"success"}))})).catch((function(e){}))},deletePostsBatch:function(e){var t=this;this.appFetch({url:"postBatch",method:"delete",splice:"/"+e}).then((function(e){t.subLoading=!1,t.btnLoading=0,e.meta?e.meta.forEach((function(e,a){setTimeout((function(){t.$message.error(e.code)}),500*(a+1))})):(t.getPostsList(Number(o.default.getLItem("currentPag"))||1),t.$message({message:"操作成功",type:"success"}))})).catch((function(e){}))},getCreated:function(e){e?this.getPostsList(1):this.getPostsList(Number(o.default.getLItem("currentPag"))||1)}},created:function(){this.getCategories()},beforeRouteEnter:function(e,t,a){a((function(a){e.name!==t.name&&null!==t.name?a.getCreated(!0):a.getCreated(!1)}))},components:{Card:s.default,ContArrange:i.default,Page:r.default,tableNoList:n.default,ElImageViewer:l.default}}},"6cHu":function(e,t,a){"use strict";a.r(t);var s=a("tYfD"),i=a.n(s);for(var r in s)"default"!==r&&function(e){a.d(t,e,(function(){return s[e]}))}(r);t.default=i.a},cj54:function(e,t,a){"use strict";a.r(t);var s=a("nDH5"),i=a("6cHu");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var n=a("KHd+"),o=Object(n.a)(i.default,s.a,s.b,!1,null,null,null);t.default=o.exports},nDH5:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recycle-bin-reply-box"},[a("div",{staticClass:"recycle-bin-reply-header"},[a("div",{staticClass:"recycle-bin-reply-header__section"},[a("div",{staticClass:"section-top"},[a("span",{staticClass:"cont-review-header__lf-title"},[e._v("作者：")]),e._v(" "),a("el-input",{attrs:{size:"medium",clearable:"",placeholder:"搜索作者"},model:{value:e.searchUserName,callback:function(t){e.searchUserName=t},expression:"searchUserName"}})],1),e._v(" "),a("div",[a("span",{staticClass:"cont-review-header__lf-title"},[e._v("搜索范围：")]),e._v(" "),a("el-select",{attrs:{clearable:"",size:"medium",placeholder:"选择主题分类"},model:{value:e.categoriesListSelect,callback:function(t){e.categoriesListSelect=t},expression:"categoriesListSelect"}},e._l(e.categoriesList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)]),e._v(" "),a("div",{staticClass:"recycle-bin-reply-header__section"},[a("div",{staticClass:"section-top"},[a("span",{staticClass:"cont-review-header__lf-title"},[e._v("内容包含：")]),e._v(" "),a("el-input",{attrs:{size:"medium",clearable:"",placeholder:"搜索内容包含"},model:{value:e.keyWords,callback:function(t){e.keyWords=t},expression:"keyWords"}})],1),e._v(" "),a("div",[a("span",{staticClass:"cont-review-header__lf-title"},[e._v("操作人：")]),e._v(" "),a("el-input",{attrs:{size:"medium",clearable:"",placeholder:"搜索操作人"},model:{value:e.operator,callback:function(t){e.operator=t},expression:"operator"}})],1)]),e._v(" "),a("div",{staticClass:"recycle-bin-reply-header__section"},[a("div",{staticClass:"section-top"},[a("span",{staticClass:"cont-review-header__lf-title time-title"},[e._v("发布时间范围：")]),e._v(" "),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange",align:"right","unlink-panels":"",size:"medium","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.releaseTime,callback:function(t){e.releaseTime=t},expression:"releaseTime"}})],1),e._v(" "),a("div",[a("span",{staticClass:"cont-review-header__lf-title time-title"},[e._v("删除时间范围：")]),e._v(" "),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange",align:"right","unlink-panels":"",size:"medium","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.deleteTime,callback:function(t){e.deleteTime=t},expression:"deleteTime"}})],1)]),e._v(" "),a("div",{staticClass:"recycle-bin-reply-header__section"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.searchClick}},[e._v("搜索")])],1)]),e._v(" "),a("div",{staticClass:"recycle-bin-reply-table"},[e._l(e.themeList,(function(t,s){return a("ContArrange",{key:t._data.id,attrs:{replyBy:t.user?t.user._data.username:"该用户被删除",themeName:1===t.thread._data.type?t.thread._data.title:t.thread.firstPost._data.content,titleIcon:e.titleIcon(t.thread._data),finalPost:e.formatDate(t._data.createdAt),deleTime:e.formatDate(t._data.deletedAt),ip:t._data.ip,userId:t.user?t.user._data.id:"该用户被删除"}},[a("div",{staticClass:"recycle-bin-reply-table__side",attrs:{slot:"side"},slot:"side"},[a("el-radio-group",{on:{change:function(t){return e.radioChange(t,s)}},model:{value:e.submitForm[s].radio,callback:function(t){e.$set(e.submitForm[s],"radio",t)},expression:"submitForm[index].radio"}},[a("el-radio",{attrs:{label:"还原"}}),e._v(" "),a("el-radio",{attrs:{label:"删除"}})],1)],1),e._v(" "),a("div",{staticClass:"recycle-bin-reply-table__main",attrs:{slot:"main"},slot:"main"},[a("a",{staticClass:"recycle-bin-reply-table__main__cont-text",attrs:{href:"/pages/topic/index?id="+t.thread._data.id,target:"_blank"},domProps:{innerHTML:e._s(t._data.contentHtml)}}),e._v(" "),a("div",{staticClass:"recycle-bin-reply-table__main__cont-imgs"},e._l(t.images,(function(s,i){return a("p",{key:i,staticClass:"recycle-bin-reply-table__main__cont-imgs-p"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s._data.thumbUrl,expression:"item._data.thumbUrl"}],attrs:{alt:s._data.fileName},on:{click:function(a){return e.imgShowClick(t.images,i)}}})])})),0)]),e._v(" "),a("div",{staticClass:"recycle-bin-reply-table__footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"recycle-bin-reply-table__footer-operator"},[a("span",[e._v("操作者：")]),e._v(" "),a("span",[e._v(e._s(t.deletedUser?t.deletedUser._data.username:"操作者被禁止或删除"))])]),e._v(" "),t.lastDeletedLog._data.message.length>0?a("div",{staticClass:"recycle-bin-reply-table__footer-reason"},[a("span",[e._v("原因：")]),e._v(" "),a("span",[e._v(e._s(t.deletedUser?t.lastDeletedLog._data.message:"操作者被禁止或删除"))])]):e._e()])])})),e._v(" "),e.showViewer?a("el-image-viewer",{attrs:{"on-close":e.closeViewer,"url-list":e.url}}):e._e(),e._v(" "),a("tableNoList",{directives:[{name:"show",rawName:"v-show",value:e.themeList.length<1,expression:"themeList.length < 1"}]}),e._v(" "),e.pageCount>1?a("Page",{attrs:{"current-page":e.currentPaga,"page-size":10,total:e.total},on:{"current-change":e.handleCurrentChange}}):e._e()],2),e._v(" "),a("div",{staticClass:"recycle-bin-reply-footer footer-btn"},[a("el-button",{attrs:{size:"small",loading:e.subLoading,type:"primary"},on:{click:e.submitClick}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"text",loading:1===e.btnLoading},on:{click:function(t){return e.allOperationsSubmit(1)}}},[e._v("全部还原")]),e._v(" "),a("el-button",{attrs:{type:"text",loading:2===e.btnLoading},on:{click:function(t){return e.allOperationsSubmit(2)}}},[e._v("全部删除")])],1)])},i=[]},tYfD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(a("QbLZ"));a("lL+3");var i=r(a("3JVg"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,s.default)({name:"recycle-bin-reply-view"},i.default)}}]);