(function(e){function t(t){for(var o,r,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"953de7bb"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"6a1d739e"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===o||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10b7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app",staticStyle:{background:"rgb(13, 14, 33)"},attrs:{id:"app"}},[t("router-view")],1)},a=[],i=(n("e91f"),n("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,null,null),l=u.exports,c=n("8c4f"),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"homes"},[t("div",{staticClass:"testBox"},[t("div",{staticClass:"inpt"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{id:"url",placeholder:"请输入直播间地址",type:"text",autocomplete:"off"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})]),t("div",{staticClass:"radio_box"},[t("van-radio-group",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[t("van-radio",{attrs:{name:"1"}},[e._v("当前页面加载直播间")]),t("van-radio",{attrs:{name:"2"}},[e._v("跳转页面加载直播间")]),t("van-radio",{attrs:{name:"3"}},[e._v("跳转页面加载直播间(只用播放器)")])],1)],1),t("div",{staticClass:"btn_box"},[t("van-button",{staticClass:"btns",staticStyle:{background:"rgb(57, 134, 238)"},attrs:{type:"primary",round:"",size:"large"},on:{click:e.look}},[e._v("立即观看")])],1)]),t("iframe",{attrs:{id:"iframe",allowfullscreen:"",allow:"microphone;camera;midi;encrypted-media;",sandbox:"allow-same-origin allow-scripts allow-top-navigation"}})])},p=[],f=n("d399"),m={name:"Home",data(){return{url:"",checked:"1"}},mounted(){console.log(window.self!==window.top)},methods:{go2(){const e=window.document.getElementById("iframe");document.querySelector(".testBox").style.display="none",e.setAttribute("src",document.getElementById("url").value)},go(){sessionStorage.setItem("url",this.url),this.$store.state.url=this.url,this.$router.push("/about")},look(){if(!this.url)return Object(f["a"])("请输入直播间地址");1==this.checked?this.go2():2==this.checked?this.go():(sessionStorage.setItem("url",this.url),this.$store.state.url=this.url,this.$router.push("/about2"))}}},h=m,v=(n("f2b1"),Object(i["a"])(h,d,p,!1,null,"2a8878dc",null)),b=v.exports;o["a"].use(c["a"]);const g=[{path:"/clv",name:"Home",component:b},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/about2",name:"About2",component:()=>n.e("about").then(n.bind(null,"a8c9"))},{path:"*",redirect:{path:"/clv"}}],y=new c["a"]({mode:"hash",base:"",routes:g});var w=y,x=n("2f62");o["a"].use(x["a"]);var S=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=n("b970");n("157a"),n("a939");o["a"].use(k["a"]),o["a"].config.productionTip=!1,new o["a"]({router:w,store:S,render:e=>e(l)}).$mount("#app")},5859:function(e,t,n){},a939:function(e,t){(function(e,t){var n,o,r,a=document,i=window,s=a.documentElement;function u(){var n=s.getBoundingClientRect().width,a=s.getBoundingClientRect().height;console.log("height",a),n=Math.min(n,a),console.log("width",n),t||(t=540),n>t&&(n=t);var i=100*n/e;if(r="html{font-size:"+i+"px !important}",o=document.getElementById("rootsize")||document.createElement("style"),document.getElementById("rootsize")||(document.getElementsByTagName("head")[0].appendChild(o),o.id="rootsize"),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=r);else try{o.innerHTML=r}catch(u){o.innerText=r}s.style.fontSize=i+"px"}u(),i.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(u,300)}),!1),i.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(u,300))}),!1),"complete"===a.readyState?a.body.style.fontSize="16px":a.addEventListener("DOMContentLoaded",(function(){a.body.style.fontSize="16px"}),!1)})(750,750)},e91f:function(e,t,n){"use strict";n("10b7")},f2b1:function(e,t,n){"use strict";n("5859")}});