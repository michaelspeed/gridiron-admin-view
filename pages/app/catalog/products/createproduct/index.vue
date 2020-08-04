<template>
    <div>
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="card">
            <div class="card-header border-0 justify-content-between align-items-center">
              <h3 class="card-title align-items-start flex-column">
                <span class="card-label font-weight-bolder text-dark">Create Product</span>
              </h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <label>Product Name</label>
                    <a-input v-model="name"></a-input>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                  </div>
                  <div class="form-group">
                    <label>Slug</label>
                    <a-input v-model="slug" disabled></a-input>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                  </div>
                  <div class="form-group">
                    <label>Facets</label>
                    <div>
                      <a href="javascript:;" class="btn btn-sm btn-light-success" @click="addFacet = true">
                        <i class="fas fa-plus"></i> Add Facet
                      </a>
                      <v-dialog v-model="addFacet" scrollable max-width="300px">
                        <v-card>
                          <v-card-title>Select Facet</v-card-title>
                          <v-divider></v-divider>
                          <v-card-text style="height: 300px;">
                            <v-list dense>
                              <v-list-item-group color="primary">
                                <v-list-item
                                  v-for="items in allFacets"
                                  :key="items.id"
                                  @click="onClickSelect(items.node)"
                                >
                                  <v-list-item-content>
                                    <v-chip
                                      class="ma-2"
                                      :color="onSelectTrace(items.node) ? '#1b55e3' : 'white'"
                                      style="color: white"
                                    >
                                      {{items.node.facet.name.toUpperCase()}} {{items.node.code}}
                                    </v-chip>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                            <a href="javascript:;" class="btn btn-sm btn-light-success" @click="addFacet = false">
                              close
                            </a>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                    <hr style="margin-top: 4px; margin-bottom: 4px"/>
                    <div>
                      <v-chip v-for="ites in selectedFacet" :key="ites.id"
                              class="ma-2"
                              color="#1b55e3"
                              outlined
                              pill
                              small
                              style="margin: 3px"
                      >
                        {{ites.facet.name.toUpperCase()}} {{ites.code}}
                      </v-chip>
                    </div>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                  </div>
                </div>
                <div class="col-md-4">
                  <v-card>
                    <v-img
                      :contain="true"
                      :src="featuredAssets === null ? 'https://via.placeholder.com/200' : `${assetUrl}/${featuredAssets.preview}`"
                      height="200px"
                    ></v-img>
                    <v-card-title>
                      Assets
                    </v-card-title>
                    <v-card-actions>
                      <a href="javascript:;" class="btn btn-sm btn-light-success" @click="addAsset = true">
                        Add Asset
                      </a>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="showassets = !showassets">
                        <v-icon>{{ showassets ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                      <div v-show="showassets" style="padding: 10px">
                        <v-divider></v-divider>
                        <v-row>
                          <v-col
                            v-for="n in selectedAssets"
                            :key="n.id"
                            class="d-flex child-flex"
                            cols="3"
                          >
                            <v-card flat tile class="d-flex" @click="onImageClicked($event, n)">
                              <v-img
                                :contain="true"
                                :src="`${assetUrl}/${n.preview}`"
                                aspect-ratio="1"
                                class="grey lighten-2"
                              >
                              </v-img>
                            </v-card>
                          </v-col>
                        </v-row>
                      </div>
                    </v-expand-transition>
                  </v-card>
                  <v-menu
                    v-model="showMenu"
                    :position-x="x"
                    :position-y="y"
                    absolute
                    offset-y
                  >
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Preview</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="onSelectFeatured" :disabled="featureActive">
                        <v-list-item-title>Set as Featured</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Remove Asset</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
              <div class="form-group">
                <label>Description</label>
                <client-only>
                  <editor api-key="no-api-key" :init="{
                            height: 500,
                            plugins: ['image', 'preview', 'link', 'advlist', 'autolink', 'lists', 'hr'],
                            file_picker_callback: filePickerCallBack,
                            file_picker_types: 'image',
                            automatic_uploads: true,
                            images_upload_handler: imageUploadHandler,
                            branding: false,
                            content_style: 'body { font-family: Arial; }'
                        }" v-model="editorModel"/>
                </client-only>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <div class="row">
                <a href="javascript:;" class="btn btn-light-primary font-weight-bold mr-2" @click="onCreateProduct">Create Product</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <v-dialog v-model="addAsset" fullscreen transition="dialog-bottom-transition">
          <div class="card" v-if="myAssets">
            <div class="card-header border-0 d-flex justify-content-between align-items-center">
              <h3 class="card-title align-items-start flex-column">
                <a href="javascript:;" @click="addAsset = false">
                  <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                </a>
                <span class="card-label font-weight-bolder text-dark ml-6">Add Assets</span>
              </h3>
              <div class="card-toolbar">
                <a href="#" class="btn btn-light-primary font-weight-bolder font-size-sm" @click="addAsset = false">Select</a>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <v-row>
                    <v-col
                      v-for="n in myAssets"
                      :key="n.node.id"
                      class="d-flex child-flex"
                      cols="2"
                    >
                      <v-card flat tile class="d-flex" :color="getSelectedColor(n.node.id)" hover @click="onClickSelectAsset(n.node)" style="padding: 5px">
                        <v-img
                          :src="`${assetUrl}/${n.node.preview}`"
                          aspect-ratio="1"
                          class="lighten-2"
                          :contain="true"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import Editor from '@tinymce/tinymce-vue'
    import {
        Asset,
        CreateAssetDocument, CreateProductDocument,
        GetAllAssetsDocument,
        GetFacetValuesDocument
    } from '../../../../../gql';
    import {assetsURL} from '../../../../../constants/GlobalURL';
    import {SlugLoader} from '../../../../../utils/slugLoader';

    @Component({
        layout: 'console',
        components: {
            'editor': Editor
        }
    })
    export default class Index extends Vue {
        private name: string = ""
        private slug: string = ""
        private showassets = false
        private addAsset = false
        private myAssets: Asset[] = []
        private assetUrl = assetsURL
        private selectedAssets: Asset[] = []
        private featuredAssets: Asset | null = null
        private addFacet = false
        private allFacets: any[] = []
        private selectedFacet: any[] = []
        private editorModel: string = ''
        private showMenu: boolean = false
        private x = 0
        private y = 0
        private menuId: any = null
        private featureActive: boolean = false


        onImageClicked(e, node) {
            e.preventDefault()
            this.showMenu = false
            this.menuId = node
            if (this.featuredAssets === null) {
                this.featureActive = false
            } else if (this.featuredAssets!.id !== node.id) {
                this.featureActive = false
            } else {
                this.featureActive = true
            }
            this.x = e.clientX
            this.y = e.clientY
            this.$nextTick(() => {
                this.showMenu = true
            })
        }

        onSelectFeatured() {
            this.featuredAssets = this.menuId
        }

        onCreateProduct() {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: CreateProductDocument,
                variables: {
                    name: this.name,
                    desc: this.editorModel,
                    slug: this.slug,
                    facet: this.selectedFacet.map(item => item.id),
                    asset: this.selectedAssets.map(item => item.id),
                    featured: this.featuredAssets!.id
                }
            }).then(value => {
                load()
                this.$notification.success({
                    description: 'Product Created',
                    message: 'Product Creation Successful'
                })
            })
        }

        @Watch('name')
        onChangeName() {
            this.slug = SlugLoader(this.name)
        }

        onClickSelect(item) {
            if (this.selectedFacet.find(ids => ids.id === item.id) === undefined) {
                this.selectedFacet.push(item)
            } else {
                this.selectedFacet = this.selectedFacet.filter(its => its.id !== item.id)
            }
        }

        onSelectTrace(item) {
            return this.selectedFacet.find(ids => ids.id === item.id) !== undefined
        }

        mounted() {
            this.$apollo.watchQuery({
                query: GetAllAssetsDocument,
                variables: {
                    first: 30
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.myAssets = value.data!.assets.edges
            })
            this.$apollo.watchQuery({
                query: GetFacetValuesDocument,
                variables: {
                    first: 30
                }
            }).subscribe(value => {
                this.allFacets = value.data!.facetValues.edges
            })
        }

        onClickSelectAsset(node) {
            if (this.featuredAssets === null) {
                this.featuredAssets = node
            }
            this.selectedAssets.push(node)
        }

        getSelectedColor(id): string {
            if (this.selectedAssets.find(item => item.id === id) !== undefined) {
                return '#1F7087'
            } else {
                return 'white'
            }
        }

        filePickerCallBack(callback, value, meta) {
            const input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.setAttribute('accept', 'image/*')
            const apollo = this.$apollo
            input.onchange = function (event) {
                // @ts-ignore
                const file = this.files[0]
                apollo.mutate({
                    mutation: CreateAssetDocument,
                    variables: {
                        file: file
                    }
                }).then(value1 => {
                    callback(`${assetsURL}/` + value1.data.createAsset.source, {title: file.filename})
                })
            }
            input.click()
        }

        imageUploadHandler(blobinfo, success, failure) {
            const file = new File([blobinfo.blob()], blobinfo.filename())
            console.log(file)
            this.$apollo.mutate({
                mutation: CreateAssetDocument,
                variables: {
                    file: file
                }
            }).then(value => {
                success(`${assetsURL}/` + value.data.createAsset.source)
            }).catch(error => {
                failure(error)
            })
        }
    }
</script>

<style>
    .v-dialog__content {
        z-index: 100000 !important;
    }
    .v-sheet {
        border-radius: 0px;
    }
</style>
