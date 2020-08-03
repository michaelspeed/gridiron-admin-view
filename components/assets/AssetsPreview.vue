<template>
    <div class="air__gallery__item">
        <div class="air__gallery__itemContent">
            <div class="air__gallery__itemControl">
                <div class="btn-group air__gallery__itemControlContainer">
                    <button type="button" class="btn" @click="preview = true">
                        <i class="fe fe-eye text-success"></i>
                    </button>
                    <button type="button" class="btn">
                        <i class="fe fe-edit text-primary"></i>
                    </button>
                    <button type="button" class="btn">
                        <i class="fe fe-trash text-dark"></i>
                    </button>
                </div>
            </div>
            <img :src="`${assetUrl}/${node.preview}`" />
        </div>
        <div class="text-gray-6">
            <div class="d-flex align-items-center ">
                {{node.name.substring(0, 20)}}
                <Tooltip placement="top" :content="getContentString(node)">
                    <i class="fe fe-info ml-2"></i>
                </Tooltip>
            </div>
            <div>{{convertToMB(node.fileSize)}} mb</div>
        </div>
        <v-dialog v-model="preview" fullscreen>
            <v-card>
                <v-toolbar flat>
                    <v-btn icon @click="preview = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title style="color: #161537">Preview</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn text @click="dialog = false">Update</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container>
                    <div class="row">
                        <div class="col-md-10">
                            <img :src="`${assetUrl}/${node.source}?size=large`" style="width: 100%; height: calc(100vh - 250px); object-fit: contain"/>
                        </div>
                        <div class="col-md-2">
                            <v-list two-line subheader>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>Name</v-list-item-title>
                                        <v-list-item-subtitle>{{node.name}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>Size</v-list-item-title>
                                        <v-list-item-subtitle>{{convertToMB(node.fileSize)}} mb</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>Dimensions</v-list-item-title>
                                        <v-list-item-subtitle>{{node.width}} x {{node.height}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </div>
                    </div>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Asset} from '../../gql';
    import {assetsURL} from '../../constants/GlobalURL';
    import moment from 'moment';

    @Component
    export default class AssetsPreview extends Vue {
        @Prop() node: Asset
        private assetUrl = assetsURL
        private preview: boolean = false

        getContentString(node) {
            return `${node.name} / createdAt: ${moment(node.createdAt).format('DD MMM YYYY')}`
        }

        convertToMB(size: number) {
            return (size / 1000000.0).toFixed(2)
        }
    }
</script>

<style>
    .v-dialog__content {
        z-index: 100000 !important;
    }
</style>
