<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Create New Orders</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->

                            <!--end::Search Form-->
                        </div>
                        <!--end::Details-->

                        <!--begin::Toolbar-->
                        <div class="d-flex align-items-center">
                            <!--begin::Button-->
                            <a href="#" class="">

                            </a>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center">
                            <a-input-search placeholder="search user" style="width: 500px" enter-button @search="onSearch" />
                        </div>
                        <v-card style="width: 100%; margin-left: 20px; margin-right: 20px; margin-top: 20px" v-if="searchUser.length > 0">
                            <v-list
                                flat
                                three-line
                            >
                                <v-list-item-group
                                    v-model="selectedUser"
                                    active-class=""
                                >
                                    <v-list-item v-for="user of searchUser">
                                        <template v-slot:default="{ active }">
                                            <v-list-item-action>
                                                <v-checkbox :input-value="active"></v-checkbox>
                                            </v-list-item-action>

                                            <v-list-item-content>
                                                <v-list-item-title>{{user.firstName}} {{user.lastName}}</v-list-item-title>
                                                <v-list-item-subtitle>{{user.phoneNumber}}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </template>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card>
                        <div class="d-flex justify-content-center align-items-center" v-if="searchUser.length === 0" style="margin-top: 20px">
                            <h3>No users found!</h3>
                        </div>
                        <div class="row">
                            <div class="col-md-6"></div>
                            <div class="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {QueryUSerByEmailOrPhoneDocument} from "~/gql";

    @Component({
        layout: 'console'
    })
    export default class CreateOrder extends Vue {
        private search = ''
        private searchUser: any[] = []
        private selectedUser = ''

        onSearch(value) {
            this.$apollo.query({
                query: QueryUSerByEmailOrPhoneDocument,
                variables: {
                    type: value
                }
            }).then(value => {
                this.searchUser = value.data.users
            })
        }

    }
</script>
