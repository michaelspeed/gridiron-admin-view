<template>
    <div>
        <div class="card">
            <div class="card-header card-header-flex align-items-center">
                <div class="d-flex flex-column justify-content-center mr-auto">
                    <h5 class="mb-0">{{name}}</h5>
                </div>
                <div>

                </div>
            </div>
            <div class="card-body" style="overflow: auto">
                <a-collapse v-model="activeNames">
                    <a-collapse-panel header="Basic" key="1">
                        <div class="form-group">
                            <label>Enter Collection Name</label>
                            <a-input v-model="name"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <div class="d-flex justify-content-between">
                                <label>Include In Menu</label>
                                <a-switch
                                        v-model="inMenu"
                                        active-color="#13ce66"
                                        inactive-color="#ff4949">
                                </a-switch>
                            </div>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Enter Collection Title Description</label>
                            <a-input type="textarea" v-model="desc"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </a-collapse-panel>
                    <a-collapse-panel header="SEO" key="2">
                        <div class="form-group">
                            <label>Enter Meta URL</label>
                            <a-input v-model="metaUrl" :disabled="true"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Enter Meta Title</label>
                            <a-input v-model="metaTitle"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Enter Meta Keywords</label>
                            <vue-tags-input
                                    v-model="metaKey" @tags-changed="newTags => metaKeywords = newTags"
                                    :tags="metaKeywords" placeholder="Enter keywords"
                            />
                            <!--<Select v-model="metaKeywords" filterable multiple allow-create @on-create="handleCreateKeyword" placeholder="Enter Meta Keywords">
                                <Option v-for="(item, index) in existing" :value="index" :key="index">{{ item }}</Option>
                            </Select>-->
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Enter Meta Description</label>
                            <a-input type="textarea" v-model="metaDesc"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </a-collapse-panel>
                </a-collapse>
                <div style="margin-top: 20px">
                    <button type="button" class="btn btn-primary" @click="onUpdate">Save Collection</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {
        Collection,
        GetOneCollectionDocument,
        GetOneCollectionQueryVariables, UpdateCollectionDocument,
        UpdateCollectionMutationVariables
    } from '../../gql';
    import {SlugLoader} from '../../utils/slugLoader';

    @Component
    export default class CollectionEdit extends Vue {
        @Prop() readonly id: string
        private inits: boolean = false
        private name: string = ''
        private desc: string = ''
        private inMenu: boolean = true
        private isPrivate: boolean = true
        private metaUrl: string = ''
        private metaTitle: string = ''
        private metaDesc: string = ''
        private metaKeywords: any[] = []
        private existing: any[] = []
        private isRoot: boolean = false
        private metaKey: string = ''

        // collapse
        private activeNames = ['1', '2']

        // seo
        private seoId: string = ''

        mounted() {
            this.onReload()
        }

        handleCreateKeyword(val){
            this.existing.push(val)
            this.metaKeywords.push(val)
        }

        onReload() {
            this.$apollo.query<{collection: Collection}, GetOneCollectionQueryVariables>({
                query: GetOneCollectionDocument,
                variables: {
                    id: this.id
                }
            }).then(value => {
                this.name = value.data!.collection.name
                this.desc = value.data!.collection.description
                this.inMenu = value.data!.collection.inMenu
                this.metaUrl = value.data!.collection.seo.urlKey
                this.metaTitle = value.data!.collection.seo.metatitle
                this.metaDesc = value.data!.collection.seo.metadesc
                this.metaKeywords = value.data!.collection.seo.metakeywords!.map(item => ({text: item}))
                this.existing = value.data!.collection.seo.metakeywords!
                this.seoId = value.data!.collection.seo.id
            })
        }

        onUpdate() {
            const load = this.$loading({
                lock: true,
                text: 'Creating Collection',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            this.$apollo.mutate<any, UpdateCollectionMutationVariables>({
                mutation: UpdateCollectionDocument,
                variables: {
                    colId: this.id,
                    seoID: this.seoId,
                    name: this.name,
                    inMenu: this.inMenu,
                    desc: this.desc,
                    urlKey: this.metaUrl,
                    metatitle: this.metaTitle,
                    metadesc: this.metaDesc,
                    metakeywords: this.metaKeywords.map(item => item.text)
                }
            }).then(value => {
                load.close()
                this.$notify({
                    title: 'Success',
                    message: 'Collection Updated',
                    type: 'success'
                });
            })
        }

        @Watch('id')
        async getIdData() {
            this.onReload()
        }
    }
</script>

<style>
    .vue-tags-input {
        border: #DCDFE6 solid 0.3px; border-radius: 4px; width: 100%
    }
</style>
