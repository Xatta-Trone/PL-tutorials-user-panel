(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1046:function(t,e,o){"use strict";o.r(e);o(282),o(11),o(134),o(1),o(3),o(19);var r=o(555),d={layout:"content",middleware:"auth",components:{TimeAgo:o(837).TimeAgo},data:function(){return{loading:!1,chatboxdisabled:!1,user:this.$nuxt.$auth.user,messages:[],currentmessage:{message:"",user_id:this.$nuxt.$auth.user.id}}},mounted:function(){var t=this,e=this.$nuxt.$auth.user.id;console.log(e,"============"),this.$echo.channel("chat-user-"+e).listen(".chat-msg",(function(e){var o=t.$el.querySelector("#chat-history");o.scrollTop=o.scrollHeight,console.log(e),null!=e.msg&&t.messages.push(e.msg)})),this.getMessages()},methods:{getMessages:function(){var t=this,e=this;e.$nuxt.$route.params.id;e.loading=!0,e.$axios.get("chats").then((function(t){e.loading=!1,console.log("chats========",t),e.messages=t.data})).catch((function(o){e.loading=!1,console.log("Errrr",o),o.response.data.hasOwnProperty("message")?t.getmessage(o.response.data.message):t.getmessage("")}))},submit:function(t){var e=this;if(13===t.keyCode&&t.shiftKey)console.log("shft enter!");else{if(console.log("submit!"),this.$v.$touch(),this.serverErrors=[],this.$v.$invalid)return this.$toast.error("Filup the required fields!!");var o=this;o.chatboxdisabled=!0,this.$axios.post("chats/create",this.currentmessage).then((function(t){o.messages.push(t.data.chat),o.currentmessage.message="",o.chatboxdisabled=!1,console.log(t),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message),e.$v.$reset()})).catch((function(t){o.chatboxdisabled=!1,console.log("Errrr",t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(t.response.data.errors))}))}},dltmsg:function(t,i){var e=this;if(confirm("are you sure ?")){var o=this;o.chatboxdisabled=!0,this.$axios.delete("chats/"+t.id).then((function(r){t.deleted_at=new Date,o.currentmessage.message="",o.chatboxdisabled=!1,console.log(r),r.data.hasOwnProperty("message")&&e.getmessage(r.data.message)})).catch((function(t){o.chatboxdisabled=!1,console.log("Errrr",t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(t.response.data.errors))}))}},URLify:function(t){var e=t.match(/((((ftp|https?):\/\/)|(w{3}\.))[\-\w@:%_\+.~#?,&\/\/=]+)/g);return e&&e.forEach((function(e){t=t.replace(e,'<a target="_blank" href="'+e+'">'+e+"</a>")})),t.replace("(","<br/>(")}},validations:{currentmessage:{message:{required:r.required},user_id:{required:r.required}}}},n=(o(838),o(29)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mt-5"},[o("div",{staticClass:"row clearfix"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"card chat-app mt-3"},[o("div",{staticClass:"chat"},[t._m(0),t._v(" "),o("div",{staticClass:"chat-history",attrs:{id:"chat-history"}},[o("ul",{staticClass:"m-b-0"},t._l(t.messages,(function(e){return o("div",{key:e.id},[o("li",{staticClass:"clearfix"},[o("div",{staticClass:"message-data",class:null==e.replied_by?"text-right":""},[o("span",{staticClass:"message-data-time"},[t._v(t._s(null==e.replied_by?"You":"Admin")+",\n                      "),o("time-ago",{attrs:{datetime:e.created_at,tooltip:""}}),t._v("\n                      ago")],1)]),t._v(" "),o("div",{staticClass:"message",class:null==e.replied_by?"float-right other-message":"my-message"},[o("span",{domProps:{innerHTML:t._s(t.URLify(e.message))}})])])])})),0)]),t._v(" "),o("div",{staticClass:"chat-message clearfix"},[o("div",{staticClass:"input-group mb-0"},[o("div",{staticClass:"input-group-prepend",on:{click:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[o("span",{staticClass:"input-group-text"},[o("font-awesome-icon",{attrs:{icon:["fas","location-arrow"]}})],1)]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentmessage.message,expression:"currentmessage.message"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter text here...",disabled:t.chatboxdisabled},domProps:{value:t.currentmessage.message},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.currentmessage,"message",e.target.value)}}})])])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"chat-header clearfix"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"chat-about"},[o("h4",{staticClass:"m-b-0"},[t._v("Send message to admin")])])])])])}],!1,null,"12f59734",null);e.default=component.exports},688:function(t,e,o){var content=o(839);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("c27f6938",content,!0,{sourceMap:!1})},838:function(t,e,o){"use strict";o(688)},839:function(t,e,o){var r=o(60)(!1);r.push([t.i,'body[data-v-12f59734]{background-color:#f4f7f6;margin-top:20px}.card[data-v-12f59734]{background:#fff;transition:.5s;border:0;margin-bottom:30px;border-radius:.55rem;position:relative;width:100%;box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}.chat-app .people-list[data-v-12f59734]{width:280px;position:absolute;left:0;top:0;padding:20px;z-index:7}.chat-app .chat[data-v-12f59734]{border-left:1px solid #eaeaea}.people-list[data-v-12f59734]{transition:.5s}.people-list .chat-list li[data-v-12f59734]{padding:10px 15px;list-style:none;border-radius:3px}.people-list .chat-list li[data-v-12f59734]:hover{background:#efefef;cursor:pointer}.people-list .chat-list li.active[data-v-12f59734]{background:#efefef}.people-list .chat-list li .name[data-v-12f59734]{font-size:15px}.people-list .chat-list img[data-v-12f59734]{width:45px;border-radius:50%}.people-list img[data-v-12f59734]{float:left;border-radius:50%}.people-list .about[data-v-12f59734]{float:left;padding-left:8px}.people-list .status[data-v-12f59734]{color:#999;font-size:13px}.chat .chat-header[data-v-12f59734]{padding:15px 20px;border-bottom:2px solid #f4f7f6}.chat .chat-header img[data-v-12f59734]{float:left;border-radius:40px;width:40px}.chat .chat-header .chat-about[data-v-12f59734]{float:left;padding-left:10px}.chat .chat-history[data-v-12f59734]{padding:20px;border-bottom:2px solid #fff;overflow-y:scroll;height:65vh}.chat .chat-history ul[data-v-12f59734]{padding:0}.chat .chat-history ul li[data-v-12f59734]{list-style:none;margin-bottom:30px}.chat .chat-history ul li[data-v-12f59734]:last-child{margin-bottom:0}.chat .chat-history .message-data[data-v-12f59734]{margin-bottom:15px}.chat .chat-history .message-data img[data-v-12f59734]{border-radius:40px;width:40px}.chat .chat-history .message-data-time[data-v-12f59734]{color:#434651;padding-left:6px}.chat .chat-history .message[data-v-12f59734]{color:#444;padding:5px 20px;line-height:26px;font-size:16px;border-radius:7px;display:inline-block;position:relative}.chat .chat-history .my-message[data-v-12f59734]{background:#efefef}.chat .chat-history .other-message[data-v-12f59734]{background:#e8f1f3;text-align:right}.chat .chat-message[data-v-12f59734]{padding:20px}.me[data-v-12f59734],.offline[data-v-12f59734],.online[data-v-12f59734]{margin-right:2px;font-size:8px;vertical-align:middle}.online[data-v-12f59734]{color:#86c541}.offline[data-v-12f59734]{color:#e47297}.me[data-v-12f59734]{color:#1d8ecd}.float-right[data-v-12f59734]{float:right}.clearfix[data-v-12f59734]:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}@media only screen and (max-width:767px){.chat-app .people-list[data-v-12f59734]{height:465px;width:100%;overflow-x:auto;background:#fff;left:-400px;display:none}.chat-app .people-list.open[data-v-12f59734]{left:0}.chat-app .chat[data-v-12f59734]{margin:0}.chat-app .chat .chat-header[data-v-12f59734]{border-radius:.55rem .55rem 0 0}.chat-app .chat-history[data-v-12f59734]{height:300px;overflow-x:auto}}@media only screen and (min-width:768px) and (max-width:992px){.chat-app .chat-list[data-v-12f59734]{height:650px;overflow-x:auto}.chat-app .chat-history[data-v-12f59734]{height:600px;overflow-x:auto}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:1){.chat-app .chat-list[data-v-12f59734]{height:480px;overflow-x:auto}.chat-app .chat-history[data-v-12f59734]{height:calc(100vh - 350px);overflow-x:auto}}',""]),t.exports=r}}]);