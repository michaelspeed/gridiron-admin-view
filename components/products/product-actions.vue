<template>
    <div>
        <v-btn class="ma-2" outlined x-small color="primary" @click="this.onClickEdit">
            Edit
        </v-btn>
        <a-popconfirm
                ok-text='OK'
                cancel-text='No, Thanks'
                title="Are you sure to delete this?"
        >
            <a-button type="link" style="color: red">
                Delete
            </a-button>
        </a-popconfirm>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ProductActions extends Vue {
        private params

        onClickEdit() {
            this.$router.push(`/app/catalog/products/${this.params.data.node.id}`)
        }
    }
</script>
