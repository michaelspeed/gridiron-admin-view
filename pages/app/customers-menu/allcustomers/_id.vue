<template>
    <div>
        <div class="content  d-flex flex-column flex-column-fluid" id="kt_content">

            <!--begin::Entry-->
            <div class="d-flex flex-column-fluid">
                <!--begin::Container-->
                <div class=" container-fluid ">
                    <!--begin::Profile Personal Information-->
                    <div class="d-flex flex-row">
                        <!--begin::Aside-->
                        <div class="flex-row-auto offcanvas-mobile w-250px w-xxl-350px" v-if="$apollo.queries.user.loading">
                            <div class="card">
                                <div class="d-flex justify-content-center align-items-center m-20 w-100">
                                    <div class="spinner spinner-primary spinner-lg mr-15"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-row-auto offcanvas-mobile w-250px w-xxl-350px" id="kt_profile_aside" v-if="!$apollo.queries.user.loading">
                            <!--begin::Profile Card-->
                            <v-sheet elevation="4">
                                <!--begin::Body-->
                                <div class="card-body pt-4">
                                    <!--begin::Toolbar-->
                                    <div class="d-flex justify-content-end">

                                    </div>
                                    <!--end::Toolbar-->

                                    <!--begin::User-->
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <a href="#" class="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary">
                                                {{user.firstName}} {{user.lastName}}
                                            </a>
                                            <div class="text-muted" v-if="user.administrator">
                                                Administrator
                                            </div>
                                            <div class="text-muted" v-if="user.vendor">
                                                Vendor
                                            </div>
                                            <div class="text-muted" v-if="!user.vendor && !user.administrator">
                                                User
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::User-->

                                    <!--begin::Contact-->
                                    <div class="py-9">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="font-weight-bold mr-2">Email:</span>
                                            <a href="#" class="text-muted text-hover-primary">{{user.email}}</a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="font-weight-bold mr-2">Phone:</span>
                                            <span class="text-muted">{{user.phoneNumber}}</span>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <span class="font-weight-bold mr-2">Verified:</span>
                                            <span class="text-muted">{{user.verified ? 'true' : 'false'}}</span>
                                        </div>
                                    </div>
                                    <!--end::Contact-->

                                    <!--begin::Nav-->
                                    <div class="navi navi-bold navi-hover navi-active navi-link-rounded">
                                        <div class="navi-item mb-2">
                                            <a href="javascript:;" @click="$router.push({path: `/app/customers-menu/allcustomers/${$route.params.id}`})"
                                               :class="{'active': `/app/customers-menu/allcustomers/${$route.params.id}` === $route.path}"
                                               class="navi-link py-4 ">
                                                <span class="navi-icon mr-2">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                                <span class="navi-text font-size-lg">
                                                    Personal Information
                                                </span>
                                            </a>
                                        </div>
                                        <div class="navi-item mb-2">
                                            <a href="javascript:;" @click="$router.push(`/app/customers-menu/allcustomers/${$route.params.id}/address`)" class="navi-link py-4"
                                               :class="{'active': `/app/customers-menu/allcustomers/${$route.params.id}/address` === $route.path}"
                                            >
                                                <span class="navi-icon mr-2">
                                                    <i class="fas fa-address-card"></i>
                                                </span>
                                                <span class="navi-text font-size-lg">
                                                    Address Information
                                                </span>
                                            </a>
                                        </div>
                                        <div class="navi-item mb-2">
                                            <a href="javascript:;" @click="$router.push(`/app/customers-menu/allcustomers/${$route.params.id}/orders`)" class="navi-link py-4"
                                               :class="{'active': `/app/customers-menu/allcustomers/${$route.params.id}/orders` === $route.path}"
                                            >
                                                <span class="navi-icon mr-2">
                                                    <i class="fas fa-shopping-basket"></i>
                                                </span>
                                                <span class="navi-text font-size-lg">
                                                    Orders
                                                </span>
                                            </a>
                                        </div>
                                        <div class="navi-item mb-2">
                                            <a href="javascript:;" @click="$router.push(`/app/customers-menu/allcustomers/${$route.params.id}/reset`)" class="navi-link py-4"
                                               :class="{'active': `/app/customers-menu/allcustomers/${$route.params.id}/reset` === $route.path}"
                                            >
                                                <span class="navi-icon mr-2">
                                                    <i class="fas fa-gamepad"></i>
                                                </span>
                                                <span class="navi-text font-size-lg">
                                                    Controls
                                                </span>
                                            </a>
                                        </div>
                                        <!--<div class="navi-item mb-2">
                                            <a href="javascript:;" @click="$router.push(`/app/customers-menu/allcustomers/${$route.params.id}/override`)" class="navi-link py-4"
                                               :class="{'active': `/app/customers-menu/allcustomers/${$route.params.id}/override` === $route.path}"
                                            >
                                                <span class="navi-icon mr-2">
                                                    <i class="fas fa-bezier-curve"></i>
                                                </span>
                                                <span class="navi-text font-size-lg">
                                                    Override settings
                                                </span>
                                            </a>
                                        </div>-->
                                    </div>
                                    <!--end::Nav-->
                                </div>
                                <!--end::Body-->
                            </v-sheet>
                            <!--end::Profile Card-->
                        </div>
                        <!--end::Aside-->
                        <!--begin::Content-->
                        <div class="flex-row-fluid ml-lg-8">
                            <!--begin::Card-->
                            <NuxtChild/>
                        </div>
                        <!--end::Content-->
                    </div>
                    <!--end::Profile Personal Information-->
                </div>
                <!--end::Container-->
            </div>
            <!--end::Entry-->
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {GetUserInfoDocument} from "~/gql";

    @Component({
        layout: 'console',
        apollo: {
            user: {
                query: GetUserInfoDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                }
            }
        }
    })
    export default class UserSingleView extends Vue {
        private user

        @Watch('$route')
        onChangeRoute() {
            console.log(this.$route)
        }

        @Watch('user')
        onChangeUser() {
            console.log(this.user)
        }
    }
</script>
