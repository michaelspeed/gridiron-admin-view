exports.ids = [27];
exports.modules = {

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/delivery-menu/guys/index.vue?vue&type=template&id=18c74264&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Delivery Guys</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\"><span id=\"kt_subheader_total\" class=\"text-dark-50 font-weight-bold\"></span></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "),_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.deliveries.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),(!_vm.$apollo.queries.deliveries.loading)?_c('ag-grid-vue',{ref:"agGridTable",staticClass:"ag-theme-material ag-grid-table",staticStyle:{"height":"100vh"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.columnDefs,"defaultColDef":_vm.defaultColDef,"rowData":_vm.deliveries,"colResizeDefault":"shift","animateRows":true,"floatingFilter":true,"pagination":true,"suppressPaginationPanel":true,"enableRtl":false},on:{"grid-ready":_vm.onGridReady}}):_vm._e()],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/delivery-menu/guys/index.vue?vue&type=template&id=18c74264&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/delivery-menu/guys/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let guysvue_type_script_lang_ts_Guys = class Guys extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.limit = 10;
    this.offset = 0; //table

    this.gridOptions = {};
    this.gridApi = null;
    this.columnDefs = [{
      headerName: 'First Name',
      filter: false,
      field: 'user.firstName'
    }, {
      headerName: 'Last Name',
      filter: false,
      field: 'user.lastName'
    }, {
      headerName: 'Phone Number',
      filter: false,
      field: 'user.phoneNumber'
    }];
    this.defaultColDef = {
      sortable: true,
      editable: false,
      resizable: true,
      suppressMenu: true
    };
  }

  onGridReady() {
    this.gridApi = this.gridOptions.api;
    this.gridApi.sizeColumnsToFit();
  }

  onChangeDeliveries() {
    console.log(this.deliveries);
  }

};

__decorate([Object(external_vue_property_decorator_["Watch"])('deliveries')], guysvue_type_script_lang_ts_Guys.prototype, "onChangeDeliveries", null);

guysvue_type_script_lang_ts_Guys = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  apollo: {
    deliveries: {
      query: gql["Ab" /* GetDeliveriesDocument */],

      variables() {
        return {
          limit: this.limit,
          offset: this.offset
        };
      }

    }
  }
})], guysvue_type_script_lang_ts_Guys);
/* harmony default export */ var guysvue_type_script_lang_ts_ = (guysvue_type_script_lang_ts_Guys);
// CONCATENATED MODULE: ./pages/app/delivery-menu/guys/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var delivery_menu_guysvue_type_script_lang_ts_ = (guysvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/delivery-menu/guys/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  delivery_menu_guysvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6dc18237"
  
)

/* harmony default export */ var guys = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map