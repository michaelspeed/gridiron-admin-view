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
            <AssetsPreview v-for="asset in myAssets" :node="asset.node" :key="asset.node.id"/>
          </div>
          <div class="row">
            <a-button-group>
              <a-button type="primary" @click="onPrev" :disabled="!hasPrev"> <a-icon type="left" />Go back </a-button>
              <a-button type="primary" @click="onNext" :disabled="!hasNext"> Go forward<a-icon type="right" /> </a-button>
            </a-button-group>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {Asset, CreateAssetDocument, GetAllAssetsDocument} from '../../../../gql';
    import moment from 'moment';
    import AssetsPreview from '../../../../components/assets/AssetsPreview.vue';

    @Component({
        layout: 'console',
        components: {
            AssetsPreview
        },
        apollo: {
            assets: {
                query: GetAllAssetsDocument,
                variables() {
                    return {
                        first: this.first !== undefined ? this.first : undefined ,
                        last: this.last !== undefined ? this.last : undefined,
                        before: this.before !== undefined ? this.before : undefined,
                        after: this.after !== undefined ? this.after : undefined
                    }
                },
                pollInterval: 4000,
                deep: true
            }
        }
    })
    export default class Index extends Vue {
        private imageChange: any = null
        private myAssets: Asset[] = []

        // Paging
        private last: any = undefined
        private first: any = 10
        private after: any = null
        private before: any = undefined
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;
        private assets

        public $refs: Vue['$refs'] & {
            fileInput: HTMLInputElement
        };

        @Watch('assets')
        onChangeAsset() {
            console.log(this.assets)
            this.myAssets = this.assets.edges
            this.hasNext = this.assets.pageInfo.hasNextPage
            this.hasPrev = this.assets.pageInfo.hasPreviousPage
        }

        onNext() {
            this.after = this.assets.pageInfo.endCursor ? this.assets.pageInfo.endCursor : null
            this.before = undefined
            this.first = 10
            this.last = undefined
            console.log(this.after, this.before)
        }

        onPrev() {
            this.before = this.assets.pageInfo.startCursor ? this.assets.pageInfo.startCursor: null
            this.after = undefined
            this.last = 10
            this.first = undefined
            console.log(this.after, this.before)
        }

        mounted() {
            /*this.$apollo.watchQuery({
                query: GetAllAssetsDocument,
                variables: {
                    first: 30
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.myAssets = value.data!.assets.edges
            })*/
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
