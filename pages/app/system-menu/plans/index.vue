<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Vendor Plans</h5>
                <button type="button" class="btn btn-primary btn-sm mr-2 mb-2" @click="add = true">
                    Add Plan
                </button>
            </div>
        </div>
        <v-card>
            <ag-grid-vue

                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="allPlans"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    :suppressPaginationPanel="true" :enableRtl="false">
            </ag-grid-vue>
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-circle justify-content-end">
                    <li class="page-item" v-if="hasPrev"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item" v-if="hasNext"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </v-card>
        <v-bottom-sheet v-model="add" inset>
            <v-toolbar flat>
                <v-btn fab @click="add = false"><v-icon>arrow_back</v-icon></v-btn>
                <v-toolbar-title>Add Vendor Plan</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="p-3 bg-white">
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
                                    solo
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
                                    solo
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
            </div>
            <div class="p-3 bg-white">
                <button type="button" class="btn btn-primary" @click="onCreatePlan">Create Plan</button>
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
                field: 'node.name'
            },
            {
                headerName: 'Pricing Strategy',
                filter: true,
                field: 'node.priceStrategy'
            },
            {
                headerName: 'Tenure Strategy',
                filter: true,
                field: 'node.tenureStrategy'
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

        mounted() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
            this.$apollo.watchQuery({
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
                this.allPlans = value.data!.vendorPlans.edges
            })
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
