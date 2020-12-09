<template>
    <div>
        <v-sheet elevation="4">
            <!--begin::Header-->
            <div class="card-header py-3">
                <div class="card-title align-items-start flex-column">
                    <h3 class="card-label font-weight-bolder text-dark">Delivery Control</h3>
                </div>
                <div class="card-toolbar">
                </div>
            </div>
            <!--end::Header-->
            <!--begin::Form-->
            <div class="form">
                <div class="card-body">
                    <!--begin::Heading-->
                    <div class="row">
                        <label class="col-xl-3"></label>
                        <div class="col-lg-9 col-xl-6">
                            <button type="reset" class="btn btn-success mr-2" v-if="user.delivery === null" @click="onSetDeliveryGuy">Set User as Delivery Guy</button>
                            <button type="reset" class="btn btn-danger mr-2" v-if="user.delivery">Remove User as Delivery Guy</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Form-->
        </v-sheet>
        <v-sheet elevation="4" class="mt-4">
            <!--begin::Header-->
            <div class="card-header py-3">
                <div class="card-title align-items-start flex-column">
                    <h3 class="card-label font-weight-bolder text-dark">Reset Password</h3>
                </div>
                <div class="card-toolbar">
                </div>
            </div>
            <!--end::Header-->
            <!--begin::Form-->
            <div class="form">
                <div class="card-body">
                    <!--begin::Heading-->
                    <div class="row">
                        <label class="col-xl-3"></label>
                        <div class="col-lg-9 col-xl-6">
                            <button type="reset" class="btn btn-success mr-2">Send Reset Password Email</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Form-->
        </v-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {GetUserInfoDocument, SetNewDeliveryGuyDocument, User} from "~/gql";

    @Component({
        apollo: {
            user: {
                query: GetUserInfoDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class Reset extends Vue {
        private user: User

        @Watch('user')
        onChangeUser() {
            console.log(this.user)
        }

        onSetDeliveryGuy() {
            this.$Message.loading('Action in progress ...')
            this.$apollo.mutate({
                mutation: SetNewDeliveryGuyDocument,
                variables: {
                    userId: this.$route.params.id
                }
            })
            .then(value => {
                this.$Message.success('Delivery Guy Set')
            })
            .catch(error => {
                this.$Message.error(error.message)
            })
        }
    }
</script>
