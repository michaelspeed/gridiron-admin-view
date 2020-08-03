<template>
    <div>
        <v-btn class="ma-2" outlined x-small fab color="#1b55e3" @click="onClickEdit">
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <a-popconfirm
                title="Are you sure delete this task?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="onDelete"
        >
            <v-btn class="ma-2" outlined x-small fab color="#F44336">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </a-popconfirm>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {DeleteOneFacetDocument} from '../../gql';
    import {Popconfirm} from 'ant-design-vue'

    @Component({
        components: {
            'a-popconfirm':Popconfirm
        }
    })
    export default class FacetActions extends Vue {
        private params: any

        onClickEdit() {
            this.$router.push(`/app/catalog/facets/${this.params.data.node.id}`)
        }

        onDelete() {
            this.$apollo.mutate({
                mutation: DeleteOneFacetDocument,
                variables: {
                    id: this.params.data.node.id
                }
            })
        }
    }
</script>
