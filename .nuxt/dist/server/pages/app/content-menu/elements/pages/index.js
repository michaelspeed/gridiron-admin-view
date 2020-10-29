exports.ids = [15];
exports.modules = {

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/content-menu/elements/pages/index.vue?vue&type=template&id=4847084a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Pages</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\"><span id=\"kt_subheader_total\" class=\"text-dark-50 font-weight-bold\"></span> <div class=\"ml-5\"><div class=\"input-group input-group-sm input-group-solid\" style=\"max-width: 175px\"><input type=\"text\" id=\"kt_subheader_search_form\" placeholder=\"Search...\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"form-control\"> <div class=\"input-group-append\"><i class=\"fas fa-search\"></i></div></div></div></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a> <a href=\"javascript:;\" class=\"btn btn-light-primary font-weight-bold ml-2\">\n                            Page Builder\n                        </a></div></div></div> "),_vm._ssrNode("<div class=\"card card-custom gutter-b\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.pages.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"card-body\">","</div>",[(!_vm.$apollo.queries.pages.loading)?_c('ag-grid-vue',{ref:"agGridTable",staticClass:"ag-theme-material",staticStyle:{"height":"100vh"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.columnDefs,"defaultColDef":_vm.defaultColDef,"rowData":_vm.pages,"colResizeDefault":"shift","animateRows":true,"floatingFilter":true,"pagination":true,"suppressPaginationPanel":true,"enableRtl":false},on:{"grid-ready":_vm.onGridReady}}):_vm._e()],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/content-menu/elements/pages/index.vue?vue&type=template&id=4847084a&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/PageActions.vue?vue&type=template&id=2ef4eaa5&
var PageActionsvue_type_template_id_2ef4eaa5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<a href=\"javascript:;\" class=\"btn btn-sm btn-light-danger font-weight-bold mr-2\">\n        Delete\n    </a>")])}
var PageActionsvue_type_template_id_2ef4eaa5_staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/PageActions.vue?vue&type=template&id=2ef4eaa5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/PageActions.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PageActionsvue_type_script_lang_ts_PageActions = class PageActions extends external_vue_property_decorator_["Vue"] {
  onDeletePage() {
    console.log(this.params);
    this.$apollo.mutate({
      mutation: gql["R" /* DeleteOnePageDocument */],
      variables: {
        id: this.params.data.id
      }
    }).then(value => {
      this.$Message.error(`Delete Successful`);
    });
  }

};
PageActionsvue_type_script_lang_ts_PageActions = __decorate([external_vue_property_decorator_["Component"]], PageActionsvue_type_script_lang_ts_PageActions);
/* harmony default export */ var PageActionsvue_type_script_lang_ts_ = (PageActionsvue_type_script_lang_ts_PageActions);
// CONCATENATED MODULE: ./components/pages/PageActions.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_PageActionsvue_type_script_lang_ts_ = (PageActionsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/pages/PageActions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_PageActionsvue_type_script_lang_ts_,
  PageActionsvue_type_template_id_2ef4eaa5_render,
  PageActionsvue_type_template_id_2ef4eaa5_staticRenderFns,
  false,
  null,
  null,
  "86a802f4"
  
)

/* harmony default export */ var pages_PageActions = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/content-menu/elements/pages/index.vue?vue&type=script&lang=ts&
var pagesvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let pagesvue_type_script_lang_ts_Pages = class Pages extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
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
      field: 'title'
    }, {
      headerName: 'Target Id',
      filter: false,
      field: 'targetId'
    }, {
      headerName: 'type',
      filter: false,
      field: 'pageCategory'
    }, {
      headerName: 'actions',
      cellRendererFramework: 'PageActions'
    }];
  }

  onGridReady() {
    this.gridApi = this.gridOptions.api;
    this.gridApi.sizeColumnsToFit();
  }

};
pagesvue_type_script_lang_ts_Pages = pagesvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  components: {
    PageActions: pages_PageActions
  },
  apollo: {
    pages: {
      query: gql["db" /* GetAllPagesDocument */],

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
})], pagesvue_type_script_lang_ts_Pages);
/* harmony default export */ var pagesvue_type_script_lang_ts_ = (pagesvue_type_script_lang_ts_Pages);
// CONCATENATED MODULE: ./pages/app/content-menu/elements/pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var elements_pagesvue_type_script_lang_ts_ = (pagesvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/app/content-menu/elements/pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  elements_pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6e0ea086"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map