<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Create Role</h5>
            </div>
        </div>
        <v-card style="padding: 20px">
            <div class="form-group">
                <label>Code</label>
                <a-input v-model="code"></a-input>
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
                <button type="button" class="btn btn-primary" v-if="!loading" @click="onCreateRole">Create Role</button>
            </div>
        </v-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {PermissionArray} from '../../../../utils/PermissionEnum';
    import {CreateRoleDocument} from '../../../../gql';

    @Component({
        layout: 'console'
    })
    export default class CreateRole extends Vue {
        private code = ''
        private desc = ''
        private permMenu = PermissionArray
        private permission = []
        private loading = false

        onCreateRole() {
            this.loading = true
            this.$apollo.mutate({
                mutation: CreateRoleDocument,
                variables: {
                    code: this.code,
                    description: this.desc,
                    roles: this.permission
                }
            }).then(value => {
                this.loading = false
                this.$router.back()
            })
        }
    }
</script>
