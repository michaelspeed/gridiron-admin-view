<template>
    <div>
        <div v-if="$apollo.queries.product.loading">
            <div class="d-flex justify-content-center align-items-center">
                <v-progress-circular
                        indeterminate
                        color="#161537"
                ></v-progress-circular>
            </div>
        </div>
        <div v-if="!$apollo.queries.product.loading">
            <div class="d-flex justify-content-end" v-if="allVariants.length === 0">
                <v-btn class="ma-2" outlined small color="#3F51B5" @click="addOption = true">Add Product Variant</v-btn>
            </div>
            <div>
                <v-card
                        outlined
                        v-for="(variants, index) of allVariants"
                        class="mx-auto"
                        style="margin: 12px"
                        :key="index"
                >
                    <product-options-card :variants="variants" :all-prod-options="allProdOptions"/>
                </v-card>
            </div>
        </div>
        <v-bottom-sheet v-model="addOption" inset>
            <v-sheet>
                <v-toolbar flat>
                    <v-btn small fab @click="addOption = false"><v-icon>arrow_back</v-icon></v-btn>
                    <v-toolbar-title>Add Product Options</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <div>
                        <v-btn small fab @click="onAddOption"><v-icon>mdi-plus</v-icon></v-btn>
                    </div>
                </v-toolbar>
                <div class="row p-2">
                    <div class="col-md-12">
                        <v-alert type="error" style="background-color: #F44336">
                            Product Variants can be added only once
                        </v-alert>
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
                    <button type="button" class="btn btn-primary" @click="onCreateProductionVariant">Add Product Variant</button>
                </div>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
    import {ProductOptionsEnum} from '../../utils/ProductOptionsEnum';
    import {CreateProductVariantsDocument, GetAllTaxRatesDocument, GetProductVariantDocument} from '../../gql';
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
        private product
        private loading

        onAddOption() {
            this.allOptions.push({
                optionname: '',
                optionkey: '',
                optionTags: []
            })
        }

        @Watch('loading')
        onLoading() {
            console.log(this.loading)
        }

        onRemoveOption(index) {
            const allarray = this.allOptions
            allarray.splice(index, 1)
            this.allOptions = allarray
        }

        onCreateProductionVariant() {
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
            this.allVariants = this.product.variants.edges
            this.allProdOptions = this.product.options.edges
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
