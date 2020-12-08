<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Orders</h5>
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

                            <!--begin::Button-->
                            <a href="javascript:;" v-if="admin" class="btn btn-light-primary font-weight-bold ml-2" @click="$router.push('/app/sales-menu/orders/createorder')">
                                Create Order
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-sheet elevation="4" v-if="!vendorStore">
                    <div class="d-flex justify-content-center align-items-center m-20 w-100"
                         v-if="$apollo.queries.orders.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body">
                        <ag-grid-vue
                            v-if="!$apollo.queries.orders.loading"
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="orders"
                            colResizeDefault="shift"
                            :animateRows="true"
                            :floatingFilter="true"
                            :pagination="true"
                            @grid-ready="onGridReady"
                            :suppressPaginationPanel="true" :enableRtl="false">
                        </ag-grid-vue>
                    </div>
                </v-sheet>
                <v-sheet elevation="4" v-if="vendorStore">
                    <div class="d-flex justify-content-center align-items-center m-20 w-100"
                         v-if="$apollo.queries.orderLines.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body">
                        <ag-grid-vue
                            v-if="!$apollo.queries.orderLines.loading"
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="secondColumnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="orderLines"
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

    import {Component, Vue} from 'vue-property-decorator';
    import {mapState} from "vuex";
    import {GetOrderLinesDocument, SearchAllOrdersDocument} from "~/gql";
    import moment from "moment";
    import OrderActions from "~/components/order/OrderActions.vue";
    import OrderVendorActions from "~/components/order/OrderVendroActions.vue";
    import OrderProgress from "~/components/order/order-progress.vue";

    @Component({
        layout: 'console',
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
                vendorStore: (store: any) => store.admin.vendorStore,
            }),
        },
        components: {
            OrderActions,
            OrderVendorActions,
            OrderProgress
        },
        apollo: {
            orders: {
                query: SearchAllOrdersDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset,
                    }
                },
                pollInterval: 4000
            },
            orderLines: {
                query: GetOrderLinesDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset,
                        id: this.vendorStore ? this.vendorStore.id : undefined
                    }
                },
                pollInterval: 4000
            }
        }
    })
    export default class Orders extends Vue {
        private limit = 10
        private offset = 0
        private store = ''

        private orders
        private orderLines

        // Table
        private gridOptions: any = {};
        private gridApi: any = null;

        private gridSecondOptions: any = {};
        private gridSecondApi: any = null;

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
                headerName: 'First Name',
                filter: false,
                field: 'user.firstName'
            },
            {
                headerName: 'Last Name',
                filter: false,
                field: 'user.lastName'
            },
            {
                headerName: 'Created On',
                valueFormatter: this.onRenderDate
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'OrderActions'
            }
        ]

        private secondColumnDefs = [
            {
                headerName: 'Id',
                filter: false,
                field: 'id'
            },
            {
                headerName: 'Stage',
                filter: false,
                field: 'stage'
            },
            {
                headerName: 'Product',
                filter: false,
                field: 'item.productVariant.name'
            },
            {
                headerName: 'Progress',
                cellRendererFramework: 'OrderProgress'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'OrderVendorActions'
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

        onGridReadySecond() {
            this.gridSecondApi = this.gridSecondApi!.api;
            this.gridSecondApi!.sizeColumnsToFit();
        }

    }
</script>
