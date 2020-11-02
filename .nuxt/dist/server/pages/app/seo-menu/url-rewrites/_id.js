exports.ids = [40];
exports.modules = {

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/seo-menu/url-rewrites/_id.vue?vue&type=template&id=00c0761d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">"+_vm._ssrEscape("SEO: "+_vm._s(_vm.metaTitle))+"</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\"></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "),_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.seo.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),(!_vm.$apollo.queries.seo.loading)?_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta URL</label> "),_c('a-input',{attrs:{"size":"large","disabled":true},model:{value:(_vm.metaUrl),callback:function ($$v) {_vm.metaUrl=$$v},expression:"metaUrl"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta Title</label> "),_c('a-input',{attrs:{"size":"large"},model:{value:(_vm.metaTitle),callback:function ($$v) {_vm.metaTitle=$$v},expression:"metaTitle"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta Keywords</label> "),_c('vue-tags-input',{attrs:{"tags":_vm.metaKeywords,"placeholder":"Enter keywords"},on:{"tags-changed":function (newTags) { return _vm.metaKeywords = newTags; }},model:{value:(_vm.metaKey),callback:function ($$v) {_vm.metaKey=$$v},expression:"metaKey"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Enter Meta Description</label> "),_c('a-input',{attrs:{"size":"large","type":"textarea"},model:{value:(_vm.metaDesc),callback:function ($$v) {_vm.metaDesc=$$v},expression:"metaDesc"}}),_vm._ssrNode(" <small class=\"form-text text-muted\">"+_vm._ssrEscape(_vm._s(_vm.$t('store.storenameinfo')))+"</small>")],2),_vm._ssrNode(" <div><button type=\"button\" class=\"btn btn-light-primary\">Update</button></div>")],2):_vm._e()],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/seo-menu/url-rewrites/_id.vue?vue&type=template&id=00c0761d&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/seo-menu/url-rewrites/_id.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let _idvue_type_script_lang_ts_SeoSingle = class SeoSingle extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.metaUrl = '';
    this.metaTitle = '';
    this.metaDesc = '';
    this.metaKeywords = [];
    this.metaKey = '';
  }

  onChanGeSo() {
    console.log(this.seo);
    this.metaUrl = this.seo.urlKey;
    this.metaTitle = this.seo.metatitle;
    this.metaDesc = this.seo.metadesc;
    this.metaKeywords = this.seo.metakeywords.map(item => ({
      text: item
    }));
  }

  onUpdateSeo() {
    this.$apollo.mutate({
      mutation: gql["Nc" /* UpdateOneSeoDocument */],
      variables: {
        id: this.$route.params.id,
        metatitle: this.metaTitle,
        metakeywords: this.metaKeywords.map(item => item.text),
        metadesc: this.metaDesc
      }
    }).then(value => {
      this.$Message.success('Seo Updated');
    }).catch(error => {
      this.$Message.error(error.message);
    });
  }

};

__decorate([Object(external_vue_property_decorator_["Watch"])('seo')], _idvue_type_script_lang_ts_SeoSingle.prototype, "onChanGeSo", null);

_idvue_type_script_lang_ts_SeoSingle = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  apollo: {
    seo: {
      query: gql["Kb" /* GetOneSeoDocument */],

      variables() {
        return {
          id: this.$route.params.id
        };
      },

      fetchPolicy: 'network-only'
    }
  }
})], _idvue_type_script_lang_ts_SeoSingle);
/* harmony default export */ var _idvue_type_script_lang_ts_ = (_idvue_type_script_lang_ts_SeoSingle);
// CONCATENATED MODULE: ./pages/app/seo-menu/url-rewrites/_id.vue?vue&type=script&lang=ts&
 /* harmony default export */ var url_rewrites_idvue_type_script_lang_ts_ = (_idvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/seo-menu/url-rewrites/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  url_rewrites_idvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "404addeb"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map