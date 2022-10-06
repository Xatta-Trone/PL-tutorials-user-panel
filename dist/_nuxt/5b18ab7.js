/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(547))&&n.__esModule?n:{default:n};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===f(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===f(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},529:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},545:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return B.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return L.default}});var o=E(r(546)),f=E(r(549)),l=E(r(550)),c=E(r(551)),d=E(r(552)),h=E(r(553)),v=E(r(554)),m=E(r(555)),y=E(r(556)),P=E(r(557)),w=E(r(558)),C=E(r(559)),_=E(r(560)),L=E(r(561)),O=E(r(562)),A=E(r(563)),x=E(r(564)),M=E(r(565)),B=E(r(566)),j=E(r(567)),k=E(r(568)),S=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=D(t);if(r&&r.has(e))return r.get(e);var o={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var desc=f?Object.getOwnPropertyDescriptor(e,l):null;desc&&(desc.get||desc.set)?Object.defineProperty(o,l,desc):o[l]=e[l]}o.default=e,r&&r.set(e,o);return o}(r(526));function D(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(D=function(e){return e?r:t})(e)}function E(e){return e&&e.__esModule?e:{default:e}}t.helpers=S},546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(526).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},547:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(548).withParams:r(279).withParams;t.default=n}).call(this,r(133))},548:function(e,t,r){"use strict";(function(e){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(44))},549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(526).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},550:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(526).regex)("numeric",/^[0-9]*$/);t.default=n},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},552:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(526).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);t.default=n},553:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(f)}));t.default=o;var f=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},554:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},557:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},560:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},561:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(526).regex)("url",/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},562:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},563:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},565:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(526);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},567:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(526).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(526).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},841:function(e,t,r){"use strict";var n=1,o=2,f=4,l=8;function c(data){this.mode=f,this.data=data}c.prototype={getLength:function(e){return this.data.length},write:function(e){for(var i=0;i<this.data.length;i++)e.put(this.data.charCodeAt(i),8)}};var d=c,h={L:1,M:0,Q:3,H:2};function v(e,t){this.totalCount=e,this.dataCount=t}v.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],v.getRSBlocks=function(e,t){var r=v.getRsBlockTable(e,t);if(null==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var f=r[3*i+0],l=r[3*i+1],c=r[3*i+2],d=0;d<f;d++)o.push(new v(l,c));return o},v.getRsBlockTable=function(e,t){switch(t){case h.L:return v.RS_BLOCK_TABLE[4*(e-1)+0];case h.M:return v.RS_BLOCK_TABLE[4*(e-1)+1];case h.Q:return v.RS_BLOCK_TABLE[4*(e-1)+2];case h.H:return v.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var m=v;function y(){this.buffer=new Array,this.length=0}y.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var i=0;i<t;i++)this.putBit(1==(e>>>t-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var P=y,w={glog:function(e){if(e<1)throw new Error("glog("+e+")");return w.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return w.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)w.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)w.EXP_TABLE[i]=w.EXP_TABLE[i-4]^w.EXP_TABLE[i-5]^w.EXP_TABLE[i-6]^w.EXP_TABLE[i-8];for(i=0;i<255;i++)w.LOG_TABLE[w.EXP_TABLE[i]]=i;var C=w;function _(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=new Array(e.length-r+t);for(var i=0;i<e.length-r;i++)this.num[i]=e[i+r]}_.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),i=0;i<this.getLength();i++)for(var r=0;r<e.getLength();r++)t[i+r]^=C.gexp(C.glog(this.get(i))+C.glog(e.get(r)));return new _(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=C.glog(this.get(0))-C.glog(e.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<e.getLength();i++)r[i]^=C.gexp(C.glog(e.get(i))+t);return new _(r,0).mod(e)}};var L=_,O=0,A=1,x=2,M=3,B=4,j=5,k=6,S=7,D={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(data){for(var e=data<<10;D.getBCHDigit(e)-D.getBCHDigit(D.G15)>=0;)e^=D.G15<<D.getBCHDigit(e)-D.getBCHDigit(D.G15);return(data<<10|e)^D.G15_MASK},getBCHTypeNumber:function(data){for(var e=data<<12;D.getBCHDigit(e)-D.getBCHDigit(D.G18)>=0;)e^=D.G18<<D.getBCHDigit(e)-D.getBCHDigit(D.G18);return data<<12|e},getBCHDigit:function(data){for(var e=0;0!=data;)e++,data>>>=1;return e},getPatternPosition:function(e){return D.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,i,t){switch(e){case O:return(i+t)%2==0;case A:return i%2==0;case x:return t%3==0;case M:return(i+t)%3==0;case B:return(Math.floor(i/2)+Math.floor(t/3))%2==0;case j:return i*t%2+i*t%3==0;case k:return(i*t%2+i*t%3)%2==0;case S:return(i*t%3+(i+t)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var a=new L([1],0),i=0;i<e;i++)a=a.multiply(new L([1,C.gexp(i)],0));return a},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case n:return 10;case o:return 9;case f:case l:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case n:return 12;case o:return 11;case f:return 16;case l:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case n:return 14;case o:return 13;case f:return 16;case l:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var col=0;col<t;col++){for(var o=0,f=e.isDark(n,col),l=-1;l<=1;l++)if(!(n+l<0||t<=n+l))for(var c=-1;c<=1;c++)col+c<0||t<=col+c||0==l&&0==c||f==e.isDark(n+l,col+c)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<t-1;n++)for(col=0;col<t-1;col++){var d=0;e.isDark(n,col)&&d++,e.isDark(n+1,col)&&d++,e.isDark(n,col+1)&&d++,e.isDark(n+1,col+1)&&d++,0!=d&&4!=d||(r+=3)}for(n=0;n<t;n++)for(col=0;col<t-6;col++)e.isDark(n,col)&&!e.isDark(n,col+1)&&e.isDark(n,col+2)&&e.isDark(n,col+3)&&e.isDark(n,col+4)&&!e.isDark(n,col+5)&&e.isDark(n,col+6)&&(r+=40);for(col=0;col<t;col++)for(n=0;n<t-6;n++)e.isDark(n,col)&&!e.isDark(n+1,col)&&e.isDark(n+2,col)&&e.isDark(n+3,col)&&e.isDark(n+4,col)&&!e.isDark(n+5,col)&&e.isDark(n+6,col)&&(r+=40);var h=0;for(col=0;col<t;col++)for(n=0;n<t;n++)e.isDark(n,col)&&h++;return r+=10*(Math.abs(100*h/t/t-50)/5)}},E=D;function T(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var N=T.prototype;N.addData=function(data){var e=new d(data);this.dataList.push(e),this.dataCache=null},N.isDark=function(e,col){if(e<0||this.moduleCount<=e||col<0||this.moduleCount<=col)throw new Error(e+","+col);return this.modules[e][col]},N.getModuleCount=function(){return this.moduleCount},N.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=m.getRSBlocks(e,this.errorCorrectLevel),r=new P,n=0,i=0;i<t.length;i++)n+=t[i].dataCount;for(i=0;i<this.dataList.length;i++){var data=this.dataList[i];r.put(data.mode,4),r.put(data.getLength(),E.getLengthInBits(data.mode,e)),data.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},N.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++)this.modules[r][col]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=T.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},N.setupPositionProbePattern=function(e,col){for(var t=-1;t<=7;t++)if(!(e+t<=-1||this.moduleCount<=e+t))for(var r=-1;r<=7;r++)col+r<=-1||this.moduleCount<=col+r||(this.modules[e+t][col+r]=0<=t&&t<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==t||6==t)||2<=t&&t<=4&&2<=r&&r<=4)},N.getBestMaskPattern=function(){for(var e=0,pattern=0,i=0;i<8;i++){this.makeImpl(!0,i);var t=E.getLostPoint(this);(0==i||e>t)&&(e=t,pattern=i)}return pattern},N.createMovieClip=function(e,t,r){var n=e.createEmptyMovieClip(t,r);this.make();for(var o=0;o<this.modules.length;o++)for(var f=1*o,col=0;col<this.modules[o].length;col++){var l=1*col;this.modules[o][col]&&(n.beginFill(0,100),n.moveTo(l,f),n.lineTo(l+1,f),n.lineTo(l+1,f+1),n.lineTo(l,f+1),n.endFill())}return n},N.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},N.setupPositionAdjustPattern=function(){for(var e=E.getPatternPosition(this.typeNumber),i=0;i<e.length;i++)for(var t=0;t<e.length;t++){var r=e[i],col=e[t];if(null==this.modules[r][col])for(var n=-2;n<=2;n++)for(var o=-2;o<=2;o++)this.modules[r+n][col+o]=-2==n||2==n||-2==o||2==o||0==n&&0==o}},N.setupTypeNumber=function(e){for(var t=E.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var r=!e&&1==(t>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=r}for(i=0;i<18;i++){r=!e&&1==(t>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=r}},N.setupTypeInfo=function(e,t){for(var data=this.errorCorrectLevel<<3|t,r=E.getBCHTypeInfo(data),i=0;i<15;i++){var n=!e&&1==(r>>i&1);i<6?this.modules[i][8]=n:i<8?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n}for(i=0;i<15;i++){n=!e&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=n:i<9?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!e},N.mapData=function(data,e){for(var t=-1,r=this.moduleCount-1,n=7,o=0,col=this.moduleCount-1;col>0;col-=2)for(6==col&&col--;;){for(var f=0;f<2;f++)if(null==this.modules[r][col-f]){var l=!1;o<data.length&&(l=1==(data[o]>>>n&1)),E.getMask(e,r,col-f)&&(l=!l),this.modules[r][col-f]=l,-1==--n&&(o++,n=7)}if((r+=t)<0||this.moduleCount<=r){r-=t,t=-t;break}}},T.PAD0=236,T.PAD1=17,T.createData=function(e,t,r){for(var n=m.getRSBlocks(e,t),o=new P,i=0;i<r.length;i++){var data=r[i];o.put(data.mode,4),o.put(data.getLength(),E.getLengthInBits(data.mode,e)),data.write(o)}var f=0;for(i=0;i<n.length;i++)f+=n[i].dataCount;if(o.getLengthInBits()>8*f)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*f+")");for(o.getLengthInBits()+4<=8*f&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*f||(o.put(T.PAD0,8),o.getLengthInBits()>=8*f));)o.put(T.PAD1,8);return T.createBytes(o,n)},T.createBytes=function(e,t){for(var r=0,n=0,o=0,f=new Array(t.length),l=new Array(t.length),c=0;c<t.length;c++){var d=t[c].dataCount,h=t[c].totalCount-d;n=Math.max(n,d),o=Math.max(o,h),f[c]=new Array(d);for(var i=0;i<f[c].length;i++)f[c][i]=255&e.buffer[i+r];r+=d;var v=E.getErrorCorrectPolynomial(h),m=new L(f[c],v.getLength()-1).mod(v);l[c]=new Array(v.getLength()-1);for(i=0;i<l[c].length;i++){var y=i+m.getLength()-l[c].length;l[c][i]=y>=0?m.get(y):0}}var P=0;for(i=0;i<t.length;i++)P+=t[i].totalCount;var data=new Array(P),w=0;for(i=0;i<n;i++)for(c=0;c<t.length;c++)i<f[c].length&&(data[w++]=f[c][i]);for(i=0;i<o;i++)for(c=0;c<t.length;c++)i<l[c].length&&(data[w++]=l[c][i]);return data};var I=T;var z={props:{value:{type:String,required:!0,default:""},className:{type:String,default:""},size:{type:[Number,String],default:100,validator:function(s){return!0!==isNaN(Number(s))}},level:{type:String,default:"L",validator:function(e){return["L","Q","M","H"].indexOf(e)>-1}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}},data:function(){return{numCells:0,fgPath:""}},updated:function(){this.render()},mounted:function(){this.render()},methods:{render:function(){var e=this.value,t=this.size,r=this.level,n=this.background,o=this.foreground,f=this.renderAs,l=t>>>0,c=new I(-1,h[r]);c.addData(function(e){for(var t="",i=0;i<e.length;i++){var r=e.charCodeAt(i);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(i++,r=65536+((1023&r)<<10|1023&e.charCodeAt(i)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}(e)),c.make();var d=c.modules,v=l/d.length,m=l/d.length,y=window.devicePixelRatio||1;if("svg"===f)this.numCells=d.length,this.fgPath=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[];return e.forEach((function(e,n){var o=null;e.forEach((function(f,l){if(!f&&null!==o)return r.push("M".concat(o+t," ").concat(n+t,"h").concat(l-o,"v1H").concat(o+t,"z")),void(o=null);if(l!==e.length-1)f&&null===o&&(o=l);else{if(!f)return;null===o?r.push("M".concat(l+t,",").concat(n+t," h1v1H").concat(l+t,"z")):r.push("M".concat(o+t,",").concat(n+t," h").concat(l+1-o,"v1H").concat(o+t,"z"))}}))})),r.join("")}(d);else{var canvas=this.$refs["qrcode-vue"],P=canvas.getContext("2d");canvas.height=canvas.width=l*y,P.scale(y,y),d.forEach((function(e,t){e.forEach((function(e,r){P.fillStyle=e?o:n;var f=Math.ceil((r+1)*v)-Math.floor(r*v),l=Math.ceil((t+1)*m)-Math.floor(t*m);P.fillRect(Math.round(r*v),Math.round(t*m),f,l)}))}))}}},render:function(e){var t=this.className,r=this.value,n=this.level,o=this.background,f=this.foreground,l=this.size,c=this.renderAs,d=this.numCells,h=this.fgPath;return e("div",{class:this.class||t,attrs:{value:r,level:n,background:o,foreground:f}},["svg"===c?e("svg",{attrs:{height:l,width:l,shapeRendering:"crispEdges",viewBox:"0 0 ".concat(d," ").concat(d)},style:{width:l+"px",height:l+"px"}},[e("path",{attrs:{fill:o,d:"M0,0 h".concat(d,"v").concat(d,"H0z")}}),e("path",{attrs:{fill:f,d:h}})]):e("canvas",{attrs:{height:l,width:l},style:{width:l+"px",height:l+"px"},ref:"qrcode-vue"},[])])}};t.a=z}}]);