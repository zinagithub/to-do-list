!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"body{\n\tbackground: #DDD;\n}\n\n.headerStyle {\n\twidth :80%;\n    height:50px;\n    /*border :1px solid #900;\n    border-radius :15px;*/\n    border-bottom: 1px solid #900;\n    margin : 0 auto;\n    color :black;\n }\n .headerStyle p {\n \ttext-align  :left;\n    margin-top : 5px;\n    margin-left :5px;\n    font-size :35px;\n    display : inline-block;\n }\n.headerStyle button {\n\tfont-size : 15px;\n    float : right;\n    margin : 3px 10px auto;\n    padding : 10px;\n    background: #900;\n    color : white;\n\n}\n.catButton {\n\tfloat :left;\n    font-size : 15px;\n    margin : 3px 3px auto;\n    padding : 10px;\n    border-radius : 5px;\n\n}\n#body-item{\n\twidth : 80%;\n    height :auto;\n    margin : -26px auto;\n    color : gray;\n    border : 1px solid #900;\n    border-radius : 15px;\n}\n\n#editDiv {\n    width :400px;\n    height :350px;\n    background: white;\n    position :fixed;\n    top : 70px;\n    left :30%;\n    border-radius : 15px;\n}\n\n#inputDiv p, #editDiv p{\n    font-size : 30px;\n    color : #900;\n    padding : 10px;\n    text-align :center;\n}\n#savePrj , #escPrj, #saveCat ,\n#escCat, #editPrj, #escEdPrj {\n    background: #900;\n    float : right;\n    margin-right : 5px;\n}\n#deleteCat, #escDelCat {\n    background: #900;\n    float : right;\n    margin : auto 15px;\n}\ntable {\n  width:100%;\n}\ntd {\n  padding: 15px;\n  text-align: left;\n  \n}\n.cut{\n\n}\n.update{\n\n}\n.cut :hover , .update :hover{\n\tcolor : #900;\n}\n\n.nav-categories {\n    width: 80%;\n    height: 50px;\n    margin: 20px auto;\n}\n\n#but1:hover , #but2:hover ,#addPrj:hover{\n    background: blue\n}\n\n.project-form {\n    position: absolute;\n    left: 35%;\n    background: /*yellow*/white;\n    padding: 10px 30px 40px 30px;\n    border: 1px solid /*black*/#900;\n    border-radius: 5px;\n    /*margin: 0 auto*/\n}\n\n.to-do-form {\n    /*display: flex;*/\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: space-around;\n    height: 330px;\n    background: white;\n    position :fixed;\n    top : 70px;\n    left :35%;\n    border : 1px solid #900;\n    border-radius : 15px;\n    padding: 0 10px 20px 10px; \n    /*color : #900;*/\n}\n\n.flex {\n    display: flex;\n    justify-content: space-between;\n}\n\ninput {\n    padding: 5px 10px;\n    border-radius: 5px;\n    border: 1px solid grey;\n    margin: 10px;\n}\n\nform button {\n    font-size: 14px;\n    padding: 5px 10px;\n    /*background: blue;*/\n    border-radius: 5px;\n    border: black;\n    color: white;\n    cursor: pointer;\n    margin-top: 12px\n}\n\nform button:hover {\n    background-color: #0808b3;\n}\n\n.hidden {\n    display: none;\n}\n\n.float-right {\n    float: right;\n}\n\n.options {\n    margin: 0 10px;\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(d=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var d,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var a=e[d];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),t.push(a))}},t}},function(e,t,n){var o,r,i={},d=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),c=null,l=0,s=[],u=n(4);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var d=0;d<r.parts.length;d++)r.parts[d](o.parts[d]);for(;d<o.parts.length;d++)r.parts.push(v(o.parts[d],t))}else{var a=[];for(d=0;d<o.parts.length;d++)a.push(v(o.parts[d],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function m(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[d]?o[d].parts.push(a):n.push(o[d]={id:d,parts:[a]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return h(t,e.attrs),f(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var d=l++;n=c||(c=y(t)),o=x.bind(null,n,d,!1),r=x.bind(null,n,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),f(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var d=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(d),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){g(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=d()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var d=n[r];(a=i[d.id]).refs--,o.push(a)}e&&p(m(e,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var b,E=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=E(t,r);else{var i=document.createTextNode(r),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(i,d[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);const o=e=>{let t=JSON.stringify(e);localStorage.setItem("categories",t)},r=()=>{let e=[];return localStorage.getItem("categories")&&(e=JSON.parse(localStorage.getItem("categories"))),e},i=e=>{let t=JSON.stringify(e);localStorage.setItem("myToDoList",t)},d=()=>{let e=[];return localStorage.getItem("myToDoList")&&(e=JSON.parse(localStorage.getItem("myToDoList")).map(e=>Object.assign(new a,e))),e};class a{constructor(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.categorie=r}renderProject(e){const t=document.getElementById("body-item");if(null==document.getElementById("table")){const e=document.createElement("table");e.id="table",t.appendChild(e);const n=document.createElement("tr");e.appendChild(n);const o=document.createElement("td");o.innerHTML="Priority",o.style.borderBottom="1px solid #900",n.appendChild(o);const r=document.createElement("td");r.innerHTML="Title",r.style.borderBottom="1px solid #900",n.appendChild(r);const i=document.createElement("td");i.innerHTML="Description",i.style.borderBottom="1px solid #900",n.appendChild(i);const d=document.createElement("td");d.style.borderBottom="1px solid #900",d.innerHTML="Due Date",n.appendChild(d);const a=document.createElement("td");a.innerHTML="",n.appendChild(a);const c=document.createElement("td");c.innerHTML="",n.appendChild(c)}else{document.getElementById("table")}const n=document.createElement("tr");n.id=e.toString()+"row2",table.appendChild(n);const o=document.createElement("td");o.id=e.toString()+"priority",o.innerHTML=this.priority,n.appendChild(o);const r=document.createElement("td");r.id=e.toString()+"title",r.innerHTML=this.title,n.appendChild(r);const i=document.createElement("td");i.id=e.toString()+"description",i.innerHTML=this.description,n.appendChild(i);const d=document.createElement("td");d.id=e.toString()+"dueDate",d.innerHTML=this.dueDate,n.appendChild(d);const a=document.createElement("td");a.id=e+"update",a.classList.add("update"),a.innerHTML="<i class='fas fa-edit'></i>",n.appendChild(a);const c=document.createElement("td");c.id=e+"cut",c.classList.add("cut"),c.innerHTML='<i class="fas fa-cut"></i>',n.appendChild(c)}editToDo(e){let t=this.categorie;document.getElementById("editDiv").style.display="block";const n=document.getElementById("edTitle");n.innerHTML=this.title,n.value=this.title;const o=document.getElementById("edDescription");o.innerHTML=this.description,o.value=this.description,document.getElementById("edPriority").value=this.priority;const i=document.getElementById("edCatNameinfo");i.innerHTML="",r().forEach(function(e){let t=document.createElement("option");t.innerHTML=e,t.setAttribute("value",e),i.appendChild(t)}),i.value=this.categorie,document.getElementById("edDateDue").value=this.dueDate,document.getElementById("editPrj").addEventListener("click",()=>c(e,t)),document.getElementById("escEdPrj").addEventListener("click",()=>void(document.getElementById("editDiv").style.display="none"))}}const c=(e,t)=>{if("block"==document.getElementById("editDiv").style.display){const n=document.getElementById("editDiv"),o=document.getElementById("edTitle"),r=document.getElementById("edDescription"),a=document.getElementById("edPriority"),c=document.getElementById("edCatNameinfo"),l=document.getElementById("edDateDue");if(n.style.display="none",document.getElementById(e.toString()+"title").innerHTML=o.value,document.getElementById(e.toString()+"description").innerHTML=r.value,document.getElementById(e.toString()+"dueDate").innerHTML=l.value,document.getElementById(e.toString()+"priority").innerHTML=a.value,c.value!=t){document.getElementById(e+"cut").parentNode.innerHTML=""}!function(e,t,n,o,r,a){console.log(e,t,n,o,r,a);let c=d();c[e].title=t,c[e].description=n,c[e].dueDate=o,c[e].priority=r,c[e].categorie=a,i(c)}(e,o.value,r.value,l.value,a.value,c.value)}},l=e=>{s(e),m(e),u(),p()},s=e=>{var t=r();if(t.forEach(function(e){let t=document.getElementById(e);t.style.background="white",t.style.color="black"}),t.length>0){const t=document.getElementById(e);t.style.background="#900",t.style.color="white"}},u=()=>{for(var e=d(),t=document.getElementsByClassName("cut"),n=0;n<t.length;n++){let o=t[n].id.toString().replace("cut","");t[n].addEventListener("click",function(){document.getElementById(o+"cut").parentNode.innerHTML="",e.splice(o,1),i(e)})}},p=()=>{for(var e=d(),t=document.getElementsByClassName("update"),n=0;n<t.length;n++){let o=t[n].id.toString().replace("update","");t[n].addEventListener("click",function(){e[o].editToDo(o)})}},m=e=>{document.getElementById("body-item").innerHTML=null,d().forEach(function(t,n){t.categorie==e&&t.renderProject(n)})},f=function(){document.getElementById("inputDiv").style.display="flex";const e=document.getElementById("catNameinfo"),t=document.getElementById("savePrj"),n=document.getElementById("escPrj"),o=r();e.innerHTML="",e.style.margin="0 auto 5px 5px",o.forEach(function(t){let n=document.createElement("option");n.innerHTML=t,n.setAttribute("value",t),e.appendChild(n)}),t.addEventListener("click",()=>y()),n.addEventListener("click",()=>g())},g=function(){document.getElementById("inputDiv").style.display="none"},y=function(){const e=document.getElementById("inputDiv");if("flex"==e.style.display){const t=document.getElementById("title").value,n=document.getElementById("description").value,o=document.getElementById("dateDue").value,r=document.getElementById("priority").value,c=document.getElementById("catNameinfo").value;e.style.display="none",function(e,t,n,o,r){const c=new a(e,t,n,o,r);let l=d();l.push(c),i(l)}(t,n,o,r,c),l(c)}};var h=function(){f()};var v=()=>{const e=document.getElementById("winCategory"),t=document.getElementById("catName").value;e.style.display="none";const n=document.getElementById("navCategories");if(null==document.getElementById(t)){const e=document.createElement("button");e.id=t,e.innerHTML=t,e.classList.add("catButton"),n.appendChild(e);const i=r();if(i.push(t),o(i),s(t),l(t),null==document.getElementById("addPrj")){const e=document.getElementById("header"),t=document.createElement("button");t.id="addPrj",t.innerHTML="To Do<i class='far fa-plus-square'></i>",e.appendChild(t),t.addEventListener("click",h)}else document.getElementById("addPrj").addEventListener("click",h);e.addEventListener("click",()=>l(t))}};const b=()=>{document.getElementById("winCategory").style.display="none"};var E=function(){document.getElementById("winCategory").style.display="block";const e=document.getElementById("saveCat"),t=document.getElementById("escCat");e.addEventListener("click",v),t.addEventListener("click",b)};const x=function(){const e=document.getElementById("navCategories"),t=document.getElementById("PrjToDel").value,n=document.getElementById(t);if(confirm("Are you sure to Remove "+t))if(function(e,t,n){let a=r();t.removeChild(n);a.splice(a.indexOf(e),1),o(a);let c=d();for(var l=c.length-1;l>=0;l--)c[l].categorie==e&&c.splice(l,1);i(c)}(t,e,n),B(),categories.length>0){let e=categories[0];l(e)}else{document.getElementById("body-item").innerHTML=""}};function B(){document.getElementById("winDelCat").style.display="none"}var I=function(){const e=document.getElementById("winDelCat"),t=document.getElementById("deleteCat"),n=document.getElementById("escDelCat");e.style.display="block";var o=r();const i=document.getElementById("PrjToDel");i.innerHTML="",o.forEach(function(e){let t=document.createElement("option");t.innerHTML=e,t.setAttribute("value",e),i.appendChild(t)}),t.addEventListener("click",()=>x()),n.addEventListener("click",()=>B())};let L=r();(function(){!function(){const e=document.getElementById("but1"),t=document.getElementById("but2");e.addEventListener("click",()=>E()),t.addEventListener("click",()=>I())}(),function(){const e=document.getElementById("navCategories");if((L=r()).forEach(function(t){const n=document.createElement("button");n.id=t,n.innerHTML=t,n.classList.add("catButton"),n.addEventListener("click",()=>l(t)),e.appendChild(n)}),L.length>0){const e=document.getElementById(L[0]);e.style.background="#900"}}(),function(){if(L.length>0&&null===document.getElementById("addPrj")){const e=document.getElementById("header"),t=document.createElement("button");t.id="addPrj",t.innerHTML="To Do<i class='far fa-plus-square'></i>",e.appendChild(t),t.addEventListener("click",()=>h())}}(),function(){if(L.length>0){let e=L[0];l(e)}}()})()}]);