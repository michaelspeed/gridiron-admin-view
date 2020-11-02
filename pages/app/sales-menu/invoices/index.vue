<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Invoices</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"></span>
                            </div>
                            <!--end::Search Form-->
                        </div>
                        <!--end::Details-->

                        <!--begin::Toolbar-->
                        <div class="d-flex align-items-center">
                            <!--begin::Button-->
                            <a href="#" class="">

                            </a>
                            <!--end::Button-->


                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <AdminInvoice v-if="!vendorStore"/>
                <VendorInvoice v-if="vendorStore"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapState} from "vuex";
    import AdminInvoice from "~/components/invoices/admin-invoice.vue";
    import VendorInvoice from "~/components/invoices/vendor-invoice.vue";

    @Component({
        layout: 'console',
        components: {
            AdminInvoice,
            VendorInvoice
        },
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
                vendorStore: (store: any) => store.admin.vendorStore,
            }),
        }
    })
    export default class Invoices extends Vue {

    }
</script>
