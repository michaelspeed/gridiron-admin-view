<template>
    <div>
        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.vendor.loading">
            <div class="spinner spinner-primary spinner-lg mr-15"></div>
        </div>
        <div class="card card-custom  card-stretch gutter-b" v-if="!$apollo.queries.vendor.loading">
            <!--begin::Header-->
            <div class="card-header border-0">
                <h3 class="card-title font-weight-bolder text-dark">Zips</h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-0">
                <!--begin::Item-->
                <div class="mb-6" v-for="zip of vendor.store.zips">
                    <!--begin::Content-->
                    <div class="d-flex align-items-center flex-grow-1">

                        <!--begin::Section-->
                        <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <!--begin::Info-->
                            <div class="d-flex flex-column align-items-cente py-2 w-75">
                                <!--begin::Title-->
                                <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                    {{zip.code}}
                                </a>
                                <!--end::Title-->

                                <!--begin::Data-->
                                <span class="text-muted font-weight-bold">
                                    {{zip.name}}
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
            <!--end: Card Body-->
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {GetVendorSettlementsDocument, GetVendorZipsDocument, Vendor} from "~/gql";
import moment from "moment";

@Component({
    apollo:{
        vendor: {
            query: GetVendorZipsDocument,
            variables() {
                return {
                    id: this.id
                }
            }
        }
    }
})
export default class VendorZips extends Vue {
    @Prop() id: string
    private vendor: Vendor

    getDate(date) {
        return moment(date).format('DD MMM YYYY')
    }
}
</script>
