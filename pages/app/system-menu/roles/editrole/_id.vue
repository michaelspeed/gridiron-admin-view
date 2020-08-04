<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Edit Role</h5>
            </div>
        </div>
        <v-card style="padding: 20px">
            <div class="form-group">
                <label>Code</label>
                <el-input v-model="code" :disabled="true"></el-input>
                <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
            </div>
            <div class="form-group">
                <label>Description</label>
                <el-input type="textarea" v-model="desc"></el-input>
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
                        color="#3F51B5"
                >
                    <template v-slot:selection="{ attrs, item, select, selected }">
                        <v-chip
                                v-bind="attrs"
                                :input-value="selected"
                                close
                                color="#3F51B5"
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
                <v-progress-circular
                        v-if="loading"
                        indeterminate
                        color="primary"
                ></v-progress-circular>
                <button type="button" class="btn btn-primary" v-if="!loading" @click="onUpdateRole">Update Role</button>
                <button type="button" class="btn btn-danger" @click="$router.back()" >Back</button>
            </div>
        </v-card>
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
