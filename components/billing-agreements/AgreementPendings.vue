<template>
    <div>
        <span class="badge badge-primary" v-if="request === 0">{{request}}</span>
        <span class="badge badge-danger" v-if="request > 0">{{request}}</span>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';
    import {BillingAgreementState} from '../../gql';

    @Component
    export default class AgreementPending extends Vue {
        private params
        private request = 0

        mounted() {
            console.log(this.params)
            const filt = this.params.data.request.filter(item => item.state === BillingAgreementState.Pending)
            this.request = filt.length
        }
    }
</script>
