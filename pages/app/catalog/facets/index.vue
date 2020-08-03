<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Facets</h5>
                <button type="button" class="btn btn-primary btn-sm mr-2 mb-2" @click="add = true">
                    Add Facet
                </button>
            </div>
        </div>
        <v-card style="height: 100%; width: 100%">
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="allFacets"
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
                <v-toolbar-title>Add Facet</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="p-3 bg-white">
                <div class="form-group">
                    <label>Enter Name</label>
                    <a-input v-model="name"></a-input>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                </div>
                <div class="form-group">
                    <label>Enter Code</label>
                    <a-input v-model="code"></a-input>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                </div>
                <div class="form-group">
                    <div class="d-flex justify-content-between">
                        <label>Is Private</label>
                        <a-switch
                                v-model="isPrivate"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </a-switch>
                    </div>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                </div>
            </div>
            <div class="p-3 bg-white">
                <button type="button" class="btn btn-primary" @click="onCreateFacet">Create Facet</button>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {CreateFacetDocument, GetAllFacetsDocument} from '../../../../gql';
    import ApolloClient from 'apollo-client';
    import FacetActions from '../../../../components/facets/facet-actions.vue';

    @Component({
        layout: 'console',
        components: {
            FacetActions
        }
    })
    export default class Index extends Vue {
        private add: boolean = false
        private name = ""
        private code = ""
        private isPrivate = true
        private allFacets: any[] = []

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
                headerName: 'Code',
                filter: true,
                field: 'node.code'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'FacetActions'
            }
        ]

        // Pagins
        private last: number = 0
        private first: number = 10
        private after: any = null
        private before: any = null
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

        // Apollo
        private apolloClient: any = null

        mounted() {
            this.apolloClient = this.$apollo.getClient()
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
            this.apolloClient?.watchQuery({
                query: GetAllFacetsDocument,
                variables: {
                    first: this.first,
                    last: this.last === 0 ? undefined : this.last,
                    after: this.after === null ? undefined : this.after,
                    before: this.before === null ? undefined : this.before
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.allFacets = value.data!.facets.edges
            })
        }

        onCreateFacet() {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: CreateFacetDocument,
                variables: {
                    name: this.name,
                    code: this.code,
                    isPrivate: this.isPrivate
                }
            }).then(value => {
                load()
                this.add = false
                this.$notification.success({
                    description: 'Facet creation Successful',
                    message: 'Facet Created',
                })
            }).catch(error => {
                load()
                this.$notification.error({
                    description: error.message,
                    message: 'Failed'
                })
            })
        }

    }
</script>
