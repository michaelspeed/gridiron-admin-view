<template>
    <v-card>
        <v-card-title>
            <h5>Add Child Menu Type </h5>
        </v-card-title>
        <hr/>
        <v-card-text>
            <v-select
                    :items="menuType"
                    filled
                    item-value="code"
                    item-text="name"
                    label="Menu Types"
                    dense
                    v-model="menuOptions"
            ></v-select>
            <v-card v-if="menuOptions === 'COLLECTION' || menuOptions === 'VARIANT' || menuOptions === 'FACET'">
                <v-toolbar
                        color="#161537"
                        dark
                        flat
                        prominent
                >
                    <v-text-field
                            class="mx-4"
                            flat
                            hide-details
                            label="Search"
                            v-model="search"
                            prepend-inner-icon="search"
                            solo-inverted
                    ></v-text-field>
                    <template v-slot:extension>
                        <h5 style="color: white">{{menuOptions}}</h5>
                    </template>
                </v-toolbar>
                <v-card v-if="menuOptions === 'COLLECTION'">
                    <DataTable :value="collections" :selection.sync="colselect" selectionMode="single" dataKey="id">
                        <Column field="id" header="Id"></Column>
                        <Column field="name" header="Name"></Column>
                    </DataTable>
                </v-card>
                <v-card v-if="menuOptions === 'VARIANT'">
                    <DataTable :value="productVariants" :selection.sync="variantSel" selectionMode="single" dataKey="id">
                        <Column field="id" header="Id"></Column>
                        <Column field="name" header="Name"></Column>
                    </DataTable>
                </v-card>
                <v-card v-if="menuOptions === 'FACET'">
                    <DataTable :value="facetValues" :selection.sync="facetSel" selectionMode="single" dataKey="id">
                        <Column field="id" header="Id"></Column>
                        <Column field="code" header="Code"></Column>
                        <Column field="facet.name" header="Name"></Column>
                    </DataTable>
                </v-card>
            </v-card>
            <div class="mt-3">
                <v-text-field
                        label="Title"
                        outlined
                        v-model="title"
                ></v-text-field>
            </div>
            <div class="mt-3">
                <span>Icons names can be found here <a href="https://materialdesignicons.com/" target="_blank">Material Icons</a></span>
                <v-text-field
                    label="Meta Icon"
                    outlined
                    v-model="mainIcon"
                ></v-text-field>
            </div>
            <div class="mt-3">
                <a href="javascript:;" class="btn btn-light-primary btn-sm font-weight-bold mr-2" @click="onCreateRoot">Create Menu</a>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateMenuChildNodeDocument,
        CreateOneMenuDocument,
        SearchCollectionDocument,
        SearchFacetValueDocument,
        SearchProductVariantsDocument
    } from '../../gql';

    @Component({
        apollo: {
            productVariants: {
                query: SearchProductVariantsDocument,
                variables() {
                    return {
                        search: `%${this.search}%`
                    }
                }
            },
            collections: {
                query: SearchCollectionDocument,
                variables(){
                    return {
                        search: `%${this.search}%`
                    }
                }
            },
            facetValues: {
                query: SearchFacetValueDocument,
                variables() {
                    return {
                        search: `%${this.search}%`
                    }
                }
            }
        }
    })
    export default class ChildMenu extends Vue {
        @Prop() menu

        private search = ''

        private productVariants
        private collections
        private facetValues

        private mainIcon = ''

        private tabs = 0
        private menuOptions = ''
        private menuType = [
            {
                name: 'COLLECTION',
                code: 'COLLECTION'
            },
            {
                name: 'VARIANT',
                code: 'VARIANT'
            },
            {
                name: 'FACET',
                code: 'FACET'
            },
            {
                name: 'PROMO',
                code: 'PROMO'
            },
            {
                name: 'HEADER',
                code: 'HEADER'
            }
        ]

        private colselect: any = null
        private variantSel: any = null
        private facetSel: any = null
        private title = ''
        private targetId = ''

        private loading = false

        @Watch('colselect')
        onColSelect(){
            if (this.colselect !== null) {
                this.title = this.colselect.name
                this.targetId = this.colselect.id
            }
        }

        @Watch('variantSel')
        onValSelect(){
            this.title = this.variantSel.name
            this.targetId = this.variantSel.id
        }

        @Watch('facetSel')
        onFacetSelect(){
            if (this.variantSel !== null) {
                this.title = this.facetSel.code
                this.targetId = this.facetSel.id
            }
        }

        onCreateRoot(){
            if (this.title === '') {
                this.$Message.error('Please enter Title')
                return
            }
            if (this.targetId === '') {
                this.$Message.error('Please select target')
                return
            }
            this.loading = true
            const load: any = this.$Message.loading('Action in progress ...')
            this.$apollo.mutate({
                mutation: CreateMenuChildNodeDocument,
                variables: {
                    title: this.title,
                    targetId: this.targetId,
                    target: this.menuOptions,
                    nodeId: Object.keys(this.menu)[0]
                }
            }).then(value => {
                load()
                this.$Message.success('Menu Created ...')
                this.colselect = null
                this.variantSel = null
                this.facetSel = null
                this.title = ''
                this.targetId = ''
                this.menuOptions = ''
                this.loading = false
            }).catch(error => {
                load()
                this.$Message.error(error.message)
                this.loading = false
            })
        }
    }
</script>
