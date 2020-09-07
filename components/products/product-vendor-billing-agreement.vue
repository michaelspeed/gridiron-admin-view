<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 p-10">
                <a-select
                    :value="hchange"
                    placeholder="Select users"
                    style="width: 100%"
                    :filter-option="false"
                    :allowClear="true"
                    :showSearch="true"
                    :not-found-content="$apollo.queries.stores.loading ? undefined : null"
                    @search="fetchUser"
                    @change="handleChange"
                    dropdownClassName="drop-class"
                >
                    <a-spin v-if="fetching" slot="notFoundContent" size="small" />
                    <a-select-option v-for="d in stores" :key="d.id">
                        {{ d.storeName }}
                    </a-select-option>
                </a-select>
            </div>
            <div class="col-md-6 p-10">
                <a-input-number v-model="value" style="width: 100%"/>
            </div>
        </div>
        <v-card-actions>
            <v-spacer></v-spacer>
            <a href="javascript:;" class="btn btn-light-success btn-sm font-weight-bold mr-2" @click="onCreateAgreement">Add / Update Billing Agreement</a>
        </v-card-actions>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {mapState} from "vuex";
import {
    CreateVendorProdVariantDocument,
    GetAllVebdorsDocument,
    GetBillingAgreementForStoreDocument,
    SearchStoreDocument, UpdateVendorProdVariantDocument
} from "~/gql";

@Component({
    computed: {
        ...mapState({
            admin: (store: any) => store.admin.administrator,
            store: (store: any) => store.store.store
        })
    },
    apollo: {
        stores: {
            query: SearchStoreDocument,
            variables() {
                return {
                    like: `%${this.like}%`
                }
            }
        },
        GetBillingAgreementForStore: {
            query: GetBillingAgreementForStoreDocument,
            variables() {
                return {
                    variantId: this.id,
                    storeId: this.hchange
                }
            }
        }
    }
})
export default class ProductVendorBillingAgreement extends Vue {
    @Prop() id: string
    private like = ''
    private fetching = false
    private hchange = ''

    private stores
    private GetBillingAgreementForStore

    private updateId

    private value = 0

    @Watch('GetBillingAgreementForStore')
    onWatchGetBillingAgreementForStore() {
        if (this.GetBillingAgreementForStore) {
            this.value = this.GetBillingAgreementForStore.value
            this.updateId = this.GetBillingAgreementForStore.id
        }
    }

    onCreateAgreement() {
        this.$Message.loading('Updating Agreement ....')
        if (this.updateId) {
            this.$apollo.mutate({
                mutation: UpdateVendorProdVariantDocument,
                variables: {
                    value: this.value,
                    id: this.updateId
                }
            }).then(value => {
                this.$Message.success('Updated Agreement')
                this.$emit('close')
            }).catch(error => {
                this.$Message.error(error.message)
            })
        } else {
            this.$apollo.mutate({
                mutation: CreateVendorProdVariantDocument,
                variables: {
                    value: this.value,
                    variantId: this.id,
                    storeId: this.hchange
                }
            }).then(value => {
                this.$Message.success('Created Agreement')
                this.$emit('close')
            }).catch(error => {
                this.$Message.error(error.message)
            })
        }
    }

    handleChange(value) {
        this.hchange = value
    }

    fetchUser(value) {
        this.like = value
    }
}
</script>

<style>
.drop-class {
    z-index: 1000000;
}
</style>
