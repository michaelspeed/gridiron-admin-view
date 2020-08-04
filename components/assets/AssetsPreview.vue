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
              <a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ki ki-bold-more-hor"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                <!--begin::Navigation-->
                <ul class="navi navi-hover py-5">
                  <li class="navi-item">
                    <a href="javascript:;" class="navi-link" @click="preview = true" style="padding: 10px">
                      <span class="navi-icon"><i class="flaticon2-drop"></i></span>
                      <span class="navi-text">Preview</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body" style="margin-top: -25px;">
          <div class="d-flex flex-column align-items-center">
            <img alt="" class="max-h-100px" :src="`${assetUrl}/${node.preview}`" style="object-fit: contain; margin-bottom: 10px">
            <Tooltip placement="top" :content="getContentString(node)">
              <a href="#" class="text-dark-75 font-weight-bold mt-20 font-size-lg">
                {{node.name.substring(0, 20)}}
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="air__gallery__item">
      <div class="air__gallery__itemContent">
        <div class="air__gallery__itemControl">
          <div class="btn-group air__gallery__itemControlContainer">
            <button type="button" class="btn" >
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
        <img :src="`${assetUrl}/${node.preview}`" style="object-fit: contain" />
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
    </div>-->
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
