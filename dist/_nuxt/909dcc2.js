(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5,10],{1033:function(e,t,n){"use strict";n.r(t);var o=n(22),r=(n(54),n(1),n(281),n(530)),c=n(179),l={layout:"content",middleware:"auth",head:function(){return{title:"Add Device - PL Tutorials"}},beforeRouteEnter:function(e,t,n){n((function(e){console.log("router guard",t),n()}))},data:function(){return{deviceResponse:null,fingerprint:null,isInSavedDevice:!1,isInAsyncCall:!1}},components:{Loading:r.default},mounted:function(){this.visitorId()},methods:{addDevice:function(){var e=this,data={fingerprint:e.fingerprint,platform:"web"};e.isInAsyncCall=!0,this.$axios.post("user-devices",data).then((function(t){console.log(t),"true"==t.data.status&&e.$store.commit("device/addCurrentDevice"),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message)})).catch((function(t){console.log(t),t.response.data.hasOwnProperty("message")&&"DEVICE_ALREADY_ADDED"==t.response.data.message&&e.$store.commit("device/addCurrentDevice"),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(t.response.data.errors))})).finally((function(){e.isInAsyncCall=!1}))},addGuest:function(){this.$store.commit("device/addGuest")},removeGuest:function(){this.$store.commit("device/removeGuestDevice")},visitorId:function(){var e=this;console.log("function called"),console.log(localStorage.getItem("visitorid"));var t=c.a.load();Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t;case 2:return o=n.sent,n.next=5,o.get();case 5:r=n.sent,c=r.visitorId,e.fingerprint=c;case 8:case"end":return n.stop()}}),n)})))()}}},d=(n(829),n(28)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CustomHeader",{attrs:{title:"Device check"}}),e._v(" "),n("b-container",[e.isInAsyncCall?[n("b-row",{staticClass:"my-5"},[n("b-col",[n("loading")],1)],1)]:[n("b-row",{staticClass:"my-3 text-center"},[n("b-col",[n("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("Attention !! This device is not in your saved device")]),e._v(" "),n("h4",{staticClass:"my-3"},[e._v("For regular use")]),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:e.addDevice}},[e._v("Add to saved devices")]),e._v(" "),n("h4",{staticClass:"my-3"},[e._v("For temporary use")]),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:e.addGuest}},[e._v("Continue as a guest")]),e._v(" "),n("b-alert",{staticClass:"my-3",attrs:{show:"",variant:"info"}},[e._v("If you are using this device frequently and is not in your saved\n            devices lest, your account may get restricted by the system\n            automatically.")])],1)],1)]],2)],1)}),[],!1,null,"5975e678",null);t.default=component.exports;installComponents(component,{CustomHeader:n(532).default,Loading:n(530).default})},529:function(e,t,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("333b3254",content,!0,{sourceMap:!1})},530:function(e,t,n){"use strict";n.r(t);var o={components:{CubeShadow:n(571).a}},r=(n(538),n(28)),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);t.default=component.exports},531:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},532:function(e,t,n){"use strict";n.r(t);var o={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},r=(n(534),n(28)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section_padding hero_title_section"},[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"text-center tr-bg"},[n("b-col",{staticClass:"header-div"},[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title.toUpperCase()))]),e._v(" "),n("span"),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v(e._s(e.subtitle))])])],1)],1)],1)}),[],!1,null,"75383320",null);t.default=component.exports},533:function(e,t,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("5e358558",content,!0,{sourceMap:!1})},534:function(e,t,n){"use strict";n(529)},535:function(e,t,n){var o=n(59),r=n(531),c=n(536),l=o(!1),d=r(c);l.push([e.i,".hero_title_section[data-v-75383320]{background-image:url("+d+');background-size:cover;background-position:bottom;background-attachment:fixed;background-color:#333;position:relative}.hero_title_section[data-v-75383320]:before{position:absolute;left:0;top:0;width:100%;height:100%;content:"";background:#000;opacity:.6}.hero_title_section[data-v-75383320]{font-size:30px;padding:150px 0 100px;color:#fff;text-transform:uppercase}.hero_title_section h3[data-v-75383320]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-75383320]{display:inline-block;height:5px;width:45%;background:#17a2b8;margin:0 0 10px;border-radius:3px}.hero_title_section p[data-v-75383320]{margin:0}.section_padding[data-v-75383320]{padding:150px 0 100px}',""]),e.exports=l},536:function(e,t,n){e.exports=n.p+"img/pencil.135d51e.jpg"},538:function(e,t,n){"use strict";n(533)},539:function(e,t,n){var o=n(59)(!1);o.push([e.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),e.exports=o},683:function(e,t,n){var content=n(830);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("2a12c389",content,!0,{sourceMap:!1})},829:function(e,t,n){"use strict";n(683)},830:function(e,t,n){var o=n(59)(!1);o.push([e.i,"h4[data-v-5975e678]{letter-spacing:normal}",""]),e.exports=o}}]);