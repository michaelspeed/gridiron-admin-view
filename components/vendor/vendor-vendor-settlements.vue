<template>
    <div>
        <div class="card card-custom gutter-b">
            <!--begin::Header-->
            <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-dark">Settlements</span>
                    <span class="text-muted mt-3 font-weight-bold font-size-sm">Balance: {{vendorStore.balance.balance}} INR</span>
                </h3>
                <div class="card-toolbar">
                    <a href="#" class="btn btn-success font-weight-bolder font-size-sm" @click="create = true">
                        Add New Settlement
                    </a>
                </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body py-0">
                <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.vendor.loading">
                    <div class="spinner spinner-primary spinner-lg mr-15"></div>
                </div>
                <!--begin::Table-->
                <div v-if="!$apollo.queries.vendor.loading">
                    <div class="table-responsive">
                        <table class="table table-head-custom table-vertical-center" id="kt_advance_table_widget_1">
                            <thead>
                            <tr class="text-left">
                                <th style="min-width: 200px">Date</th>
                                <th style="min-width: 150px">Status</th>
                                <th style="min-width: 150px">progress</th>
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
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!--end::Table-->
            </div>
            <!--end::Body-->
        </div>
        <v-dialog v-model="create" width="500">
            <v-card>
                <v-card-title class="bg-primary text-white">
                    Create Settlement
                </v-card-title>
                <v-progress-linear
                    color="lime"
                    indeterminate
                    reverse
                    v-if="creating"
                ></v-progress-linear>

                <v-card-text class="mt-5 font-size-h3-md">
                    Create Settlement for {{vendorStore.balance.balance}} INR ?
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2" v-if="!creating" @click="onCreateSettlement">
                        Create Settlement
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2" @click="create = !create" v-if="!creating">
                        Cancel
                    </a>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {mapState} from "vuex";
import {CreateSettlementDocument, GetVendorSettlementsDocument, Settlements, Vendor} from "~/gql";
import moment from "moment";
import ProgressIndicator from "~/components/progress/progress-indicator.vue";

@Component({
    components: {
        ProgressIndicator
    },
    computed: {
        ...mapState({
            admin: (store: any) => store.admin.administrator,
            vendors: (store: any) => store.admin.vendor,
            vendorStore: (store: any) => store.admin.vendorStore,
        })
    },
    apollo: {
        vendor: {
            query: GetVendorSettlementsDocument,
            variables() {
                return {
                    id: this.id,
                    limit: 10,
                    offset: 0
                }
            }
        }
    }
})
export default class VendorVendorSettlements extends Vue {
    @Prop() id: string

    private create = false
    private creating = false

    private vendor: Vendor

    private limit = 10
    private offset = 0

    onCreateSettlement() {
        this.creating = true
        this.$apollo.mutate({
            mutation: CreateSettlementDocument,
            variables: {
                storeId: this.id
            }
        }).then(value => {
            this.create = false
            this.creating = false
            this.$Message.success('Settlement Created')
        }).catch(error => {
            this.creating = false
            this.$Message.error(error.message)
        })
    }

    getDate(date){
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
