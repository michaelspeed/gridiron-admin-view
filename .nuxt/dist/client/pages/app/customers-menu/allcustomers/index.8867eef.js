(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1485:function(t,e,r){"use strict";r.r(e);r(71),r(45),r(110),r(55),r(48),r(226);var n=r(52),c=r(107),l=r(60),o=r(54),f=r(42),d=r(51),h=r(49),m=r(103);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},_=function(t){Object(l.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"onClickEdit",value:function(){this.$router.push("/app/customers-menu/allcustomers/".concat(this.params.data.id))}}]),r}(h.c),C=_=y([h.a],_),j=r(33),O=Object(j.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"btn btn-sm btn-light-primary font-weight-bold mr-2",attrs:{href:"javascript:;"},on:{click:this.onClickEdit}},[this._v("Edit / View")]),this._v(" "),e("a",{staticClass:"btn btn-sm btn-light-danger font-weight-bold mr-2",attrs:{href:"javascript:;"}},[this._v("Block")])])}),[],!1,null,null,null).exports;function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var R=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(l.a)(r,t);var e=w(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).search="",t.limit=50,t.page=1,t.gridOptions={},t.gridApi=null,t.columnDefs=[{headerName:"First Name",filter:!1,field:"firstName"},{headerName:"Last Name",filter:!1,field:"lastName"},{headerName:"Actions",cellRendererFramework:"UserActions"}],t.defaultColDef={sortable:!0,editable:!1,resizable:!0,suppressMenu:!0},t}return Object(c.a)(r,[{key:"onChangUsers",value:function(){console.log(this.users)}},{key:"onGridReady",value:function(){this.gridApi=this.gridOptions.api,this.gridApi.sizeColumnsToFit()}}]),r}(h.c);R([Object(h.d)("users")],x.prototype,"onChangUsers",null);var k=x=R([Object(h.a)({components:{UserActions:O},layout:"console",apollo:{users:{query:m.mb,variables:function(){return{limit:this.limit,iLike:"%".concat(this.search,"%"),offset:(this.page-1)*this.limit}}},userAggregate:{query:m.ic,variables:function(){return{iLike:"%".concat(this.search,"%")}}}}})],x),D=Object(j.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex flex-column-fluid"},[r("div",{staticClass:" container-fluid "},[r("div",{staticClass:"subheader py-2 py-lg-4  subheader-transparent ",attrs:{id:"kt_subheader"}},[r("div",{staticClass:"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100"},[r("div",{staticClass:"d-flex align-items-center flex-wrap mr-2"},[r("h5",{staticClass:"text-dark font-weight-bold mt-2 mb-2 mr-5"},[t._v("All Customers")]),t._v(" "),r("div",{staticClass:"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"}),t._v(" "),r("div",{staticClass:"d-flex align-items-center",attrs:{id:"kt_subheader_search"}},[t.$apollo.queries.userAggregate.loading?t._e():r("span",{staticClass:"text-dark-50 font-weight-bold",attrs:{id:"kt_subheader_total"}},[t._v(t._s(t.userAggregate.count.id)+" Total")]),t._v(" "),r("div",{staticClass:"ml-5"},[r("div",{staticClass:"input-group input-group-sm input-group-solid",staticStyle:{"max-width":"175px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",id:"kt_subheader_search_form",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._m(0)])])])]),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[t.$apollo.queries.users.loading?r("div",{staticClass:"d-flex justify-content-center align-items-center m-20 w-100"},[r("div",{staticClass:"spinner spinner-primary spinner-lg mr-15"})]):t._e(),t._v(" "),t.$apollo.queries.users.loading?t._e():r("ag-grid-vue",{ref:"agGridTable",staticClass:"ag-theme-material ag-grid-table",staticStyle:{height:"100vh"},attrs:{gridOptions:t.gridOptions,columnDefs:t.columnDefs,defaultColDef:t.defaultColDef,rowData:t.users,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,suppressPaginationPanel:!0,enableRtl:!1},on:{"grid-ready":t.onGridReady}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("i",{staticClass:"fas fa-search"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-items-center"},[e("a",{attrs:{href:"#"}})])}],!1,null,null,null);e.default=D.exports}}]);