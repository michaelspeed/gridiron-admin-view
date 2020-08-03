<template>
    <div>
        <a-button type="primary" size="small" @click="stockmanagement = true">Edit</a-button>
        <v-dialog
                v-model="stockmanagement"
                transition="dialog-bottom-transition"
                width="60%"
        >
            <v-card light style="overflow-x: hidden">
                <v-toolbar
                        flat
                        dark
                        color="#161537"
                >
                    <v-btn fab color="#161537" @click="stockmanagement = false"><v-icon>close</v-icon></v-btn>
                    <v-toolbar-title>Stock Management</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <product-stock-management :id="params.data.variant.id" @close="onClickClose" :vendor="vendor"/>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapState} from 'vuex';
    import ProductStockManagement from '../products/product-stock-management.vue';

    @Component({
        components: {
            ProductStockManagement
        },
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                store: (store: any) => store.store.store,
                vendor: (store: any) => store.vendor.vendor
            })
        }
    })
    export default class StockActions extends Vue{
        private params

        mounted() {
            console.log(this.params)
        }

        private stockmanagement = false

        onClickClose() {
            this.stockmanagement = false
        }

    }
</script>
