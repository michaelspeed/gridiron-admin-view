<template>
    <div>
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="card">
            <div class="card-body">
              <v-tabs v-model="tabs">
                <v-tab>Product Details</v-tab>
                <v-tab>Product Variants</v-tab>
                <v-tab>Product Performance</v-tab>
              </v-tabs>
              <v-divider/>
              <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.product.loading">
                <div class="spinner spinner-primary spinner-lg mr-15"></div>
              </div>
              <v-container v-if="product !== undefined">
                <div v-if="tabs === 0">
                  <div v-if="!$apollo.queries.product.loading">
                    <div class="row">
                      <div class="col-md-8">
                        <div>
                          <v-alert
                            dense
                            outlined
                            type="error"
                            v-if="(product.collection === null || product.collection.name === 'default')"
                          >
                            The product is in default collection. It will not come up in any search history.
                          </v-alert>
                        </div>
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
                          <label>Collection</label>
                          <div>
                            <div v-if="product.collection !== null">
                              <span style="font-weight: bold; font-size: 20px">{{product.collection.name}}</span>
                            </div>
                            <a href="javascript:;" @click="selectCats = true" class="btn btn-sm btn-light-success font-weight-bold mr-2">
                              {{(product.collection === null || product.collection.name === 'default') ? 'Select' : 'Change'}} Collection
                            </a>
                            <v-dialog v-model="selectCats" scrollable max-width="300px">
                              <v-card>
                                <v-card-title>Select Category</v-card-title>
                                <v-divider></v-divider>
                                <v-card-text style="height: 300px;">
                                  <a-tree
                                    :tree-data="allCollections"
                                    defaultExpandAll
                                    showLine
                                    switcherIcon
                                    @select="onUpdateCollection"
                                  ></a-tree>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                  <a href="javascript:;" @click="selectCats = false" class="btn btn-sm btn-light-success font-weight-bold mr-2">
                                    Close
                                  </a>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Facets</label>
                          <div>
                            <a href="javascript:;" class="btn btn-sm btn-light-success" @click="addFacet = true">
                              <i class="fas fa-plus"></i> Add Facet
                            </a>
                            <v-dialog v-model="addFacet" scrollable max-width="400px">
                              <v-card>
                                <v-card-title>Select Facet</v-card-title>
                                <v-divider></v-divider>
                                <v-card-text style="height: 300px;">
                                  <v-list dense>
                                    <v-list-item-group color="primary">
                                      <v-text-field
                                        v-model="facetSearch"
                                        label="Search"
                                        clearable
                                        solo
                                      ></v-text-field>
                                      <v-list-item
                                        v-for="items in allFacets"
                                        :key="items.id"
                                        @click="onClickSelect(items)"
                                      >
                                        <v-list-item-content>
                                          <span class="label label-inline" v-if="!onSelectTrace(items)">
                                            {{items.facet.name.toUpperCase()}} {{items.code}}
                                          </span>
                                          <span class="label label-info label-inline mr-2" v-if="onSelectTrace(items)">
                                            {{items.facet.name.toUpperCase()}} {{items.code}}
                                          </span>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-list-item-group>
                                  </v-list>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                  <a href="javascript:;" class="btn btn-sm btn-light-success" @click="addFacet = false">
                                    Close
                                  </a>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                          <hr style="margin-top: 4px; margin-bottom: 4px"/>
                          <div>
                            <span v-for="ites in selectedFacet" :key="ites.id" class="label label-info label-inline mr-2">{{ites.facet.name.toUpperCase()}} {{ites.code}}</span>
                          </div>
                          <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <v-card outlined>
                          <v-img :contain="true"
                                 :src="featuredAssets === null ? 'https://via.placeholder.com/200' : `${assetUrl}/${featuredAssets.preview}`"
                                 height="200px"
                          ></v-img>
                          <v-card-title>
                            Assets
                          </v-card-title>
                          <hr/>
                          <v-card-actions>
                            <a href="javascript:;" class="btn btn-sm btn-light-success" @click="addAsset = true">
                              Add Assets
                            </a>
                            <v-spacer></v-spacer>
                            <v-btn small icon @click="showassets = !showassets">
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
                                    <v-img :contain="true"
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
                            <v-list-item @click="onRemoveAsset">
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
                            height: 800,
                            plugins: ['image', 'preview', 'link', 'advlist', 'autolink', 'lists', 'hr'],
                            file_picker_callback: filePickerCallBack,
                            file_picker_types: 'image',
                            automatic_uploads: true,
                            images_upload_handler: imageUploadHandler,
                            branding: false,
                            setup: onSetupEditor,
                            content_style: 'body { font-family: Arial; }'
                        }" v-model="editorModel"/>
                      </client-only>
                      <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <v-card-actions>
                      <a href="javascript:;" class="btn btn-light-primary font-weight-bold mr-2" @click="updateProduct">Update Product</a>
                    </v-card-actions>
                  </div>
                </div>
                <div v-if="tabs === 1">
                  <ProductOptions :id="$route.params.id"/>
                </div>
                  <div v-if="tabs === 2">
                      <div v-if="saleDataSet !== null">
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <a-select style="width: 120px" :value="chartType" @change="handleChangeChartType">
                                      <a-select-option value="MONTH">
                                          LAST MONTH
                                      </a-select-option>
                                      <a-select-option value="YEAR">
                                          LAST YEAR
                                      </a-select-option>
                                  </a-select>
                              </div>
                              <div>
                                  <span class="display-2">Total Sales: {{totalMountSales}} INR</span>
                              </div>
                          </div>
                          <ProductSaleChart :chart-data="saleDataSet" :options="chartOptions" />
                          <ProductSaleChart :chart-data="amountDataSet" :options="chartOptions" />
                      </div>
                  </div>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <v-dialog v-model="addAsset" fullscreen transition="dialog-bottom-transition">
        <div class="card" v-if="assets">
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
          <div class="card-body bg-white">
            <div class="row">
              <div class="col-md-12">
                <v-row>
                  <v-col
                    v-for="n in assets"
                    :key="n.id"
                    class="d-flex child-flex"
                    cols="2"
                  >
                    <v-card flat tile class="d-flex" :color="getSelectedColor(n.id)" hover
                            @click="onClickSelectAsset(n)" style="padding: 5px">
                      <v-img
                        :contain="true"
                        :src="`${assetUrl}/${n.preview}`"
                        aspect-ratio="1"
                        class="lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate
                                                 color="grey lighten-5"></v-progress-circular>
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
    import {
        Asset, Collection,
        CreateAssetDocument,
        GetAllAssetsDocument, GetallcollectionDocument, GetAllFacetsDocument,
        GetFacetValuesDocument,
        GetOneProductDocument, GetProductSaleDataDocument, UpdateProductCollectionDocument, UpdateProductDocument
    } from '../../../../gql';
    import {assetsURL} from '../../../../constants/GlobalURL';
    import Editor from '@tinymce/tinymce-vue';
    import ProductOptions from '../../../../components/products/product-options.vue';
    import ProductSaleChart from "~/components/charts/ProductSaleChart";

    @Component({
        layout: 'console',
        components: {
            ProductSaleChart,
            ProductOptions,
            'editor': Editor
        },
        apollo: {
            GetCollectionTree: {
                query: GetallcollectionDocument
            },
            product: {
                query: GetOneProductDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                pollInterval: 3000
            },
            assets: {
                query: GetAllAssetsDocument,
                variables() {
                    return {
                        limit: 50
                    }
                }
            },
            facetValues: {
                query: GetFacetValuesDocument,
                variables() {
                    return {
                        limit: 50,
                        iLike: `%${this.facetSearch}%`
                    }
                },
                pollInterval: 3000
            },
            GetProductSaleData: {
                query: GetProductSaleDataDocument,
                variables() {
                    if (this.$store.state.admin.vendorStore) {
                        return {
                            productId: this.$route.params.id,
                            type: this.chartType,
                            storeId: this.$store.state.admin.vendorStore.id
                        }
                    } else {
                        return {
                            productId: this.$route.params.id,
                            type: this.chartType,
                        }
                    }
                }
            }
        }
    })
    export default class ProductEdit extends Vue {
        private tabs = 0;
        private name: string = '';
        private slug: string = '';
        private showassets = false;
        private addAsset = false;
        private myAssets: Asset[] = [];
        private assetUrl = assetsURL;
        private selectedAssets: Asset[] = [];
        private featuredAssets: Asset | null = null;
        private addFacet = false;
        private selectCats = false;
        private allFacets: any[] = [];
        private selectedFacet: any[] = [];
        private editorModel: string = '';
        private editorRef: any = null;
        private showMenu: boolean = false;
        private x = 0;
        private y = 0;
        private menuId: any = null;
        private featureActive: boolean = true;
        private GetCollectionTree;
        private product;
        private allCollections: any[] = [];
        private selectedCollection: Collection | null = null
        private editorDesc = ''

        private assets

        private facetSearch = ''
        private facetValues: any

        private init = false

        private chartType = 'MONTH'

        private GetProductSaleData

        private saleDataSet: any = null
        private amountDataSet: any = null
        private totalMountSales = 0
        private chartOptions: any = {
            responsive: true,
            maintainAspectRatio: false,
            hover: true
        }

        private chartLoaded = false

        handleChangeChartType(value) {
            this.chartLoaded = false
            this.chartType = value
        }

        @Watch('GetProductSaleData')
        onChangeSaleData() {
            this.totalMountSales = 0
            const labels = this.GetProductSaleData.labels
            const saledataset = [
                {
                    label: 'Sales',
                    backgroundColor: '#8950FC',
                    data: this.GetProductSaleData.datasource.map(item => item.sum)
                }
            ]
            const amountdataset = [
                {
                    label: 'Volumetric Sale Value',
                    backgroundColor: '#8950FC',
                    data: this.GetProductSaleData.datasource.map(item => item.amount)
                }
            ]
            this.saleDataSet = {
                labels: labels,
                datasets: saledataset,
            }
            this.amountDataSet = {
                labels: labels,
                datasets: amountdataset,
            }
            for(const ams of this.GetProductSaleData.datasource) {
                this.totalMountSales = this.totalMountSales + ams.amount
            }
            this.chartLoaded = true
            console.log(this.saleDataSet, this.amountDataSet)
        }

        @Watch('GetCollectionTree')
        onGetCollections() {
            let onechindren: any[] = [];
            for (let vls of this.GetCollectionTree) {
                let twochildren: any[] = [];
                twochildren = this.onNodeEnter(vls)
                /*if (vls.children.length > 0) {
                    for (let second of vls.children) {
                        let thirdchild: any[] = [];
                        if (second.children.length > 0) {
                            for (let third of second.children) {
                                let thnode = {
                                    key: third.id,
                                    title: third.name,
                                    menu: third.inMenu,
                                    add: false,
                                    edit: true
                                };
                                thirdchild.push(thnode);
                            }
                        }
                        let twonode = {
                            key: second.id,
                            title: second.name,
                            menu: second.inMenu,
                            add: true,
                            edit: true,
                            children: thirdchild
                        };
                        twochildren.push(twonode);
                    }
                }*/
                let onNode = {
                    key: vls.id,
                    title: vls.name,
                    menu: vls.inMenu,
                    add: true,
                    edit: true,
                    children: twochildren
                };
                onechindren.push(onNode);
            }
            this.allCollections = onechindren;
        }

        onNodeEnter(nsitem): any[] {
            let childMod: any[] = []
            if (nsitem.children && nsitem.children.length > 0) {
                for (const csitem of nsitem.children) {
                    let asitem: any[] = []
                    asitem = this.onNodeEnter(csitem)
                    childMod.push({
                        key: csitem.id,
                        title: csitem.name,
                        menu: csitem.inMenu,
                        add: false,
                        edit: true,
                        children: asitem
                    })
                }
            }
            return childMod
        }

        @Watch('product')
        onGetOneProdDoc() {
            this.name = this.product.productName;
            this.slug = this.product.slug;
            if (!this.init) {
                this.selectedAssets = this.product.assets.map(item => item.asset);
                this.selectedFacet = this.product.facets.map(item => item);
            }
            this.editorDesc = this.product.description
            this.featuredAssets = this.product.featuredAsset;
            this.menuId = this.product.featuredAsset;
            if (this.product.collection !== null) {
                this.selectedCollection = this.product.collection
            }
            if (this.editorRef !== null) {
                this.editorModel = this.editorRef.setContent(this.product.description);
            }
            this.init = true
        }

        @Watch('editorRef')
        onEditorModelLoaded() {
            if (this.editorRef !== null) {
                this.editorModel = this.editorRef.setContent(this.editorDesc);
            }
        }

        @Watch('assets')
        onChangeAssets() {
        }

        onImageClicked(e, node) {
            e.preventDefault();
            this.showMenu = false;
            this.menuId = node;
            if (this.featuredAssets === null) {
                this.featureActive = false;
            } else {
                this.featureActive = this.featuredAssets!.id === node.id;
            }
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        }

        onSelectFeatured() {
            this.featuredAssets = this.menuId;
        }

        updateProduct() {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: UpdateProductDocument,
                variables: {
                    id: this.$route.params.id,
                    name: this.name,
                    desc: this.editorModel,
                    facet: this.selectedFacet.map(item => item.id),
                    asset: this.selectedAssets.map(item => item.id),
                    featured: this.featuredAssets!.id
                }
            }).then(value => {
                load()
                this.$notification.success({
                    description: 'Product Updated',
                    message: 'Product updating Successful'
                });
            }).catch(error => {
                load()
                this.$Message.error(error.message)
            });
        }

        onClickSelect(item) {
            if (this.selectedFacet.find(ids => ids.id === item.id) === undefined) {
                this.selectedFacet.push(item);
            } else {
                this.selectedFacet = this.selectedFacet.filter(its => its.id !== item.id);
            }
        }

        onSetupEditor(editor) {
            this.editorRef = editor;
        }

        onClickSelectAsset(node) {
            if (this.featuredAssets === null) {
                this.featuredAssets = node
            }
            this.selectedAssets.push(node)
        }

        onRemoveAsset() {
            const index = this.selectedAssets.findIndex(item => item.id === this.menuId)
            this.selectedAssets.splice(index, 1)
        }

        onUpdateCollection(selected, info) {
            this.$apollo.mutate({
                mutation: UpdateProductCollectionDocument,
                variables: {
                    id: this.$route.params.id,
                    collectionId: selected[0]
                }
            }).then(value => {
                this.selectCats = false
            }).catch(error => console.log(error))
        }

        @Watch('facetValues')
        onChangeFacetValue() {
            this.allFacets = this.facetValues
        }

        @Watch('selectedAssets')
        onChangeAssetS(){
            console.log(this.selectedAssets)
        }

        mounted() {
            /*this.$apollo.watchQuery({
                query: GetFacetValuesDocument,
                variables: {
                    first: 30
                }
            }).subscribe(value => {
                this.allFacets = value.data!.facetValues.edges;
            });*/
        }

        getSelectedColor(id): string {
            if (this.selectedAssets.find(item => item.id === id) !== undefined) {
                return '#1F7087';
            } else {
                return 'white';
            }
        }

        onSelectTrace(item) {
            return this.selectedFacet.find(ids => ids.id === item.id) !== undefined;
        }

        filePickerCallBack(callback, value, meta) {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            const apollo = this.$apollo;
            input.onchange = function(event: any) {
                // @ts-ignore
                const file = this.files[0];
                apollo.mutate({
                    mutation: CreateAssetDocument,
                    variables: {
                        file: file
                    }
                }).then(value1 => {
                    callback(`${assetsURL}/` + value1.data.createAsset.source, {title: file.filename});
                });
            };
            input.click();
        }

        imageUploadHandler(blobinfo, success, failure) {
            const file = new File([blobinfo.blob()], blobinfo.filename());
            this.$apollo.mutate({
                mutation: CreateAssetDocument,
                variables: {
                    file: file
                }
            }).then(value => {
                success(`${assetsURL}/` + value.data.createAsset.source);
            }).catch(error => {
                failure(error);
            });
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
    .container {
        display: block;
    }
</style>
