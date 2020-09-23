<template>
    <div>
        <!--<div class="card card-custom gutter-b">
            <div class="card-body">
                <div class="d-flex">

                    &lt;!&ndash;begin: Info&ndash;&gt;
                    <div class="flex-grow-1">
                        &lt;!&ndash;begin::Title&ndash;&gt;
                        <div class="d-flex align-items-center justify-content-center flex-wrap">
                            <div class="form-group fv-plugins-icon-container">
                                <a-input placeholder="Search ..." class="w-375px" v-model="search"/>
                            </div>
                        </div>
                        &lt;!&ndash;end::Title&ndash;&gt;
                    </div>
                    &lt;!&ndash;end::Info&ndash;&gt;
                </div>
            </div>
        </div>-->

        <!--<div class="card card-custom gutter-b" v-if="type === 'PRODVARIANT'">
            <div class="card-header h-auto py-3 border-0">
                <div class="card-title">
                    <h3 class="card-label text-danger">
                        Select Target
                    </h3>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center align-items-center m-20 w-100"
                     v-if="$apollo.queries.productVariants.loading">
                    <div class="spinner spinner-primary spinner-lg mr-15"></div>
                </div>
                <a-list item-layout="horizontal" :data-source="productVariants" v-if="!$apollo.queries.productVariants.loading">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-list-item-meta>
                            <a slot="title" href="javascript:;" class="text-dark">{{ item.name }}</a>
                        </a-list-item-meta>
                    </a-list-item>
                </a-list>
            </div>
        </div>-->

        <div class="card card-custom gutter-b" v-if="type === 'CATEGORY'">
            <div class="card-header h-auto py-3 border-0">
                <div class="card-title">
                    <h3 class="card-label text-danger">
                        Select Host
                    </h3>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center align-items-center m-20 w-100"
                     v-if="$apollo.queries.collections.loading">
                    <div class="spinner spinner-primary spinner-lg mr-15"></div>
                </div>
                <a-list item-layout="horizontal" :data-source="collections" v-if="!$apollo.queries.collections.loading && host === null">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-list-item-meta>
                            <a slot="title" href="javascript:;" class="text-dark" @click="host = item">{{ item.name }}</a>
                        </a-list-item-meta>
                    </a-list-item>
                </a-list>
                <div v-if="host !== null">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="text-muted">Host</span>
                            <h3>{{host.name}}</h3>
                        </div>
                        <a href="#" class="btn btn-hover-bg-danger btn-text-danger btn-hover-text-white border-0 font-weight-bold mr-2" @click="host = null">Change</a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="card-header h-auto py-3 border-0" v-if="type === 'CATEGORY'">
                <div class="card-title">
                    <h3 class="card-label text-danger">
                        Select Target
                    </h3>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center flex-wrap">
                        <div class="form-group fv-plugins-icon-container">
                            <a-input placeholder="Search ..." class="w-375px" v-model="search" :clearable="true"/>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center m-20 w-100"
                         v-if="$apollo.queries.collections.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div v-if="target !== null">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="text-muted">Target</span>
                                <h3>{{target.name}}</h3>
                            </div>
                            <a href="#" class="btn btn-hover-bg-danger btn-text-danger btn-hover-text-white border-0 font-weight-bold mr-2" @click="target = null">Change</a>
                        </div>
                    </div>
                    <div v-if="target === null">
                        <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="Collections">

                                <a-list item-layout="horizontal" :data-source="collections" v-if="!$apollo.queries.collections.loading && target === null">
                                    <a-list-item slot="renderItem" slot-scope="item, index">
                                        <a-list-item-meta>
                                            <a slot="title" href="javascript:;" class="text-dark" @click="target = item; targetType = 'collection'">{{ item.name }}</a>
                                        </a-list-item-meta>
                                    </a-list-item>
                                </a-list>
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="Product Variants">
                                <a-list item-layout="horizontal" :data-source="productVariants" v-if="!$apollo.queries.productVariants.loading && target === null">
                                    <a-list-item slot="renderItem" slot-scope="item, index">
                                        <a-list-item-meta>
                                            <a slot="title" href="javascript:;" class="text-dark" @click="target = item; targetType = 'variant'">{{ item.name }}</a>
                                        </a-list-item-meta>
                                    </a-list-item>
                                </a-list>
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="card-header h-auto py-3 border-0" v-if="type === 'CATEGORY'">
                <div class="card-title">
                    <h3 class="card-label text-danger">
                        Upload Asset
                    </h3>
                </div>
                <div class="card-body">
                    <div v-if="assetMain !== null">
                        <img :src="`${assetUrl}/${assetMain.source}?size=large`" style="width: 100%; height: calc(100vh - 250px); object-fit: contain"/>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="onClickUpload" v-if="assetMain === null">
                            Add Asset
                        </a>
                        <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="onClickUpload" v-if="assetMain !== null">
                            Change Asset
                        </a>
                        <input type="file" style="display: none" ref="fileInput" accept="image/*" v-on:change="onImageChange($event)"/>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="onClickSave">
                        Save page
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {
        Collection, CreateAssetDocument, CreateHomeDocument, CreateSinglPageDocument,
        GetCollectionForSearchDocument,
        GetHomePageDocument,
        GetSearchProdDocument,
        GetSearchProductVariantDocument, ProductVariant
    } from "~/gql";
    import {assetsURL} from "~/constants/GlobalURL";

    @Component({
        apollo: {
            productVariants: {
                query: GetSearchProductVariantDocument,
                variables() {
                    return {
                        iLike: `%${this.search}%`
                    }
                }
            },
            collections: {
                query: GetCollectionForSearchDocument,
                variables() {
                    return {
                        iLike: `%${this.search}%`
                    }
                }
            },
        }
    })
    export default class PageBuilder extends Vue {

        public $refs: Vue['$refs'] & {
            fileInput: HTMLInputElement
        };

        @Prop() type
        private search = ''

        private productVariants: ProductVariant
        private collections: Collection

        private host: any = null
        private target: any = null
        private targetType: string = ''
        private assetMain: any = null
        private assetUrl = assetsURL

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
                },
                /*context: {
                    hasUpload: true
                }*/
            }).then(value => {
                console.log(value)
                this.assetMain = value.data.createAsset
                this.$notification.success({
                    description: 'Asset Uploaded',
                    message: 'Asset Creation Successful'
                })
                load()
            }).catch(error => {
                load()
                console.log(error);
            })
        }

        onClickSave() {
            const load: any = this.$Message.loading('Action in progress..');
            const pageJSON = {
                target: this.target.id,
                type: this.targetType,
                asset: this.assetMain
            }
            this.$apollo.mutate({
                mutation: CreateSinglPageDocument,
                variables: {
                    title: 'Collection',
                    targetId: this.host.id,
                    single: pageJSON,
                    pageType: 'SINGLE'
                }
            }).then(value => {
                load()
                this.$Message.success('New Page Created')
                this.$router.back()
            }).catch(error => {
                load()
                this.$Message.error(error.message)
            })
        }
    }
</script>
