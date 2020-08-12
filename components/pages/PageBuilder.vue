<template>
    <div>
        <div class="card card-custom gutter-b">
            <div class="card-body">
                <div class="d-flex">

                    <!--begin: Info-->
                    <div class="flex-grow-1">
                        <!--begin::Title-->
                        <div class="d-flex align-items-center justify-content-center flex-wrap">
                            <div class="form-group fv-plugins-icon-container">
                                <a-input placeholder="Search ..." class="w-375px" v-model="search"/>
                            </div>
                        </div>
                        <!--end::Title-->
                    </div>
                    <!--end::Info-->
                </div>
            </div>
        </div>

        <div class="card card-custom gutter-b" v-if="type === 'PRODVARIANT'">
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
        </div>

        <div class="card card-custom gutter-b" v-if="type === 'CATEGORY'">
            <div class="card-header h-auto py-3 border-0">
                <div class="card-title">
                    <h3 class="card-label text-danger">
                        Select Target
                    </h3>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center align-items-center m-20 w-100"
                     v-if="$apollo.queries.collections.loading">
                    <div class="spinner spinner-primary spinner-lg mr-15"></div>
                </div>
                <a-list item-layout="horizontal" :data-source="collections" v-if="!$apollo.queries.collections.loading">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-list-item-meta>
                            <a slot="title" href="javascript:;" class="text-dark">{{ item.name }}</a>
                        </a-list-item-meta>
                    </a-list-item>
                </a-list>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {
        GetCollectionForSearchDocument,
        GetHomePageDocument,
        GetSearchProdDocument,
        GetSearchProductVariantDocument
    } from "~/gql";

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
        @Prop() type
        private search = ''

        private productVariants
        private collections

        private target: any = null
    }
</script>
