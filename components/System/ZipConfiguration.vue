<template>
    <div>
        <v-card>
            <v-card-title>
                <v-dialog v-model="addZip" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                        <div class="d-flex justify-content-end align-items-center">
                            <a-button type="primary" v-bind="attrs"
                                      v-on="on">Add Zip Code</a-button>
                        </div>
                    </template>
                    <v-card>
                        <v-card-title class="headline">Please Enter Zip Code</v-card-title>
                        <v-card-text>
                            <v-text-field
                                    label="Zip Code"
                                    solo
                                    v-model="zipcode"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <a-button type="danger" style="margin-right: 10px" @click="addZip = false">Cancel</a-button>
                            <a-button type="primary" @click="onCreateZipCode" :loading="loading">Add</a-button>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-title>
            <v-card v-if="!$apollo.queries.findAllZip.loading">
                <ag-grid-vue
                        ref="agGridTable"
                        :gridOptions="gridOptions"
                        class="ag-theme-material ag-grid-table"
                        :columnDefs="columnDefs"
                        :defaultColDef="defaultColDef"
                        :rowData="findAllZip"
                        colResizeDefault="shift"
                        :animateRows="true"
                        :floatingFilter="true"
                        :pagination="true"
                        @grid-ready="onGridReady"
                        :suppressPaginationPanel="true" :enableRtl="false">
                </ag-grid-vue>
                <v-card-actions>

                </v-card-actions>
            </v-card>
            <div v-if="$apollo.queries.findAllZip.loading">
                <div class="d-flex justify-content-center align-items-center">
                    <v-progress-circular
                            indeterminate
                            color="#161537"
                    ></v-progress-circular>
                </div>
            </div>
        </v-card>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {CreateOneZipDocument, FindAllZipDocument} from '../../gql';

    @Component({
        apollo: {
            findAllZip: {
                query: FindAllZipDocument,
                pollInterval: 4000
            }
        }
    })
    export default class ZipConfiguration extends Vue {

        private addZip = false
        private zipcode = ''
        private loading = false

        private findAllZip

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'zipcode',
                filter: true,
                field: 'code'
            },
            {
                headerName: 'Name',
                filter: true,
                field: 'name'
            },
            {
                headerName: 'All Places',
                filter: false,
                valueFormatter: this.valuePlaces
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filter: false
        };

        valuePlaces(node) {
            let place = ''
            for (const items of JSON.parse(node.data.slug)) {
                place = `${place} | ${items.Name}`
            }
            return place
        }

        onCreateZipCode() {
            this.loading = true
            this.$apollo.mutate({
                mutation: CreateOneZipDocument,
                variables: {
                    code: parseFloat(this.zipcode)
                }
            }).then(value => {
                this.loading = false
                this.$Message.success('Zip Code Added')
                this.zipcode = ''
                this.addZip = false
            }).catch(error => {
                this.$Message.error(error.message)
                this.loading = false
            })
        }

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
