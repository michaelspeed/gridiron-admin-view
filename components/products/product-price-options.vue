<template>
    <div class="card">
      <div class="card-header border-0 py-5 d-flex justify-content-between">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">Price</span>
        </h3>
      </div>
        <div class="card-body">
            <div class="d-flex justify-content-center align-items-center m-20 w-100"
                 v-if="$apollo.queries.GetPriceForVariant.loading">
                <div class="spinner spinner-primary spinner-lg mr-15"></div>
            </div>
            <div v-if="!$apollo.queries.GetPriceForVariant.loading">
                <v-select
                        label="Tax Rule"
                        :items="allTaxRates"
                        item-value="id"
                        item-text="name"
                        v-model="taxSlab"
                ></v-select>
                <v-text-field
                        label="Price"
                        v-model="mainprice"
                        type="number"
                ></v-text-field>
              <div v-if="price !== null" style="margin-top: 4px">
                <h6>Price: ₹{{mainprice}}</h6>
                <span v-if="!taxIncluded">Tax: {{price.tax.value}} %</span>
              </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2" @click="onUpdatePrice">Set Price</a>
                    <v-switch
                            v-model="taxIncluded"
                            label="TaxIncluded"
                            dense
                            flat
                    ></v-switch>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateVariantPriceDocument,
        CreateVariantPriceMutationVariables, GetAllTaxCategoryDocument,
        GetAllTaxRatesDocument, GetPriceForVariantDocument,
        ProductVariantPrice, UpdateVariantPriceDocument, UpdateVariantPriceMutationVariables
    } from '../../gql';

    @Component({
        apollo: {
            GetPriceForVariant:{
                query: GetPriceForVariantDocument,
                variables() {
                    return {
                        prodId: this.variant,
                        storeId: this.$store.state.admin.vendorStore !== null ? this.$store.state.admin.vendorStore.id : this.$store.state.admin.store.id
                    }
                },
                pollInterval: 3000
            },
            GetAllTaxCategory: {
                query: GetAllTaxCategoryDocument
            }
        }
    })
    export default class ProductPriceOptions extends Vue {
        @Prop() price: ProductVariantPrice | null
        @Prop() variant: string
        private taxSlab = ''
        private mainprice: number = 0
        private allTaxRates = []
        private taxIncluded: boolean = true

        private GetPriceForVariant
        private GetAllTaxCategory

        @Watch('GetAllTaxCategory')
        onChangeTaxRates() {
            this.allTaxRates = this.GetAllTaxCategory
        }

        @Watch('GetPriceForVariant')
        onPriceVariantChanged() {
            if (this.GetPriceForVariant !== null) {
                this.mainprice = this.GetPriceForVariant!.price
                this.taxSlab = this.GetPriceForVariant!.tax.id
                this.taxIncluded = this.GetPriceForVariant!.taxIncluded
            }
        }

        onUpdatePrice() {
            if (this.GetPriceForVariant === null) {
                this.$apollo.mutate<{CreateVariantPrice: ProductVariantPrice}, CreateVariantPriceMutationVariables>({
                    mutation: CreateVariantPriceDocument,
                    variables: {
                        taxId: this.taxSlab,
                        price: Number(this.mainprice),
                        variantId: this.variant,
                        taxIncluded: this.taxIncluded,
                        storeId: this.$store.state.admin.vendorStore !== null ? this.$store.state.admin.vendorStore.id : this.$store.state.admin.store.id
                    }
                }).then(value => {
                    this.$Message.success('Price Updated')
                })
                .catch(error => {
                    this.$Message.error(error.message)
                })
            } else {
                this.$apollo.mutate<{UpdateVariantPrice: ProductVariantPrice}, UpdateVariantPriceMutationVariables>({
                    mutation: UpdateVariantPriceDocument,
                    variables :{
                        taxId: this.taxSlab,
                        price: Number(this.mainprice),
                        variantPriceId: this.GetPriceForVariant!.id,
                        taxIncluded: this.taxIncluded
                    }
                }).then(value => {
                    this.$Message.success('Price Updated')
                }).catch(error => {
                    this.$Message.error(error.message)
                })
            }
        }
    }
</script>
