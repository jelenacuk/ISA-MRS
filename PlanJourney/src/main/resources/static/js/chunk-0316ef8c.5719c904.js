(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0316ef8c","chunk-44d97a7b"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var a=n("f772");t.exports=function(t,e){if(!a(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!a(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!a(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!a(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var a=n("f772"),i=n("e53d").document,r=a(i)&&a(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var a=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return a.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"3c43":function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!==typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!==typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n",e.homedir=function(){return"/"}},"454f":function(t,e,n){n("46a7");var a=n("584a").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},"46a7":function(t,e,n){var a=n("63b6");a(a.S+a.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function r(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new r(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new r(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,i=1,r={},s=!1,o=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?v():h()?m():t.MessageChannel?g():o&&"onreadystatechange"in o.createElement("script")?p():_(),c.setImmediate=l,c.clearImmediate=u}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var s={callback:t,args:e};return r[i]=s,a(i),i++}function u(t){delete r[t]}function d(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function f(t){if(s)setTimeout(f,0,t);else{var e=r[t];if(e){s=!0;try{d(e)}finally{u(t),s=!1}}}}function v(){a=function(t){e.nextTick(function(){f(t)})}}function h(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function m(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function g(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},a=function(e){t.port2.postMessage(e)}}function p(){var t=o.documentElement;a=function(e){var n=o.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function _(){a=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("f28c"))},"63b6":function(t,e,n){var a=n("e53d"),i=n("584a"),r=n("d864"),s=n("35e8"),o=n("07e3"),c="prototype",l=function(t,e,n){var u,d,f,v=t&l.F,h=t&l.G,m=t&l.S,g=t&l.P,p=t&l.B,_=t&l.W,b=h?i:i[e]||(i[e]={}),y=b[c],C=h?a:m?a[e]:(a[e]||{})[c];for(u in h&&(n=e),n)d=!v&&C&&void 0!==C[u],d&&o(b,u)||(f=d?C[u]:n[u],b[u]=h&&"function"!=typeof C[u]?n[u]:p&&d?r(f,a):_&&C[u]==f?function(t){var e=function(e,n,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,a)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):g&&"function"==typeof f?r(Function.call,f):f,g&&((b.virtual||(b.virtual={}))[u]=f,t&l.R&&y&&!y[u]&&s(y,u,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"66be":function(t,e,n){},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"973d":function(t,e,n){},9880:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"searchFlights"}},[n("h2",[t._v("Flight Search ")]),n("br"),n("div",{staticClass:"row"},[n("table",{staticClass:"searchForm",staticStyle:{"text-align":"left"}},[n("tr",[n("td",[t._v("Flight company:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.flightCompany,expression:"flightCompany"}],attrs:{type:"text"},domProps:{value:t.flightCompany},on:{input:function(e){e.target.composing||(t.flightCompany=e.target.value)}}})])]),n("tr",[n("td",[t._v("Transitions:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transitionsNum,expression:"transitionsNum"}],attrs:{type:"number",placeholder:"MaxNum of transitions"},domProps:{value:t.transitionsNum},on:{input:function(e){e.target.composing||(t.transitionsNum=e.target.value)}}})])]),n("tr",[n("td",[t._v("Start destination:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.startDestination,expression:"startDestination"}],attrs:{type:"text"},domProps:{value:t.startDestination},on:{input:function(e){e.target.composing||(t.startDestination=e.target.value)}}})]),n("td",[t._v("End destination:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.endDestination,expression:"endDestination"}],attrs:{type:"text"},domProps:{value:t.endDestination},on:{input:function(e){e.target.composing||(t.endDestination=e.target.value)}}})])]),n("tr",[n("td",[t._v("Depart time:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{type:"date"},domProps:{value:t.startDate},on:{input:function(e){e.target.composing||(t.startDate=e.target.value)}}})]),n("td",[t._v("Return time:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{type:"date"},domProps:{value:t.endDate},on:{input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),n("tr",[n("td",[t._v("Flight duration:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.flightDuration,expression:"flightDuration"}],attrs:{type:"number"},domProps:{value:t.flightDuration},on:{input:function(e){e.target.composing||(t.flightDuration=e.target.value)}}})]),n("td",[t._v("Flight length:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.flightLength,expression:"flightLength"}],attrs:{type:"number"},domProps:{value:t.flightLength},on:{input:function(e){e.target.composing||(t.flightLength=e.target.value)}}})])]),n("tr",[n("td",[t._v("Min price:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.MinPrice,expression:"MinPrice"}],attrs:{type:"number"},domProps:{value:t.MinPrice},on:{input:function(e){e.target.composing||(t.MinPrice=e.target.value)}}})]),n("td",[t._v("Max price:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.MaxPrice,expression:"MaxPrice"}],attrs:{type:"number"},domProps:{value:t.MaxPrice},on:{input:function(e){e.target.composing||(t.MaxPrice=e.target.value)}}})])]),n("tr",{staticStyle:{"text-align":"center"}},[n("td",[n("div",{staticClass:"custom-control custom-radio custom-control-inline"},[n("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"eco",checked:"",name:"inlineDefaultRadiosExample"},on:{click:function(e){return t.checkedClass(1)}}}),n("label",{staticClass:"custom-control-label",attrs:{for:"eco"}},[t._v("Economic class")])])]),n("td",[n("div",{staticClass:"custom-control custom-radio custom-control-inline"},[n("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"bus",name:"inlineDefaultRadiosExample"},on:{click:function(e){return t.checkedClass(2)}}}),n("label",{staticClass:"custom-control-label",attrs:{for:"bus"}},[t._v("Business class")])])]),n("td",[n("div",{staticClass:"custom-control custom-radio custom-control-inline"},[n("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"first",name:"inlineDefaultRadiosExample"},on:{click:function(e){return t.checkedClass(3)}}}),n("label",{staticClass:"custom-control-label",attrs:{for:"first"}},[t._v("First class")])])])]),n("tr",[n("td",[n("Button",{staticClass:"btn btn-primary",on:{click:t.search}},[t._v("Search")])],1)])])]),n("br"),n("div",[n("table",{ref:"results",staticClass:"table",attrs:{border:"1",hidden:""}},[t._m(0),t._l(t.flights,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.flightCompany))]),n("td",[t._v(t._s(e.startDestination))]),n("td",[t._v(t._s(e.endDestination))]),n("td",[t._v(t._s(e.startDate_str))]),n("td",[t._v(t._s(e.endDate_str))]),n("td",[t._v(t._s(e.flightDuration))]),n("td",[t._v(t._s(e.flightLength))]),n("td",[t._v(t._s(e.economicPrice))]),n("td",[t._v(t._s(e.businessPrice))]),n("td",[t._v(t._s(e.firstClassPrice))]),n("td",[n("Button",{staticClass:"btn btn-outline-success",on:{click:function(n){return t.goToDetails(e.id)}}},[t._v("Details")])],1)])})],2)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",[t._v("Flight company")]),n("th",[t._v("Start destination")]),n("th",[t._v("End destination")]),n("th",[t._v("Start date")]),n("th",[t._v("End date")]),n("th",[t._v("Flight duration")]),n("th",[t._v("Flight Length")]),n("th",[t._v("Economic price")]),n("th",[t._v("Buisiness price")]),n("th",[t._v("First class price")]),n("th")])])}],r=n("bc3a"),s=n.n(r),o={name:"searchFlights",components:{},data:function(){return{startDestination:"",endDestination:"",startDate:"",endDate:"",flightDuration:"",flightLength:"",MinPrice:"",MaxPrice:"",flightCompany:"",check:1,transitionsNum:"",flights:[]}},mounted:function(){},methods:{checkedClass:function(t){this.check=t},search:function(){var t=this,e=0,n=0,a=0,i=0,r=0,o=0;1==this.check&&(e=this.MinPrice,n=this.MaxPrice),2==this.check&&(a=this.MinPrice,i=this.MaxPrice),3==this.check&&(r=this.MinPrice,o=this.MaxPrice);var c={startDestination:this.startDestination,endDestination:this.endDestination,startDate:this.startDate,endDate:this.endDate,minEconomic:e,minBusiness:a,minFirstClass:r,maxEconomic:n,maxBusiness:i,maxFirstClass:o,flightDuration:this.flightDuration,flightLength:this.flightLength,flightCompany:this.flightCompany,transitionsNum:this.transitionsNum};s.a.post("/api/flightSearch",c).then(function(e){t.flights=e.data}),this.$refs["results"].hidden=!1},goToDetails:function(t){localStorage.setItem("flightID",t),this.$router.push("/front/flight")}}},c=o,l=(n("a83b"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},"9d8d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("nav",{staticClass:"navbar navbar-expand-lg bg-dark navbar-dark static-top"},[n("div",{staticClass:"container"},[t._m(0),t._m(1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[0!=t.type?n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:t.homePage}},[t._v("Home\n                        "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]):t._e(),0!=t.type?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/front/userProfile"}},[t._v("Profile")])]):t._e(),0!=t.type&&t.invites?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/front/invites"}},[t._v("Invites")])]):t._e(),0!=t.type?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])]):t._e(),0==t.type?n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",on:{click:t.goToLogin}},[t._v("Login\n                        "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]):t._e(),0==t.type?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/front/registerPage"}},[t._v("Register")])]):t._e()])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("img",{attrs:{src:"http://placehold.it/150x50?text=Logo",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],r=n("bc3a"),s=n.n(r),o={name:"navbar",data:function(){return{type:0,homePage:"",invites:!1}},mounted:function(){var t=this;console.log(this.type);var e=function(){return localStorage.getItem("jwtToken")};s.a.defaults.headers.common["Authorization"]="Bearer "+e(),s.a.get("/api/getUserRole").then(function(e){console.log(e.data),t.type=1,console.log(e),"RENT_ADMIN"==e.data?t.homePage="/front/RAindex":"FLIGHT_ADMIN"==e.data?t.homePage="/front/flightAdmin":"SYS_ADMIN"==e.data?t.homePage="/front/systemAdminPage":"REGISTERED"==e.data?(t.homePage="/front/index",t.invites=!0):"HOTEL_ADMIN"==e.data?t.homePage="/front/hotelAdminPage":(t.homePage="/",t.type=0)})},methods:{logout:function(){localStorage.setItem("jwtToken",""),window.location="/"},goToLogin:function(){this.$router.push("/front/loginPage")}}},c=o,l=(n("e056"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"434d11d6",null);e["a"]=u.exports},a83b:function(t,e,n){"use strict";var a=n("973d"),i=n.n(a);i.a},ac6a:function(t,e,n){for(var a=n("cadf"),i=n("0d58"),r=n("2aba"),s=n("7726"),o=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),d=l("toStringTag"),f=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(v),m=0;m<h.length;m++){var g,p=h[m],_=v[p],b=s[p],y=b&&b.prototype;if(y&&(y[u]||o(y,u,f),y[d]||o(y,d,p),c[p]=f,_))for(g in a)y[g]||r(y,g,a[g],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},c203:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"registeredUserFrontPage"}},[n("navbar",{attrs:{itype:1}}),n("div",{staticClass:"container"},[n("div",{staticClass:"row "},[n("button",{staticClass:"col-sm btn btn-info btn-lg",staticStyle:{"border-radius":"20px"},on:{click:t.airlines}},[t._v("Airlines")]),n("button",{staticClass:"col-sm btn btn-info btn-lg",staticStyle:{"border-radius":"20px"},on:{click:t.hotels}},[t._v("Hotels")]),n("button",{staticClass:"col-sm btn btn-info btn-lg",staticStyle:{"border-radius":"20px"},on:{click:t.rentACar}},[t._v("Rent a car")]),n("button",{staticClass:"col-sm btn btn-info btn-lg",staticStyle:{"border-radius":"20px"},on:{click:t.friends}},[t._v("Friends")])]),n("SearchFlights"),t._m(0),n("nav",[n("div",{staticClass:"nav nav-tabs nav-fill",attrs:{id:"nav-tab",role:"tablist"}},[n("a",{staticClass:"nav-item nav-link active",attrs:{id:"flights","data-toggle":"tab",role:"tab","aria-controls":"nav-home","aria-selected":"true"},on:{click:t.showFlights}},[t._v("Flights")]),n("a",{staticClass:"nav-item nav-link",attrs:{id:"hotels","data-toggle":"tab",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},on:{click:t.showHotels}},[t._v("Hotels")]),n("a",{staticClass:"nav-item nav-link",attrs:{id:"cars","data-toggle":"tab",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},on:{click:t.showCars}},[t._v("Cars")])])]),n("div",{staticClass:"tab-content py-3 px-3 px-sm-0",attrs:{id:"nav-tabContent"}},[n("div",{staticClass:"centered col-lg-10",attrs:{id:"FlightsReservations",role:"tabpanel","aria-labelledby":"flights"}},[n("table",{staticClass:"table"},[t._m(1),t._l(t.flightReservations,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.startDestination))]),n("td",[t._v(t._s(e.endDestination))]),n("td",[t._v(t._s(e.startDate))]),n("td",[t._v(t._s(e.endDate))]),n("td",[t._v(" "+t._s(e.travelClassa)+" : ("+t._s(e.seatRow)+","+t._s(e.seatColumn)+")")]),n("td",[t._v(t._s(e.price))]),0!=e.passangers?n("td",[t._v(t._s(e.passangers-1)+" + (1)")]):n("td",[t._v("1")]),n("td",[n("button",{on:{click:function(n){return t.flightReservationDetails(e.id)}}},[t._v("Details")])]),0==e.status?n("td",[n("button",{on:{click:function(n){return t.cancelFlightReservation(e.id)}}},[t._v("Cancel")])]):t._e(),1==e.status?n("td",{staticClass:"ratingtd",attrs:{colspan:"2",width:"100px"}},[t.getRating(e,5)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[4]},on:{click:function(n){return t.reviewFlight(e,5)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[4]},on:{click:function(n){return t.reviewFlight(e,5)}}}),t.getRating(e,4)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[3]},on:{click:function(n){return t.reviewFlight(e,4)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[3]},on:{click:function(n){return t.reviewFlight(e,4)}}}),t.getRating(e,3)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[2]},on:{click:function(n){return t.reviewFlight(e,3)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[2]},on:{click:function(n){return t.reviewFlight(e,3)}}}),t.getRating(e,2)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[1]},on:{click:function(n){return t.reviewFlight(e,2)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[1]},on:{click:function(n){return t.reviewFlight(e,2)}}}),t.getRating(e,1)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[0]},on:{click:function(n){return t.reviewFlight(e,1)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[0]},on:{click:function(n){return t.reviewFlight(e,1)}}})]):t._e()])})],2)]),n("div",{staticClass:"centered col-lg-10",attrs:{id:"HotelsReservations",hidden:"true",role:"tabpanel","aria-labelledby":"hotels"}},[0==t.showingHotel?n("table",{staticClass:"table"},[t._m(2),t._l(t.hotelReservations,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.hotelName))]),n("td",[t._v(t._s(e.roomNumber))]),n("td",[t._v(t._s(e.fDay+"-"+e.fMonth+"-"+e.fYear))]),n("td",[t._v(t._s(e.lDay+"-"+e.lMonth+"-"+e.lYear))]),n("td",[n("button",{on:{click:function(n){return t.showHotelDetails(e)}}},[t._v("Details")])]),n("td",[0==e.status?n("button",{on:{click:function(n){return t.cancelHotelReservation(e.hotelName,e.roomNumber)}}},[t._v("Cancel")]):t._e()]),2==e.status?n("td",{staticClass:"ratingtd",attrs:{colspan:"2"}},[t.getRating(e,5)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[4]},on:{click:function(n){return t.reviewHotel(e,5)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[4]},on:{click:function(n){return t.reviewHotel(e,5)}}}),t.getRating(e,4)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[3]},on:{click:function(n){return t.reviewHotel(e,4)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[3]},on:{click:function(n){return t.reviewHotel(e,4)}}}),t.getRating(e,3)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[2]},on:{click:function(n){return t.reviewHotel(e,3)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[2]},on:{click:function(n){return t.reviewHotel(e,3)}}}),t.getRating(e,2)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[1]},on:{click:function(n){return t.reviewHotel(e,2)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[1]},on:{click:function(n){return t.reviewHotel(e,2)}}}),t.getRating(e,1)?n("span",{staticClass:"fa fa-star over clicked ",attrs:{id:e.ratings[0]},on:{click:function(n){return t.reviewHotel(e,1)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[0]},on:{click:function(n){return t.reviewHotel(e,1)}}})]):t._e()])})],2):t._e(),1==t.showingHotel?n("table",[n("tr",[t._m(3),n("td",[t._v(t._s(t.hotelToShow.hotelName))])]),n("tr",[t._m(4),n("td",[t._v(t._s(t.hotelToShow.roomNumber))])]),n("tr",[t._m(5),n("td",[t._v(t._s(t.hotelToShow.fDay+"-"+t.hotelToShow.fMonth+"-"+t.hotelToShow.fYear))])]),n("tr",[t._m(6),n("td",[t._v(t._s(t.hotelToShow.lDay+"-"+t.hotelToShow.lMonth+"-"+t.hotelToShow.lYear))])]),n("tr",[t._m(7),n("td",[t._v(t._s(t.hotelToShow.paidPrice))])]),n("tr",[n("td"),n("td",[n("button",{on:{click:function(e){return t.cancelShowingHotel()}}},[t._v("Cancel")])])])]):t._e()]),n("div",{staticClass:"centered col-lg-10",attrs:{id:"CarsReservations",hidden:"true",role:"tabpanel","aria-labelledby":"nav-about-tab"}},[n("table",{staticClass:"table"},[t._m(8),t._l(t.vehiclereservations,function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.locationPick))]),n("td",[t._v(t._s(e.locationReturn))]),n("td",[t._v(t._s(e.vehicleName))]),n("td",[t._v(t._s(e.dateFrom))]),n("td",[t._v(t._s(e.dateTo))]),n("td",[t._v(t._s(e.price))]),n("td",[t._v(t._s(e.discount))]),n("td",[t._v(t._s(e.price-e.price*e.discount/100))]),n("td",[0==e.status?n("Button",{on:{click:function(n){return t.cancel(e,a)}}},[t._v("Cancel")]):t._e()],1),2==e.status?n("td",{staticClass:"ratingtd",attrs:{width:"100",colspan:"2"}},[1==t.getRating(e,5)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[4]},on:{click:function(n){return t.review(e,5)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[4]},on:{click:function(n){return t.review(e,5)}}}),t.getRating(e,4)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[3]},on:{click:function(n){return t.review(e,4)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[3]},on:{click:function(n){return t.review(e,4)}}}),t.getRating(e,3)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[2]},on:{click:function(n){return t.review(e,3)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[2]},on:{click:function(n){return t.review(e,3)}}}),t.getRating(e,2)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[1]},on:{click:function(n){return t.review(e,2)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[1]},on:{click:function(n){return t.review(e,2)}}}),t.getRating(e,1)?n("span",{staticClass:"fa fa-star over clicked",attrs:{id:e.ratings[0]},on:{click:function(n){return t.review(e,1)}}}):n("span",{staticClass:"fa fa-star over",attrs:{id:e.ratings[0]},on:{click:function(n){return t.review(e,1)}}})]):t._e()])})],2)])])],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"title"}},[n("h2",[t._v("Reservations")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Start destination")]),n("th",[t._v("End destination")]),n("th",[t._v("Start date")]),n("th",[t._v("End date")]),n("th",[t._v("Seat")]),n("th",[t._v("Price")]),n("th",[t._v("Passangers count")]),n("th",[t._v("Details")]),n("th",[t._v("Review")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Hotel Name")]),n("th",[t._v("Room Number")]),n("th",[t._v("First Day")]),n("th",[t._v("Last Day")]),n("th",[t._v("Details")]),n("th",[t._v("Cancel")]),n("th",[t._v("review")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Hotel Name")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Room Number")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("First Day")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Last Day")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Price Paid")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Location pick")]),n("th",[t._v("Location return")]),n("th",[t._v("Name")]),n("th",[t._v("Date from")]),n("th",[t._v("Date to")]),n("th",[t._v("Price")]),n("th",[t._v("Discount")]),n("th",[t._v("Total")]),n("th",[t._v("Cancel")])])}],r=n("85f2"),s=n.n(r);function o(t,e,n){return e in t?s()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("ac6a"),n("5118");var c,l=n("9d8d"),u=(n("3c43"),n("9880")),d=n("bc3a"),f=n.n(d),v={name:"registeredUserFrontPage",data:function(){return{flightReservations:[],vehiclereservations:[],hotelReservations:[],showingHotel:!1,hotelToShow:{}}},components:{navbar:l["a"],SearchFlights:u["default"]},created:function(){var t=this,e=function(){return localStorage.getItem("jwtToken")};f.a.defaults.headers.common["Authorization"]="Bearer "+e(),f.a.get("/api/geteReservations").then(function(e){t.vehiclereservations=e.data,t.vehiclereservations.forEach(function(t){t.ratings=[t.id+"1",t.id+"2",t.id+"3",t.id+"4",t.id+"5"]})}),f.a.get("/api/getUserHotelReservations").then(function(e){t.hotelReservations=e.data,t.hotelReservations.forEach(function(t){t.ratings=[t.id+"1",t.id+"2",t.id+"3",t.id+"4",t.id+"5"]})}),f.a.get("/api/getMyReservations").then(function(e){t.flightReservations=e.data,t.flightReservations.forEach(function(t){t.ratings=[t.id+"1",t.id+"2",t.id+"3",t.id+"4",t.id+"5"]})})},mounted:function(){},methods:(c={friends:function(){this.$router.push("/front/friends")},hotels:function(){this.$router.push("/front/registeredHotelSearch")},getRating:function(t,e){return t.rating>=e},showFlights:function(){document.getElementById("FlightsReservations").hidden=!1,document.getElementById("HotelsReservations").hidden=!0,document.getElementById("CarsReservations").hidden=!0;document.getElementById("flights").className="nav-item nav-link active",document.getElementById("hotels").className="nav-item nav-link",document.getElementById("cars").className="nav-item nav-link"},showHotels:function(){document.getElementById("FlightsReservations").hidden=!0,document.getElementById("HotelsReservations").hidden=!1,document.getElementById("CarsReservations").hidden=!0;document.getElementById("flights").className="nav-item nav-link",document.getElementById("hotels").className="nav-item nav-link active",document.getElementById("cars").className="nav-item nav-link"},showCars:function(){document.getElementById("FlightsReservations").hidden=!0,document.getElementById("HotelsReservations").hidden=!0,document.getElementById("CarsReservations").hidden=!1;document.getElementById("flights").className="nav-item nav-link",document.getElementById("hotels").className="nav-item nav-link ",document.getElementById("cars").className="nav-item nav-link active"},logout:function(){this.$router.push("/")},profile:function(){this.$router.push("/front/userProfile")},rentACar:function(){this.$router.push("/front/rentacar")},airlines:function(){this.$router.push("/front/searchFlightCompany")},cancel:function(t,e){var n=function(){return localStorage.getItem("jwtToken")};f.a.defaults.headers.common["Authorization"]="Bearer "+n(),f.a.post("/api/cancelVehicleReservation",t).then(function(t){alert("success")})},review:function(t,e){var n=function(){return localStorage.getItem("jwtToken")};f.a.defaults.headers.common["Authorization"]="Bearer "+n(),f.a.post("/api/reviewVehicle",{reservationId:t.id,rating:e}).then(function(t){alert("success")}),t.rating=e,this.setStars(t,e)},reviewHotel:function(t,e){var n=function(){return localStorage.getItem("jwtToken")};f.a.defaults.headers.common["Authorization"]="Bearer "+n(),f.a.post("/api/reviewHotel",{reservationId:t.id,rating:e}).then(function(t){alert("success")}),t.rating=e,this.setStars(t,e)},reviewFlight:function(t,e){var n=function(){return localStorage.getItem("jwtToken")};f.a.defaults.headers.common["Authorization"]="Bearer "+n(),f.a.post("/api/reviewFlight",{reservationId:t.id,rating:e}).then(function(t){alert("success")}),t.rating=e,this.setStars(t,e)},cancelFlightReservation:function(t,e){var n=this,a=function(){return localStorage.getItem("jwtToken")};f.a.defaults.headers.common["Authorization"]="Bearer "+a(),f.a.get("/api/cancelFlightReservation/"+t).then(function(t){alert(t.data),n.flightReservations.splice(e,1)})},showDetails:function(t,e){this.$router.push("/front/hotelRoom/"+t+"/"+e)},showHotelSearch:function(){this.$router.push("/front/searchHotels")},flightReservationDetails:function(t){this.$router.push("/front/flightReservationDetails/"+t)}},o(c,"friends",function(){this.$router.push("/front/friends")}),o(c,"setStars",function(t,e){for(var n=1;n<=5;n++){var a=document.getElementById(t.ratings[n-1]);a.className=n<=e?"fa fa-star over clicked":"fa fa-star over"}}),o(c,"showHotelDetails",function(t){console.log(t),this.hotelToShow=t,this.showingHotel=!0}),o(c,"cancelShowingHotel",function(){this.showingHotel=!1}),o(c,"cancelHotelReservation",function(t,e){var n,a=this;this.hotelReservations.forEach(function(a){a.hotelName==t&&a.roomNumber==e&&(n=a)}),console.log(n),f.a.post("/api/cancelHotelReservation",n).then(function(n){1==n.data?(alert("Hotel reservation has been successfully canceled."),a.hotelReservations.forEach(function(n){n.hotelName==t&&n.roomNumber==e&&a.hotelReservations.splice(n,1)})):alert("There was a problem with hotel cancelation.")})}),c)},h=v,m=(n("db61"),n("2877")),g=Object(m["a"])(h,a,i,!1,null,"66110beb",null);e["default"]=g.exports},d864:function(t,e,n){var a=n("79aa");t.exports=function(t,e,n){if(a(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,a){return t.call(e,n,a)};case 3:return function(n,a,i){return t.call(e,n,a,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var a=n("e4ae"),i=n("794b"),r=n("1bc3"),s=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(a(t),e=r(e,!0),a(n),i)try{return s(t,e,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},db61:function(t,e,n){"use strict";var a=n("e6d3"),i=n.n(a);i.a},e056:function(t,e,n){"use strict";var a=n("66be"),i=n.n(a);i.a},e4ae:function(t,e,n){var a=n("f772");t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6d3:function(t,e,n){},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-0316ef8c.5719c904.js.map