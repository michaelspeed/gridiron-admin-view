<template>
    <div>
      <a href="javascript:;" class="btn btn-sm btn-light-info" @click="onClickEdit">
        <i class="fas fa-edit"></i> Edit
      </a>
        <a-popconfirm
                title="Are you sure delete this task?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="onDelete"
        >
          <a href="javascript:;" class="btn btn-sm btn-light-danger">
            <i class="fas fa-trash"></i> Delete
          </a>
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
