(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{},data:function(){return{properties_fields:{prop:{label:"属性名",sortable:!0},type:{label:"类型",sortable:!0},default:{label:"默认值",sortable:!0},description:{label:"说明"}},events_fields:{event:{label:"事件名",sortable:!0},param:{label:"参数",sortable:!0},description:{label:"说明"}},methods_fields:{method:{label:"方法名",sortable:!0},param:{label:"参数",sortable:!0},return:{label:"返回值",sortable:!0},description:{label:"说明"}}}},computed:{},methods:{},mounted:function(){this.$emit("viewIn")}}},113:function(e,t,i){"use strict";i.r(t);var s=i(53),r=i(23);for(var a in r)"default"!==a&&function(e){i.d(t,e,function(){return r[e]})}(a);i(88);var n=i(0),l=Object(n.a)(r.default,s.a,s.b,!1,null,null,null);l.options.__file="my_panel.vue",t.default=l.exports},23:function(e,t,i){"use strict";i.r(t);var s=i(24),r=i.n(s);for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);t.default=r.a},24:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l(i(1)),r=l(i(85)),a=l(i(86)),n=l(i(87));function l(e){return e&&e.__esModule?e:{default:e}}t.default={mixins:[s.default],data:function(){return{properties:r.default,events:a.default,methods:n.default}},mounted:function(){}}},25:function(e,t){},53:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"api_panel"},[i("h4",{staticClass:"api_title"},[e._v("属性（Properties）")]),e._v(" "),i("b-table",{attrs:{striped:"",hover:"",bordered:"",items:e.properties,fields:e.properties_fields}})],1),e._v(" "),i("div",{staticClass:"api_panel"},[i("h4",{staticClass:"api_title"},[e._v("事件（Events）")]),e._v(" "),i("b-table",{attrs:{striped:"",hover:"",bordered:"",items:e.events,fields:e.events_fields}})],1),e._v(" "),i("div",{staticClass:"api_panel"},[i("h4",{staticClass:"api_title"},[e._v("方法（Methods）")]),e._v(" "),i("b-table",{attrs:{striped:"",hover:"",bordered:"",items:e.methods,fields:e.methods_fields}})],1)])},r=[];i.d(t,"a",function(){return s}),i.d(t,"b",function(){return r})},85:function(e,t,i){"use strict";e.exports=[{prop:"id",type:"String",default:"tab_随机数",description:"选项卡id"},{prop:"title",type:"String",default:'""',description:"标题"},{prop:"tabs",type:"Array",default:"[]",description:"选项卡配置对象"}]},86:function(e,t,i){"use strict";e.exports=[{event:"onRefresh",param:"params",description:"点击刷新按钮后触发。"}]},87:function(e,t,i){"use strict";e.exports=[{method:"getOptions",param:"none",description:"返回表格的 Options。"}]},88:function(e,t,i){"use strict";var s=i(25);i.n(s).a}}]);