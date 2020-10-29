exports.ids = [39];
exports.modules = {

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/sales-menu/transaction/index.vue?vue&type=template&id=d469e27e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Transactions</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\"><span id=\"kt_subheader_total\" class=\"text-dark-50 font-weight-bold\"></span></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "),_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_c('ag-grid-vue',{ref:"agGridTable",staticClass:"ag-theme-material",staticStyle:{"height":"100vh"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.columnDefs,"defaultColDef":_vm.defaultColDef,"rowData":_vm.payments,"colResizeDefault":"shift","animateRows":true,"floatingFilter":true,"pagination":true,"suppressPaginationPanel":true,"enableRtl":false},on:{"grid-ready":_vm.onGridReady}})],1)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/sales-menu/transaction/index.vue?vue&type=template&id=d469e27e&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(42);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/sales-menu/transaction/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let transactionvue_type_script_lang_ts_Transaction = class Transaction extends external_vue_property_decorator_["Vue"] {
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
      headerName: 'Id',
      filter: true,
      field: 'id'
    }, {
      headerName: 'Created At',
      valueFormatter: this.onRenderDate
    }, {
      headerName: 'Status',
      valueFormatter: this.getStatus
    }, {
      headerName: 'Amount',
      valueFormatter: this.getAmount
    }, {
      headerName: 'Transaction Id',
      filter: true,
      field: 'transactionId'
    }];
  }

  getAmount(data) {
    return `${data.data.amount} INR`;
  }

  getStatus(data) {
    if (data.data.errorMessage) {
      return 'Failed';
    } else {
      return 'Success';
    }
  }

  onRenderDate(data) {
    return external_moment_default()(data.data.createdAt).format('DD MMM YYYY');
  }

  onGridReady() {
    this.gridApi = this.gridOptions.api;
    this.gridApi.sizeColumnsToFit();
  }

};
transactionvue_type_script_lang_ts_Transaction = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  apollo: {
    payments: {
      query: gql["lb" /* GetAllTransactionsDocument */],

      variables() {
        return {
          limit: this.limit,
          offset: this.offset
        };
      },

      pollInterval: 3000
    }
  }
})], transactionvue_type_script_lang_ts_Transaction);
/* harmony default export */ var transactionvue_type_script_lang_ts_ = (transactionvue_type_script_lang_ts_Transaction);
// CONCATENATED MODULE: ./pages/app/sales-menu/transaction/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var sales_menu_transactionvue_type_script_lang_ts_ = (transactionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/sales-menu/transaction/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sales_menu_transactionvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "69c6cfe7"
  
)

/* harmony default export */ var transaction = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map