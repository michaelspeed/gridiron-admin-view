<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-light-success" @click="$router.push(`/app/sales-menu/orders/vendororders/${params.data.id}`)">
            <i class="fas fa-edit"></i> View / Update
        </a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import OrderLinePreview from "~/components/order/OrderLInePreview.vue";

    @Component({
        components: {
            OrderLinePreview
        }
    })
    export default class OrderVendorActions extends Vue {
        private preview = false
    }
</script>
