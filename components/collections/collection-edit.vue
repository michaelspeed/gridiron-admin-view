<template>
    <div>
        <v-sheet elevation="4">
          <div class="card-header border-0 py-5">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label font-weight-bolder text-primary">{{name}}</span>
            </h3>
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
                    <a-collapse-panel header="ASSETS" key="3">
                        <div>
                            <v-img
                                contain
                                v-if="asset"
                                :src="`${assetUL}/${asset.preview}`"
                                style="height: 200px"
                            ></v-img>
                            <input type="file" style="display: none" ref="fileInput" accept="image/*"
                                   v-on:change="onImageChange($event)"/>
                            <button type="button" class="btn btn-light-primary btn-sm" @click="onClickUpload">
                                Change Asset
                            </button>
                        </div>
                    </a-collapse-panel>
                </a-collapse>
                <div style="margin-top: 20px">
                    <button type="button" class="btn btn-light-primary font-weight-bold" @click="onUpdate">Save Collection</button>
                </div>
            </div>
        </v-sheet>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {
        Collection, CreateAssetDocument,
        GetOneCollectionDocument,
        GetOneCollectionQueryVariables, SetAssetOnCollectionDocument, SetLogoOnStoreDocument, UpdateCollectionDocument,
        UpdateCollectionMutationVariables
    } from '../../gql';
    import {SlugLoader} from '../../utils/slugLoader';
    import {assetsURL} from "~/constants/GlobalURL";

    @Component({
        apollo: {
            collection: {
                query: GetOneCollectionDocument,
                variables() {
                    return {
                        id: this.id
                    }
                },
                pollInterval: 3000
            }
        }
    })
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
        private asset: any

        private collection: Collection

        public $refs: Vue['$refs'] & {
            fileInput: HTMLInputElement
        };

        private assetUL: any = assetsURL;

        // collapse
        private activeNames = ['1', '2', '3']

        // seo
        private seoId: string = ''

        mounted() {
            //this.onReload()
        }

        handleCreateKeyword(val){
            this.existing.push(val)
            this.metaKeywords.push(val)
        }

        @Watch('collection')
        onGetCollection() {
            if (this.collection) {
                this.name = this.collection.name
                this.desc = this.collection.description
                this.inMenu = this.collection.inMenu
                this.metaUrl = this.collection.seo!.urlKey
                this.metaTitle = this.collection.seo!.metatitle
                this.metaDesc = this.collection.seo!.metadesc
                this.metaKeywords = this.collection.seo!.metakeywords!.map(item => ({text: item}))
                this.existing = this.collection.seo!.metakeywords!
                this.seoId = this.collection.seo!.id
                this.asset = this.collection.asset
            }
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
                this.metaUrl = value.data!.collection.seo!.urlKey
                this.metaTitle = value.data!.collection.seo!.metatitle
                this.metaDesc = value.data!.collection.seo!.metadesc
                this.metaKeywords = value.data!.collection.seo!.metakeywords!.map(item => ({text: item}))
                this.existing = value.data!.collection.seo!.metakeywords!
                this.seoId = value.data!.collection.seo!.id
                this.asset = value.data!.collection.asset
            })
        }

        onUpdate() {
            const load: any = this.$Message.loading('Action in progress..');
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
                load()
                this.$notify({
                    title: 'Success',
                    message: 'Collection Updated',
                    type: 'success'
                });
            })
        }

        onClickUpload() {
            this.$refs.fileInput.click()
        }

        onImageChange(event) {
            const load: any = this.$Message.loading('Action in progress..');
            const file = event.target.files[0]
            console.log(file)
            this.$apollo.mutate({
                mutation: CreateAssetDocument,
                variables: {
                    file: file
                }
            }).then(value => {
                this.$apollo.mutate({
                    mutation: SetAssetOnCollectionDocument,
                    variables: {
                        id: this.id,
                        rid: value.data.createAsset.id
                    }
                })
                    .then(value1 => {
                        this.$notification.success({
                            description: 'Logo Uploaded',
                            message: 'Asset Creation Successful'
                        })
                        load()
                        this.$store.dispatch('store/getDefaultStore')
                    })
                    .catch(error => {
                        load()
                        this.$message.error(error.message)
                    })
            }).catch(error => {
                load()
                console.log(error);
            })
        }
    }
</script>

<style>
    .vue-tags-input {
        border: #DCDFE6 solid 0.3px; border-radius: 4px; width: 100%
    }

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        background-color: #8950FC;
        color: white;
    }
</style>
