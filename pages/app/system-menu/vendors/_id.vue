<template>
    <div>
        <div class=" container-fluid ">
            <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.vendor.loading">
                <div class="spinner spinner-primary spinner-lg mr-15"></div>
            </div>
            <div class="row">
                <div class="col-md-4" v-if="!$apollo.queries.vendor.loading">
                    <div class="card card-custom gutter-b card-stretch">
                        <!--begin::Body-->
                        <div class="card-body d-flex flex-column">
                            <div class="flex-grow-1 pb-5">
                                <!--begin::Info-->
                                <div class="d-flex align-items-center pr-2 mb-6">
                <span class="text-muted font-weight-bold font-size-lg flex-grow-1">
                    {{vendor.email}}
                </span>
                                    <div class="symbol symbol-50">
                                    </div>
                                </div>
                                <!--end::Info-->

                                <!--begin::Link-->
                                <a href="#" class="text-dark font-weight-bolder text-hover-primary font-size-h4">
                                    {{vendor.store.storeName}}<br>
                                    {{vendor.store.phoneNumber}}
                                </a>
                                <!--end::Link-->

                                <!--begin::Desc-->
                                <p class="text-dark-50 font-weight-normal font-size-lg mt-6">
                                    {{vendor.store.streetAddress1}}<br>
                                    {{vendor.store.streetAddress2}}<br>
                                    {{vendor.store.GSTIN}}
                                </p>
                                <!--end::Desc-->
                            </div>
                            <!--begin::Team-->
                            <a href="#" class="card card-custom bg-danger bg-hover-state-danger gutter-b" v-if="vendor.store.GSTIN === ''">
                                <!--begin::Body-->
                                <div class="card-body">
                                    <div class="text-inverse-danger font-weight-bolder font-size-h5 mb-2">GSTIN has not been updated</div>
                                </div>
                                <!--end::Body-->
                            </a>
                            <!--end::Team-->
                        </div>
                        <!--end::Body-->
                    </div>
                </div>
                <div class="col-md-8" v-if="!$apollo.queries.vendor.loading">
                    <div class="card card-custom gutter-b card-stretch">
                        <!--begin::Body-->
                        <div class="card-body d-flex flex-column">
                            <v-tabs v-model="tabs">
                                <v-tab :key="0">Info</v-tab>
                                <v-tab :key="1">Settlements</v-tab>
                                <v-tab :key="2">Delivery Zips</v-tab>
                            </v-tabs>
                            <div v-if="tabs === 0">
                                <div class="card card-custom  card-stretch gutter-b" v-if="!$apollo.queries.vendor.loading">
                                    <!--begin::Header-->
                                    <div class="card-header border-0">
                                        <h3 class="card-title font-weight-bolder text-dark">Info</h3>
                                    </div>
                                    <div class="card-body pt-0">
                                        <!--begin::Item-->
                                        <div class="mb-6">
                                            <!--begin::Content-->
                                            <div class="d-flex align-items-center flex-grow-1">

                                                <!--begin::Section-->
                                                <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                                                    <!--begin::Info-->
                                                    <div class="d-flex flex-column align-items-cente py-2 w-75">
                                                        <!--begin::Title-->
                                                        <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                                            {{vendor.store.storeName}}
                                                        </a>
                                                        <!--end::Title-->

                                                        <!--begin::Data-->
                                                        <span class="text-muted font-weight-bold">
                                                            email: {{vendor.store.officialemail}}
                                                        </span>
                                                        <!--end::Data-->
                                                    </div>
                                                    <!--end::Info-->
                                                </div>
                                                <!--end::Section-->
                                            </div>
                                            <!--end::Content-->
                                        </div>
                                        <div class="mb-6">
                                            <!--begin::Content-->
                                            <div class="d-flex align-items-center flex-grow-1">

                                                <!--begin::Section-->
                                                <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                                                    <!--begin::Info-->
                                                    <div class="d-flex flex-column align-items-cente py-2 w-75">
                                                        <!--begin::Title-->
                                                        <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                                            Licence Type: {{vendor.license.plans.priceStrategy}}
                                                        </a>
                                                        <!--end::Title-->

                                                        <!--begin::Data-->
                                                        <span class="text-muted font-weight-bold">
                                                            Plan End: {{getDate(vendor.license.tenureEnd)}}
                                                        </span>
                                                        <!--end::Data-->
                                                    </div>
                                                    <!--end::Info-->
                                                </div>
                                                <!--end::Section-->
                                            </div>
                                            <!--end::Content-->
                                        </div>
                                        <!--end::Item-->

                                    </div>
                                </div>
                            </div>
                            <div v-if="tabs === 1">
                                <VendorSettlements :id="$route.params.id"/>
                            </div>
                            <div v-if="tabs === 2">
                                <VendorZips :id="$route.params.id"/>
                            </div>
                        </div>
                        <!--end::Body-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {GetSingleVendorDocument, Vendor} from "~/gql";
import VendorSettlements from "~/components/vendor/vendor-settlements.vue";
import VendorZips from "~/components/vendor/vendor-zips.vue";
import moment from "moment";

@Component({
    layout: 'console',
    components: {
        VendorSettlements,
        VendorZips
    },
    apollo: {
        vendor: {
            query: GetSingleVendorDocument,
            variables () {
                return {
                    id: this.$route.params.id
                }
            }
        }
    }
})
export default class SingleVendor extends Vue {
    private vendor: Vendor
    private tabs = 0

    getDate(date) {
        return moment(date).format('DD MMM YYYY')
    }
}
</script>
