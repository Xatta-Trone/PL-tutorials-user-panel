(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5,7,10],{1044:function(e,t,n){"use strict";n.r(t);n(1);var r=n(576),o={layout:"content",middleware:["auth"],data:function(){return{department:null,loading:!1}},components:{Loading:n(529).default,Devicecheck:r.default},mounted:function(){this.getData()},computed:{deviceCheck:function(){return this.$store.state.device}},methods:{getData:function(){var e=this,t=this;t.loading=!0,this.$axios.get("departments/"+this.$nuxt.$route.params.dept).then((function(t){e.department=t.data.data,console.log(t.data)})).catch((function(e){console.log(e.response),t.getmessage(e.response.data.message)})).finally((function(){return e.loading=!1}))}}},c=n(28),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.deviceCheck.hasCheckedDevice?[n("CustomHeader",{attrs:{title:e.$nuxt.$route.params.dept,subtitle:e.department?e.department.name:""}}),e._v(" "),n("b-container",[e.loading?[n("b-row",{staticClass:"my-5"},[n("b-col",[n("loading")],1)],1)]:[e.department&&e.department.levelterms.length?n("b-row",{staticClass:"my-4"},e._l(e.department.levelterms,(function(t){return n("b-col",{key:t.id,attrs:{cols:"3"}},[n("b-card",{staticClass:"my-2",attrs:{title:t.slug}},[n("b-card-text",[e._v("\n                "+e._s(t.name)+"\n              ")]),e._v(" "),n("b-button",{attrs:{to:e.$nuxt.$route.params.dept+"/"+t.slug,variant:"primary"}},[e._v("Browse")])],1)],1)})),1):e._e(),e._v(" "),e.department&&0==e.department.levelterms.length?n("b-row",{staticClass:"mt-5 text-center",attrs:{"align-self":"center"}},[n("b-col",[n("h2",[e._v("No level-term found.")])])],1):e._e()]],2)]:[n("Devicecheck")]],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Devicecheck:n(576).default,CustomHeader:n(531).default,Loading:n(529).default})},528:function(e,t,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("fc039b70",content,!0,{sourceMap:!1})},529:function(e,t,n){"use strict";n.r(t);var r={components:{CubeShadow:n(570).a}},o=(n(537),n(28)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);t.default=component.exports},530:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},531:function(e,t,n){"use strict";n.r(t);var r={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},o=(n(533),n(28)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section_padding hero_title_section"},[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"text-center tr-bg"},[n("b-col",{staticClass:"header-div"},[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title.toUpperCase()))]),e._v(" "),n("span"),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v(e._s(e.subtitle))])])],1)],1)],1)}),[],!1,null,"75383320",null);t.default=component.exports},532:function(e,t,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("055e323c",content,!0,{sourceMap:!1})},533:function(e,t,n){"use strict";n(528)},534:function(e,t,n){var r=n(59),o=n(530),c=n(535),l=r(!1),d=o(c);l.push([e.i,".hero_title_section[data-v-75383320]{background-image:url("+d+');background-size:cover;background-position:bottom;background-attachment:fixed;background-color:#333;position:relative}.hero_title_section[data-v-75383320]:before{position:absolute;left:0;top:0;width:100%;height:100%;content:"";background:#000;opacity:.6}.hero_title_section[data-v-75383320]{font-size:30px;padding:150px 0 100px;color:#fff;text-transform:uppercase}.hero_title_section h3[data-v-75383320]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-75383320]{display:inline-block;height:5px;width:45%;background:#17a2b8;margin:0 0 10px;border-radius:3px}.hero_title_section p[data-v-75383320]{margin:0}.section_padding[data-v-75383320]{padding:150px 0 100px}',""]),e.exports=l},535:function(e,t,n){e.exports=n.p+"img/pencil.135d51e.jpg"},537:function(e,t,n){"use strict";n(532)},538:function(e,t,n){var r=n(59)(!1);r.push([e.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),e.exports=r},542:function(e,t,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("0c7ff9f2",content,!0,{sourceMap:!1})},574:function(e,t,n){"use strict";n(542)},575:function(e,t,n){var r=n(59)(!1);r.push([e.i,"h4[data-v-6b7669e4]{letter-spacing:normal}",""]),e.exports=r},576:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(54),n(1),n(281),n(529)),c=n(179),l={layout:"content",middleware:"auth",beforeRouteEnter:function(e,t,n){n((function(e){console.log("router guard",t),n()}))},data:function(){return{deviceResponse:null,fingerprint:null,isInSavedDevice:!1,isInAsyncCall:!1}},components:{Loading:o.default},mounted:function(){this.visitorId()},methods:{addDevice:function(){var e=this,data={fingerprint:e.fingerprint,platform:"web"};e.isInAsyncCall=!0,this.$axios.post("user-devices",data).then((function(t){console.log(t),"true"==t.data.status&&e.$store.commit("device/addCurrentDevice"),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message)})).catch((function(t){console.log(t),t.response.data.hasOwnProperty("message")&&"DEVICE_ALREADY_ADDED"==t.response.data.message&&e.$store.commit("device/addCurrentDevice"),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(t.response.data.errors))})).finally((function(){e.isInAsyncCall=!1}))},addGuest:function(){this.$store.commit("device/addGuest")},removeGuest:function(){this.$store.commit("device/removeGuestDevice")},visitorId:function(){var e=this;console.log("function called"),console.log(localStorage.getItem("visitorid"));var t=c.a.load();Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t;case 2:return r=n.sent,n.next=5,r.get();case 5:o=n.sent,c=o.visitorId,e.fingerprint=c;case 8:case"end":return n.stop()}}),n)})))()}}},d=(n(574),n(28)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CustomHeader",{attrs:{title:"Device check"}}),e._v(" "),n("b-container",[e.isInAsyncCall?[n("b-row",{staticClass:"my-5"},[n("b-col",[n("loading")],1)],1)]:[n("b-row",{staticClass:"my-3 text-center"},[n("b-col",[n("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("Attention !! This device is not in your saved device")]),e._v(" "),n("h4",{staticClass:"my-3"},[e._v("For regular use")]),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:e.addDevice}},[e._v("Add to saved devices")]),e._v(" "),n("h4",{staticClass:"my-3"},[e._v("For temporary use")]),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:e.addGuest}},[e._v("Continue as a guest")]),e._v(" "),n("b-alert",{staticClass:"my-3",attrs:{show:"",variant:"info"}},[e._v("If you are using this device frequently and is not in your saved\n            devices lest, your account may get restricted by the system\n            automatically.")]),e._v(" "),n("b-alert",{staticClass:"my-3",attrs:{show:"",variant:"danger"}},[e._v("You can manage your saved devices form your\n            "),n("b-link",{attrs:{to:"/profile"}},[e._v("profile page in\n              "),n("b-badge",{attrs:{variant:"primary"}},[e._v("Saved devices")]),e._v(" tab\n            ")],1)],1)],1)],1)]],2)],1)}),[],!1,null,"6b7669e4",null);t.default=component.exports;installComponents(component,{CustomHeader:n(531).default,Loading:n(529).default})}}]);