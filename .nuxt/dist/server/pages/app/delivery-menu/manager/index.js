exports.ids = [28];
exports.modules = {

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/delivery-menu/manager/index.vue?vue&type=template&id=56f7d57a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\"><div class=\" container-fluid \"><div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">Delivery Manager</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\"><span id=\"kt_subheader_total\" class=\"text-dark-50 font-weight-bold\"></span></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "+((_vm.GetDeliveryStrandedCount)?("<div><div"+(_vm._ssrClass("card card-custom card-stretch gutter-b",{'bg-light-success': _vm.count < 40, 'bg-light-warning': (_vm.count > 40 && _vm.count < 80), 'bg-light-danger': _vm.count > 80}))+"><div class=\"card-body my-3\"><a href=\"#\" class=\"card-title font-weight-bolder text-primary text-hover-state-dark font-size-h6 mb-4 d-block\">Stranded Order Load</a> <div class=\"font-weight-bold text-muted font-size-sm\"><span class=\"text-dark-75 font-size-h2 font-weight-bolder mr-2\">"+_vm._ssrEscape(_vm._s(_vm.count))+"</span> "+((_vm.count < 40)?("<span class=\"text-success\">Low</span>"):"<!---->")+" "+((_vm.count > 40 && _vm.count < 80)?("<span class=\"text-warning\">Normal</span>"):"<!---->")+" "+((_vm.count > 80)?("<span class=\"text-danger\">Heavy</span>"):"<!---->")+"</div> <div class=\"progress progress-xs mt-7 bg-success-o-60\"><div role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\""+(_vm._ssrClass("progress-bar",{'bg-success': _vm.count < 40, 'bg-warning': (_vm.count > 40 && _vm.count < 80), 'bg-danger': _vm.count > 80}))+(_vm._ssrStyle(null,{width: (_vm.count + "%")}, null))+"></div></div></div></div></div>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/delivery-menu/manager/index.vue?vue&type=template&id=56f7d57a&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/delivery-menu/manager/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let managervue_type_script_lang_ts_Manager = class Manager extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.count = 0;
  }

  onCheckDelivery() {
    if (this.GetDeliveryStrandedCount) {
      this.count = this.GetDeliveryStrandedCount.count;
    }
  }

};

__decorate([Object(external_vue_property_decorator_["Watch"])('GetDeliveryStrandedCount')], managervue_type_script_lang_ts_Manager.prototype, "onCheckDelivery", null);

managervue_type_script_lang_ts_Manager = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  apollo: {
    GetDeliveryStrandedCount: {
      query: gql["Bb" /* GetDeliveryStrandedCountDocument */]
    }
  }
})], managervue_type_script_lang_ts_Manager);
/* harmony default export */ var managervue_type_script_lang_ts_ = (managervue_type_script_lang_ts_Manager);
// CONCATENATED MODULE: ./pages/app/delivery-menu/manager/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var delivery_menu_managervue_type_script_lang_ts_ = (managervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/delivery-menu/manager/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  delivery_menu_managervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c88bd74"
  
)

/* harmony default export */ var manager = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map