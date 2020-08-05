<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">SEO: {{metaTitle}}</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">

                            </div>
                            <!--end::Search Form-->
                        </div>
                        <!--end::Details-->

                        <!--begin::Toolbar-->
                        <div class="d-flex align-items-center">
                            <!--begin::Button-->
                            <a href="#" class="">

                            </a>
                            <!--end::Button-->

                            <!--begin::Button-->

                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.seo.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body" v-if="!$apollo.queries.seo.loading">
                        <div class="form-group">
                            <label>Enter Meta URL</label>
                            <a-input size="large" v-model="metaUrl" :disabled="true"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Enter Meta Title</label>
                            <a-input size="large" v-model="metaTitle"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Enter Meta Keywords</label>
                            <vue-tags-input
                                v-model="metaKey" @tags-changed="newTags => metaKeywords = newTags"
                                :tags="metaKeywords" placeholder="Enter keywords"
                            />
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div class="form-group">
                            <label>Enter Meta Description</label>
                            <a-input size="large" type="textarea" v-model="metaDesc"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                        <div>
                            <button type="button" class="btn btn-light-primary" @click="onUpdateSeo">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {GetOneSeoDocument, Seo, UpdateOneSeoDocument} from '../../../../gql';

    @Component({
        layout: 'console',
        apollo: {
            seo: {
                query: GetOneSeoDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                fetchPolicy: 'network-only'
            }
        }
    })
    export default class SeoSingle extends Vue {
        private metaUrl: string = ''
        private metaTitle: string = ''
        private metaDesc: string = ''
        private metaKeywords: any[] = []
        private metaKey: string = ''

        private seo: any

        @Watch('seo')
        onChanGeSo() {
            console.log(this.seo)
            this.metaUrl = this.seo.urlKey
            this.metaTitle = this.seo.metatitle
            this.metaDesc = this.seo.metadesc
            this.metaKeywords = this.seo.metakeywords.map(item => ({text: item}))
        }

        onUpdateSeo() {
            this.$apollo.mutate({
                mutation: UpdateOneSeoDocument,
                variables: {
                    id: this.$route.params.id,
                    metatitle: this.metaTitle,
                    metakeywords: this.metaKeywords.map(item => item.text),
                    metadesc: this.metaDesc
                }
            }).then(value => {
                this.$Message.success('Seo Updated')
            }).catch(error => {
                this.$Message.error(error.message)
            })
        }

    }
</script>
