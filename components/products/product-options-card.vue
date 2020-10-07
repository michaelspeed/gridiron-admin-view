<template>
    <div v-if="!$apollo.queries.assets.loading">
      <div class="card-header border-0 py-5 d-flex justify-content-between" :style="{'background-color': theme.colors.theme.base.primary}">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-white">{{variants.name}}</span>
        </h3>
        <div class="card-toolbar">
          <v-switch
            v-model="variants.enabled"
            label="Enabled"
            dense
            color="accent"
          ></v-switch>
        </div>
      </div>
        <div class="row">
            <div class="col-md-2">
                <v-img :contain="true"
                       :src="variants.asset === null ? 'https://via.placeholder.com/200' : `${assetUrl}/${variants.asset.asset.preview}`"
                       height="200px"
                ></v-img>
                <div class="d-flex justify-content-center mt-2">
                  <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2" @click="addAsset = true">Change Asset</a>
                </div>
            </div>
            <div class="col-md-4">
                <product-price-options :price="variants.price" :variant="variants.id" v-if="hsn !== null"/>
                <div v-if="hsn === null">
                    <v-alert
                        dense
                        outlined
                        type="error"
                    >
                        Please add <strong>HSN Code</strong> to enable price options
                    </v-alert>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <h6>Stock Management</h6>
                        <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2" @click="stockmanagement = true">Stock Management</a>
                      </div>
                      <hr style="margin-top: 5px; margin-bottom: 5px"/>
                      <div class="d-flex justify-content-between align-items-center">
                        <h6>Specification Management</h6>
                        <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2" @click="$router.push(`/app/catalog/products/variants/specs/${variants.id}`)">Set Specification Management</a>
                      </div>
                      <hr style="margin-top: 5px; margin-bottom: 5px"/>
                      <div class="d-flex justify-content-between align-items-center">
                        <h6>Seo Management</h6>
                        <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2" @click="addseo = true">Go To Seo Management</a>
                      </div>
                        <hr style="margin-top: 5px; margin-bottom: 5px"/>
                      <div class="d-flex justify-content-between align-items-center" v-if="admin">
                        <h6>Vendors Strategy</h6>
                        <a href="javascript:;" class="btn btn-light-primary btn-sm font-weight-bold mr-2" @click="addBillAgree = true">Set Vendor Strategy</a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>

        <v-card-actions>
            <v-list-item class="grow">
                <div>
                  <span v-for="(chips, index) of onGetVariantOptions(variants.name)"
                        :key="index" class="label label-info label-inline mr-2"><span class="font-weight-bold mr-2">{{chips.name.toUpperCase()}}</span> {{chips.code}}</span>
                </div>

                <v-row
                        align="center"
                        justify="end"
                >

                </v-row>
            </v-list-item>
        </v-card-actions>
        <v-dialog v-model="addAsset" fullscreen transition="dialog-bottom-transition">
            <div class="card" style="border-radius: 0px">
              <div class="card-header border-0 py-5 d-flex justify-content-between">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label font-weight-bolder text-dark">Add Assets</span>
                </h3>
                <div class="card-toolbar">
                  <a href="javascript:;" class="btn btn-light-danger btn-sm font-weight-bolder font-size-sm" @click="addAsset = false">
                    <i class="fas fa-times"></i>
                    Close
                  </a>
                </div>
              </div>
                <div style="background-color: white">
                    <v-container>
                        <div class="row">
                            <div class="col-md-12">
                                <v-row>
                                    <v-col
                                            v-for="n in assets"
                                            :key="n.id"
                                            class="d-flex child-flex"
                                            cols="2"
                                    >
                                        <v-card flat tile class="d-flex" hover style="padding: 5px">
                                            <v-img
                                                    :src="`${assetUrl}/${n.preview}`"
                                                    aspect-ratio="1"
                                                    class="lighten-2"
                                                    :contain="true"
                                                    @click="onClickAddAsset(n.id)"
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
                    </v-container>
                </div>
            </div>
        </v-dialog>
        <v-bottom-sheet v-model="addseo" inset>
          <div class="card">
            <div class="card-header border-0 py-5 d-flex justify-content-between align-items-center">
              <h3 class="card-title align-items-start flex-column">
                <a href="javascript:;" @click="addseo = false">
                  <i class="fas fa-arrow-left font-size-h1 text-primary"></i>
                </a>
                <span class="card-label font-weight-bolder text-dark ml-3">Add Product Seo</span>
              </h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label>Enter Meta URL</label>
                <a-input size="large" v-model="metaUrl" :disabled="true"></a-input>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <div class="form-group">
                <label>Enter Meta Title</label>
                <a-input size="large" v-model="metaTitle"></a-input>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <div class="form-group">
                <label>Enter Meta Keywords</label>
                <vue-tags-input
                  v-model="metaKey" @tags-changed="newTags => metaKeywords = newTags"
                  :tags="metaKeywords" placeholder="Enter keywords"
                />
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <div class="form-group">
                <label>Enter Meta Description</label>
                <a-input size="large" type="textarea" v-model="metaDesc"></a-input>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
              </div>
              <v-card-actions>
                <button type="button" class="btn btn-light-primary btn-sm" @click="onCreateProdSeo">Create / Update Seo</button>
              </v-card-actions>
            </div>
          </div>
        </v-bottom-sheet>
        <v-dialog
                v-model="stockmanagement"
                transition="dialog-bottom-transition"
                width="60%"
        >
            <v-card light style="overflow-x: hidden">
                <v-toolbar
                        flat
                        class="bg-primary"
                >
                  <a href="javascript:;" @click="stockmanagement = false">
                    <i class="fas fa-times text-white font-size-h1"></i>
                  </a>
                    <v-toolbar-title class="ml-6 text-white font-size-h1-md">Stock Management</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <product-stock-management :id="variants.id" @close="onClickClose" :vendor="vendor"/>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="addBillAgree"
                transition="dialog-bottom-transition"
                width="60%"
        >
            <v-card light style="overflow-x: hidden">
                <v-toolbar
                        flat
                        class="bg-primary"
                >
                  <a href="javascript:;" @click="addBillAgree = false">
                    <i class="fas fa-times text-white font-size-h1"></i>
                  </a>
                    <v-toolbar-title class="ml-6 text-white font-size-h1-md">Vendor Billing Agreement</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <product-vendor-billing-agreement :id="variants.id" @close="onBillClose"/>
                <!--<product-stock-management :id="variants.id" @close="onClickClose" :vendor="vendor"/>-->
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import ProductPriceOptions from './product-price-options.vue';
    import {
        CreateProductSeoDocument,
        CreateProductVariantAssetDocument,
        GetAllAssetsDocument, Hsn, Store,
        UpdateProductSeoDocument
    } from '../../gql';
    import {assetsURL} from '../../constants/GlobalURL';
    import {SlugLoader} from '../../utils/slugLoader';
    import ProductStockManagement from './product-stock-management.vue';
    import {mapState} from 'vuex';
    import ProductVendorBillingAgreement from "~/components/products/product-vendor-billing-agreement.vue";
    import {GridironViewSettings} from "~/utils/theme.settings";

    @Component({
        components: {ProductStockManagement, ProductPriceOptions, ProductVendorBillingAgreement},
        apollo: {
            $loadingKey: 'loading',
            assets: {
                query: GetAllAssetsDocument,
                variables() {
                    return {
                        limit: this.assetLimit
                    }
                },
                pollInterval: 3000
            }
        },
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                store: (store: any) => store.admin.store,
                vendorStore: (store: any) => store.admin.vendorStore,
                vendor: (store: any) => store.admin.vendor
            })
        }
    })
    export default class ProductOptionsCard extends Vue {
        @Prop() variants
        @Prop() allProdOptions

        @Prop() hsn

        private store: Store | null
        private specs = false
        private addAsset = false
        private assetUrl = assetsURL;
        private addseo = false
        private addBillAgree = false

        private vendor: any
        private admin: any

        private metaUrl: string = ''
        private metaTitle: string = ''
        private metaDesc: string = ''
        private metaKeywords: any[] = []
        private metaKey: string = ''

        private assets
        private loading

        private assetLimit = 50

        private stockmanagement = false
        private theme = GridironViewSettings

        onClickClose() {
            this.stockmanagement = false
        }

        onBillClose() {
            this.addBillAgree = false
        }

        mounted() {
            if (this.variants !== undefined && this.variants.seo !== null) {
              this.metaUrl = this.variants.seo ? this.variants.seo.urlKey :SlugLoader(this.variants.name)
              this.metaTitle = this.variants.seo.metatitle
              this.metaDesc = this.variants.seo.metadesc
              this.metaKeywords = this.variants.seo.metakeywords.map(item => ({text: item}))
            }
        }

        onCreateProdSeo(){
            const load: any = this.$message
                .loading('Creating / Update Seo..')
            if (this.variants.seo) {
                this.$apollo.mutate({
                    mutation: UpdateProductSeoDocument,
                    variables: {
                        seoId: this.variants.seo.id,
                        metadesc: this.metaDesc,
                        metakeywords: this.metaKeywords.map(item => item.text),
                        urlKey: this.metaUrl,
                        metatitle: this.metaTitle
                    }
                }).then(value => {
                    load()
                    this.addseo = false
                    this.$message.success('Seo Updated')
                }).catch(error => {
                    load()
                    this.$message.error(error.message)
                })
            } else {
                this.$apollo.mutate({
                    mutation: CreateProductSeoDocument,
                    variables: {
                        variantId: this.variants.id,
                        metadesc: this.metaDesc,
                        metakeywords: this.metaKeywords.map(item => item.text),
                        urlKey: this.metaUrl,
                        metatitle: this.metaTitle
                    }
                }).then(value => {
                    load()
                    this.addseo = false
                    this.$message.success('Seo Created')
                }).catch(error => {
                    load()
                    this.$message.error(error.message)
                })
            }
        }

        onClickAddAsset(assetId) {
            this.$apollo.mutate({
                mutation: CreateProductVariantAssetDocument,
                variables: {
                    assetId: assetId,
                    id: this.variants.id
                }
            }).then(value => {
                this.addAsset = false
            }).catch(e => {
                this.addAsset = false
                this.$Message.error(e.message)
            })
        }

        onGetVariantOptions(name: string) {
            let allopts: any[] = []
            for (let its of this.allProdOptions) {
                for (let opts of its.options) {
                    if (name.indexOf(opts.code) !== -1) {
                        allopts.push({
                            name: its.name,
                            code: opts.name
                        })
                    }
                }
            }
            let filterdOpts: any[] = []
            for (let item of allopts) {
                if (filterdOpts.filter(itss => itss.name === item.name).length === 0) {
                    filterdOpts.push(item)
                }
            }
            return filterdOpts
        }
    }
</script>

<style>
  .v-input--selection-controls {
    margin-top: 0px;
  }
</style>
