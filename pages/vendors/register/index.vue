<template>
    <v-app>
        <div>
            <div class="air__auth">
                <div class="pt-5 pb-5 d-flex align-items-end mt-auto">
                    <img src="/components/core/img/air-logo.png" alt="AIR UI Logo" />
                    <div class="air__utils__logo__text">
                        <div class="air__utils__logo__name text-uppercase text-dark font-size-21">{{$t('pages.appname')}}</div>
                        <div class="air__utils__logo__descr text-uppercase font-size-12 text-gray-6">
                            {{$t('pages.tag-line')}}
                        </div>
                    </div>
                </div>
                <div class="air__auth__container pl-5 pr-5 pt-5 pb-5 bg-white">
                    <div class="text-dark font-size-30 mb-4">Vendor Registration</div>
                    <div class="mb-4">
                        <div class="row">
                            <div class="col-md-6">
                                <v-stepper v-model="stepper" vertical>
                                    <v-stepper-step :complete="stepper > 1" step="1" color="#1b55e3">
                                        <h5 style="margin-left: 10px">Registration Info</h5>
                                    </v-stepper-step>
                                    <v-stepper-content step="1">
                                        <v-card color="#FAFAFA" outlined class="mb-12">
                                            <div style="padding: 20px">
                                                <div class="form-group justify-content-start">
                                                    <label>Email</label>
                                                    <input type="email" class="form-control" placeholder="Email Address" v-model="email" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Password</label>
                                                    <input type="password" class="form-control" placeholder="Password" v-model="password"/>
                                                </div>
                                                <div>
                                                    <v-btn color="#3F51B5" text @click="onStepOne">Continue</v-btn>
                                                </div>
                                            </div>
                                        </v-card>
                                    </v-stepper-content>
                                    <v-stepper-step :complete="stepper > 2" step="2" color="#1b55e3">
                                        <h5 style="margin-left: 10px">Basic Info</h5>
                                    </v-stepper-step>
                                    <v-stepper-content step="2">
                                        <v-card color="#FAFAFA" outlined class="mb-12">
                                            <div style="padding: 20px">
                                                <div class="form-group justify-content-start">
                                                    <label>First Name</label>
                                                    <input class="form-control" placeholder="First Name" v-model="fname" />
                                                </div>
                                                <div class="form-group justify-content-start">
                                                    <label>Last Name</label>
                                                    <input class="form-control" placeholder="Last Name" v-model="lname" />
                                                </div>
                                                <div class="form-group justify-content-start">
                                                    <label>Phone Number</label>
                                                    <input class="form-control" placeholder="Phone Number" v-model="phone" />
                                                </div>
                                                <div>
                                                    <v-btn color="#3F51B5" text @click="onStepTwo">Continue</v-btn>
                                                    <v-btn color="#F44336" text @click="stepper = 1">Previous</v-btn>
                                                </div>
                                            </div>
                                        </v-card>
                                    </v-stepper-content>
                                    <v-stepper-step :complete="stepper > 3" step="3" color="#1b55e3">
                                        <h5 style="margin-left: 10px">Store Info</h5>
                                    </v-stepper-step>
                                    <v-stepper-content step="3">
                                        <v-card color="#FAFAFA" outlined class="mb-12">
                                            <div style="padding: 20px">
                                                <div class="form-group justify-content-start">
                                                    <label>Store Name</label>
                                                    <input class="form-control" placeholder="Store Name" v-model="sname" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Official Phone Number</label>
                                                    <input class="form-control" placeholder="Official Phone Number" v-model="sphone"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Official Email Address</label>
                                                    <input type="email" class="form-control" placeholder="Official Email Address" v-model="semail"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Address Line 1</label>
                                                    <input class="form-control" placeholder="Address Line 1" v-model="saddress"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Address Line 2</label>
                                                    <input class="form-control" placeholder="Address Line 2" v-model="saddress2"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>ZipCode</label>
                                                    <input class="form-control" placeholder="Zipcode" v-model="zipcode"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Region</label>
                                                    <v-select solo v-model="region" :items="allZones" item-value="id" item-text="name"></v-select>
                                                </div>
                                                <div class="form-group">
                                                    <v-checkbox
                                                            v-model="rentals"
                                                            label="Rental store"
                                                    ></v-checkbox>
                                                </div>
                                                <div>
                                                    <v-btn color="#3F51B5" text @click="onStepThree">Continue</v-btn>
                                                    <v-btn color="#F44336" text @click="stepper = 2">Previous</v-btn>
                                                </div>
                                            </div>
                                        </v-card>
                                    </v-stepper-content>
                                </v-stepper>
                            </div>
                            <div class="col-md-6">
                                <v-tabs
                                        v-model="planType"
                                >
                                    <v-tab>Percentage</v-tab>
                                    <v-tab>Commission</v-tab>
                                    <v-tab>Default</v-tab>
                                </v-tabs>
                                <v-card v-if="planType === 0" style="padding: 10px">
                                    <v-row>
                                        <v-col cols="6" v-for="item of percentagePlan" :key="item.id">
                                            <v-card dark color="#9C27B0">
                                                <div>
                                                    <div class="air__pricingTable__item pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1">
                                                        <i class="fe fe-inbox font-size-80 mb-3 d-block"></i>
                                                        <div class="text-white font-weight-bold font-size-36">{{item.name}}</div>
                                                        <div class="text-white font-weight-bold font-size-48 mb-3">
                                                            ₹{{item.planValue}} <span class="align-text-top font-size-28 text-gray-2">/item</span>
                                                        </div>
                                                        <ul class="list-unstyled font-size-18 mb-5">
                                                            <li>Fixed For all Catalog Items</li>
                                                        </ul>
                                                        <a v-if="planId !== item.id" class="btn btn-primary width-100" href="javascript: void(0);" @click="planId = item.id">Select</a>
                                                        <a v-if="planId === item.id" class="btn btn-gray width-100" href="javascript: void(0);">Selected</a>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card v-if="planType === 1" style="padding: 10px">
                                    <v-row>
                                        <v-col cols="6" v-for="item of commissionPlans" :key="item.id">
                                            <v-card dark color="#FF5722">
                                                <div >
                                                    <div class="air__pricingTable__item pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1">
                                                        <i class="fe fe-inbox font-size-80 mb-3 d-block"></i>
                                                        <div class="text-white font-weight-bold font-size-36">{{item.name}}</div>
                                                        <div class="text-white font-weight-bold font-size-48 mb-3">
                                                            ₹{{item.planValue}} <span class="align-text-top font-size-28 text-gray-2">/item</span>
                                                        </div>
                                                        <ul class="list-unstyled font-size-18 mb-5">
                                                            <li>Commission for individual items</li>
                                                        </ul>
                                                        <a v-if="planId !== item.id" class="btn btn-primary width-100" href="javascript: void(0);" @click="planId = item.id">Select</a>
                                                        <a v-if="planId === item.id" class="btn btn-gray width-100" href="javascript: void(0);">Selected</a>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card v-if="planType === 2" style="padding: 10px">
                                    <v-row>
                                        <v-col cols="6" v-for="item of flatPlan" :key="item.id">
                                            <v-card dark color="#F44336">
                                                <div >
                                                    <div class="air__pricingTable__item pt-5 pb-5 pl-5 pr-5 text-center flex-grow-1">
                                                        <i class="fe fe-inbox font-size-80 mb-3 d-block"></i>
                                                        <div class="text-white font-weight-bold font-size-36">{{item.name}}</div>
                                                        <div class="text-white font-weight-bold font-size-48 mb-3">
                                                            ₹{{item.planValue}} <span class="align-text-top font-size-28 text-gray-2">/mo</span>
                                                        </div>
                                                        <a v-if="planId !== item.id" class="btn btn-primary width-100" href="javascript: void(0);" @click="planId = item.id">Select</a>
                                                        <a v-if="planId === item.id" class="btn btn-gray width-100" href="javascript: void(0);">Selected</a>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-auto pb-5 pt-5">
                    <ul class="air__auth__footerNav list-unstyled d-flex mb-2 flex-wrap justify-content-center">
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Compliance</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                    <div class="text-gray-4 text-center">{{$t('general.copyright')}}</div>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        FindAllVendorPlansDocument,
        RegisterVendorDocument,
        RegisterVendorMutationVariables,
        Vendor, VendorDto, VendorPlanPrice,
        ZoneFindManyDocument,
    } from '../../../gql';

    @Component({
        apollo: {
            ZoneFindMany: {
                query: ZoneFindManyDocument
            }
        }
    })
    export default class RegisterVendor extends Vue {
        private stepper = 1
        private planType = 1

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

        @Watch('planId')
        onPlanChange() {
            console.log(this.planId)
        }

        onStepOne(){
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
            if (this.planId === '') {
                this.$message.error('Select your Plan')
                return
            }
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
                    planID: this.planId
                }
            }).then(value => {
                this.$apolloHelpers.onLogin(value!.data!.RegisterVendor!.token)
                this.$router.push({
                    path: '/app/dashboard'
                })
            })
        }

        @Watch('ZoneFindMany')
        onChangeZones() {
            console.log(this.ZoneFindMany)
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

<style scoped lang="scss">
    .air__auth__container {
        max-width: 100rem;
    }
    .page {
        min-height: 100vh;
        background-color: #5EA9FF;
        position: relative;

        &:after {
            content: '';
            width: 100%;
            height: 50%;
            position: absolute;
            top: 50%;
            background-color: #fff;
            z-index: 1;
        }
    }

    .pricing-container {
        z-index: 2;
        position: absolute;
        left: 50%;
        top: 50px;
        transform: translate(-50%,0);

        @media screen and (min-width: 768px) {
            background-color: #fff;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.3);
            width: 800px;
        }

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }

        .plan{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 250px;
            margin: 30px 0px;
            padding: 0px 20px;

            &:not(:last-child) {
                border-right: 1px solid rgba(0,0,0,0.1);
            }

            .plan-icon {
                display: flex;
                width: 150px;
                height: 150px;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 10;
                font-size: 7rem;
                color: #5EA9FF;

                &:after {
                    content: '';
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background-color: rgba(93, 169, 254, 0.1);
                    z-index: 8;
                    position: absolute;
                }
            }

            .title {
                text-transform: uppercase;
                color: #444857;
                line-height: 4rem;
                letter-spacing: 2px;
            }

            .features {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;

                li {
                    line-height: 1.5rem;
                    width: 90%;
                    padding: 5px;
                    display: block;
                    text-align: center;
                    text-transform: uppercase;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    font-size: 85%;
                    color: #5EA9FF;

                    &:last-child {
                        border-bottom: 1px solid rgba(0,0,0,0.1);
                    }
                }
            }

            .price {
                margin-top: 1rem;
                font-size: 2.5rem;
                line-height: 5rem;
                color: #5EA9FF;
            }

            @media screen and (max-width: 768px) {
                display: flex;
                flex-direction: column;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.3);
                justify-content: space-between;
                padding-bottom: 2rem;
            }
        }
    }
</style>
