exports.ids = [22];
exports.modules = {

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/customers-menu/allcustomers/_id/reset.vue?vue&type=template&id=5a19517f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"card card-custom mt-5 mb-5\"><div class=\"card-header py-3\"><div class=\"card-title align-items-start flex-column\"><h3 class=\"card-label font-weight-bolder text-dark\">Delivery Control</h3></div> <div class=\"card-toolbar\"></div></div> <div class=\"form\"><div class=\"card-body\"><div class=\"row\"><label class=\"col-xl-3\"></label> <div class=\"col-lg-9 col-xl-6\">"+((_vm.user.delivery === null)?("<button type=\"reset\" class=\"btn btn-success mr-2\">Set User as Delivery Guy</button>"):"<!---->")+" "+((_vm.user.delivery)?("<button type=\"reset\" class=\"btn btn-danger mr-2\">Remove User as Delivery Guy</button>"):"<!---->")+"</div></div></div></div></div> <div class=\"card card-custom mt-5 mb-5\"><div class=\"card-header py-3\"><div class=\"card-title align-items-start flex-column\"><h3 class=\"card-label font-weight-bolder text-dark\">Reset Password</h3></div> <div class=\"card-toolbar\"></div></div> <div class=\"form\"><div class=\"card-body\"><div class=\"row\"><label class=\"col-xl-3\"></label> <div class=\"col-lg-9 col-xl-6\"><button type=\"reset\" class=\"btn btn-success mr-2\">Send Reset Password Email</button></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/customers-menu/allcustomers/_id/reset.vue?vue&type=template&id=5a19517f&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/customers-menu/allcustomers/_id/reset.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let resetvue_type_script_lang_ts_Reset = class Reset extends external_vue_property_decorator_["Vue"] {
  onChangeUser() {
    console.log(this.user);
  }

  onSetDeliveryGuy() {
    this.$Message.loading('Action in progress ...');
    this.$apollo.mutate({
      mutation: gql["Cc" /* SetNewDeliveryGuyDocument */],
      variables: {
        userId: this.$route.params.id
      }
    }).then(value => {
      this.$Message.success('Delivery Guy Set');
    }).catch(error => {
      this.$Message.error(error.message);
    });
  }

};

__decorate([Object(external_vue_property_decorator_["Watch"])('user')], resetvue_type_script_lang_ts_Reset.prototype, "onChangeUser", null);

resetvue_type_script_lang_ts_Reset = __decorate([Object(external_vue_property_decorator_["Component"])({
  apollo: {
    user: {
      query: gql["hc" /* GetUserInfoDocument */],

      variables() {
        return {
          id: this.$route.params.id
        };
      },

      pollInterval: 3000
    }
  }
})], resetvue_type_script_lang_ts_Reset);
/* harmony default export */ var resetvue_type_script_lang_ts_ = (resetvue_type_script_lang_ts_Reset);
// CONCATENATED MODULE: ./pages/app/customers-menu/allcustomers/_id/reset.vue?vue&type=script&lang=ts&
 /* harmony default export */ var _id_resetvue_type_script_lang_ts_ = (resetvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/customers-menu/allcustomers/_id/reset.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_resetvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "598d3672"
  
)

/* harmony default export */ var _id_reset = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reset.js.map