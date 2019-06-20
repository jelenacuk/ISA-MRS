(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d98775f"],{"40d4":function(t,e,a){"use strict";var s=a("c141"),n=a.n(s);n.a},"66be":function(t,e,a){},9185:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"friends"}},[a("navbar",{attrs:{itype:"1"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("ul",{staticClass:"nav nav-tabs centered"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"searchUsers",href:"#"},on:{click:function(e){return t.selectTab(1)}}},[t._v("Search users")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"friendRequests",href:"#"},on:{click:function(e){return t.selectTab(2)}}},[t._v("Friend requests")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"myFriends",href:"#"},on:{click:function(e){return t.selectTab(3)}}},[t._v("My friends")])])])]),1==t.currentTab?a("div",[a("br"),a("br"),a("searchUsers")],1):t._e(),2==t.currentTab?a("div",[a("br"),a("br"),a("friendRequests")],1):t._e(),3==t.currentTab?a("div",[a("br"),a("br"),a("myFriends")],1):t._e()])],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"searchUsers"}},[a("div",[a("table",{staticClass:"searchForm",staticStyle:{"text-align":"left"}},[a("tr",[a("td",[t._v("First name:")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})])]),a("tr",[a("td",[t._v("Last name:")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})])]),a("tr",{staticStyle:{"text-align":"center"}},[a("td",[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"eco",checked:"",name:"inlineDefaultRadiosExample"},on:{click:function(e){return t.checkedFilter(1)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"eco"}},[t._v("All users")])])]),a("td",[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"bus",name:"inlineDefaultRadiosExample"},on:{click:function(e){return t.checkedFilter(2)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"bus"}},[t._v("Just my friends")])])])]),a("tr",[a("td",[a("Button",{staticClass:"btn btn-primary",on:{click:t.search}},[t._v("Search")])],1)])]),a("div",[a("br"),a("br"),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.users,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.user.firstName))]),a("td",[t._v(t._s(e.user.lastName))]),a("td",[t._v(t._s(e.user.username))]),"Add"==e.status?a("td",[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return t.addFriend(e.user.id)}}},[t._v(" "+t._s(e.status)+" ")])]):t._e(),"Remove"==e.status?a("td",[a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return t.removeFriend(e.user.id)}}},[t._v(" "+t._s(e.status)+" ")])]):t._e(),"Accept"==e.status?a("td",[a("button",{staticClass:"btn btn-outline-success",on:{click:function(a){return t.acceptRequest(e.user.id)}}},[t._v(" "+t._s(e.status)+" ")])]):t._e(),"Request sent"==e.status?a("td",[t._v("  "+t._s(e.status)+" ")]):t._e()])}),0)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("First Name")]),a("th",{attrs:{scope:"col"}},[t._v("Last Name")]),a("th",{attrs:{scope:"col"}},[t._v("Username")]),a("th")])])}],o=a("bc3a"),c=a.n(o),l={name:"searchUsers",components:{},data:function(){return{users:[],check:1,firstName:"",lastName:""}},mounted:function(){var t=this,e=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+e();var a={firstName:this.firstName,lastName:this.lastName};c.a.post("/api/getRegUsers",a).then(function(e){t.users=e.data})},methods:{addFriend:function(t){var e=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+e(),c.a.get("/api/addFriend/"+t).then(function(t){0==t.data?alert("Something went wrong!"):(alert("Request is successfuly sent!"),window.location="/front/friends")})},removeFriend:function(t){var e=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+e(),c.a.get("/api/removeFriend/"+t).then(function(t){0==t.data?alert("Something went wrong!"):(alert("Successfuly removed!"),window.location="/front/friends")})},acceptRequest:function(t){var e=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+e(),c.a.get("/api/acceptRequestFromSearch/"+t).then(function(t){0==t.data?alert("Something went wrong!"):(alert("Successfuly accepted!"),window.location="/front/friends")})},checkedFilter:function(t){this.check=t},search:function(){var t=this,e=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+e(),1==this.check?c.a.post("/api/getRegUsers",{firstName:this.firstName,lastName:this.lastName}).then(function(e){t.users=e.data}):c.a.post("/api/getMyFriends",{firstName:this.firstName,lastName:this.lastName}).then(function(e){t.users=e.data})}}},u=l,d=(a("cec8"),a("2877")),m=Object(d["a"])(u,r,i,!1,null,null,null),f=m.exports,v=a("cdc9"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"myFriends"}},[a("div",[a("table",{staticClass:"searchForm",staticStyle:{"text-align":"left"}},[a("tr",[a("td",[t._v("First name:")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})])]),a("tr",[a("td",[t._v("Last name:")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})])]),a("tr",[a("td",[a("Button",{staticClass:"btn btn-primary",on:{click:t.search}},[t._v("Search")])],1)])]),a("div",[a("br"),a("br"),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.friends,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.user.firstName))]),a("td",[t._v(t._s(e.user.lastName))]),a("td",[t._v(t._s(e.user.username))]),"Remove"==e.status?a("td",[a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return t.removeFriend(e.user)}}},[t._v(" "+t._s(e.status)+" ")])]):t._e()])}),0)])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("First Name")]),a("th",{attrs:{scope:"col"}},[t._v("Last Name")]),a("th",{attrs:{scope:"col"}},[t._v("Username")]),a("th")])])}],g={name:"myFriends",components:{},data:function(){return{friends:[],firstName:"",lastName:""}},mounted:function(){var t=this,e=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+e(),c.a.post("/api/getMyFriends",{firstName:this.firstName,lastName:this.lastName}).then(function(e){t.friends=e.data})},methods:{removeFriend:function(t){var e=this,a=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+a(),c.a.get("/api/removeFriend/"+t.id).then(function(t){0==t.data?alert("Something went wrong!"):(alert("Successfuly removed!"),c.a.post("/api/getMyFriends",{firstName:e.firstName,lastName:e.lastName}).then(function(t){e.friends=t.data}))})},search:function(){var t=this,e=function(){return localStorage.getItem("jwtToken")};c.a.defaults.headers.common["Authorization"]="Bearer "+e(),c.a.post("/api/getMyFriends",{firstName:this.firstName,lastName:this.lastName}).then(function(e){t.friends=e.data})}}},_=g,b=(a("c4b6"),Object(d["a"])(_,h,p,!1,null,null,null)),N=b.exports,y=a("9d8d"),k={name:"friends",components:{searchUsers:f,friendRequests:v["a"],myFriends:N,navbar:y["a"]},data:function(){return{currentTab:1}},mounted:function(){},methods:{selectTab:function(t){1==t?(document.getElementById("searchUsers").className="nav-link active",document.getElementById("friendRequests").className="nav-link",document.getElementById("myFriends").className="nav-link"):2==t?(document.getElementById("searchUsers").className="nav-link",document.getElementById("friendRequests").className="nav-link active",document.getElementById("myFriends").className="nav-link"):3==t&&(document.getElementById("searchUsers").className="nav-link",document.getElementById("friendRequests").className="nav-link",document.getElementById("myFriends").className="nav-link active"),this.currentTab=t}}},C=k,w=(a("40d4"),Object(d["a"])(C,s,n,!1,null,"7c0fa358",null));e["default"]=w.exports},"9d8d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar"}},[a("nav",{staticClass:"navbar navbar-expand-lg bg-dark navbar-dark static-top"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[0!=t.type?a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:t.homePage}},[t._v("Home\n                        "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]):t._e(),0!=t.type?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/front/userProfile"}},[t._v("Profile")])]):t._e(),0!=t.type&&t.invites?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/front/invites"}},[t._v("Invites")])]):t._e(),0!=t.type?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])]):t._e(),0==t.type?a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",on:{click:t.goToLogin}},[t._v("Login\n                        "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]):t._e(),0==t.type?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/front/registerPage"}},[t._v("Register")])]):t._e()])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:"http://placehold.it/150x50?text=Logo",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],r=a("bc3a"),i=a.n(r),o={name:"navbar",data:function(){return{type:0,homePage:"",invites:!1}},mounted:function(){var t=this;console.log(this.type);var e=function(){return localStorage.getItem("jwtToken")};i.a.defaults.headers.common["Authorization"]="Bearer "+e(),i.a.get("/api/getUserRole").then(function(e){console.log(e.data),t.type=1,console.log(e),"RENT_ADMIN"==e.data?t.homePage="/front/RAindex":"FLIGHT_ADMIN"==e.data?t.homePage="/front/flightAdmin":"SYS_ADMIN"==e.data?t.homePage="/front/systemAdminPage":"REGISTERED"==e.data?(t.homePage="/front/index",t.invites=!0):"HOTEL_ADMIN"==e.data?t.homePage="/front/hotelAdminPage":(t.homePage="/",t.type=0)})},methods:{logout:function(){localStorage.setItem("jwtToken",""),window.location="/"},goToLogin:function(){this.$router.push("/front/loginPage")}}},c=o,l=(a("e056"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"434d11d6",null);e["a"]=u.exports},a34e:function(t,e,a){},a3d8:function(t,e,a){"use strict";var s=a("a34e"),n=a.n(s);n.a},b48b:function(t,e,a){},ba63:function(t,e,a){},c141:function(t,e,a){},c4b6:function(t,e,a){"use strict";var s=a("ba63"),n=a.n(s);n.a},cdc9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"friendRequests"}},[a("div",[a("br"),a("br"),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.requests,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.firstName))]),a("td",[t._v(t._s(e.lastName))]),a("td",[t._v(t._s(e.username))]),0==e.accepted?a("td",[a("button",{staticClass:"btn btn-outline-success",on:{click:function(a){return t.acceptRequest(e)}}},[t._v(" Accept ")])]):t._e(),1==e.accepted?a("td",[a("button",{staticClass:"btn btn-outline-success",on:{click:function(a){return t.acceptRequest(e)}}},[t._v(" Accept ")])]):t._e()])}),0)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("First Name")]),a("th",{attrs:{scope:"col"}},[t._v("Last Name")]),a("th",{attrs:{scope:"col"}},[t._v("Username")]),a("th")])])}],r=a("bc3a"),i=a.n(r),o={name:"friendRequests",components:{},data:function(){return{requests:[]}},mounted:function(){var t=this,e=function(){return localStorage.getItem("jwtToken")};i.a.defaults.headers.common["Authorization"]="Bearer "+e(),i.a.get("/api/getMyRequests").then(function(e){t.requests=e.data})},methods:{acceptRequest:function(t){var e=this,a=function(){return localStorage.getItem("jwtToken")};i.a.defaults.headers.common["Authorization"]="Bearer "+a(),i.a.get("/api/acceptRequest/"+t.id).then(function(a){0==a.data?alert("Something went wrong!"):(alert("Successfuly accepted!"),t.accepted=!1,i.a.get("/api/getMyRequests").then(function(t){e.requests=t.data}))})}}},c=o,l=(a("a3d8"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,null,null);e["a"]=u.exports},cec8:function(t,e,a){"use strict";var s=a("b48b"),n=a.n(s);n.a},e056:function(t,e,a){"use strict";var s=a("66be"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-5d98775f.9605b23b.js.map