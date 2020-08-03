<template>
    <v-card style="padding: 20px" tile>
        <div>
            <div class="">
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
                <div class="d-flex justify-content-between align-items-center">
                    <a-button type="primary" size="small" @click="onUpdatePrice">Set Price</a-button>
                    <v-switch
                            v-model="taxIncluded"
                            label="TaxIncluded"
                            dense
                            flat
                    ></v-switch>
                </div>
            </div>
            <div v-if="price !== null" style="margin-top: 4px">
                <h6>Price: ₹{{mainprice}}</h6>
                <span v-if="!taxIncluded">Tax: {{price.tax.value}} %</span>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateVariantPriceDocument,
        CreateVariantPriceMutationVariables,
        GetAllTaxRatesDocument,
        ProductVariantPrice, UpdateVariantPriceDocument, UpdateVariantPriceMutationVariables
    } from '../../gql';

    @Component
    export default class ProductPriceOptions extends Vue {
        @Prop() price: ProductVariantPrice | null
        @Prop() variant: string
        private taxSlab = ''
        private mainprice: number = 0
        private allTaxRates = []
        private taxIncluded: boolean = true

        onUpdatePrice() {
            if (this.price === null) {
                this.$apollo.mutate<{CreateVariantPrice: ProductVariantPrice}, CreateVariantPriceMutationVariables>({
                    mutation: CreateVariantPriceDocument,
                    variables: {
                        taxId: this.taxSlab,
                        price: Number(this.mainprice),
                        variantId: this.variant,
                        taxIncluded: this.taxIncluded
                    }
                }).then(value => {
                    this.$toasted.show('Price Updated', {duration: 3000, theme: 'outline'})
                })
                .catch(error => {
                    this.$toasted.show(error.message, {duration: 3000, type: 'error'})
                })
            } else {
                this.$apollo.mutate<{UpdateVariantPrice: ProductVariantPrice}, UpdateVariantPriceMutationVariables>({
                    mutation: UpdateVariantPriceDocument,
                    variables :{
                        taxId: this.taxSlab,
                        price: Number(this.mainprice),
                        variantPriceId: this.price!.id,
                        taxIncluded: this.taxIncluded
                    }
                }).then(value => {
                    this.$toasted.show('Price Updated', {duration: 3000, theme: 'outline'})
                }).catch(error => {
                    this.$toasted.show(error.message, {duration: 3000, type: 'error'})
                })
            }
        }

        @Watch('price')
        onMountedPrice() {
            this.mainprice = this.price!.price
            this.taxSlab = this.price!.tax.id
            this.taxIncluded = this.price!.taxIncluded
        }

        mounted() {
            this.$apollo.watchQuery({
                query: GetAllTaxRatesDocument
            }).subscribe(value => {
                this.allTaxRates = value.data!.GetAllTaxRates
                if (this.price !== null) {
                    this.mainprice = this.price!.price
                    this.taxSlab = this.price!.tax.id
                    this.taxIncluded = this.price!.taxIncluded
                }
            })
        }
    }
</script>
