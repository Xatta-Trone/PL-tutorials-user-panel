(window.webpackJsonp=window.webpackJsonp||[]).push([[33,5,17],{1043:function(e,t,r){"use strict";r.r(t);r(281);var n=r(573),o=r(546),l={layout:"content",components:{CustomError:n.default},middleware:"guest",head:function(){return{title:"Request password - PL Tutorials"}},data:function(){return{form:{email:""},errMsg:"",successMsg:"",loading:!1}},mounted:function(){},methods:{requestpassword:function(){var e=this;if(this.loading=!0,console.log("submit!"),this.$v.$touch(),this.serverErrors=[],this.errMsg="",this.successMsg="",this.$v.$invalid)return this.loading=!1,this.$toast.error("Filup the required fields!!");var t=this;this.$axios.post("request-password",this.form).then((function(r){t.loading=!1,e.successMsg=r.data.message,console.log(r),r.data.hasOwnProperty("message")&&e.getmessage(r.data.message),e.$v.$reset(),r.data.hasKey("status")&&e.getmessage()})).catch((function(r){t.loading=!1,console.log("Errrr",r),e.errMsg=r.response.data.message,r.response.data.hasOwnProperty("message")&&e.getmessage(r.response.data.message),r.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(r.response.data.errors))}))}},validations:{form:{email:{required:o.required,email:o.email}}}},f=r(28),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("CustomHeader",{attrs:{title:"Password Reset"}}),e._v(" "),r("div",[r("b-container",{staticClass:"pt-5"},[r("b-row",[r("b-col",{attrs:{col:"8"}},[r("div",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.requestpassword.apply(null,arguments)}}},[r("b-form-group",{attrs:{id:"input-group-2",label:"Email address ::","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"email",placeholder:"Enter your email address"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{state:!e.$v.form.email.$error}},[e._v("\n                  Email is required & must be a valid email address.\n                ")]),e._v(" "),e.errMsg?r("small",{staticClass:"text-danger"},[e._v(e._s(e.errMsg))]):e._e(),e._v(" "),e.successMsg?r("b-alert",{staticClass:"my-2",attrs:{show:"",variant:"success"}},[e._v("\n                    Please check your email (spam too) for the password reset link.\n                  ")]):e._e(),e._v(" "),r("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"email"}})],1),e._v(" "),r("b-button",{staticClass:"text-white w-100",attrs:{type:"submit",variant:"primary",disabled:e.loading}},[e._v(e._s(e.loading?"Requesting":"Request password reset link"))]),e._v(" "),r("b-form-group",{staticClass:"mt-5"},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("nuxt-link",{staticClass:"ml-auto d-inline-block text-danger text-left",attrs:{to:"/login"}},[e._v("Already have an account ? Log in")])],1),e._v(" "),r("b-col",{attrs:{md:"6"}},[r("nuxt-link",{staticClass:"ml-auto d-inline-block text-danger text-right",attrs:{to:"/register"}},[e._v("Don't have an account ? Register")])],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomHeader:r(532).default})},528:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(548))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=f;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!f(e)||t.test(e)}))}},529:function(e,t,r){var content=r(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("333b3254",content,!0,{sourceMap:!1})},531:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},532:function(e,t,r){"use strict";r.r(t);var n={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},o=(r(534),r(28)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"section_padding hero_title_section"},[r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"text-center tr-bg"},[r("b-col",{staticClass:"header-div"},[r("h3",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title.toUpperCase()))]),e._v(" "),r("span"),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v(e._s(e.subtitle))])])],1)],1)],1)}),[],!1,null,"75383320",null);t.default=component.exports},534:function(e,t,r){"use strict";r(529)},535:function(e,t,r){var n=r(59),o=r(531),l=r(536),f=n(!1),c=o(l);f.push([e.i,".hero_title_section[data-v-75383320]{background-image:url("+c+');background-size:cover;background-position:bottom;background-attachment:fixed;background-color:#333;position:relative}.hero_title_section[data-v-75383320]:before{position:absolute;left:0;top:0;width:100%;height:100%;content:"";background:#000;opacity:.6}.hero_title_section[data-v-75383320]{font-size:30px;padding:150px 0 100px;color:#fff;text-transform:uppercase}.hero_title_section h3[data-v-75383320]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-75383320]{display:inline-block;height:5px;width:45%;background:#17a2b8;margin:0 0 10px;border-radius:3px}.hero_title_section p[data-v-75383320]{margin:0}.section_padding[data-v-75383320]{padding:150px 0 100px}',""]),e.exports=f},536:function(e,t,r){e.exports=r.p+"img/pencil.135d51e.jpg"},546:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return j.default}});var o=D(r(547)),l=D(r(550)),f=D(r(551)),c=D(r(552)),d=D(r(553)),v=D(r(554)),m=D(r(555)),y=D(r(556)),h=D(r(557)),_=D(r(558)),x=D(r(559)),P=D(r(560)),w=D(r(561)),j=D(r(562)),O=D(r(563)),M=D(r(564)),k=D(r(565)),$=D(r(566)),S=D(r(567)),z=D(r(568)),A=D(r(569)),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=E(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var desc=l?Object.getOwnPropertyDescriptor(e,f):null;desc&&(desc.get||desc.set)?Object.defineProperty(o,f,desc):o[f]=e[f]}o.default=e,r&&r.set(e,o);return o}(r(528));function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(E=function(e){return e?r:t})(e)}function D(e){return e&&e.__esModule?e:{default:e}}t.helpers=C},547:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(528).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},548:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(549).withParams:r(282).withParams;t.default=n}).call(this,r(132))},549:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(43))},550:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(528).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(528).regex)("numeric",/^[0-9]*$/);t.default=n},552:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},553:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(528).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);t.default=n},554:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},557:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},560:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},561:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},562:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(528).regex)("url",/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},563:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},565:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},567:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(528);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(528).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(528).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},573:function(e,t,r){"use strict";r.r(t);var n={props:["servererrors","chkkey"]},o=r(28),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.servererrors,(function(t,i){return r("span",{key:i},[r("span",{directives:[{name:"show",rawName:"v-show",value:t[0]==e.chkkey,expression:"error[0] == chkkey"}],staticClass:"text-danger"},[e._v("\n      "+e._s(t[1].join(",")))])])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);