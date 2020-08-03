<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Stock Management</h5>
            </div>
        </div>
        <div v-if="$apollo.queries.getStockKeepingByStore.loading">
            <div class="d-flex justify-content-center align-items-center">
                <v-progress-circular
                        indeterminate
                        color="#161537"
                ></v-progress-circular>
            </div>
        </div>
        <v-card v-if="!$apollo.queries.getStockKeepingByStore.loading">
            <ag-grid-vue
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
        </v-card>
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
