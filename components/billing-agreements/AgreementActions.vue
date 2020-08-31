<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2"
           @click="$router.push(`/app/sales-menu/billing-agreement/${params.data.id}`)">
            View
        </a>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class AgreementActions extends Vue {
        private params
    }
</script>
