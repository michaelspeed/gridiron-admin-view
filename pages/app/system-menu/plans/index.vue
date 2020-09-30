<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Vendor Plans</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total">690 Total</span>
                                <div class="ml-5">
                                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..."/>
                                        <div class="input-group-append">
                                            <i class="fas fa-search"></i>
                                        </div>
                                    </div>
                                </div>
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
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">
                                Add Plan
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <ag-grid-vue
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="vendorPlans"
                            colResizeDefault="shift"
                            :animateRows="true"
                            :floatingFilter="true"
                            :pagination="true"
                            @grid-ready="onGridReady"
                            :suppressPaginationPanel="true" :enableRtl="false">
                        </ag-grid-vue>
                    </div>
                </div>
            </div>
        </div>
        <v-bottom-sheet v-model="add" inset transition="scroll-y-transition">
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="add = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Add Vendor Plan</span>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Enter Name</label>
                        <a-input v-model="name"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Price Strategy</label>
                                <v-select
                                    v-model="pricingStrategy"
                                    :items="pricingStrategyItems"
                                    filled
                                ></v-select>
                                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group" v-if="pricingStrategy !== 'COMMISSION'">
                                <label>Tenure Strategy</label>
                                <v-select
                                    v-model="tenureStrategy"
                                    :items="tenureStrategyItems"
                                    filled
                                ></v-select>
                                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group" v-if="pricingStrategy !== 'COMMISSION'">
                        <label>Enter Value</label>
                        <a-input v-model="value"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="p-3 bg-white">
                        <button type="button" class="btn btn-light-primary" @click="onCreatePlan">Create Plan</button>
                    </div>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {CreatePlanDocument, GetAllVendurePlansDocument, VendorPlanPrice, VendorPlanTenure} from '../../../../gql';
    import PlansAction from '../../../../components/plans/plans-action.vue';
    import PlansStatus from '../../../../components/plans/plans-status.vue';

    @Component({
        layout: 'console',
        components: {
            PlansAction,
            PlansStatus
        },
        apollo: {
            vendorPlans: {
                query: GetAllVendurePlansDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class Index extends Vue {
        private name: string = ''
        private value: string = ''
        private add: boolean = false
        private pricingStrategyItems = [VendorPlanPrice.Flat, VendorPlanPrice.Individualcollection, VendorPlanPrice.Commission]
        private tenureStrategyItems = [VendorPlanTenure.Monthly, VendorPlanTenure.Halfyearly, VendorPlanTenure.Annual]
        private pricingStrategy: string = ''
        private tenureStrategy: string = ''
        private allPlans = []

        private limit = 50
        private offset = 0

        private vendorPlans

        // Table
        private gridOptions: any = {};
        private gridApi: any = null;
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true
        };
        private columnDefs = [
            {
                headerName: 'Name',
                filter: true,
                field: 'name'
            },
            {
                headerName: 'Pricing Strategy',
                filter: true,
                field: 'priceStrategy'
            },
            {
                headerName: 'Tenure Strategy',
                filter: true,
                field: 'tenureStrategy'
            },
            {
                headerName: 'Status',
                cellRendererFramework: 'PlansStatus'
            }
        ]

        // Paging
        private last: number = 0
        private first: number = 10
        private after: any = null
        private before: any = null
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }


        mounted() {
            /*this.$apollo.watchQuery({
                query: GetAllVendurePlansDocument,
                variables: {
                    first: this.first,
                    last: this.last === 0 ? undefined : this.last,
                    after: this.after === null ? undefined : this.after,
                    before: this.before === null ? undefined : this.before
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.allPlans = value.data!.vendorPlans
            })*/
        }

        onCreatePlan() {
            if (isNaN(Number(this.value))) {
                this.$notify({
                    title: 'Price must be a number',
                    type: 'error',
                    message: 'Plan price must be a number'
                })
                return
            }
            const loading: any = this.$Message.loading('Action in progress..');
            if (this.pricingStrategy !== 'COMMISSION') {
                this.$apollo.mutate({
                    mutation: CreatePlanDocument,
                    variables: {
                        value: Number(this.value),
                        name: this.name,
                        priceStrategy: this.pricingStrategy,
                        tenureStrategy: this.tenureStrategy
                    }
                }).then(value => {
                    this.name = ''
                    this.value = ''
                    this.pricingStrategy = ''
                    this.tenureStrategy = ''
                    this.$notify({
                        title: 'Plan Creation Successful',
                        type: 'success',
                        message: 'New Plan Created'
                    })
                    this.add = false
                    loading()
                }).catch(error => {
                    loading()
                })
            } else {
                this.$apollo.mutate({
                    mutation: CreatePlanDocument,
                    variables: {
                        value: 0,
                        name: this.name,
                        priceStrategy: this.pricingStrategy,
                        tenureStrategy: 'MONTHLY'
                    }
                }).then(value => {
                    this.name = ''
                    this.value = ''
                    this.pricingStrategy = ''
                    this.tenureStrategy = ''
                    this.$notify({
                        title: 'Plan Creation Successful',
                        type: 'success',
                        message: 'New Plan Created'
                    })
                    this.add = false
                    loading.close()
                }).catch(error => {
                    loading.close()
                })
            }
        }
    }
</script>
