<template>
    <div>
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
            <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
              <!--begin::Details-->
              <div class="d-flex align-items-center flex-wrap mr-2">

                <!--begin::Title-->
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Facet</h5>
                <!--end::Title-->

                <!--begin::Separator-->
                <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                <!--end::Separator-->

                <!--begin::Search Form-->
                <div class="d-flex align-items-center" id="kt_subheader_search">
                  <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="facet">{{values.length}} Total</span>
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
                  Update Facet
                </a>
                <!--end::Button-->
              </div>
              <!--end::Toolbar-->
            </div>
          </div>
          <v-sheet elevation="4">
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
              <hr/>
              <div class="mt-2 mb-2">
                <div class="d-flex justify-content-between">
                  <h5>Facet Value</h5>
                  <button type="button" class="btn btn-primary btn-sm mr-2 mb-2" @click="add = true">
                    Add Facet Value
                  </button>
                </div>
              </div>
              <div>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">Code</th>
                      <th class="text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in values" :key="item.id">
                      <td>{{ item.code }}</td>
                      <td>
                        <a-popconfirm
                          title="Are you sure delete this task?"
                          ok-text="Yes"
                          cancel-text="No"
                          @confirm="onDelete(item.id)"
                        >
                          <v-btn color="red" text>
                            <i class="fas fa-trash text-danger mr-2"></i> Delete
                          </v-btn>
                        </a-popconfirm>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
            </div>
          </v-sheet>
        </div>
      </div>
        <v-bottom-sheet v-model="add" inset transition="slide-y-transition">
          <div class="card">
            <div class="card-header border-0 d-flex justify-content-between align-items-center">
              <h3 class="card-title align-items-start flex-column">
                <a href="javascript:;" @click="add = false">
                  <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                </a>
                <span class="card-label font-weight-bolder text-dark ml-6">Add Facet Value</span>
              </h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label>Enter Code</label>
                <a-input v-model="valuecode"></a-input>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
            </div>
              <v-progress-linear
                  color="lime"
                  indeterminate
                  reverse
                  v-if="loading"
              ></v-progress-linear>
              <div class="card-footer" v-if="!loading">
                  <v-spacer></v-spacer>
                  <a href="javascript:;" class="btn btn-light-primary font-weight-bolder font-size-sm" @click="onCreateFacetValues">Create Facet Value</a>
              </div>
          </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateFacetValueDocument,
        DeleteOneFacetValueDocument,
        GetFacetDocument,
        SetFacetOnValueDocument
    } from '../../../../gql';

    @Component({
        layout: 'console',
        apollo: {
            facet: {
                query: GetFacetDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class Id extends Vue {
        private name = ""
        private code = ""
        private isPrivate = true
        private init = false
        private values: any[] = []
        private add = false
        private valuecode = ''
        private facet

        private loading = false

        @Watch('facet')
        onGetFacet() {
            if (this.facet !== undefined) {
                if (!this.init) {
                    this.name = this.facet.name
                    this.code = this.facet.code
                    this.isPrivate = this.facet.isPrivate
                    this.init = true
                }
                this.values = this.facet.values
            }
        }

        onCreateFacetValues() {
            const load: any = this.$Message.loading('Action in progress..');
            this.loading = true
            this.$apollo.mutate({
                mutation: CreateFacetValueDocument,
                variables: {
                    code: this.valuecode
                }
            }).then(value => {
                this.$apollo.mutate({
                    mutation: SetFacetOnValueDocument,
                    variables: {
                        id: value.data!.createOneFacetValue!.id,
                        rel: this.$route.params.id
                    }
                }).then(value1 => {
                    load()
                    this.loading = false
                    this.add = false
                    this.valuecode = ''
                    this.$notification.success({
                        description: 'Facet Values creation Successful',
                        message: 'Facet Values added'
                    })
                }).catch(error => {
                    load()
                    this.$notification.error({
                        description: error.message,
                        message: 'Failed'
                    })
                })
            })
        }

        onDelete(id) {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: DeleteOneFacetValueDocument,
                variables: {
                    id: id
                }
            }).then(value => {
                load()
            }).catch(error => {
                load()
            })
        }

    }
</script>
