<template>
    <div>
        <v-btn class="ma-2" tile outlined color="primary" @click="$router.push(`/app/sales-menu/billing-agreement/${params.data.id}`)">
            view
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
