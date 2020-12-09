<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Transactions</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"></span>
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

                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-sheet elevation="4">
                    <div class="card-body">
                        <ag-grid-vue
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="payments"
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
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {GetAllTransactionsDocument, Payment} from "~/gql";
    import moment from "moment";

    @Component({
        layout: 'console',
        apollo:{
            payments: {
                query: GetAllTransactionsDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class Transaction extends Vue {
        private limit = 50
        private offset = 0

        private payments: Payment[]

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
                filter: true,
                field: 'id'
            },
            {
                headerName: 'Created At',
                valueFormatter: this.onRenderDate
            },
            {
                headerName: 'Status',
                valueFormatter: this.getStatus
            },
            {
                headerName: 'Amount',
                valueFormatter: this.getAmount
            },
            {
                headerName: 'Transaction Id',
                filter: true,
                field: 'transactionId'
            },
        ]

        getAmount(data) {
            return `${data.data.amount} INR`
        }

        getStatus(data) {
            if (data.data.errorMessage) {
                return 'Failed'
            } else {
                return 'Success'
            }
        }

        onRenderDate(data) {
            return moment(data.data.createdAt).format('DD MMM YYYY')
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }


    }
</script>
