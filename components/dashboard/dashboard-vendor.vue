<template>
    <div v-if="vendorStore">
        <div class="card card-custom gutter-b">
            <div class="card-body">
                <div class="d-flex">
                    <!--begin: Pic-->
                    <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                        <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                            <span class="font-size-h3 symbol-label font-weight-boldest">JM</span>
                        </div>
                    </div>
                    <!--end: Pic-->

                    <!--begin: Info-->
                    <div class="flex-grow-1">
                        <!--begin: Title-->
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <div class="mr-3">
                                <!--begin::Name-->
                                <a href="#" class="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">
                                    {{vendorStore.storeName}}
                                </a>
                                <!--end::Name-->

                                <!--begin::Contacts-->
                                <div class="d-flex flex-wrap my-2">
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                        <i class="la la-mail-bulk"></i>
                                        {{vendorStore.officialemail}}
                                    </a>
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                        <i class="la la-phone"></i>
                                        {{vendorStore.phoneNumber}}
                                    </a>
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold">
                                        <i class="la la-receipt"></i>
                                        {{vendorStore.GSTIN}}
                                    </a>
                                </div>
                                <!--end::Contacts-->
                            </div>
                            <div class="my-lg-0 my-1">
                                <a href="#" class="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3">Reports</a>
                                <a href="#" class="btn btn-sm btn-info font-weight-bolder text-uppercase">New Task</a>
                            </div>
                        </div>
                        <!--end: Title-->

                        <!--begin: Content-->
                        <div class="d-flex align-items-center flex-wrap justify-content-between">
                            <div class="flex-grow-1 font-weight-bold text-dark-50 py-5 py-lg-2 mr-5"></div>

                            <div class="d-flex flex-wrap align-items-center py-2">
                                <div class="d-flex align-items-center mr-10">

                                </div>
                                <div class="flex-grow-1 flex-shrink-0 w-150px w-xl-300px mt-4 mt-sm-0">

                                </div>
                            </div>
                        </div>
                        <!--end: Content-->
                    </div>
                    <!--end: Info-->
                </div>

                <div class="separator separator-solid my-7"></div>

                <!--begin: Items-->
                <div class="d-flex align-items-center flex-wrap">
                    <!--begin: Item-->
                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                <span class="mr-4">
                    <i class="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                </span>
                        <div class="d-flex flex-column text-dark-75">
                            <span class="font-weight-bolder font-size-sm">Earnings</span>
                            <span class="font-weight-bolder font-size-h5"><span class="text-dark-50 font-weight-bold">$</span>{{store.balance.balance}}</span>
                        </div>
                    </div>
                    <!--end: Item-->

                    <!--begin: Item-->
                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                <span class="mr-4">
                    <i class="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                </span>
                        <div class="d-flex flex-column text-dark-75">
                            <span class="font-weight-bolder font-size-sm">Expenses</span>
                            <span class="font-weight-bolder font-size-h5"><span class="text-dark-50 font-weight-bold">$</span>164,700</span>
                        </div>
                    </div>
                    <!--end: Item-->

                    <!--begin: Item-->
                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                <span class="mr-4">
                    <i class="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                </span>
                        <div class="d-flex flex-column text-dark-75">
                            <span class="font-weight-bolder font-size-sm">Net</span>
                            <span class="font-weight-bolder font-size-h5"><span class="text-dark-50 font-weight-bold">$</span>782,300</span>
                        </div>
                    </div>
                    <!--end: Item-->

                    <!--begin: Item-->
                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                <span class="mr-4">
                    <i class="flaticon-file-2 icon-2x text-muted font-weight-bold"></i>
                </span>
                        <div class="d-flex flex-column flex-lg-fill">
                            <span class="text-dark-75 font-weight-bolder font-size-sm">73 Tasks</span>
                            <a href="#" class="text-primary font-weight-bolder">View</a>
                        </div>
                    </div>
                    <!--end: Item-->

                    <!--begin: Item-->
                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                <span class="mr-4">
                    <i class="flaticon-chat-1 icon-2x text-muted font-weight-bold"></i>
                </span>
                        <div class="d-flex flex-column">
                            <span class="text-dark-75 font-weight-bolder font-size-sm">648 Comments</span>
                            <a href="#" class="text-primary font-weight-bolder">View</a>
                        </div>
                    </div>
                    <!--end: Item-->

                    <!--begin: Item-->
                    <div class="d-flex align-items-center flex-lg-fill my-1">
                        <span class="mr-4">
                            <i class="flaticon-network icon-2x text-muted font-weight-bold"></i>
                        </span>
                    </div>
                    <!--end: Item-->
                </div>
                <!--begin: Items-->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {mapState} from "vuex";

    @Component({
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                store: (store: any) => store.admin.store,
                vendorStore: (store: any) => store.admin.vendorStore,
                vendor: (store: any) => store.admin.vendor
            })
        }
    })
    export default class DashboardVendor extends Vue {

    }
</script>
