(function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],c=0,d=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aac728d8"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"2620416f"}[e]+".css",a=s.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===n||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"10b7":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app",staticStyle:{background:"rgb(13, 14, 33)"},attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(r("e91f"),r("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),l=s.exports,c=r("8c4f"),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"homes"},[t("div",{staticClass:"testBox"},[t("div",{staticClass:"inpt"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{id:"url",placeholder:"请输入直播间地址",type:"text",autocomplete:"off"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})]),t("div",{staticClass:"radio_box"},[t("van-radio-group",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[t("van-radio",{attrs:{name:"1"}},[e._v("当前页面加载直播间")]),t("van-radio",{attrs:{name:"2"}},[e._v("跳转页面加载直播间")])],1)],1),t("div",{staticClass:"btn_box"},[t("van-button",{staticClass:"btns",staticStyle:{background:"rgb(57, 134, 238)"},attrs:{type:"primary",round:"",size:"large"},on:{click:e.look}},[e._v("立即观看")])],1)]),t("iframe",{attrs:{id:"iframe",allowfullscreen:"",allow:"microphone;camera;midi;encrypted-media;",sandbox:"allow-same-origin allow-scripts allow-top-navigation"}})])},p=[],f=r("d399"),m={name:"Home",data(){return{url:"",checked:"1"}},mounted(){console.log(window.self!==window.top)},methods:{go2(){const e=window.document.getElementById("iframe");document.querySelector(".testBox").style.display="none",e.setAttribute("src",document.getElementById("url").value)},go(){sessionStorage.setItem("url",this.url),this.$store.state.url=this.url,this.$router.push("/about")},look(){if(!this.url)return Object(f["a"])("请输入直播间地址");1==this.checked?this.go2():this.go()}}},h=m,v=(r("bf1d"),Object(u["a"])(h,d,p,!1,null,"3fc9b6ae",null)),b=v.exports;n["a"].use(c["a"]);const g=[{path:"/clv",name:"Home",component:b},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))},{path:"*",redirect:{path:"/clv"}}],y=new c["a"]({mode:"hash",base:"",routes:g});var w=y,k=r("2f62");n["a"].use(k["a"]);var _=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=r("b970");r("157a");n["a"].use(x["a"]),n["a"].config.productionTip=!1,new n["a"]({router:w,store:_,render:e=>e(l)}).$mount("#app")},"8a05":function(e,t,r){},bf1d:function(e,t,r){"use strict";r("8a05")},e91f:function(e,t,r){"use strict";r("10b7")}});