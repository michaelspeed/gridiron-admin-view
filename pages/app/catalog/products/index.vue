<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class=" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Products</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"
                                      v-if="productAggregate">{{productAggregate.count.id}} Total</span>
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
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2"
                               @click="onCreateProduct">
                                Add products
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-sheet elevation="4">
                    <div class="d-flex justify-content-center align-items-center m-20 w-100"
                         v-if="$apollo.queries.products.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body">
                        <ag-grid-vue
                            v-if="!$apollo.queries.products.loading"
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="products"
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
    import {Component, Vue} from 'vue-property-decorator';
    import {GetAllProductsDocument, GetProductAggregateDocument} from '../../../../gql';
    import ProductActions from '../../../../components/products/product-actions.vue';

    @Component({
        layout: 'console',
        components: {
            ProductActions
        },
        apollo: {
            productAggregate: {
                query: GetProductAggregateDocument
            },
            products: {
                query: GetAllProductsDocument,
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
    export default class Index extends Vue {
        private allProducts = []

        private productAggregate

        // Paging
        private last: number = 0
        private first: number = 10
        private after: any = null
        private before: any = null
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

        private limit = 50
        private offset = 0
        private search: string = ''

        private products

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
                field: 'productName'
            },
            {
                headerName: 'Slug',
                filter: false,
                field: 'slug'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'ProductActions'
            }
        ]

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        onCreateProduct() {
            this.$router.push(`/app/catalog/products/createproduct`)
        }
    }
</script>
