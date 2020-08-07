<template>
    <v-app>
        <div class="d-flex flex-column flex-root">
            <!--begin::Login-->
            <div class="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid wizard" id="kt_login">
                <!--begin::Content-->
                <div
                    class="login-container d-flex flex-center flex-row flex-row-fluid order-2 order-lg-1 flex-row-fluid bg-white py-lg-0 pb-lg-0 pt-15 pb-12">
                    <!--begin::Container-->
                    <div class="login-content login-content-signup">
                        <!--begin::Aside Top-->
                        <div class="d-flex flex-column-auto flex-column px-10">
                            <!--begin::Aside header-->
                            <a href="#" class="login-logo">
                                <img src="/master/logo/air.png" class="max-h-100px" alt=""/>
                            </a>
                            <div class="text-muted font-weight-bold font-size-h4" style="margin-top: -10px; margin-bottom: 10px">
                                Already have an Account ?
                                <a href="/vendors/login" class="text-primary font-weight-bolder">Sign In</a>
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
                                                    <h3 class="7 text-white text-center my-10 my-lg-15">Transparent
                                                        &amp; Simple Pricing</h3>

                                                    <!-- begin: Tabs-->
                                                    <div class="d-flex justify-content-center">
                                                        <ul class="nav nav-pills nav-primary mb-10 mb-lg-20 bg-white rounded"
                                                            id="pills-tab" role="tablist">
                                                            <li class="nav-item p-0 m-0">
                                                                <a class="nav-link font-weight-bolder rounded-right-0 px-8 py-5"
                                                                   id="pills-tab-1" data-toggle="pill"
                                                                   href="#kt-pricing-2_content1" aria-expanded="true"
                                                                   aria-controls="kt-pricing-2_content1">
                                                                    Percentage
                                                                </a>
                                                            </li>
                                                            <li class="nav-item p-0 m-0">
                                                                <a class="nav-link font-weight-bolder px-8 py-5 active"
                                                                   id="pills-tab-2" data-toggle="pill"
                                                                   href="#kt-pricing-2_content2" aria-expanded="true"
                                                                   aria-controls="kt-pricing-2_content2">
                                                                    Commission
                                                                </a>
                                                            </li>
                                                            <li class="nav-item p-0 m-0">
                                                                <a class="nav-link font-weight-bolder rounded-left-0 px-8 py-5"
                                                                   id="pills-tab-3" data-toggle="pill"
                                                                   href="#kt-pricing-2_content3" aria-expanded="true"
                                                                   aria-controls="kt-pricing-2_content2">
                                                                    Default
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <!-- end: Tabs-->

                                                    <div class="tab-content">
                                                        <!-- begin: Tab pane-->
                                                        <div class="tab-pane show row text-center"
                                                             id="kt-pricing-2_content1" role="tabpanel"
                                                             aria-labelledby="pills-tab-1">
                                                            <div
                                                                class="card-body bg-white col-11 col-lg-12 col-xxl-10 mx-auto">
                                                                <div class="row">
                                                                    <!-- begin: Pricing-->
                                                                    <div class="col-md-4" v-for="item of percentagePlan"
                                                                         :key="item.id">
                                                                        <div
                                                                            class="pt-30 pt-md-25 pb-15 px-5 text-center">
                                                                            <!--begin::Icon-->
                                                                            <div class="d-flex flex-center position-relative mb-30">
                                                                                <span class="svg svg-fill-primary opacity-4 position-absolute">
                                                                                    <svg width="175" height="200">
                                                                                        <polyline points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                                <i class="fas fa-mountain font-size-h1 text-primary"></i>
                                                                            </div>
                                                                            <!--end::Icon-->

                                                                            <!--begin::Content-->
                                                                            <h4 class="font-size-h3 mb-10 mt-10">{{item.name}}</h4>
                                                                            <div
                                                                                class="d-flex flex-column line-height-xl pb-10">
                                                                                <span>Fixed For all Catalog Items</span>
                                                                                <span></span>
                                                                            </div>
                                                                            <span
                                                                                class="font-size-h1 d-block font-weight-boldest text-dark">₹{{item.planValue}} /item

                                                                            </span>
                                                                            <div class="mt-7">
                                                                                <button
                                                                                    :class="{'spinner spinner-white spinner-right': loading}"
                                                                                    type="button"
                                                                                    @click="onFinalPlanSelect(item.id)"
                                                                                    class="btn btn-primary text-uppercase font-weight-bolder px-15 py-3">
                                                                                    Purchase
                                                                                </button>
                                                                            </div>
                                                                            <!--end::Content-->
                                                                        </div>
                                                                    </div>
                                                                    <!-- end: Pricing-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- end: Tab pane-->

                                                        <!-- begin: Tab pane-->
                                                        <div class="tab-pane row text-center active"
                                                             id="kt-pricing-2_content2" role="tabpanel"
                                                             aria-labelledby="pills-tab-2">
                                                            <div v-for="item of commissionPlans" :key="item.id"
                                                                class="card-body bg-white col-11 col-lg-12 col-xxl-10 mx-auto">
                                                                <div class="row justify-content-center">
                                                                    <!-- begin: Pricing-->
                                                                    <div class="col-md-4">
                                                                        <div
                                                                            class="pt-30 pt-md-25 pb-15 px-5 text-center">
                                                                            <!--begin::Icon-->
                                                                            <div
                                                                                class="d-flex flex-center position-relative mb-30">
                                                                                    <span class="svg svg-fill-primary opacity-4 position-absolute">
                                                                                        <svg width="175" height="200">
                                                                                            <polyline points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"></polyline>
                                                                                        </svg>
                                                                                    </span>
                                                                                <i class="fas fa-atom font-size-h1 text-primary"></i>
                                                                            </div>
                                                                            <!--end::Icon-->

                                                                            <!--begin::Content-->
                                                                            <h4 class="font-size-h3 mb-10">{{item.name}}</h4>
                                                                            <div
                                                                                class="d-flex flex-column line-height-xl mb-10">
                                                                                <span>Commission for individual items</span>
                                                                            </div>
                                                                            <span
                                                                                class="font-size-h1 d-block font-weight-boldest text-dark">₹{{item.planValue}} /item</span>
                                                                            <div class="mt-7">
                                                                                <button
                                                                                    :class="{'spinner spinner-white spinner-right': loading}"
                                                                                    type="button"
                                                                                    @click="onFinalPlanSelect(item.id)"
                                                                                    class="btn btn-primary text-uppercase font-weight-bolder px-15 py-3">
                                                                                    Purchase
                                                                                </button>
                                                                            </div>
                                                                            <!--end::Icon-->
                                                                        </div>
                                                                    </div>
                                                                    <!-- end: Pricing-->

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- end: Tab pane-->
                                                        <div class="tab-pane row text-center active"
                                                             id="kt-pricing-2_content3" role="tabpanel"
                                                             aria-labelledby="pills-tab-2">
                                                            <div v-for="item of flatPlan" :key="item.id"
                                                                 class="card-body bg-white col-11 col-lg-12 col-xxl-10 mx-auto">
                                                                <div class="row justify-content-center">
                                                                    <!-- begin: Pricing-->
                                                                    <div class="col-md-4">
                                                                        <div
                                                                            class="pt-30 pt-md-25 pb-15 px-5 text-center">
                                                                            <!--begin::Icon-->
                                                                            <div
                                                                                class="d-flex flex-center position-relative mb-30">
                                                                                    <span class="svg svg-fill-primary opacity-4 position-absolute">
                                                                                        <svg width="175" height="200">
                                                                                            <polyline points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"></polyline>
                                                                                        </svg>
                                                                                    </span>
                                                                                <i class="fas fa-atom font-size-h1 text-primary"></i>
                                                                            </div>
                                                                            <!--end::Icon-->

                                                                            <!--begin::Content-->
                                                                            <h4 class="font-size-h3 mb-10">{{item.name}}</h4>
                                                                            <div
                                                                                class="d-flex flex-column line-height-xl mb-10">
                                                                                <span>Commission for individual items</span>
                                                                            </div>
                                                                            <span
                                                                                class="font-size-h1 d-block font-weight-boldest text-dark">₹{{item.planValue}} /mo</span>
                                                                            <div class="mt-7">
                                                                                <button
                                                                                    :class="{'spinner spinner-white spinner-right': loading}"
                                                                                    type="button"
                                                                                    @click="onFinalPlanSelect(item.id)"
                                                                                    class="btn btn-primary text-uppercase font-weight-bolder px-15 py-3">
                                                                                    Purchase
                                                                                </button>
                                                                            </div>
                                                                            <!--end::Icon-->
                                                                        </div>
                                                                    </div>
                                                                    <!-- end: Pricing-->

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                            We Got<br/>
                            A Surprise<br/>
                            For You
                        </h3>
                        <!--end::Aside title-->
                    </div>
                </div>
                <!--end::Aside-->
            </div>
            <!--end::Login-->
        </div>
        <!--<div>
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
        </div>-->
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
            }
        },
    })
    export default class RegisterVendor extends Vue {
        private stepper = 1
        private planType = 1

        private loading = false

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
