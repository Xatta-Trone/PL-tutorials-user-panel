(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1075:function(t,e,o){"use strict";o(792)},1076:function(t,e,o){var r=o(63)((function(i){return i[1]}));r.push([t.i,".card-title{overflow:hidden;text-overflow:ellipsis!important}",""]),r.locals={},t.exports=r},1112:function(t,e,o){"use strict";o.r(e);o(24);var r=o(22),n=(o(59),o(13),o(1),o(199),o(11),o(18),o(149),o(578)),c=o(802),l={layout:"content",middleware:"auth",head:function(){return{title:"".concat(this.$nuxt.$route.params.dept.toUpperCase(),"::").concat(this.$nuxt.$route.params.levelterm.toUpperCase(),"::").concat(this.$nuxt.$route.params.course.toUpperCase(),"- PL Tutorials")}},data:function(){return{course:null,loading:!1,currentCourse:null,selectedPost:null,postKey:(new Date).getTime()}},computed:{deviceCheck:function(){return this.$store.state.device}},mounted:function(){console.log(this.$nuxt.$route),this.getData()},components:{Loading:n.default,GoogleDriveFolder:c.default},methods:{getData:function(){var t=this,e=this;e.loading=!0,this.$axios.get("departments/"+this.$nuxt.$route.params.dept+"/"+this.$nuxt.$route.params.levelterm+"/"+this.$nuxt.$route.params.course).then((function(e){t.course=e.data.data,e.data.data.active_posts.length>0&&(t.currentCourse=e.data.data.active_posts[0].id,t.setActive(e.data.data.active_posts[0])),console.log(e.data)})).catch((function(t){console.log(t.response),e.getmessage(t.response.data.message)})).finally((function(){return t.loading=!1}))},handleClick:function(data){this.saveActivity({activity:"downloaded",model_type:data.post_type,model_id:data.id,causer_id:this.$auth.loggedIn?this.$auth.user.id:0,label:data.name,additionalData:"".concat(this.$nuxt.$route.params.dept,"/").concat(this.$nuxt.$route.params.levelterm,"/").concat(this.$nuxt.$route.params.course)}),window.open(data.link,"_blank").focus()},handleGdrive:function(data){this.saveActivity({activity:"downloaded",model_type:data.post_type,model_id:data.id,causer_id:this.$auth.loggedIn?this.$auth.user.id:0,label:data.name,additionalData:"".concat(this.$nuxt.$route.params.dept,"/").concat(this.$nuxt.$route.params.levelterm,"/").concat(this.$nuxt.$route.params.course)})},setActive:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.selectedPost!=t){o.next=2;break}return o.abrupt("return");case 2:return e.selectedPost=t,e.postKey++,o.next=6,e.$router.replace({query:{course:t.id}});case 6:case"end":return o.stop()}}),o)})))()},getFolderIdFromUrl:function(t){return t.match(/[-\w]{25,}/)}}},d=(o(1075),o(35)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.deviceCheck.hasCheckedDevice?[e("CustomHeader",{attrs:{title:t.$nuxt.$route.params.course,subtitle:t.course?t.course.course_name:"Course Name"}}),t._v(" "),e("b-container",[t.loading?[e("b-row",{staticClass:"my-5"},[e("b-col",[e("loading")],1)],1)]:[t.course&&t.course.active_posts.length>0?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{xs:"12",sm:"2"}},[e("b-list-group",t._l(t.course.active_posts,(function(o){return e("b-list-group-item",{key:o.id,staticStyle:{cursor:"pointer"},attrs:{active:o==t.selectedPost},on:{click:function(e){return t.setActive(o)}}},[t._v(t._s(o.name))])})),1)],1),t._v(" "),e("b-col",{attrs:{sm:"10"}},[e("google-drive-folder",{directives:[{name:"show",rawName:"v-show",value:t.selectedPost,expression:"selectedPost"}],key:t.postKey,attrs:{post:t.selectedPost}})],1)],1):e("b-row",{staticClass:"mt-5 mb-5 text-center",attrs:{"align-self":"center"}},[e("b-col",[e("h2",[t._v("No content found.")])])],1)]],2)]:[e("Devicecheck")]],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Devicecheck:o(596).default,CustomHeader:o(579).default,Loading:o(578).default,GoogleDriveFolder:o(802).default})},792:function(t,e,o){var content=o(1076);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("d55a7476",content,!0,{sourceMap:!1})}}]);