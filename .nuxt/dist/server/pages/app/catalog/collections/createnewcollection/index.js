exports.ids = [4];
exports.modules = {

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlugLoader; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);


function SlugLoader(text) {
  const thisSlug = slugify__WEBPACK_IMPORTED_MODULE_0___default()(text, {
    lower: true,
    strict: true
  }) + '-' + uniqid__WEBPACK_IMPORTED_MODULE_1___default()();
  return thisSlug;
}

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/catalog/collections/createnewcollection/index.vue?vue&type=template&id=ec40beca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Create New Root Collection</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "),_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Collection Name</label> "),_c('a-input',{model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-between\">","</div>",[_vm._ssrNode("<label>Include In Menu</label> "),_c('a-switch',{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:(_vm.inMenu),callback:function ($$v) {_vm.inMenu=$$v},expression:"inMenu"}})],2),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Collection Title Description</label> "),_c('a-input',{attrs:{"type":"textarea"},model:{value:(_vm.desc),callback:function ($$v) {_vm.desc=$$v},expression:"desc"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" <div style=\"margin-bottom: 10px\"><h6 class=\"text-secondary\">SEO</h6></div> <hr style=\"margin-bottom: 10px\"> "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta URL</label> "),_c('a-input',{attrs:{"disabled":true},model:{value:(_vm.metaUrl),callback:function ($$v) {_vm.metaUrl=$$v},expression:"metaUrl"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta Title</label> "),_c('a-input',{model:{value:(_vm.metaTitle),callback:function ($$v) {_vm.metaTitle=$$v},expression:"metaTitle"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta Keywords</label> "),_c('vue-tags-input',{attrs:{"tags":_vm.metaKeywords,"placeholder":"Enter keywords"},on:{"tags-changed":function (newTags) { return _vm.metaKeywords = newTags; }},model:{value:(_vm.metaKey),callback:function ($$v) {_vm.metaKey=$$v},expression:"metaKey"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta Description</label> "),_c('a-input',{attrs:{"type":"textarea"},model:{value:(_vm.metaDesc),callback:function ($$v) {_vm.metaDesc=$$v},expression:"metaDesc"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" <div><button type=\"button\""+(_vm._ssrClass("btn btn-light-primary",{'spinner spinner-darker-primary spinner-left mr-3': _vm.loading}))+">Create Collection</button> <button type=\"button\" class=\"btn btn-light-danger\">Cancel</button></div>")],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/catalog/collections/createnewcollection/index.vue?vue&type=template&id=ec40beca&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// EXTERNAL MODULE: ./utils/slugLoader.ts
var slugLoader = __webpack_require__(291);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/catalog/collections/createnewcollection/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let createnewcollectionvue_type_script_lang_ts_CreateNewCollection = class CreateNewCollection extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.loading = false; // new root

    this.name = '';
    this.desc = '';
    this.inMenu = true;
    this.isPrivate = true;
    this.metaUrl = '';
    this.metaTitle = '';
    this.metaDesc = '';
    this.metaKeywords = [];
    this.existing = [];
    this.isRoot = true;
    this.metaKey = '';
  }

  handleCreateKeyword(val) {
    this.existing.push(val);
    this.metaKeywords.push(val);
  }

  onChangeName() {
    this.metaUrl = Object(slugLoader["a" /* SlugLoader */])(this.name);
  }

  onGoBack() {
    this.$router.back();
  }

  onCreatCollection() {
    this.loading = true;
    const load = this.$message.loading('Creating Collection..');
    this.$apollo.mutate({
      mutation: gql["o" /* CreateOneCollectionDocument */],
      variables: {
        isRoot: this.isRoot,
        name: this.name,
        desc: this.desc
      }
    }).then(value => {
      this.$apollo.mutate({
        mutation: gql["s" /* CreateOneSeoDocument */],
        variables: {
          urlKey: this.metaUrl,
          metatitle: this.metaTitle,
          metakeywords: this.metaKeywords.map(item => item.text),
          metadesc: this.metaDesc
        }
      }).then(value1 => {
        this.$apollo.mutate({
          mutation: gql["Ec" /* SetSeoOnCollectionDocument */],
          variables: {
            id: value.data.createOneCollection.id,
            relationId: value1.data.createOneSeo.id
          }
        }).then(value2 => {
          this.loading = false;
          load();
          this.$router.back();
        }).catch(error => {
          load();
          this.loading = false;
          this.$Message.error(error.message);
        });
      }).catch(error => {
        load();
        this.loading = false;
        this.$Message.error(error.message);
      });
    });
  }

};

__decorate([Object(external_vue_property_decorator_["Watch"])('name')], createnewcollectionvue_type_script_lang_ts_CreateNewCollection.prototype, "onChangeName", null);

createnewcollectionvue_type_script_lang_ts_CreateNewCollection = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console'
})], createnewcollectionvue_type_script_lang_ts_CreateNewCollection);
/* harmony default export */ var createnewcollectionvue_type_script_lang_ts_ = (createnewcollectionvue_type_script_lang_ts_CreateNewCollection);
// CONCATENATED MODULE: ./pages/app/catalog/collections/createnewcollection/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var collections_createnewcollectionvue_type_script_lang_ts_ = (createnewcollectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/catalog/collections/createnewcollection/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  collections_createnewcollectionvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7a75e2d0"
  
)

/* harmony default export */ var createnewcollection = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map