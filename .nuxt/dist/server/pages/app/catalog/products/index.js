exports.ids = [10];
exports.modules = {

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/catalog/products/index.vue?vue&type=template&id=19909fd5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Products</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\">"+((_vm.productAggregate)?("<span id=\"kt_subheader_total\" class=\"text-dark-50 font-weight-bold\">"+_vm._ssrEscape(_vm._s(_vm.productAggregate.count.id)+" Total")+"</span>"):"<!---->")+" <div class=\"ml-5\"><div class=\"input-group input-group-sm input-group-solid\" style=\"max-width: 175px\"><input type=\"text\" id=\"kt_subheader_search_form\" placeholder=\"Search...\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"form-control\"> <div class=\"input-group-append\"><i class=\"fas fa-search\"></i></div></div></div></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a> <a href=\"javascript:;\" class=\"btn btn-light-primary font-weight-bold ml-2\">\n                            Add products\n                        </a></div></div></div> "),_vm._ssrNode("<div class=\"card card-custom gutter-b\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.products.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"card-body\">","</div>",[(!_vm.$apollo.queries.products.loading)?_c('ag-grid-vue',{ref:"agGridTable",staticClass:"ag-theme-material",staticStyle:{"height":"100vh"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.columnDefs,"defaultColDef":_vm.defaultColDef,"rowData":_vm.products,"colResizeDefault":"shift","animateRows":true,"floatingFilter":true,"pagination":true,"suppressPaginationPanel":true,"enableRtl":false},on:{"grid-ready":_vm.onGridReady}}):_vm._e()],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/catalog/products/index.vue?vue&type=template&id=19909fd5&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/products/product-actions.vue?vue&type=template&id=56cfb69e&
var product_actionsvue_type_template_id_56cfb69e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<a href=\"javascript:;\" class=\"btn btn-sm btn-light-primary font-weight-bold mr-2\">Edit</a> "),_c('a-popconfirm',{attrs:{"ok-text":"OK","cancel-text":"No, Thanks","title":"Are you sure to delete this?"}},[_c('a',{staticClass:"btn btn-sm btn-light-danger font-weight-bold mr-2",attrs:{"href":"javascript:;"}},[_vm._v("Delete")])])],2)}
var product_actionsvue_type_template_id_56cfb69e_staticRenderFns = []


// CONCATENATED MODULE: ./components/products/product-actions.vue?vue&type=template&id=56cfb69e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/products/product-actions.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let product_actionsvue_type_script_lang_ts_ProductActions = class ProductActions extends external_vue_property_decorator_["Vue"] {
  onClickEdit() {
    console.log(this.params.data);
    this.$router.push(`/app/catalog/products/${this.params.data.id}`);
  }

};
product_actionsvue_type_script_lang_ts_ProductActions = __decorate([external_vue_property_decorator_["Component"]], product_actionsvue_type_script_lang_ts_ProductActions);
/* harmony default export */ var product_actionsvue_type_script_lang_ts_ = (product_actionsvue_type_script_lang_ts_ProductActions);
// CONCATENATED MODULE: ./components/products/product-actions.vue?vue&type=script&lang=ts&
 /* harmony default export */ var products_product_actionsvue_type_script_lang_ts_ = (product_actionsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/products/product-actions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_product_actionsvue_type_script_lang_ts_,
  product_actionsvue_type_template_id_56cfb69e_render,
  product_actionsvue_type_template_id_56cfb69e_staticRenderFns,
  false,
  null,
  null,
  "d945fc7e"
  
)

/* harmony default export */ var product_actions = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/catalog/products/index.vue?vue&type=script&lang=ts&
var productsvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let productsvue_type_script_lang_ts_Index = class Index extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.allProducts = []; // Paging

    this.last = 0;
    this.first = 10;
    this.after = null;
    this.before = null;
    this.hasPrev = false;
    this.hasNext = false;
    this.limit = 50;
    this.offset = 0;
    this.search = ''; // Table

    this.gridOptions = {};
    this.gridApi = null;
    this.defaultColDef = {
      sortable: true,
      editable: false,
      resizable: true,
      suppressMenu: true
    };
    this.columnDefs = [{
      headerName: 'Name',
      filter: false,
      field: 'productName'
    }, {
      headerName: 'Slug',
      filter: false,
      field: 'slug'
    }, {
      headerName: 'Actions',
      cellRendererFramework: 'ProductActions'
    }];
  }

  onGridReady() {
    this.gridApi = this.gridOptions.api;
    this.gridApi.sizeColumnsToFit();
  }

  onCreateProduct() {
    this.$router.push(`/app/catalog/products/createproduct`);
  }

};
productsvue_type_script_lang_ts_Index = productsvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  components: {
    ProductActions: product_actions
  },
  apollo: {
    productAggregate: {
      query: gql["Ob" /* GetProductAggregateDocument */]
    },
    products: {
      query: gql["fb" /* GetAllProductsDocument */],

      variables() {
        return {
          limit: this.limit,
          offset: this.offset,
          iLike: `%${this.search}%`
        };
      },

      pollInterval: 3000
    }
  }
})], productsvue_type_script_lang_ts_Index);
/* harmony default export */ var productsvue_type_script_lang_ts_ = (productsvue_type_script_lang_ts_Index);
// CONCATENATED MODULE: ./pages/app/catalog/products/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var catalog_productsvue_type_script_lang_ts_ = (productsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/app/catalog/products/index.vue





/* normalize component */

var products_component = Object(componentNormalizer["a" /* default */])(
  catalog_productsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "719b99b2"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (products_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map