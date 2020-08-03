<template>
    <div class="air__layout__header">
        <div class="air__utils__header">
            <div class="air__topbar d-flex justify-content-between">
                <div class="air__topbar__searchDropdown dropdown mr-md-4 mr-auto">
                    <div class="air__topbar__search dropdown-toggle" data-toggle="dropdown" data-offset="5,15">
                        <div class="air__topbar__searchContainer">
                            <i class="air__topbar__searchIcon fe fe-search"></i>
                            <input
                                    class="air__topbar__searchInput"
                                    type="text"
                                    placeholder="Start typing to search..."
                            />
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center" v-if="loaded">
                    <p class="mb-0 mr-4 d-xl-block d-none">
                        Store
                        <span class="ml-1 badge bg-danger text-white font-size-12 text-uppercase air__topbar__status">{{store.storeName}}</span>
                    </p>
                    <div class="dropdown">
                        <a
                                href=""
                                class="dropdown-toggle text-nowrap"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                data-offset="5,15"
                        >
                            <img
                                    class="dropdown-toggle-avatar"
                                    src="/components/core/img/avatars/avatar-2.png"
                                    alt="User avatar"
                            />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" role="menu">
                            <a class="dropdown-item" href="javascript:void(0)">
                                <i class="dropdown-icon fe fe-user"></i>
                                Profile
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:void(0)" @click="onLogout">
                                <i class="dropdown-icon fe fe-log-out"></i> Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
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
        }
    })
    export default class Header extends Vue {
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
            this.$apollo.mutate<{createOneStore: Store}, CreateOneStoreMutationVariables>({
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
                this.$apollo.mutate<{setCountryOnStore: Country}, SetCountryOnStoreMutationVariables>({
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
