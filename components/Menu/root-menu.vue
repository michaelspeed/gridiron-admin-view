<template>
    <v-card>
        <v-card-title>
            <h5>Add Root Menu Type </h5>
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
                    <DataTable :value="collections.edges" :selection.sync="colselect" selectionMode="single" dataKey="node.id">
                        <Column field="node.id" header="Id"></Column>
                        <Column field="node.name" header="Name"></Column>
                    </DataTable>
                </v-card>
                <v-card v-if="menuOptions === 'VARIANT'">
                    <DataTable :value="productVariants.edges" :selection.sync="variantSel" selectionMode="single" dataKey="node.id">
                        <Column field="node.id" header="Id"></Column>
                        <Column field="node.name" header="Name"></Column>
                    </DataTable>
                </v-card>
                <v-card v-if="menuOptions === 'FACET'">
                    <DataTable :value="facetValues.edges" :selection.sync="facetSel" selectionMode="single" dataKey="node.id">
                        <Column field="node.id" header="Id"></Column>
                        <Column field="node.code" header="Code"></Column>
                        <Column field="node.facet.name" header="Name"></Column>
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
                <a-button type="primary" :loading="loading" @click="onCreateRoot">Create Menu</a-button>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
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
    export default class RootMenu extends Vue{
        private search = ''

        private productVariants
        private collections
        private facetValues

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
            this.title = this.colselect.node.name
            this.targetId = this.colselect.node.id
        }

        @Watch('variantSel')
        onValSelect(){
            this.title = this.variantSel.node.name
            this.targetId = this.variantSel.node.id
        }

        @Watch('facetSel')
        onFacetSelect(){
            this.title = this.facetSel.node.code
            this.targetId = this.facetSel.node.id
        }

        onCreateRoot(){
            this.loading = true
            const load: any = this.$Message.loading('Action in progress ...')
            this.$apollo.mutate({
                mutation: CreateOneMenuDocument,
                variables: {
                    title: this.title,
                    targetId: this.targetId,
                    target: this.menuOptions
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
