<template>
    <div>
        <v-btn color="primary" text class="font-weight-bold mr-2" @click="this.onClickEdit">Edit</v-btn>
        <a-popconfirm
                ok-text='OK'
                cancel-text='No, Thanks'
                title="Are you sure to delete this?"
        >
            <v-btn color="red" text class="font-weight-bold mr-2">Delete</v-btn>
        </a-popconfirm>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ProductActions extends Vue {
        private params

        onClickEdit() {
            console.log(this.params.data)
            this.$router.push(`/app/catalog/products/${this.params.data.id}`)
        }
    }
</script>
