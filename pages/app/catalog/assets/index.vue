<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Assets</h5>
                <button type="button" class="btn btn-primary btn-sm mr-2 mb-2" @click="onClickUpload">
                    <i class="fe fe-image"></i>
                    Asset
                </button>
                <input type="file" style="display: none" ref="fileInput" accept="image/*" v-on:change="onImageChange($event)"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="air__gallery__items d-flex flex-wrap">
                    <AssetsPreview v-for="asset in myAssets" :node="asset.node" :key="asset.node.id"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <a-button-group>
                    <a-button type="primary" @click="onPrev" :disabled="!hasPrev"> <a-icon type="left" />Go back </a-button>
                    <a-button type="primary" @click="onNext" :disabled="!hasNext"> Go forward<a-icon type="right" /> </a-button>
                </a-button-group>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {Asset, CreateAssetDocument, GetAllAssetsDocument} from '../../../../gql';
    import moment from 'moment';
    import AssetsPreview from '../../../../components/assets/AssetsPreview.vue';

    @Component({
        layout: 'console',
        components: {
            AssetsPreview
        },
        apollo: {
            assets: {
                query: GetAllAssetsDocument,
                variables() {
                    return {
                        first: this.first !== undefined ? this.first : undefined ,
                        last: this.last !== undefined ? this.last : undefined,
                        before: this.before !== undefined ? this.before : undefined,
                        after: this.after !== undefined ? this.after : undefined
                    }
                },
                pollInterval: 4000,
                deep: true
            }
        }
    })
    export default class Index extends Vue {
        private imageChange: any = null
        private myAssets: Asset[] = []

        // Paging
        private last: any = undefined
        private first: any = 10
        private after: any = null
        private before: any = undefined
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;
        private assets

        public $refs: Vue['$refs'] & {
            fileInput: HTMLInputElement
        };

        @Watch('assets')
        onChangeAsset() {
            console.log(this.assets)
            this.myAssets = this.assets.edges
            this.hasNext = this.assets.pageInfo.hasNextPage
            this.hasPrev = this.assets.pageInfo.hasPreviousPage
        }

        onNext() {
            this.after = this.assets.pageInfo.endCursor ? this.assets.pageInfo.endCursor : null
            this.before = undefined
            this.first = 10
            this.last = undefined
            console.log(this.after, this.before)
        }

        onPrev() {
            this.before = this.assets.pageInfo.startCursor ? this.assets.pageInfo.startCursor: null
            this.after = undefined
            this.last = 10
            this.first = undefined
            console.log(this.after, this.before)
        }

        mounted() {
            /*this.$apollo.watchQuery({
                query: GetAllAssetsDocument,
                variables: {
                    first: 30
                },
                pollInterval: 3000
            }).subscribe(value => {
                console.log(value)
                this.myAssets = value.data!.assets.edges
            })*/
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
                console.log(value)
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
