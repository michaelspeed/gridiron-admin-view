<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Menu Builder</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <v-card>
                    <v-card-title>
                        <h5>Menu </h5>
                    </v-card-title>
                    <hr/>
                    <v-card-text v-if="MenuNodes !== null">
                        <PrimeTree :value="MenuNodes" selectionMode="single" :selectionKeys.sync="root" :loading="GetMenuTree === undefined"></PrimeTree>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                color="primary"
                                outlined
                                x-small
                                @click="root = null"
                        >
                            Add Root Menu Type
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            <div class="col-md-8">
                <root-menu v-if="root === null"/>
                <child-menu v-if="root !== null" :menu="root"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import RootMenu from '../../../../components/Menu/root-menu.vue';
    import {GetMenuTreeDocument} from '../../../../gql';
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

        @Watch('root')
        onChangeRoot() {
            console.log(Object.keys(this.root))
        }

        @Watch('GetMenuTree')
        onGetMenuTree() {
            const nods = JSON.parse(this.GetMenuTree.menu)
            let newMods: any[] = []
            for (const nsitem of nods) {
                console.log(nsitem)
                let childMod: any[] = []
                if (nsitem.children.length > 0) {
                    for (const csitem of nsitem.children) {
                        childMod.push({
                            key: csitem.id,
                            label: csitem.title,
                            data: csitem,
                            icon: "pi pi-fw pi-sitemap",
                        })
                    }
                }
                newMods.push({
                    key: nsitem.id,
                    label: nsitem.title,
                    data: nsitem,
                    icon: "pi pi-fw pi-sitemap",
                    children: childMod
                })
            }
            this.MenuNodes = newMods
            console.log(this.MenuNodes)
        }
    }
</script>

<style>
    .p-tree {
        border: 0px !important;
        padding: 0px !important;
    }
</style>
