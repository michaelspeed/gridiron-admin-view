<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2"
           @click="onDeletePage">
            Delete
        </a>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {DeleteOnePageDocument} from "~/gql";

@Component
export default class PageActions extends Vue {
    private params: any

    onDeletePage() {
        console.log(this.params)
        this.$apollo.mutate({
            mutation: DeleteOnePageDocument,
            variables: {
                id: this.params.data.id
            }
        })
        .then(value => {
            this.$Message.error(`Delete Successful`)
        })
    }
}
</script>
