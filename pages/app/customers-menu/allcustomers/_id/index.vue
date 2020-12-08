<template>
    <v-sheet elevation="4">
        <!--begin::Header-->
        <div class="card-header py-3">
            <div class="card-title align-items-start flex-column">
                <h3 class="card-label font-weight-bolder text-dark">Personal Information</h3>
                <span class="text-muted font-weight-bold font-size-sm mt-1">Update your users personal information</span>
            </div>
            <!--<div class="card-toolbar">
                <button type="reset" class="btn btn-success mr-2">Save Changes</button>
                <button type="reset" class="btn btn-secondary">Cancel</button>
            </div>-->
        </div>
        <!--end::Header-->

        <!--begin::Form-->
        <div >
            <!--begin::Body-->
            <div class="card-body">
                <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.user.loading">
                    <div class="spinner spinner-primary spinner-lg mr-15"></div>
                </div>
            </div>
            <div class="card-body" v-if="!$apollo.queries.user.loading">
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right">First Name</label>
                    <div class="col-lg-9 col-xl-6">
                        <input class="form-control form-control-lg form-control-solid" type="text" v-model="user.firstName" :disabled="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right">Last Name</label>
                    <div class="col-lg-9 col-xl-6">
                        <input class="form-control form-control-lg form-control-solid" type="text" v-model="user.lastName" :disabled="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right">Email</label>
                    <div class="col-lg-9 col-xl-6">
                        <input class="form-control form-control-lg form-control-solid" type="text" v-model="user.email" :disabled="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right">Phone</label>
                    <div class="col-lg-9 col-xl-6">
                        <div class="input-group input-group-lg input-group-solid">
                            <div class="input-group-prepend"><span class="input-group-text"><i class="la la-phone"></i></span></div>
                            <input type="text" class="form-control form-control-lg form-control-solid" v-model="user.phoneNumber" :disabled="true">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right">Last Login</label>
                    <div class="col-lg-9 col-xl-6">
                        <div class="input-group input-group-lg input-group-solid">
                            <div class="input-group-prepend"><span class="input-group-text"><i class="la la-clock"></i></span></div>
                            <input type="text" class="form-control form-control-lg form-control-solid" value="user.lastLogin" :disabled="true">
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Body-->
        </div>
        <!--end::Form-->
    </v-sheet>
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
    export default class Index extends Vue {
        private user
    }
</script>
