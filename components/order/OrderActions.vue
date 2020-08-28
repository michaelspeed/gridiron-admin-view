<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-light-info" @click="$router.push(`/app/sales-menu/orders/${params.data.id}`)">
            <i class="fas fa-edit"></i> View / Update
        </a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class OrderActions extends Vue {

    }
</script>
