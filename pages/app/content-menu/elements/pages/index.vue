<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class=" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Pages</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"
                                      ></span>
                                <div class="ml-5">
                                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form"
                                               placeholder="Search..." v-model="search"/>
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
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="$router.push('/app/content-menu/elements/pages/createbuilder')">
                                Page Builder
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-sheet elevation="4">
                    <div class="d-flex justify-content-center align-items-center m-20 w-100"
                         v-if="$apollo.queries.pages.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body">
                        <ag-grid-vue
                            v-if="!$apollo.queries.pages.loading"
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="pages"
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
    import {Component, Vue} from "vue-property-decorator";
    import {GetAllPagesDocument} from "~/gql";
    import PageActions from "~/components/pages/PageActions.vue";

    @Component({
        layout: 'console',
        components: {
            PageActions
        },
        apollo: {
            pages: {
                query: GetAllPagesDocument,
                variables() {
                    return {
                        limit: this.limit,
                        offset: this.offset,
                        iLike: `%${this.search}%`
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class Pages extends Vue{
        private limit = 50
        private offset = 0
        private search: string = ''

        private pages

        // Table
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
                filter: false,
                field: 'title'
            },
            {
                headerName: 'Target Id',
                filter: false,
                field: 'targetId'
            },
            {
                headerName: 'type',
                filter: false,
                field: 'pageCategory'
            },
            {
                headerName: 'actions',
                cellRendererFramework: 'PageActions'
            }
        ]

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

    }
</script>
