<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Shipment</h5>
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
                <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.settlements.loading">
                    <div class="spinner spinner-primary spinner-lg mr-15"></div>
                </div>
                <div class="card">
                    <div class="card-body pt-0" v-if="!$apollo.queries.settlements.loading">
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
                                <tr v-for="settle of settlements" :key="settle.id">
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
                                        <VendorSettlementAction :settle="settle" :header="true"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {GetAllSettlementDocument, Settlements} from "~/gql";
    import moment from "moment";
    import ProgressIndicator from "~/components/progress/progress-indicator.vue";
    import VendorSettlementAction from "~/components/vendor/vendor-settlement-action.vue";

    @Component({
        layout: 'console',
        components:{
            ProgressIndicator,
            VendorSettlementAction
        },
        apollo: {
            settlements: {
                query: GetAllSettlementDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset
                    }
                }
            }
        }
    })
    export default class SettlementsView extends Vue {
        private limit = 50
        private offset = 0

        private settlements: Settlements[]

        getDate(date) {
            return moment(date).format('DD MMM YYYY')
        }

        calculatePercentage(settle: Settlements) {
            if (settle.type === 'PROCESSING') {
                return 50
            } else {
                return 100
            }
        }

    }
</script>
