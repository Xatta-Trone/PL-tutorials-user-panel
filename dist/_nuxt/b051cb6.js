(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,7,10],{1053:function(e,t,n){"use strict";n.r(t);n(14),n(1);var r={layout:"content",middleware:"auth",head:function(){return{title:"Department ".concat(this.$nuxt.$route.params.dept.toUpperCase(),"::").concat(this.$nuxt.$route.params.levelterm.toUpperCase(),"- PL Tutorials")}},data:function(){return{levelterms:null,loading:!1}},computed:{deviceCheck:function(){return this.$store.state.device}},mounted:function(){this.getData()},components:{Loading:n(532).default},methods:{getData:function(){var e=this,t=this;t.loading=!0,this.$axios.get("departments/"+this.$nuxt.$route.params.dept+"/"+this.$nuxt.$route.params.levelterm).then((function(t){e.levelterms=t.data.data,console.log(t.data)})).catch((function(e){console.log(e.response),t.getmessage(e.response.data.message)})).finally((function(){return e.loading=!1}))}}},o=n(28),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.deviceCheck.hasCheckedDevice?[n("CustomHeader",{attrs:{title:e.$nuxt.$route.params.dept,subtitle:e.levelterms?e.levelterms.name:e.$nuxt.$route.params.levelterm}}),e._v(" "),n("b-container",[e.loading?[n("b-row",{staticClass:"my-5"},[n("b-col",[n("loading")],1)],1)]:[e.levelterms?n("b-row",{staticClass:"my-4"},e._l(e.levelterms.course,(function(t){return n("b-col",{key:t.id,staticClass:"my-2",attrs:{cols:"3"}},[n("b-card",{staticClass:"h-100",attrs:{title:t.slug.toUpperCase()}},[n("b-card-text",[e._v("\n                "+e._s(t.course_name)+"\n              ")]),e._v(" "),n("b-button",{attrs:{to:e.$nuxt.$route.params.levelterm+"/"+t.slug,variant:"primary"}},[e._v("Click here")])],1)],1)})),1):n("b-row",{staticClass:"mt-5 text-center",attrs:{"align-self":"center"}},[n("b-col",[n("h2",[e._v("No course found.")])])],1)]],2)]:[n("Devicecheck")]],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Devicecheck:n(580).default,CustomHeader:n(534).default,Loading:n(532).default})},531:function(e,t,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("fa6bab82",content,!0,{sourceMap:!1})},532:function(e,t,n){"use strict";n.r(t);var r={components:{CubeShadow:n(574).a}},o=(n(541),n(28)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);t.default=component.exports},533:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},534:function(e,t,n){"use strict";n.r(t);var r={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},o=(n(536),n(28)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section_padding hero_title_section"},[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"text-center tr-bg"},[n("b-col",{staticClass:"header-div"},[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title.toUpperCase()))]),e._v(" "),n("span"),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v(e._s(e.subtitle))])])],1)],1)],1)}),[],!1,null,"34911b7e",null);t.default=component.exports},535:function(e,t,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("055e323c",content,!0,{sourceMap:!1})},536:function(e,t,n){"use strict";n(531)},537:function(e,t,n){var r=n(59),o=n(533),c=n(538),l=n(539),d=r(!1),v=o(c),m=o(l);d.push([e.i,".hero_title_section[data-v-34911b7e]{background-image:url("+v+");background-size:cover;background-position:bottom;background-attachment:fixed;background-color:#333;position:relative}body.dark-mode .hero_title_section[data-v-34911b7e]{background-image:url("+m+')}.hero_title_section[data-v-34911b7e]:before{position:absolute;left:0;top:0;width:100%;height:100%;content:"";background:#000;opacity:.6}.hero_title_section[data-v-34911b7e]{font-size:30px;padding:150px 0 100px;color:#fff;text-transform:uppercase}.hero_title_section h3[data-v-34911b7e]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-34911b7e]{display:inline-block;height:5px;width:45%;background:#17a2b8;margin:0 0 10px;border-radius:3px}.hero_title_section p[data-v-34911b7e]{margin:0}.section_padding[data-v-34911b7e]{padding:150px 0 100px}',""]),e.exports=d},538:function(e,t,n){e.exports=n.p+"img/pencil.135d51e.jpg"},539:function(e,t,n){e.exports=n.p+"img/dark-bg4.406e3d0.jpg"},541:function(e,t,n){"use strict";n(535)},542:function(e,t,n){var r=n(59)(!1);r.push([e.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),e.exports=r},546:function(e,t,n){var content=n(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("619f089a",content,!0,{sourceMap:!1})},578:function(e,t,n){"use strict";n(546)},579:function(e,t,n){var r=n(59)(!1);r.push([e.i,"h4[data-v-9e440bec]{letter-spacing:normal}",""]),e.exports=r},580:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(54),n(1),n(281),n(107),n(532)),c=n(179),l={layout:"content",middleware:"auth",beforeRouteEnter:function(e,t,n){n((function(e){console.log("router guard",t),n()}))},data:function(){return{deviceResponse:null,fingerprint:null,isInSavedDevice:!1,isInAsyncCall:!1}},components:{Loading:o.default},mounted:function(){this.visitorId(),this.getDevice()},methods:{addDevice:function(){var e=this,data={fingerprint:e.fingerprint,platform:"web"};e.isInAsyncCall=!0,this.$axios.post("user-devices",data).then((function(t){console.log(t),"true"==t.data.status&&e.$store.commit("device/addCurrentDevice"),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message)})).catch((function(t){console.log(t),t.response.data.hasOwnProperty("message")&&"DEVICE_ALREADY_ADDED"==t.response.data.message&&e.$store.commit("device/addCurrentDevice"),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(t.response.data.errors))})).finally((function(){e.isInAsyncCall=!1}))},getDevice:function(){var e=this,t=this;t.isInAsyncCall=!0,this.$axios.get("user-devices").then((function(n){(console.log(n),e.deviceResponse=n.data,n.data.devices)&&(null!=n.data.devices.find((function(e){return e.fingerprint==t.fingerprint}))?(t.isInSavedDevice=!0,t.$store.commit("device/addCurrentDevice")):t.isInSavedDevice=!1);n.data.hasOwnProperty("message")&&e.getmessage(n.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){t.isInAsyncCall=!1}))},addGuest:function(){this.$store.commit("device/addGuest")},removeGuest:function(){this.$store.commit("device/removeGuestDevice")},visitorId:function(){var e=this;console.log("function called"),console.log(localStorage.getItem("visitorid"));var t=c.a.load();Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t;case 2:return r=n.sent,n.next=5,r.get();case 5:o=n.sent,c=o.visitorId,e.fingerprint=c;case 8:case"end":return n.stop()}}),n)})))()},removeDevice:function(e){var t=this;if(confirm("Are you sure ?")){var n=this;n.isInAsyncCall=!0,this.$axios.delete("user-devices/".concat(e)).then((function(e){console.log(e),"true"==e.data.status&&(t.getDevice(),n.$store.commit("device/removeCurrentDevice")),e.data.hasOwnProperty("message")&&t.getmessage(e.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){n.isInAsyncCall=!1}))}}}},d=(n(578),n(28)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CustomHeader",{attrs:{title:"Device check"}}),e._v(" "),n("b-container",[e.isInAsyncCall?[n("b-row",{staticClass:"my-5"},[n("b-col",[n("loading")],1)],1)]:[n("b-row",{staticClass:"my-3 text-center"},[n("b-col",[n("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("Attention !! This device is not in your saved device")]),e._v(" "),n("h4",{staticClass:"my-3"},[e._v("For regular use")]),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:e.addDevice}},[e._v("Add to saved devices")]),e._v(" "),n("h4",{staticClass:"my-3"},[e._v("For temporary use")]),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:e.addGuest}},[e._v("Continue as a guest")]),e._v(" "),n("b-alert",{staticClass:"my-3",attrs:{show:"",variant:"info"}},[e._v("If you are using this device frequently and is not in your saved\n            devices lest, your account may get restricted by the system\n            automatically.")]),e._v(" "),n("b-alert",{staticClass:"my-3",attrs:{show:"",variant:"danger"}},[e._v("You can manage your saved devices form your\n            "),n("b-link",{attrs:{to:"/profile"}},[e._v("profile page in\n              "),n("b-badge",{attrs:{variant:"primary"}},[e._v("Saved devices")]),e._v(" tab\n            ")],1)],1)],1)],1),e._v(" "),n("b-row",[e.deviceResponse&&e.deviceResponse.devices.length>0?n("b-list-group",e._l(e.deviceResponse.devices,(function(t){return n("b-list-group-item",{key:t.id,staticClass:"my-3"},[n("b-badge",{attrs:{variant:"primary"}},[e._v(e._s(t.ip_address))]),e._v(" "),n("b-badge",{directives:[{name:"show",rawName:"v-show",value:t.fingerprint==e.fingerprint,expression:"device.fingerprint == fingerprint"}],attrs:{variant:"danger"}},[e._v("This device")]),e._v("\n          "+e._s(t.device)+" "),n("br"),e._v("\n\n          "+e._s(t.location)),n("br"),e._v("\n          Last updated: "+e._s(e.formatDateToString(t.updated_at))),n("br"),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:function(n){return e.removeDevice(t.id)}}},[e._v("Remove device")])],1)})),1):n("b-alert",{staticClass:"w-100 mx-auto text-center ",attrs:{show:"",variant:"info"}},[e._v("No device registered")])],1)]],2)],1)}),[],!1,null,"9e440bec",null);t.default=component.exports;installComponents(component,{CustomHeader:n(534).default,Loading:n(532).default})}}]);