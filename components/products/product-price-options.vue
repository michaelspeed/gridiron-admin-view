<template>
    <div class="card">
      <div class="card-header border-0 d-flex justify-content-between" style="padding: 10px; margin-bottom: 0px" :style="{'background-color': theme.colors.theme.base.primary}">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-white">Price</span>
        </h3>
      </div>
        <div class="card-body" style="padding: 14px">
            <div class="d-flex justify-content-center align-items-center m-20 w-100"
                 v-if="$apollo.queries.GetPriceForVariant.loading">
                <div class="spinner spinner-primary spinner-lg mr-15"></div>
            </div>
            <div v-if="!$apollo.queries.GetPriceForVariant.loading">
                <!--<v-select
                        label="Tax Rule"
                        :items="allTaxRates"
                        item-value="id"
                        item-text="name"
                        v-model="taxSlab"
                ></v-select>-->
                <v-text-field
                        label="Price"
                        v-model="mainprice"
                        type="number"
                ></v-text-field>
              <div v-if="price !== null" style="margin-top: 4px; width: 100%" class="d-flex justify-content-between align-items-center mt-5 mb-5">
                <h6 class="text-muted">Total Price: ₹{{getMainPrice()}}</h6>
                <span v-if="!taxIncluded" class="text-black-50">Tax: {{price.tax.value}} %</span>
              </div>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2"
                     :class="{'spinner spinner-darker-success spinner-left mr-3': loading}"
                     @click="onUpdatePrice">Set Price</a>
                    <v-switch
                            v-model="taxIncluded"
                            label="TaxIncluded"
                            dense
                            flat
                    ></v-switch>
                </div>
                <hr/>
                <div class="d-flex justify-content-between align-items-center mt-5 mb-5" v-if="GetPriceForVariant && GetPriceForVariant.promoprice !== null">
                    <span class="text-muted">{{GetPriceForVariant.promoprice.priceType}}</span>
                    <span class="text-muted">{{GetPriceForVariant.promoprice.priceType === promopriceType.FLAT ? '₹' : '%'}} {{GetPriceForVariant.promoprice.value}}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-5 mb-5">
                    <span class="text-muted">Set Promotion Price</span>
                    <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2" @click="setpromotion = true">Apply Promotion</a>
                </div>
            </div>
        </div>
        <v-dialog
            v-model="setpromotion"
            width="500"
        >

            <v-card>
                <v-card-title class="headline primary text-white">
                    Promotion Price
                </v-card-title>

                <v-card-text style="margin-top: 10px">
                    <v-text-field
                        :label="promopriceselect === promopriceType.FLAT ? 'Price' : 'Percentage'"
                        v-model="promoprice"
                        type="number"
                        outlined
                    ></v-text-field>
                    <a-radio-group v-model="promopriceselect">
                        <a-radio-button :value="promopriceType.PERCENTAGE">
                            PERCENTAGE
                        </a-radio-button>
                        <a-radio-button :value="promopriceType.FLAT">
                            FLAT
                        </a-radio-button>
                    </a-radio-group>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <a href="javascript:;" class="btn btn-light-primary btn-sm font-weight-bold mr-2" @click="setPromotionPrice">Set Promotion</a>
                    <a href="javascript:;" class="btn btn-light-danger btn-sm font-weight-bold mr-2" @click="setpromotion = false">Cancel</a>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateOnePromotionVariantPriceDocument,
        CreateVariantPriceDocument,
        CreateVariantPriceMutationVariables,
        GetAllTaxCategoryDocument,
        GetAllTaxRatesDocument,
        GetPriceForVariantDocument,
        ProductVariantPrice,
        SetPriceOnPromotionVariantPriceDocument,
        UpdateVariantPriceDocument,
        UpdateVariantPriceMutationVariables
    } from '../../gql';
    import {PricePromoType} from "~/utils/OrderStageType";
    import moment from "moment";
    import {GridironViewSettings} from "~/utils/theme.settings";

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
            },
            GetAllTaxRates: {
                query: GetAllTaxRatesDocument
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
        private GetAllTaxRates

        private loading = false

        private setpromotion = false
        private promoprice = 0
        private promopriceType = PricePromoType
        private promopriceselect = PricePromoType.FLAT

        private theme = GridironViewSettings

        @Watch('GetAllTaxRates')
        onChangeTaxRates() {
            this.allTaxRates = this.GetAllTaxRates
        }

        getMainPrice() {
            if (this.GetPriceForVariant && this.GetPriceForVariant.promoprice !== null) {
                if (this.GetPriceForVariant.promoprice.priceType === PricePromoType.PERCENTAGE) {
                    let totalPrice = this.mainprice - (this.mainprice * (this.GetPriceForVariant.promoprice.value / 100))
                    return totalPrice.toFixed(2)
                } else {
                    return this.mainprice - this.GetPriceForVariant.promoprice.value
                }
            } else {
                return this.mainprice
            }
        }

        @Watch('GetPriceForVariant')
        onPriceVariantChanged() {
            if (this.GetPriceForVariant !== null) {
                this.mainprice = this.GetPriceForVariant!.price
                if (this.GetPriceForVariant!.tax) {
                    this.taxSlab = this.GetPriceForVariant!.tax.id
                }
                this.taxIncluded = this.GetPriceForVariant!.taxIncluded
            }
        }

        setPromotionPrice() {
            this.$Message.loading('Action in Progress ...')
            if (this.GetPriceForVariant.promoprice) {

            } else {
                this.$apollo.mutate({
                    mutation: CreateOnePromotionVariantPriceDocument,
                    variables: {
                        priceType: this.promopriceselect,
                        value: Number(this.promoprice),
                        startsAt: moment().toDate()
                    }
                }).then(value => {
                    this.$apollo.mutate({
                        mutation: SetPriceOnPromotionVariantPriceDocument,
                        variables: {
                            promo: value.data.createOnePromotionVariantPrice.id,
                            relan: this.GetPriceForVariant.id
                        }
                    }).then(value1 => {
                        this.setpromotion = false
                    }).catch(error => this.$Message.error(error.message))
                }).catch(error => this.$Message.error(error.message))
            }
        }

        onUpdatePrice() {
            this.loading = true
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
                    this.loading = false
                })
                .catch(error => {
                    this.$Message.error(error.message)
                    this.loading = false
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
                    this.loading = false
                }).catch(error => {
                    this.$Message.error(error.message)
                    this.loading = false
                })
            }
        }
    }
</script>
