webpackJsonp([1],{"+dB8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("role")])},s=[],r={render:n,staticRenderFns:s};e.a=r},"+skl":function(t,e){},"0PmI":function(t,e,a){"use strict";var n=a("o8GF");e.a={data:function(){return{cityList:[],model1:"",columns1:[{title:"userName",key:"userName",sortable:!0},{title:"password",key:"password",sortable:!0}],data1:[],tab0:!0,tab1:!0,tab2:!0,colHistQuery:[{title:"Id",key:"queryId"},{title:"查询时间",key:"queryTime"},{title:"查询语句",key:"query"},{title:"任务状态",key:"status"}],dataHistQuery:[],metastoreDbAndTables:{}}},mounted:function(){this.getMetaStoreDbTables()},methods:{refresh:function(){this.$Message.info("refresh")},getMetaStoreDbTables:function(){var t=this;Object(n.a)().then(function(e){t.metastoreDbAndTables=e.data},function(e){t.metastoreDbAndTables={default112:[{TBL_ID:21,TBL_NAME:"access_path1",TBL_TYPE:"EXTERNAL_TABLE"},{TBL_ID:22,TBL_NAME:"access_path2",TBL_TYPE:"EXTERNAL_TABLE"},{TBL_ID:23,TBL_NAME:"access_path3",TBL_TYPE:"MANAGED_TABLE"}],formatter:[{TBL_ID:24,TBL_NAME:"access_path4",TBL_TYPE:"EXTERNAL_TABLE"},{TBL_ID:25,TBL_NAME:"access_path5",TBL_TYPE:"EXTERNAL_TABLE"}]},t.cityList=[{value:"1",label:"北京"}]})},handleTabRemove:function(t){this["tab"+t]=!1}}}},"1XkS":function(t,e,a){"use strict";var n=a("0PmI"),s=a("kWV0"),r=a("VU/8"),o=r(n.a,s.a,!1,null,null,null);e.a=o.exports},"1dN7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("home")])},s=[],r={render:n,staticRenderFns:s};e.a=r},BTSl:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Row",{attrs:{type:"flex"}},[a("Col",{staticClass:"layout-menu-left",attrs:{span:"3"}},[a("Menu",{attrs:{theme:"dark",width:"auto","open-names":["1"]}},[a("div",{staticClass:"layout-logo-left"},[a("span",[a("font",{attrs:{color:"white"}},[a("B",[t._v("PROPHET")])],1)],1)]),t._v(" "),a("Submenu",{attrs:{name:"1"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                        hive操作\n                    ")],1),t._v(" "),a("MenuItem",{attrs:{name:"1-1"},nativeOn:{click:function(e){t.forward("hive_query")}}},[a("Icon",{attrs:{type:"ios-list-outline"}}),t._v("发起hive查询")],1),t._v(" "),a("MenuItem",{attrs:{name:"1-2"},nativeOn:{click:function(e){t.forward("hive_create_table")}}},[a("Icon",{attrs:{type:"ios-pricetag"}}),t._v("创建hive表")],1),t._v(" "),a("MenuItem",{attrs:{name:"1-3"},nativeOn:{click:function(e){t.forward("hive_list_tables")}}},[a("Icon",{attrs:{type:"ios-chatboxes-outline"}}),t._v("我的hive表")],1)],2),t._v(" "),a("Submenu",{attrs:{name:"2"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                        hive报表\n                    ")],1),t._v(" "),a("MenuItem",{attrs:{name:"3-1"}},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("Option 1")],1),t._v(" "),a("MenuItem",{attrs:{name:"3-2"}},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("Option 2")],1)],2),t._v(" "),a("Submenu",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                        定时任务\n                    ")],1),t._v(" "),a("MenuItem",{attrs:{name:"3-1"}},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("Option 1")],1),t._v(" "),a("MenuItem",{attrs:{name:"3-2"}},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("Option 2")],1)],2)],1)],1),t._v(" "),a("Col",{attrs:{span:"21"}},[a("div",{staticClass:"layout-header"}),t._v(" "),a("div",{staticClass:"layout-breadcrumb"},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),a("BreadcrumbItem",{attrs:{href:"#"}},[t._v("Projects")]),t._v(" "),a("BreadcrumbItem",[t._v("iView")])],1)],1),t._v(" "),a("div",{staticClass:"layout-content"},[a("router-view")],1)])],1)],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},IAKO:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("IAKO")}var s=a("xJD8"),r=a("BTSl"),o=a("VU/8"),i=n,u=o(s.a,r.a,!1,i,"data-v-40445202",null);e.a=u.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("M93x"),r=a("YaEn"),o=a("BTaQ"),i=a.n(o),u=a("+skl");a.n(u);n.default.use(i.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}}),window.toast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";console.log(message);var a=message.warning;"error"==e?a=message.error:"success"==e&&(a=message.success),a(t)}},PGfm:function(t,e,a){"use strict";var n=a("1dN7"),s=a("VU/8"),r=s(null,n.a,!1,null,null,null);e.a=r.exports},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),r=a("1XkS"),o=a("PGfm"),i=a("eV66");n.default.use(s.a),e.a=new s.a({routes:[{path:"/",name:"root",component:r.a},{path:"/hive_query",name:"hive_query",component:r.a},{path:"/home",name:"Home",component:o.a},{path:"/role",name:"Role",component:i.a}]})},aAkg:function(t,e,a){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.a.get(t,{params:e})}e.a=n;var s=a("//Fk"),r=a.n(s),o=a("mtWM"),i=a.n(o);a("1nuA");i.a.interceptors.response.use(function(t){var e=t.data,a=e.code;return"string"==typeof e&&(e=JSON.parse(e)),0===a||isNaN(a)?e:r.a.reject(e)},function(t){return(t.message||"").indexOf("Network"),r.a.reject(t)})},eV66:function(t,e,a){"use strict";var n=a("+dB8"),s=a("VU/8"),r=s(null,n.a,!1,null,null,null);e.a=r.exports},kWV0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",[a("Col",{attrs:{span:"5"}},[a("Menu",{attrs:{"active-name":"1-2",width:"auto","open-names":["1"]}},t._l(t.metastoreDbAndTables,function(e,n){return a("Submenu",{key:n,attrs:{name:n}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"soup-can-outline"}}),t._v("\n                            "+t._s(n)+"\n                    ")],1),t._v(" "),t._l(e,function(e){return a("MenuItem",{key:e.TBL_ID,attrs:{name:e.TBL_ID}},[t._v(t._s(e.TBL_NAME)+"\n\t\t\t\t\t")])})],2)}))],1),t._v(" "),a("Col",{attrs:{span:"19"}},[a("div",{staticClass:"layout-content-main"},[a("Row",[a("div",{staticStyle:{margin:"10px 10px"}},[a("Input",{attrs:{type:"textarea",rows:6,placeholder:"请输入要查询的SQL...查询大表尽量加上分区键和limit"}}),t._v(" "),a("div",{staticStyle:{"margin-top":"10px",float:"right"}},[a("Button",{attrs:{type:"primary"}},[t._v("查询(S)")]),t._v("  \n                            "),a("Button",[t._v("清空")])],1)],1)]),t._v(" "),a("Row",[a("div",{staticStyle:{margin:"10px 10px"}},[a("Tabs",{attrs:{type:"card",closable:""},on:{"on-tab-remove":t.handleTabRemove}},[t.tab0?a("TabPane",{attrs:{label:"历史查询"}},[a("Table",{attrs:{size:"small",stripe:"",columns:t.colHistQuery,data:t.dataHistQuery}})],1):t._e(),t._v(" "),t.tab1?a("TabPane",{attrs:{label:"历史结果"}},[a("Table",{attrs:{size:"small",stripe:"",columns:t.columns1,data:t.data1}}),t._v(" "),a("router-link",{attrs:{to:"/home"}},[t._v("Go to Foo")])],1):t._e(),t._v(" "),t.tab2?a("TabPane",{attrs:{label:"标签三"}},[t._v("标签三的内容")]):t._e()],1)],1)])],1)])],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},o8GF:function(t,e,a){"use strict";function n(t){return Object(s.a)("/hive_query/all_metastore_db_tables.json",t)}e.a=n;var s=a("aAkg")},xJD8:function(t,e,a){"use strict";e.a={created:function(){},methods:{forward:function(t){this.$router.push(t)}}}}},["NHnr"]);
//# sourceMappingURL=app.b63d18d453c84a71ddb2.js.map