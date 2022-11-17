(window.webpackJsonp=window.webpackJsonp||[]).push([[16,13],{529:function(e,t,n){"use strict";n.r(t);var r={components:{CubeShadow:n(546).a}},o=(n(538),n(29)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);t.default=component.exports},531:function(e,t,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("055e323c",content,!0,{sourceMap:!1})},538:function(e,t,n){"use strict";n(531)},539:function(e,t,n){var r=n(59)(!1);r.push([e.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),e.exports=r},751:function(e,t,n){"use strict";n.r(t);var r=n(23),o=(n(61),n(1),n(108),n(278),n(578)),c={data:function(){return{deviceResponse:null,fingerprint:null,isInSavedDevice:!1,isInAsyncCall:!1}},computed:{deviceCheck:function(){return this.$store.state.device}},mounted:function(){this.visitorId(),this.getDevice()},methods:{getDevice:function(){var e=this,t=this;t.isInAsyncCall=!0,this.$axios.get("user-devices").then((function(n){(console.log(n),e.deviceResponse=n.data,n.data.devices)&&(null!=n.data.devices.find((function(e){return e.fingerprint==t.fingerprint}))?(t.isInSavedDevice=!0,t.$store.commit("device/addCurrentDevice")):t.isInSavedDevice=!1);n.data.hasOwnProperty("message")&&e.getmessage(n.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){t.isInAsyncCall=!1}))},addDevice:function(){var e=this,t=this,data={fingerprint:t.fingerprint,platform:"web"};t.isInAsyncCall=!0,this.$axios.post("user-devices",data).then((function(n){console.log(n),"true"==n.data.status&&e.getDevice(),n.data.hasOwnProperty("message")&&t.getmessage(n.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&"DEVICE_ALREADY_ADDED"==e.response.data.message&&t.$store.commit("device/addCurrentDevice"),e.response.data.hasOwnProperty("message")&&t.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){t.isInAsyncCall=!1}))},removeDevice:function(e){var t=this;if(confirm("Are you sure ?")){var n=this;n.isInAsyncCall=!0,this.$axios.delete("user-devices/".concat(e)).then((function(e){console.log(e),"true"==e.data.status&&(t.getDevice(),n.$store.commit("device/removeCurrentDevice")),e.data.hasOwnProperty("message")&&t.getmessage(e.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){n.isInAsyncCall=!1}))}},addGuest:function(){this.$store.commit("device/addGuest")},removeGuest:function(){this.$store.commit("device/removeGuestDevice")},visitorId:function(){console.log("Visitor Id called");var e=this,t=null,n=localStorage.getItem("deviceId");if(n)e.fingerprint=n;else{var c=o.a.load();Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c;case 2:return r=n.sent,n.next=5,r.get();case 5:o=n.sent,d=o.visitorId,t=d,e.fingerprint=t,localStorage.setItem("deviceId",d);case 10:case"end":return n.stop()}}),n)})))()}}}},d=n(29),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",[n("b-alert",{staticClass:"w-100",attrs:{show:"",variant:"secondary"}},[e._v("\n      You can manage your regular devices from here.\n    ")]),e._v(" "),n("b-alert",{staticClass:"w-100",attrs:{show:e.deviceCheck.isGuest,variant:"danger"}},[e._v("You are using this device as guest. If you wish to use this device\n      regularly then please add this device in the saved device list")]),e._v(" "),e.deviceResponse?n("h3",{staticClass:"text-center w-100"},[e._v("\n      Max allowed device: "+e._s(e.deviceResponse.max_allowed_device)+"\n    ")]):e._e(),e._v(" "),n("hr")],1),e._v(" "),e.isInAsyncCall?[n("b-row",{staticClass:"my-5"},[n("b-col",[n("loading")],1)],1)]:[n("b-row",[e.deviceResponse&&e.deviceResponse.devices.length>0?n("b-list-group",e._l(e.deviceResponse.devices,(function(t){return n("b-list-group-item",{key:t.id,staticClass:"my-3"},[n("b-badge",{attrs:{variant:"primary"}},[e._v(e._s(t.ip_address))]),e._v(" "),n("b-badge",{directives:[{name:"show",rawName:"v-show",value:t.fingerprint==e.fingerprint,expression:"device.fingerprint == fingerprint"}],attrs:{variant:"danger"}},[e._v("This device")]),e._v("\n          "+e._s(t.device)+" "),n("br"),e._v("\n\n          "+e._s(t.location)),n("br"),e._v("\n          Last updated: "+e._s(e.formatDateToString(t.updated_at))),n("br"),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:function(n){return e.removeDevice(t.id)}}},[e._v("Remove device")])],1)})),1):n("b-alert",{staticClass:"w-100 mx-auto text-center",attrs:{show:"",variant:"info"}},[e._v("No device registered")])],1),e._v(" "),e.isInSavedDevice?e._e():n("b-row",{staticClass:"my-3"},[n("b-button",{attrs:{disabled:e.isInAsyncCall,variant:"primary"},on:{click:e.addDevice}},[e._v("Add this device")])],1)],e._v(" "),n("b-row",{staticClass:"my-3"},[e.deviceCheck.isGuest||e.deviceCheck.hasCheckedDevice?e._e():n("b-button",{attrs:{variant:"primary"},on:{click:e.addGuest}},[e._v("Use as guest")]),e._v(" "),e.deviceCheck.isGuest?n("b-button",{attrs:{variant:"danger"},on:{click:e.removeGuest}},[e._v("Remove as guest")]):e._e()],1)],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(529).default})}}]);