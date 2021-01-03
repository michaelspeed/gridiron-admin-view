<template>
    <div>
        <div class="content  d-flex flex-column flex-column-fluid" id="kt_content">
            <div class="d-flex flex-column-fluid">
                <!--begin::Container-->
                <div class=" container-fluid ">
                    <DashboardAdmin v-if="admin"/>
                    <DashboardVendor v-if="vendor"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {mapState} from "vuex";
    import DashboardAdmin from "~/components/dashboard/dashboard-admin.vue";
    import DashboardVendor from "~/components/dashboard/dashboard-vendor.vue";

    @Component({
        layout: 'console',
        transition: 'slide-x-transition',
        components: {DashboardAdmin, DashboardVendor},
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                store: (store: any) => store.admin.store,
                vendorStore: (store: any) => store.admin.vendorStore,
                vendor: (store: any) => store.admin.vendor
            })
        }
    })
    export default class Index extends Vue {
        private vendor

        mounted() {
            console.log(this.vendor)
        }

        @Watch('vendor')
        onChangeVendor() {
            console.log(this.vendor)
        }
    }
</script>

<style scoped>

</style>
