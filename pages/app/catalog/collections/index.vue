<template>
    <div>
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
            <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
              <!--begin::Details-->
              <div class="d-flex align-items-center flex-wrap mr-2">

                <!--begin::Title-->
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Collections</h5>
                <!--end::Title-->

                <!--begin::Separator-->
                <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                <!--end::Separator-->

                <!--begin::Search Form-->
                <div class="d-flex align-items-center" id="kt_subheader_search">
                  <div class="ml-5">
                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                      <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..."/>
                      <div class="input-group-append">
                        <i class="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
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
                <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="onClickCreateNewRootCollection">
                  Add Root-Collection
                </a>
                <!--end::Button-->
              </div>
              <!--end::Toolbar-->
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <v-sheet elevation="4" style="border-radius: 6px">
                <div class="card-header border-0 py-5" :style="{'background-color': theme.colors.theme.base.primary}">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-white">All Collections</span>
                  </h3>
                </div>
                <div class="card-body">
                  <div v-if="selected !== null" class="mb-3">
                    <div class="text-muted">Collection Options:</div>
                    <div class="d-flex justify-content-between align-items-center">
                      <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2"  @click="onClickSubCollection">Add</a>
                      <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2">Delete</a>
                    </div>
                  </div>
                    <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.GetCollectionTree.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                  <a-tree
                    :tree-data="allCollections"
                    defaultExpandAll
                    showLine
                    switcherIcon
                    @select="onUpdateCollection"
                  ></a-tree>
                </div>
              </v-sheet>
            </div>
            <div class="col-md-8">
              <collection-edit :id="selected" v-if="selected"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {PerfectScrollbar} from "vue2-perfect-scrollbar";
    import {Collection, GetallcollectionDocument, GetallcollectionQueryVariables} from '../../../../gql';
    import CollectionEdit from '../../../../components/collections/collection-edit.vue';
    import {GridironViewSettings} from "~/utils/theme.settings";

    @Component({
        layout: 'console',
        components:{
            CollectionEdit,
            PerfectScrollbar
        },
        apollo: {
            GetCollectionTree: {
                query: GetallcollectionDocument,
                pollInterval: 4000
            },
        }
    })
    export default class Index extends Vue {
        private allData: any[] = []
        private allCollections: any[] = []
        private selected: string | null = null
        private expanded = []

        private theme = GridironViewSettings

        private GetCollectionTree

        onClickCreateNewRootCollection() {
            this.$router.push('/app/catalog/collections/createnewcollection')
        }

        onClickSubCollection() {
            this.$router.push(`/app/catalog/collections/createnewcollection/${this.selected}`)
        }

        onClickNode(id) {
            console.log(id)
            this.selected = id
        }

        mounted() {

        }

        onUpdateCollection(keys) {
            this.selected = keys[0]
        }

        @Watch('GetCollectionTree')
        onChangeData() {
            console.log(this.GetCollectionTree)
            let onechindren: any[] = [];
            for (let vls of this.GetCollectionTree) {
                let twochildren: any[] = [];
                twochildren = this.onNodeEnter(vls)
                /*if (vls.children.length > 0) {
                    for (let second of vls.children) {
                        let thirdchild: any[] = [];
                        if (second.children.length > 0) {
                            for (let third of second.children) {
                                let thnode = {
                                    key: third.id,
                                    title: third.name,
                                    menu: third.inMenu,
                                    add: false,
                                    edit: true
                                };
                                thirdchild.push(thnode);
                            }
                        }
                        let twonode = {
                            key: second.id,
                            title: second.name,
                            menu: second.inMenu,
                            add: true,
                            edit: true,
                            children: thirdchild
                        };
                        twochildren.push(twonode);
                    }
                }*/
                let onNode = {
                    key: vls.id,
                    title: vls.name,
                    menu: vls.inMenu,
                    add: true,
                    edit: true,
                    children: twochildren,
                    asset: vls.asset
                };
                onechindren.push(onNode);
            }
            this.allCollections = onechindren;
        }

        onNodeEnter(nsitem): any[] {
            let childMod: any[] = []
            if (nsitem.children && nsitem.children.length > 0) {
                for (const csitem of nsitem.children) {
                    let asitem: any[] = []
                    asitem = this.onNodeEnter(csitem)
                    childMod.push({
                        key: csitem.id,
                        title: csitem.name,
                        menu: csitem.inMenu,
                        add: false,
                        edit: true,
                        children: asitem,
                        asset: csitem.asset
                    })
                }
            }
            return childMod
        }
    }
</script>

<style>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>
