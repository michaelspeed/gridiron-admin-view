<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                    <h5 style="margin-left: 10px">SEO: {{metaTitle}}</h5>
                </div>
            </div>
        </div>
        <v-card>
            <div style="padding: 20px">
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
            </div>
            <v-card-actions style="padding: 20px">
                <button type="button" class="btn btn-primary" @click="onUpdateSeo">Update</button>
            </v-card-actions>
        </v-card>
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
