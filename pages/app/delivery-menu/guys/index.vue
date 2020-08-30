<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Delivery Guys</h5>
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
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.deliveries.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <ag-grid-vue
                            v-if="!$apollo.queries.deliveries.loading"
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material ag-grid-table"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="deliveries"
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
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {GetDeliveriesDocument} from "~/gql";

    @Component({
        layout: 'console',
        apollo: {
            deliveries: {
                query: GetDeliveriesDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset
                    }
                }
            }
        }
    })
    export default class Guys extends Vue {
        private limit = 10
        private offset = 0

        private deliveries

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
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
                headerName: 'Phone Number',
                filter: false,
                field: 'user.phoneNumber'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true
        };

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        @Watch('deliveries')
        onChangeDeliveries() {
            console.log(this.deliveries)
        }
    }
</script>
