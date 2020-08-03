<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>SEO URL rewrites</h5>
            </div>
        </div>
        <v-card v-if="seos !== undefined">
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="seos.edges"
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
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {GetAllSeoDocument} from '../../../../gql';
    import SeoActions from '../../../../components/Seo/SeoActions.vue';

    @Component({
        layout: 'console',
        apollo: {
            seos: {
                query: GetAllSeoDocument,
                variables() {
                    return {
                        first: this.first,
                        last: this.last === 0 ? undefined : this.last,
                        after: this.after === null ? undefined : this.after,
                        before: this.before === null ? undefined : this.before,
                        search: this.search === '' ? undefined : `${this.search}%`
                    }
                },
                fetchPolicy: 'network-only'
            }
        },
        components: {
            SeoActions
        }
    })
    export default class UrlRewrites extends Vue {
        private seos

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'Collection/Variant',
                filter: false,
                valueFormatter: this.onCheckVarCol
            },
            {
                headerName: 'Meta-Title',
                filter: false,
                field: 'node.metatitle'
            },
            {
                headerName: 'Url-Key',
                filter: false,
                field: 'node.urlKey'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'SeoActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filter: false
        };

        //paging
        private last: number = 0
        private first: number = 10
        private after: any = null
        private before: any = null
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;
        private page: number = 1

        @Watch('seos')
        oChange() {
            console.log(this.seos)
        }

        onCheckVarCol(data) {
            if (data.data.node.collection !== null) {
                return `${data.data.node.collection.name}: (Collection)`
            } else if (data.data.node.variant !== null) {
                return `${data.data.node.variant.name}: (Variant)`
            } else {
                return 'Residual SEO!'
            }
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
