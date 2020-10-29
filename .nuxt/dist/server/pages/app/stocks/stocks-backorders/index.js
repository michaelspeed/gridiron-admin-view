exports.ids = [42];
exports.modules = {

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/stocks/stocks-backorders/index.vue?vue&type=template&id=3070e24a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Stock Backorders</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "),_vm._ssrNode("<div class=\"card card-custom gutter-b\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.stockBackLogs.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"card-body\">","</div>",[(!_vm.$apollo.queries.stockBackLogs.loading)?_c('ag-grid-vue',{ref:"agGridTable",staticClass:"ag-theme-material",staticStyle:{"height":"100vh"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.columnDefs,"defaultColDef":_vm.defaultColDef,"rowData":_vm.stockBackLogs,"colResizeDefault":"shift","animateRows":true,"floatingFilter":true,"pagination":true,"suppressPaginationPanel":true,"enableRtl":false},on:{"grid-ready":_vm.onGridReady}}):_vm._e()],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/stocks/stocks-backorders/index.vue?vue&type=template&id=3070e24a&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/stocks/stocks-backorders/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let stocks_backordersvue_type_script_lang_ts_StockBackorders = class StockBackorders extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.limit = 50;
    this.offset = 0; // Table

    this.gridOptions = {};
    this.gridApi = null;
    this.defaultColDef = {
      sortable: true,
      editable: false,
      resizable: true,
      suppressMenu: true
    };
    this.columnDefs = [{
      headerName: 'Variant',
      filter: false,
      field: 'variant.variant.name'
    }, {
      headerName: 'Quantity',
      filter: false,
      field: 'quantity'
    }, {
      headerName: 'Store',
      filter: false,
      field: 'store.storeName'
    }];
  }

  onGridReady() {
    this.gridApi = this.gridOptions.api;
    this.gridApi.sizeColumnsToFit();
  }

};
stocks_backordersvue_type_script_lang_ts_StockBackorders = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  computed: { ...Object(external_vuex_["mapState"])({
      admin: store => store.admin.administrator,
      vendor: store => store.admin.vendor,
      vendorStore: store => store.admin.vendorStore
    })
  },
  apollo: {
    stockBackLogs: {
      query: gql["rb" /* GetAllbackLogsDocument */],

      variables() {
        if (!this.vendorStore) {
          return {
            limit: this.limit,
            offset: this.offset
          };
        } else {
          return {
            limit: this.limit,
            offset: this.offset,
            store: this.vendorStore.id
          };
        }
      }

    }
  }
})], stocks_backordersvue_type_script_lang_ts_StockBackorders);
/* harmony default export */ var stocks_backordersvue_type_script_lang_ts_ = (stocks_backordersvue_type_script_lang_ts_StockBackorders);
// CONCATENATED MODULE: ./pages/app/stocks/stocks-backorders/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var stocks_stocks_backordersvue_type_script_lang_ts_ = (stocks_backordersvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/stocks/stocks-backorders/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  stocks_stocks_backordersvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "52650ee2"
  
)

/* harmony default export */ var stocks_backorders = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map