<template>
    <div>
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
            <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
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
                  <span class="text-dark-50 font-weight-bold" id="kt_subheader_total">690 Total</span>
                  <div class="ml-5">
                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                      <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..."/>
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
                <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="onCreateProduct">
                  Add products
                </a>
                <!--end::Button-->
              </div>
              <!--end::Toolbar-->
            </div>
          </div>
          <div class="card card-custom gutter-b">
            <div class="card-body">
              <ag-grid-vue
                style="height: 100vh"
                ref="agGridTable"
                :gridOptions="gridOptions"
                class="ag-theme-material"
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
            </div>
          </div>
        </div>
      </div>
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
