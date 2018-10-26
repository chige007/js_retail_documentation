(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{},data:function(){return{properties_fields:{prop:{label:"属性名",sortable:!0},type:{label:"类型",sortable:!0},default:{label:"默认值",sortable:!0},description:{label:"说明"}},events_fields:{event:{label:"事件名",sortable:!0},param:{label:"参数",sortable:!0},description:{label:"说明"}},methods_fields:{method:{label:"方法名",sortable:!0},param:{label:"参数",sortable:!0},return:{label:"返回值",sortable:!0},description:{label:"说明"}}}},computed:{},methods:{},mounted:function(){this.$emit("viewIn")}}},10:function(e,t){},108:function(e,t,r){"use strict";r.r(t);var a=r(57),i=r(8);for(var n in i)"default"!==n&&function(e){r.d(t,e,function(){return i[e]})}(n);r(68);var o=r(0),s=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);s.options.__file="table.vue",t.default=s.exports},57:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"api_panel"},[r("h4",{staticClass:"api_title"},[e._v("属性（Properties）")]),e._v(" "),r("b-table",{attrs:{striped:"",hover:"",bordered:"",items:e.properties,fields:e.properties_fields}})],1),e._v(" "),r("div",{staticClass:"api_panel"},[r("h4",{staticClass:"api_title"},[e._v("事件（Events）")]),e._v(" "),r("b-table",{attrs:{striped:"",hover:"",bordered:"",items:e.events,fields:e.events_fields}})],1),e._v(" "),r("div",{staticClass:"api_panel"},[r("h4",{staticClass:"api_title"},[e._v("方法（Methods）")]),e._v(" "),r("b-table",{attrs:{striped:"",hover:"",bordered:"",items:e.methods,fields:e.methods_fields}})],1)])},i=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i})},65:function(e,t,r){"use strict";e.exports=[{prop:"id",type:"String",default:"table_随机数",description:"表格id"},{prop:"tableOptions",type:"Object",default:"undefined",description:"表格配置对象"},{prop:"extendClass",type:"String",default:'""',description:"表格扩展样式"}]},66:function(e,t,r){"use strict";e.exports=[{event:"onClickRow",param:"row, $element",description:"当用户点击某一行的时候触发，参数包括：row：点击行的数据，$element：tr 元素，field：点击列的 field 名称。"},{event:"onDblClickRow",param:"row, $element",description:"当用户双击某一行的时候触发，参数包括：row：点击行的数据，$element：tr 元素，field：点击列的 field 名称。"},{event:"onClickCell",param:"field, value, row, $element",description:"当用户点击某一列的时候触发，参数包括：field：点击列的 field 名称，value：点击列的 value 值，row：点击列的整行数据，$element：td 元素。"},{event:"onDblClickCell",param:"field, value, row, $element",description:"当用户双击某一列的时候触发，参数包括：field：点击列的 field 名称，value：点击列的 value 值，row：点击列的整行数据，$element：td 元素。"},{event:"onSort",param:"name, order",description:"当用户对某列进行排序时触发，参数包括：name：排序列的 filed 名称，order：排序顺序。"},{event:"onCheck",param:"row",description:"当用户选择某一行时触发，参数包含：row：与点击行对应的记录，$element：选择的DOM元素。"},{event:"onUncheck",param:"row",description:"当用户反选某一行时触发，参数包含：row：与点击行对应的记录，$element：选择的DOM元素。"},{event:"onCheckAll",param:"rows",description:"当用户全选所有的行时触发，参数包含：rows：最新选择的所有行的数组。"},{event:"onUncheckAll",param:"rows",description:"当用户反选所有的行时触发，参数包含：rows：最新选择的所有行的数组。"},{event:"onLoadSuccess",param:"data",description:"远程数据加载成功时触发成功。"},{event:"onLoadError",param:"status",description:"远程数据加载失败时触发成功。"},{event:"onPageChange",param:"number, size",description:"当页面更改页码或页面大小时触发。"},{event:"onRefresh",param:"params",description:"点击刷新按钮后触发。"}]},67:function(e,t,r){"use strict";e.exports=[{method:"getOptions",param:"none",description:"返回表格的 Options。"},{method:"getSelections",param:"none",description:"返回所选的行，当没有选择任何行的时候返回一个空数组。"},{method:"getAllSelections",param:"none",description:"返回所有选择的行，包括搜索过滤前的，当没有选择任何行的时候返回一个空数组。"},{method:"getData",param:"useCurrentPage",description:"或者当前加载的数据。假如设置 useCurrentPage 为 true，则返回当前页的数据。"},{method:"getRowByUniqueId",param:"id",description:"根据 uniqueId 获取行数据。"},{method:"load",param:"data",description:"加载数据到表格中，旧数据会被替换。"},{method:"append",param:"data",description:"添加数据到表格在现有数据之后。"},{method:"prepend",param:"data",description:"插入数据到表格在现有数据之前。"},{method:"remove",param:"params",description:"从表格中删除数据，包括两个参数： field: 需要删除的行的 field 名称，values: 需要删除的行的值，类型为数组。"},{method:"insertRow",param:"params",description:"插入新行，参数包括：index: 要插入的行的 index，row: 行的数据，Object 对象。"},{method:"updateRow",param:"params",description:"更新指定的行，参数包括：index: 要更新的行的 index，row: 行的数据，Object 对象。"},{method:"updateCell",param:"params",description:"更新一个单元格，params包含以下属性：index: 行索引。field: 字段名称。value: 新字段值。"},{method:"refresh",param:"params",description:"刷新远程服务器数据，可以设置{silent: true}以静默方式刷新数据，并设置{url: newUrl}更改URL。"},{method:"checkAll",param:"none",description:"选中当前页面所有行。"},{method:"uncheckAll",param:"none",description:"取消选中当前页面所有行。"},{method:"check",param:"index",description:"选中某一行，行索引从0开始。"},{method:"uncheck",param:"index",description:"取消选中某一行，行索引从0开始。"}]},68:function(e,t,r){"use strict";var a=r(10);r.n(a).a},8:function(e,t,r){"use strict";r.r(t);var a=r(9),i=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,function(){return a[e]})}(n);t.default=i.a},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r(1)),i=s(r(65)),n=s(r(66)),o=s(r(67));function s(e){return e&&e.__esModule?e:{default:e}}t.default={mixins:[a.default],data:function(){return{properties:i.default,events:n.default,methods:o.default}},mounted:function(){}}}}]);