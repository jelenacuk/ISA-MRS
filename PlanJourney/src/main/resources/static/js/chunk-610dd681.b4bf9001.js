(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-610dd681"],{"02f4":function(t,e,r){var a=r("4588"),i=r("be13");t.exports=function(t){return function(e,r){var n,o,s=String(i(e)),l=a(r),h=s.length;return l<0||l>=h?t?"":void 0:(n=s.charCodeAt(l),n<55296||n>56319||l+1===h||(o=s.charCodeAt(l+1))<56320||o>57343?t?s.charAt(l):n:t?s.slice(l,l+2):o-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var a=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var a=r("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var a=r("2aba"),i=r("32e9"),n=r("79e5"),o=r("be13"),s=r("2b4c"),l=r("520a"),h=s("species"),c=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var f=s(t),v=!n(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=v?!n(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[h]=function(){return r}),r[f](""),!e}):void 0;if(!v||!d||"replace"===t&&!c||"split"===t&&!u){var p=/./[f],m=r(o,f,""[t],function(t,e,r,a,i){return e.exec===l?v&&!i?{done:!0,value:p.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),b=m[0],g=m[1];a(String.prototype,t,b),i(RegExp.prototype,f,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"28a5":function(t,e,r){"use strict";var a=r("aae3"),i=r("cb7c"),n=r("ebd6"),o=r("0390"),s=r("9def"),l=r("5f1b"),h=r("520a"),c=r("79e5"),u=Math.min,f=[].push,v="split",d="length",p="lastIndex",m=4294967295,b=!c(function(){RegExp(m,"y")});r("214f")("split",2,function(t,e,r,c){var g;return g="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[d]||2!="ab"[v](/(?:ab)*/)[d]||4!="."[v](/(.?)(.?)/)[d]||"."[v](/()()/)[d]>1||""[v](/.?/)[d]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!a(t))return r.call(i,t,e);var n,o,s,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,v=void 0===e?m:e>>>0,b=new RegExp(t.source,c+"g");while(n=h.call(b,i)){if(o=b[p],o>u&&(l.push(i.slice(u,n.index)),n[d]>1&&n.index<i[d]&&f.apply(l,n.slice(1)),s=n[0][d],u=o,l[d]>=v))break;b[p]===n.index&&b[p]++}return u===i[d]?!s&&b.test("")||l.push(""):l.push(i.slice(u)),l[d]>v?l.slice(0,v):l}:"0"[v](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,a){var i=t(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,i,a):g.call(String(i),r,a)},function(t,e){var a=c(g,t,this,e,g!==r);if(a.done)return a.value;var h=i(t),f=String(this),v=n(h,RegExp),d=h.unicode,p=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(b?"y":"g"),y=new v(b?h:"^(?:"+h.source+")",p),D=void 0===e?m:e>>>0;if(0===D)return[];if(0===f.length)return null===l(y,f)?[f]:[];var x=0,_=0,M=[];while(_<f.length){y.lastIndex=b?_:0;var Y,C=l(y,b?f:f.slice(_));if(null===C||(Y=u(s(y.lastIndex+(b?0:_)),f.length))===x)_=o(f,_,d);else{if(M.push(f.slice(x,_)),M.length===D)return M;for(var k=1;k<=C.length-1;k++)if(M.push(C[k]),M.length===D)return M;_=x=Y}}return M.push(f.slice(x)),M}]})},"440c":function(t,e,r){"use strict";var a=r("f733"),i=r.n(a);i.a},"520a":function(t,e,r){"use strict";var a=r("0bfb"),i=RegExp.prototype.exec,n=String.prototype.replace,o=i,s="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),h=void 0!==/()??/.exec("")[1],c=l||h;c&&(o=function(t){var e,r,o,c,u=this;return h&&(r=new RegExp("^"+u.source+"$(?!\\s)",a.call(u))),l&&(e=u[s]),o=i.call(u,t),l&&o&&(u[s]=u.global?o.index+o[0].length:e),h&&o&&o.length>1&&n.call(o[0],r,function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)}),o}),t.exports=o},"5f1b":function(t,e,r){"use strict";var a=r("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var n=r.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"7f7f":function(t,e,r){var a=r("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,o="name";o in i||r("9e1e")&&a(i,o,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},8036:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"hotelRoom"}},[r("div",[r("table",{staticClass:"table"},[r("th",[r("td",[t._v("Hotel: ")]),r("td",[t._v(t._s(this.hotel.name))])]),r("tr",[r("td",[t._v("Room Number: ")]),r("td",[t._v(t._s(this.room.roomNumber))])]),r("tr",[r("td",[t._v("Number Of Beds: ")]),r("td",[t._v(t._s(this.room.numberOfBeds))])]),r("tr",[r("td",[t._v("Price Per Day: ")]),r("td",[t._v(t._s(this.room.pricePerDay))])])]),r("br"),r("table",{staticClass:"table"},[t._m(0),t._l(t.room.additionalCharges,function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.pricePerDay))]),r("td",[r("input",{attrs:{type:"checkbox"},on:{click:function(r){return t.aCChanged(e.name)}}})])])})],2),r("table",[r("tr",[t._m(1),r("td",[t._v(t._s(t.firstDay)+">")]),t._m(2),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.lastDay,expression:"lastDay"}],attrs:{type:"date"},domProps:{value:t.lastDay},on:{click:function(e){return t.changedDate()},input:function(e){e.target.composing||(t.lastDay=e.target.value)}}})])]),r("tr",[t._m(3),r("td",[r("button",{staticClass:"btn-primary",on:{click:function(e){return t.splitDate()}}},[t._v("Check")])])]),1==this.available&&null!=this.user.firstName?r("tr",[r("td",[t._v("Make reservation: ")]),r("td",[r("button",{staticClass:"btn-primary",on:{click:function(e){return t.reserve()}}},[t._v("Reserve Room")])])]):t._e()])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",[r("b",[t._v("Additional Charge")])]),r("th",[r("b",[t._v("Price Per Day")])]),r("th",[r("b",[t._v("Check")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("b",[t._v("First Day:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("b",[t._v("Last Day:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("b",[t._v("Check if available: ")])])}],n=(r("7f7f"),r("28a5"),r("bc3a")),o=r.n(n),s={name:"hotelRoom",props:["hotelName","roomNumber","firstDay"],components:{},data:function(){return{hotel:[],room:[],user:[],available:0,lastDay:"",fYear:0,fMonth:0,fDay:0,lYear:0,lMonth:0,lDay:0,additionalCharges:[]}},mounted:function(){var t=this,e=function(){return localStorage.getItem("jwtToken")};o.a.defaults.headers.common["Authorization"]="Bearer "+e(),o.a.get("/api/getLogUser").then(function(e){t.user=e.data}),o.a.get("/api/getHotel/"+this.hotelName).then(function(e){for(var r in t.hotel=e.data,e.data.rooms)e.data.rooms[r].roomNumber==t.roomNumber&&(t.room=e.data.rooms[r])})},methods:{checkReservations:function(){for(var t in this.hotel.reservations)if(this.hotel.reservations[t].roomNumber==this.room.roomNumber)return this.lYear<this.hotel.reservations[t].fYear?void(this.available=1):this.lYear===this.hotel.reservations[t].fYear&&this.lMonth<this.hotel.reservations[t].fMonth?void(this.available=1):this.lYear===this.hotel.reservations[t].fYear&&this.lMonth===this.hotel.reservations[t].fMonth&&this.lDay<this.hotel.reservations[t].fDay?void(this.available=1):this.fYear>this.hotel.reservations[t].lYear?void(this.available=1):this.fYear===this.hotel.reservations[t].lYear&&this.fMonth>this.hotel.reservations[t].lMonth?void(this.available=1):this.fYear===this.hotel.reservations[t].lYear&&this.fMonth===this.hotel.reservations[t].lMonth&&this.fDay>this.hotel.reservations[t].lDay?void(this.available=1):(alert("Room is taken."),void(this.available=0));this.available=1},checkDate:function(){var t=new Date,e=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();if(this.fYear-e>=0&&this.lYear-e>=0&&this.lYear-this.fYear>=0)if(this.fMonth-r>=0&&this.lMonth-r>=0&&this.lMonth-this.fMonth>=0){if(this.lMonth-this.fMonth>0&&this.lMonth-r>0)return void this.checkReservations();if(this.fMonth-r>0&&this.lMonth-this.fMonth>=0&&this.lDay-this.fDay>0)return void this.checkReservations();if(this.fDay-a>0&&this.lDay-a>0&&this.lDay-this.fDay>0)return void this.checkReservations();alert("Incorect date day.")}else alert("Incorect date month.");else alert("Incorect date year.")},changedDate:function(){this.available=0},splitDate:function(){""!=this.firstDay&&""!=this.lastDay||alert("Please eneter both dates.");var t=this.firstDay.split(".");this.fYear=parseInt(t[2]),this.fMonth=parseInt(t[1]),this.fDay=parseInt(t[0]);var e=this.lastDay.split("-");this.lYear=parseInt(e[0]),this.lMonth=parseInt(e[1]),this.lDay=parseInt(e[2]),this.checkDate()},reserve:function(){var t=this;o.a.post("/api/addHotelReservation",{username:this.user.username,hotelName:this.hotel.name,fYear:this.fYear,fMonth:this.fMonth,fDay:this.fDay,lYear:this.lYear,lMonth:this.lMonth,lDay:this.lDay,roomNumber:this.room.roomNumber,additionalCharges:this.additionalCharges}).then(function(e){null!=e.data?(alert("Your reservation is successful."),t.available=0,t.hotel.reservations.push({username:t.user.username,hotelName:t.hotel.name,fYear:t.fYear,fMonth:t.fMonth,fDay:t.fDay,lYear:t.lYear,lMonth:t.lMonth,lDay:t.lDay,roomNumber:t.room.roomNumber,additionalCharges:t.additionalCharges}),t.additionalCharges=[],t.$emit("hr",e.data)):(alert("Your reservation failed."),t.available=0)})},aCChanged:function(t){var e=-1;for(var r in this.additionalCharges)if(this.additionalCharges[r]==t){e=r;break}-1!=e?this.additionalCharges.splice(e,1):this.additionalCharges.push(t)}}},l=s,h=(r("440c"),r("2877")),c=Object(h["a"])(l,a,i,!1,null,null,null);e["default"]=c.exports},aae3:function(t,e,r){var a=r("d3f4"),i=r("2d95"),n=r("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},f733:function(t,e,r){}}]);
//# sourceMappingURL=chunk-610dd681.b4bf9001.js.map