(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(33),a(34),a(35),a(4)),i=a(2),s=a(27),u=a(6),p=a(12),d=a.n(p),m=a(23),v=a(24),f=a.n(v);var h=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(u.b)();return Object(u.c)((function(e){return e.allDetails})),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(a)}(e)}},r.a.createElement("input",{type:"email",value:a.email,name:"email",placeholder:"Enter Email",onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))}}),r.a.createElement("input",{type:"password",value:a.password,name:"password",onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))},placeholder:"Enter password"}),r.a.createElement("input",{type:"submit",onClick:function(){return c((e=a.password,t=a.email,function(){var a=Object(m.a)(d.a.mark((function a(n){var r,o;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("http://localhost:3001/signUp",{email:t,password:e});case 3:r=a.sent,o=r.data,n({type:"ADD_DETAILS",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()));var e,t}})))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Sign UP to add a to do !!!!!!!!!!!!!!!!!!!!!!!!"),r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(26),O={allDetails:[]};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.payload){case"ADD_DETAILS":return Object(i.a)(Object(i.a)({},e),{},{allDetails:[].concat(Object(b.a)(e.allDetails),[t.payload])});default:return e}},g=a(3),j=a(25),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.c,y=Object(g.d)(w,D(Object(g.a)(j.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:y},r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.8d468257.chunk.js.map