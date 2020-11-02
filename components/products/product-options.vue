<template>
    <div>
      <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.product.loading">
        <div class="spinner spinner-primary spinner-lg mr-15"></div>
      </div>
        <div v-if="!$apollo.queries.product.loading">
            <div class="d-flex justify-content-end" v-if="allVariants.length === 0">
              <a href="javascript:;" @click="addOption = true" class="btn btn-sm btn-light-success font-weight-bold mr-2">
                Add Product Variant
              </a>
            </div>
            <div>
                <div
                        v-for="(variants, index) of allVariants"
                        class="card mt-3 mb-3"
                        :key="index"
                >
                    <product-options-card :variants="variants" :all-prod-options="allProdOptions" :hsn="product.hsn"/>
                </div>
            </div>
          <v-bottom-sheet v-model="addOption" inset transition="slide-y-reverse-transition">
            <v-sheet>
              <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                  <h3 class="card-title align-items-start flex-column">
                    <a href="javascript:;" @click="addOption = false">
                      <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                    </a>
                    <span class="card-label font-weight-bolder text-dark ml-6">Add Product Options</span>
                  </h3>
                  <a href="javascript:;" @click="onAddOption" class="btn btn-light-primary btn-sm">
                    <i class="fas fa-plus font-size-h3 text-primary"></i> Add Options
                  </a>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="alert alert-danger" role="alert">
                        Product Variants can be added only once
                      </div>
                    </div>
                  </div>
                  <div class="row pl-4 pr-4" v-for="(opts, index) in allOptions" style="overflow: auto">
                    <div class="col-md-4" style="padding: 0px">
                      <div class="bg-white">
                        <div class="form-group pl-2 pr-2">
                          <label>Options</label>
                          <a-input v-model="opts.optionname"></a-input>
                          <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6" style="padding: 0px">
                      <div class="bg-white">
                        <div class="form-group pl-2 pr-2">
                          <label>Option Values</label>
                          <vue-tags-input
                            v-model="opts.optionKey" @tags-changed="newTags => opts.optionTags = newTags"
                            :tags="opts.optionTags" placeholder="Options Value"
                          />
                          <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2 pt-4">
                      <v-btn color="#F44336" style="color: white" small fab @click="onRemoveOption(index)"><v-icon>mdi-delete</v-icon></v-btn>
                    </div>
                  </div>
                  <div class="p-1 bg-white">
                    <a href="javascript:;" @click="onCreateProductionVariant" class="btn btn-light-primary btn-sm">
                      Add Product Variant
                    </a>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-bottom-sheet>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
    import {ProductOptionsEnum} from '../../utils/ProductOptionsEnum';
    import {CreateProductVariantsDocument, GetAllTaxRatesDocument, GetProductVariantDocument, Product} from '../../gql';
    import ProductPriceOptions from './product-price-options.vue';
    import ProductOptionsCard from './product-options-card.vue';
    @Component({
        components: {ProductOptionsCard, ProductPriceOptions},
        apollo: {
            product: {
                query: GetProductVariantDocument,
                variables() {
                    return {
                        id: this.id
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class ProductOptions extends Vue {
        @Prop() id: string
        private addOption: boolean = false
        private allOptions: ProductOptionsEnum[] = []
        private allVariants: any[] = []
        private allProdOptions: any[] = []
        private product: Product
        private loading

        onAddOption() {
            this.allOptions.push({
                optionname: '',
                optionkey: '',
                optionTags: []
            })
        }

        onRemoveOption(index) {
            const allarray = this.allOptions
            allarray.splice(index, 1)
            this.allOptions = allarray
        }

        onCreateProductionVariant() {
          const load: any = this.$Message.loading('Action in progress..');
            const masterArray = this.allOptions.map(item => ({
                optionname: item.optionname,
                optionTags: item.optionTags.map((ti: any) => ti!.text)
            }))
            this.$apollo.mutate({
                mutation: CreateProductVariantsDocument,
                variables: {
                    prodId: this.id,
                    options: JSON.stringify(masterArray)
                }
            }).then(value => {
              load()
              this.$notification.success({
                description: 'Product Variants Created',
                message: 'Variants Added'
              })
                this.addOption = false
                this.allOptions.push({
                    optionname: '',
                    optionkey: '',
                    optionTags: []
                })
            })
        }

        @Watch('product')
        onGetProd() {
            console.log(this.product)
            this.allVariants = this.product.variants
            this.allProdOptions = this.product.options
        }

        mounted() {
            this.allOptions.push({
                optionname: '',
                optionkey: '',
                optionTags: []
            })
        }
    }
</script>
