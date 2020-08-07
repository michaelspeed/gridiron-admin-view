<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Tax Rules</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="taxRateAggregate">{{taxRateAggregate.count.id}} Total</span>
                                <div class="ml-5">
                                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..." v-model="iLike"/>
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
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="createRule = true">
                                Add Tax Rule
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
                            :rowData="allRules"
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
                v-model="createRule"
                inset
        >
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="createRule = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Create New Tax Rule</span>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Enter Rule Name</label>
                        <a-input v-model="name" :disabled="!admin"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-light-primary" @click="onCreateRule" :disabled="!admin">Create Rule</button>
                        <button type="button" class="btn btn-light-danger" @click="createRule = false">Cancel</button>
                    </div>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import CreateTaxRule from '../../../../components/store/tax/CreateTaxRule.vue';
    import {
        CreateTaxRuleDocument,
        CreateTaxRuleMutationVariables, GetTaxRateAgreegateDocument, GetTaxRulesDocument,
        GetTaxRulesQueryVariables,
        TaxCategory
    } from '../../../../gql';
    import {AgGridVue} from 'ag-grid-vue';
    import TaxRulesActions from '../../../../components/Tax/Rules/TaxRulesActions.vue';
    import ApolloClient from 'apollo-client';
    import {mapState} from "vuex";

    @Component({
        components: {
            CreateTaxRule,
            'ag-grid-vue': AgGridVue,
            TaxRulesActions
        },
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
            }),
        },
        layout: 'console',
        apollo: {
            taxCategories: {
                query: GetTaxRulesDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset,
                        iLike: `%${this.iLike}%`
                    }
                },
                pollInterval: 3000
            },
            taxRateAggregate: {
                query: GetTaxRateAgreegateDocument
            }
        }
    })
    export default class TaxRules extends Vue {
        private createRule: boolean = false
        private name: string = ""
        private allRules: any[] = []

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'Name',
                filter: false,
                field: 'name'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'TaxRulesActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true
        };

        // pagin
        private last: number = 10
        private first: number = 10
        private after: any = null
        private before: any = null
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

        private limit = 50
        private offset = 0
        private iLike = ''

        private taxCategories
        private taxRateAggregate

        // apollo
        private apolloClient: any = null

        @Watch('taxCategories')
        onTaxCats() {
            if (this.taxCategories) {
                this.allRules = this.taxCategories
            }
        }

        @Watch('taxRateAggregate')
        onTaxCatsAggregate() {
            console.log(this.taxRateAggregate)
        }

        mounted() {

        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        onCreateRule() {
            const loading: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate<{createOneTaxCategory: TaxCategory}, CreateTaxRuleMutationVariables>({
                mutation: CreateTaxRuleDocument,
                variables: {
                    name:this.name
                }
            }).then(value => {
                this.$Message.success('New Tax Rule Created');
                this.name = "";
                this.createRule = false
                loading()
            }).catch(error => {
                loading()
                this.$Message.error(error.message);
            })
        }
    }
</script>
