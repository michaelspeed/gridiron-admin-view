<template>
  <div>
    <div id="kt_header" class="header  header-fixed ">
      <!--begin::Header Wrapper-->
      <div class="header-wrapper rounded-top-xl d-flex flex-grow-1 align-items-center">
        <!--begin::Container-->
        <div
          class=" container-fluid  d-flex align-items-center justify-content-end justify-content-lg-between flex-wrap">
          <!--begin::Menu Wrapper-->
          <div class="header-menu-wrapper header-menu-wrapper-left py-lg-2" id="kt_header_menu_wrapper">
            <!--begin::Menu-->
            <div id="kt_header_menu" class="header-menu header-menu-mobile  header-menu-layout-default ">
              <!--begin::Nav-->
              <ul class="menu-nav ">
                <li class="menu-item  menu-item-submenu menu-item-rel" aria-haspopup="true" v-for="(sumitem, index) of sub" :key="index" :class="{'menu-item-active': checkPathName(sumitem)}">
                  <a href="javascript:;" @click="$router.push(sumitem.to)" class="menu-link">
                    <span class="menu-text">{{$t(`${sumitem.label}`)}}</span>
                  </a>
                </li>
              </ul>
              <!--end::Nav-->
            </div>
            <!--end::Menu-->
          </div>
          <!--end::Menu Wrapper-->

          <!--begin::Toolbar-->
          <!--<div class="d-flex align-items-center py-3">
            &lt;!&ndash;begin::Dropdown&ndash;&gt;
            <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions"
                 data-placement="left">
              <a href="#" class="btn btn-dark font-weight-bold px-6" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">
                Create
              </a>
              <div class="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-md dropdown-menu-right">
                &lt;!&ndash;begin::Navigation&ndash;&gt;
                <ul class="navi navi-hover">
                  <li class="navi-header font-weight-bold py-4">
                    <span class="font-size-lg">Quick Creation Menu:</span>
                    <i class="flaticon2-information icon-md text-muted" data-toggle="tooltip"
                       data-placement="right" title="Click to learn more..."></i>
                  </li>
                  <li class="navi-separator mb-3 opacity-70"></li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
            <span class="navi-text">
                <span class="label label-xl label-inline label-light-success">Customer</span>
            </span>
                    </a>
                  </li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
            <span class="navi-text">
                <span class="label label-xl label-inline label-light-danger">Partner</span>
            </span>
                    </a>
                  </li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
            <span class="navi-text">
                <span class="label label-xl label-inline label-light-warning">Suplier</span>
            </span>
                    </a>
                  </li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
            <span class="navi-text">
                <span class="label label-xl label-inline label-light-primary">Member</span>
            </span>
                    </a>
                  </li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
            <span class="navi-text">
                <span class="label label-xl label-inline label-light-dark">Staff</span>
            </span>
                    </a>
                  </li>
                  <li class="navi-separator mt-3 opacity-70"></li>
                  <li class="navi-footer py-4">
                    <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                      <i class="ki ki-plus icon-sm"></i>
                      Add new
                    </a>
                  </li>
                </ul>
                &lt;!&ndash;end::Navigation&ndash;&gt;
              </div>
            </div>
            &lt;!&ndash;end::Dropdown&ndash;&gt;
          </div>-->
          <!--end::Toolbar-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Header Wrapper-->
    </div>
    <!--end::Main-->
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
  import {mapState} from 'vuex';
  import {
    Country, CreateOneStoreDocument, CreateOneStoreMutationVariables, GetAdministratorDataDocument,
    GetAllCountriesDocument, SetCountryOnStoreDocument, SetCountryOnStoreMutationVariables,
    Store,
    StoreTypeEnum
  } from '../../gql';

  @Component({
    computed: {
      ...mapState('admin', ['administrator']),
      ...mapState('store', ['store', 'loaded']),
    },
    head: {
      script: [
        { src: '/js/scripts.bundle.js?v=7.0.6', body: true, async: true },
      ]
    }
  })
  export default class Header extends Vue {
    @Prop() sub
    private store: Store | null
    private loaded: boolean
    private createstore: boolean = false
    private storename: string = ''
    private storenumber: string = ''
    private officialemail: string = ''
    private zipcode: string = ''
    private add1: string = ''
    private add2: string = ''
    private gstin: string = ''
    private country: string = ''
    private allCountry: Country[] = []

    // toolbar
    private collapse: boolean = false

    onClickCollapse() {
      this.collapse = !this.collapse
    }

    mounted() {
      this.$store.dispatch('admin/getAdministrator')
      this.$store.dispatch('store/getDefaultStore')
      this.$store.dispatch('vendor/getVendor')
      this.$apollo.query({
        query: GetAllCountriesDocument
      }).then(value => {
        this.allCountry = value.data!.GetAllCountries
      })
    }

    checkPathName(item) {
      if (this.$route.path.indexOf(item.to) !== -1) {
        return true
      } else {
        return false
      }
    }

    onLogout() {
      this.$apolloHelpers.onLogout().then(() => {
        this.$router.push({
          path: '/'
        })
      })
    }

    async onCreateStore() {
      const loading = this.$loading({
        lock: true,
        text: 'Creating Default Store',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$apollo.mutate<{ createOneStore: Store }, CreateOneStoreMutationVariables>({
        mutation: CreateOneStoreDocument,
        variables: {
          storeName: this.storename,
          phoneNumber: this.storenumber,
          officialemail: this.officialemail,
          type: StoreTypeEnum.Default,
          GSTIN: this.gstin,
          streetAddress1: this.add1,
          streetAddress2: this.add2,
          zipcode: this.zipcode,
        }
      }).then(value => {
        this.$apollo.mutate<{ setCountryOnStore: Country }, SetCountryOnStoreMutationVariables>({
          mutation: SetCountryOnStoreDocument,
          variables: {
            countryId: this.country,
            storeId: value!.data!.createOneStore!.id
          }
        }).then(value1 => {
          this.createstore = false
          loading.close()
        }).catch(error => {
          this.$notify({
            title: 'Error',
            message: error.message,
            type: 'error'
          })
        })
      }).catch(error => {
        console.log(error)
        this.$notify({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      })
    }

    @Watch('loaded')
    setOpenStore() {
      console.log(this.store)
    }
  }
</script>
