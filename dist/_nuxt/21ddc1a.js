/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{579:function(e,t,n){"use strict";var r=function(){return r=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e},r.apply(this,arguments)};function o(e,t,n,r){return new(n||(n=Promise))((function(o,c){function l(e){try{f(r.next(e))}catch(e){c(e)}}function d(e){try{f(r.throw(e))}catch(e){c(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,d)}f((r=r.apply(e,t||[])).next())}))}function c(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}Object.create;function l(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)t[n]=a[r];return t}Object.create;var d="3.3.2";function f(e,t){return new Promise((function(n){return setTimeout(n,e,t)}))}function h(e,t){try{var n=e();(r=n)&&"function"==typeof r.then?n.then((function(e){return t(!0,e)}),(function(e){return t(!1,e)})):t(!0,n)}catch(e){t(!1,e)}var r}function v(e,t,n){return void 0===n&&(n=16),o(this,void 0,void 0,(function(){var r,i,o;return c(this,(function(c){switch(c.label){case 0:r=Date.now(),i=0,c.label=1;case 1:return i<e.length?(t(e[i],i),(o=Date.now())>=r+n?(r=o,[4,f(0)]):[3,3]):[3,4];case 2:c.sent(),c.label=3;case 3:return++i,[3,1];case 4:return[2]}}))}))}function m(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function w(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function y(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function k(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function C(e,t){return[e[0]^t[0],e[1]^t[1]]}function A(e){return e=C(e,[0,e[0]>>>1]),e=C(e=w(e,[4283543511,3981806797]),[0,e[0]>>>1]),e=C(e=w(e,[3301882366,444984403]),[0,e[0]>>>1])}function x(e,t){t=t||0;var i,n=(e=e||"").length%16,r=e.length-n,h1=[0,t],h2=[0,t],o=[0,0],c=[0,0],l=[2277735313,289559509],d=[1291169091,658871167];for(i=0;i<r;i+=16)o=[255&e.charCodeAt(i+4)|(255&e.charCodeAt(i+5))<<8|(255&e.charCodeAt(i+6))<<16|(255&e.charCodeAt(i+7))<<24,255&e.charCodeAt(i)|(255&e.charCodeAt(i+1))<<8|(255&e.charCodeAt(i+2))<<16|(255&e.charCodeAt(i+3))<<24],c=[255&e.charCodeAt(i+12)|(255&e.charCodeAt(i+13))<<8|(255&e.charCodeAt(i+14))<<16|(255&e.charCodeAt(i+15))<<24,255&e.charCodeAt(i+8)|(255&e.charCodeAt(i+9))<<8|(255&e.charCodeAt(i+10))<<16|(255&e.charCodeAt(i+11))<<24],o=y(o=w(o,l),31),h1=m(h1=y(h1=C(h1,o=w(o,d)),27),h2),h1=m(w(h1,[0,5]),[0,1390208809]),c=y(c=w(c,d),33),h2=m(h2=y(h2=C(h2,c=w(c,l)),31),h1),h2=m(w(h2,[0,5]),[0,944331445]);switch(o=[0,0],c=[0,0],n){case 15:c=C(c,k([0,e.charCodeAt(i+14)],48));case 14:c=C(c,k([0,e.charCodeAt(i+13)],40));case 13:c=C(c,k([0,e.charCodeAt(i+12)],32));case 12:c=C(c,k([0,e.charCodeAt(i+11)],24));case 11:c=C(c,k([0,e.charCodeAt(i+10)],16));case 10:c=C(c,k([0,e.charCodeAt(i+9)],8));case 9:c=w(c=C(c,[0,e.charCodeAt(i+8)]),d),h2=C(h2,c=w(c=y(c,33),l));case 8:o=C(o,k([0,e.charCodeAt(i+7)],56));case 7:o=C(o,k([0,e.charCodeAt(i+6)],48));case 6:o=C(o,k([0,e.charCodeAt(i+5)],40));case 5:o=C(o,k([0,e.charCodeAt(i+4)],32));case 4:o=C(o,k([0,e.charCodeAt(i+3)],24));case 3:o=C(o,k([0,e.charCodeAt(i+2)],16));case 2:o=C(o,k([0,e.charCodeAt(i+1)],8));case 1:o=w(o=C(o,[0,e.charCodeAt(i)]),l),h1=C(h1,o=w(o=y(o,31),d))}return h1=m(h1=C(h1,[0,e.length]),h2=C(h2,[0,e.length])),h2=m(h2,h1),h1=m(h1=A(h1),h2=A(h2)),h2=m(h2,h1),("00000000"+(h1[0]>>>0).toString(16)).slice(-8)+("00000000"+(h1[1]>>>0).toString(16)).slice(-8)+("00000000"+(h2[0]>>>0).toString(16)).slice(-8)+("00000000"+(h2[1]>>>0).toString(16)).slice(-8)}function S(e){return parseInt(e)}function M(e){return parseFloat(e)}function _(e,t){return"number"==typeof e&&isNaN(e)?t:e}function P(e){return e.reduce((function(e,t){return e+(t?1:0)}),0)}function T(e,base){if(void 0===base&&(base=1),Math.abs(base)>=1)return Math.round(e/base)*base;var t=1/base;return Math.round(e*t)/t}function E(e){return e&&"object"==typeof e&&"message"in e?e:{message:e}}function L(e,t,n){var r=Object.keys(e).filter((function(e){return!function(e,t){for(var i=0,n=e.length;i<n;++i)if(e[i]===t)return!0;return!1}(n,e)})),l=Array(r.length);return v(r,(function(n,r){l[r]=function(source,e){var t=function(e){return"function"!=typeof e},n=new Promise((function(n){var r=Date.now();h(source.bind(null,e),(function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var c=Date.now()-r;if(!e[0])return n((function(){return{error:E(e[1]),duration:c}}));var l=e[1];if(t(l))return n((function(){return{value:l,duration:c}}));n((function(){return new Promise((function(e){var t=Date.now();h(l,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=c+Date.now()-t;if(!n[0])return e({error:E(n[1]),duration:o});e({value:n[1],duration:o})}))}))}))}))}));return function(){return n.then((function(e){return e()}))}}(e[n],t)})),function(){return o(this,void 0,void 0,(function(){var e,t,n,o,d,h;return c(this,(function(m){switch(m.label){case 0:for(e={},t=0,n=r;t<n.length;t++)o=n[t],e[o]=void 0;d=Array(r.length),h=function(){var t;return c(this,(function(n){switch(n.label){case 0:return t=!0,[4,v(r,(function(n,r){d[r]||(l[r]?d[r]=l[r]().then((function(component){return e[n]=component})):t=!1)}))];case 1:return n.sent(),t?[2,"break"]:[4,f(1)];case 2:return n.sent(),[2]}}))},m.label=1;case 1:return[5,h()];case 2:if("break"===m.sent())return[3,4];m.label=3;case 3:return[3,1];case 4:return[4,Promise.all(d)];case 5:return m.sent(),[2,e]}}))}))}}function z(){var e=window,t=navigator;return P(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in t,"msPointerEnabled"in t])>=4}function D(){var e=window,t=navigator;return P(["webkitPersistentStorage"in t,"webkitTemporaryStorage"in t,0===t.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function I(){var e=window,t=navigator;return P(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===t.vendor.indexOf("Apple"),"getStorageUpdates"in t,"WebKitMediaKeys"in e])>=4}function O(){var e=window;return P(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}function B(){var e=document;return(e.exitFullscreen||e.msExitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen).call(e)}function F(){var e=D(),t=function(){var e,t,n=window;return P(["buildID"in navigator,"MozAppearance"in(null!==(t=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==t?t:{}),"onmozfullscreenchange"in n,"mozInnerScreenX"in n,"CSSMozDocumentRule"in n,"CanvasCaptureMediaStream"in n])>=4}();if(!e&&!t)return!1;var n=window;return P(["onorientationchange"in n,"orientation"in n,e&&!("SharedWorker"in n),t&&/android/i.test(navigator.appVersion)])>=2}function R(e){var t=new Error(e);return t.name=e,t}function G(e,t,n){var r,l,d;return void 0===n&&(n=50),o(this,void 0,void 0,(function(){var o,iframe;return c(this,(function(c){switch(c.label){case 0:o=document,c.label=1;case 1:return o.body?[3,3]:[4,f(n)];case 2:return c.sent(),[3,1];case 3:iframe=o.createElement("iframe"),c.label=4;case 4:return c.trys.push([4,,10,11]),[4,new Promise((function(e,n){var r=!1,c=function(){r=!0,e()};iframe.onload=c,iframe.onerror=function(e){r=!0,n(e)};var style=iframe.style;style.setProperty("display","block","important"),style.position="absolute",style.top="0",style.left="0",style.visibility="hidden",t&&"srcdoc"in iframe?iframe.srcdoc=t:iframe.src="about:blank",o.body.appendChild(iframe);var l=function(){var e,t;r||("complete"===(null===(t=null===(e=iframe.contentWindow)||void 0===e?void 0:e.document)||void 0===t?void 0:t.readyState)?c():setTimeout(l,10))};l()}))];case 5:c.sent(),c.label=6;case 6:return(null===(l=null===(r=iframe.contentWindow)||void 0===r?void 0:r.document)||void 0===l?void 0:l.body)?[3,8]:[4,f(n)];case 7:return c.sent(),[3,6];case 8:return[4,e(iframe,iframe.contentWindow)];case 9:return[2,c.sent()];case 10:return null===(d=iframe.parentNode)||void 0===d||d.removeChild(iframe),[7];case 11:return[2]}}))}))}function j(e){for(var t=function(e){for(var t,n,r="Unexpected syntax '"+e+"'",o=/^\s*([a-z-]*)(.*)$/i.exec(e),c=o[1]||void 0,l={},d=/([.:#][\w-]+|\[.+?\])/gi,f=function(e,t){l[e]=l[e]||[],l[e].push(t)};;){var h=d.exec(o[2]);if(!h)break;var v=h[0];switch(v[0]){case".":f("class",v.slice(1));break;case"#":f("id",v.slice(1));break;case"[":var m=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(v);if(!m)throw new Error(r);f(m[1],null!==(n=null!==(t=m[4])&&void 0!==t?t:m[5])&&void 0!==n?n:"");break;default:throw new Error(r)}}return[c,l]}(e),n=t[0],r=t[1],element=document.createElement(null!=n?n:"div"),o=0,c=Object.keys(r);o<c.length;o++){var l=c[o];element.setAttribute(l,r[l].join(" "))}return element}var U=["monospace","sans-serif","serif"],N=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function W(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}function H(canvas,e){canvas.width=240,canvas.height=60,e.textBaseline="alphabetic",e.fillStyle="#f60",e.fillRect(100,1,62,20),e.fillStyle="#069",e.font='11pt "Times New Roman"';var t="Cwm fjordbank gly "+String.fromCharCode(55357,56835);return e.fillText(t,2,15),e.fillStyle="rgba(102, 204, 0, 0.2)",e.font="18pt Arial",e.fillText(t,4,45),V(canvas)}function J(canvas,e){canvas.width=122,canvas.height=110,e.globalCompositeOperation="multiply";for(var t=0,n=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];t<n.length;t++){var r=n[t],o=r[0],c=r[1],l=r[2];e.fillStyle=o,e.beginPath(),e.arc(c,l,40,0,2*Math.PI,!0),e.closePath(),e.fill()}return e.fillStyle="#f9c",e.arc(60,60,60,0,2*Math.PI,!0),e.arc(60,60,20,0,2*Math.PI,!0),e.fill("evenodd"),V(canvas)}function V(canvas){return canvas.toDataURL()}var $,K;function X(){var e=this;return function(){if(void 0===K){var e=function(){var t=Y();Z(t)?K=setTimeout(e,2500):($=t,K=void 0)};e()}}(),function(){return o(e,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return Z(e=Y())?$?[2,l($)]:(n=document).fullscreenElement||n.msFullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement?[4,B()]:[3,2]:[3,2];case 1:t.sent(),e=Y(),t.label=2;case 2:return Z(e)||($=e),[2,e]}var n}))}))}}function Y(){var s=screen;return[_(M(s.availTop),null),_(M(s.width)-M(s.availWidth)-_(M(s.availLeft),0),null),_(M(s.height)-M(s.availHeight)-_(M(s.availTop),0),null),_(M(s.availLeft),null)]}function Z(e){for(var i=0;i<4;++i)if(e[i])return!1;return!0}var Q={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'a[title="7naga poker" i]','[title="ALIENBOLA" i]'],abpvn:["#quangcaomb",".iosAdsiosAds-layout",".quangcao",'[href^="https://r88.vn/"]','[href^="https://zbet.vn/"]'],adBlockFinland:[".mainostila",".sponsorit",".ylamainos",'a[href*="/clickthrgh.asp?"]','a[href^="https://app.readpeak.com/ads"]'],adBlockPersian:["#navbar_notice_50",'a[href^="http://g1.v.fwmrm.net/ad/"]',".kadr",'TABLE[width="140px"]',"#divAgahi"],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect"],adGuardAnnoyances:['amp-embed[type="zen"]',".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil"],adGuardBase:["#ad-after","#ad-p3",".BetterJsPopOverlay","#ad_300X250","#bannerfloat22"],adGuardChinese:['#piao_div_0[style*="width:140px;"]','a[href*=".ttz5.cn"]','a[href*=".yabovip2027.com/"]',".tm3all2h4b",".cc5278_banner_ad"],adGuardFrench:[".zonepub",'[class*="_adLeaderboard"]','[id^="block-xiti_oas-"]','a[href^="http://ptapjmp.com/"]','a[href^="https://go.alvexo.com/"]'],adGuardGerman:[".banneritemwerbung_head_1",".boxstartwerbung",".werbung3",'a[href^="http://www.eis.de/index.phtml?refid="]','a[href^="https://www.tipico.com/?affiliateId="]'],adGuardJapanese:["#kauli_yad_1","#ad-giftext","#adsSPRBlock",'a[href^="http://ad2.trafficgate.net/"]','a[href^="http://www.rssad.jp/"]'],adGuardMobile:["amp-auto-ads","#mgid_iframe",".amp_ad",'amp-embed[type="24smi"]',"#mgid_iframe1"],adGuardRussian:['a[href^="https://ya-distrib.ru/r/"]','a[href^="https://ad.letmeads.com/"]',".reclama",'div[id^="smi2adblock"]','div[id^="AdFox_banner_"]'],adGuardSocial:['a[href^="//www.stumbleupon.com/submit?url="]','a[href^="//telegram.me/share/url?"]',".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",'[href^="http://ads.glispa.com/"]'],adGuardTrackingProtection:['amp-embed[type="taboola"]',"#qoo-counter",'a[href^="http://click.hotlog.ru/"]','a[href^="http://hitcounter.ru/top/stat.php"]','a[href^="http://top.mail.ru/jump"]'],adGuardTurkish:["#backkapat","#reklami",'a[href^="http://adserv.ontek.com.tr/"]','a[href^="http://izlenzi.com/campaign/"]','a[href^="http://www.installads.net/"]'],bulgarian:["td#freenet_table_ads","#adbody","#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:["#AD_banner_bottom","#Ads_google_02","#N-ad-article-rightRail-1","#ad-fullbanner2","#ad-zone-2"],easyListChina:['a[href*=".wensixuetang.com/"]','A[href*="/hth107.com/"]','.appguide-wrap[onclick*="bcebos.com"]',".frontpageAdvM","#taotaole"],easyListCookie:["#adtoniq-msg-bar","#CoockiesPage","#CookieModal_cookiemodal","#DO_CC_PANEL","#ShowCookie"],easyListCzechSlovak:["#onlajny-stickers","#reklamni-box",".reklama-megaboard",".sklik",'[id^="sklikReklama"]'],easyListDutch:["#advertentie","#vipAdmarktBannerBlock",".adstekst",'a[href^="https://xltube.nl/click/"]',"#semilo-lrectangle"],easyListGermany:['a[href^="http://www.hw-area.com/?dp="]','a[href^="https://ads.sunmaker.com/tracking.php?"]',".werbung-skyscraper2",".bannergroup_werbung",".ads_rechts"],easyListItaly:[".box_adv_annunci",".sb-box-pubbliredazionale",'a[href^="http://affiliazioniads.snai.it/"]','a[href^="https://adserver.html.it/"]','a[href^="https://affiliazioniads.snai.it/"]'],easyListLithuania:[".reklamos_tarpas",".reklamos_nuorodos",'img[alt="Reklaminis skydelis"]','img[alt="Dedikuoti.lt serveriai"]','img[alt="Hostingas Serveriai.lt"]'],estonian:['A[href*="http://pay4results24.eu"]'],fanboyAnnoyances:["#feedback-tab","#taboola-below-article",".feedburnerFeedBlock",".widget-feedburner-counter",'[title="Subscribe to our blog"]'],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:[".td-tags-and-social-wrapper-box",".twitterContainer",".youtube-social",'a[title^="Like us on Facebook"]','img[alt^="Share on Digg"]'],frellwitSwedish:['a[href*="casinopro.se"][target="_blank"]','a[href*="doktor-se.onelink.me"]',"article.category-samarbete","div.holidAds","ul.adsmodern"],greekAdBlock:['A[href*="adman.otenet.gr/click?"]','A[href*="http://axiabanners.exodus.gr/"]','A[href*="http://interactive.forthnet.gr/click?"]',"DIV.agores300","TABLE.advright"],hungarian:['A[href*="ad.eval.hu"]','A[href*="ad.netmedia.hu"]','A[href*="daserver.ultraweb.hu"]',"#cemp_doboz",".optimonk-iframe-container"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container",".cookie-msg-info-container","#cookies-policy-sticky"],icelandicAbp:['A[href^="/framework/resources/forms/ads.aspx"]'],latvian:['a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]','a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]'],listKr:['a[href*="//kingtoon.slnk.kr"]','a[href*="//playdsb.com/kr"]',"div.logly-lift-adz",'div[data-widget_id="ml6EJ074"]',"ins.daum_ddn_area"],listeAr:[".geminiLB1Ad",".right-and-left-sponsers",'a[href*=".aflam.info"]','a[href*="booraq.org"]','a[href*="dubizzle.com/ar/?utm_source="]'],listeFr:['a[href^="http://promo.vador.com/"]',"#adcontainer_recherche",'a[href*="weborama.fr/fcgi-bin/"]',".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",'[href^="https://aff.sendhub.pl/"]','a[href^="http://advmanager.techfun.pl/redirect/"]','a[href^="http://www.trizer.pl/?utm_source"]',"div#skapiec_ad"],ro:['a[href^="//afftrk.altex.ro/Counter/Click"]','a[href^="/magazin/"]','a[href^="https://blackfridaysales.ro/trk/shop/"]','a[href^="https://event.2performant.com/events/click"]','a[href^="https://l.profitshare.ro/"]'],ruAd:['a[href*="//febrare.ru/"]','a[href*="//utimg.ru/"]','a[href*="://chikidiki.ru"]',"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]","#ads-google-middle_rectangle-group",".ads300s",".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",".ctpl-fullbanner",".zergnet-recommend",".yt.btn-link.btn-md.btn"]};function ee(e){var t;return o(this,void 0,void 0,(function(){var n,r,o,l,element,d,i;return c(this,(function(c){switch(c.label){case 0:for(n=document,r=n.createElement("div"),o=new Array(e.length),l={},te(r),i=0;i<e.length;++i)element=j(e[i]),te(d=n.createElement("div")),d.appendChild(element),r.appendChild(d),o[i]=element;c.label=1;case 1:return n.body?[3,3]:[4,f(50)];case 2:return c.sent(),[3,1];case 3:n.body.appendChild(r);try{for(i=0;i<e.length;++i)o[i].offsetParent||(l[e[i]]=!0)}finally{null===(t=r.parentNode)||void 0===t||t.removeChild(r)}return[2,l]}}))}))}function te(element){element.style.setProperty("display","block","important")}function ne(e){return matchMedia("(inverted-colors: "+e+")").matches}function re(e){return matchMedia("(forced-colors: "+e+")").matches}function ae(e){return matchMedia("(prefers-contrast: "+e+")").matches}function oe(e){return matchMedia("(prefers-reduced-motion: "+e+")").matches}function ie(e){return matchMedia("(dynamic-range: "+e+")").matches}var ce=Math,ue=function(){return 0};var se={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};var le={fonts:function(){return G((function(e,t){var n=t.document,r=n.body;r.style.fontSize="48px";var o=n.createElement("div"),c={},l={},d=function(e){var span=n.createElement("span"),style=span.style;return style.position="absolute",style.top="0",style.left="0",style.fontFamily=e,span.textContent="mmMwWLliI0O&1",o.appendChild(span),span},f=U.map(d),h=function(){for(var e={},t=function(t){e[t]=U.map((function(e){return function(e,t){return d("'"+e+"',"+t)}(t,e)}))},n=0,r=N;n<r.length;n++){t(r[n])}return e}();r.appendChild(o);for(var v=0;v<U.length;v++)c[U[v]]=f[v].offsetWidth,l[U[v]]=f[v].offsetHeight;return N.filter((function(e){return t=h[e],U.some((function(e,n){return t[n].offsetWidth!==c[e]||t[n].offsetHeight!==l[e]}));var t}))}))},domBlockers:function(e){var t=(void 0===e?{}:e).debug;return o(this,void 0,void 0,(function(){var e,n,r,o;return c(this,(function(c){switch(c.label){case 0:return I()||F()?(e=Object.keys(Q),[4,ee((o=[]).concat.apply(o,e.map((function(e){return Q[e]}))))]):[2,void 0];case 1:return n=c.sent(),t&&function(e){for(var t="DOM blockers debug:\n```",n=0,r=Object.keys(Q);n<r.length;n++){var o=r[n];t+="\n"+o+":";for(var c=0,l=Q[o];c<l.length;c++){var d=l[c];t+="\n  "+d+" "+(e[d]?"🚫":"➡️")}}console.log(t+"\n```")}(n),(r=e.filter((function(e){var t=Q[e];return P(t.map((function(e){return n[e]})))>.6*t.length}))).sort(),[2,r]}}))}))},fontPreferences:function(){return function(e,t){void 0===t&&(t=4e3);return G((function(n,r){var o=r.document,c=o.body,d=c.style;d.width=t+"px",d.webkitTextSizeAdjust=d.textSizeAdjust="none",D()?c.style.zoom=""+1/r.devicePixelRatio:I()&&(c.style.zoom="reset");var f=o.createElement("div");return f.textContent=l(Array(t/20<<0)).map((function(){return"word"})).join(" "),c.appendChild(f),e(o,c)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}((function(e,t){for(var n={},r={},o=0,c=Object.keys(se);o<c.length;o++){var l=c[o],d=se[l],f=d[0],style=void 0===f?{}:f,h=d[1],text=void 0===h?"mmMwWLliI0fiflO&1":h,element=e.createElement("span");element.textContent=text,element.style.whiteSpace="nowrap";for(var v=0,m=Object.keys(style);v<m.length;v++){var w=m[v],y=style[w];void 0!==y&&(element.style[w]=y)}n[l]=element,t.appendChild(e.createElement("br")),t.appendChild(element)}for(var k=0,C=Object.keys(se);k<C.length;k++){r[l=C[k]]=n[l].getBoundingClientRect().width}return r}))},audio:function(){var e=window,t=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(!t)return-2;if(I()&&!O()&&!function(){var e=window;return P(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}())return-1;var n=new t(1,5e3,44100),r=n.createOscillator();r.type="triangle",r.frequency.value=1e4;var o=n.createDynamicsCompressor();o.threshold.value=-50,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,r.connect(o),o.connect(n.destination),r.start(0);var c=function(e){var t=3,n=500,r=500,o=5e3,c=function(){};return[new Promise((function(l,d){var f=!1,h=0,v=0;e.oncomplete=function(e){return l(e.renderedBuffer)};var m=function(){setTimeout((function(){return d(R("timeout"))}),Math.min(r,v+o-Date.now()))},w=function(){try{switch(e.startRendering(),e.state){case"running":v=Date.now(),f&&m();break;case"suspended":document.hidden||h++,f&&h>=t?d(R("suspended")):setTimeout(w,n)}}catch(e){d(e)}};w(),c=function(){f||(f=!0,v>0&&m())}})),c]}(n),l=c[0],d=c[1],f=l.then((function(e){return function(e){for(var t=0,i=0;i<e.length;++i)t+=Math.abs(e[i]);return t}(e.getChannelData(0).subarray(4500))}),(function(e){if("timeout"===e.name||"suspended"===e.name)return-3;throw e}));return f.catch((function(){})),function(){return d(),f}},screenFrame:function(){var e=this,t=X();return function(){return o(e,void 0,void 0,(function(){var e,n;return c(this,(function(r){switch(r.label){case 0:return[4,t()];case 1:return e=r.sent(),[2,[(n=function(e){return null===e?null:T(e,10)})(e[0]),n(e[1]),n(e[2]),n(e[3])]]}}))}))}},osCpu:function(){return navigator.oscpu},languages:function(){var e,t=navigator,n=[],r=t.language||t.userLanguage||t.browserLanguage||t.systemLanguage;if(void 0!==r&&n.push([r]),Array.isArray(t.languages))D()&&P([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||n.push(t.languages);else if("string"==typeof t.languages){var o=t.languages;o&&n.push(o.split(","))}return n},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return _(M(navigator.deviceMemory),void 0)},screenResolution:function(){var s=screen,e=function(e){return _(S(e),null)},t=[e(s.width),e(s.height)];return t.sort().reverse(),t},hardwareConcurrency:function(){return _(S(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,t=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(t){var n=(new t).resolvedOptions().timeZone;if(n)return n}var r,o=(r=(new Date).getFullYear(),-Math.max(M(new Date(r,0,1).getTimezoneOffset()),M(new Date(r,6,1).getTimezoneOffset())));return"UTC"+(o>=0?"+":"")+Math.abs(o)},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){var e,t;if(!(z()||(e=window,t=navigator,P(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in t,"msSaveBlob"in t])>=3&&!z())))try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&I()&&!O()?function(){if("iPad"===navigator.platform)return!0;var s=screen,e=s.width/s.height;return P(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,e>.65&&e<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var t=[],i=0;i<e.length;++i){var n=e[i];if(n){for(var r=[],o=0;o<n.length;++o){var c=n[o];r.push({type:c.type,suffixes:c.suffixes})}t.push({name:n.name,description:n.description,mimeTypes:r})}}return t}},canvas:function(){var e=function(){var canvas=document.createElement("canvas");return canvas.width=1,canvas.height=1,[canvas,canvas.getContext("2d")]}(),canvas=e[0],t=e[1];return function(canvas,e){return!(!e||!canvas.toDataURL)}(canvas,t)?{winding:W(t),geometry:J(canvas,t),text:H(canvas,t)}:{winding:!1,geometry:"",text:""}},touchSupport:function(){var e,t=navigator,n=0;void 0!==t.maxTouchPoints?n=S(t.maxTouchPoints):void 0!==t.msMaxTouchPoints&&(n=t.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(t){e=!1}return{maxTouchPoints:n,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],t=0,n=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];t<n.length;t++){var r=n[t],o=window[r];o&&"object"==typeof o&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var t=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch(e){return!1}},colorGamut:function(){for(var e=0,t=["rec2020","p3","srgb"];e<t.length;e++){var n=t[e];if(matchMedia("(color-gamut: "+n+")").matches)return n}},invertedColors:function(){return!!ne("inverted")||!ne("none")&&void 0},forcedColors:function(){return!!re("active")||!re("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var i=0;i<=100;++i)if(matchMedia("(max-monochrome: "+i+")").matches)return i;throw new Error("Too high value")}},contrast:function(){return ae("no-preference")?0:ae("high")||ae("more")?1:ae("low")||ae("less")?-1:ae("forced")?10:void 0},reducedMotion:function(){return!!oe("reduce")||!oe("no-preference")&&void 0},hdr:function(){return!!ie("high")||!ie("standard")&&void 0},math:function(){var e,t=ce.acos||ue,n=ce.acosh||ue,r=ce.asin||ue,o=ce.asinh||ue,c=ce.atanh||ue,l=ce.atan||ue,d=ce.sin||ue,f=ce.sinh||ue,h=ce.cos||ue,v=ce.cosh||ue,m=ce.tan||ue,w=ce.tanh||ue,y=ce.exp||ue,k=ce.expm1||ue,C=ce.log1p||ue;return{acos:t(.12312423423423424),acosh:n(1e308),acoshPf:(e=1e154,ce.log(e+ce.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:function(e){return ce.log(e+ce.sqrt(e*e+1))}(1),atanh:c(.5),atanhPf:function(e){return ce.log((1+e)/(1-e))/2}(.5),atan:l(.5),sin:d(-1e300),sinh:f(1),sinhPf:function(e){return ce.exp(e)-1/ce.exp(e)/2}(1),cos:h(10.000000000123),cosh:v(1),coshPf:function(e){return(ce.exp(e)+1/ce.exp(e))/2}(1),tan:m(-1e300),tanh:w(1),tanhPf:function(e){return(ce.exp(2*e)-1)/(ce.exp(2*e)+1)}(1),exp:y(1),expm1:k(1),expm1Pf:function(e){return ce.exp(e)-1}(1),log1p:C(10),log1pPf:function(e){return ce.log(1+e)}(10),powPI:function(e){return ce.pow(ce.PI,e)}(-100)}}};function de(e){var t=function(e){if(F())return.4;if(I())return O()?.5:.3;var t=e.platform.value||"";if(/^Win/.test(t))return.6;if(/^Mac/.test(t))return.5;return.7}(e),n=function(e){return T(.99+.01*e,1e-4)}(t);return{score:t,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,""+n)}}function fe(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?r({name:(n=t).name,message:n.message,stack:null===(o=n.stack)||void 0===o?void 0:o.split("\n")},n):t;var n,o}),2)}function he(e){return x(function(e){for(var t="",n=0,r=Object.keys(e).sort();n<r.length;n++){var o=r[n],component=e[o],c=component.error?"error":JSON.stringify(component.value);t+=(t?"|":"")+o.replace(/([:|\\])/g,"\\$1")+":"+c}return t}(e))}function ve(e){return void 0===e&&(e=50),function(e,t){void 0===t&&(t=1/0);var n=window.requestIdleCallback;return n?new Promise((function(e){return n.call(window,(function(){return e()}),{timeout:t})})):f(Math.min(e,t))}(e,2*e)}function pe(e,t){var n=Date.now();return{get:function(r){return o(this,void 0,void 0,(function(){var o,l,f;return c(this,(function(c){switch(c.label){case 0:return o=Date.now(),[4,e()];case 1:return l=c.sent(),f=function(e){var t;return{get visitorId(){return void 0===t&&(t=he(this.components)),t},set visitorId(e){t=e},confidence:de(e),components:e,version:d}}(l),(t||(null==r?void 0:r.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: "+f.version+"\nuserAgent: "+navigator.userAgent+"\ntimeBetweenLoadAndGet: "+(o-n)+"\nvisitorId: "+f.visitorId+"\ncomponents: "+fe(l)+"\n```"),[2,f]}}))}))}}}var me={load:function(e){var t=void 0===e?{}:e,n=t.delayFallback,r=t.debug,l=t.monitoring,d=void 0===l||l;return o(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return d&&function(){if(!(window.__fpjs_d_m||Math.random()>=.01))try{var e=new XMLHttpRequest;e.open("get","https://openfpcdn.io/fingerprintjs/v3.3.2/npm-monitoring",!0),e.send()}catch(e){console.error(e)}}(),[4,ve(n)];case 1:return e.sent(),[2,pe(L(le,{debug:r},[]),r)]}}))}))},hashComponents:he,componentsToDebugString:fe};t.a=me}}]);