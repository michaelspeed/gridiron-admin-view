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
        <div class="row">
            <div class="col-xl-4" v-for="method of GetAllPaymentMethods">
                <!--begin::Stats Widget 14-->
                <a href="#" class="card card-custom bg-hover-state-primary card-stretch gutter-b" :class="{'bg-primary': method.enabled, 'bg-danger': !method.enabled}">
                    <!--begin::Body-->
                    <div class="card-body">
                        <i class="fab fa-keycdn"></i>
                        <div class="text-inverse-primary font-weight-bolder font-size-h5 mb-2 mt-5">{{method.api}}</div>
                        <div class="font-weight-bold text-inverse-primary font-size-sm">{{method.secretKey}}</div>
                        <div class="mt-3">
                            <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2" v-if="method.enabled"
                               @click="onDisable(method.id)"
                            >
                                Disable
                            </a>
                            <a href="javascript:;" class="btn btn-sm btn-light-success font-weight-bold mr-2" v-if="!method.enabled"
                               @click="onEnable(method.id)"
                            >
                                Enable
                            </a>
                        </div>
                    </div>
                    <!--end::Body-->
                </a>
                <!--end::Stats Widget 14-->
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
                    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2"
                       @click="onCreatePaymentMethod"
                    >
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
    import {
        CreatePaymentMethodDocument,
        GetAllPaymentMethodsDocument,
        PaymentMethod,
        UpdatePaymentMethodDocument
    } from "~/gql";

    @Component({
        apollo: {
            GetAllPaymentMethods:{
                query: GetAllPaymentMethodsDocument,
                pollInterval: 3000
            }
        }
    })
    export default class PaymentIntegration extends Vue {
        private addnew = false
        private api = ''
        private secret = ''

        private GetAllPaymentMethods: PaymentMethod[]

        onCreatePaymentMethod() {
            this.$Message.loading('Action in progress ...')
            this.$apollo.mutate({
                mutation: CreatePaymentMethodDocument,
                variables: {
                    api: this.api,
                    secret: this.secret
                }
            })
            .then(value => {
                this.$Message.success('New Payment method created')
                this.addnew = false
            })
            .catch(error => {
                this.$Message.error(error.message)
            })
        }

        onEnable(id) {
            this.$Message.loading('Action in progress ...')
            this.$apollo.mutate({
                mutation: UpdatePaymentMethodDocument,
                variables: {
                    modeId: id,
                    enabled: true
                }
            })
            .then(value => {
                this.$Message.success('Payment Method Enabled')
            })
            .catch(error => this.$Message.error(error.message))
        }
        onDisable(id) {
            this.$Message.loading('Action in progress ...')
            this.$apollo.mutate({
                mutation: UpdatePaymentMethodDocument,
                variables: {
                    modeId: id,
                    enabled: false
                }
            })
            .then(value => {
                this.$Message.success('Payment Method Enabled')
            })
            .catch(error => this.$Message.error(error.message))
        }
    }
</script>
