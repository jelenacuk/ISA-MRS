(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce550cd"],{"411a":function(t,e,n){"use strict";var a=n("9365"),d=n.n(a);d.a},"7f7f":function(t,e,n){var a=n("86cc").f,d=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in d||n("9e1e")&&a(d,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},9365:function(t,e,n){},d140:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addHotel"}},[n("table",[n("tr",[n("td",[t._v(" Input hotel name: ")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("tr",[n("td",[t._v(" Input hotel address: ")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",name:"address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),n("tr",[n("td",[t._v(" Input hotel description: ")]),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticStyle:{overflow:"scroll"},attrs:{rows:"5",cols:"22",name:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),n("tr",[n("td",[t._v(" Input hotel longitude: ")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.longitude,expression:"longitude"}],attrs:{type:"number"},domProps:{value:t.longitude},on:{input:function(e){e.target.composing||(t.longitude=e.target.value)}}})])]),n("tr",[n("td",[t._v(" Input hotel latitude: ")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.latitude,expression:"latitude"}],attrs:{type:"number"},domProps:{value:t.latitude},on:{input:function(e){e.target.composing||(t.latitude=e.target.value)}}})])]),n("tr",[n("td"),n("td",[n("button",{on:{click:function(e){return t.addHotel()}}},[t._v("Add hotel")])])])])])},d=[],o=(n("7f7f"),n("bc3a")),i=n.n(o),r={name:"addHotel",components:{},data:function(){return{name:"",address:"",description:"",longitude:0,latitude:0}},methods:{addHotel:function(){var t=this;i.a.post("/api/addHotel",{name:this.name,address:this.address,description:this.description,longitude:this.longitude,latitude:this.latitude}).then(function(e){t.name=e.data.name,t.address=e.data.address,t.description=e.data.description,t.longitude=e.data.longitude,t.latitude=e.data.latitude})}}},s=r,u=(n("411a"),n("2877")),l=Object(u["a"])(s,a,d,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7ce550cd.088d1455.js.map