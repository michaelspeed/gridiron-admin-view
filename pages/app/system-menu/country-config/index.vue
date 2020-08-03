<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Country Configurations</h5>
            </div>
        </div>
        <v-card>
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="GetAllCountries"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="false"
                    :suppressPaginationPanel="true" :enableRtl="false">
            </ag-grid-vue>
        </v-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {GetAllCountriesDocument} from '../../../../gql';

    @Component({
        layout: 'console',
        apollo: {
            GetAllCountries: {
                query: GetAllCountriesDocument
            }
        }
    })
    export default class CountryConfig extends Vue{
        private GetAllCountries
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
                headerName: 'Name',
                filter: true,
                field: 'name'
            },
            {
                headerName: 'Core',
                filter: false,
                field: 'code'
            },
            {
                headerName: 'Active',
                filter: false,
                valueFormatter: (data) => data.data.enabled ? 'Active': 'Disabled'
            },
        ]

        mounted() {
            this.gridApi = this.gridOptions.api;
            this.gridApi.sizeColumnsToFit();
        }

        @Watch('GetAllCountries')
        onChangingCountry() {
            console.log(this.GetAllCountries)
        }
    }
</script>
