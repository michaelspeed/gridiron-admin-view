<template>
    <div>
        <v-sheet elevation="4">
            <div class="d-flex justify-content-center align-items-center m-20 w-100"
                 v-if="$apollo.queries.invoices.loading">
                <div class="spinner spinner-primary spinner-lg mr-15"></div>
            </div>
            <div class="card-body">
                <ag-grid-vue
                    v-if="!$apollo.queries.invoices.loading"
                    style="height: 100vh"
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="invoices"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    @grid-ready="onGridReady"
                    :suppressPaginationPanel="true" :enableRtl="false">
                </ag-grid-vue>
            </div>
        </v-sheet>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {GetMasterInvoicesDocument, GetStoreInvoicesDocument} from "~/gql";
import {mapState} from "vuex";
import moment from "moment";
import InvoiceActions from "~/components/invoices/invoice-actions.vue";

@Component({
    components: {
        InvoiceActions
    },
    computed: {
        ...mapState({
            admin: (store: any) => store.admin.administrator,
            vendor: (store: any) => store.admin.vendor,
            vendorStore: (store: any) => store.admin.vendorStore,
        }),
    },
    apollo: {
        invoices: {
            query: GetMasterInvoicesDocument,
            variables() {
                return {
                    limit: this.limit,
                    offset: this.offset
                }
            }
        }
    }
})
export default class AdminInvoice extends Vue {
    private limit = 10
    private offset = 0
    private invoices

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
            headerName: 'Id',
            filter: false,
            field: 'id'
        },
        {
            headerName: 'Order Line',
            filter: false,
            field: 'line.id'
        },
        {
            headerName: 'amount',
            filter: false,
            field: 'total'
        },
        {
            headerName: 'type',
            filter: false,
            field: 'type'
        },
        {
            headerName: 'Created On',
            valueFormatter: this.onRenderDate
        },
        {
            headerName: 'Actions',
            cellRendererFramework: 'InvoiceActions'
        }
    ]

    onRenderDate(data) {
        console.log(data)
        return moment(data.data.createdAt).format('DD MMM YYYY')
    }

    onGridReady() {
        this.gridApi = this.gridOptions!.api;
        this.gridApi!.sizeColumnsToFit();
    }
}
</script>
