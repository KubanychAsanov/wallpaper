(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(3),r=c(7),n=c.n(r),s=c(19),i=c.n(s),l=(c(26),c(9)),o=c(15),u=c(11);c(30),c(31);u.a.initializeApp({apiKey:"AIzaSyDhivUAzO1-ShTvE_28WJevFH0ANP3rV3g",authDomain:"react-wallpaper-74d74.firebaseapp.com",projectId:"react-wallpaper-74d74",storageBucket:"react-wallpaper-74d74.appspot.com",messagingSenderId:"1027156409569",appId:"1:1027156409569:web:4ec5d1d36bbff38a5ecba0"});var j=u.a.storage(),d=u.a.firestore(),p=u.a.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(r.useState)([]),c=Object(l.a)(t,2),a=c[0],n=c[1];return Object(r.useEffect)((function(){var t=d.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),n(t)}));return function(){return t()}}),[e]),{docs:a}},f=function(e){var t=e.setselectedImg,c=b("images").docs;return console.log(c),Object(a.jsx)("div",{className:"img-grid",children:c&&c.map((function(e){return Object(a.jsx)("div",{className:"img-wrap",onClick:function(){return t(e.url)},children:Object(a.jsx)("img",{src:e.url,alt:"uploaded pic"})},e.id)}))})},O=function(e){var t=e.selectedImg,c=e.setselectedImg;return Object(a.jsx)("div",{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&c(null)},children:Object(a.jsx)("img",{src:t,alt:"selected img"})})};var m=function(){return Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h1",{children:"Wallpaper for programmers"}),Object(a.jsx)("p",{children:"Here you can download or upload any wallpaper you like"})]})},g=c(14),v=c.n(g),h=c(20),x=function(e){var t=Object(r.useState)(0),c=Object(l.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(null),i=Object(l.a)(s,2),o=i[0],u=i[1],b=Object(r.useState)(null),f=Object(l.a)(b,2),O=f[0],m=f[1];return Object(r.useEffect)((function(){var t=j.ref(e.name),c=d.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;n(t)}),(function(e){u(e)}),Object(h.a)(v.a.mark((function e(){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:a=e.sent,r=p(),c.add({url:a,createdAt:r}),m(a);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:a,url:O,error:o}},y=function(e){var t=e.file,c=e.setFile,n=x(t),s=n.url,i=n.progress;return Object(r.useEffect)((function(){s&&c(null)}),[s,c]),Object(a.jsx)("div",{className:"progress-bar",style:{width:i+"%"}})};var w=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(null),i=Object(l.a)(s,2),o=i[0],u=i[1],j=["image/png","image/jpeg"];return Object(a.jsxs)("form",{children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&j.includes(t.type)?(n(t),u("")):(n(null),u("Please select an image file (png or jpeg)"))}}),Object(a.jsx)("span",{children:"+"})]}),Object(a.jsxs)("div",{className:"output",children:[o&&Object(a.jsx)("div",{className:"error",children:o}),c&&Object(a.jsx)("div",{children:c.name}),c&&Object(a.jsx)(y,{file:c,setFile:n})]})]})};var S=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{}),Object(a.jsx)(w,{}),Object(a.jsx)(f,{setselectedImg:n}),c&&Object(a.jsx)(O,{selectedImg:c,setselectedImg:n})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.879d48ea.chunk.js.map