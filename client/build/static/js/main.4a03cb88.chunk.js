(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,a,t){e.exports=t(208)},207:function(e,a,t){},208:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(44),c=t.n(l),s=t(10),m=t(20),o=function(){return r.a.createElement("nav",{className:"navbar bg-dark"},r.a.createElement("h1",null,r.a.createElement(s.b,{to:"/dashboard"},r.a.createElement("i",{className:"fas fa-people-carry"})," Family Talents")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/profiles"},"I want to work")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/profiles"},"I want to hire")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/login"},"Login"))))},i=function(){return r.a.createElement("section",{className:"landing"},r.a.createElement("div",{className:"dark-overlay"},r.a.createElement("div",{className:"landing-inner"},r.a.createElement("h1",{className:"x-large"},"Family Talents"),r.a.createElement("p",{className:"lead"},"Connect family members and turn their talents into money"),r.a.createElement("div",{className:"buttons"},r.a.createElement(s.b,{to:"/register",className:"btn btn-primary"},"Register"),r.a.createElement(s.b,{to:"/login",className:"btn btn-light"},"Login")))))},u=t(30),p=Object(u.b)(function(e){return{alerts:e.alert}})(function(e){var a=e.alerts;return null!==a&&a.map(function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)})}),E=t(32),d=t.n(E),f=t(46),g=t(29),b=t(47),h=t(48),v=t(121),y=t.n(v),N=Object(u.b)(null,{setAlert:function(e,a,t){return function(n){var r=y.a.v4();console.log("Dispatching set alert "+r),n({type:"SET_ALERT",payload:{msg:e,alertType:a,id:r}}),n({type:"REMOVE_ALL_BUT_ALERT",payload:r}),t&&t>0&&setTimeout(function(){return n({type:"REMOVE_ALERT",payload:r})},t)}}})(function(e){var a=e.setAlert,t=Object(n.useState)({name:"",email:"",password:"",confpassword:""}),l=Object(h.a)(t,2),c=l[0],m=l[1],o=c.name,i=c.email,u=c.password,p=c.confpassword,E=function(e){return m(Object(b.a)({},c,Object(g.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(f.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u!==p?a("Passwords do not match","danger"):a("Success","success",1e3);case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Sign up"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"},"Create your account")),r.a.createElement("form",{className:"form",onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:o,onChange:function(e){return E(e)},required:!0}),r.a.createElement("small",{className:"form-text"},"Your full name (you can change this later)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:i,onChange:function(e){return E(e)},required:!0}),r.a.createElement("small",{className:"form-text"},"This site uses Gravatar, use your Gravatar email if you wish to link your avatar")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:u,onChange:function(e){return E(e)},required:!0}),r.a.createElement("small",{className:"form-text"},"6 or more characters")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Confirm Password",minLength:"6",name:"confpassword",value:p,onChange:function(e){return E(e)},required:!0}),r.a.createElement("small",{className:"form-text"},"Enter your password again")),r.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-primary"})),r.a.createElement("div",{className:"p my-1 text-white"},"Already have an account?",r.a.createElement(s.b,{to:"/login",className:"btn btn-small btn-light"},"Login")))}),w=(t(138),function(){var e=Object(n.useState)({email:"",password:""}),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t.email,m=t.password,o=function(e){return l(Object(b.a)({},t,Object(g.a)({},e.target.name,e.target.value)))},i=function(){var e=Object(f.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),console.log("Login request submitted");case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Sign in"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"},"Log in to your account")),r.a.createElement("form",{className:"form",onSubmit:function(e){return i(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:c,onChange:function(e){return o(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:m,onChange:function(e){return o(e)},required:!0}),r.a.createElement("small",{className:"form-text"},"6 or more characters")),r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary"})),r.a.createElement("div",{className:"p my-1 text-white"},"Don't have an account yet?",r.a.createElement(s.b,{to:"/register",className:"btn btn-small btn-light"},"Sign up")))}),O=(t(207),t(19)),x=t(122),L=t(123),T=t(124),j=[],R=Object(O.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SET_ALERT":return[].concat(Object(T.a)(e),[n]);case"REMOVE_ALERT":return e.filter(function(e){return e.id!==n});case"REMOVE_ALL_BUT_ALERT":return e.filter(function(e){return e.id===n});default:return e}}}),A=[L.a],S=Object(O.createStore)(R,{},Object(x.composeWithDevTools)(O.applyMiddleware.apply(void 0,A))),_=function(){return r.a.createElement(u.a,{store:S},r.a.createElement(s.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(o,null),r.a.createElement(m.a,{exact:!0,path:"/",component:i}),r.a.createElement("section",{className:"container"},r.a.createElement(p,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/register",component:N}),r.a.createElement(m.a,{exact:!0,path:"/login",component:w}))))))};c.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.4a03cb88.chunk.js.map