<template>
    <div>
        <div class="d-flex justify-content-end">
            <v-dialog v-model="addZip" persistent max-width="290" v-if="!vendor">
                <template v-slot:activator="{ on, attrs }">
                    <div class="d-flex justify-content-end align-items-center">
                        <a href="javascript:;" class="btn btn-light-primary font-weight-bold mr-2" v-bind="attrs"
                           v-on="on">Add Zip Code</a>
                    </div>
                </template>
                <v-card>
                    <v-card-title class="headline" :style="{'background-color': theme.colors.theme.base.primary, 'color': 'white'}">Please Enter Zip Code</v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Zip Code"
                            v-model="zipcode"
                        ></v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text style="margin-right: 10px" @click="addZip = false">Cancel</v-btn>
                        <v-btn color="primary" text @click="onCreateZipCode" :loading="loading">Add</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="vendorZip" scrollable max-width="300px" v-if="vendor">
                <template v-slot:activator="{ on, attrs }">
                    <a href="javascript:;" class="btn btn-light-primary font-weight-bold mr-2" v-bind="attrs"
                       v-on="on">Add Zip Code</a>
                </template>
                <v-card>
                    <v-card-title :style="{'background-color': theme.colors.theme.base.primary, 'color': 'white'}">Select Zip</v-card-title>
                    <v-divider></v-divider>
                    <ZipVendorAdd @onchangezip="onChangeZips"/>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="blue darken-1" text @click="vendorZip = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="onSaveZips">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.findAllZip.loading">
            <div class="spinner spinner-primary spinner-lg mr-15"></div>
        </div>
        <div v-if="!$apollo.queries.findAllZip.loading">
            <ag-grid-vue
                style="height: 100vh"
                ref="agGridTable"
                :gridOptions="gridOptions"
                class="ag-theme-material"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :rowData="zips"
                colResizeDefault="shift"
                :animateRows="true"
                :floatingFilter="true"
                :pagination="true"
                @grid-ready="onGridReady"
                :suppressPaginationPanel="true" :enableRtl="false">
            </ag-grid-vue>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        AddZipsToVendorDocument,
        AllZipsDocument,
        CreateOneZipDocument,
        CreateZipToVendorDocument,
        FindAllZipDocument
    } from '../../gql';
    import {mapState} from 'vuex';
    import ZipAddVendor from "~/components/zip/ZipVendorAdd.vue";
    import {GridironViewSettings} from "~/utils/theme.settings";

    @Component({
        components:{
            ZipAddVendor
        },
        computed: {
            ...mapState({
                vendor: (store: any) => store.admin.vendor
            })
        },
        apollo: {
            findAllZip: {
                query: FindAllZipDocument,
                pollInterval: 4000
            },
            zips: {
                query: AllZipsDocument,
                variables() {
                    return {
                        vendor: this.$store.state.admin.vendorStore ? this.$store.state.admin.vendorStore.id : undefined,
                        limit: 10,
                        offset: 0,
                        code: undefined
                    }
                },
                pollInterval: 4000
            }
        }
    })
    export default class ZipConfiguration extends Vue {

        private addZip = false
        private zipcode = ''
        private loading = false

        private theme = GridironViewSettings

        private findAllZip
        private zips
        private vendor

        private vendorZip = false
        private allZipsOfVendor: any[] = []

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

        @Watch('zips')
        onZipsLoad() {
            for (const sd of this.zips) {
                this.allZipsOfVendor.push(sd.id)
            }
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        onChangeZips(value) {
            if (value.length > 0) {
                if (this.allZipsOfVendor.indexOf(value[0]) === -1){
                    this.allZipsOfVendor.push(value[0])
                }
            }
        }

        onSaveZips(){
            this.$apollo.mutate({
                mutation: CreateZipToVendorDocument,
                variables: {
                    vendorId: this.$store.state.admin.vendorStore ? this.$store.state.admin.vendorStore.id : this.$store.state.admin.store.id,
                    zips: this.allZipsOfVendor
                }
            }).then(value => {
                this.vendorZip = false
                this.$Message.success('Zips added')
            }).catch(error => {
                this.$Message.error(error.message)
            })
        }

    }
</script>
