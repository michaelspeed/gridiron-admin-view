<template>
    <div>
        <v-btn color="primary" text
           @click="$router.push(`/app/sales-menu/billing-agreement/${params.data.id}`)">
            View
        </v-btn>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class AgreementActions extends Vue {
        private params
    }
</script>
