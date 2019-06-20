(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220df0c6"],{"66be":function(t,a,e){},"798a":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"searchFlightCompany"}},[e("navbar",{attrs:{itype:"1"}}),e("h2",[t._v("Flight Company Search ")]),e("br"),e("div",{staticClass:"row"},[e("table",{staticClass:"centered",staticStyle:{"text-align":"left"}},[e("tr",[e("td",[t._v("Company Name:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],attrs:{type:"text"},domProps:{value:t.companyName},on:{input:function(a){a.target.composing||(t.companyName=a.target.value)}}})])]),e("tr",[e("td",[e("button",{staticClass:"btn btn-primary",on:{click:t.search}},[t._v("Search")])])])])]),e("br"),e("div",{staticClass:"companyTable"},[e("br"),e("table",{staticClass:"table centered",attrs:{border:"1"}},[t._m(0),e("tbody",t._l(t.companies,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.address))]),e("td",[t._v(t._s(a.description))]),e("td",[e("Button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.goToDetails(a.id)}}},[t._v("Details")])],1)])}),0)])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Name")]),e("th",{attrs:{scope:"col"}},[t._v("Address")]),e("th",{attrs:{scope:"col"}},[t._v("Description")]),e("th")])])}],i=e("9d8d"),o=e("bc3a"),r=e.n(o),c={name:"searchFlightCompany",components:{navbar:i["a"]},data:function(){return{companyName:"",companies:[]}},mounted:function(){var t=this,a="-";r.a.get("/api/searchFlightCompanies/"+a).then(function(a){console.log(a),t.companies=a.data})},methods:{checkedClass:function(t){this.check=t},search:function(){var t=this;if(""==this.companyName){var a="-";r.a.get("/api/searchFlightCompanies/"+a).then(function(a){console.log(a),t.companies=a.data})}else r.a.get("/api/searchFlightCompanies/"+this.companyName).then(function(a){console.log(a),t.companies=a.data})},goToDetails:function(t){localStorage.setItem("idCompany",t),this.$router.push("/front/CompanyProfile")}}},l=c,v=(e("a12d"),e("2877")),m=Object(v["a"])(l,n,s,!1,null,null,null);a["default"]=m.exports},"7e08":function(t,a,e){},"9d8d":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("nav",{staticClass:"navbar navbar-expand-lg bg-dark navbar-dark static-top"},[e("div",{staticClass:"container"},[t._m(0),t._m(1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[0!=t.type?e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:t.homePage}},[t._v("Home\n                        "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]):t._e(),0!=t.type?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/front/userProfile"}},[t._v("Profile")])]):t._e(),0!=t.type&&t.invites?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/front/invites"}},[t._v("Invites")])]):t._e(),0!=t.type?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])]):t._e(),0==t.type?e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",on:{click:t.goToLogin}},[t._v("Login\n                        "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]):t._e(),0==t.type?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/front/registerPage"}},[t._v("Register")])]):t._e()])])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("img",{attrs:{src:"http://placehold.it/150x50?text=Logo",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],i=e("bc3a"),o=e.n(i),r={name:"navbar",data:function(){return{type:0,homePage:"",invites:!1}},mounted:function(){var t=this;console.log(this.type);var a=function(){return localStorage.getItem("jwtToken")};o.a.defaults.headers.common["Authorization"]="Bearer "+a(),o.a.get("/api/getUserRole").then(function(a){console.log(a.data),t.type=1,console.log(a),"RENT_ADMIN"==a.data?t.homePage="/front/RAindex":"FLIGHT_ADMIN"==a.data?t.homePage="/front/flightAdmin":"SYS_ADMIN"==a.data?t.homePage="/front/systemAdminPage":"REGISTERED"==a.data?(t.homePage="/front/index",t.invites=!0):"HOTEL_ADMIN"==a.data?t.homePage="/front/hotelAdminPage":(t.homePage="/",t.type=0)})},methods:{logout:function(){localStorage.setItem("jwtToken",""),window.location="/"},goToLogin:function(){this.$router.push("/front/loginPage")}}},c=r,l=(e("e056"),e("2877")),v=Object(l["a"])(c,n,s,!1,null,"434d11d6",null);a["a"]=v.exports},a12d:function(t,a,e){"use strict";var n=e("7e08"),s=e.n(n);s.a},e056:function(t,a,e){"use strict";var n=e("66be"),s=e.n(n);s.a}}]);
//# sourceMappingURL=chunk-220df0c6.de71e367.js.map