(function(e){function t(t){for(var n,r,s=t[0],i=t[1],u=t[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);m&&m(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({App:"App"}[e]||e)+"."+{App:"269586e7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={App:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({App:"App"}[e]||e)+"."+{App:"66f3324f"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],m.parentNode.removeChild(m),a(c)},m.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="lazurde/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var m=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0118":function(e){e.exports=JSON.parse('{"Home_Keywords":""}')},"2f53":function(e){e.exports=JSON.parse('{"Sign In":"تسجيل الدخول","Sign Up":"تسجيل حساب","LogOut":"تسجيل الخروج","Home":"الرئيسية","Discover More":"أكتشف المزيد","Play Video":"مشاهدة الفيديو","Offering Services":"تقديم الخدمات","About Our Agency":"حول وكالتنا","Show More":"مشاهدة المزيد","Contact Us":"تواصل معنا","FullName":"الاسم الكامل","Email":"البريد الالكتروني","website":"رابط الموقع","messege":"رسالتك","Send messege":"أرسل رسالتك"}')},"2fb4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function r(e,t,a,r,o,c){const s=Object(n["M"])("Loader"),i=Object(n["M"])("Header"),u=Object(n["M"])("router-view"),l=Object(n["M"])("Footer");return Object(n["E"])(),Object(n["h"])(n["a"],null,[e.$store.state.loader?(Object(n["E"])(),Object(n["f"])(s,{key:0})):Object(n["g"])("",!0),Object(n["i"])("main",{id:"main",class:Object(n["u"])(["en"==c.Lang?"dir-en":"dir-ar"])},[Object(n["l"])(i),Object(n["l"])(n["c"],{name:"fade-page",mode:"out-in"},{default:Object(n["X"])(()=>[Object(n["l"])(u)]),_:1}),Object(n["l"])(l)],2)],64)}var o=a("dfaa"),c=(a("79c8"),a("6b0d")),s=a.n(c);const i=s()(o["a"],[["render",r]]);var u=i,l=a("6605"),p=a("c3bf"),m=a("b477"),g=a("0118");const d=new p["a"];d.get("languages")||d.set("languages","en");const f=[{path:"/",name:"ar"==d.get("languages")?"الصفحة الرئيسية":"Home Page",component:()=>a.e("App").then(a.bind(null,"aec6")),meta:{title:"ar"==d.get("languages")?"لازورد - الرئيسية":"Lazurde - Home Page",metaTags:[{name:"description",content:m.Home_Description},{name:"keywords",content:g.Home_Keywords}]}},{path:"/about",name:"ar"==d.get("languages")?"من نحن":"About Us",component:()=>a.e("App").then(a.bind(null,"a83e")),meta:{title:"ar"==d.get("languages")?"لازورد - من نحن":"Lazurde - About Us"}},{path:"/services",name:"ar"==d.get("languages")?"الخدمات":"Services",component:()=>a.e("App").then(a.bind(null,"a4a5")),meta:{title:"ar"==d.get("languages")?"لازورد - الخدمات":"Lazurde - Services"}},{path:"/services/details/:id",name:"ar"==d.get("languages")?"تفاصيل الخدمة":"Services Details",component:()=>a.e("App").then(a.bind(null,"4ab3")),meta:{title:"ar"==d.get("languages")?"لازورد - تفاصيل الخدمة":"Lazurde - Services Details"}},{path:"/projects",name:"ar"==d.get("languages")?"المشاريع":"Projects",component:()=>a.e("App").then(a.bind(null,"5e6b")),meta:{title:"ar"==d.get("languages")?"لازورد - المشاريع":"Lazurde - Projects"}},{path:"/projects/details/:id",name:"ar"==d.get("languages")?"تفاصيل المشروع":"Project Details",component:()=>a.e("App").then(a.bind(null,"2a5c")),meta:{title:"ar"==d.get("languages")?"لازورد - تفاصيل المشروع":"Lazurde - Project Details"}},{path:"/contact",name:"ar"==d.get("languages")?"تواصل معنا":"Contact Us",component:()=>a.e("App").then(a.bind(null,"0d65")),meta:{title:"ar"==d.get("languages")?"لازورد - تواصل معنا":"Lazurde - Contact Us"}},{path:"/auth",name:"ar"==d.get("lang")?"تسجيل الدخول او حساب":"Login Or SignUp",component:()=>a.e("App").then(a.bind(null,"3bfd")),meta:{title:"ar"==d.get("lang")?"اتمام للخدمات - تسجيل الدخول او حساب":"Lazurde - Login Or SignUp",requiresHome:!0}},{path:"/:pathMatch(.*)*",name:"error",component:()=>a.e("App").then(a.bind(null,"dda8"))}],b=Object(l["a"])({history:Object(l["b"])("lazurde/"),routes:f});b.beforeResolve(e=>{if(document.title=e.meta.title||"Lazurde",Object.prototype.hasOwnProperty.call(e.meta,"metaTags"))for(let t=0;t<e.meta.metaTags.length;t++){let a=document.getElementsByTagName("meta");for(let r=0;r<a.length;r++)a[r].name==e.meta.metaTags[t].name&&a[r].remove();let n=document.createElement("meta");e.meta.metaTags[t]&&Object.prototype.hasOwnProperty.call(e.meta.metaTags[t],"name")&&(n.name=e.meta.metaTags[t].name,n.content=e.meta.metaTags[t].content),Object.prototype.hasOwnProperty.call(e.meta.metaTags[t],"property")&&(n.property=e.meta.metaTags[t].name,n.content=e.meta.metaTags[t].content),document.head.appendChild(n)}if(e.meta.requiresAuth&&""==d.get("Userdata"))return{path:"/login"}});var h=b,O=a("5502");const v=new p["a"];var y=Object(O["a"])({state:{Lang:v.get("languages")||"en",OverLay:!1,loader:!0},mutations:{SET_Lang(e,t){e.Lang=t},SET_OverLay(e,t){e.OverLay=t},SET_Loader(e,t){e.loader=t}},actions:{SETLang({commit:e},t){e("SET_Lang",t),v.set("languages",t)},SETOverLay({commit:e},t){e("SET_OverLay",t)},SETLOADER({commit:e},t){e("SET_Loader",t)}},getters:{}}),S=(a("2fb4"),a("8cfd"),a("bc73"),a("8e6d"),a("83e3"),a("90ea")),j=a("a16a"),L=(a("c58e"),a("e6f1"),a("5f67"),a("6d3b")),A=a("8343"),w=a("5dc8"),T=a("d17a"),E=a("b42f"),P=a("2f53"),_=a("6a6a"),M=a("9ca6"),D=a("ad3d");L["a"].use([A["a"],w["a"],T["a"],E["a"]]);const U=new p["a"],C=Object(M["a"])({messages:{ar:P,en:_},locale:U.get("languages"),fallbackLocale:"en"});Object(n["e"])(u).component("Swiper",S["a"]).component("SwiperSlide",j["a"]).component("font-awesome-icon",D["a"]).use(y).use(h).use(C).mount("#app")},"6a6a":function(e){e.exports=JSON.parse('{"Sign In":"Sign In","Sign Up":"Sign Up","LogOut":"LogOut","Home":"Home","Discover More":"Discover More","Play Video":"Play Video","Offering Services":"Offering Services","About Our Agency":"About Our Agency","Show More":"Show Moreun","Contact Us":"Contact Us","FullName":"Full Name","Email":"Email","website":"Website Url","messege":"Messege","Send messege":"Send Messege"}')},"79c8":function(e,t,a){"use strict";a("f86a")},"8cfd":function(e,t,a){},"8e6d":function(e,t,a){},b477:function(e){e.exports=JSON.parse('{"Home_Description":""}')},bc73:function(e,t,a){},c58e:function(e,t,a){},dfaa:function(e,t,a){"use strict";(function(e){var n=a("7a23");e.jQuery=a("1157");var r=e.jQuery;window.$=r,t["a"]={name:"App",components:{Loader:Object(n["m"])(()=>a.e("App").then(a.bind(null,"b6e6"))),Header:Object(n["m"])(()=>a.e("App").then(a.bind(null,"9898"))),Footer:Object(n["m"])(()=>a.e("App").then(a.bind(null,"3e61")))},computed:{Lang(){return this.$i18n.locale}},mounted(){setTimeout(()=>{this.$store.dispatch("SETLOADER",!1)},3e3)},watch:{$route(){r("html, body").animate({scrollTop:0},500),this.$store.dispatch("SETLOADER",!0),setTimeout(()=>{this.$store.dispatch("SETLOADER",!1)},2e3)}}}}).call(this,a("c8ba"))},e6f1:function(e,t,a){},f86a:function(e,t,a){}});
//# sourceMappingURL=app.3c9609ca.js.map