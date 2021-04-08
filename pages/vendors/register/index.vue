<template>
    <v-app>
        <div class="d-flex flex-column flex-root">
            <!--begin::Login-->
            <div class="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid wizard" id="kt_login">
                <!--begin::Content-->
                <div
                    class="login-container d-flex flex-center flex-row flex-row-fluid order-2 order-lg-1 flex-row-fluid bg-primary py-lg-0 pb-lg-0 pt-15 pb-12">
                    <!--begin::Container-->
                    <div class="login-content login-content-signup">
                        <!--begin::Aside Top-->
                        <div class="d-flex flex-column-auto flex-column px-10">
                            <!--begin::Aside header-->
                            <a href="#" class="login-logo mb-3">
                                <img src="/images/airecommerce.png" class="max-h-100px" alt="" v-if="!GetDefaultStore"/>
                                <img :src="`${images}/${GetDefaultStore.logo.preview}`" class="max-h-100px" alt="" v-if="GetDefaultStore && GetDefaultStore.logo"/>
                                <h1 class="text-white" v-if="!GetDefaultStore">Sign In To Admin</h1>
                                <h1 class="text-white" v-if="GetDefaultStore">Sign In To {{GetDefaultStore.storeName}}</h1>
                            </a>
                            <div class="text-white font-weight-bold font-size-h4" style="margin-top: -10px; margin-bottom: 10px">
                                Already have an Account ?
                                <a href="/" class="text-success font-weight-bolder">Sign In</a>
                            </div>
                            <!--end::Aside header-->

                            <v-stepper v-model="stepper" style="width: 100%">
                                <v-stepper-step :complete="stepper > 1" step="1">
                                    <h4 class="font-weight-bolder">
                                        Registration Info
                                    </h4>
                                </v-stepper-step>
                                <v-stepper-content step="1">
                                    <div style="padding: 20px">
                                        <div class="form-group">
                                            <label class="font-size-h6 font-weight-bolder text-dark">Email</label>
                                            <input type="text"
                                                   class="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                                   name="email" placeholder="Email" value="" v-model="email"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="font-size-h6 font-weight-bolder text-dark">Password</label>
                                            <input type="password"
                                                   class="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                                   name="password" placeholder="Password" value="" v-model="password"/>
                                        </div>
                                        <div>
                                            <button @click="onStepOne"
                                                    class="btn btn-light-primary font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3">
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </v-stepper-content>
                                <v-stepper-step :complete="stepper > 2" step="2">
                                    <h4 class="font-weight-bolder">
                                        Basic Info
                                    </h4>
                                </v-stepper-step>
                                <v-stepper-content step="2">
                                    <div style="padding: 20px">
                                        <div class="form-group">
                                            <label class="font-size-h6 font-weight-bolder text-dark">First Name</label>
                                            <input type="text"
                                                   class="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                                   name="fname" placeholder="First Name" value="" v-model="fname"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="font-size-h6 font-weight-bolder text-dark">Last Name</label>
                                            <input type="text"
                                                   class="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                                   name="lname" placeholder="Last Name" value="" v-model="lname"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="font-size-h6 font-weight-bolder text-dark">Phone
                                                Number</label>
                                            <input type="text"
                                                   class="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                                   name="phone" placeholder="Phone Number" value="" v-model="phone"/>
                                        </div>
                                        <div>
                                            <button @click="onStepTwo"
                                                    class="btn btn-light-primary font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3">
                                                Continue
                                            </button>
                                            <button @click="stepper = 1"
                                                    class="btn btn-light-danger font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3">
                                                Previous
                                            </button>
                                        </div>
                                    </div>
                                </v-stepper-content>
                                <v-stepper-step :complete="stepper > 3" step="3">
                                    <h4 class="font-weight-bolder">
                                        Store Info
                                    </h4>
                                </v-stepper-step>
                                <v-stepper-content step="3">
                                    <div style="padding: 20px">
                                        <div class="form-group justify-content-start">
                                            <label>Store Name</label>
                                            <input class="form-control" placeholder="Store Name" v-model="sname"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Official Phone Number</label>
                                            <input class="form-control" placeholder="Official Phone Number"
                                                   v-model="sphone"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Official Email Address</label>
                                            <input type="email" class="form-control"
                                                   placeholder="Official Email Address" v-model="semail"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Address Line 1</label>
                                            <input class="form-control" placeholder="Address Line 1"
                                                   v-model="saddress"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Address Line 2</label>
                                            <input class="form-control" placeholder="Address Line 2"
                                                   v-model="saddress2"/>
                                        </div>
                                        <div class="form-group">
                                            <label>ZipCode</label>
                                            <input class="form-control" placeholder="Zipcode" v-model="zipcode"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Region</label>
                                            <v-select filled v-model="region" :items="allZones" item-value="id"
                                                      item-text="name"></v-select>
                                        </div>
                                        <div>
                                            <button @click="onStepThree"
                                                    class="btn btn-light-primary font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3">
                                                Continue
                                            </button>
                                            <button @click="stepper = 2"
                                                    class="btn btn-light-danger font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3">
                                                Previous
                                            </button>
                                        </div>
                                    </div>
                                </v-stepper-content>
                                <v-stepper-step :complete="stepper > 4" step="4">
                                    <h4 class="font-weight-bolder">
                                        Plans
                                    </h4>
                                </v-stepper-step>
                                <v-stepper-content step="4">
                                    <div class="d-flex flex-column-fluid">
                                        <!--begin::Container-->
                                        <div class=" container-fluid ">
                                            <!--begin::Card-->
                                            <div class="card">
                                                <!-- begin: custom background-->
                                                <div class="position-absolute w-100 h-50 rounded-card-top"
                                                     style="background-color: #22B9FF"></div>
                                                <!-- end: custom background-->

                                                <div class="card-body position-relative">

                                                    <v-card style="width: 100%;">
                                                        <v-toolbar
                                                            color="primary"
                                                            dark
                                                        >
                                                            <v-app-bar-nav-icon></v-app-bar-nav-icon>

                                                            <v-toolbar-title>Transparent
                                                                &amp; Simple Pricing</v-toolbar-title>
                                                        </v-toolbar>
                                                        <v-list two-line subheader v-if="percentagePlan.length > 0">
                                                            <v-subheader>Percentage Plans</v-subheader>

                                                            <v-list-item v-for="item of percentagePlan"
                                                                         :key="item.id">
                                                                <v-list-item-content>
                                                                    <v-list-item-title><h5>{{item.name}}</h5></v-list-item-title>
                                                                    <v-list-item-subtitle>{{item.planValue}} % /item</v-list-item-subtitle>
                                                                </v-list-item-content>
                                                                <v-list-item-action>
                                                                    <button
                                                                        :class="{'spinner spinner-white spinner-right': loading}"
                                                                        type="button"
                                                                        @click="onFinalPlanSelect(item.id)"
                                                                        class="btn btn-primary btn-sm text-uppercase font-weight-bolder px-15 py-3">
                                                                        Purchase
                                                                    </button>
                                                                </v-list-item-action>
                                                            </v-list-item>
                                                        </v-list>
                                                        <v-list two-line subheader v-if="commissionPlans.length > 0">
                                                            <v-subheader>Commission Plans</v-subheader>

                                                            <v-list-item v-for="item of commissionPlans" :key="item.id">
                                                                <v-list-item-content>
                                                                    <v-list-item-title><h5>{{item.name}}</h5></v-list-item-title>
                                                                    <v-list-item-subtitle>{{item.planValue}} % /item</v-list-item-subtitle>
                                                                </v-list-item-content>
                                                                <v-list-item-action>
                                                                    <button
                                                                        :class="{'spinner spinner-white spinner-right': loading}"
                                                                        type="button"
                                                                        @click="onFinalPlanSelect(item.id)"
                                                                        class="btn btn-primary btn-sm text-uppercase font-weight-bolder px-15 py-3">
                                                                        Purchase
                                                                    </button>
                                                                </v-list-item-action>
                                                            </v-list-item>
                                                        </v-list>
                                                        <v-list two-line subheader v-if="flatPlan.length > 0">
                                                            <v-subheader>Flat Plans</v-subheader>

                                                            <v-list-item v-for="item of flatPlan" :key="item.id">
                                                                <v-list-item-content>
                                                                    <v-list-item-title><h5>{{item.name}}</h5></v-list-item-title>
                                                                    <v-list-item-subtitle>₹{{item.planValue}} /item</v-list-item-subtitle>
                                                                </v-list-item-content>
                                                                <v-list-item-action>
                                                                    <button
                                                                        :class="{'spinner spinner-white spinner-right': loading}"
                                                                        type="button"
                                                                        @click="onFinalPlanSelect(item.id)"
                                                                        class="btn btn-primary btn-sm text-uppercase font-weight-bolder px-15 py-3">
                                                                        Purchase
                                                                    </button>
                                                                </v-list-item-action>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-card>

                                                </div>
                                            </div>
                                            <!--end::Card-->
                                        </div>
                                        <!--end::Container-->
                                    </div>
                                </v-stepper-content>
                            </v-stepper>
                        </div>
                        <!--end::Aside Top-->

                    </div>
                    <!--end::Container-->
                </div>
                <!--begin::Content-->

                <!--begin::Aside-->
                <div class="login-aside order-1 order-lg-2 bgi-no-repeat bgi-position-x-right">
                    <div class="login-conteiner bgi-no-repeat bgi-position-x-right bgi-position-y-bottom"
                         style="background-image: url(/media/svg/illustrations/login-visual-4.svg);">
                        <!--begin::Aside title-->
                        <h3 class="pt-lg-40 pl-lg-20 pb-lg-0 pl-10 py-20 m-0 d-flex justify-content-lg-start font-weight-boldest display5 display1-lg text-white">
                            Grow<br/>
                            Sell<br/>
                            One Stop Platform
                        </h3>
                        <!--end::Aside title-->
                    </div>
                </div>
                <!--end::Aside-->
            </div>
            <!--end::Login-->
        </div>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
import { assetsURL } from '../../../constants/GlobalURL';
    import {
        FindAllVendorPlansDocument, GetDefaultStoreDocument,
        RegisterVendorDocument,
        RegisterVendorMutationVariables,
        Vendor, VendorDto, VendorPlanPrice,
        ZoneFindManyDocument,
    } from '../../../gql';

    @Component({
        head: {
            bodyAttrs: {
                class: 'header-fixed header-mobile-fixed subheader-enabled sidebar-enabled page-loading',
                id: 'kt_body'
            },
            script: [
                {src: '/js/scripts.bundle.js?v=7.0.6', body: true, async: true},
                {src: '/js/pages/custom/login/login-4.js?v=7.0.6', body: true},
                {src: '/js/pages/widgets.js?v=7.0.6', body: true},
            ],
            link: [
                {rel: 'stylesheet', href: '/css/pages/login/login-4.css?v=7.0.6'}
            ]
        },
        apollo: {
            ZoneFindMany: {
                query: ZoneFindManyDocument
            },
            GetDefaultStore: {
                query: GetDefaultStoreDocument
            }
        },
    })
    export default class RegisterVendor extends Vue {
        private stepper = 1
        private planType = 1

        private loading = false

        private images = assetsURL

        // reg
        private email = ''
        private password = ''
        private allZones = []

        // basic
        private fname = ''
        private lname = ''
        private phone = ''

        // store
        private sname = ''
        private sphone = ''
        private semail = ''
        private saddress = ''
        private saddress2 = ''
        private zipcode = ''
        private region = ''
        private rentals = false

        private planId = ''
        private commissionPlans: any[] = []
        private flatPlan: any[] = []
        private percentagePlan: any[] = []

        private ZoneFindMany
        private GetDefaultStore

        @Watch('planId')
        onPlanChange() {
            console.log(this.planId)
        }

        onStepOne() {
            if (this.email === '') {
                this.$message.error('Email is required')
                return
            }
            if (this.password === '') {
                this.$message.error('Password is required')
                return;
            }
            this.stepper = 2
        }

        onStepTwo() {
            if (this.fname === '') {
                this.$message.error('First Name is required')
                return
            }
            if (this.lname === '') {
                this.$message.error('Last Name is required')
                return;
            }
            if (this.phone === '') {
                this.$message.error('Phone Number is required')
                return;
            }
            this.stepper = 3
        }

        onStepThree() {
            if (this.sname === '') {
                this.$message.error('Store Name is required')
                return
            }
            if (this.sphone === '') {
                this.$message.error('Store Phone Number is required')
                return
            }
            if (this.semail === '') {
                this.$message.error('Store Email is required')
                return
            }
            if (this.saddress === '') {
                this.$message.error('Address is required')
                return
            }
            if (this.zipcode === '') {
                this.$message.error('ZipCode is required')
                return
            }
            if (this.region === '') {
                this.$message.error('Select your region')
                return
            }
            this.stepper = 4
            /*this.$apollo.mutate<{RegisterVendor: VendorDto}, RegisterVendorMutationVariables>({
                mutation: RegisterVendorDocument,
                variables: {
                    firstname: this.fname,
                    lastname: this.lname,
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                    storeName: this.sname,
                    officialEmail: this.semail,
                    streetAddress1: this.saddress,
                    streetAddress2: this.saddress2,
                    zipcode: this.zipcode,
                    region: this.region,
                    rentals: this.rentals,
                    storeNumber: this.sphone,
                    planID: this.planId
                }
            }).then(value => {
                this.$apolloHelpers.onLogin(value!.data!.RegisterVendor!.token)
                this.$router.push({
                    path: '/app/dashboard'
                })
            })*/
        }

        onFinalPlanSelect(id) {
            this.loading = true
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate<{RegisterVendor: VendorDto}, RegisterVendorMutationVariables>({
                mutation: RegisterVendorDocument,
                variables: {
                    firstname: this.fname,
                    lastname: this.lname,
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                    storeName: this.sname,
                    officialEmail: this.semail,
                    streetAddress1: this.saddress,
                    streetAddress2: this.saddress2,
                    zipcode: this.zipcode,
                    region: this.region,
                    rentals: this.rentals,
                    storeNumber: this.sphone,
                    planID: id
                }
            }).then(value => {
                this.loading = false
                load()
                this.$apolloHelpers.onLogin(value!.data!.RegisterVendor!.token)
                this.$router.push({
                    path: '/app/dashboard'
                })
            }).catch(error => {
                this.loading = false
                load()
                this.$Message.error(error.message)
            })
        }

        @Watch('ZoneFindMany')
        onChangeZones() {
            this.allZones = this.ZoneFindMany
        }

        mounted() {
            this.$apollo.query({
                query: FindAllVendorPlansDocument
            }).then(value => {
                console.log(value)
                for (let its of value!.data.FindAllVendorPlans) {
                    if (its.priceStrategy === VendorPlanPrice.Commission) {
                        this.commissionPlans.push(its)
                    } else if (its.priceStrategy === VendorPlanPrice.Flat) {
                        this.flatPlan.push(its)
                    } else if (its.priceStrategy === VendorPlanPrice.Individualcollection) {
                        this.percentagePlan.push(its)
                    }
                }
            })
        }
    }
</script>

<style>
    .login.login-4 .login-container .login-content.login-content-signup {
        width: 100%;
    }

    .login.login-4 .login-container .login-content {
        width: 100%;
    }

    .v-application .rounded {
        border-radius: 0.675rem !important;
    }

    .v-application ul, .v-application ol {
        padding-left: 0 !important;
    }
</style>
