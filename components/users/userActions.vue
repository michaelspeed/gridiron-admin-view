<template>
    <div>
        <v-btn color="primary" text @click="onClickEdit">Edit / View</v-btn>
        <v-btn color="red" text>Block</v-btn>
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
