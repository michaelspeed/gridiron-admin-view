<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Products</h5>
                <button type="button" class="btn btn-primary btn-sm mr-2 mb-2" @click="onCreateProduct">
                    Add Product
                </button>
            </div>
        </div>
        <v-card>
            <ag-grid-vue

                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="allProducts"
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
    import {Component, Vue} from 'vue-property-decorator';
    import {GetAllProductsDocument} from '../../../../gql';
    import ProductActions from '../../../../components/products/product-actions.vue';

    @Component({
        layout: 'console',
        components: {
            ProductActions
        }
    })
    export default class Index extends Vue {
        private allProducts = []

        // Paging
        private last: number = 0
        private first: number = 10
        private after: any = null
        private before: any = null
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

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
                filter: true,
                field: 'node.productName'
            },
            {
                headerName: 'Slug',
                filter: true,
                field: 'node.slug'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'ProductActions'
            }
        ]

        mounted() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
            this.$apollo.watchQuery({
                query: GetAllProductsDocument,
                variables: {
                    first: 30
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.allProducts = value!.data!.products.edges
            })
        }

        onCreateProduct() {
            this.$router.push(`/app/catalog/products/createproduct`)
        }
    }
</script>
