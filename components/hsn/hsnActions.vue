<template>
    <div>
        <v-dialog v-model="updateHSN" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
                <div class="d-flex align-items-center">
                    <a href="javascript:;" class="btn btn-sm btn-hover-bg-primary btn-text-primary btn-hover-text-white border-0 font-weight-bold mr-2" v-bind="attrs" v-on="on">
                        Update
                    </a>
                </div>
            </template>
            <v-card>
                <v-card-title class="headline" :style="{'background-color': theme.colors.theme.base.primary, 'color': 'white'}">Enter HSN Code</v-card-title>
                <v-card-text>
                    <v-text-field
                        label="HSN Code"
                        v-model="code"
                        disabled
                    ></v-text-field>
                    <v-text-field
                        label="Value"
                        v-model="value"
                        type="number"
                    ></v-text-field>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text style="margin-right: 10px" @click="updateHSN = false">Cancel</v-btn>
                    <v-btn color="primary" text @click="onUpdate" :loading="loading">Update</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {GridironViewSettings} from "~/utils/theme.settings";
import {UpdateOneHsnDocument} from "~/gql";

@Component
export default class HsnActions extends Vue {
    private updateHSN = false
    private params
    private loading = false

    private theme = GridironViewSettings

    private code = ''
    private value = 0

    mounted() {
        this.code = this.params.data.code
        this.value = this.params.data.value
    }

    onUpdate() {
        this.loading = true
        this.$apollo.mutate({
            mutation: UpdateOneHsnDocument,
            variables: {
                id: this.params.data.id,
                value: parseFloat(this.value.toString(10))
            }
        }).then(value => {
            this.updateHSN = false
            this.loading = false
        }).catch(error => {
            this.$Message.error(error.message)
            this.loading = false
        })
    }
}
</script>
