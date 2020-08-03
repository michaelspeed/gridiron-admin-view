<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="title">Create Product</span>
            </v-card-title>
            <v-divider/>
            <v-container>
                <div class="row">
                    <div class="col-md-8">
                        <div class="form-group">
                            <label>Product Name</label>
                            <a-input v-model="name"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Slug</label>
                            <a-input v-model="slug" disabled></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Facets</label>
                            <div>
                                <v-btn class="ma-2" tile small outlined color="success" @click="addFacet = true">
                                    <v-icon left>mdi-plus</v-icon> Add Facet
                                </v-btn>
                                <v-dialog v-model="addFacet" scrollable max-width="300px">
                                    <v-card>
                                        <v-card-title>Select Facet</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text style="height: 300px;">
                                            <v-list dense>
                                                <v-list-item-group color="primary">
                                                    <v-list-item
                                                            v-for="items in allFacets"
                                                            :key="items.id"
                                                            @click="onClickSelect(items.node)"
                                                    >
                                                        <v-list-item-content>
                                                            <v-chip
                                                                    class="ma-2"
                                                                    :color="onSelectTrace(items.node) ? '#1b55e3' : 'white'"
                                                                    style="color: white"
                                                            >
                                                                {{items.node.facet.name.toUpperCase()}} {{items.node.code}}
                                                            </v-chip>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-btn color="#1b55e3" text @click="addFacet = false">Close</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>
                            <hr style="margin-top: 4px; margin-bottom: 4px"/>
                            <div>
                                <v-chip v-for="ites in selectedFacet" :key="ites.id"
                                        class="ma-2"
                                        color="#1b55e3"
                                        outlined
                                        pill
                                        small
                                        style="margin: 3px"
                                >
                                    {{ites.facet.name.toUpperCase()}} {{ites.code}}
                                </v-chip>
                            </div>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <v-card>
                            <v-img
                                    :contain="true"
                                    :src="featuredAssets === null ? 'https://via.placeholder.com/200' : `${assetUrl}/${featuredAssets.preview}`"
                                    height="200px"
                            ></v-img>
                            <v-card-title>
                                Assets
                            </v-card-title>
                            <v-card-actions>
                                <v-btn text color="#1b55e3" @click="addAsset = true">Add Asset</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="showassets = !showassets">
                                    <v-icon>{{ showassets ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="showassets" style="padding: 10px">
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col
                                                v-for="n in selectedAssets"
                                                :key="n.id"
                                                class="d-flex child-flex"
                                                cols="3"
                                        >
                                            <v-card flat tile class="d-flex" @click="onImageClicked($event, n)">
                                                <v-img
                                                        :contain="true"
                                                        :src="`${assetUrl}/${n.preview}`"
                                                        aspect-ratio="1"
                                                        class="grey lighten-2"
                                                >
                                                </v-img>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expand-transition>
                        </v-card>
                        <v-menu
                                v-model="showMenu"
                                :position-x="x"
                                :position-y="y"
                                absolute
                                offset-y
                        >
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>Preview</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="onSelectFeatured" :disabled="featureActive">
                                    <v-list-item-title>Set as Featured</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Remove Asset</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <client-only>
                        <editor api-key="no-api-key" :init="{
                            height: 500,
                            plugins: ['image', 'preview', 'link', 'advlist', 'autolink', 'lists', 'hr'],
                            file_picker_callback: filePickerCallBack,
                            file_picker_types: 'image',
                            automatic_uploads: true,
                            images_upload_handler: imageUploadHandler,
                            branding: false,
                            content_style: 'body { font-family: Arial; }'
                        }" v-model="editorModel"/>
                    </client-only>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                </div>
            </v-container>
            <v-card-actions>
                <v-btn class="ma-2" outlined color="#1b55e3" @click="onCreateProduct">
                    <v-icon>mdi-plus</v-icon>
                    Create Product</v-btn>
            </v-card-actions>
        </v-card>
        <v-dialog v-model="addAsset" fullscreen transition="dialog-bottom-transition">
            <v-card style="border-radius: 0px">
                <v-toolbar color="#1b55e3">
                    <v-btn icon dark @click="addAsset = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title style="color: white">Add Assets</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn text dark @click="addAsset = false">Select</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <div style="background-color: white">
                    <v-container>
                        <div class="row">
                            <div class="col-md-12">
                                <v-row>
                                    <v-col
                                            v-for="n in myAssets"
                                            :key="n.node.id"
                                            class="d-flex child-flex"
                                            cols="2"
                                    >
                                        <v-card flat tile class="d-flex" :color="getSelectedColor(n.node.id)" hover @click="onClickSelectAsset(n.node)" style="padding: 5px">
                                            <v-img
                                                    :src="`${assetUrl}/${n.node.preview}`"
                                                    aspect-ratio="1"
                                                    class="grey lighten-2"
                                            >
                                                <template v-slot:placeholder>
                                                    <v-row
                                                            class="fill-height ma-0"
                                                            align="center"
                                                            justify="center"
                                                    >
                                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-container>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import Editor from '@tinymce/tinymce-vue'
    import {
        Asset,
        CreateAssetDocument, CreateProductDocument,
        GetAllAssetsDocument,
        GetFacetValuesDocument
    } from '../../../../../gql';
    import {assetsURL} from '../../../../../constants/GlobalURL';
    import {SlugLoader} from '../../../../../utils/slugLoader';

    @Component({
        layout: 'console',
        components: {
            'editor': Editor
        }
    })
    export default class Index extends Vue {
        private name: string = ""
        private slug: string = ""
        private showassets = false
        private addAsset = false
        private myAssets: Asset[] = []
        private assetUrl = assetsURL
        private selectedAssets: Asset[] = []
        private featuredAssets: Asset | null = null
        private addFacet = false
        private allFacets: any[] = []
        private selectedFacet: any[] = []
        private editorModel: string = ''
        private showMenu: boolean = false
        private x = 0
        private y = 0
        private menuId: any = null
        private featureActive: boolean = false


        onImageClicked(e, node) {
            e.preventDefault()
            this.showMenu = false
            this.menuId = node
            if (this.featuredAssets === null) {
                this.featureActive = false
            } else if (this.featuredAssets!.id !== node.id) {
                this.featureActive = false
            } else {
                this.featureActive = true
            }
            this.x = e.clientX
            this.y = e.clientY
            this.$nextTick(() => {
                this.showMenu = true
            })
        }

        onSelectFeatured() {
            this.featuredAssets = this.menuId
        }

        onCreateProduct() {
            const load: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: CreateProductDocument,
                variables: {
                    name: this.name,
                    desc: this.editorModel,
                    slug: this.slug,
                    facet: this.selectedFacet.map(item => item.id),
                    asset: this.selectedAssets.map(item => item.id),
                    featured: this.featuredAssets!.id
                }
            }).then(value => {
                load()
                this.$notification.success({
                    description: 'Product Created',
                    message: 'Product Creation Successful'
                })
            })
        }

        @Watch('name')
        onChangeName() {
            this.slug = SlugLoader(this.name)
        }

        onClickSelect(item) {
            if (this.selectedFacet.find(ids => ids.id === item.id) === undefined) {
                this.selectedFacet.push(item)
            } else {
                this.selectedFacet = this.selectedFacet.filter(its => its.id !== item.id)
            }
        }

        onSelectTrace(item) {
            return this.selectedFacet.find(ids => ids.id === item.id) !== undefined
        }

        mounted() {
            this.$apollo.watchQuery({
                query: GetAllAssetsDocument,
                variables: {
                    first: 30
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.myAssets = value.data!.assets.edges
            })
            this.$apollo.watchQuery({
                query: GetFacetValuesDocument,
                variables: {
                    first: 30
                }
            }).subscribe(value => {
                this.allFacets = value.data!.facetValues.edges
            })
        }

        onClickSelectAsset(node) {
            if (this.featuredAssets === null) {
                this.featuredAssets = node
            }
            this.selectedAssets.push(node)
        }

        getSelectedColor(id): string {
            if (this.selectedAssets.find(item => item.id === id) !== undefined) {
                return '#1F7087'
            } else {
                return 'white'
            }
        }

        filePickerCallBack(callback, value, meta) {
            const input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.setAttribute('accept', 'image/*')
            const apollo = this.$apollo
            input.onchange = function (event) {
                // @ts-ignore
                const file = this.files[0]
                apollo.mutate({
                    mutation: CreateAssetDocument,
                    variables: {
                        file: file
                    }
                }).then(value1 => {
                    callback(`${assetsURL}/` + value1.data.createAsset.source, {title: file.filename})
                })
            }
            input.click()
        }

        imageUploadHandler(blobinfo, success, failure) {
            const file = new File([blobinfo.blob()], blobinfo.filename())
            console.log(file)
            this.$apollo.mutate({
                mutation: CreateAssetDocument,
                variables: {
                    file: file
                }
            }).then(value => {
                success(`${assetsURL}/` + value.data.createAsset.source)
            }).catch(error => {
                failure(error)
            })
        }
    }
</script>

<style>
    .v-dialog__content {
        z-index: 100000 !important;
    }
    .v-sheet {
        border-radius: 0px;
    }
</style>
