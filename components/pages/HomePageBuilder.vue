<template>
    <div class="card card-custom gutter-bs">
        <!--begin::Header-->
        <div class="card-header card-header-tabs-line">
            <div class="card-toolbar w-100 d-flex justify-content-between">
                <ul class="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x" role="tablist">
                    <li class="nav-item mr-3">
                        <a class="nav-link active" data-toggle="tab" href="#kt_apps_projects_view_tab_2">
                            <i class="nav-icon flaticon-apps"></i>
                            <span class="nav-text font-weight-bold">Main Carousel</span>
                        </a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link" data-toggle="tab" href="#kt_apps_projects_view_tab_3">
                            <i class="nav-icon flaticon-list"></i>
                            <span class="nav-text font-weight-bold">Home List</span>
                        </a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link" data-toggle="tab" href="#kt_apps_projects_view_tab_4">
                            <i class="nav-icon flaticon-plus"></i>
                            <span class="nav-text font-weight-bold">Add Items to List</span>
                        </a>
                    </li>
                </ul>
                <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2" @click="onClickSave">Save</a>
            </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body px-0">
            <div class="tab-content pt-5">
                <!--begin::Tab Content-->
                <div class="tab-pane active" id="kt_apps_projects_view_tab_2" role="tabpanel">
                    <div class="form">
                        <div class="row">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="font-size-h6 mb-5">Main Carousel</h3>
                                    <a href="javascript:;" @click="homeCar = true" class="btn btn-sm btn-light-success font-weight-bold mr-2">Add Main Carousel Item</a>
                                </div>
                            </div>
                        </div>

                        <div class="separator separator-dashed my-10"></div>

                        <div class="row ml-10 mr-10">
                            <div class="col-md-3" v-for="(main, index) of mainCarouselJSON">
                                <div class="card card-custom gutter-b">
                                    <div class="card-body d-flex p-0">
                                        <div class="flex-grow-1 p-20 pb-40 card-rounded flex-grow-1 bgi-no-repeat"
                                             style="background-color: #1B283F; background-position: calc(100% + 0.5rem) bottom; background-size: 50% auto;"
                                             :style="{'background-image': `url(${assetUrl}/${main.preview.preview})`}"
                                        >

                                            <h2 class="text-white pb-5 font-weight-bolder">{{main.type}}</h2>

                                            <a href="#" class="btn btn-danger font-weight-bold py-2 px-6" @click="onRemoveFormMainCarousel(index)">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!--end::Tab Content-->

                <!--begin::Tab Content-->
                <div class="tab-pane" id="kt_apps_projects_view_tab_3" role="tabpanel">
                    <div class="form">
                        <div class="row">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">

                            </div>
                        </div>

                        <!--begin::Heading-->
                        <div class="row">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="font-size-h6 mb-5">Lists</h3>
                                    <a href="javascript:;" class="btn btn-sm btn-light-success font-weight-bold mr-2" @click="addlist = true">Add List</a>
                                </div>
                            </div>
                        </div>
                        <div class="row pl-5 pr-5">
                            <div class="col-md-3" v-for="(litem, index) of singleListJSON">
                                <!--begin::Stats Widget 29-->
                                <div class="card card-custom bgi-no-repeat card-stretch gutter-b" style="background-position: right top; background-size: 30% auto; background-image: url(/media/svg/shapes/abstract-1.svg)">
                                    <!--begin::Body-->
                                    <div class="card-body">
                                        <span class="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">{{litem.name}}</span>
                                        <a class="font-weight-bold text-muted  font-size-sm" href="javascript:;"
                                           @click="onClickSelList(index)"
                                        >Change Items</a>
                                    </div>
                                    <!--end::Body-->
                                </div>
                                <!--end::Stats Widget 29-->
                            </div>
                        </div>
                        <!--end::Heading-->
                    </div>
                </div>
                <!--end::Tab Content-->
                <div class="tab-pane" id="kt_apps_projects_view_tab_4" role="tabpanel">
                    <div class="form">
                        <div class="row">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">

                            </div>
                        </div>

                        <!--begin::Heading-->
                        <div class="row">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="font-size-h6 mb-5">Search Items</h3>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-xl-3 col-lg-3 col-form-label text-right">Select Category</label>
                            <div class="col-lg-9 col-xl-6">
                                <a-select
                                    label-in-value
                                    style="width: 100%"
                                    v-model="catSelect"
                                >
                                    <a-select-option value="product">
                                        Product
                                    </a-select-option>
                                    <a-select-option value="variant">
                                        Product Variant
                                    </a-select-option>
                                </a-select>
                            </div>
                        </div>
                        <div class="row" v-if="catSelect !== ''">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">
                                <h3 class="font-size-h6 mb-5">Select Destination:
                                    <span v-if="tempListItem" class="text-muted d-flex justify-content-between align-items-center">{{tempListItem.type}} <span class="font-weight-bold text-success">{{tempListItem.target.id}}</span>
                                        <a href="javascript:;" class="btn btn-danger btn-shadow font-weight-bold mr-2" @click="tempListItem = null">Delete</a>
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div v-if="tempListItem === null">
                            <div class="row" v-if="catSelect !== ''">
                                <label class="col-xl-3"></label>
                                <div class="col-lg-9 col-xl-6">
                                    <h5 class="font-weight-bold mb-6">Select Item :</h5>
                                </div>
                            </div>
                            <div class="form-group row align-items-center" v-if="catSelect !== ''">
                                <label class="col-xl-3 col-lg-3 col-form-label text-right">Search</label>
                                <div class="col-lg-9 col-xl-6">
                                    <a-input placeholder="Search" v-model="search"/>
                                </div>
                            </div>
                            <div v-if="catSelect.key === 'product'">
                                <a-list item-layout="horizontal" :data-source="products">
                                    <a-list-item slot="renderItem" slot-scope="item, index">
                                        <a-list-item-meta
                                            :description="item.slug"
                                        >
                                            <a slot="title" @click="onClickListItemCarousel(item, 'product')" href="javascript:;" class="text-dark">{{ item.productName }}</a>
                                        </a-list-item-meta>
                                    </a-list-item>
                                </a-list>
                            </div>
                            <div v-if="catSelect.key === 'variant'">
                                <a-list item-layout="horizontal" :data-source="productVariants">
                                    <a-list-item slot="renderItem" slot-scope="item, index">
                                        <a-list-item-meta>
                                            <a slot="title" href="javascript:;" @click="onClickListItemCarousel(item, 'variant')" class="text-dark">{{ item.name }}</a>
                                        </a-list-item-meta>
                                    </a-list-item>
                                </a-list>
                            </div>
                        </div>
                        <div class="row pl-5 pr-5" v-if="tempListItem !== null">
                            <div class="col-md-3" v-for="(litem, index) of singleListJSON">
                                <!--begin::Stats Widget 29-->
                                <div class="card card-custom bgi-no-repeat card-stretch gutter-b" style="background-position: right top; background-size: 30% auto; background-image: url(/media/svg/shapes/abstract-1.svg)">
                                    <!--begin::Body-->
                                    <div class="card-body">
                                        <span class="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">{{litem.name}}</span>
                                        <a class="font-weight-bold text-muted  font-size-sm" href="javascript:;"
                                           @click="onClickAddItemToList(index)"
                                        >Add to this list</a>
                                    </div>
                                    <!--end::Body-->
                                </div>
                                <!--end::Stats Widget 29-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end::Body-->
        <v-dialog
            v-model="homeCar"
            style="z-index: 10000 !important;"
            fullscreen
            hide-overlay
        >
            <div class="card card-custom card-stretch">
                <!--begin::Header-->
                <div class="card-header py-3">
                    <div class="card-title align-items-start flex-column">
                        <h3 class="card-label font-weight-bolder text-dark">Add Main Carousel Item</h3>
                    </div>
                    <div class="card-toolbar">
                        <button class="btn btn-success mr-2" @click="onClickAddHomeImageCarousel">Save Changes</button>
                        <button class="btn btn-light-danger" @click="homeCar = false">Cancel</button>
                    </div>
                </div>
                <!--end::Header-->

                <!--begin::Form-->
                <div class="form">
                    <!--begin::Body-->
                    <div class="card-body">
                        <div class="row">
                            <label class="col-xl-3"></label>
                            <div class="col-lg-9 col-xl-6">
                                <h5 class="font-weight-bold mb-6">Select Item</h5>
                            </div>
                        </div>

                        <div class="form-group row align-items-center">
                            <label class="col-xl-3 col-lg-3 col-form-label text-right">Select Category</label>
                            <div class="col-lg-9 col-xl-6">
                                <a-select
                                    label-in-value
                                    style="width: 100%"
                                    v-model="catSelect"
                                    dropdownClassName="select-s1"
                                >
                                    <a-select-option value="product">
                                        Product
                                    </a-select-option>
                                    <a-select-option value="variant">
                                        Product Variant
                                    </a-select-option>
                                    <a-select-option value="category">
                                        Category
                                    </a-select-option>
                                </a-select>
                            </div>
                        </div>
                        <div class="row" v-if="catSelect !== ''">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">
                                <h3 class="font-size-h6 mb-5">Select Destination:</h3>
                                <div class="col-lg-9 col-xl-6">
                                    <button class="btn btn-success mr-2" @click="homeDestination = true">Select Target Destination</button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row align-items-center" v-if="tempHomeCol">
                            <label class="col-xl-3 col-lg-3 col-form-label text-right">Target</label>
                            <div class="col-lg-9 col-xl-6">
                                <span class="font-weight-bold">{{tempHomeCol.type}}</span>
                                <span class="font-weight-bold text-success">{{tempHomeCol.target.id}}</span>
                            </div>
                        </div>
                        <div class="row" v-if="catSelect !== ''">
                            <div class="col-lg-9 col-xl-6 offset-xl-3">
                                <h3 class="font-size-h6">Select Promotional Content:</h3>
                                <div class="col-lg-9 col-xl-6">
                                    <button class="btn btn-success mr-2" v-if="tempImageCol" @click="onClickUpload">Change Promo Image</button>
                                    <button class="btn btn-success mr-2" v-if="!tempImageCol" @click="onClickUpload">Select Promo Image</button>
                                </div>
                                <div class="col-lg-12 col-xl-12" v-if="tempImageCol">
                                    <img :src="`${assetUrl}/${tempImageCol.source}?size=large`" style="width: 100%; height: calc(100vh - 250px); object-fit: contain"/>
                                </div>
                                <input type="file" style="display: none" ref="fileInput" accept="image/*" v-on:change="onImageChange($event)"/>
                            </div>
                        </div>
                    </div>
                    <!--end::Body-->
                </div>
                <!--end::Form-->
            </div>
        </v-dialog>
        <v-dialog v-model="homeDestination"
                  width="80vw" hide-overlay>
            <div class="card card-custom card-stretch">
                <!--begin::Header-->
                <div class="card-header py-3">
                    <div class="card-title align-items-start flex-column">
                        <h3 class="card-label font-weight-bolder text-dark">Select Target</h3>
                    </div>
                    <div class="card-toolbar">
                        <button class="btn btn-light-danger" @click="homeDestination = false">Cancel</button>
                    </div>
                </div>
                <!--end::Header-->
                <div class="form">
                    <!--begin::Body-->
                    <div class="card-body">
                        <div class="row">
                            <label class="col-xl-3"></label>
                            <div class="col-lg-9 col-xl-6">
                                <h5 class="font-weight-bold mb-6">Select Item</h5>
                            </div>
                        </div>
                        <div class="form-group row align-items-center" v-if="catSelect !== '' && catSelect.key !== 'image'">
                            <label class="col-xl-3 col-lg-3 col-form-label text-right">Search</label>
                            <div class="col-lg-9 col-xl-6">
                                <a-input placeholder="Search" v-model="search"/>
                            </div>
                        </div>
                        <div v-if="catSelect.key === 'product'">
                            <a-list item-layout="horizontal" :data-source="products">
                                <a-list-item slot="renderItem" slot-scope="item, index">
                                    <a-list-item-meta
                                        :description="item.slug"
                                    >
                                        <a slot="title" @click="onClickMainCarousel(item, 'product')" href="javascript:;" class="text-dark">{{ item.productName }}</a>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </div>
                        <div v-if="catSelect.key === 'variant'">
                            <a-list item-layout="horizontal" :data-source="productVariants">
                                <a-list-item slot="renderItem" slot-scope="item, index">
                                    <a-list-item-meta>
                                        <a slot="title" href="javascript:;" @click="onClickMainCarousel(item, 'variant')" class="text-dark">{{ item.name }}</a>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </div>
                        <div v-if="catSelect.key === 'category'">
                            <a-list item-layout="horizontal" :data-source="collections">
                                <a-list-item slot="renderItem" slot-scope="item, index">
                                    <a-list-item-meta>
                                        <a slot="title" href="javascript:;" @click="onClickMainCarousel(item, 'category')" class="text-dark">{{ item.name }}</a>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </div>
                    </div>
                    <!--end::Body-->
                </div>
            </div>
        </v-dialog>
        <v-dialog
            v-model="addlist"
            width="600px"
            hide-overlay
        >
            <div class="card card-custom card-stretch">
                <!--begin::Header-->
                <div class="card-header py-3">
                    <div class="card-title align-items-start flex-column">
                        <h3 class="card-label font-weight-bolder text-dark">Add List</h3>
                    </div>
                    <div class="card-toolbar">
                        <a href="javascript:;" class="btn btn-sm btn-light-success font-weight-bold mr-2" @click="onAddList">Save List</a>
                        <button class="btn btn-light-danger" @click="addlist = false">Cancel</button>
                    </div>
                </div>
                <!--end::Header-->
                <div class="form">
                    <!--begin::Body-->
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label text-lg-right">List Name:</label>
                            <div class="col-lg-7">
                                <input type="text" class="form-control" placeholder="" v-model="listname">
                            </div>
                        </div>
                    </div>
                    <!--end::Body-->
                </div>
            </div>
        </v-dialog>
        <v-dialog
            v-model="selopen"
            width="80vw"
            hide-overlay
        >
            <div class="card card-custom card-stretch">
                <!--begin::Header-->
                <div class="card-header py-3">
                    <div class="card-title align-items-start flex-column">
                        <h3 class="card-label font-weight-bolder text-dark">{{selname}}</h3>
                    </div>
                    <div class="card-toolbar">
                        <button class="btn btn-light-danger" @click="selindex = null">Cancel</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3" v-for="(ellist, index) of selList">
                            <div class="card card-custom bgi-no-repeat gutter-b bg-dark" style="height: 200px;background-image: url(/media/svg/patterns/aare.svg);background-position: calc(100% + 0.5rem) calc(100% + 0.5rem); background-size: 105% auto;">
                                <div class="card-body">
                                    <div>
                                        <span class="text-white font-weight-bolder line-height-lg mb-5 font-size-h3">{{ellist.type.key}}</span>
                                    </div>
                                    <div>
                                        <span class="text-white font-weight-bolder line-height-lg mb-5 font-size-h3" style="text-transform: uppercase !important;" v-if="ellist.type.key === 'product'">
                                            {{ellist.target.target.productName}}
                                        </span>
                                        <span class="text-white font-weight-bolder line-height-lg mb-5 font-size-h3" style="text-transform: uppercase !important;" v-if="ellist.type.key === 'variant'">
                                            {{ellist.target.target.name}}
                                        </span>
                                    </div>
                                    <div>
                                        <button class="btn btn-danger btn-shadow font-weight-bold" @click="onDeleteTheItems(index)">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {
        CreateAssetDocument, CreateHomeDocument,
        GetAllProductsDocument,
        GetCollectionForSearchDocument, GetHomePageDocument,
        GetQueryProductVariantDocument, GetSearchProdDocument, GetSearchProductVariantDocument, UpdateHomeDocument
    } from "~/gql";
    import {assetsURL} from "~/constants/GlobalURL";

    @Component({
        apollo: {
            products: {
                query: GetSearchProdDocument,
                variables() {
                    return {
                        iLike: `%${this.search}%`
                    }
                }
            },
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
            getHomePage: {
                query: GetHomePageDocument,
                pollInterval: 2000
            }
        }
    })
    export default class HomePage extends Vue {
        private homeCar = false
        private homeDestination = false
        private catSelect = ''
        private search = ''

        private assetUrl = assetsURL

        private products
        private productVariants
        private collections

        private tempHomeCol: any = null
        private tempImageCol: any = null

        private mainCarouselJSON: any = []
        private singleListJSON: any = []

        public $refs: Vue['$refs'] & {
            fileInput: HTMLInputElement
        };

        private getHomePage

        private listname = ''
        private addlist = false

        private selindex: any = null
        private selList: any[] = []
        private selopen = false
        private selname: any = ''

        private tempListItem: any = null

        onDeleteTheItems(index) {
            this.singleListJSON[this.selindex].items.splice(index, 1)
        }

        @Watch('singleListJSON')
        onChangeSingleJS() {
            console.log(this.singleListJSON)
        }

        onClickSelList(index) {
            this.selindex = index
        }

        onClickAddItemToList(index) {
            this.singleListJSON[index].items.push({
                target: this.tempListItem,
                type: this.catSelect
            })
            this.tempListItem = null
            this.catSelect = ''
            this.$Message.success('Item Added to List')
        }

        @Watch('selindex')
        onClickSelIndex() {
            if (this.selindex !== null) {
                this.selList = this.singleListJSON[this.selindex].items
                this.selname = this.singleListJSON[this.selindex].name
                this.selopen = true
                console.log(this.selname)
            } else {
                this.selname = ''
                this.selopen = false
            }
        }

        onAddList() {
            this.singleListJSON.push({
                name: this.listname,
                items: []
            })
            this.listname = ''
            this.addlist = false
        }

        @Watch('getHomePage')
        onChangeGetHomePage() {
            if (this.getHomePage) {
                this.mainCarouselJSON = this.getHomePage.single.main
                this.singleListJSON = this.getHomePage.single.lists
            }
        }

        onRemoveFormMainCarousel(index) {
            this.mainCarouselJSON.splice(index, 1)
        }

        @Watch('mainCarouselJSON')
        handleChange() {
            console.log(this.mainCarouselJSON)
        }

        onClickAddHomeImageCarousel() {
            this.mainCarouselJSON.push({
                ...this.tempHomeCol,
                preview: this.tempImageCol
            })
            this.tempImageCol = null
            this.tempHomeCol = null
            this.homeCar = false
        }

        onClickMainCarousel(item, type) {
            this.tempHomeCol = {
                target: item,
                type: type
            }
            this.homeDestination = false
        }

        onClickListItemCarousel(item, type) {
            this.tempListItem = {
                target: item,
                type: type
            }
        }

        onClickSave() {
            const load: any = this.$Message.loading('Action in progress..');
            const HomePageJSON = {
                main: this.mainCarouselJSON,
                lists: this.singleListJSON
            }
            if (this.getHomePage) {
                this.$apollo.mutate({
                    mutation: UpdateHomeDocument,
                    variables: {
                        id: this.getHomePage.id,
                        single: HomePageJSON
                    }
                }).then(value => {
                    load()
                    this.$Message.success('Home Page Updated')
                }).catch(error => {
                    load()
                    this.$Message.error(error.message)
                })
            } else {
                this.$apollo.mutate({
                    mutation: CreateHomeDocument,
                    variables: {
                        title: 'HOME',
                        targetId: 'HOME',
                        single: HomePageJSON,
                        pageType: 'SINGLE'
                    }
                }).then(value => {
                    load()
                    this.$Message.success('Home Page Updated')
                }).catch(error => {
                    load()
                    this.$Message.error(error.message)
                })
            }
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
                },
                /*context: {
                    hasUpload: true
                }*/
            }).then(value => {
                this.tempImageCol = value.data.createAsset
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
    }
</script>

<style>
.v-dialog {
    z-index: 1000;
}
.select-s1 {
    z-index: 10000000;
}
</style>
