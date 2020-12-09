<template>
    <div>
      <v-btn color="primary" text @click="onClickEdit">
        <i class="fas fa-edit text-primary mr-2"></i> Edit
      </v-btn>
        <a-popconfirm
                title="Are you sure delete this task?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="onDelete"
        >
          <v-btn color="red" text>
            <i class="fas fa-trash text-danger mr-2"></i> Delete
          </v-btn>
        </a-popconfirm>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {DeleteOneFacetDocument} from '../../gql';

    @Component
    export default class FacetActions extends Vue {
        private params: any

        onClickEdit() {
            this.$router.push(`/app/catalog/facets/${this.params.data.id}`)
        }

        onDelete() {
            this.$apollo.mutate({
                mutation: DeleteOneFacetDocument,
                variables: {
                    id: this.params.data.id
                }
            })
        }
    }
</script>
