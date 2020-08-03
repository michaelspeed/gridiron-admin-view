<template>
    <div>
        <v-chip
                class="ma-2"
                :color="status ? '#8BC34A' : '#F44336'"
                outlined
                small
                @click="activeChange = true"
        >
            {{status ? 'Active': 'Deactivated'}}
        </v-chip>
        <v-dialog v-model="activeChange" scrollable max-width="300px">
            <v-card>
                <v-card-title>Change Status</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <v-list dense>
                        <v-list-item-group color="primary">
                            <v-list-item
                                    @click="onUpdatePlan(true)"
                            >
                                <v-list-item-content>
                                    <v-chip
                                            class="ma-2"
                                            :color="!status ? '#8BC34A': '#BDBDBD'"
                                            style="color: white"
                                    >
                                        Active
                                    </v-chip>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item
                                    @click="onUpdatePlan(false)"
                            >
                                <v-list-item-content>
                                    <v-chip

                                            class="ma-2"
                                            :color="status ? '#F44336': '#BDBDBD'"
                                            style="color: white"
                                    >
                                        Deactivated
                                    </v-chip>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="#1b55e3" text @click="activeChange = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {UpdatePlanDocument} from '../../gql';

    @Component
    export default class PlansStatus extends Vue {
        private params
        private activeChange = false
        private status = false

        mounted() {
            if (this.params !== undefined) {
                this.status = this.params.data.node.isActive
            }
        }

        @Watch('params')
        onChangeParams() {
            if (this.params !== undefined) {
                this.status = this.params.data.node.isActive
            }
        }

        onUpdatePlan(status) {
            this.$apollo.mutate({
                mutation: UpdatePlanDocument,
                variables: {
                    id: this.params.data.node.id,
                    status: status
                }
            }).then(value => {
                this.status = status
                this.activeChange = false
            }).catch(error => {
                console.log(error)
            })
        }
    }
</script>
