<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Tax Rules</h5>
                <button type="button" class="btn btn-primary" @click="createRule = true">Add Tax Rule</button>
            </div>
        </div>
        <v-card>
            <ag-grid-vue

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
                    :suppressPaginationPanel="true" :enableRtl="false">
            </ag-grid-vue>
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-circle justify-content-end">
                    <li class="page-item" v-if="hasPrev"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item" v-if="hasNext"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </v-card>
        <v-bottom-sheet
                v-model="createRule"
                inset
        >
            <v-sheet>
                <v-toolbar flat>
                    <v-btn fab @click="createRule = false"><v-icon>arrow_back</v-icon></v-btn>
                    <v-toolbar-title>Create New Tax Rule</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <div class="p-3 bg-white">
                    <div class="form-group">
                        <label>Enter Rule Name</label>
                        <a-input v-model="name"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary" @click="onCreateRule">Create Rule</button>
                        <button type="button" class="btn btn-danger" @click="createRule = false">Cancel</button>
                    </div>
                </div>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import CreateTaxRule from '../../../../components/store/tax/CreateTaxRule.vue';
    import {
        CreateTaxRuleDocument,
        CreateTaxRuleMutationVariables, GetTaxRulesDocument,
        GetTaxRulesQueryVariables,
        TaxCategory
    } from '../../../../gql';
    import {AgGridVue} from 'ag-grid-vue';
    import TaxRulesActions from '../../../../components/Tax/Rules/TaxRulesActions.vue';
    import ApolloClient from 'apollo-client';

    @Component({
        components: {
            CreateTaxRule,
            'ag-grid-vue': AgGridVue,
            TaxRulesActions
        },
        layout: 'console'
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
                filter: true,
                field: 'node.name'
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

        // apollo
        private apolloClient: any = null

        mounted() {
            this.apolloClient = this.$apollo.getClient()
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
            this.apolloClient?.watchQuery({
                query: GetTaxRulesDocument,
                variables: {
                    first: this.first,
                    iLike: this.search === '' ? undefined: this.search,
                    after: this.after === null ? undefined : this.after
                },
                pollInterval: 3000
            }).subscribe(value => {
                this.allRules = value!.data.taxCategories.edges
                this.after = value!.data.taxCategories.pageInfo!.endCursor
                this.before = value!.data.taxCategories.pageInfo!.startCursor
                this.hasPrev = value!.data.taxCategories.pageInfo!.hasPreviousPage
                this.hasNext = value!.data.taxCategories.pageInfo!.hasNextPage
            })
        }

        onReload() {
            this.$apollo.query({
                query: GetTaxRulesDocument,
                variables: {
                    first: this.first,
                    iLike: this.search === '' ? undefined: this.search,
                    after: this.after === null ? undefined : this.after
                }
            }).then(value => {
                console.log(value)
                this.allRules = value!.data.taxCategories.edges
                this.after = value!.data.taxCategories.pageInfo!.endCursor
                this.before = value!.data.taxCategories.pageInfo!.startCursor
                this.hasPrev = value!.data.taxCategories.pageInfo!.hasPreviousPage
                this.hasNext = value!.data.taxCategories.pageInfo!.hasNextPage
            }).catch(error => {
                console.log(error)
            })
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
