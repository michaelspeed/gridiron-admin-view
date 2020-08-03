<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Billing Agreements: </h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" v-if="GetBillingAgreement !== undefined">
                <div class="card air__utils__cardMarked air__utils__cardMarked--primary">
                    <div class="card-header card-header-flex">
                        <div class="d-flex flex-column justify-content-center">
                            <h5 class="mb-0">Billing Agreement Details</h5>
                        </div>
                        <div class="ml-auto d-flex flex-column justify-content-center">
                            <h5>{{getDate()}}</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="table-responsive">
                                <table class="table table-borderless text-gray-6 mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Status</td>
                                        <td class="text-right"><strong>{{GetBillingAgreement.state}}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td class="text-right"><strong>{{GetBillingAgreement.type}}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Value</td>
                                        <td class="text-right"><strong>{{GetBillingAgreement.value}}</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card air__utils__cardMarked air__utils__cardMarked--primary">
                    <div class="card-header card-header-flex">
                        <div class="d-flex flex-column justify-content-center">
                            <h5 class="mb-0">Billing Agreement Requests</h5>
                        </div>
                        <div class="ml-auto d-flex flex-column justify-content-center">
                            <v-btn @click="createRequest = true" small color="secondary">Create Request</v-btn>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card" v-for="request of GetBillingRequestForAgreement" :key="request.id">
                            <div class="air__g6 pt-3">
                                <div class="air__g6__status" :class="{'bg-danger': request.state === 'REJECTED', 'bg-success': request.state === 'APPROVED', 'bg-dark': request.state === 'PENDING'}"></div>
                                <div class="d-flex flex-nowrap align-items-center pb-3 pl-4 pr-4">
                                    <div class="mr-auto">
                                        <div class="text-uppercase font-weight-bold font-size-24 text-dark">{{request.value}} %</div>
                                    </div>
                                    <div class="ml-1 text-danger">
                                        <span class="badge badge-primary">{{request.state}}</span>
                                    </div>
                                </div>
                                <div class="py-3 bg-gray-1 pl-4 pr-4">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Updated On: {{getUpdateDate(request.updatedAt)}}</span>
                                        <div v-if="getAdministrator() && request.state === 'PENDING'">
                                            <v-btn title small color="primary" @click="onUpdateBilliReq('APPROVED', request.id)">Accept</v-btn>
                                            <v-btn title small color="error" @click="onUpdateBilliReq('REJECTED', request.id)">Reject</v-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-bottom-sheet inset v-model="createRequest">
            <v-toolbar flat>
                <v-btn fab @click="createRequest = false"><v-icon>arrow_back</v-icon></v-btn>
                <v-toolbar-title style="margin-left: 10px">Create Billing Request</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="p-3 bg-white">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Enter Value Request</label>
                            <el-input v-model="value"></el-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-6"></div>
                </div>
            </div>
            <div class="p-3 bg-white">
                <button type="button" class="btn btn-primary" @click="onCreateBillingRequest">Add Billing Request</button>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        BillingAgreementRequest,
        BillingAgreementState,
        CreateBillingRequestDocument,
        GetBillingAgreementDocument,
        GetBillingRequestForAgreementDocument,
        UpdateBillingRequestDocument
    } from '../../../../gql';
    import moment from 'moment';

    @Component({
        layout: 'console',
        apollo: {
            GetBillingAgreement: {
                query: GetBillingAgreementDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                }
            },
            GetBillingRequestForAgreement: {
                query: GetBillingRequestForAgreementDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class BillingAgreementView extends Vue {
        private GetBillingAgreement
        private GetBillingRequestForAgreement
        private createRequest = false
        private value = ''

        getAdministrator() {
            return this.$store.state.admin.administrator !== null && this.$store.state.admin.administrator !== undefined;
        }

        getDate() {
            return moment(this.GetBillingAgreement.updatedAt).format('DD-MM-YYYY')
        }

        getUpdateDate(date){
            return moment(date).format('DD MMM YYYY')
        }

        onUpdateBilliReq(value, id) {
            this.$apollo.mutate({
                mutation: UpdateBillingRequestDocument,
                variables: {
                    id,
                    value
                }
            }).then(value1 => {
                this.$notify({
                    message: 'Billing Agreement Request Updated',
                    title: 'Billing Agreement Request',
                    type: 'success'
                })
            }).catch(error => {
                this.$notify({
                    message: error.message,
                    title: 'Billing Agreement Request Error',
                    type: 'error'
                })
            })
        }

        onCreateBillingRequest() {
            this.$apollo.mutate({
                mutation: CreateBillingRequestDocument,
                variables: {
                    id: this.$route.params.id,
                    value: this.value
                }
            }).then(value => {
                this.$notify({
                    message: 'Billing Agreement Request has been submitted',
                    title: 'Billing Agreement Request',
                    type: 'success'
                })
                this.createRequest = false
            }).catch(error => {
                this.$notify({
                    message: error.message,
                    title: 'Billing Agreement Request Error',
                    type: 'error'
                })
            })
        }

        @Watch('GetBillingAgreement')
        onBillingChange() {
            console.log(this.GetBillingAgreement)
        }
    }
</script>
