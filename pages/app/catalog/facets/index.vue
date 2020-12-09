<template>
    <div>
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
            <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
              <!--begin::Details-->
              <div class="d-flex align-items-center flex-wrap mr-2">

                <!--begin::Title-->
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Facets</h5>
                <!--end::Title-->

                <!--begin::Separator-->
                <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                <!--end::Separator-->

                <!--begin::Search Form-->
                <div class="d-flex align-items-center" id="kt_subheader_search">
                  <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="facetAggregate">{{facetAggregate.count.id}} Total</span>
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
                <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">
                  Add Facet
                </a>
                <!--end::Button-->
              </div>
              <!--end::Toolbar-->
            </div>
          </div>
          <v-sheet elevation="4">
            <div class="card-body">
              <ag-grid-vue
                style="height: 100vh"
                ref="agGridTable"
                :gridOptions="gridOptions"
                class="ag-theme-material"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :rowData="allFacets"
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
          </v-sheet>
        </div>
      </div>
        <v-bottom-sheet v-model="add" inset>
          <div class="card">
            <div class="card-header border-0 d-flex justify-content-between align-items-center">
              <h3 class="card-title align-items-start flex-column">
                <a href="javascript:;" @click="add = false">
                  <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                </a>
                <span class="card-label font-weight-bolder text-dark ml-6">Add Facet</span>
              </h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label>Enter Name</label>
                <a-input v-model="name"></a-input>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <div class="form-group">
                <label>Enter Code</label>
                <a-input v-model="code"></a-input>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between">
                  <label>Is Private</label>
                  <a-switch
                    v-model="isPrivate"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </a-switch>
                </div>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <div class="row">
                <a href="javascript:;" class="btn btn-light-primary font-weight-bolder font-size-sm" @click="onCreateFacet">Create Facet</a>
              </div>
            </div>
          </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {CreateFacetDocument, GetAllFacetsDocument, GetFacetAggregateDocument} from '../../../../gql';
    import ApolloClient from 'apollo-client';
    import FacetActions from '../../../../components/facets/facet-actions.vue';

    @Component({
        layout: 'console',
        components: {
            FacetActions
        },
        apollo: {
            facetAggregate: {
                query: GetFacetAggregateDocument
            }
        }
    })
    export default class Index extends Vue {
        private add: boolean = false
        private name = ""
        private code = ""
        private isPrivate = true
        private allFacets: any[] = []

        private facetAggregate

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
                field: 'name'
            },
            {
                headerName: 'Code',
                filter: true,
                field: 'code'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'FacetActions'
            }
        ]

        // Pagins
        private last: number = 0
        private first: number = 10
        private after: any = null
        private before: any = null
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;

        // Apollo
        private apolloClient: any = null

        mounted() {
            this.apolloClient = this.$apollo.getClient()
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
            this.apolloClient?.watchQuery({
                query: GetAllFacetsDocument,
                variables: {
                    limit: 50
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.allFacets = value.data!.facets
            })
        }

        onCreateFacet() {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: CreateFacetDocument,
                variables: {
                    name: this.name,
                    code: this.code,
                    isPrivate: this.isPrivate
                }
            }).then(value => {
                load()
                this.add = false
                this.$notification.success({
                    description: 'Facet creation Successful',
                    message: 'Facet Created',
                })
            }).catch(error => {
                load()
                this.$notification.error({
                    description: error.message,
                    message: 'Failed'
                })
            })
        }

    }
</script>
