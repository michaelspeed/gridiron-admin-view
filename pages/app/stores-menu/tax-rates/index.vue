<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Tax Rates</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="GetAllTaxCategory">{{GetAllTaxCategory.length}} Total</span>
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
                            <a href="javascript:;" :disabled="!admin" class="btn btn-light-primary font-weight-bold ml-2" @click="createRate = true">
                                Add Tax Rate
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
                            class="ag-theme-material ag-grid-table"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="GetAllTaxRates"
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
        <v-bottom-sheet
                v-model="createRate"
                inset
        >
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="createRate = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Add New Tax Rate</span>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Enter Name</label>
                        <a-input v-model="name" size="large"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Enter Rate</label>
                            <a-input-number size="large" v-model="rate"></a-input-number>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Enabled</label>
                            <a-switch size="large"
                                      v-model="enabled"
                                      active-color="#13ce66"
                                      inactive-color="#ff4949">
                            </a-switch>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Tax Rule</label>
                            <a-select size="large"
                                      style="width: 300px"
                                      v-model="rule"
                                      :filter-option="filterOption"
                                      dropdownClassName="drom"
                                      placeholder="Search Your Tax Rule">
                                <a-select-option
                                    v-for="item in GetAllTaxCategory"
                                    :key="item.id"
                                    :value="item.id">
                                    {{item.name}}
                                </a-select-option>
                            </a-select>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Zone</label>
                            <a-select size="large"
                                      style="width: 300px"
                                      v-model="zone"
                                      :filter-option="filterOption"
                                      dropdownClassName="drom"
                                      placeholder="Search Your Zone">
                                <a-select-option
                                    v-for="item in zones"
                                    :key="item.id"
                                    :value="item.id">
                                    {{item.name}}
                                </a-select-option>
                            </a-select>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-light-primary" @click="onAddTaxRates">Create Rate</button>
                        <button type="button" class="btn btn-light-danger" @click="createRate = false">Cancel</button>
                    </div>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateTaxRateDocument,
        CreateTaxRateMutationVariables,
        CreateTaxRuleDocument, GetAllTaxCategoryDocument, GetAllTaxRatesDocument,
        GetAllZonesDocument, GetTaxRatesDocument,
        GetTaxRulesDocument, SetCategoryOnTaxRateDocument,
        SetCategoryOnTaxRateMutationVariables,
        SetZoneOnTaxRateDocument,
        SetZoneOnTaxRateMutationVariables
    } from '../../../../gql';
    import TaxRatesEnabled from '../../../../components/Tax/Rates/tax-rates-enabled.vue'
    import TaxRatesActions from '../../../../components/Tax/Rates/tax-rates-actions.vue';
    import {mapState} from "vuex";

    @Component({
        layout: 'console',
        components: {
            TaxRatesEnabled,
            TaxRatesActions
        },
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
            }),
        },
        apollo: {
            GetAllTaxRates: {
                query: GetAllTaxRatesDocument,
                pollInterval: 3000
            },
            GetAllTaxCategory: {
                query: GetAllTaxCategoryDocument
            },
            zones: {
                query: GetAllZonesDocument
            },
        }
    })
    export default class TaxRates extends Vue{
        private createRate: boolean = false
        private name: string = ''
        private rate: number = 0
        private enabled: boolean = true
        private allRules: any[] = []
        private allZones: any[] = []
        private zone: string = ''
        private rule: string = ''
        private ruleLoading: boolean = false
        private zoneLoading: boolean = false
        private allRates: any[] = []
        private apolloClient: any = null

        private GetAllTaxRates
        private GetAllTaxCategory

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'Name',
                filter: true,
                field: 'name'
            },
            {
                headerName: 'Category',
                filter: true,
                field: 'category.name'
            },
            {
                headerName: 'Rate (%)',
                filter: true,
                field: 'value'
            },
            {
                headerName: 'Enabled',
                cellRendererFramework: 'TaxRatesEnabled'
            },
            {
                headerName: 'Zone',
                filter: true,
                field: 'zone.name'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'TaxRatesActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true
        };

        // paging
        private first: number = 10
        private last: number = 0
        private after: any = null
        private before: any = null
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

        private zones

        @Watch('zones')
        ongetAllZones() {
            console.log(this.zones)
        }

        mounted() {
            this.loadRules()
            this.loadZones()
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        }

        loadRules(query?: string) {
            console.log(query)
            this.ruleLoading = true
            this.$apollo.query({
                query: GetTaxRulesDocument,
                variables: {
                    first: 20,
                    iLike: `%${query}%`
                }
            }).then(value => {
                console.log(value)
                this.allRules = value!.data.taxCategories.edges
                this.ruleLoading = false
            }).catch(error => {
                console.log(error)
                this.ruleLoading = false
            })
        }

        loadZones(query?) {
            this.zoneLoading = true
            this.$apollo.query({
                query: GetAllZonesDocument
            }).then(value => {
                this.allZones = value.data.zones.edges
                this.zoneLoading = false
                return this.allZones
            }).catch(error => {
                this.zoneLoading = false
            })
        }

        onAddTaxRates() {
            const loading: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: CreateTaxRateDocument,
                variables: {
                    name: this.name,
                    value: this.rate,
                    enabled: this.enabled
                }
            }).then(async (value) => {
                if (this.zone !== "") {
                    await this.$apollo.mutate<{setZoneOnTaxRate: TaxRates}, SetZoneOnTaxRateMutationVariables>({
                        mutation: SetZoneOnTaxRateDocument,
                        variables: {
                            id: value!.data!.createOneTaxRate!.id,
                            zoneID: this.zone
                        }
                    })
                }
                if (this.rule !== "") {
                    await this.$apollo.mutate<{setCategoryOnTaxRate: TaxRates}, SetCategoryOnTaxRateMutationVariables>({
                        mutation: SetCategoryOnTaxRateDocument,
                        variables: {
                            id: value!.data!.createOneTaxRate!.id,
                            categoryId: this.rule
                        }
                    })
                }
                this.$Message.success('Tax Rate added');
                this.name = ""
                this.rate = 0
                this.zone = ""
                this.rule = ""
                this.createRate = false
                loading()
            }).catch(async error => {
                this.$Message.error(error.message);
                loading()
            })
        }
    }
</script>

<style>
.drom {
    z-index: 10000000;
}
</style>
