<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class=" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Menu Builder</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"></span>
                                <div class="ml-5">

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
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <v-card>
                            <v-card-title style="width: 100%">
                                <div style="display: flex; align-items: center; justify-content: space-between; width: 100%">
                                    <div>
                                        <h5>Menu </h5>
                                    </div>
                                    <div>
                                        <v-btn text color="red">
                                            Reset Menu
                                        </v-btn>
                                    </div>
                                </div>
                            </v-card-title>
                            <hr/>
                            <v-card-text v-if="MenuNodes !== null">
                                <PrimeTree :value="MenuNodes" selectionMode="single" :selectionKeys.sync="root" :loading="GetMenuTree === undefined">
                                    <template #default="slotProps">
                                        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%">
                                            <b>{{slotProps.node.label}}</b>
                                            <div>
                                                <v-btn
                                                    icon
                                                    color="red"
                                                    @click="onClickDelete(slotProps.node.key)"
                                                >
                                                    <v-icon>mdi-delete</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </template>
                                </PrimeTree>
                            </v-card-text>
                            <v-card-actions>
                                <a href="javascript:;" class="btn btn-light-primary btn-sm font-weight-bold mr-2" @click="root = null">Add Root Menu Type</a>
                            </v-card-actions>
                        </v-card>
                    </div>
                    <div class="col-md-8">
                        <root-menu v-if="root === null"/>
                        <child-menu v-if="root !== null" :menu="root"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import RootMenu from '../../../../components/Menu/root-menu.vue';
    import {DeleteOneMenuDocument, GetMenuTreeDocument} from '../../../../gql';
    import ChildMenu from '../../../../components/Menu/child-menu.vue';

    @Component({
        components: {RootMenu, ChildMenu},
        layout: 'console',
        apollo: {
            GetMenuTree: {
                query: GetMenuTreeDocument,
                pollInterval: 3000
            }
        }
    })
    export default class MenuBuilder extends Vue{
        private root: any = null

        private GetMenuTree
        private MenuNodes: any | null = null

        @Watch('GetMenuTree')
        onGetMenuTree() {
            const nods = JSON.parse(this.GetMenuTree.menu)
            let newMods: any[] = []
            for (const nsitem of nods) {
                let childMod: any[] = []
                childMod = this.onNodeEnter(nsitem)
                /*if (nsitem.children.length > 0) {
                    for (const csitem of nsitem.children) {
                        childMod.push({
                            key: csitem.id,
                            label: csitem.title,
                            data: csitem,
                            icon: "pi pi-fw pi-sitemap",
                        })
                    }
                }*/
                newMods.push({
                    key: nsitem.id,
                    label: nsitem.title,
                    data: nsitem,
                    icon: "pi pi-fw pi-sitemap",
                    children: childMod
                })
            }
            this.MenuNodes = newMods
        }

        onNodeEnter(nsitem): any[] {
            let childMod: any[] = []
            if (nsitem.children.length > 0) {
                for (const csitem of nsitem.children) {
                    let asitem: any[] = []
                    asitem = this.onNodeEnter(csitem)
                    childMod.push({
                        key: csitem.id,
                        label: csitem.title,
                        data: csitem,
                        icon: "pi pi-fw pi-sitemap",
                        children: asitem
                    })
                }
            }
            return childMod
        }

        onClickDelete(id) {
            this.$apollo.mutate({
                mutation: DeleteOneMenuDocument,
                variables: {
                    id
                }
            })
            .then(() => {
                this.$message.success('Menu Deleted')
            })
            .catch(err => {
                this.$message.error(err.message)
            })
        }
    }
</script>

<style>
    .p-tree {
        border: 0px !important;
        padding: 0px !important;
    }
    .p-tree .p-tree-container .p-treenode {
        padding: 0px !important;
    }
    .p-tree .p-tree-container .p-treenode .p-treenode-content {
        padding: 0.25rem !important;
    }
</style>
