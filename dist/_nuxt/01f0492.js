(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1032:function(t,e,o){"use strict";o(748)},1033:function(t,e,o){var n=o(60),r=o(536),c=o(1034),l=o(1035),d=n(!1),f=r(c),h=r(l);d.push([t.i,".hero-area[data-v-d66ce5b8]{position:relative;height:100vh;background:rgba(0,0,0,.5);background-image:url("+f+");background-size:cover;background-position:50%}body.dark-mode .hero-area[data-v-d66ce5b8]{background-image:url("+h+")}.center-content[data-v-d66ce5b8]{position:relative;z-index:9}#particles-js[data-v-d66ce5b8]{position:absolute;left:0;top:0;height:100%;width:100%;z-index:1}",""]),t.exports=d},1034:function(t,e,o){t.exports=o.p+"img/bg5.4078841.jpg"},1035:function(t,e,o){t.exports=o.p+"img/dark-bg3.70e0698.jpg"},1065:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{quote:null}},computed:{darkMode:function(){return this.$store.state.darkmode}},mounted:function(){this.getQuote()},methods:{getQuote:function(){var t=this;this.$axios.get("quote").then((function(e){t.quote=e.data.data,localStorage.setItem("quote",JSON.stringify(e.data.data))})).catch((function(t){console.log(t),alert(t.response.status)}))}}},r=(o(1032),o(29)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hero-area"},[o("b-container",[o("b-row",{staticClass:"vh-100 text-center",attrs:{"align-v":"center"}},[o("b-col",{staticClass:"center-content",attrs:{sm:"12"}},[o("h1",[t._v("\n          All you need is "),o("span",{staticClass:"text-primary"},[t._v("PL Tutorials")])]),t._v(" "),o("b-row",{staticClass:"text-center"},[o("b-col",{staticClass:"mt-4"},[t.$auth.loggedIn?o("b-button",{staticClass:"px-4 mr-2",attrs:{to:"/search",variant:"danger",size:"lg"}},[t._v("Search"),o("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:["fas","search"]}})],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():o("b-button",{staticClass:"px-4 mr-2",attrs:{to:"/register",variant:"danger",size:"lg"}},[t._v("Register"),o("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:["fas","user-plus"]}})],1),t._v(" "),t.$auth.loggedIn?o("b-button",{staticClass:"px-4 ml-2",attrs:{to:"/departments",variant:"primary",size:"lg"}},[t._v("Browse"),o("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:["fas","location-arrow"]}})],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():o("b-button",{staticClass:"px-4 ml-2",attrs:{to:"/login",variant:"primary",size:"lg"}},[t._v("Login"),o("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:["fas","sign-in-alt"]}})],1)],1)],1)],1)],1)],1),t._v(" "),o("vue-particles",{attrs:{shapeType:"triangle",linesColor:"#17A2B8",color:"#fff"}})],1)}),[],!1,null,"d66ce5b8",null);e.default=component.exports},536:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},748:function(t,e,o){var content=o(1033);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("6154ba8c",content,!0,{sourceMap:!1})}}]);