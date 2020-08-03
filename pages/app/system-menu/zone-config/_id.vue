<template>
    <div>
        <div v-if="ZoneFindOne !== undefined">
            <div class="air__utils__heading">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <h5>Zone Configuration: {{ZoneFindOne.name}}</h5>
                    <button type="button" class="btn btn-primary" @click="addmember = true">Add Member</button>
                </div>
            </div>
            <v-card>
                <ag-grid-vue
                        ref="agGridTable"
                        :gridOptions="gridOptions"
                        class="ag-theme-material ag-grid-table"
                        :columnDefs="columnDefs"
                        :defaultColDef="defaultColDef"
                        :rowData="ZoneFindOne.members.edges"
                        colResizeDefault="shift"
                        :animateRows="true"
                        :floatingFilter="true"
                        :pagination="false"
                        @grid-ready="onGridReady"
                        :suppressPaginationPanel="true" :enableRtl="false">
                </ag-grid-vue>
            </v-card>
            <v-bottom-sheet inset v-model="addmember">
                <v-toolbar flat>
                    <v-btn fab @click="addmember = false"><v-icon>arrow_back</v-icon></v-btn>
                    <v-toolbar-title style="margin-left: 10px">Add Member Country</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <div class="p-3 bg-white">
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storecountry')}}</label>
                            <div>
                                <a-select
                                        show-search
                                        v-model="countryId"
                                        filterable
                                        placeholder="Select Default Country"
                                        style="width: 100%"
                                        :filter-option="filterOption"
                                        >
                                    <a-select-option
                                            v-for="item in GetAllCountries"
                                            :key="item.id"
                                            :value="item.id">
                                        {{item.name}}
                                    </a-select-option>
                                </a-select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-3 bg-white">
                    <button type="button" class="btn btn-primary" @click="onAddCountryToZone">Add Member Country</button>
                </div>
            </v-bottom-sheet>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {AddCountryToZoneDocument, GetAllCountriesDocument, ZoneFindOneDocument} from '../../../../gql';

    @Component({
        layout: 'console',
        apollo: {
            ZoneFindOne: {
                query: ZoneFindOneDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                pollInterval: 5000
            },
            GetAllCountries: {
                query: GetAllCountriesDocument
            }
        }
    })
    export default class ZoneId extends Vue {
        private ZoneFindOne
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
                field: 'node.name'
            },
            {
                headerName: 'Code',
                filter: false,
                field: 'node.code'
            },
            {
                headerName: 'Active',
                filter: false,
                valueFormatter: (data) => data.data.node.enabled ? 'Active': 'Disabled'
            },
        ]
        private addmember = false
        private countryId = ''

        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        }


        mounted() {
            this.gridApi = this.gridOptions.api;
            if (this.gridApi !== undefined) {
                this.gridApi.sizeColumnsToFit();
            }
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        onAddCountryToZone() {
            const loading: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: AddCountryToZoneDocument,
                variables: {
                    id: this.$route.params.id,
                    countryId: this.countryId
                }
            }).then(value => {
                loading()
                this.$message.success('Added member to Zone');
                this.countryId = ''
                this.addmember = false
            }).catch(error => {
                loading()
                this.$message.error(error.message);
            })
        }
    }
</script>
