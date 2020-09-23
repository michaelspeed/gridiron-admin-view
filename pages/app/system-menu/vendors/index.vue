<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Vendors</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"></span>
                                <div class="ml-5">
                                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..." v-model="search"/>
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
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.vendors.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body" v-if="!$apollo.queries.vendors.loading">
                        <ag-grid-vue
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="vendors"
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
    import {Component, Vue} from 'vue-property-decorator';
    import {GetAllVebdorsDocument} from "~/gql";
    import VendorActions from "~/components/vendor/vendor-actions.vue";

    @Component({
        layout: 'console',
        components:{
            VendorActions
        },
        apollo: {
            vendors: {
                query: GetAllVebdorsDocument,
                variables() {
                    return {
                        iLike: `%${this.search}%`
                    }
                }
            }
        }
    })
    export default class Index extends Vue {
        private vendors
        private search = ''
        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'Vendor Name',
                filter: false,
                field: 'vendorName'
            },
            {
                headerName: 'Vendor Email',
                filter: false,
                field: 'email'
            },
            {
                headerName: 'Phone Number',
                filter: false,
                field: 'phoneNumber'
            },
            {
                headerName: 'Store Name',
                filter: false,
                field: 'store.storeName'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'VendorActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filter: false
        };

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

    }
</script>
