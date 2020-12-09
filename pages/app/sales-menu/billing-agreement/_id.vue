<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Billing Agreements</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">

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

                            <!--begin::Button-->

                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.GetBillingAgreement.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6" v-if="!$apollo.queries.GetBillingAgreement.loading">
                                <div class="card card-custom gutter-b">
                                    <div class="card-body d-flex p-0 card-rounded">
                                        <div class="flex-grow-1 p-10 card-rounded flex-grow-1 bgi-no-repeat" style="background-color: #663259; background-position: calc(100% + 0.5rem) bottom; background-size: auto 75%; background-image: url(/media/svg/humans/custom-4.svg)">
                                            <h4 class="text-inverse-danger mt-2 font-weight-bolder">Billing Agreement Details: {{getDate()}}</h4>
                                            <h6 class="text-inverse-danger mt-2 font-weight-bolder" v-if="GetBillingAgreement.collection">Collection: {{GetBillingAgreement.collection.name}}</h6>
                                            <div class="mt-5">
                                                <div class="d-flex justify-content-between">
                                                    <span class="text-white font-size-h3">STATE</span>
                                                    <span class="text-white font-size-h3 font-weight-boldest">{{GetBillingAgreement.state}}</span>
                                                </div>
                                                <div class="d-flex justify-content-between">

                                                    <span class="text-white font-size-h3">TYPE</span>
                                                    <span class="text-white font-size-h3 font-weight-boldest">{{GetBillingAgreement.type}}</span>
                                                </div>
                                                <div class="d-flex justify-content-between">

                                                    <span class="text-white font-size-h3">VALUE</span>
                                                    <span class="text-white font-size-h3 font-weight-boldest">{{GetBillingAgreement.value}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" v-if="!$apollo.queries.GetBillingRequestForAgreement.loading">
                                <div class="card">
                                    <div class="card-header border-0 py-5 justify-content-between d-flex">
                                        <h3 class="card-title align-items-start flex-column">
                                            <span class="card-label font-weight-bolder text-dark">Billing Agreement Requests</span>
                                        </h3>
                                        <div class="card-toolbar">
                                            <v-btn color="primary" @click="createRequest = true">Create Request</v-btn>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="card m-3" v-for="request of GetBillingRequestForAgreement" :key="request.id">
                                            <div class="air__g6 pt-3">
                                                <div class="air__g6__status" :class="{'bg-danger': request.state === 'REJECTED', 'bg-success': request.state === 'APPROVED', 'bg-dark': request.state === 'PENDING'}"></div>
                                                <div class="d-flex flex-nowrap align-items-center pb-3 pl-4 pr-4">
                                                    <div class="mr-auto">
                                                        <div class="text-uppercase font-size-h3 text-dark">{{request.value}} %</div>
                                                    </div>
                                                    <div class="ml-1 text-danger">
                                                        <span class="badge timeline-badge-primary">{{request.state}}</span>
                                                    </div>
                                                </div>
                                                <div class="py-3 bg-gray-1 pl-4 pr-4">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="text-muted">Updated On: <span class="text-primary">{{getUpdateDate(request.updatedAt)}}</span></span>
                                                        <div v-if="getAdministrator() && request.state === 'PENDING'">
                                                            <a href="javascript:;"
                                                               @click="onUpdateBilliReq('APPROVED', request.id)"
                                                               class="btn btn-light-success btn-sm font-weight-bolder font-size-sm"
                                                               :class="{'spinner spinner-darker-success spinner-left' : loading}"
                                                            >Accept</a>
                                                            <a href="javascript:;"
                                                               @click="onUpdateBilliReq('REJECTED', request.id)"
                                                               class="btn btn-light-danger btn-sm font-weight-bolder font-size-sm"
                                                               :class="{'spinner spinner-darker-success spinner-left' : loading}"
                                                            >Reject</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-bottom-sheet inset v-model="createRequest" transition="scroll-y-reverse-transition">
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="createRequest = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Create Billing Request</span>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Enter Value Request</label>
                                <a-input v-model="value"></a-input>
                                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                            </div>
                        </div>
                        <div class="col-md-6"></div>
                    </div>
                    <div class="row">
                        <div class="p-3 bg-white">
                            <button type="button" class="btn btn-light-primary" :class="{'spinner spinner-darker-success spinner-left' : loading}" @click="onCreateBillingRequest">Add Billing Request</button>
                        </div>
                    </div>
                </div>
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
                },
                pollInterval: 3000
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

        private loading = false

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
            const load : any = this.$Message.loading('Action in progress ...')
            this.loading = true
            this.$apollo.mutate({
                mutation: UpdateBillingRequestDocument,
                variables: {
                    id,
                    value
                }
            }).then(value1 => {
                load()
                this.loading = false
                this.$Message.success('Billing Agreement Request Updated')
            }).catch(error => {
                load()
                this.loading = false
                this.$Message.error(error.message)
            })
        }

        onCreateBillingRequest() {
            const load : any = this.$Message.loading('Action in progress ...')
            this.loading = true
            this.$apollo.mutate({
                mutation: CreateBillingRequestDocument,
                variables: {
                    id: this.$route.params.id,
                    value: this.value
                }
            }).then(value => {
                load()
                this.$Message.success('Billing Agreement Request has been submitted')
                this.createRequest = false
                this.loading = false
            }).catch(error => {
                load()
                this.loading = false
                this.$Message.error(error.message)
            })
        }

        @Watch('GetBillingAgreement')
        onBillingChange() {
            console.log(this.GetBillingAgreement)
        }
    }
</script>
