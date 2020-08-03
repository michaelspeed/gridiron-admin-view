<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Billing Agreements</h5>
            </div>
        </div>
        <v-card>
            <ag-grid-vue
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
                    :suppressPaginationPanel="true" :enableRtl="false">
            </ag-grid-vue>
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-circle justify-content-end">
                    <li class="page-item" v-if="hasPrev"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item" v-if="hasNext"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </v-card>
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
            setTimeout(() => {
                this.gridApi = this.gridOptions!.api;
                this.gridApi!.sizeColumnsToFit();
            }, 2000)
        }

        @Watch('GetBillingAgreementByVendor')
        onGetBillAgg() {
            console.log(this.GetBillingAgreementByVendor)
        }
    }
</script>

