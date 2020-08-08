<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2" @click="onClickEdit">Edit / View</a>
        <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2">Block</a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class UserActions extends Vue {
        private params

        onClickEdit() {
            this.$router.push(`/app/customers-menu/allcustomers/${this.params.data.id}`)
        }
    }
</script>
