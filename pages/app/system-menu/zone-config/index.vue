<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Zone Configurations</h5>
                <button type="button" class="btn btn-primary" @click="createZone = true">Add Zone</button>
            </div>
        </div>
        <v-card>
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="allZones"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    :paginationPageSize="paginationPageSize"
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
                v-model="createZone"
                inset
        >
            <v-toolbar flat>
                <v-btn fab @click="createZone = false"><v-icon>arrow_back</v-icon></v-btn>
                <v-toolbar-title>Create Zone</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="p-3 bg-white">
                <div class="form-group">
                    <label>Enter Zone</label>
                    <a-input v-model="zoneName"></a-input>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                </div>
                <div>
                    <button type="button" class="btn btn-primary" @click="onCreateZone">Create Zone</button>
                    <button type="button" class="btn btn-danger" @click="createZone = false">Cancel</button>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {CreateOneZoneDocument, CreateOneZoneMutationVariables, GetAllZonesDocument, Zone} from '../../../../gql';
    import {AgGridVue} from 'ag-grid-vue';
    import ZoneActions from '../../../../components/Zones/ZoneActions.vue';
    import ApolloClient from 'apollo-client';


    @Component({
        layout: 'console',
        components: {
            'ag-grid-vue': AgGridVue,
            ZoneActions
        }
    })
    export default class ZoneConfig extends Vue {
        private allZones: Zone[] = []
        private createZone: boolean = false
        private zoneName: string = '';
        private gridOptions: any = {};
        private gridApi: any = null;
        private showGrid = false;
        private hasPrev: boolean = false;
        private hasNext: boolean = false;
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
                headerName: 'Actions',
                cellRendererFramework: 'ZoneActions'
            },
        ]

        get paginationPageSize() {
            if(this.gridApi) return this.gridApi.paginationGetPageSize();
            else return 50
        }
        get totalPages() {
            if(this.gridApi) return this.gridApi.paginationGetTotalPages();
            else return 0
        }
        get currentPage() {
            if(this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;
            else return 1
        }
        set currentPage(val) {
            this.gridApi.paginationGoToPage(val - 1)
        }

        private apolloClient: any = null

        mounted() {
            this.apolloClient = this.$apollo.getClient()
            this.showGrid = true
            this.gridApi = this.gridOptions.api;
            this.gridApi.sizeColumnsToFit();
            this.apolloClient?.watchQuery({
                query: GetAllZonesDocument,
                pollInterval: 3000
            }).subscribe(value => {
                this.hasNext = value.data.zones.pageInfo.hasNextPage
                this.hasPrev = value.data.zones.pageInfo.hasPreviousPage
                this.allZones = value.data.zones.edges
            })
        }

        onCreateZone() {
            const loading: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate<{createOneZone: Zone}, CreateOneZoneMutationVariables>({
                mutation: CreateOneZoneDocument,
                variables: {
                    zone: this.zoneName
                }
            }).then(value => {
                loading()
                this.$notify({
                    type: 'success',
                    message: 'Zone Created',
                    position: 'bottom-left',
                    title: `${this.zoneName} Created`
                })
                this.zoneName = ''
                this.createZone = false
            }).catch(error => {
                loading()
                this.createZone = false
            })
        }

        queryRunner() {
            this.$apollo.query({
                query: GetAllZonesDocument,
                fetchPolicy: 'network-only'
            }).then(value => {
                this.hasNext = value.data.zones.pageInfo.hasNextPage
                this.hasPrev = value.data.zones.pageInfo.hasPreviousPage
                this.allZones = value.data.zones.edges
            })
        }

    }
</script>
