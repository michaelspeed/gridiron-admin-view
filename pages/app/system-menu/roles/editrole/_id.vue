<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="card">
                    <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label font-weight-bolder text-dark">Edit Role</span>
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label>Code</label>
                            <a-input v-model="code" :disabled="true"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <a-input type="textarea" v-model="desc"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Roles</label>
                            <v-combobox
                                v-model="permission"
                                :items="permMenu"
                                chips
                                clearable
                                label="Roles"
                                multiple
                                solo
                                color="primary"
                            >
                                <template v-slot:selection="{ attrs, item, select, selected }">
                                    <v-chip
                                        v-bind="attrs"
                                        :input-value="selected"
                                        close
                                        color="primary"
                                        :outlined="true"
                                        @click="select"
                                        @click:close="remove(item)"
                                    >
                                        <strong>{{ item.toUpperCase() }}</strong>
                                    </v-chip>
                                </template>
                            </v-combobox>
                        </div>
                        <div>
                            <button type="button" class="btn btn-light-primary" @click="onUpdateRole">Update Role</button>
                            <button type="button" class="btn btn-light-danger" @click="$router.back()" >Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {PermissionArray} from '../../../../../utils/PermissionEnum';
    import {GetRoleDocument, UpdateRoleDocument} from '../../../../../gql';

    @Component({
        layout: 'console',
    })
    export default class EditRole extends Vue {
        @Prop() id
        private code = ''
        private desc = ''
        private permMenu = PermissionArray
        private permission = []
        private loading = false

        mounted() {
            this.$apollo.query({
                query: GetRoleDocument,
                variables: {
                    id: this.$route.params.id
                }
            }).then(value => {
                console.log(value)
                this.code = value.data.role.code
                this.desc = value.data.role.description
                this.permission = value.data.role.permissions
            }).catch(error => console.log(error))
        }

        onUpdateRole(){
            this.loading = true
            this.$apollo.mutate({
                mutation: UpdateRoleDocument,
                variables: {
                    id: this.$route.params.id,
                    roles: this.permission,
                    description: this.desc
                }
            }).then(value => {
                this.loading = false
                this.$router.back()
            }).catch(error => {
                this.loading = false
            })
        }
    }
</script>
