<template>
    <div style="width: 100%">
        <div class="row mt-10">
            <div class="d-flex justify-content-between align-items-center" style="width: 100%">
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Payment Configuration</h5>
                <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="addnew = true">
                    Add New Payment Config
                </a>
            </div>
        </div>
        <v-dialog v-model="addnew" width="500">
            <v-card>
                <v-card-title class="bg-primary text-white">
                    Payment API (Razorpay)
                </v-card-title>

                <v-card-text class="mt-5">
                    <div class="form-group">
                        <label>Api Key</label>
                        <a-input v-model="api"></a-input>
                    </div>
                    <div class="form-group">
                        <label>Api Secret Key</label>
                        <a-input v-model="secret"></a-input>
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2">
                        Create Api Key
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2" @click="addnew = !addnew">
                        Cancel
                    </a>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class PaymentIntegration extends Vue {
        private addnew = false
        private api = ''
        private secret = ''
    }
</script>
