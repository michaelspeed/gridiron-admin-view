<template>
    <div>
        <v-sheet elevation="4">
            <!--begin::Header-->
            <div class="card-header py-3">
                <div class="card-title align-items-start flex-column">
                    <h3 class="card-label font-weight-bolder text-dark">Address Information</h3>
                    <span class="text-muted font-weight-bold font-size-sm mt-1">user addresses</span>
                </div>
                <div class="card-toolbar">

                </div>
            </div>
            <!--end::Header-->
            <!--begin::Form-->
            <form class="form">
                <div class="card-body">
                    <v-card
                        color="primary"
                        dark
                        v-for="add of user.addresses"
                        :key="add.id"
                        style="margin: 5px"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="headline">{{add.fullName}}</v-card-title>
                                <v-card-subtitle>{{add.addressLine}}</v-card-subtitle>
                                <v-card-text>
                                    <div>
                                        <span>{{add.landmark}}</span>
                                    </div>
                                    <div>
                                        <span>{{add.city}}</span>
                                    </div>
                                    <div>
                                        <span>{{add.state}}</span>
                                    </div>
                                    <div>
                                        <span>{{add.postalCode}}</span>
                                    </div>
                                    <div>
                                        <span>{{add.phoneNumber}}</span>
                                    </div>
                                </v-card-text>
                            </div>
                        </div>
                    </v-card>
                </div>
            </form>
            <!--end::Form-->
        </v-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {GetUserInfoDocument} from "~/gql";

    @Component({
        layout: 'console',
        apollo: {
            user: {
                query: GetUserInfoDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                }
            }
        }
    })
    export default class AddressUser extends Vue {
        private user

    }
</script>
