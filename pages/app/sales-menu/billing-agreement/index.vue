<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Billing Agreements</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"></span>
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

                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-sheet elevation="4">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.GetBillingAgreementByVendor.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <ag-grid-vue
                            style="height: 100vh"
                            v-if="!$apollo.queries.GetBillingAgreementByVendor.loading"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material ag-grid-table"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="GetBillingAgreementByVendor"
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
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {BillingAgreementRequest, BillingAgreementState, GetBillingAgreementByVendorDocument} from '../../../../gql';
    import AgreementActions from '../../../../components/billing-agreements/AgreementActions.vue';
    import AgreementPending from '../../../../components/billing-agreements/AgreementPendings.vue';

    @Component({
        layout: 'console',
        components: {
            AgreementActions,
            AgreementPending
        },
        apollo: {
            GetBillingAgreementByVendor: {
                query: GetBillingAgreementByVendorDocument
            }
        }
    })
    export default class BillingAgreement extends Vue {
        private GetBillingAgreementByVendor

        // Paging
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

        // Table
        private gridOptions: any = {};
        private gridApi: any = null;
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filterable: false
        };
        private columnDefs = [
            {
                headerName: 'id',
                filter: false,
                field: 'id'
            },
            {
                headerName: 'State',
                filter: false,
                field: 'state'
            },
            {
                headerName: 'Type',
                filter: false,
                field: 'type'
            },
            {
                headerName: 'Value',
                filter: false,
                field: 'value'
            },
            {
                headerName: 'Pending Request',
                cellRendererFramework: 'AgreementPending'
            },
            {
                headerName: 'Collection',
                filter: false,
                valueFormatter: this.getCollectionName
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'AgreementActions'
            }
        ]

        getApproved(value) {
            console.log(value)
            const filt = value.data.requests.filter(item => item.state === BillingAgreementState.Pending)
            return ''
        }

        getCollectionName(data) {
            if (data.data.collection === null) {
                return  'N/A'
            }
            if (data.data.collection.parent !== null) {
                return `${data.data.collection.name}: (${data.data.collection.parent.name})`
            } else {
                return `${data.data.collection.name}`
            }
        }

        mounted() {

        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        @Watch('GetBillingAgreementByVendor')
        onGetBillAgg() {
            console.log(this.GetBillingAgreementByVendor)
        }
    }
</script>

