<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Zone Configurations</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="zoneAggregate">{{zoneAggregate.count.id}} Total</span>
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
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="createZone = true">
                                Add Zone
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100"
                             v-if="$apollo.queries.zones.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <ag-grid-vue
                            v-if="!$apollo.queries.zones.loading"
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material "
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="allZones"
                            colResizeDefault="shift"
                            :animateRows="true"
                            :floatingFilter="true"
                            :pagination="true"
                            @grid-ready="onGridReady"
                            :paginationPageSize="paginationPageSize"
                            :suppressPaginationPanel="true" :enableRtl="false">
                        </ag-grid-vue>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination pagination-circle justify-content-end">
                                <li class="page-item" v-if="hasPrev"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item" v-if="hasNext"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <v-bottom-sheet
                v-model="createZone"
                inset
        >
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="createZone = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Create Zone</span>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Enter Zone</label>
                        <a-input v-model="zoneName"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-light-primary" @click="onCreateZone">Create Zone</button>
                        <button type="button" class="btn btn-light-danger" @click="createZone = false">Cancel</button>
                    </div>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateOneZoneDocument,
        CreateOneZoneMutationVariables,
        GetAllZonesDocument,
        GetZoneAgreegateDocument,
        Zone
    } from '../../../../gql';
    import {AgGridVue} from 'ag-grid-vue';
    import ZoneActions from '../../../../components/Zones/ZoneActions.vue';
    import ApolloClient from 'apollo-client';


    @Component({
        layout: 'console',
        components: {
            'ag-grid-vue': AgGridVue,
            ZoneActions
        },
        apollo: {
            zoneAggregate: {
                query: GetZoneAgreegateDocument
            },
            zones: {
                query: GetAllZonesDocument,
                pollInterval: 3000
            }
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

        private zones

        private zoneAggregate

        private columnDefs = [
            {
                headerName: 'Name',
                filter: true,
                field: 'name'
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

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        @Watch('zones')
        onGetAllZone() {
            this.allZones = this.zones
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
                this.allZones = value.data.zones
            })
        }

    }
</script>
