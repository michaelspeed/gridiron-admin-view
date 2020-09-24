<template>
    <div>
        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.vendor.loading">
            <div class="spinner spinner-primary spinner-lg mr-15"></div>
        </div>
        <div class="card card-custom  card-stretch gutter-b" v-if="!$apollo.queries.vendor.loading">
            <!--begin::Header-->
            <div class="card-header border-0">
                <h3 class="card-title font-weight-bolder text-dark">Settlements</h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-0">
                <!--begin::Item-->
                <div class="mb-6" v-for="settle of vendor.store.settlements">
                    <!--begin::Content-->
                    <div class="d-flex align-items-center flex-grow-1">

                        <!--begin::Section-->
                        <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <!--begin::Info-->
                            <div class="d-flex flex-column align-items-cente py-2 w-75">
                                <!--begin::Title-->
                                <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                    Settlement Created: {{getDate(settle.createdAt)}}
                                </a>
                                <!--end::Title-->

                                <!--begin::Data-->
                                <span class="text-muted font-weight-bold">
                                    {{settle.amount}}
                                </span>
                                <!--end::Data-->
                            </div>
                            <!--end::Info-->

                            <!--begin::Label-->
                            <span class="label label-lg label-light-primary label-inline font-weight-bold py-4">{{settle.type}}</span>
                            <!--end::Label-->
                        </div>
                        <!--end::Section-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="mb-6">
                    <!--begin::Content-->
                    <div class="d-flex align-items-center flex-grow-1">
                        <!--begin::Checkbox-->
                        <label class="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                            <input type="checkbox" value="1">
                            <span></span>
                        </label>
                        <!--end::Checkbox-->

                        <!--begin::Section-->
                        <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <!--begin::Info-->
                            <div class="d-flex flex-column align-items-cente py-2 w-75">
                                <!--begin::Title-->
                                <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                    Group Town Hall Meet-up with showcase
                                </a>
                                <!--end::Title-->

                                <!--begin::Data-->
                                <span class="text-muted font-weight-bold">
                            Due in 2 Days
                        </span>
                                <!--end::Data-->
                            </div>
                            <!--end::Info-->

                            <!--begin::Label-->
                            <span class="label label-lg label-light-warning label-inline font-weight-bold py-4">In Progress</span>
                            <!--end::Label-->
                        </div>
                        <!--end::Section-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="mb-6">
                    <!--begin::Content-->
                    <div class="d-flex align-items-center flex-grow-1">
                        <!--begin::Checkbox-->
                        <label class="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                            <input type="checkbox" value="1">
                            <span></span>
                        </label>
                        <!--end::Checkbox-->

                        <!--begin::Section-->
                        <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <!--begin::Info-->
                            <div class="d-flex flex-column align-items-cente py-2 w-75">
                                <!--begin::Title-->
                                <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                    Next sprint planning and estimations
                                </a>
                                <!--end::Title-->

                                <!--begin::Data-->
                                <span class="text-muted font-weight-bold">
                            Due in 2 Days
                        </span>
                                <!--end::Data-->
                            </div>
                            <!--end::Info-->

                            <!--begin::Label-->
                            <span class="label label-lg label-light-success label-inline font-weight-bold py-4">Success</span>
                            <!--end::Label-->
                        </div>
                        <!--end::Section-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="mb-6">
                    <!--begin::Content-->
                    <div class="d-flex align-items-center flex-grow-1">
                        <!--begin::Checkbox-->
                        <label class="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                            <input type="checkbox" value="1">
                            <span></span>
                        </label>
                        <!--end::Checkbox-->

                        <!--begin::Section-->
                        <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <!--begin::Info-->
                            <div class="d-flex flex-column align-items-cente py-2 w-75">
                                <!--begin::Title-->
                                <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                    Sprint delivery and project deployment
                                </a>
                                <!--end::Title-->

                                <!--begin::Data-->
                                <span class="text-muted font-weight-bold">
                            Due in 2 Days
                        </span>
                                <!--end::Data-->
                            </div>
                            <!--end::Info-->

                            <!--begin::Label-->
                            <span class="label label-lg label-light-danger label-inline font-weight-bold py-4">Rejected</span>
                            <!--end::Label-->
                        </div>
                        <!--end::Section-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end: Item-->

                <!--begin: Item-->
                <div class="">
                    <!--begin::Content-->
                    <div class="d-flex align-items-center flex-grow-1">
                        <!--begin::Checkbox-->
                        <label class="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                            <input type="checkbox" value="1">
                            <span></span>
                        </label>
                        <!--end::Checkbox-->

                        <!--begin::Section-->
                        <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <!--begin::Info-->
                            <div class="d-flex flex-column align-items-cente py-2 w-75">
                                <!--begin::Title-->
                                <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                    Data analytics research showcase
                                </a>
                                <!--end::Title-->

                                <!--begin::Data-->
                                <span class="text-muted font-weight-bold">
                            Due in 2 Days
                        </span>
                                <!--end::Data-->
                            </div>
                            <!--end::Info-->

                            <!--begin::Label-->
                            <span class="label label-lg label-light-warning label-inline font-weight-bold py-4">In Progress</span>
                            <!--end::Label-->
                        </div>
                        <!--end::Section-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end: Item-->
            </div>
            <!--end: Card Body-->
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {GetVendorSettlementsDocument, Vendor} from "~/gql";
import moment from "moment";

@Component({
    apollo: {
        vendor: {
            query: GetVendorSettlementsDocument,
            variables() {
                return {
                    id: this.id
                }
            }
        }
    }
})
export default class VendorSettlements extends Vue {
    @Prop() id: string
    private vendor: Vendor

    getDate(date) {
        return moment(date).format('DD MMM YYYY')
    }
}
</script>
