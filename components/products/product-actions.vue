<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2" @click="this.onClickEdit">Edit</a>
        <a-popconfirm
                ok-text='OK'
                cancel-text='No, Thanks'
                title="Are you sure to delete this?"
        >
            <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2">Delete</a>
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
