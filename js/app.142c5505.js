(function(e){function t(t){for(var r,c,o=t[0],l=t[1],i=t[2],d=0,v=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&v.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Simon-game-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("5c0b"),n("2877")),o={},l=Object(c["a"])(o,a,s,!1,null,null,null),i=l.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("panel")],1)},v=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-component"},[n("div",{staticClass:"panel"},[n("audio",{attrs:{src:""}}),e._l(e.colors,(function(t,r){return n("div",{key:r,ref:t,refInFor:!0,staticClass:"panel-item",class:t,on:{click:function(t){return e.panelClicked(t.currentTarget)}}})}))],2),n("div",{staticClass:"level"},[n("div",{staticClass:"level-item"},[n("label",{attrs:{for:"easy"}},[e._v("Easy")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{disabled:e.gameProccess,type:"radio",name:"level",id:"easy",value:"easy",checked:""},domProps:{checked:e._q(e.level,"easy")},on:{change:function(t){e.level="easy"}}})]),n("div",{staticClass:"level-item"},[n("label",{attrs:{for:"normal"}},[e._v("Normal")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{disabled:e.gameProccess,type:"radio",name:"level",id:"normal",value:"normal"},domProps:{checked:e._q(e.level,"normal")},on:{change:function(t){e.level="normal"}}})]),n("div",{staticClass:"level-item"},[n("label",{attrs:{for:"hard"}},[e._v("Hard")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{disabled:e.gameProccess,type:"radio",name:"level",id:"hard",value:"hard"},domProps:{checked:e._q(e.level,"hard")},on:{change:function(t){e.level="hard"}}})])]),n("h3",[e._v("Round: "+e._s(e.round))]),n("button",{attrs:{disabled:e.gameProccess},on:{click:e.startFlashing}},[e._v("Start")])])},f=[],h=n("b85c"),m=n("1da1"),b=n("2909"),g=(n("96cf"),n("d3b7"),{name:"Panel",data:function(){return{colors:["blue","red","yellow","green"],canClick:!1,sequence:[],sequenceToGuess:[],round:0,level:"easy",gameProccess:!1}},mounted:function(){this.sequence=[this.getRandomPanel()],this.sequenceToGuess=Object(b["a"])(this.sequence)},methods:{getRandomPanel:function(){var e=this.$refs.blue[0],t=this.$refs.red[0],n=this.$refs.yellow[0],r=this.$refs.green[0],a=[e,t,n,r];return a[parseInt(Math.random()*a.length)]},flash:function(e){var t=this;return new Promise(function(){var n=Object(m["a"])(regeneratorRuntime.mark((function n(r,a){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:n.t0=t.level,n.next="easy"===n.t0?3:"normal"===n.t0?5:"hard"===n.t0?7:9;break;case 3:return s=1500,n.abrupt("break",10);case 5:return s=1e3,n.abrupt("break",10);case 7:return s=400,n.abrupt("break",10);case 9:return n.abrupt("break",10);case 10:return e.classList.add("active"),n.next=13,setTimeout((function(){e.classList.remove("active"),setTimeout((function(){r()}),250)}),s);case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},panelClicked:function(e){if(this.canClick){var t=this.sequenceToGuess.shift();t===e?(console.log(t,"-expectedPanel",e,"-panelClicked"),0===this.sequenceToGuess.length&&(this.sequence.push(this.getRandomPanel()),this.sequenceToGuess=Object(b["a"])(this.sequence),this.startFlashing(),this.round++)):(alert("Game Over"),this.round=0,this.gameProccess=!1,this.canClick=!1,this.sequence=[this.getRandomPanel()],this.sequenceToGuess=Object(b["a"])(this.sequence),console.log(this.sequence,"else"))}},startFlashing:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.gameProccess=!0,e.canClick=!1,n=Object(h["a"])(e.sequence),t.prev=3,n.s();case 5:if((r=n.n()).done){t.next=12;break}return a=r.value,t.next=9,e.flash(a);case 9:console.log(a,"panel");case 10:t.next=5;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](3),n.e(t.t0);case 17:return t.prev=17,n.f(),t.finish(17);case 20:e.canClick=!0;case 21:case"end":return t.stop()}}),t,null,[[3,14,17,20]])})))()}}}),y=g,k=(n("adca"),Object(c["a"])(y,p,f,!1,null,"543f9a64",null)),w=k.exports,P={name:"Home",components:{Panel:w}},_=P,x=Object(c["a"])(_,d,v,!1,null,null,null),O=x.exports;r["a"].use(u["a"]);var j=[{path:"/",name:"Home",component:O}],q=new u["a"]({mode:"history",base:"/Simon-game-vue/",routes:j}),C=q,T=n("2f62");r["a"].use(T["a"]);var R=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:C,store:R,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6d5b":function(e,t,n){},"9c0c":function(e,t,n){},adca:function(e,t,n){"use strict";n("6d5b")}});
//# sourceMappingURL=app.142c5505.js.map