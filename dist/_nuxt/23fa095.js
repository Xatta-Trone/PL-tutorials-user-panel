(window.webpackJsonp=window.webpackJsonp||[]).push([[26,7,9,12],{1024:function(e,t,o){"use strict";var r=o(12),n=o(182).charAt,l=o(13),c=o(45),d=o(69),v=o(31);r({target:"String",proto:!0,forced:l((function(){return"𠮷"!=="𠮷".at(-2)}))},{at:function(e){var t=v(c(this)),o=t.length,r=d(e),l=r>=0?r:o+r;return l<0||l>=o?void 0:n(t,l)}})},1025:function(e,t,o){"use strict";o(745)},1026:function(e,t,o){var r=o(60)(!1);r.push([e.i,".card-title{text-overflow:ellipsis!important;overflow:hidden}.font-awesome-custom{font-size:2rem;color:#17a2b8}",""]),e.exports=r},1062:function(e,t,o){"use strict";o.r(t);o(14),o(1),o(1024),o(73),o(87),o(20),o(181);var r={layout:"content",middleware:"auth",head:function(){return{title:"".concat(this.$nuxt.$route.params.dept.toUpperCase(),"::").concat(this.$nuxt.$route.params.levelterm.toUpperCase(),"::").concat(this.$nuxt.$route.params.course.toUpperCase(),"- PL Tutorials")}},data:function(){return{course:null,loading:!1,results:[],parentFolder:$nuxt.$route.params.gdrive,currentFolder:$nuxt.$route.params.gdrive,previousFolder:null,folderHistory:[],modalContent:null}},computed:{deviceCheck:function(){return this.$store.state.device}},mounted:function(){this.getFolderContentsByFolderId($nuxt.$route.params.gdrive),this.folderHistory.push($nuxt.$route.params.gdrive),console.log(this.$nuxt.$route)},components:{Loading:o(533).default},methods:{getFolderContentsByFolderId:function(e){var t=this,o=this;o.loading=!0,fetch("https://www.googleapis.com/drive/v3/files?q='".concat(e,"' in parents&orderBy=folder,name&key=AIzaSyDHbDkDUqv39yqYtBI5XD7arA2L8LEzgko")).then((function(e){return e.json()})).then((function(data){console.log(data),o.results=data.files})).catch((function(e){return console.log(e)})).finally((function(){return t.loading=!1}))},gotoFolder:function(e){var t=this;"application/vnd.google-apps.folder"==e.mimeType?(t.previousFolder=t.currentFolder,t.currentFolder=e.id,t.folderHistory.push(e.id),this.getFolderContentsByFolderId(e.id),t.modalContent=null):(t.modalContent=e,this.$bvModal.show("modal-center"))},goToHomeFolder:function(){var e=this;e.previousFolder=null,e.currentFolder=e.parentFolder,e.folderHistory=[],this.getFolderContentsByFolderId(e.parentFolder)},goToPreviousFolder:function(){var e=this;e.folderHistory.length>0&&e.folderHistory.pop(),e.folderHistory.length>1?(e.currentFolder=e.folderHistory.at(-1),e.previousFolder=e.folderHistory.at(-2)):1==e.folderHistory.length?(e.currentFolder=e.folderHistory.at(-1),e.previousFolder=null):e.previousFolder=null,this.getFolderContentsByFolderId(e.currentFolder)},getIconByMimeType:function(e){var data="file";return e.includes("folder")&&(data="folder"),(e.includes("document")||e.includes("word"))&&(data="file-word"),e.includes("pdf")&&(data="file-pdf"),(e.includes("spreadsheet")||e.includes("excel"))&&(data="file-excel"),(e.includes("presentation")||e.includes("powerpoint"))&&(data="file-powerpoint"),e.includes("audio")&&(data="file-audio"),e.includes("video")&&(data="video"),(e.includes("photo")||e.includes("image"))&&(data="image"),data},handleClick:function(data){this.saveActivity({activity:"downloaded",model_type:data.post_type,model_id:data.id,causer_id:this.$auth.loggedIn?this.$auth.user.id:0,label:data.name,additionalData:"".concat(this.$nuxt.$route.params.dept,"/").concat(this.$nuxt.$route.params.levelterm,"/").concat(this.$nuxt.$route.params.course)}),window.open(data.link,"_blank").focus()}}},n=(o(1025),o(29)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.deviceCheck.hasCheckedDevice?[o("CustomHeader",{attrs:{title:e.$nuxt.$route.params.course,subtitle:e.course?e.course.course_name:"Drive files"}}),e._v(" "),o("b-container",[e.loading?[o("b-row",{staticClass:"my-5"},[o("b-col",[o("loading")],1)],1)]:[e.results?o("b-row",{staticClass:"my-4"},[o("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[o("b-button-group",[o("b-button",{directives:[{name:"show",rawName:"v-show",value:e.parentFolder!=e.currentFolder,expression:"parentFolder != currentFolder"}],on:{click:e.goToHomeFolder}},[e._v("Home folder")]),e._v(" "),o("b-button",{directives:[{name:"show",rawName:"v-show",value:e.previousFolder,expression:"previousFolder"}],on:{click:e.goToPreviousFolder}},[e._v("Previous folder")]),e._v(" "),o("b-button",{attrs:{href:"https://drive.google.com/drive/folders/"+e.parentFolder,target:"_blank"}},[e._v("Open home folder in drive")]),e._v(" "),o("b-button",{attrs:{href:"https://drive.google.com/drive/folders/"+e.currentFolder,target:"_blank"}},[e._v("Open current folder in drive")])],1)],1),e._v(" "),o("b-col",e._l(e.results,(function(t){return o("b-list-group",{key:t.id},[o("b-list-group-item",[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",{staticClass:"mx-auto justify-center",attrs:{cols:"1"}},[o("font-awesome-icon",{staticClass:"font-awesome-custom",attrs:{icon:["fas",e.getIconByMimeType(t.mimeType)]}})],1),e._v(" "),o("b-col",[o("a",{staticStyle:{cursor:"pointer"},on:{click:function(o){return e.gotoFolder(t)}}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])]),e._v(" "),o("b-col",{staticClass:"text-center",attrs:{cols:"4",sm:"1"}},[t.mimeType.includes("folder")?e._e():o("a",{staticClass:"btn btn-sm",attrs:{href:"https://drive.google.com/uc?export=download&id="+t.id,target:"_blank",rel:"noopener noreferrer"}},[o("b-button",{attrs:{variant:"primary",size:"sm"}},[e._v("download")])],1)])],1)],1)],1)})),1),e._v(" "),o("b-col",{staticClass:"mt-3",attrs:{cols:"12"}},[o("b-button-group",[o("b-button",{directives:[{name:"show",rawName:"v-show",value:e.parentFolder!=e.currentFolder,expression:"parentFolder != currentFolder"}],on:{click:e.goToHomeFolder}},[e._v("Home folder")]),e._v(" "),o("b-button",{directives:[{name:"show",rawName:"v-show",value:e.previousFolder,expression:"previousFolder"}],on:{click:e.goToPreviousFolder}},[e._v("Previous folder")]),e._v(" "),o("b-button",{attrs:{href:"https://drive.google.com/drive/folders/"+e.parentFolder,target:"_blank"}},[e._v("Open home folder in drive")]),e._v(" "),o("b-button",{attrs:{href:"https://drive.google.com/drive/folders/"+e.currentFolder,target:"_blank"}},[e._v("Open current folder in drive")])],1)],1)],1):o("b-row",{staticClass:"mt-5 text-center",attrs:{"align-self":"center"}},[o("b-col",[o("h2",[e._v("No content found.")])])],1)],e._v(" "),o("b-modal",{attrs:{id:"modal-center",centered:"",size:"lg",scrollable:"",title:null!=e.modalContent?e.modalContent.name:"Preview file"},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[o("div",{staticClass:"w-100"},[o("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"md"},on:{click:function(t){return e.$bvModal.hide("modal-center")}}},[e._v("\n              Close\n            ")]),e._v(" "),o("a",{staticClass:"btn btn-sm",attrs:{href:"https://drive.google.com/uc?export=download&id="+e.modalContent.id,target:"_blank",rel:"noopener noreferrer"}},[o("b-button",{attrs:{variant:"primary",size:"md"}},[e._v("download")])],1),e._v(" "),o("a",{staticClass:"btn btn-sm",attrs:{href:"https://drive.google.com/file/d/"+e.modalContent.id,target:"_blank",rel:"noopener noreferrer"}},[o("b-button",{attrs:{variant:"primary",size:"md"}},[e._v("Open in drive")])],1)],1)]},proxy:!0}])},[null!=e.modalContent?o("b-col",[o("iframe",{staticClass:"w-100 h-100",staticStyle:{"min-height":"60vh",height:"70vh"},attrs:{src:"https://drive.google.com/file/d/"+e.modalContent.id+"/preview",frameborder:"0"}})]):o("b-col",[e._v("Please select a file to preview")])],1)],2)]:[o("Devicecheck")]],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Devicecheck:o(554).default,CustomHeader:o(534).default,Loading:o(533).default})},532:function(e,t,o){var content=o(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(61).default)("fa6bab82",content,!0,{sourceMap:!1})},533:function(e,t,o){"use strict";o.r(t);var r={components:{CubeShadow:o(550).a}},n=(o(542),o(29)),component=Object(n.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("CubeShadow",{staticClass:"mx-auto",attrs:{color:"#17a2b8"}})}),[],!1,null,"1b6dfe3d",null);t.default=component.exports},534:function(e,t,o){"use strict";o.r(t);var r={props:{title:{default:"",type:String},subtitle:{default:null,type:String}}},n=(o(537),o(29)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"section_padding hero_title_section"},[o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"text-center tr-bg"},[o("b-col",{staticClass:"header-div"},[o("h3",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title.toUpperCase()))]),e._v(" "),o("span"),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v(e._s(e.subtitle))])])],1)],1)],1)}),[],!1,null,"34911b7e",null);t.default=component.exports},535:function(e,t,o){var content=o(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(61).default)("055e323c",content,!0,{sourceMap:!1})},536:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},537:function(e,t,o){"use strict";o(532)},538:function(e,t,o){var r=o(60),n=o(536),l=o(539),c=o(540),d=r(!1),v=n(l),f=n(c);d.push([e.i,".hero_title_section[data-v-34911b7e]{background-image:url("+v+");background-size:cover;background-position:bottom;background-attachment:fixed;background-color:#333;position:relative}body.dark-mode .hero_title_section[data-v-34911b7e]{background-image:url("+f+')}.hero_title_section[data-v-34911b7e]:before{position:absolute;left:0;top:0;width:100%;height:100%;content:"";background:#000;opacity:.6}.hero_title_section[data-v-34911b7e]{font-size:30px;padding:150px 0 100px;color:#fff;text-transform:uppercase}.hero_title_section h3[data-v-34911b7e]{font-size:50px;line-height:50px;margin:0}.hero_title_section span[data-v-34911b7e]{display:inline-block;height:5px;width:45%;background:#17a2b8;margin:0 0 10px;border-radius:3px}.hero_title_section p[data-v-34911b7e]{margin:0}.section_padding[data-v-34911b7e]{padding:150px 0 100px}',""]),e.exports=d},539:function(e,t,o){e.exports=o.p+"img/pencil.135d51e.jpg"},540:function(e,t,o){e.exports=o.p+"img/dark-bg4.406e3d0.jpg"},542:function(e,t,o){"use strict";o(535)},543:function(e,t,o){var r=o(60)(!1);r.push([e.i,".spinner.spinner--cube-shadow[data-v-1b6dfe3d]{background-color:#17a2b8!important}",""]),e.exports=r},546:function(e,t,o){var content=o(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(61).default)("5f295fe7",content,!0,{sourceMap:!1})},552:function(e,t,o){"use strict";o(546)},553:function(e,t,o){var r=o(60)(!1);r.push([e.i,"h4[data-v-bfdca5c4]{letter-spacing:normal}",""]),e.exports=r},554:function(e,t,o){"use strict";o.r(t);o(1),o(282),o(86);var r=o(533),n=o(180),l={layout:"content",middleware:"auth",beforeRouteEnter:function(e,t,o){o((function(e){console.log("router guard",t),o()}))},data:function(){return{deviceResponse:null,fingerprint:null,isInSavedDevice:!1,isInAsyncCall:!1}},components:{Loading:r.default},mounted:function(){this.visitorId(),this.getDevice()},methods:{addDevice:function(){var e=this,data={fingerprint:e.fingerprint,platform:"web"};e.isInAsyncCall=!0,this.$axios.post("user-devices",data).then((function(t){console.log(t),"true"==t.data.status&&e.$store.commit("device/addCurrentDevice"),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message)})).catch((function(t){console.log(t),t.response.data.hasOwnProperty("message")&&"DEVICE_ALREADY_ADDED"==t.response.data.message&&e.$store.commit("device/addCurrentDevice"),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(t.response.data.errors))})).finally((function(){e.isInAsyncCall=!1}))},getDevice:function(){var e=this,t=this;t.isInAsyncCall=!0,this.$axios.get("user-devices").then((function(o){(console.log(o),e.deviceResponse=o.data,o.data.devices)&&(null!=o.data.devices.find((function(e){return e.fingerprint==t.fingerprint}))?(t.isInSavedDevice=!0,t.$store.commit("device/addCurrentDevice")):t.isInSavedDevice=!1);o.data.hasOwnProperty("message")&&e.getmessage(o.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){t.isInAsyncCall=!1}))},addGuest:function(){this.$store.commit("device/addGuest")},removeGuest:function(){this.$store.commit("device/removeGuestDevice")},visitorId:function(){console.log("Visitor Id called");if(localStorage.getItem("deviceId_alt"))this.fingerprint=dId;else{var e=(new n.ClientJS).getFingerprint();this.fingerprint=e,localStorage.removeItem("deviceId"),localStorage.setItem("deviceId_alt",e)}},removeDevice:function(e){var t=this;if(confirm("Are you sure ?")){var o=this;o.isInAsyncCall=!0,this.$axios.delete("user-devices/".concat(e)).then((function(e){console.log(e),"true"==e.data.status&&(t.getDevice(),o.$store.commit("device/removeCurrentDevice")),e.data.hasOwnProperty("message")&&t.getmessage(e.data.message)})).catch((function(e){console.log(e),e.response.data.hasOwnProperty("message")&&this.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(this.serverErrors=Object.entries(e.response.data.errors))})).finally((function(){o.isInAsyncCall=!1}))}}}},c=(o(552),o(29)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("CustomHeader",{attrs:{title:"Device check"}}),e._v(" "),o("b-container",[e.isInAsyncCall?[o("b-row",{staticClass:"my-5"},[o("b-col",[o("loading")],1)],1)]:[o("b-row",{staticClass:"my-3 text-center"},[o("b-col",[o("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("Attention !! This device is not in your saved device")]),e._v(" "),o("h4",{staticClass:"my-3"},[e._v("For regular use")]),e._v(" "),o("b-button",{attrs:{variant:"danger"},on:{click:e.addDevice}},[e._v("Add to saved devices")]),e._v(" "),o("h4",{staticClass:"my-3"},[e._v("For temporary use")]),e._v(" "),o("b-button",{attrs:{variant:"danger"},on:{click:e.addGuest}},[e._v("Continue as a guest")]),e._v(" "),o("b-alert",{staticClass:"my-3",attrs:{show:"",variant:"info"}},[e._v("If you are using this device frequently and is not in your saved\n            devices lest, your account may get restricted by the system\n            automatically.")]),e._v(" "),o("b-alert",{staticClass:"my-3",attrs:{show:"",variant:"danger"}},[e._v("You can manage your saved devices form your\n            "),o("b-link",{attrs:{to:"/profile"}},[e._v("profile page in\n              "),o("b-badge",{attrs:{variant:"primary"}},[e._v("Saved devices")]),e._v(" tab\n            ")],1)],1)],1)],1),e._v(" "),o("b-row",[e.deviceResponse&&e.deviceResponse.devices.length>0?o("b-list-group",e._l(e.deviceResponse.devices,(function(t){return o("b-list-group-item",{key:t.id,staticClass:"my-3"},[o("b-badge",{attrs:{variant:"primary"}},[e._v(e._s(t.ip_address))]),e._v(" "),o("b-badge",{directives:[{name:"show",rawName:"v-show",value:t.fingerprint==e.fingerprint,expression:"device.fingerprint == fingerprint"}],attrs:{variant:"danger"}},[e._v("This device")]),e._v("\n          "+e._s(t.device)+" "),o("br"),e._v("\n\n          "+e._s(t.location)),o("br"),e._v("\n          Last updated: "+e._s(e.formatDateToString(t.updated_at))),o("br"),e._v(" "),o("b-button",{attrs:{variant:"danger"},on:{click:function(o){return e.removeDevice(t.id)}}},[e._v("Remove device")])],1)})),1):o("b-alert",{staticClass:"w-100 mx-auto text-center ",attrs:{show:"",variant:"info"}},[e._v("No device registered")])],1)]],2)],1)}),[],!1,null,"bfdca5c4",null);t.default=component.exports;installComponents(component,{CustomHeader:o(534).default,Loading:o(533).default})},745:function(e,t,o){var content=o(1026);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(61).default)("73aadc94",content,!0,{sourceMap:!1})}}]);