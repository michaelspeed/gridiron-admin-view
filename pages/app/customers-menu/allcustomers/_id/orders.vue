<template>
    <div>
        <v-sheet elevation="4">
            <!--begin::Header-->
            <div class="card-header py-3">
                <div class="card-title align-items-start flex-column">
                    <h3 class="card-label font-weight-bolder text-dark">Order Information</h3>
                    <span class="text-muted font-weight-bold font-size-sm mt-1">Total Orders {{user.ordersAggregate.count.id}}</span>
                </div>
                <div class="card-toolbar">

                </div>
            </div>
            <!--end::Header-->
            <!--begin::Form-->
            <div class="form">
                <div class="card-body">
                    <v-card
                        class="mx-auto mt-5 mb-5"
                        color="secondary"
                        v-for="order of user.orders"
                        :key="order.id"
                    >
                        <v-card-title class="text-white">{{order.id}}</v-card-title>

                        <v-card-text>
                            <div class="subtitle-1 text-white-50">
                                Total Items: {{order.lines.length}}
                            </div>
                        </v-card-text>
                        <v-card-title class="text-white">CreatedAt: {{getDate(order.createdAt)}}</v-card-title>

                        <v-card-actions>
                            <v-btn
                                color="primary"
                                text
                            >
                                View Order
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
            <!--end::Form-->
        </v-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {GetUserInfoDocument} from "~/gql";
    import moment from "moment";

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
    export default class Orders extends Vue {
        private user

        getDate(date) {
            return moment(date).format('DD MMM YYYY HH:mm')
        }
    }
</script>
