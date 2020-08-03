<template>
    <div>
        <div class="air__utils__heading">
            <h5>Collections</h5>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header card-header-flex align-items-center">
                        <div class="d-flex flex-column justify-content-center mr-auto">
                            <span class="mb-0 text-dark">All Collections</span>
                        </div>
                        <div>
                            <a-button type="primary" size="small" @click="onClickCreateNewRootCollection">Add Root-Collection</a-button>
                        </div>
                    </div>
                    <div class="card-body">
                        <a-tree
                                :tree-data="allCollections"
                                defaultExpandAll
                                showLine
                                switcherIcon
                                @select="onUpdateCollection"
                        ></a-tree>
                    </div>
                    <div class="card-footer" v-if="selected !== null">
                        <div class="d-flex justify-content-between align-items-center">
                            <a-button type="primary" size="small" @click="onClickSubCollection">Add</a-button>
                            <a-button type="danger" size="small">Delete</a-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <collection-edit :id="selected" v-if="selected"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {PerfectScrollbar} from "vue2-perfect-scrollbar";
    import {Collection, GetallcollectionDocument, GetallcollectionQueryVariables} from '../../../../gql';
    import CollectionEdit from '../../../../components/collections/collection-edit.vue';

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
            let onechindren: any[] = [];
            for (let vls of this.GetCollectionTree) {
                let twochildren: any[] = [];
                if (vls.children.edges.length > 0) {
                    for (let second of vls.children.edges) {
                        let thirdchild: any[] = [];
                        if (second.node.children.edges.length > 0) {
                            for (let third of second.node.children.edges) {
                                let thnode = {
                                    key: third.node.id,
                                    title: third.node.name,
                                    menu: third.node.inMenu,
                                    add: false,
                                    edit: true
                                };
                                thirdchild.push(thnode);
                            }
                        }
                        let twonode = {
                            key: second.node.id,
                            title: second.node.name,
                            menu: second.node.inMenu,
                            add: true,
                            edit: true,
                            children: thirdchild
                        };
                        twochildren.push(twonode);
                    }
                }
                let onNode = {
                    key: vls.id,
                    title: vls.name,
                    menu: vls.inMenu,
                    add: true,
                    edit: true,
                    children: twochildren
                };
                onechindren.push(onNode);
            }
            console.log(onechindren);
            this.allCollections = onechindren;
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
