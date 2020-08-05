<template>
    <div>
        <a class="btn btn-light-primary btn-sm" @click="stockmanagement = true">Edit</a>
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
