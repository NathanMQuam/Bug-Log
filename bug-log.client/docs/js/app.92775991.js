(function(t){function e(e){for(var n,o,s=e[0],u=e[1],i=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);b&&b(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==c[s]&&(n=!1)}n&&(r.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},o={app:0},c={app:0},r=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d34d7":"889c7ebf","chunk-3b0d2ae9":"0c1cd6ea","chunk-7bdd8267":"42adde6b"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={"chunk-3b0d2ae9":1,"chunk-7bdd8267":1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0d34d7":"31d6cfe0","chunk-3b0d2ae9":"90f912e0","chunk-7bdd8267":"ead8d67a"}[t]+".css",c=u.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===c))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===n||l===c)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var n=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[t],b.parentNode.removeChild(b),a(r)},b.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[t]=0})));var n=c[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=c[t]=[e,a]}));e.push(n[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(b);var a=c[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}c[t]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var b=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01ac":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o={class:"col-4 d-flex justify-content-center align-content-center h-100"},c={class:"col-3"},r={class:"col-2"},s={class:"col-3"};function u(t,e,a,u,i,l){const d=Object(n["y"])("Author"),b=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])(b,{class:"Bug",to:{name:"BugPage",params:{id:a.bug.id}}},{default:Object(n["F"])(()=>[Object(n["h"])("div",o,Object(n["A"])(a.bug.title),1),Object(n["h"])("div",c,[Object(n["h"])(d,{user:a.bug.creator},null,8,["user"])]),Object(n["h"])("div",r,[Object(n["h"])("span",{class:u.statusStyle},Object(n["A"])(a.bug.closed),3)]),Object(n["h"])("div",s,Object(n["A"])(u.lastModified),1)]),_:1},8,["to"])}var i=a("03a5"),l={name:"Bug",props:{bug:Object},setup(t){const e=t.bug.closed?"text-success":"text-danger",a=t.bug.lastModified.split("T")[0];return{statusStyle:e,lastModified:a}},components:{Author:i["default"]}};l.render=u;e["default"]=l},"0301":function(t,e,a){"use strict";a("1a6f")},"03a5":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o={class:"Author mh-100 mw-100"};function c(t,e,a,c,r,s){return Object(n["r"])(),Object(n["d"])("div",o,[Object(n["h"])("img",{src:a.user.picture,class:"img-fluid img-thumbnail rounded-circle",style:{"max-width":"5vw !important"}},null,8,["src"]),Object(n["g"])(" "+Object(n["A"])(a.user.name),1)])}var r={name:"Author",props:{user:Object},setup(){return{}},components:{}};r.render=c;e["default"]=r},"1a6f":function(t,e,a){},2317:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));class n{constructor(t={}){this.id=t.id||t._id||"",this.title=t.title||"",this.description=t.description||"",this.creator=t.creator||t.creatorId||"",this.lastModified=t.updatedAt||"",this.closed=t.closed||!1,this.closedDate=t.closedDate||""}}},"2b20":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s}));var n=a("bc3a"),o=a.n(n);const c=window.location.origin.includes("localhost")?"http://localhost:3000":"",r=o.a.create({baseURL:c,timeout:8e3}),s=function(t){r.defaults.headers.authorization=t}},3723:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o={class:"Note row"},c={class:"col-3"},r={class:"col"},s=Object(n["h"])("small",null,"delete",-1);function u(t,e,a,u,i,l){const d=Object(n["y"])("Author");return Object(n["r"])(),Object(n["d"])("div",o,[Object(n["h"])("div",c,[Object(n["h"])(d,{user:a.note.creator},null,8,["user"])]),Object(n["h"])("div",r,Object(n["A"])(a.note.body),1),u.user.email===a.note.creator.email?(Object(n["r"])(),Object(n["d"])("div",{key:0,class:"col-1",onClick:e[1]||(e[1]=(...t)=>u.deleteNote&&u.deleteNote(...t))},[s])):Object(n["e"])("",!0)])}var i=a("83fc"),l=a("4215"),d=a("5a80"),b=a("03a5"),p={name:"Note",props:{note:l["a"]},setup(t){const e=Object(n["b"])(()=>i["a"].user);return{user:e,deleteNote(){window.confirm("Are you sure you want to delete this note?")&&d["a"].deleteNote(t.note)}}},components:{Author:b["default"]}};p.render=u;e["default"]=p},"41cb":function(t,e,a){"use strict";var n=a("6c02"),o=a("8816");function c(t){return()=>a("a2f9")(`./${t}.vue`)}const r=[{path:"/",name:"Home",component:c("HomePage")},{path:"/account",name:"Account",component:c("AccountPage"),beforeEnter:o["a"]},{path:"/bug/:id",name:"BugPage",component:c("BugPage")}],s=Object(n["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(n["b"])(),routes:r});e["a"]=s},4215:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));class n{constructor(t={}){this.bug=t.bug||"",this.body=t.body||"",this.creator=t.creator||"",this.id=t.id||t._id||""}}},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o=Object(n["h"])("footer",{class:"mt-5"},[Object(n["h"])("div",{class:"bg-dark text-light text-center p-4"}," Made with 💖 by CodeWorks ")],-1);function c(t,e,a,c,r,s){const u=Object(n["y"])("Navbar"),i=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(u)]),Object(n["h"])("main",null,[Object(n["h"])(i)]),o],64)}var r=a("83fc"),s={name:"App",setup(){return{appState:Object(n["b"])(()=>r["a"])}}};a("0301");s.render=c;var u=s;function i(t){const e=a("ccc2");e.keys().forEach(a=>{const n=e(a),o=n.default||n,c=o.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(c,o)})}var l=a("41cb"),d=a("4989"),b=a.n(d),p=a("1157"),g=a.n(p),h=a("f0bd");const f=Object(n["c"])(u);i(f),f.use(l["a"],b.a,g.a,h["default"]).mount("#app")},"5a80":function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a("2b20"),o=a("83fc"),c=a("8a4e"),r=a("4215");class s{async getNotesByBugId(t){try{const e=await n["a"].get("/api/bugs/"+t+"/notes");o["a"].notes=e.data.map(t=>new r["a"](t))}catch(e){c["a"].error(e)}}async createNote(t=new r["a"]){try{t.creator=o["a"].user.id,await n["a"].post("/api/notes/",new r["a"](t)),this.getNotesByBugId(t.bug)}catch(e){c["a"].error(e)}}async editNote(t,e=new r["a"]){}async deleteNote(t){try{await n["a"].delete("/api/notes/"+t.id),this.getNotesByBugId(t.bug)}catch(e){c["a"].error(e)}}}const u=new s},"83fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("7a23"),o=a("2317"),c=a("4215");const r=Object(n["v"])({user:{},account:{},bugs:[],activeBug:new o["a"],notes:[new c["a"]({body:"AppState note test",creator:{name:"AppState creator name"}}),new c["a"]({body:"AppState note test2",creator:{name:"AppState creator2 name"}})]})},"8a4e":function(t,e,a){"use strict";function n(t,e){window.location.origin.includes("localhost")&&console[t](...e)}a.d(e,"a",(function(){return o}));const o={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}}},"9d8d":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),o=a("c974"),c=a.n(o);const r=Object(n["I"])("data-v-0859b676");Object(n["u"])("data-v-0859b676");const s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},u=Object(n["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(n["h"])("img",{alt:"logo",src:c.a,height:"45"})],-1),i=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-text ml-auto"},b={key:1,class:"dropdown"},p={class:"mx-3"},g=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(n["s"])();const h=r((t,e,a,o,c,h)=>{const f=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])("nav",s,[Object(n["h"])(f,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:r(()=>[u]),_:1}),i,Object(n["h"])("div",l,[Object(n["h"])("span",d,[o.user.isAuthenticated?(Object(n["r"])(),Object(n["d"])("div",b,[Object(n["h"])("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>o.state.dropOpen=!o.state.dropOpen)},[Object(n["h"])("img",{src:o.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(n["h"])("span",p,Object(n["A"])(o.user.name),1)]),Object(n["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:o.state.dropOpen}],onClick:e[4]||(e[4]=t=>o.state.dropOpen=!1)},[Object(n["h"])(f,{to:{name:"Account"}},{default:r(()=>[g]),_:1}),Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>o.logout&&o.logout(...t))}," logout ")],2)])):(Object(n["r"])(),Object(n["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>o.login&&o.login(...t))}," Login "))])])])});var f=a("8816"),O=a("83fc");const m="nathan-m-quam.us.auth0.com",j="WmQRrAZBKoanRKFgD2eGC6mOhiqDGPYy",v="https://KanBan";var y=a("41cb"),w=a("2b20"),B=a("8a4e");class k{async getAccount(){try{const t=await w["a"].get("/account");O["a"].account=t.data}catch(t){B["a"].error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const A=new k,N=Object(f["b"])({domain:m,clientId:j,audience:v,onRedirectCallback:t=>{y["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});N.on(N.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(w["b"])(N.bearer),await A.getAccount(),O["a"].user=N.user}));var x={name:"Navbar",setup(){const t=Object(n["v"])({dropOpen:!1});return{state:t,user:Object(n["b"])(()=>O["a"].user),async login(){N.loginWithPopup()},async logout(){await N.logout({returnTo:window.location.origin})}}}};a("a8db");x.render=h,x.__scopeId="data-v-0859b676";e["default"]=x},a2f9:function(t,e,a){var n={"./AccountPage.vue":["e542","chunk-7bdd8267"],"./BugPage.vue":["5bd8","chunk-2d0d34d7"],"./HomePage.vue":["78a7","chunk-3b0d2ae9"]};function o(t){if(!a.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],o=e[0];return a.e(e[1]).then((function(){return a(o)}))}o.keys=function(){return Object.keys(n)},o.id="a2f9",t.exports=o},a549:function(t,e,a){},a8db:function(t,e,a){"use strict";a("a549")},aaf3:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o={class:"ReportBug"},c=Object(n["h"])("button",{type:"button",class:"btn btn-dark","data-toggle":"modal","data-target":"#reportBugModal"}," Report Bug ",-1),r={class:"modal fade",id:"reportBugModal",tabindex:"-1",role:"dialog","aria-labelledby":"reportBugModalLabel","aria-hidden":"true"},s={class:"modal-dialog",role:"document"},u=Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title",id:"reportBugModalLabel"}," Report Bug "),Object(n["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},l={class:"form-group d-inline-block w-50"},d=Object(n["h"])("label",{for:"newBugTitle"},"Bug Title",-1),b={class:"d-inline-block w-50 mb-auto"},p=Object(n["g"])(" Reported By: "),g={class:"form-group"},h=Object(n["h"])("label",{for:"newBugDescription"},"Description",-1),f=Object(n["h"])("div",{class:"modal-footer"},[Object(n["h"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Cancel "),Object(n["h"])("button",{type:"submit",class:"btn btn-primary"}," Submit ")],-1);function O(t,e,a,O,m,j){return Object(n["r"])(),Object(n["d"])("div",o,[c,Object(n["h"])("div",r,[Object(n["h"])("div",s,[Object(n["h"])("form",{class:"modal-content",onSubmit:e[3]||(e[3]=Object(n["H"])((...t)=>O.submitBug&&O.submitBug(...t),["prevent"]))},[u,Object(n["h"])("div",i,[Object(n["h"])("div",null,[Object(n["h"])("div",l,[d,Object(n["G"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"newBugTitle",placeholder:"Title of Bug","onUpdate:modelValue":e[1]||(e[1]=t=>O.newBug.title=t)},null,512),[[n["D"],O.newBug.title]])]),Object(n["h"])("div",b,[p,Object(n["h"])("p",null,Object(n["A"])(O.user.name),1)])]),Object(n["h"])("div",g,[h,Object(n["G"])(Object(n["h"])("textarea",{class:"form-control",id:"newBugDescription",rows:"3","onUpdate:modelValue":e[2]||(e[2]=t=>O.newBug.description=t)},null,512),[[n["D"],O.newBug.description]])])]),f],32)])])])}var m=a("83fc"),j=a("af90"),v=a("1157"),y=a.n(v),w={name:"ReportBug",setup(){const t=Object(n["b"])(()=>m["a"].user),e={};return{user:t,newBug:e,submitBug(){j["a"].createBug(e),y()("#reportBugModal").modal("hide")}}},components:{}};w.render=O;e["default"]=w},af90:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("2b20"),o=a("83fc"),c=a("8a4e"),r=a("2317"),s=a("41cb");class u{async getAllBugs(){try{const t=await n["a"].get("/api/bugs");o["a"].bugs=t.data.map(t=>new r["a"](t))}catch(t){c["a"].error(t)}}async getBugById(t){try{o["a"].activeBug=new r["a"];const e=await n["a"].get("/api/bugs/"+t);return o["a"].activeBug=new r["a"](e.data),e}catch(e){c["a"].error(e)}}async createBug(t){try{const e=await n["a"].post("api/bugs",new r["a"](t));o["a"].activeBug=new r["a"](e.data),s["a"].push({name:"BugPage",params:{id:e.data.id}})}catch(e){c["a"].error(e)}}async editBug(t,e){try{delete e.closed;const a=await this.getBugById(t);a.data.closed||await n["a"].put("/api/bugs/"+t,e),this.getBugById(t)}catch(a){c["a"].error(a)}}async closeBug(t){try{await n["a"].delete("/api/bugs/"+t),this.getBugById(t)}catch(e){c["a"].error(e)}}}const i=new u},bcb4:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o={class:"AddNote"},c=Object(n["h"])("button",{type:"button",class:"btn btn-dark","data-toggle":"modal","data-target":"#addNoteModal"}," Add Note ",-1),r={class:"modal fade",id:"addNoteModal",tabindex:"-1",role:"dialog","aria-labelledby":"addNoteModalLabel","aria-hidden":"true"},s={class:"modal-dialog",role:"document"},u=Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title",id:"addNoteModalLabel"}," New Note "),Object(n["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},l={class:"d-inline-block"},d=Object(n["g"])(" Reported By: "),b={class:"form-group"},p=Object(n["h"])("label",{for:"newBugDescription"},"Description",-1),g=Object(n["h"])("div",{class:"modal-footer"},[Object(n["h"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Cancel "),Object(n["h"])("button",{type:"submit",class:"btn btn-primary"}," Submit ")],-1);function h(t,e,a,h,f,O){return Object(n["r"])(),Object(n["d"])("div",o,[c,Object(n["h"])("div",r,[Object(n["h"])("div",s,[Object(n["h"])("form",{class:"modal-content",onSubmit:e[2]||(e[2]=Object(n["H"])((...t)=>h.addNote&&h.addNote(...t),["prevent"]))},[u,Object(n["h"])("div",i,[Object(n["h"])("div",null,[Object(n["h"])("div",l,[d,Object(n["h"])("p",null,Object(n["A"])(h.state.user.name),1)])]),Object(n["h"])("div",b,[p,Object(n["G"])(Object(n["h"])("textarea",{class:"form-control",id:"newBugDescription",rows:"3","onUpdate:modelValue":e[1]||(e[1]=t=>h.state.newNote.body=t)},null,512),[[n["D"],h.state.newNote.body]])])]),g],32)])])])}var f=a("5a80"),O=a("4215"),m=a("83fc"),j={name:"AddNote",props:{bug:String},setup(t){const e=Object(n["v"])({newNote:new O["a"]({bug:t.bug}),user:Object(n["b"])(()=>m["a"].user)});return{state:e,addNote(){console.log(e.newNote),f["a"].createNote(new O["a"](e.newNote))}}},components:{}};j.render=h;e["default"]=j},c974:function(t,e,a){t.exports=a.p+"img/cw-logo.5a19e7f9.png"},ccc2:function(t,e,a){var n={"./AddNote.vue":"bcb4","./Author.vue":"03a5","./Bug.vue":"01ac","./EditBug.vue":"d2ea","./Note.vue":"3723","./ReportBug.vue":"aaf3","./navbar.vue":"9d8d"};function o(t){var e=c(t);return a(e)}function c(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=c,t.exports=o,o.id="ccc2"},d2ea:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o={class:"EditBug"},c=Object(n["h"])("button",{type:"button",class:"btn btn-dark","data-toggle":"modal","data-target":"#editBugModal"}," Edit Bug ",-1),r={class:"modal fade",id:"editBugModal",tabindex:"-1",role:"dialog","aria-labelledby":"editBugModalLabel","aria-hidden":"true"},s={class:"modal-dialog",role:"document"},u=Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title",id:"editBugModalLabel"}," Edit Bug "),Object(n["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},l={class:"form-group d-inline-block w-50"},d=Object(n["h"])("label",{for:"newBugTitle"},"Bug Title",-1),b={class:"d-inline-block w-50 mb-auto"},p=Object(n["g"])(" Reported By: "),g={class:"form-group"},h=Object(n["h"])("label",{for:"newBugDescription"},"Description",-1),f=Object(n["h"])("div",{class:"modal-footer"},[Object(n["h"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Cancel "),Object(n["h"])("button",{type:"submit",class:"btn btn-primary"}," Submit ")],-1);function O(t,e,a,O,m,j){return Object(n["r"])(),Object(n["d"])("div",o,[c,Object(n["h"])("div",r,[Object(n["h"])("div",s,[Object(n["h"])("form",{class:"modal-content",onSubmit:e[3]||(e[3]=Object(n["H"])(t=>O.submitBug(),["prevent"]))},[u,Object(n["h"])("div",i,[Object(n["h"])("div",null,[Object(n["h"])("div",l,[d,Object(n["G"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"newBugTitle",placeholder:"Title of Bug","onUpdate:modelValue":e[1]||(e[1]=t=>O.state.newBug.title=t)},null,512),[[n["D"],O.state.newBug.title]])]),Object(n["h"])("div",b,[p,Object(n["h"])("p",null,Object(n["A"])(O.state.user.name),1)])]),Object(n["h"])("div",g,[h,Object(n["G"])(Object(n["h"])("textarea",{class:"form-control",id:"newBugDescription",rows:"3","onUpdate:modelValue":e[2]||(e[2]=t=>O.state.newBug.description=t)},null,512),[[n["D"],O.state.newBug.description]])])]),f],32)])])])}var m=a("83fc"),j=a("af90"),v=a("1157"),y=a.n(v),w={name:"EditBug",props:{bug:Object},setup(t){const e=Object(n["v"])({user:Object(n["b"])(()=>m["a"].user),newBug:Object(n["b"])(()=>t.bug)});return{state:e,async submitBug(){j["a"].editBug(t.bug.id,e.newBug),y()("#editBugModal").modal("hide")}}},components:{}};w.render=O;e["default"]=w}});