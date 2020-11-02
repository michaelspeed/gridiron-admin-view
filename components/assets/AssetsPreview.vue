<template>
  <div>
    <div class="col-md-4" style="width: 100% !important; max-width: 100% !important;">
      <!--begin::Card-->
      <div class="card card-custom gutter-b card-stretch" style="width: 100% !important;">
        <div class="card-header border-0">
          <h3 class="card-title">
          </h3>
          <div class="card-toolbar">
            <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <v-menu offset-y>
                    <template v-slot:activator="{on, attrs}">
                        <a href="javascript:;" v-bind="attrs" v-on="on" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ki ki-bold-more-hor"></i>
                        </a>
                    </template>
                    <v-list>
                        <v-list-item @click="preview = true">
                            <v-list-item-action>
                                <v-icon color="primary">mdi-eye-circle</v-icon>
                            </v-list-item-action>
                            <v-list-item-title>
                                Preview
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="onDeleteAsset" v-if="!vendorStore">
                            <v-list-item-action>
                                <v-icon color="red">mdi-delete-variant</v-icon>
                            </v-list-item-action>
                            <v-list-item-title>
                                Delete
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
          </div>
        </div>
        <div class="card-body" style="margin-top: -25px;">
          <div class="d-flex flex-column align-items-center">
            <img alt="" class="max-h-100px" :src="`${assetUrl}/${node.preview}`" style="object-fit: contain; margin-bottom: 10px">
            <Tooltip placement="top" :content="getContentString(node)">
              <a href="#" class="text-muted font-weight-bold mt-20 font-size-lg">
                {{node.name.substring(0, 20)}}
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="preview" fullscreen>
      <v-card>
        <v-toolbar flat color="primary">
          <v-btn icon @click="preview = false" color="white">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title style="color: white">Asset Preview</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
          <div class="row">
            <div class="col-md-10">
              <img :src="`${assetUrl}/${node.source}?size=large`" style="width: 100%; height: calc(100vh - 250px); object-fit: contain"/>
            </div>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-header border-0 d-flex justify-content-between align-items-center" :style="{'background-color': theme.colors.theme.base.primary}">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label font-weight-bolder text-white">Asset Info</span>
                        </h3>
                    </div>
                    <div class="card-body">
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
                <div class="card mt-6">
                    <div class="card-header border-0 d-flex justify-content-between align-items-center" :style="{'background-color': theme.colors.theme.base.primary}">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label font-weight-bolder text-white">Usage</span>
                        </h3>
                    </div>
                    <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.asset.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body" v-if="asset">
                        <v-list two-line subheader>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Feature</v-list-item-title>
                                    <v-list-item-subtitle>{{asset.featuredsAggregate.count.id}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Product Assets</v-list-item-title>
                                    <v-list-item-subtitle>{{asset.productAssetsAggregate.count.id}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
            </div>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Asset, DeleteOneAssetDocument, GetAssetAggregateDocument} from '../../gql';
    import {assetsURL} from '../../constants/GlobalURL';
    import moment from 'moment';
    import {GridironViewSettings} from "~/utils/theme.settings";
    import {mapState} from "vuex";

    @Component({
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
                vendorStore: (store: any) => store.admin.vendorStore,
            }),
        },
        apollo: {
            asset: {
                query: GetAssetAggregateDocument,
                variables(){
                    return {
                        id: this.node.id
                    }
                }
            }
        }
    })
    export default class AssetsPreview extends Vue {
        @Prop() node: Asset
        private assetUrl = assetsURL
        private preview: boolean = false
        private theme = GridironViewSettings

        private asset: Asset

        getContentString(node) {
            return `${node.name} / createdAt: ${moment(node.createdAt).format('DD MMM YYYY')}`
        }

        convertToMB(size: number) {
            return (size / 1000000.0).toFixed(2)
        }

        onDeleteAsset() {
            this.$Message.loading('Action in Progress ....')
            this.$apollo.mutate({
                mutation: DeleteOneAssetDocument,
                variables: {
                    id: this.node.id
                }
            })
            .then(value => {
                this.$Message.success('Asset Deleted')
            })
            .catch(error =>{
                this.$Message.error(error.message)
            })
        }
    }
</script>

<style>
    .v-dialog__content {
        z-index: 100000 !important;
    }
</style>
