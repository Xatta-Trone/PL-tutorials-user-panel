(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1044:function(t,e,r){"use strict";r.r(e);var n=r(22),o=(r(55),r(180)),l={layout:"auth",middleware:"guest",head:function(){return{title:"Login - PL Tutorials"}},data:function(){return{form:{email:"",password:"",fingerprint:""},btntxt:"Log in",errMsg:"",isInAsyncCall:!1}},mounted:function(){this.visitorId()},methods:{userLogin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isInAsyncCall=!0,t.errMsg="",t.visitorId(),e.prev=3,t.btntxt="Logging in.....",e.next=7,t.$auth.loginWith("laravelSanctum",{data:t.form}).then((function(e){t.btntxt="Login successful"}));case 7:e.sent,e.next=21;break;case 10:if(e.prev=10,e.t0=e.catch(3),t.btntxt="Log in",console.log(e.t0),!(e.t0.response.status=401)){e.next=19;break}return t.errMsg=e.t0.response.data.message,e.abrupt("return",t.$toast.error(e.t0.response.data.message));case 19:t.errMsg="Something went wrong! :(",t.getmessage("Something went wrong");case 21:return e.prev=21,t.isInAsyncCall=!1,e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[3,10,21,24]])})))()},visitorId:function(){console.log("Visitor Id called");var t=this,e=null,r=localStorage.getItem("deviceId");if(r)t.form.fingerprint=r,console.log("visitor id login page",r);else{var l=o.a.load();Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l;case 2:return n=r.sent,r.next=5,n.get();case 5:o=r.sent,c=o.visitorId,e=c,t.form.fingerprint=e,localStorage.setItem("deviceId",c);case 10:case"end":return r.stop()}}),r)})))()}}}},c=(r(841),r(28)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"vh-100",attrs:{fluid:""}},[r("b-row",{staticClass:"h-100 overflow-hidden",attrs:{"align-v":"center","align-h":"center"}},[r("b-col",{staticClass:"overflow-x p-5",attrs:{md:"6"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[r("h3",[t._v("Login to "),r("strong",{staticClass:"text-primary"},[t._v("PL Tutorials")])]),t._v(" "),r("b-form-group",{attrs:{id:"input-group-1",label:"Email address ::","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter email address",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"Password ::","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",placeholder:"Enter your password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("b-alert",{directives:[{name:"show",rawName:"v-show",value:""!=t.errMsg,expression:"errMsg != ''"}],attrs:{variant:"danger",dismissible:"",fade:"",show:""}},[t._v("\n          "+t._s(t.errMsg)+"\n        ")]),t._v(" "),r("b-button",{staticClass:"text-white",attrs:{type:"submit",disabled:t.isInAsyncCall,variant:"primary"}},[t._v(t._s(t.btntxt))]),t._v(" "),r("b-form-group",{staticClass:"mt-5"},[r("b-row",[r("b-col",{attrs:{sm:"4"}},[r("nuxt-link",{staticClass:"ml-auto d-inline-block text-dark text-left",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("b-link",{attrs:{href:"/register"}})],1),t._v(" "),r("b-col",{attrs:{sm:"4"}},[r("nuxt-link",{staticClass:"ml-auto d-inline-block text-dark text-left",attrs:{to:"/register"}},[t._v("Create new account")]),t._v(" "),r("b-link",{attrs:{href:"/register"}})],1),t._v(" "),r("b-col",{staticClass:"text-right",attrs:{sm:"4"}},[r("nuxt-link",{staticClass:"ml-auto d-inline-block text-danger text-left",attrs:{to:"/request-password"}},[t._v("forgot your password ?")])],1)],1)],1)],1)],1),t._v(" "),r("b-col",{staticClass:"bg-img h-100 d-none d-md-block"})],1)],1)}),[],!1,null,"6fce1725",null);e.default=component.exports},533:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},690:function(t,e,r){var content=r(842);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("4f87a975",content,!0,{sourceMap:!1})},841:function(t,e,r){"use strict";r(690)},842:function(t,e,r){var n=r(60),o=r(533),l=r(843),c=n(!1),d=o(l);c.push([t.i,".bg-img[data-v-6fce1725]{background-image:url("+d+");background-position:50%;background-size:75%;background-repeat:no-repeat;background-color:hsla(0,0%,98.4%,.72157)}",""]),t.exports=c},843:function(t,e,r){t.exports=r.p+"img/play-store.9e97d39.svg"}}]);