(function(t){function e(e){for(var n,o,s=e[0],u=e[1],l=e[2],c=0,h=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);f&&f(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},a={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a69eecb2"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={about:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"9a936d5f"}[t]+".css",a=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===a))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],c=l.getAttribute("data-href");if(c===n||c===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],f.parentNode.removeChild(f),r(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(t);var h=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",h.name="ChunkLoadError",h.type=n,h.request=o,r[1](h)}a[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var f=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3c99":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("6302"),r("ce01"),r("1759"),r("7728");var n=r("430a"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"middle",on:{touchstart:function(e){return e.preventDefault(),t.middleTouchStart.apply(null,arguments)},touchmove:function(e){return e.preventDefault(),t.middleTouchMove.apply(null,arguments)},touchend:function(e){return e.preventDefault(),t.middleTouchEnd.apply(null,arguments)}}},[r("div",{ref:"cd",staticClass:"cd-wrapper"},[t._v(" 左 ")]),r("div",{ref:"lyricList",staticClass:"lyric-wrapper"},[t._v(" 右侧 ")])])},a=[],i={name:"test",data:function(){return{touchInfo:{},currentShow:"cd"}},created:function(){},mounted:function(){},methods:{middleTouchStart:function(t){console.log(t),this.touchInfo.initiated=!0,this.touchInfo.moved=!1;var e=t.touches[0];this.touchInfo.startX=e.pageX,this.touchInfo.startY=e.pageY,console.log("this.touchInfo",this.touchInfo)},middleTouchMove:function(t){if(this.touchInfo.initiated){var e=t.touches[0],r=e.pageX-this.touchInfo.startX,n=e.pageY-this.touchInfo.startY;if(!(Math.abs(n)>Math.abs(r))){this.touchInfo.moved||(this.touchInfo.moved=!0);var o="cd"===this.currentShow?0:-window.innerWidth,a=Math.min(0,Math.max(-window.innerWidth,o+r));this.touchInfo.percent=Math.abs(a/window.innerWidth),this.$refs.lyricList.style.transform="translate3d(".concat(a,"px,0,0)"),this.$refs.lyricList.style.transitionDuration=0,this.$refs.cd.style.opacity=1-this.touchInfo.percent,this.$refs.cd.style.transitionDuration=0}}},middleTouchEnd:function(){if(this.touchInfo.moved){var t,e;"cd"===this.currentShow?this.touchInfo.percent>.5?(t=-window.innerWidth,e=0,this.currentShow="lyric"):(t=0,e=1):this.touchInfo.percent<.5?(t=0,this.currentShow="cd",e=1):(t=-window.innerWidth,e=0);var r=300;this.$refs.lyricList.style.transform="translate3d(".concat(t,"px,0,0)"),this.$refs.lyricList.style.transitionDuration="".concat(r,"ms"),this.$refs.cd.style.opacity=e,this.$refs.cd.style.transitionDuration="".concat(r,"ms"),this.touchInfo.initiated=!1}}}},s=i,u=(r("7c55"),r("cba8")),l=Object(u["a"])(s,o,a,!1,null,null,null),c=l.exports,h=(r("8300"),r("ea5b"),r("e551"),r("ac56")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),t._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},g=m,b=(r("a4f7"),Object(u["a"])(g,v,d,!1,null,"e8d04502",null)),_=b.exports,y={name:"Home",components:{HelloWorld:_}},w=y,j=Object(u["a"])(w,f,p,!1,null,null,null),k=j.exports;n["a"].use(h["a"]);var I=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],E=new h["a"]({routes:I}),x=E,S=r("7736");n["a"].use(S["a"]);var C=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=r("2ac2");r("9258");n["a"].use($["a"]),n["a"].config.productionTip=!1,new n["a"]({router:x,store:C,render:function(t){return t(c)}}).$mount("#app")},"7c55":function(t,e,r){"use strict";r("3c99")},"8fab":function(t,e,r){},a4f7:function(t,e,r){"use strict";r("8fab")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.9b8459c5.js.map