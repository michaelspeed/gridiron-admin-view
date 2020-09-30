<template>
    <div>
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
            <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
              <!--begin::Details-->
              <div class="d-flex align-items-center flex-wrap mr-2">

                <!--begin::Title-->
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Assets</h5>
                <!--end::Title-->

                <!--begin::Separator-->
                <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                <!--end::Separator-->

                <!--begin::Search Form-->
                <div class="d-flex align-items-center" id="kt_subheader_search">
                  <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="assetAggregate">{{assetAggregate.count.id}} Total</span>
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
                <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="onClickUpload">
                  Add Asset
                </a>
                <input type="file" style="display: none" ref="fileInput" accept="image/*" v-on:change="onImageChange($event)"/>
                <!--end::Button-->
              </div>
              <!--end::Toolbar-->
            </div>
          </div>
          <div class="row">
            <AssetsPreview v-for="asset in myAssets" :node="asset" :key="asset.id"/>
          </div>
          <div class="row" v-if="!$apollo.queries.assetAggregate.loading">
              <a-pagination v-model="page" :total="assetAggregate.count.id" :pageSize.sync="limit" show-less-items />
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {Asset, CreateAssetDocument, GetAllAssetsDocument, GetAssetsAggregateDocument} from '../../../../gql';
    import moment from 'moment';
    import AssetsPreview from '../../../../components/assets/AssetsPreview.vue';
    import {mapState} from "vuex";

    @Component({
        layout: 'console',
        components: {
            AssetsPreview
        },
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
                vendorStore: (store: any) => store.admin.vendorStore,
            }),
        },
        apollo: {
            assets: {
                query: GetAllAssetsDocument,
                variables() {
                    return {
                        limit: this.limit,
                        iLike: `%${this.search}%`,
                        offset: (this.page - 1) * this.limit
                    }
                },
                pollInterval: 4000,
                deep: true
            },
            assetAggregate: {
                query: GetAssetsAggregateDocument,
                variables() {
                    return {
                        iLike: `%${this.search}%`
                    }
                },
                pollInterval: 4000
            }
        }
    })
    export default class Index extends Vue {
        private imageChange: any = null
        private myAssets: Asset[] = []

        private assetAggregate

        // Paging
        private last: any = undefined
        private limit: any = 50
        private offset: any = 0
        private before: any = undefined
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;
        private assets
        private page = 1
        private totalPageCount = 0

        public $refs: Vue['$refs'] & {
            fileInput: HTMLInputElement
        };

        @Watch('assets')
        onChangeAsset() {
            this.myAssets = this.assets
        }

        @Watch('assetAggregate')
        onChangeAssetAggregate() {
            this.totalPageCount = Math.ceil(this.assetAggregate.count.id/this.limit)
            console.log(this.totalPageCount)
        }

        mounted() {

        }

        onClickUpload() {
            this.$refs.fileInput.click()
        }

        onImageChange(event) {
            const load: any = this.$Message.loading('Action in progress..');
            const file = event.target.files[0]
            console.log(file)
            this.$apollo.mutate({
                mutation: CreateAssetDocument,
                variables: {
                    file: file
                },
                /*context: {
                    hasUpload: true
                }*/
            }).then(value => {
                console.log(value)
                this.$notification.success({
                    description: 'Asset Uploaded',
                    message: 'Asset Creation Successful'
                })
                load()
            }).catch(error => {
                load()
                console.log(error);
            })
        }

    }
</script>
