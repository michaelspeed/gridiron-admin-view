exports.ids = [41];
exports.modules = {

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/seo-menu/url-rewrites/index.vue?vue&type=template&id=7904dac4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">SEO URL rewrites</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\">"+((_vm.seoAggregate)?("<span id=\"kt_subheader_total\" class=\"text-dark-50 font-weight-bold\">"+_vm._ssrEscape(_vm._s(_vm.seoAggregate.count.id)+" Total")+"</span>"):"<!---->")+" <div class=\"ml-5\"><div class=\"input-group input-group-sm input-group-solid\" style=\"max-width: 175px\"><input type=\"text\" id=\"kt_subheader_search_form\" placeholder=\"Search...\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"form-control\"> <div class=\"input-group-append\"><i class=\"fas fa-search\"></i></div></div></div></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "),_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.seos.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),(!_vm.$apollo.queries.seos.loading)?_c('ag-grid-vue',{ref:"agGridTable",staticClass:"ag-theme-material ag-grid-table",staticStyle:{"height":"100vh"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.columnDefs,"defaultColDef":_vm.defaultColDef,"rowData":_vm.seos,"colResizeDefault":"shift","animateRows":true,"floatingFilter":true,"pagination":true,"suppressPaginationPanel":true,"enableRtl":false},on:{"grid-ready":_vm.onGridReady}}):_vm._e()],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/seo-menu/url-rewrites/index.vue?vue&type=template&id=7904dac4&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Seo/SeoActions.vue?vue&type=template&id=6f470dda&
var SeoActionsvue_type_template_id_6f470dda_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<a href=\"javascript:;\" class=\"btn btn-light-primary btn-sm\">Edit</a> <a href=\"javascript:;\""+(_vm._ssrAttr("disabled",_vm.checkData()))+(_vm._ssrClass("btn btn-sm",{'btn-light-danger': !_vm.checkData(), 'btn-light-dark': _vm.checkData()}))+">Delete</a>")])}
var SeoActionsvue_type_template_id_6f470dda_staticRenderFns = []


// CONCATENATED MODULE: ./components/Seo/SeoActions.vue?vue&type=template&id=6f470dda&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Seo/SeoActions.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SeoActionsvue_type_script_lang_ts_SeoActions = class SeoActions extends external_vue_property_decorator_["Vue"] {
  checkData() {
    return !(this.params.data.variant === null && this.params.data.collection === null);
  }

};
SeoActionsvue_type_script_lang_ts_SeoActions = __decorate([external_vue_property_decorator_["Component"]], SeoActionsvue_type_script_lang_ts_SeoActions);
/* harmony default export */ var SeoActionsvue_type_script_lang_ts_ = (SeoActionsvue_type_script_lang_ts_SeoActions);
// CONCATENATED MODULE: ./components/Seo/SeoActions.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Seo_SeoActionsvue_type_script_lang_ts_ = (SeoActionsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Seo/SeoActions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Seo_SeoActionsvue_type_script_lang_ts_,
  SeoActionsvue_type_template_id_6f470dda_render,
  SeoActionsvue_type_template_id_6f470dda_staticRenderFns,
  false,
  null,
  null,
  "465dd6c2"
  
)

/* harmony default export */ var Seo_SeoActions = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/seo-menu/url-rewrites/index.vue?vue&type=script&lang=ts&
var url_rewritesvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let url_rewritesvue_type_script_lang_ts_UrlRewrites = class UrlRewrites extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.limit = 50;
    this.offset = 0;
    this.search = ''; //table

    this.gridOptions = {};
    this.gridApi = null;
    this.columnDefs = [{
      headerName: 'Collection/Variant',
      filter: false,
      valueFormatter: this.onCheckVarCol
    }, {
      headerName: 'Meta-Title',
      filter: false,
      field: 'metatitle'
    }, {
      headerName: 'Url-Key',
      filter: false,
      field: 'urlKey'
    }, {
      headerName: 'Actions',
      cellRendererFramework: 'SeoActions'
    }];
    this.defaultColDef = {
      sortable: true,
      editable: false,
      resizable: true,
      suppressMenu: true,
      filter: false
    }; //paging

    this.last = 0;
    this.first = 10;
    this.after = null;
    this.before = null;
    this.hasPrev = false;
    this.hasNext = false;
    this.page = 1;
  }

  oChange() {
    console.log(this.seos);
  }

  onCheckVarCol(data) {
    if (data.data.collection !== null) {
      return `${data.data.collection.name}: (Collection)`;
    } else if (data.data.variant !== null) {
      return `${data.data.variant.name}: (Variant)`;
    } else {
      return 'Residual SEO!';
    }
  }

  mounted() {
    this.gridApi = this.gridOptions.api;

    if (this.gridApi !== undefined) {
      this.gridApi.sizeColumnsToFit();
    }
  }

  onGridReady() {
    this.gridApi = this.gridOptions.api;
    this.gridApi.sizeColumnsToFit();
  }

};

url_rewritesvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('seos')], url_rewritesvue_type_script_lang_ts_UrlRewrites.prototype, "oChange", null);

url_rewritesvue_type_script_lang_ts_UrlRewrites = url_rewritesvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  apollo: {
    seos: {
      query: gql["hb" /* GetAllSeoDocument */],

      variables() {
        return {
          limit: this.limit,
          offset: this.offset,
          iLike: `%${this.search}%`
        };
      },

      fetchPolicy: 'network-only'
    },
    seoAggregate: {
      query: gql["Wb" /* GetSeoAggregateDocument */]
    }
  },
  components: {
    SeoActions: Seo_SeoActions
  }
})], url_rewritesvue_type_script_lang_ts_UrlRewrites);
/* harmony default export */ var url_rewritesvue_type_script_lang_ts_ = (url_rewritesvue_type_script_lang_ts_UrlRewrites);
// CONCATENATED MODULE: ./pages/app/seo-menu/url-rewrites/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var seo_menu_url_rewritesvue_type_script_lang_ts_ = (url_rewritesvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/app/seo-menu/url-rewrites/index.vue





/* normalize component */

var url_rewrites_component = Object(componentNormalizer["a" /* default */])(
  seo_menu_url_rewritesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ee17f27a"
  
)

/* harmony default export */ var url_rewrites = __webpack_exports__["default"] = (url_rewrites_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map