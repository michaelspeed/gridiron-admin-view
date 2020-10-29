exports.ids = [5];
exports.modules = {

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridironViewSettings; });
const GridironViewSettings = {
  "breakpoints": {
    "sm": 576,
    "md": 768,
    "lg": 992,
    "xl": 1200,
    "xxl": 1200
  },
  "colors": {
    "theme": {
      "base": {
        "white": "#ffffff",
        "primary": "#8950FC",
        "secondary": "#E5EAEE",
        "success": "#1BC5BD",
        "info": "#8950FC",
        "warning": "#FFA800",
        "danger": "#F64E60",
        "light": "#F3F6F9",
        "dark": "#212121"
      },
      "light": {
        "white": "#ffffff",
        "primary": "#E1E9FF",
        "secondary": "#ECF0F3",
        "success": "#C9F7F5",
        "info": "#EEE5FF",
        "warning": "#FFF4DE",
        "danger": "#FFE2E5",
        "light": "#F3F6F9",
        "dark": "#D6D6E0"
      },
      "inverse": {
        "white": "#ffffff",
        "primary": "#ffffff",
        "secondary": "#212121",
        "success": "#ffffff",
        "info": "#ffffff",
        "warning": "#ffffff",
        "danger": "#ffffff",
        "light": "#464E5F",
        "dark": "#ffffff"
      }
    },
    "gray": {
      "gray-100": "#F3F6F9",
      "gray-200": "#ECF0F3",
      "gray-300": "#E5EAEE",
      "gray-400": "#D6D6E0",
      "gray-500": "#B5B5C3",
      "gray-600": "#80808F",
      "gray-700": "#464E5F",
      "gray-800": "#1B283F",
      "gray-900": "#212121"
    }
  },
  "font-family": "Poppins"
};

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("92b2722a", content, true, context)
};

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(368);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("36848d0a", content, true, context)
};

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/collections/collection-edit.vue?vue&type=template&id=9cc20ba2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header border-0 py-5\"><h3 class=\"card-title align-items-start flex-column\"><span class=\"card-label font-weight-bolder text-primary\">"+_vm._ssrEscape(_vm._s(_vm.name))+"</span></h3></div> "),_vm._ssrNode("<div class=\"card-body\" style=\"overflow: auto\">","</div>",[_c('a-collapse',{model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},[_c('a-collapse-panel',{key:"1",attrs:{"header":"Basic"}},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Enter Collection Name")]),_vm._v(" "),_c('a-input',{model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted"},[_vm._v(_vm._s(_vm.$t('store.storenameinfo')))])],1),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"d-flex justify-content-between"},[_c('label',[_vm._v("Include In Menu")]),_vm._v(" "),_c('a-switch',{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:(_vm.inMenu),callback:function ($$v) {_vm.inMenu=$$v},expression:"inMenu"}})],1),_vm._v(" "),_c('small',{staticClass:"form-text text-muted"},[_vm._v(_vm._s(_vm.$t('store.storenameinfo')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Enter Collection Title Description")]),_vm._v(" "),_c('a-input',{attrs:{"type":"textarea"},model:{value:(_vm.desc),callback:function ($$v) {_vm.desc=$$v},expression:"desc"}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted"},[_vm._v(_vm._s(_vm.$t('store.storenameinfo')))])],1)]),_vm._v(" "),_c('a-collapse-panel',{key:"2",attrs:{"header":"SEO"}},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Enter Meta URL")]),_vm._v(" "),_c('a-input',{attrs:{"disabled":true},model:{value:(_vm.metaUrl),callback:function ($$v) {_vm.metaUrl=$$v},expression:"metaUrl"}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted"},[_vm._v(_vm._s(_vm.$t('store.storenameinfo')))])],1),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Enter Meta Title")]),_vm._v(" "),_c('a-input',{model:{value:(_vm.metaTitle),callback:function ($$v) {_vm.metaTitle=$$v},expression:"metaTitle"}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted"},[_vm._v(_vm._s(_vm.$t('store.storenameinfo')))])],1),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Enter Meta Keywords")]),_vm._v(" "),_c('vue-tags-input',{attrs:{"tags":_vm.metaKeywords,"placeholder":"Enter keywords"},on:{"tags-changed":function (newTags) { return _vm.metaKeywords = newTags; }},model:{value:(_vm.metaKey),callback:function ($$v) {_vm.metaKey=$$v},expression:"metaKey"}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted"},[_vm._v(_vm._s(_vm.$t('store.storenameinfo')))])],1),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Enter Meta Description")]),_vm._v(" "),_c('a-input',{attrs:{"type":"textarea"},model:{value:(_vm.metaDesc),callback:function ($$v) {_vm.metaDesc=$$v},expression:"metaDesc"}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted"},[_vm._v(_vm._s(_vm.$t('store.storenameinfo')))])],1)])],1),_vm._ssrNode(" <div style=\"margin-top: 20px\"><button type=\"button\" class=\"btn btn-light-primary font-weight-bold\">Save Collection</button></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/collections/collection-edit.vue?vue&type=template&id=9cc20ba2&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/collections/collection-edit.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let collection_editvue_type_script_lang_ts_CollectionEdit = class CollectionEdit extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.inits = false;
    this.name = '';
    this.desc = '';
    this.inMenu = true;
    this.isPrivate = true;
    this.metaUrl = '';
    this.metaTitle = '';
    this.metaDesc = '';
    this.metaKeywords = [];
    this.existing = [];
    this.isRoot = false;
    this.metaKey = ''; // collapse

    this.activeNames = ['1', '2']; // seo

    this.seoId = '';
  }

  mounted() {
    this.onReload();
  }

  handleCreateKeyword(val) {
    this.existing.push(val);
    this.metaKeywords.push(val);
  }

  onReload() {
    this.$apollo.query({
      query: gql["Ib" /* GetOneCollectionDocument */],
      variables: {
        id: this.id
      }
    }).then(value => {
      this.name = value.data.collection.name;
      this.desc = value.data.collection.description;
      this.inMenu = value.data.collection.inMenu;
      this.metaUrl = value.data.collection.seo.urlKey;
      this.metaTitle = value.data.collection.seo.metatitle;
      this.metaDesc = value.data.collection.seo.metadesc;
      this.metaKeywords = value.data.collection.seo.metakeywords.map(item => ({
        text: item
      }));
      this.existing = value.data.collection.seo.metakeywords;
      this.seoId = value.data.collection.seo.id;
    });
  }

  onUpdate() {
    const load = this.$Message.loading('Action in progress..');
    this.$apollo.mutate({
      mutation: gql["Kc" /* UpdateCollectionDocument */],
      variables: {
        colId: this.id,
        seoID: this.seoId,
        name: this.name,
        inMenu: this.inMenu,
        desc: this.desc,
        urlKey: this.metaUrl,
        metatitle: this.metaTitle,
        metadesc: this.metaDesc,
        metakeywords: this.metaKeywords.map(item => item.text)
      }
    }).then(value => {
      load();
      this.$notify({
        title: 'Success',
        message: 'Collection Updated',
        type: 'success'
      });
    });
  }

  async getIdData() {
    this.onReload();
  }

};

__decorate([Object(external_vue_property_decorator_["Prop"])()], collection_editvue_type_script_lang_ts_CollectionEdit.prototype, "id", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('id')], collection_editvue_type_script_lang_ts_CollectionEdit.prototype, "getIdData", null);

collection_editvue_type_script_lang_ts_CollectionEdit = __decorate([external_vue_property_decorator_["Component"]], collection_editvue_type_script_lang_ts_CollectionEdit);
/* harmony default export */ var collection_editvue_type_script_lang_ts_ = (collection_editvue_type_script_lang_ts_CollectionEdit);
// CONCATENATED MODULE: ./components/collections/collection-edit.vue?vue&type=script&lang=ts&
 /* harmony default export */ var collections_collection_editvue_type_script_lang_ts_ = (collection_editvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/collections/collection-edit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(365)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  collections_collection_editvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cda896bc"
  
)

/* harmony default export */ var collection_edit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-tags-input{border:.3px solid #dcdfe6;border-radius:4px;width:100%}.ant-collapse>.ant-collapse-item>.ant-collapse-header{background-color:#8950fc;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(307);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-tree-node{flex:1;display:flex;align-items:center;justify-content:space-between;font-size:14px;padding-right:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/catalog/collections/index.vue?vue&type=template&id=33718de7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Collections</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\"><div class=\"ml-5\"><div class=\"input-group input-group-sm input-group-solid\" style=\"max-width: 175px\"><input type=\"text\" id=\"kt_subheader_search_form\" placeholder=\"Search...\" class=\"form-control\"> <div class=\"input-group-append\"><i class=\"fas fa-search\"></i></div></div></div></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a> <a href=\"javascript:;\" class=\"btn btn-light-primary font-weight-bold ml-2\">\n              Add Root-Collection\n            </a></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-4\">","</div>",[_vm._ssrNode("<div class=\"card card-custom gutter-b\">","</div>",[_vm._ssrNode("<div class=\"card-header border-0 py-5\""+(_vm._ssrStyle(null,{'background-color': _vm.theme.colors.theme.base.primary}, null))+"><h3 class=\"card-title align-items-start flex-column\"><span class=\"card-label font-weight-bolder text-white\">All Collections</span></h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode(((_vm.selected !== null)?("<div class=\"mb-3\"><div class=\"text-muted\">Collection Options:</div> <div class=\"d-flex justify-content-between align-items-center\"><a href=\"javascript:;\" class=\"btn btn-sm btn-light-primary font-weight-bold mr-2\">Add</a> <a href=\"javascript:;\" class=\"btn btn-sm btn-light-danger font-weight-bold mr-2\">Delete</a></div></div>"):"<!---->")+" "+((_vm.$apollo.queries.GetCollectionTree.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),_c('a-tree',{attrs:{"tree-data":_vm.allCollections,"defaultExpandAll":"","showLine":"","switcherIcon":""},on:{"select":_vm.onUpdateCollection}})],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-8\">","</div>",[(_vm.selected)?_c('collection-edit',{attrs:{"id":_vm.selected}}):_vm._e()],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/catalog/collections/index.vue?vue&type=template&id=33718de7&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: external "vue2-perfect-scrollbar"
var external_vue2_perfect_scrollbar_ = __webpack_require__(14);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// EXTERNAL MODULE: ./components/collections/collection-edit.vue + 4 modules
var collection_edit = __webpack_require__(340);

// EXTERNAL MODULE: ./utils/theme.settings.ts
var theme_settings = __webpack_require__(250);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/catalog/collections/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let collectionsvue_type_script_lang_ts_Index = class Index extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.allData = [];
    this.allCollections = [];
    this.selected = null;
    this.expanded = [];
    this.theme = theme_settings["a" /* GridironViewSettings */];
  }

  onClickCreateNewRootCollection() {
    this.$router.push('/app/catalog/collections/createnewcollection');
  }

  onClickSubCollection() {
    this.$router.push(`/app/catalog/collections/createnewcollection/${this.selected}`);
  }

  onClickNode(id) {
    console.log(id);
    this.selected = id;
  }

  mounted() {}

  onUpdateCollection(keys) {
    this.selected = keys[0];
  }

  onChangeData() {
    console.log(this.GetCollectionTree);
    let onechindren = [];

    for (let vls of this.GetCollectionTree) {
      let twochildren = [];
      twochildren = this.onNodeEnter(vls);
      /*if (vls.children.length > 0) {
          for (let second of vls.children) {
              let thirdchild: any[] = [];
              if (second.children.length > 0) {
                  for (let third of second.children) {
                      let thnode = {
                          key: third.id,
                          title: third.name,
                          menu: third.inMenu,
                          add: false,
                          edit: true
                      };
                      thirdchild.push(thnode);
                  }
              }
              let twonode = {
                  key: second.id,
                  title: second.name,
                  menu: second.inMenu,
                  add: true,
                  edit: true,
                  children: thirdchild
              };
              twochildren.push(twonode);
          }
      }*/

      let onNode = {
        key: vls.id,
        title: vls.name,
        menu: vls.inMenu,
        add: true,
        edit: true,
        children: twochildren
      };
      onechindren.push(onNode);
    }

    console.log(onechindren);
    this.allCollections = onechindren;
  }

  onNodeEnter(nsitem) {
    let childMod = [];

    if (nsitem.children && nsitem.children.length > 0) {
      for (const csitem of nsitem.children) {
        let asitem = [];
        asitem = this.onNodeEnter(csitem);
        childMod.push({
          key: csitem.id,
          title: csitem.name,
          menu: csitem.inMenu,
          add: false,
          edit: true,
          children: asitem
        });
      }
    }

    return childMod;
  }

};

__decorate([Object(external_vue_property_decorator_["Watch"])('GetCollectionTree')], collectionsvue_type_script_lang_ts_Index.prototype, "onChangeData", null);

collectionsvue_type_script_lang_ts_Index = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  components: {
    CollectionEdit: collection_edit["default"],
    PerfectScrollbar: external_vue2_perfect_scrollbar_["PerfectScrollbar"]
  },
  apollo: {
    GetCollectionTree: {
      query: gql["oc" /* GetallcollectionDocument */],
      pollInterval: 4000
    }
  }
})], collectionsvue_type_script_lang_ts_Index);
/* harmony default export */ var collectionsvue_type_script_lang_ts_ = (collectionsvue_type_script_lang_ts_Index);
// CONCATENATED MODULE: ./pages/app/catalog/collections/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var catalog_collectionsvue_type_script_lang_ts_ = (collectionsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/catalog/collections/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(367)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  catalog_collectionsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cf361146"
  
)

/* harmony default export */ var collections = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CollectionEdit: __webpack_require__(340).default})


/***/ })

};;
//# sourceMappingURL=index.js.map