(function(e){function t(t){for(var n,u,i=t[0],s=t[1],l=t[2],c=0,d=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2653538b"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"51c0":function(e,t,r){"use strict";r("54a6")},"54a6":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(r("51c0"),r("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),l=s.exports,c=r("8c4f"),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"testBox"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{id:"url",placeholder:"请输入地址",type:"text"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})]),t("div",[t("van-button",{attrs:{type:"primary"},on:{click:e.go2}},[e._v("当前页面加载iframe")])],1),t("div",[t("van-button",{attrs:{type:"primary"},on:{click:e.go}},[e._v("跳转页面加载iframe")])],1)]),t("iframe",{attrs:{id:"iframe",allowfullscreen:"",allow:"microphone;camera;midi;encrypted-media;"}})])},d=[],f={name:"Home",data(){return{url:""}},mounted(){window.addEventListener("message",e=>{console.log(e),e.data&&"000000"==e.data.code&&vant.Dialog.confirm({message:"您已退出登录，是否重新登录"}).then(()=>{location.reload()}).catch(()=>{})},!1)},methods:{go2(){const e=window.document.getElementById("iframe");document.querySelector(".testBox").style.display="none",e.setAttribute("src",document.getElementById("url").value)},go(){this.$store.state.url=this.url,this.$router.push("/about")}}},m=f,v=(r("9632"),Object(u["a"])(m,p,d,!1,null,null,null)),h=v.exports;n["a"].use(c["a"]);const b=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))}],y=new c["a"]({mode:"history",base:"",routes:b});var g=y,w=r("2f62");n["a"].use(w["a"]);var j=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=r("b970");r("157a");n["a"].use(O["a"]),n["a"].config.productionTip=!1,new n["a"]({router:g,store:j,render:e=>e(l)}).$mount("#app")},9632:function(e,t,r){"use strict";r("c9f3")},c9f3:function(e,t,r){}});