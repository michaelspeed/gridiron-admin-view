exports.ids = [34];
exports.modules = {

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/progress/progress-indicator.vue?vue&type=template&id=147273b7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column w-100 mr-2\">"+((_vm.header)?("<div class=\"d-flex align-items-center justify-content-between mb-2\"><span class=\"text-muted mr-2 font-size-sm font-weight-bold\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.percentage)+"%\n            ")+"</span> <span class=\"text-muted font-size-sm font-weight-bold\">\n                Progress\n            </span></div>"):"<!---->")+" "+((_vm.percentage <= 40)?("<div class=\"progress progress-xs w-100\"><div role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-danger\""+(_vm._ssrStyle(null,{'width': (_vm.percentage + "%")}, null))+"></div></div>"):"<!---->")+" "+((_vm.percentage > 40 && _vm.percentage <= 70)?("<div class=\"progress progress-xs w-100\"><div role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-warning\""+(_vm._ssrStyle(null,{'width': (_vm.percentage + "%")}, null))+"></div></div>"):"<!---->")+" "+((_vm.percentage > 70 && _vm.percentage <= 99)?("<div class=\"progress progress-xs w-100\"><div role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-success\""+(_vm._ssrStyle(null,{'width': (_vm.percentage + "%")}, null))+"></div></div>"):"<!---->")+" "+((_vm.percentage === 100)?("<div class=\"progress progress-xs w-100\"><div role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-primary\""+(_vm._ssrStyle(null,{'width': (_vm.percentage + "%")}, null))+"></div></div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/progress/progress-indicator.vue?vue&type=template&id=147273b7&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/progress/progress-indicator.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let progress_indicatorvue_type_script_lang_ts_ProgressIndicator = class ProgressIndicator extends external_vue_property_decorator_["Vue"] {};

__decorate([Object(external_vue_property_decorator_["Prop"])()], progress_indicatorvue_type_script_lang_ts_ProgressIndicator.prototype, "percentage", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], progress_indicatorvue_type_script_lang_ts_ProgressIndicator.prototype, "header", void 0);

progress_indicatorvue_type_script_lang_ts_ProgressIndicator = __decorate([external_vue_property_decorator_["Component"]], progress_indicatorvue_type_script_lang_ts_ProgressIndicator);
/* harmony default export */ var progress_indicatorvue_type_script_lang_ts_ = (progress_indicatorvue_type_script_lang_ts_ProgressIndicator);
// CONCATENATED MODULE: ./components/progress/progress-indicator.vue?vue&type=script&lang=ts&
 /* harmony default export */ var progress_progress_indicatorvue_type_script_lang_ts_ = (progress_indicatorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/progress/progress-indicator.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  progress_progress_indicatorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e9fc6458"
  
)

/* harmony default export */ var progress_indicator = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PricePromoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkOrderProgress; });
var OrderStageType;

(function (OrderStageType) {
  OrderStageType["CREATED"] = "CREATED";
  OrderStageType["PACKAGED"] = "PACKAGED";
  OrderStageType["PROCESSED"] = "PROCESSED";
  OrderStageType["SHIPPED"] = "SHIPPED";
  OrderStageType["DELIVERED"] = "DELIVERED";
  OrderStageType["RETURNINITIATED"] = "RETURNINITIATED";
  OrderStageType["RETURNED"] = "RETURNED";
  OrderStageType["RETURNEDREFUNDED"] = "RETURNEDREFUNDED";
})(OrderStageType || (OrderStageType = {}));

var PricePromoType;

(function (PricePromoType) {
  PricePromoType["FLAT"] = "FLAT";
  PricePromoType["PERCENTAGE"] = "PERCENTAGE";
})(PricePromoType || (PricePromoType = {}));

function checkOrderProgress(stage) {
  switch (stage) {
    case 'CREATED':
      {
        return 20;
      }
      break;

    case 'PACKAGED':
      {
        return 40;
      }
      break;

    case 'PROCESSED':
      {
        return 60;
      }
      break;

    case 'SHIPPED':
      {
        return 80;
      }
      break;

    case 'DELIVERED':
      {
        return 100;
      }
      break;

    case 'RETURNINITIATED':
      {
        return 30;
      }
      break;

    case 'RETURNED':
      {
        return 90;
      }
      break;

    case 'RETURNEDREFUNDED':
      {
        return 100;
      }
      break;

    default:
      {
        return 10;
      }
  }
}

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/sales-menu/orders/_id.vue?vue&type=template&id=70e2e984&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div class=\"d-flex flex-column-fluid mt-20\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div class=\"card card-custom overflow-hidden\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.order.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),(!_vm.$apollo.queries.order.loading)?_vm._ssrNode("<div class=\"card-body p-0\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-center bgi-size-cover bgi-no-repeat py-8 px-8 py-md-27 px-md-0\" style=\"background-image: url(/media/bg/bg-6.jpg);\"><div class=\"col-md-9\"><div class=\"d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row\"><h1 class=\"display-4 text-white font-weight-boldest mb-10\">Order</h1> <div class=\"d-flex flex-column align-items-md-end px-0\"><a href=\"#\" class=\"mb-5\"><h4 style=\"color: white\">"+_vm._ssrEscape(_vm._s(_vm.order.user.firstName)+" "+_vm._s(_vm.order.user.lastName))+"</h4></a></div></div> <div class=\"border-bottom w-100 opacity-20\"></div> <div class=\"d-flex justify-content-between text-white pt-6\"><div class=\"d-flex flex-column flex-root\"><span class=\"font-weight-bolde mb-2r\">DATE</span> <span class=\"opacity-70\">"+_vm._ssrEscape(_vm._s(_vm.getDate()))+"</span></div> <div class=\"d-flex flex-column flex-root\"><span class=\"font-weight-bolder mb-2\">ORDER NO.</span> <span class=\"opacity-70\">"+_vm._ssrEscape(_vm._s(_vm.order.id))+"</span></div> <div class=\"d-flex flex-column flex-root\"><span class=\"font-weight-bolder mb-2\">ORDER TO.</span> <span class=\"opacity-70\"><h4 class=\"font-weight-bolder\" style=\"color: white\">"+_vm._ssrEscape(_vm._s(_vm.order.user.firstName)+" "+_vm._s(_vm.order.user.lastName))+"</h4> <br> <p>"+_vm._ssrEscape(_vm._s(_vm.order.address))+"</p></span></div></div></div></div> "),_vm._ssrNode("<div class=\"row justify-content-center py-8 px-8 py-md-10 px-md-0\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"table-responsive\">","</div>",[_vm._ssrNode("<table class=\"table\">","</table>",[_vm._ssrNode("<thead><tr><th class=\"pl-0 font-weight-bold text-muted  text-uppercase\">Description</th> <th class=\"pl-0 font-weight-bold text-muted  text-uppercase\">Store</th> <th class=\"pl-0 font-weight-bold text-muted  text-uppercase\">Progress</th> <th class=\"text-right font-weight-bold text-muted text-uppercase\">Quantity</th> <th class=\"text-right font-weight-bold text-muted text-uppercase\">Rate</th> <th class=\"text-right pr-0 font-weight-bold text-muted text-uppercase\">Amount</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.order.lines),function(allvars){return _vm._ssrNode("<tr class=\"font-weight-boldest font-size-lg\">","</tr>",[_vm._ssrNode("<td class=\"pl-0 pt-7\">"+_vm._ssrEscape(_vm._s(allvars.item.productVariant.name))+"</td> "),_c('a-popover',{attrs:{"title":"Store Info"}},[_c('template',{slot:"content"},[_c('p',[_vm._v("Phone: "+_vm._s(allvars.priceField.store.phoneNumber))]),_vm._v(" "),_c('p',[_vm._v("Email: "+_vm._s(allvars.priceField.store.officialemail))])]),_vm._v(" "),_c('td',{staticClass:"pl-0 pt-7"},[_vm._v(_vm._s(allvars.priceField.store.storeName))])],2),_vm._ssrNode(" "),_vm._ssrNode("<td class=\"pl-0 pt-7\">","</td>",[_c('ProgressIndicator',{attrs:{"percentage":_vm.checkProgress(allvars.stage),"header":true}})],1),_vm._ssrNode(" <td class=\"text-right pt-7\">"+_vm._ssrEscape(_vm._s(allvars.item.quantity))+"</td> <td class=\"text-right pt-7\">"+_vm._ssrEscape("₹ "+_vm._s(allvars.priceField.price))+"</td> <td class=\"text-danger pr-0 pt-7 text-right\">"+_vm._ssrEscape("₹"+_vm._s(allvars.item.quantity * allvars.priceField.price)+" ")+"</td>")],2)}),0)],2)])])]),_vm._ssrNode(" <div class=\"row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0\"><div class=\"col-md-9\"><div class=\"d-flex justify-content-between flex-column flex-md-row font-size-lg\"><div class=\"d-flex flex-column mb-10 mb-md-0\"></div> <div class=\"d-flex flex-column text-md-right\"><span class=\"font-size-lg font-weight-bolder mb-1\">TOTAL AMOUNT</span> <span class=\"font-size-h2 font-weight-boldest text-danger mb-1\">"+_vm._ssrEscape("₹"+_vm._s(_vm.order.totalPrice))+"</span></div></div></div></div> <div class=\"row justify-content-center py-8 px-8 py-md-10 px-md-0\"><div class=\"col-md-9\"><div class=\"d-flex justify-content-between\"></div></div></div>")],2):_vm._e()],2)])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/sales-menu/orders/_id.vue?vue&type=template&id=70e2e984&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(42);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/progress/progress-indicator.vue + 4 modules
var progress_indicator = __webpack_require__(243);

// EXTERNAL MODULE: ./utils/OrderStageType.ts
var OrderStageType = __webpack_require__(283);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/sales-menu/orders/_id.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let _idvue_type_script_lang_ts_OrderSingle = class OrderSingle extends external_vue_property_decorator_["Vue"] {
  onChangeOrder() {
    console.log(this.order);
  }

  getDate() {
    return external_moment_default()(this.order.createdAt).format('DD MMM YYYY');
  }

  checkProgress(stage) {
    return Object(OrderStageType["c" /* checkOrderProgress */])(stage);
  }

};

__decorate([Object(external_vue_property_decorator_["Watch"])('order')], _idvue_type_script_lang_ts_OrderSingle.prototype, "onChangeOrder", null);

_idvue_type_script_lang_ts_OrderSingle = __decorate([Object(external_vue_property_decorator_["Component"])({
  layout: 'console',
  components: {
    ProgressIndicator: progress_indicator["default"]
  },
  apollo: {
    order: {
      query: gql["Lb" /* GetOrderByIdDocument */],

      variables() {
        return {
          id: this.$route.params.id
        };
      }

    }
  }
})], _idvue_type_script_lang_ts_OrderSingle);
/* harmony default export */ var _idvue_type_script_lang_ts_ = (_idvue_type_script_lang_ts_OrderSingle);
// CONCATENATED MODULE: ./pages/app/sales-menu/orders/_id.vue?vue&type=script&lang=ts&
 /* harmony default export */ var orders_idvue_type_script_lang_ts_ = (_idvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/app/sales-menu/orders/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_idvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d6aee7a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProgressIndicator: __webpack_require__(243).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map