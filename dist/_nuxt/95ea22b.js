(window.webpackJsonp=window.webpackJsonp||[]).push([[31,7,12],{1096:function(t,e,o){"use strict";o.r(e);o(1);var n={layout:"content",head:function(){return{title:"Frequently asked questions - PL Tutorials"}},components:{Loading:o(578).default},data:function(){return{faqs:[],loading:!1}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.loading=!0,this.$axios.get("faqs").then((function(e){t.faqs=e.data.data,console.log(e.data)})).catch((function(t){console.log(t),alert(t.response.status)})).finally((function(){return t.loading=!1}))}}},r=o(35),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("CustomHeader",{attrs:{title:"FAQ"}}),t._v(" "),e("b-container",[t.loading?[e("b-row",{staticClass:"my-5"},[e("b-col",[e("loading")],1)],1)]:[e("b-row",{staticClass:"my-4",attrs:{"align-self":"center"}},[t.faqs.length?e("b-col",{attrs:{sm:"12"}},t._l(t.faqs,(function(o){return e("div",{key:o.id,staticClass:"accordion",attrs:{role:"tablist"}},[e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+o.id,expression:"'accordion-' + faq.id"}],attrs:{block:"",variant:"info"}},[t._v(t._s(o.title))])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-"+o.id,accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[e("span",{domProps:{innerHTML:t._s(o.body)}})])],1)],1)],1)],1)})),0):e("b-col",{staticClass:"text-center",attrs:{"align-self":"center"}},[e("h2",[t._v("No FAQ found!!")])])],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomHeader:o(579).default,Loading:o(578).default})},577:function(t,e,o){var content=o(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("9bfd0708",content,!0,{sourceMap:!1})},578:function(t,e,o){"use strict";o.r(e);var n={components:{CubeShadow:o(595).a}},r=(o(587),o(35)),component=Object(r.a)(n,(function(){return(0,this._self._c)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);e.default=component.exports},579:function(t,e,o){"use strict";o.r(e);var n={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},r=(o(582),o(35)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section_padding hero_title_section"},[e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"text-center tr-bg"},[e("b-col",{staticClass:"header-div"},[e("h3",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title.toUpperCase()))]),t._v(" "),e("span"),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v(t._s(t.subtitle))])])],1)],1)],1)}),[],!1,null,"34911b7e",null);e.default=component.exports},580:function(t,e,o){var content=o(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("0e6929ba",content,!0,{sourceMap:!1})},581:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},582:function(t,e,o){"use strict";o(577)},583:function(t,e,o){var n=o(63),r=o(581),l=o(584),c=o(585),d=n((function(i){return i[1]})),f=r(l),h=r(c);d.push([t.i,".hero_title_section[data-v-34911b7e]{background-attachment:fixed;background-color:#333;background-image:url("+f+");background-position:bottom;background-size:cover;position:relative}body.dark-mode .hero_title_section[data-v-34911b7e]{background-image:url("+h+')}.hero_title_section[data-v-34911b7e]:before{background:#000;content:"";height:100%;left:0;opacity:.6;position:absolute;top:0;width:100%}.hero_title_section[data-v-34911b7e]{color:#fff;font-size:30px;padding:150px 0 100px;text-transform:uppercase}.hero_title_section h3[data-v-34911b7e]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-34911b7e]{background:#17a2b8;border-radius:3px;display:inline-block;height:5px;margin:0 0 10px;width:45%}.hero_title_section p[data-v-34911b7e]{margin:0}.section_padding[data-v-34911b7e]{padding:150px 0 100px}',""]),d.locals={},t.exports=d},584:function(t,e,o){t.exports=o.p+"img/pencil.135d51e.jpg"},585:function(t,e,o){t.exports=o.p+"img/dark-bg4.406e3d0.jpg"},587:function(t,e,o){"use strict";o(580)},588:function(t,e,o){var n=o(63)((function(i){return i[1]}));n.push([t.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),n.locals={},t.exports=n}}]);