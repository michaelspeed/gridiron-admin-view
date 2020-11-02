<template>
    <div>
        <a href="javascript:;" class="btn btn-sm btn-hover-bg-primary btn-text-primary btn-hover-text-white border-0 font-weight-bold mr-2" @click="changePass = true">
            Change Password
        </a>
        <a href="javascript:;" class="btn btn-sm btn-hover-bg-danger btn-text-danger btn-hover-text-white border-0 font-weight-bold mr-2" @click="changePass = true">
            Remove
        </a>
        <v-dialog v-model="changePass" width="500" transition="scale-transition">
            <v-card>
                <v-card-title class="bg-primary text-white">
                    Change Password
                </v-card-title>

                <v-card-text class="mt-5">
                    <div class="form-group">
                        <label>Old Password</label>
                        <a-input v-model="oldPass" type="password"></a-input>
                    </div>
                    <div class="form-group">
                        <label>New Password</label>
                        <a-input v-model="newPass" type="password"></a-input>
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2" @click="onChangePass">
                        Change Password
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2" @click="changePass = !changePass">
                        Cancel
                    </a>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {UpdateAdministratorPasswordDocument} from "~/gql";

    @Component
    export default class AdministratorActions extends Vue {
        private changePass = false
        private oldPass = ''
        private newPass = ''
        private params

        onChangePass() {
            this.$Message.loading('Action In Progress')
            this.$apollo.mutate({
                mutation: UpdateAdministratorPasswordDocument,
                variables:{
                    email: this.params.data.user.email,
                    password: this.oldPass,
                    newpassword:this.newPass
                }
            })
            .then(value => {
                this.$Message.success('Password Updated')
                this.changePass = false
                this.newPass = ''
                this.oldPass = ''
            })
            .catch(error => {
                this.$Message.error(error.message)
            })
        }
    }
</script>
