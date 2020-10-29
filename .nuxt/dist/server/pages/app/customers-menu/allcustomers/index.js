exports.ids = [23];
exports.modules = {

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/customers-menu/allcustomers/index.vue?vue&type=template&id=2b4823ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-column-fluid\">","</div>",[_vm._ssrNode("<div class=\" container-fluid \">","</div>",[_vm._ssrNode("<div id=\"kt_subheader\" class=\"subheader py-2 py-lg-4  subheader-transparent \"><div class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100\"><div class=\"d-flex align-items-center flex-wrap mr-2\"><h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">All Customers</h5> <div class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"></div> <div id=\"kt_subheader_search\" class=\"d-flex align-items-center\">"+((!_vm.$apollo.queries.userAggregate.loading)?("<span id=\"kt_subheader_total\" class=\"text-dark-50 font-weight-bold\">"+_vm._ssrEscape(_vm._s(_vm.userAggregate.count.id)+" Total")+"</span>"):"<!---->")+" <div class=\"ml-5\"><div class=\"input-group input-group-sm input-group-solid\" style=\"max-width: 175px\"><input type=\"text\" id=\"kt_subheader_search_form\" placeholder=\"Search...\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"form-control\"> <div class=\"input-group-append\"><i class=\"fas fa-search\"></i></div></div></div></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\"></a></div></div></div> "),_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode(((_vm.$apollo.queries.users.loading)?("<div class=\"d-flex justify-content-center align-items-center m-20 w-100\"><div class=\"spinner spinner-primary spinner-lg mr-15\"></div></div>"):"<!---->")+" "),(!_vm.$apollo.queries.users.loading)?_c('ag-grid-vue',{ref:"agGridTable",staticClass:"ag-theme-material ag-grid-table",staticStyle:{"height":"100vh"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.columnDefs,"defaultColDef":_vm.defaultColDef,"rowData":_vm.users,"colResizeDefault":"shift","animateRows":true,"floatingFilter":true,"pagination":true,"suppressPaginationPanel":true,"enableRtl":false},on:{"grid-ready":_vm.onGridReady}}):_vm._e()],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/customers-menu/allcustomers/index.vue?vue&type=template&id=2b4823ce&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(3);

// EXTERNAL MODULE: ./gql/index.ts
var gql = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/users/userActions.vue?vue&type=template&id=11b96bb2&
var userActionsvue_type_template_id_11b96bb2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<a href=\"javascript:;\" class=\"btn btn-sm btn-light-primary font-weight-bold mr-2\">Edit / View</a> <a href=\"javascript:;\" class=\"btn btn-sm btn-light-danger font-weight-bold mr-2\">Block</a>")])}
var userActionsvue_type_template_id_11b96bb2_staticRenderFns = []


// CONCATENATED MODULE: ./components/users/userActions.vue?vue&type=template&id=11b96bb2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/users/userActions.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let userActionsvue_type_script_lang_ts_UserActions = class UserActions extends external_vue_property_decorator_["Vue"] {
  onClickEdit() {
    this.$router.push(`/app/customers-menu/allcustomers/${this.params.data.id}`);
  }

};
userActionsvue_type_script_lang_ts_UserActions = __decorate([external_vue_property_decorator_["Component"]], userActionsvue_type_script_lang_ts_UserActions);
/* harmony default export */ var userActionsvue_type_script_lang_ts_ = (userActionsvue_type_script_lang_ts_UserActions);
// CONCATENATED MODULE: ./components/users/userActions.vue?vue&type=script&lang=ts&
 /* harmony default export */ var users_userActionsvue_type_script_lang_ts_ = (userActionsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/users/userActions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_userActionsvue_type_script_lang_ts_,
  userActionsvue_type_template_id_11b96bb2_render,
  userActionsvue_type_template_id_11b96bb2_staticRenderFns,
  false,
  null,
  null,
  "0a6b762e"
  
)

/* harmony default export */ var userActions = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/customers-menu/allcustomers/index.vue?vue&type=script&lang=ts&
var allcustomersvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let allcustomersvue_type_script_lang_ts_AllCustomers = class AllCustomers extends external_vue_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.search = '';
    this.limit = 50;
    this.page = 1; //table

    this.gridOptions = {};
    this.gridApi = null;
    this.columnDefs = [{
      headerName: 'First Name',
      filter: false,
      field: 'firstName'
    }, {
      headerName: 'Last Name',
      filter: false,
      field: 'lastName'
    }, {
      headerName: 'Actions',
      cellRendererFramework: 'UserActions'
    }];
    this.defaultColDef = {
      sortable: true,
      editable: false,
      resizable: true,
      suppressMenu: true
    };
  }

  onChangUsers() {
    console.log(this.users);
  }

  onGridReady() {
    this.gridApi = this.gridOptions.api;
    this.gridApi.sizeColumnsToFit();
  }

};

allcustomersvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('users')], allcustomersvue_type_script_lang_ts_AllCustomers.prototype, "onChangUsers", null);

allcustomersvue_type_script_lang_ts_AllCustomers = allcustomersvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    UserActions: userActions
  },
  layout: 'console',
  apollo: {
    users: {
      query: gql["mb" /* GetAllUsersDocument */],

      variables() {
        return {
          limit: this.limit,
          iLike: `%${this.search}%`,
          offset: (this.page - 1) * this.limit
        };
      }

    },
    userAggregate: {
      query: gql["ic" /* GetUsersAggregateDocument */],

      variables() {
        return {
          iLike: `%${this.search}%`
        };
      }

    }
  }
})], allcustomersvue_type_script_lang_ts_AllCustomers);
/* harmony default export */ var allcustomersvue_type_script_lang_ts_ = (allcustomersvue_type_script_lang_ts_AllCustomers);
// CONCATENATED MODULE: ./pages/app/customers-menu/allcustomers/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var customers_menu_allcustomersvue_type_script_lang_ts_ = (allcustomersvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/app/customers-menu/allcustomers/index.vue





/* normalize component */

var allcustomers_component = Object(componentNormalizer["a" /* default */])(
  customers_menu_allcustomersvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "89abfaec"
  
)

/* harmony default export */ var allcustomers = __webpack_exports__["default"] = (allcustomers_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map