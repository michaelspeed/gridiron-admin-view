<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Stock Management</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <!--<div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total">690 Total</span>
                                <div class="ml-5">
                                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..."/>
                                        <div class="input-group-append">
                                            <i class="fas fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>-->
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
                <v-sheet elevation="4">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.getStockKeepingByStore.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <div v-if="!$apollo.queries.getStockKeepingByStore.loading">
                            <ag-grid-vue
                                style="height: 100vh"
                                ref="agGridTable"
                                :gridOptions="gridOptions"
                                class="ag-theme-material ag-grid-table"
                                :columnDefs="columnDefs"
                                :defaultColDef="defaultColDef"
                                :rowData="getStockKeepingByStore"
                                colResizeDefault="shift"
                                :animateRows="true"
                                :floatingFilter="true"
                                :pagination="true"
                                @grid-ready="onGridReady"
                                :suppressPaginationPanel="true" :enableRtl="false">
                            </ag-grid-vue>
                        </div>
                    </div>
                </v-sheet>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {GetStockKeepingByStoreDocument} from '../../../../gql';
    import StockActions from '../../../../components/stocks/stock-actions.vue';

    @Component({
        layout: 'console',
        apollo: {
            getStockKeepingByStore: {
                query: GetStockKeepingByStoreDocument,
                pollInterval: 3000
            }
        },
        components: {
            StockActions
        }
    })
    export default class StocksManagement extends Vue {
        private getStockKeepingByStore

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'Product Variant',
                filter: true,
                field: 'variant.name'
            },
            {
                headerName: 'Quantity',
                filter: true,
                field: 'quantity'
            },
            {
                headerName: 'Threshold',
                filter: false,
                field: 'threshold'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'StockActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filter: false
        };

        mounted() {
            this.gridApi = this.gridOptions!.api;
            if (this.gridApi !== undefined) {
                this.gridApi!.sizeColumnsToFit();
            }
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

    }
</script>
