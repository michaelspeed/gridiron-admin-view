<template>
    <div class="container">
        <div v-if="!$apollo.queries.getStockKeepingVendor.loading">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group pl-2 pr-2">
                        <label>SKU</label>
                        <a-input v-model="sku"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group pl-2 pr-2">
                        <label>Quantity</label>
                        <a-input v-model="quantity"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group pl-2 pr-2">
                        <label>Threshold</label>
                        <a-input v-model="threshold"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group pl-2 pr-2">
                        <label>Multiple Shipping</label>
                        <div>
                            <a-switch :checked="multiple" @change="onChangeMultiple"/>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group pl-2 pr-2">
                        <label>Backorders</label>
                        <div>
                            <a-switch :checked="backorder" @change="onChangeBackorder"/>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group pl-2 pr-2">
                        <label>Stock Status</label>
                        <div>
                            <a-switch :checked="stockstatus" @change="onChangeStockStatus"/>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                </div>
            </div>
            <v-card-actions>
                <v-spacer></v-spacer>
                <a-button type="primary" @click="onCreateStock" :loading="loading">Add New Stock</a-button>
            </v-card-actions>
        </div>
        <div v-if="$apollo.queries.getStockKeepingVendor.loading">
            <div class="d-flex justify-content-center align-items-center">
                <v-progress-circular
                        indeterminate
                        color="#161537"
                ></v-progress-circular>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {CreateOrUpdateStockDocument, GetStockKeepingVendorDocument, StockKeepingType} from '../../gql';
    import {mapState} from 'vuex';

    @Component({
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                store: (store: any) => store.store.store
            })
        },
        apollo: {
            getStockKeepingVendor: {
                query: GetStockKeepingVendorDocument,
                variables() {
                    return {
                        variantId: this.id,
                        vendorId: this.vendor ? this.vendor.id : null
                    }
                }
            }
        }
    })
    export default class ProductStockManagement extends Vue {
        @Prop() id: string
        private stockId: string
        private store: any
        private admin: any
        @Prop() vendor: any

        private loading = false

        // Stock
        private sku = ''
        private quantity = ''
        private threshold = ''

        private multiple = false
        private backorder = false
        private stockstatus = false
        private type = StockKeepingType.Vendor

        private getStockKeepingVendor

        @Watch('getStockKeepingVendor')
        onGetStock() {
            if (this.getStockKeepingVendor) {
                this.stockId = this.getStockKeepingVendor.id
                this.sku = this.getStockKeepingVendor.sku
                this.quantity = this.getStockKeepingVendor.quantity
                this.threshold = this.getStockKeepingVendor.threshold
                this.multiple = this.getStockKeepingVendor.multiple
                this.backorder = this.getStockKeepingVendor.backorder
                this.stockstatus = this.getStockKeepingVendor.stockstatus
            }
        }

        mounted() {
            if (this.admin) {
                this.type = StockKeepingType.Global
            } else {
                this.type = StockKeepingType.Vendor
            }
        }

        onChangeBackorder(checked){
            this.backorder = checked
        }

        onChangeMultiple(checked) {
            this.multiple = checked
        }

        onChangeStockStatus(checked) {
            this.stockstatus = checked
        }


        onCreateStock() {
            this.loading = true
            this.$apollo.mutate({
                mutation: CreateOrUpdateStockDocument,
                variables: {
                    quantity: parseFloat(this.quantity),
                    threshold: parseFloat(this.threshold),
                    sku: this.sku,
                    multiple: this.multiple,
                    backorder: this.backorder,
                    stockstatus: this.stockstatus,
                    variantId: this.id,
                    stockId: this.stockId,
                    storeId: this.store.id,
                    type: this.type
                }
            }).then(value => {
                this.loading = false
                this.stockId = value.data.createOrUpdateStock.id
                this.$emit('close')
                this.$Message.success('Stocks Updated')
            }).catch(error => {
                this.loading = false
                this.$Message.error(error.message)
            })
        }
    }
</script>
