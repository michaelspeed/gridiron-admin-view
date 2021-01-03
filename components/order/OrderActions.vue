<template>
    <div>
        <v-btn text color="primary" @click="$router.push(`/app/sales-menu/orders/${params.data.id}`)">
            <i class="fas fa-edit text-primary mr-2"></i> View / Update
        </v-btn>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class OrderActions extends Vue {

    }
</script>
