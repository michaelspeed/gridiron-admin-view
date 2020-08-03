<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Facet</h5>
                <button type="button" class="btn btn-primary btn-sm mr-2 mb-2">
                    Update Facet
                </button>
            </div>
        </div>
        <div class="row">
            <v-card style="width: 100%">
                <v-container>
                    <div class="form-group">
                        <label>Enter Name</label>
                        <a-input v-model="name"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Enter Code</label>
                        <a-input v-model="code"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Is Private</label>
                            <a-switch
                                    v-model="isPrivate"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                            </a-switch>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <hr/>
                    <div class="mt-2 mb-2">
                        <div class="d-flex justify-content-between">
                            <h5>Facet Value</h5>
                            <button type="button" class="btn btn-primary btn-sm mr-2 mb-2" @click="add = true">
                                Add Facet Value
                            </button>
                        </div>
                    </div>
                    <div>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Code</th>
                                    <th class="text-left">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in values" :key="item.node.id">
                                    <td>{{ item.node.code }}</td>
                                    <td>
                                        <a-popconfirm
                                                title="Are you sure delete this task?"
                                                ok-text="Yes"
                                                cancel-text="No"
                                                @confirm="onDelete(item.node.id)"
                                        >
                                            <v-btn class="ma-2" outlined x-small fab color="#F44336">
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </a-popconfirm>
                                    </td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                </v-container>
            </v-card>
        </div>
        <v-bottom-sheet v-model="add" inset>
            <v-toolbar flat>
                <v-btn small fab @click="add = false"><v-icon>arrow_back</v-icon></v-btn>
                <v-toolbar-title>Add Facet Value</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="p-3 bg-white">
                <div class="form-group">
                    <label>Enter Code</label>
                    <a-input v-model="valuecode"></a-input>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                </div>
            </div>
            <div class="p-3 bg-white">
                <button type="button" class="btn btn-primary" @click="onCreateFacetValues">Create Facet Value</button>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateFacetValueDocument,
        DeleteOneFacetValueDocument,
        GetFacetDocument,
        SetFacetOnValueDocument
    } from '../../../../gql';

    @Component({
        layout: 'console',
        apollo: {
            facet: {
                query: GetFacetDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                pollInterval: 3000
            }
        }
    })
    export default class Id extends Vue {
        private name = ""
        private code = ""
        private isPrivate = true
        private init = false
        private values: any[] = []
        private add = false
        private valuecode = ''
        private facet

        @Watch('facet')
        onGetFacet() {
            if (this.facet !== undefined) {
                if (!this.init) {
                    this.name = this.facet.name
                    this.code = this.facet.code
                    this.isPrivate = this.facet.isPrivate
                    this.init = true
                }
                this.values = this.facet.values.edges
            }
        }

        onCreateFacetValues() {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: CreateFacetValueDocument,
                variables: {
                    code: this.valuecode
                }
            }).then(value => {
                this.$apollo.mutate({
                    mutation: SetFacetOnValueDocument,
                    variables: {
                        id: value.data!.createOneFacetValue!.id,
                        rel: this.$route.params.id
                    }
                }).then(value1 => {
                    load()
                    this.add = false
                    this.valuecode = ''
                    this.$notification.success({
                        description: 'Facet Values creation Successful',
                        message: 'Facet Values added'
                    })
                }).catch(error => {
                    load()
                    this.$notification.error({
                        description: error.message,
                        message: 'Failed'
                    })
                })
            })
        }

        onDelete(id) {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: DeleteOneFacetValueDocument,
                variables: {
                    id: id
                }
            }).then(value => {
                load()
            }).catch(error => {
                load()
            })
        }

    }
</script>
