(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"085c":function(e,a,t){"use strict";t("434a")},"0d2f":function(e,a,t){},"286d":function(e,a,t){"use strict";t("0d2f")},"434a":function(e,a,t){},a8c9:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"home"},[a("iframe",{staticClass:"iframe",attrs:{id:"iframe",allowfullscreen:"",allow:"microphone;camera;midi;encrypted-media;",sandbox:"allow-same-origin allow-scripts allow-top-navigation",src:e.url}})])},s=[],i={name:"Home",data(){return{url:""}},created(){this.url=this.$store.state.url||sessionStorage.getItem("url")},mounted(){window.addEventListener("message",e=>{console.log(e),e.data&&"000000"==e.data.code&&vant.Dialog.confirm({message:"您已退出登录，是否重新登录"}).then(()=>{location.reload()}).catch(()=>{})},!1)},methods:{}},n=i,r=(t("085c"),t("2877")),l=Object(r["a"])(n,o,s,!1,null,"30b655b4",null);a["default"]=l.exports},f820:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"home"},[a("iframe",{staticClass:"iframe",attrs:{id:"iframe",allowfullscreen:"",allow:"microphone;camera;midi;encrypted-media;",sandbox:"allow-same-origin allow-scripts allow-top-navigation",src:e.url}})])},s=[],i={name:"Home",data(){return{url:""}},created(){this.url=this.$store.state.url||sessionStorage.getItem("url")},mounted(){window.addEventListener("message",e=>{console.log(e),e.data&&"000000"==e.data.code&&vant.Dialog.confirm({message:"您已退出登录，是否重新登录"}).then(()=>{location.reload()}).catch(()=>{})},!1)},methods:{}},n=i,r=(t("286d"),t("2877")),l=Object(r["a"])(n,o,s,!1,null,"0ee4cfce",null);a["default"]=l.exports}}]);