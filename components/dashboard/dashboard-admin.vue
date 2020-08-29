<template>
    <div v-if="store">
        <div class="card card-custom gutter-b">
            <div class="card-body">
                <div class="d-flex">
                    <!--begin: Pic-->
                    <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                        <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                            <span class="font-size-h3 symbol-label font-weight-boldest"></span>
                        </div>
                    </div>
                    <!--end: Pic-->

                    <!--begin: Info-->
                    <div class="flex-grow-1">
                        <!--begin: Title-->
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <div class="mr-3">
                                <!--begin::Name-->
                                <a href="#" class="d-flex align-items-center text-success text-hover-primary font-size-h5 font-weight-bold mr-3">
                                    {{store.storeName}}
                                </a>
                                <!--end::Name-->

                                <!--begin::Contacts-->
                                <div class="d-flex flex-wrap my-2">
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                        <i class="la la-mail-bulk"></i>
                                        {{store.officialemail}}
                                    </a>
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                        <i class="la la-phone"></i>
                                        {{store.phoneNumber}}
                                    </a>
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold">
                                        <i class="la la-receipt"></i>
                                        {{store.GSTIN}}
                                    </a>
                                </div>
                                <!--end::Contacts-->
                            </div>
                        </div>
                        <!--end: Title-->
                    </div>
                    <!--end: Info-->
                </div>

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
    export default class DashboardAdmin extends Vue {

    }
</script>
