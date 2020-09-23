<template>
    <div>
        <div class=" container-fluid ">
            <div class="card card-custom">
                <div class="card-body p-0">

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {GetSingleVendorDocument} from "~/gql";

@Component({
    layout: 'console',
    apollo: {
        vendor: {
            query: GetSingleVendorDocument,
            variables () {
                return {
                    id: this.$route.params.id
                }
            }
        }
    }
})
export default class SingleVendor extends Vue {
    private vendor
}
</script>
