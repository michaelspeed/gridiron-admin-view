<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-light-info" @click="$router.push(`/app/sales-menu/invoices/${params.data.id}`)">
            <i class="fas fa-eye"></i> View
        </a>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class InvoiceActions extends Vue {

}
</script>
