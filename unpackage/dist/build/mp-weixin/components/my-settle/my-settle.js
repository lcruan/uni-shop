(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-settle/my-settle"],{"09ce":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"468e":function(t,e,r){"use strict";var n=r("e84e"),o=r.n(n);o.a},"7a0d":function(t,e,r){"use strict";r.r(e);var n=r("b53b"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},b53b:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("a34a")),o=r("26cb");function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return l(t)||d(t,e)||c(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done);n=!0)if(r.push(s.value),e&&r.length===e)break}catch(c){o=!0,a=c}finally{try{n||null==u["return"]||u["return"]()}finally{if(o)throw a}}return r}}function l(t){if(Array.isArray(t))return t}function f(t,e,r,n,o,a,s){try{var u=t[a](s),c=u.value}catch(i){return void r(i)}u.done?e(c):Promise.resolve(c).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){f(a,n,o,s,u,"next",t)}function u(t){f(a,n,o,s,u,"throw",t)}s(void 0)}))}}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={name:"my-settle",data:function(){return{seconds:3,timer:null}},computed:m(m(m(m(m({},(0,o.mapGetters)("m_cart",["checkedCount","total","checkedGoodsAmount"])),(0,o.mapGetters)("m_user",["addstr"])),(0,o.mapState)("m_user",["token"])),(0,o.mapState)("m_cart",["cart"])),{},{isFullCheck:function(){return this.total===this.checkedCount}}),methods:m(m(m({},(0,o.mapMutations)("m_cart",["updateAllGoodsState"])),(0,o.mapMutations)("m_user",["updateRedirectInfo"])),{},{changeAllState:function(){this.updateAllGoodsState(!this.isFullCheck)},settlement:function(){return this.checkedCount?this.addstr?this.token?void this.payOrder():this.delayNavigate():t.$showMsg("请选择收货地址"):t.$showMsg("请选择要结算的商品")},showTips:function(e){t.showToast({icon:"none",title:"请登录后再结算！"+e+"秒之后自动跳转到登录页",mask:!0,duration:1500})},delayNavigate:function(){var e=this;this.seconds=3,this.showTips(this.seconds),this.timer=setInterval((function(){if(e.seconds--,e.seconds<=0)return clearInterval(e.timer),void t.switchTab({url:"/pages/my/my",success:function(){e.updateRedirectInfo({openType:"switchTab",from:"/pages/cart/cart"})}});e.showTips(e.seconds)}),1e3)},payOrder:function(){var e=this;return p(n.default.mark((function r(){var o,a,u,c,i,d,l,f,p,h,m,b,y;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={order_price:.01,consignee_addr:e.addstr,goods:e.cart.filter((function(t){return t.goods_state})).map((function(t){return{goods_id:t.goods_id,goods_number:t.goods_count,goods_price:t.goods_price}}))},r.next=3,t.$http.post("/api/public/v1/my/orders/create",o);case 3:if(a=r.sent,u=a.data,200===u.meta.status){r.next=7;break}return r.abrupt("return",t.$showMsg("创建订单失败！"));case 7:return c=u.message.order_number,r.next=10,t.$http.post("/api/public/v1/my/orders/req_unifiedorder",{order_number:c});case 10:if(i=r.sent,d=i.data,200===d.meta.status){r.next=14;break}return r.abrupt("return",t.$showMsg("预付订单生成失败！"));case 14:return l=d.message.pay,r.next=17,t.requestPayment(l);case 17:if(f=r.sent,p=s(f,2),h=p[0],m=p[1],console.log(h,m),!h){r.next=24;break}return r.abrupt("return",t.$showMsg("订单未支付！"));case 24:return r.next=26,t.$http.post("/api/public/v1/my/orders/chkOrder",{order_number:c});case 26:if(b=r.sent,y=b.data,200===y.meta.status){r.next=30;break}return r.abrupt("return",$showMsg("订单未支付！"));case 30:t.showToast({title:"订单支付完成",icon:"success"});case 31:case"end":return r.stop()}}),r)})))()}})};e.default=y}).call(this,r("543d")["default"])},cf86:function(t,e,r){"use strict";r.r(e);var n=r("09ce"),o=r("7a0d");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("468e");var s,u=r("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},e84e:function(t,e,r){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-settle/my-settle-create-component',
    {
        'components/my-settle/my-settle-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cf86"))
        })
    },
    [['components/my-settle/my-settle-create-component']]
]);
