<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">SEO URL rewrites</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="seoAggregate">{{seoAggregate.count.id}} Total</span>
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
                <v-sheet elevation="4">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.seos.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <ag-grid-vue
                            style="height: 100vh"
                            v-if="!$apollo.queries.seos.loading"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material ag-grid-table"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="seos"
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
    import {GetAllSeoDocument, GetSeoAggregateDocument} from '../../../../gql';
    import SeoActions from '../../../../components/Seo/SeoActions.vue';

    @Component({
        layout: 'console',
        apollo: {
            seos: {
                query: GetAllSeoDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset,
                        iLike: `%${this.search}%`
                    }
                },
                fetchPolicy: 'network-only'
            },
            seoAggregate: {
                query: GetSeoAggregateDocument
            }
        },
        components: {
            SeoActions
        }
    })
    export default class UrlRewrites extends Vue {
        private seos

        private limit = 50
        private offset = 0

        private seoAggregate

        private search = ''

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
                field: 'metatitle'
            },
            {
                headerName: 'Url-Key',
                filter: false,
                field: 'urlKey'
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
        private hasPrev: boolean = false;
        private hasNext: boolean = false;
        private page: number = 1

        @Watch('seos')
        oChange() {
            console.log(this.seos)
        }

        onCheckVarCol(data) {
            if (data.data.collection !== null) {
                return `${data.data.collection.name}: (Collection)`
            } else if (data.data.variant !== null) {
                return `${data.data.variant.name}: (Variant)`
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
