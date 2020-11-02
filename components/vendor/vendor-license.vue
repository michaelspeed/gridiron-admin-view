<template>
    <div>
        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.vendor.loading">
            <div class="spinner spinner-danger spinner-lg mr-15"></div>
        </div>
        <div class="card card-custom card-stretch gutter-b" v-if="!$apollo.queries.vendor.loading">
            <div class="card-body d-flex p-0">
                <div class="flex-grow-1 bg-danger p-8 card-rounded flex-grow-1 bgi-no-repeat" style="background-position: calc(100% + 0.5rem) bottom; background-size: auto 70%; background-image: url(/media/svg/humans/custom-3.svg)">

                    <h4 class="text-inverse-danger mt-2 font-weight-bolder">Licence Info</h4>

                    <p class="text-inverse-danger my-6">
                        {{vendor.license.plans.name}}
                        <br/>
                        Ends On: {{getDate(vendor.license.tenureEnd)}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {GetVendorLicenseDocument, Vendor, VendorPlans} from "~/gql";
import moment from "moment";

@Component({
    apollo:{
        vendor:{
            query: GetVendorLicenseDocument,
            variables() {
                return {
                    id: this.id
                }
            }
        }
    }
})
export default class VendorLicense extends Vue {
    @Prop() id: string

    private vendor: Vendor

    @Watch('vendor')
    onChangeVendor() {
        console.log(this.vendor)
    }

    getDate(date) {
        return moment(date).format('DD MMM YYYY')
    }
}
</script>
