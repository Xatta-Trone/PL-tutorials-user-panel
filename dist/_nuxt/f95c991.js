(window.webpackJsonp=window.webpackJsonp||[]).push([[34,12],{1056:function(t,e,o){"use strict";o.r(e);o(11),o(19),o(892),o(1);var n=o(894),r=o.n(n),l=o(529),c={layout:"content",components:{"vue-markdown":r.a,Loading:l.default},head:function(){return{title:"".concat(this.$nuxt.$route.params.slug.replaceAll("-"," ").toLowerCase().replace(/\b\w/g,(function(s){return s.toUpperCase()}))," - PL Tutorials")}},data:function(){return{page:null,loading:!1}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("page/"+this.$nuxt.$route.params.slug).then((function(e){t.page=e.data.data,console.log(e.data)})).catch((function(t){console.log(t.response),e.getmessage(t.response.data.message)})).finally((function(){return t.loading=!1}))}}},d=o(29),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("CustomHeader",{attrs:{title:t.page?t.page.title:"Page"}}),t._v(" "),o("b-container",[t.loading?[o("b-row",{staticClass:"my-5"},[o("b-col",[o("loading")],1)],1)]:[o("b-row",{staticClass:"my-4"},[t.page?o("b-col",{attrs:{sm:"12"}},[o("vue-markdown",[t._v(t._s(t.page.body))])],1):o("b-col",{staticClass:"text-center"},[o("h4",[t._v("Page does not exists "),o("span",{staticClass:"text-danger"},[t._v(":(")])])])],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomHeader:o(530).default,Loading:o(529).default})},528:function(t,e,o){var content=o(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("fa6bab82",content,!0,{sourceMap:!1})},529:function(t,e,o){"use strict";o.r(e);var n={components:{CubeShadow:o(546).a}},r=(o(538),o(29)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);e.default=component.exports},530:function(t,e,o){"use strict";o.r(e);var n={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},r=(o(533),o(29)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section_padding hero_title_section"},[o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"text-center tr-bg"},[o("b-col",{staticClass:"header-div"},[o("h3",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title.toUpperCase()))]),t._v(" "),o("span"),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v(t._s(t.subtitle))])])],1)],1)],1)}),[],!1,null,"34911b7e",null);e.default=component.exports},531:function(t,e,o){var content=o(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("055e323c",content,!0,{sourceMap:!1})},533:function(t,e,o){"use strict";o(528)},534:function(t,e,o){var n=o(59),r=o(532),l=o(535),c=o(536),d=n(!1),f=r(l),h=r(c);d.push([t.i,".hero_title_section[data-v-34911b7e]{background-image:url("+f+");background-size:cover;background-position:bottom;background-attachment:fixed;background-color:#333;position:relative}body.dark-mode .hero_title_section[data-v-34911b7e]{background-image:url("+h+')}.hero_title_section[data-v-34911b7e]:before{position:absolute;left:0;top:0;width:100%;height:100%;content:"";background:#000;opacity:.6}.hero_title_section[data-v-34911b7e]{font-size:30px;padding:150px 0 100px;color:#fff;text-transform:uppercase}.hero_title_section h3[data-v-34911b7e]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-34911b7e]{display:inline-block;height:5px;width:45%;background:#17a2b8;margin:0 0 10px;border-radius:3px}.hero_title_section p[data-v-34911b7e]{margin:0}.section_padding[data-v-34911b7e]{padding:150px 0 100px}',""]),t.exports=d},535:function(t,e,o){t.exports=o.p+"img/pencil.135d51e.jpg"},536:function(t,e,o){t.exports=o.p+"img/dark-bg4.406e3d0.jpg"},538:function(t,e,o){"use strict";o(531)},539:function(t,e,o){var n=o(59)(!1);n.push([t.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),t.exports=n}}]);