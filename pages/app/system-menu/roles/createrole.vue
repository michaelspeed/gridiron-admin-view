<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="card">
                    <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label font-weight-bolder text-dark">Create Role</span>
                        </h3>
                    </div>
                    <div class="card-body">
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
                            <button type="button" class="btn btn-light-primary" @click="onCreateRole">Create Role</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
