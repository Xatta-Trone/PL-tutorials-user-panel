(window.webpackJsonp=window.webpackJsonp||[]).push([[36,13,14,16,20],{1102:function(e,t,r){"use strict";r.r(t);r(24),r(1),r(27),r(65),r(95),r(15),r(2),r(38),r(94);var n=r(738),o=r(799),c={layout:"content",middleware:"auth",components:{QrcodeVue:n.a,ChangePassword:o.default},head:function(){return{title:"Profile - PL Tutorials"}},data:function(){return{appUrl:"https://play.google.com/store/apps/details?id=com.pltutorials.plandroid",columns:["id","activity","label","created_at"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},headings:{id:"#",created_at:"Date",activity:"Activity type",label:"Activity"},requestFunction:function(data){var e=this;return this.$axios.get(this.url,{params:data}).catch((function(t){console.log("Err in datatble",t),e.getmessage("Err in datatble")}))}}}},methods:{getSearchString:function(e){var t,r;if(console.log(e),console.log("!search.includes",!e.includes("q=")),!e.includes("q="))return e;var n=e.split(",").filter(Boolean).map((function(e){return e.trim()})),q=n.find((function(e){return e.includes("q")})).split("=")[1],o=n.find((function(e){return e.includes("dept")})).split("=")[1],c=n.find((function(e){return e.includes("l_t")})).split("=")[1],l=n.find((function(e){return e.includes("content_type")})).split("=")[1],d=null===(t=n.find((function(e){return e.includes("course_slug")})))||void 0===t?void 0:t.split("=")[1],v=null===(r=n.find((function(e){return e.includes("course_title")})))||void 0===r?void 0:r.split("=")[1];console.log(n,q,o,c,d,v);var f="Searched";return""!==q&&(f+=" for "+q),f+=" ".concat(this.getDeptString(o,c,d,v)),l&&(f+=" :: content type: ".concat(l,".")),f},getDeptString:function(e,t,r,n){console.log(e,t,r,n);var o="";return e.length>0&&(o+="".concat(e)),t.length>0&&(o+="/".concat(t)),null!=r&&(o+="/".concat(r)),o=o.toUpperCase(),null!=n&&(o+=" ".concat(n)),o}}},l=r(35),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("CustomHeader",{attrs:{title:e.$auth.user.name,subtitle:"#"+e.$auth.user.student_id}}),e._v(" "),t("b-container",[t("b-row",[t("b-col",{attrs:{sm:"12"}},[t("div",{staticClass:"my-5"},[t("b-tabs",{attrs:{"content-class":"mt-3",justified:"",pills:""}},[t("b-tab",{attrs:{title:"Info",active:""}},[t("b-row",[t("b-col",[t("b-alert",{attrs:{show:"",variant:"primary"}},[t("strong",[e._v("Please refrain from sharing your account with others.")]),e._v(" "),t("br"),e._v("  Such activity may lead to permanent account suspension. The website constantly monitors all activities to prevent account sharing. You can see your activities from the "),t("strong",[e._v("Activity")]),e._v(" tab.")])],1)],1),e._v(" "),t("b-row",[t("b-col",{attrs:{sm:"6"}},[t("b-list-group",[t("b-list-group-item",[t("b",[e._v("Name:")]),e._v(" "+e._s(e.$auth.user.name))]),e._v(" "),t("b-list-group-item",[t("b",[e._v("Student ID:")]),e._v(" #"+e._s(e.$auth.user.student_id))]),e._v(" "),t("b-list-group-item",[t("b",[e._v("E-mail:")]),e._v("\n                      "+e._s(e.$auth.user.email))]),e._v(" "),t("b-list-group-item",[t("b",[e._v("User Letter:")]),e._v("\n                      "+e._s(e.$auth.user.user_letter))]),e._v(" "),t("b-list-group-item",[t("b",[e._v("Joined on:")]),e._v("\n                      "+e._s(e.formatDateToString(e.$auth.user.created_at)))])],1)],1),e._v(" "),t("b-col",{attrs:{sm:"6"}},[t("div",{staticClass:"text-center my-3"},[t("p",[e._v("\n                      Scan or click the link below to install our\n                      Android app.\n                    ")]),e._v(" "),t("qrcode-vue",{attrs:{value:e.appUrl,size:"150",level:"H",margin:"2"}}),e._v(" "),t("a",{attrs:{href:e.appUrl,target:"_blank"}},[t("img",{attrs:{src:r(636),height:"110"}})])],1)])],1)],1),e._v(" "),t("b-tab",{attrs:{title:"Change password",lazy:""}},[t("change-password")],1),e._v(" "),t("b-tab",{attrs:{title:"Activity",lazy:""}},[t("v-server-table",{attrs:{url:"user-activity",columns:e.columns,options:e.options},scopedSlots:e._u([{key:"created_at",fn:function(r){var n=r.row;return t("div",{staticClass:"d-flex justify-content-around"},[e._v("\n                  "+e._s(e.formatDateToString(n.created_at))+"\n                ")])}},{key:"id",fn:function(r){var n=r.row;return t("div",{},[e._v("\n                  "+e._s(e.hashCode(n.id.toString()))+"\n                ")])}},{key:"label",fn:function(r){var n=r.row;return t("div",{},["searched"==n.activity?t("div",[e._v(e._s(e.getSearchString(n.label)))]):e._e(),e._v(" "),"searched"!=n.activity?t("div",[e._v(e._s(n.label))]):e._e()])}}])})],1),e._v(" "),t("b-tab",{attrs:{title:"Devices",lazy:""}},[t("LoginHistory")],1),e._v(" "),t("b-tab",{attrs:{title:"Saved Devices",lazy:""}},[t("saved-devices")],1)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomHeader:r(579).default,LoginHistory:r(800).default,SavedDevices:r(801).default})},577:function(e,t,r){var content=r(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(64).default)("9bfd0708",content,!0,{sourceMap:!1})},578:function(e,t,r){"use strict";r.r(t);var n={components:{CubeShadow:r(595).a}},o=(r(587),r(35)),component=Object(o.a)(n,(function(){return(0,this._self._c)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);t.default=component.exports},579:function(e,t,r){"use strict";r.r(t);var n={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},o=(r(582),r(35)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section_padding hero_title_section"},[t("b-container",{attrs:{fluid:""}},[t("b-row",{staticClass:"text-center tr-bg"},[t("b-col",{staticClass:"header-div"},[t("h3",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title.toUpperCase()))]),e._v(" "),t("span"),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v(e._s(e.subtitle))])])],1)],1)],1)}),[],!1,null,"34911b7e",null);t.default=component.exports},580:function(e,t,r){var content=r(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(64).default)("0e6929ba",content,!0,{sourceMap:!1})},582:function(e,t,r){"use strict";r(577)},583:function(e,t,r){var n=r(63),o=r(581),c=r(584),l=r(585),d=n((function(i){return i[1]})),v=o(c),f=o(l);d.push([e.i,".hero_title_section[data-v-34911b7e]{background-attachment:fixed;background-color:#333;background-image:url("+v+");background-position:bottom;background-size:cover;position:relative}body.dark-mode .hero_title_section[data-v-34911b7e]{background-image:url("+f+')}.hero_title_section[data-v-34911b7e]:before{background:#000;content:"";height:100%;left:0;opacity:.6;position:absolute;top:0;width:100%}.hero_title_section[data-v-34911b7e]{color:#fff;font-size:30px;padding:150px 0 100px;text-transform:uppercase}.hero_title_section h3[data-v-34911b7e]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-34911b7e]{background:#17a2b8;border-radius:3px;display:inline-block;height:5px;margin:0 0 10px;width:45%}.hero_title_section p[data-v-34911b7e]{margin:0}.section_padding[data-v-34911b7e]{padding:150px 0 100px}',""]),d.locals={},e.exports=d},584:function(e,t,r){e.exports=r.p+"img/pencil.135d51e.jpg"},585:function(e,t,r){e.exports=r.p+"img/dark-bg4.406e3d0.jpg"},587:function(e,t,r){"use strict";r(580)},588:function(e,t,r){var n=r(63)((function(i){return i[1]}));n.push([e.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),n.locals={},e.exports=n},602:function(e,t,r){"use strict";r.r(t);r(16);var n={props:["servererrors","chkkey"]},o=r(35),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",e._l(e.servererrors,(function(r,i){return t("span",{key:i},[t("span",{directives:[{name:"show",rawName:"v-show",value:r[0]==e.chkkey,expression:"error[0] == chkkey"}],staticClass:"text-danger"},[e._v("\n      "+e._s(r[1].join(",")))])])})),0)}),[],!1,null,null,null);t.default=component.exports},636:function(e,t,r){e.exports=r.p+"img/googleplay.f902960.png"},799:function(e,t,r){"use strict";r.r(t);r(307);var n=r(602),o=r(600),c={layout:"content",components:{CustomError:n.default},data:function(){return{form:{old_password:"",password:"",password_confirmation:""},btntxt:"Change password",loading:!1}},mounted:function(){},methods:{submit:function(){var e=this;if(this.loading=!0,console.log("submit!"),this.$v.$touch(),this.serverErrors=[],this.$v.$invalid)return this.loading=!1,this.$toast.error("Fill-up the required fields!!");var t=this;this.$axios.post("reset-user-password",this.form).then((function(r){t.loading=!1,console.log(r),r.data.hasOwnProperty("message")&&e.getmessage(r.data.message),e.$v.$reset(),e.form.password_confirmation="",e.form.password="",e.form.old_password="",r.data.hasKey("status")&&e.getmessage()})).catch((function(r){t.loading=!1,console.log("Errrr",r),r.response.data.hasOwnProperty("message")&&e.getmessage(r.response.data.message),r.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(r.response.data.errors))}))}},validations:{form:{old_password:{required:o.required},password:{required:o.required,minLength:Object(o.minLength)(8)},password_confirmation:{sameAsPassword:Object(o.sameAs)("password")}}}},l=r(35),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("b-row",{staticClass:"text-left py-1 my-5"},[t("b-col",{attrs:{sm:"12"}},[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Old password ::","label-for":"input-1"}},[t("b-form-input",{attrs:{id:"input-1",type:"password",placeholder:"Old password"},model:{value:e.form.old_password,callback:function(t){e.$set(e.form,"old_password",t)},expression:"form.old_password"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{state:!e.$v.form.old_password.$error}},[e._v("\n            Old password is required.\n          ")]),e._v(" "),t("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"old_password"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-2",label:"New password ::","label-for":"input-2"}},[t("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"New password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{state:!e.$v.form.password.$error}},[e._v("\n            New password is required & must be minimum 8 characters.\n          ")]),e._v(" "),t("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"password"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-3",label:"Retype new password ::","label-for":"input-3"}},[t("b-form-input",{attrs:{id:"input-3",type:"password",placeholder:"Retype new password"},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{state:!e.$v.form.password_confirmation.$error}},[e._v("\n            Passwords do not match.\n          ")]),e._v(" "),t("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"password_confirmation"}})],1),e._v(" "),t("b-button",{staticClass:"text-white w-100",attrs:{type:"submit",variant:"primary",disabled:e.loading}},[e._v(e._s(e.btntxt))])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},800:function(e,t,r){"use strict";r.r(t);r(1),r(27);var n={data:function(){return{columns:["id","user_ip","location","device","updated_at"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},headings:{id:"#",updated_at:"Last Active",user_ip:"IP Address"},requestFunction:function(data){var e=this;return this.$axios.get(this.url,{params:data}).catch((function(t){console.log("Err in datatble",t),e.getmessage("Err in datatble")}))}}}}},o=r(35),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("v-server-table",{attrs:{url:"user-logins",columns:e.columns,options:e.options},scopedSlots:e._u([{key:"updated_at",fn:function(r){var n=r.row;return t("div",{staticClass:"d-flex justify-content-around"},[e._v("\n    "+e._s(e.formatDateToString(n.updated_at))+"\n  ")])}},{key:"id",fn:function(r){var n=r.row;return t("div",{},[e._v("\n    "+e._s(e.hashCode(n.id.toString()))+"\n  ")])}}])})}),[],!1,null,null,null);t.default=component.exports},801:function(e,t,r){"use strict";r.r(t);r(1),r(94),r(307);var n=r(198),o={data:function(){return{deviceResponse:null,fingerprint:null,isInSavedDevice:!1,isInAsyncCall:!1}},computed:{deviceCheck:function(){return this.$store.state.device}},mounted:function(){this.visitorId(),this.getDevice()},methods:{getDevice:function(){var e=this,t=this;t.isInAsyncCall=!0,this.$axios.get("user-devices").then((function(r){(console.log(r),e.deviceResponse=r.data,r.data.devices)&&(null!=r.data.devices.find((function(e){return e.fingerprint==t.fingerprint}))?(t.isInSavedDevice=!0,t.$store.commit("device/addCurrentDevice")):t.isInSavedDevice=!1);r.data.hasOwnProperty("message")&&e.getmessage(r.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){t.isInAsyncCall=!1}))},addDevice:function(){var e=this,t=this,data={fingerprint:t.fingerprint,platform:"web"};t.isInAsyncCall=!0,this.$axios.post("user-devices",data).then((function(r){console.log(r),"true"==r.data.status&&e.getDevice(),r.data.hasOwnProperty("message")&&t.getmessage(r.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&"DEVICE_ALREADY_ADDED"==e.response.data.message&&t.$store.commit("device/addCurrentDevice"),e.response.data.hasOwnProperty("message")&&t.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){t.isInAsyncCall=!1}))},removeDevice:function(e){var t=this;if(confirm("Are you sure ?")){var r=this;r.isInAsyncCall=!0,this.$axios.delete("user-devices/".concat(e)).then((function(e){console.log(e),"true"==e.data.status&&(t.getDevice(),r.$store.commit("device/removeCurrentDevice")),e.data.hasOwnProperty("message")&&t.getmessage(e.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){r.isInAsyncCall=!1}))}},addGuest:function(){this.$store.commit("device/addGuest")},removeGuest:function(){this.$store.commit("device/removeGuestDevice")},visitorId:function(){console.log("Visitor Id called");var e=localStorage.getItem("deviceId_alt");if(e)this.fingerprint=e;else{var t=(new n.ClientJS).getFingerprint();this.fingerprint=t,localStorage.removeItem("deviceId"),localStorage.setItem("deviceId_alt",t)}}}},c=r(35),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("b-row",[t("b-alert",{staticClass:"w-100",attrs:{show:"",variant:"secondary"}},[e._v("\n      You can manage your regular devices from here.\n    ")]),e._v(" "),t("b-alert",{staticClass:"w-100",attrs:{show:e.deviceCheck.isGuest,variant:"danger"}},[e._v("You are using this device as guest. If you wish\n      to use this device\n      regularly then please add this device in the saved device list")]),e._v(" "),e.deviceResponse?t("h3",{staticClass:"text-center w-100"},[e._v("\n      Max allowed device: "+e._s(e.deviceResponse.max_allowed_device)+"\n    ")]):e._e(),e._v(" "),t("hr")],1),e._v(" "),e.isInAsyncCall?[t("b-row",{staticClass:"my-5"},[t("b-col",[t("loading")],1)],1)]:[t("b-row",[e.deviceResponse&&e.deviceResponse.devices.length>0?t("b-list-group",e._l(e.deviceResponse.devices,(function(r){return t("b-list-group-item",{key:r.id,staticClass:"my-3"},[t("b-badge",{attrs:{variant:"primary"}},[e._v(e._s(r.ip_address))]),e._v(" "),t("b-badge",{directives:[{name:"show",rawName:"v-show",value:r.fingerprint==e.fingerprint,expression:"device.fingerprint == fingerprint"}],attrs:{variant:"danger"}},[e._v("This device")]),e._v("\n          "+e._s(r.device)+" "),t("br"),e._v("\n\n          "+e._s(r.location)),t("br"),e._v("\n          Last updated: "+e._s(e.formatDateToString(r.updated_at))),t("br"),e._v(" "),t("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.removeDevice(r.id)}}},[e._v("Remove device")])],1)})),1):t("b-alert",{staticClass:"w-100 mx-auto text-center",attrs:{show:"",variant:"info"}},[e._v("No device registered")])],1),e._v(" "),e.isInSavedDevice?e._e():t("b-row",{staticClass:"my-3"},[t("b-button",{attrs:{disabled:e.isInAsyncCall,variant:"primary"},on:{click:e.addDevice}},[e._v("Add this device")])],1)],e._v(" "),t("b-row",{staticClass:"my-3"},[e.deviceCheck.isGuest||e.deviceCheck.hasCheckedDevice?e._e():t("b-button",{attrs:{variant:"primary"},on:{click:e.addGuest}},[e._v("Use as\n      guest")]),e._v(" "),e.deviceCheck.isGuest?t("b-button",{attrs:{variant:"danger"},on:{click:e.removeGuest}},[e._v("Remove as guest")]):e._e()],1)],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:r(578).default})}}]);