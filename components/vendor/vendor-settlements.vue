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
                <div class="table-responsive">
                    <table class="table table-head-custom table-vertical-center" id="kt_advance_table_widget_1">
                        <thead>
                        <tr class="text-left">
                            <th style="min-width: 200px">Date</th>
                            <th style="min-width: 150px">Status</th>
                            <th style="min-width: 150px">progress</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="settle of vendor.store.settlements" :key="settle.id">
                            <td class="pl-0">
                                <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{{getDate(settle.createdAt)}}</a>
                                <span class="text-muted font-weight-bold text-muted d-block">{{settle.amount}} INR</span>
                            </td>
                            <td>
                            <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {{settle.type}}
                            </span>
                            </td>
                            <td>
                                <ProgressIndicator :percentage="calculatePercentage(settle)"/>
                            </td>
                            <td>
                                <VendorSettlementAction :settle="settle"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--end: Card Body-->
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {GetVendorSettlementsDocument, Settlements, Vendor} from "~/gql";
import moment from "moment";
import ProgressIndicator from "~/components/progress/progress-indicator.vue";
import VendorSettlementAction from "~/components/vendor/vendor-settlement-action.vue";

@Component({
    apollo: {
        vendor: {
            query: GetVendorSettlementsDocument,
            variables() {
                return {
                    id: this.id,
                    limit: 10,
                    offset: 0
                }
            },
            pollInterval: 3000
        }
    },
    components: {
        ProgressIndicator,
        VendorSettlementAction
    }
})
export default class VendorSettlements extends Vue {
    @Prop() id: string
    private vendor: Vendor

    private limit = 10
    private offset = 0

    getDate(date) {
        return moment(date).format('DD MMM YYYY')
    }

    calculatePercentage(settlement: Settlements) {
        if (settlement.type === 'PROCESSING') {
            return 50
        } else {
            return 100
        }
    }
}
</script>
