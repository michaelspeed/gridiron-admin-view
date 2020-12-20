<template>
    <v-card elevation="4">
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
                <input type="file" style="display: none" ref="fileInput" accept="image/*"
                       v-on:change="onImageChange($event)"/>
                <button type="button" class="btn btn-light-primary btn-sm mb-3" @click="onClickUpload">
                    Select Asset
                </button>
                <span v-if="mainIcon !== ''">Asset has been loaded</span>
            </div>
            <div class="mt-3">
                <a href="javascript:;" class="btn btn-light-primary btn-sm font-weight-bold mr-2" @click="onCreateRoot">Create Menu</a>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateAssetDocument,
        CreateOneMenuDocument,
        SearchCollectionDocument,
        SearchFacetValueDocument,
        SearchProductVariantsDocument, SetAssetOnCollectionDocument, SetAssetOnMenuDocument
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

        private mainIcon = ''

        private loading = false

        public $refs: Vue['$refs'] & {
            fileInput: HTMLInputElement
        };

        @Watch('colselect')
        onColSelect(){
            if (this.colselect !== null) {
                this.title = this.colselect.name
                this.targetId = this.colselect.id
            }
        }

        @Watch('variantSel')
        onValSelect(){
            if (this.variantSel !== null) {
                this.title = this.variantSel.name
                this.targetId = this.variantSel.id
            }
        }

        @Watch('facetSel')
        onFacetSelect(){
            this.title = this.facetSel.code
            this.targetId = this.facetSel.id
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
                mutation: CreateOneMenuDocument,
                variables: {
                    title: this.title,
                    targetId: this.targetId,
                    target: this.menuOptions
                }
            }).then(value => {
                load()
                if (this.mainIcon !== '') {
                    this.$apollo.mutate({
                        mutation: SetAssetOnMenuDocument,
                        variables: {
                            rid: this.mainIcon,
                            id: value.data.createOneMenu.id
                        }
                    })
                    .then(value => {
                        this.mainIcon = ''
                    })
                    .catch(error => {
                        this.$message.error(error.message)
                        console.log(error)
                    })
                }
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
                }
            }).then(value => {
                this.mainIcon = value.data.createAsset.id
                /*this.$apollo.mutate({
                    mutation: SetAssetOnCollectionDocument,
                    variables: {
                        id: this.id,
                        rid: value.data.createAsset.id
                    }
                })
                    .then(value1 => {
                        this.$notification.success({
                            description: 'Logo Uploaded',
                            message: 'Asset Creation Successful'
                        })
                        load()
                        this.$store.dispatch('store/getDefaultStore')
                    })
                    .catch(error => {
                        load()
                        this.$message.error(error.message)
                    })*/
            }).catch(error => {
                load()
                console.log(error);
            })
        }

    }
</script>
