<template>
    <div>
        <div class="d-flex justify-content-end">
            <v-dialog v-model="addHSN" persistent max-width="290" v-if="!vendor">
                <template v-slot:activator="{ on, attrs }">
                    <div class="d-flex justify-content-end align-items-center">
                        <a href="javascript:;" class="btn btn-light-primary font-weight-bold mr-2" v-bind="attrs"
                           v-on="on">Add Hsn</a>
                    </div>
                </template>
                <v-card>
                    <v-card-title class="headline" :style="{'background-color': theme.colors.theme.base.primary, 'color': 'white'}">Enter HSN Code</v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="HSN Code"
                            v-model="code"
                        ></v-text-field>
                        <v-text-field
                            label="Value"
                            v-model="value"
                            type="number"
                        ></v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text style="margin-right: 10px" @click="addHSN = false">Cancel</v-btn>
                        <v-btn color="primary" text @click="onAddHsnCode" :loading="loading">Add</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.hsns.loading">
            <div class="spinner spinner-primary spinner-lg mr-15"></div>
        </div>
        <div v-if="!$apollo.queries.hsns.loading">
            <ag-grid-vue
                style="height: 100vh"
                ref="agGridTable"
                :gridOptions="gridOptions"
                class="ag-theme-material"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :rowData="hsns"
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
import {Component, Vue} from "vue-property-decorator";
import {GridironViewSettings} from "~/utils/theme.settings";
import {mapState} from "vuex";
import {CreateOneHsnDocument, GetAllHsnDocument} from "~/gql";
import HsnActions from "~/components/hsn/hsnActions.vue";

@Component({
    components: {HsnActions},
    computed: {
        ...mapState({
            vendor: (store: any) => store.admin.vendor
        })
    },
    apollo:{
        hsns: {
            query: GetAllHsnDocument,
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
export default class HsnCodes extends Vue {
    private addHSN = false
    private code = ''
    private value = 0

    private limit = 10
    private offset = 0

    private loading = false
    private theme = GridironViewSettings

    private hsns

    //table
    private gridOptions: any = {};
    private gridApi: any = null;
    private columnDefs = [
        {
            headerName: 'HSN',
            filter: true,
            field: 'code'
        },
        {
            headerName: 'value',
            filter: true,
            field: 'value'
        },
        {
            headerName: 'Actions',
            cellRendererFramework: 'HsnActions'
        }
    ]
    private defaultColDef = {
        sortable: true,
        editable: false,
        resizable: true,
        suppressMenu: true,
        filter: false
    };

    onAddHsnCode() {
        this.loading = true
        this.$apollo.mutate({
            mutation: CreateOneHsnDocument,
            variables: {
                code: this.code,
                value: parseFloat(this.value.toString(10))
            }
        }).then(value => {
            this.$Message.success('HSN Code added')
            this.loading = false
            this.addHSN = false
        }).catch(error => {
            this.loading = false
            this.$Message.error(error.message)
        })
    }

    onGridReady() {
        this.gridApi = this.gridOptions!.api;
        this.gridApi!.sizeColumnsToFit();
    }
}
</script>
