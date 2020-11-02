<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-hover-bg-success btn-text-success btn-hover-text-white border-0 font-weight-bold mr-2"
           v-if="settle.type === 'PROCESSING'"
           @click="createSettle = true"
        >
            Make Settlement
        </a>
        <a href="javascript:;" class="btn btn-sm btn-hover-bg-success btn-text-success btn-hover-text-white border-0 font-weight-bold mr-2"
           v-if="settle.type !== 'PROCESSING'"
        >
            No Action
        </a>
        <v-dialog v-model="createSettle" width="500" transition="scale-transition">
            <v-card>
                <v-card-title class="bg-primary text-white">
                    Make Settlement
                </v-card-title>

                <v-card-text class="mt-5">
                    <div class="form-group">
                        <label>Enter Transaction ID</label>
                        <a-input v-model="transId"></a-input>
                    </div>
                </v-card-text>


                <v-divider></v-divider>
                <v-card-actions v-if="loading">
                    <v-progress-linear
                        color="lime"
                        indeterminate
                        reverse
                    ></v-progress-linear>
                </v-card-actions>
                <v-card-actions v-if="!loading">
                    <v-spacer></v-spacer>
                    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2" @click="updateSettlement">
                        Make Settlement
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2" @click="createSettle = !createSettle">
                        Cancel
                    </a>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Settlements, UpdateSettlementDocument} from "~/gql";

@Component
export default class VendorSettlementAction extends Vue {
    @Prop() settle: Settlements

    private createSettle = false
    private transId = ''
    private loading = false

    updateSettlement() {
        this.loading = true
        this.$apollo.mutate({
            mutation: UpdateSettlementDocument,
            variables: {
                settlementId: this.settle.id,
                transactionId: this.transId
            }
        })
        .then(value => {
            this.loading = true
            this.createSettle = false
        })
        .catch(error => {
            this.$Message.error(error.message)
        })
    }
}
</script>
