(this.webpackJsonpfoodcap=this.webpackJsonpfoodcap||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),c=a.n(r),o=a(19),i=a(13),l=a(58),d=a(49),j=a.n(d),h=function(e){e?j.a.defaults.headers.common.Authorization=e:delete j.a.defaults.headers.common.Authorization},u="GET_ERRORS",b="USER_LOADING",p="SET_CURRENT_USER",m=function(e){return{type:p,payload:e}},O=function(){return function(e){localStorage.removeItem("jwtToken"),h(!1),e(m({}))}},x=a(27),f=a(37),v=a(90),g=a(32),w=a(135),y={isAuthenticated:!1,user:{},loading:!1},N={},S=Object(f.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(g.a)(Object(g.a)({},e),{},{isAuthenticated:!w(t.payload),user:t.payload});case b:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;default:return e}}}),k=[v.a],C=Object(f.e)(S,{},Object(f.d)(f.a.apply(void 0,k),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),T=a(22),E=a(17),L=a(29),M=a(28),R=a(50),D=a.n(R),_=a(59),A=a(11),F=a(174),I=a(190),U=a(191),P=a(186),B=a(189),W=a(185),V=a(14),G=a(4),H=a(177),X=a(179),z=a(180),J=a(181),$=a(182),q=a(183),K=a(63),Q=a(2),Y=Object(F.a)((function(e){return{root:{maxWidth:345,marginLeft:"40%"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:K.a[500]}}}));function Z(e){var t=Y(),a=Object(n.useState)(!1),s=Object(A.a)(a,2),r=s[0],c=s[1];return Object(Q.jsxs)(H.a,{className:t.root,children:[Object(Q.jsx)(X.a,{title:e.Meal.strMeal}),Object(Q.jsx)(z.a,{className:t.media,image:e.Meal.strMealThumb}),Object(Q.jsx)(J.a,{}),Object(Q.jsxs)($.a,{disableSpacing:!0,children:[Object(Q.jsx)(q.a,{"aria-label":"share"}),Object(Q.jsx)(q.a,{className:Object(G.a)(t.expand,Object(V.a)({},t.expandOpen,r)),onClick:function(){c(!r)},"aria-expanded":r,"aria-label":"show more"})]})]})}var ee=a(184),te=a(64),ae=a(94),ne=a.n(ae),se=a(95),re=a.n(se),ce=Object(F.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:K.a[500]}}})),oe=function(e){var t=ce(),a=s.a.useState({}),r=Object(A.a)(a,2),c=r[0],o=r[1],i=s.a.useState([]),l=Object(A.a)(i,2),d=(l[0],l[1]),j=s.a.useState(!0),h=Object(A.a)(j,2),u=(h[0],h[1],s.a.useState("")),b=Object(A.a)(u,2),p=(b[0],b[1],s.a.useState(!1)),m=Object(A.a)(p,2),O=m[0],x=m[1],f=s.a.useState([]),v=Object(A.a)(f,2),g=(v[0],v[1],s.a.useState([])),w=Object(A.a)(g,2),y=(w[0],w[1],s.a.useState()),N=Object(A.a)(y,2),S=(N[0],N[1],parseInt(e.match.params.id)),k=function(){var e=Object(_.a)(D.a.mark((function e(){var t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(S),e.next=4,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+S);case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,o(a.meals[0]),d(a.meals),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();console.log(c);var C=[],T=[];!function(e){for(var t in e)null!==e[t]&&""!==e[t]||delete e[t];for(var a=1;a<=20;a++){var n="strIngredient"+a.toString();if(console.log(n),console.log(a),!e[n])break;T.push("".concat(e[n]))}console.log(T);for(var s=1;s<=20;s++){var r="strMeasure"+s.toString();if(console.log(r),console.log(s),!e[r])break;C.push("".concat(e[r]))}console.log(C)}(c);var E=[];console.log(E),C.reduce((function(e,t,a){console.log(t,T[a]),E.push(t+" "+T[a])}),[]),Object(n.useEffect)((function(){k()}),[]);return Object(Q.jsx)("div",{children:Object(Q.jsxs)(H.a,{className:t.root,style:{position:"absolute",left:"40%",top:"25%"},children:[Object(Q.jsx)(X.a,{title:c.strMeal}),Object(Q.jsx)(z.a,{className:t.media,image:c.strMealThumb}),Object(Q.jsxs)(J.a,{children:[Object(Q.jsx)("ul",{children:E.map((function(e){return Object(Q.jsx)("li",{children:e})}))}),Object(Q.jsx)(te.a,{paragraph:!0})]}),Object(Q.jsxs)($.a,{disableSpacing:!0,children:[Object(Q.jsx)(q.a,{"aria-label":"add to favorites",children:Object(Q.jsx)(ne.a,{})}),Object(Q.jsx)(q.a,{"aria-label":"share"}),Object(Q.jsx)(q.a,{className:Object(G.a)(t.expand,Object(V.a)({},t.expandOpen,O)),onClick:function(){x(!O)},"aria-expanded":O,"aria-label":"show more",children:Object(Q.jsx)(re.a,{})})]}),Object(Q.jsx)(ee.a,{in:O,timeout:"auto",unmountOnExit:!0,children:Object(Q.jsxs)(J.a,{children:[Object(Q.jsx)(te.a,{paragraph:!0}),Object(Q.jsx)(te.a,{paragraph:!0,children:"Method:"}),Object(Q.jsx)(te.a,{paragraph:!0,children:c.strInstructions})]})})]})})},ie=Object(F.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120},center:{left:"40%"}}}));function le(e){var t=ie(),a=s.a.useState([]),r=Object(A.a)(a,2),c=r[0],i=r[1],l=s.a.useState(!0),d=Object(A.a)(l,2),j=d[0],h=d[1],u=s.a.useState(""),b=Object(A.a)(u,2),p=b[0],m=b[1],O=s.a.useState(""),x=Object(A.a)(O,2),f=(x[0],x[1],function(){var e=Object(_.a)(D.a.mark((function e(){var t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+p);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i(a.meals),console.log(a.meals),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}());Object(n.useEffect)((function(){f()}),[p]);var v=function(){h(!0)};return Object(Q.jsxs)("div",{className:t.center,children:[Object(Q.jsx)("h1",{children:"Recipe Finder"}),Object(Q.jsx)(W.a,{className:t.button,onClick:v}),Object(Q.jsxs)(P.a,{className:t.formControl,children:[Object(Q.jsx)(I.a,{id:"demo-controlled-open-select-label",children:"Category"}),Object(Q.jsxs)(B.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:j,onClose:function(){h(!1)},onOpen:v,value:p,onChange:function(t){t.preventDefault(),t.target.value?e.setFilter(!0):e.setFilter(!1),m(t.target.value)},children:[Object(Q.jsx)(U.a,{value:"",children:Object(Q.jsx)("em",{children:"None"})}),Object(Q.jsx)(U.a,{value:"Beef",children:"Beef"}),Object(Q.jsx)(U.a,{value:"Chicken",children:"Chicken"}),Object(Q.jsx)(U.a,{value:"Dessert",children:"Dessert"}),Object(Q.jsx)(U.a,{value:"Lamb",children:"Lamb"}),Object(Q.jsx)(U.a,{value:"Pasta",children:"Pasta"}),Object(Q.jsx)(U.a,{value:"Pork",children:"Pork"}),Object(Q.jsx)(U.a,{value:"Seafood",children:"Seafood"}),Object(Q.jsx)(U.a,{value:"Side",children:"Side"}),Object(Q.jsx)(U.a,{value:"Starter",children:"Starter"}),Object(Q.jsx)(U.a,{value:"Vegan"}),Object(Q.jsx)(U.a,{value:"Vegetarian",children:"Vegetarian"}),Object(Q.jsx)(U.a,{value:"Breakfast",children:"Breakfast"}),Object(Q.jsx)(U.a,{value:"Goat",children:"Goat"})]})]}),c&&c.map((function(e,t){return Object(Q.jsx)("div",{children:Object(Q.jsxs)(o.b,{id:e.idmeal,to:"/meal/".concat(e.idMeal),children:[Object(Q.jsx)("h3",{children:e.strMeal}),Object(Q.jsx)("img",{style:{width:"30%",height:"auto"},src:e.strMealThumb})]})},e.idMeal)}))]})}n.Component;var de=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={random:{},meals:[],randomIsActive:!0,filter:!1,mealsById:{},ingredients:[],measurements:[],ingredientsLoading:!0},e.setFilter=function(t){e.setState((function(e){return{filter:t}}))},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Component Did Mount"),fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(t){e.setState({random:t.meals[0]})}))}},{key:"render",value:function(){return Object(Q.jsxs)("div",{children:[console.log(this.state.filter),Object(Q.jsx)(le,{filter:this.state.filter,setFilter:this.setFilter}),!this.state.filter&&Object(Q.jsx)(Z,{Meal:this.state.random})]})}}]),a}(s.a.Component),je=a(187),he=a(188),ue=a(96),be=a.n(ue),pe=function(){return Object(Q.jsx)("div",{children:Object(Q.jsx)(je.a,{position:"relative",children:Object(Q.jsxs)(he.a,{children:[Object(Q.jsx)(q.a,{color:"inherit",children:Object(Q.jsx)(be.a,{})}),Object(Q.jsx)(te.a,{variant:"h6",style:{flexGrow:"1"},children:"Tengo Hambre"}),Object(Q.jsxs)("ul",{className:"nav-list",children:[Object(Q.jsx)("li",{className:"nav-list-item",children:Object(Q.jsx)(o.b,{to:"/login",children:"Login"})}),Object(Q.jsx)("li",{className:"nav-list-item",children:Object(Q.jsx)(o.b,{to:"/",children:"Home"})}),Object(Q.jsx)("li",{children:Object(Q.jsx)(o.b,{to:"/register",children:"Register"})})]})]})})})},me=a(38),Oe=a.n(me),xe=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",errors:{}},e.onChange=function(t){e.setState(Object(V.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(Q.jsx)("div",{className:"container",children:Object(Q.jsx)("div",{style:{marginTop:"4rem"},className:"row",children:Object(Q.jsxs)("div",{className:"col s8 offset-s2",children:[Object(Q.jsxs)(o.b,{to:"/",className:"btn-flat waves-effect",children:[Object(Q.jsx)("i",{className:"material-icons left",children:"keyboard_backspace"})," Back to home"]}),Object(Q.jsxs)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:[Object(Q.jsxs)("h4",{children:[Object(Q.jsx)("b",{children:"Login"})," below"]}),Object(Q.jsxs)("p",{className:"grey-text text-darken-1",children:["Don't have an account? ",Object(Q.jsx)(o.b,{to:"/register",children:"Register"})]})]}),Object(Q.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(Q.jsxs)("div",{className:"input-field col s12",children:[Object(Q.jsx)("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:Oe()("",{invalid:e.email||e.emailnotfound})}),Object(Q.jsx)("label",{htmlFor:"email",children:"Email"}),Object(Q.jsxs)("span",{className:"red-text",children:[e.email,e.emailnotfound]})]}),Object(Q.jsxs)("div",{className:"input-field col s12",children:[Object(Q.jsx)("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:Oe()("",{invalid:e.password||e.passwordincorrect})}),Object(Q.jsx)("label",{htmlFor:"password",children:"Password"}),Object(Q.jsxs)("span",{className:"red-text",children:[e.password,e.passwordincorrect]})]}),Object(Q.jsx)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:Object(Q.jsx)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:"Login"})})]})]})})})}}]),a}(n.Component),fe=Object(x.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){j.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),h(a);var n=Object(l.a)(a);t(m(n))})).catch((function(e){return t({type:u,payload:e.response.data})}))}}})(xe),ve=a(3),ge=Object(x.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(ve.a)(e,["component","auth"]);return Object(Q.jsx)(i.b,Object(g.a)(Object(g.a)({},n),{},{render:function(e){return!0===a.isAuthenticated?Object(Q.jsx)(t,Object(g.a)({},e)):Object(Q.jsx)(i.a,{to:"/login"})}}))})),we=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props.auth.user;return Object(Q.jsx)("div",{style:{height:"75vh"},className:"container valign-wrapper",children:Object(Q.jsx)("div",{className:"row",children:Object(Q.jsxs)("div",{className:"col s12 center-align",children:[Object(Q.jsxs)("h4",{style:{marginTop:"250px"},children:[Object(Q.jsx)("b",{children:"Hey there,"})," ",e.name.split(" ")[0],Object(Q.jsxs)("p",{className:"flow-text grey-text text-darken-1",children:["Welcome to Tengo Hambre!"," "]})]}),Object(Q.jsx)(de,{}),Object(Q.jsx)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:"Logout"})]})})})}}]),a}(n.Component),ye=Object(x.b)((function(e){return{auth:e.auth}}),{logoutUser:O})(we),Ne=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",email:"",password:"",password2:"",errors:{}},e.onChange=function(t){e.setState(Object(V.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(Q.jsx)("div",{className:"container",children:Object(Q.jsx)("div",{className:"row",children:Object(Q.jsxs)("div",{className:"col s8 offset-s2",children:[Object(Q.jsx)(o.b,{to:"/",className:"btn-flat waves-effect",children:Object(Q.jsx)(W.a,{children:"Home"})}),Object(Q.jsxs)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:[Object(Q.jsxs)("h4",{children:[Object(Q.jsx)("b",{children:"Register"})," below"]}),Object(Q.jsxs)("p",{className:"grey-text text-darken-1",children:["Already have an account? ",Object(Q.jsx)(o.b,{to:"/login",children:"Log in"})]})]}),Object(Q.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(Q.jsxs)("div",{className:"input-field col s12",children:[Object(Q.jsx)("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:Oe()("",{invalid:e.name})}),Object(Q.jsx)("label",{htmlFor:"name",children:"Name"}),Object(Q.jsx)("span",{className:"red-text",children:e.name})]}),Object(Q.jsxs)("div",{className:"input-field col s12",children:[Object(Q.jsx)("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:Oe()("",{invalid:e.email})}),Object(Q.jsx)("label",{htmlFor:"email",children:"Email"}),Object(Q.jsx)("span",{className:"red-text",children:e.email})]}),Object(Q.jsxs)("div",{className:"input-field col s12",children:[Object(Q.jsx)("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:Oe()("",{invalid:e.password})}),Object(Q.jsx)("label",{htmlFor:"password",children:"Password"}),Object(Q.jsx)("span",{className:"red-text",children:e.password})]}),Object(Q.jsxs)("div",{className:"input-field col s12",children:[Object(Q.jsx)("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:Oe()("",{invalid:e.password2})}),Object(Q.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(Q.jsx)("span",{className:"red-text",children:e.password2})]}),Object(Q.jsx)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:Object(Q.jsx)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:"Sign up"})})]})]})})})}}]),a}(n.Component),Se=Object(x.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){j.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:u,payload:e.response.data})}))}}})(Object(i.g)(Ne));if(localStorage.jwtToken){var ke=localStorage.jwtToken;h(ke);var Ce=Object(l.a)(ke);C.dispatch(m(Ce));var Te=Date.now()/1e3;Ce.exp<Te&&(C.dispatch(O()),window.location.href="./login")}var Ee=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsx)(x.a,{store:C,children:Object(Q.jsxs)(o.a,{children:[Object(Q.jsx)(pe,{}),Object(Q.jsxs)(i.d,{children:[Object(Q.jsx)(i.b,{path:"/",exact:!0,component:de}),Object(Q.jsx)(i.b,{path:"/meal/:id",component:oe}),Object(Q.jsx)(i.b,{path:"/login",component:fe}),Object(Q.jsx)(i.b,{path:"/register",component:Se}),Object(Q.jsx)(ge,{exact:!0,path:"/dashboard",component:ye})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(Q.jsx)(s.a.StrictMode,{children:Object(Q.jsx)(Ee,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.5c246b88.chunk.js.map