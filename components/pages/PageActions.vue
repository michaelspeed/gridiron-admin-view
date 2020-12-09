<template>
    <div>
        <v-btn text color="red"
           @click="onDeletePage">
            Delete
        </v-btn>
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
