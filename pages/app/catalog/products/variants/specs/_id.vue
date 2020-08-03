<template>
    <div style="padding: 20px" v-if="productVariant !== undefined">
        <div style="display: flex; justify-content: space-between; align-items: center">
            <div class="d-flex align-items-center">
                <v-btn fab @click="$router.back()"><v-icon>arrow_back</v-icon></v-btn>
                <h1 style="margin-left: 10px">Specs for: {{productVariant.name}}</h1>
            </div>
            <div>
                <v-btn outlined color="primary" small @click="onSave">Save</v-btn>
                <v-btn outlined small color="primary" @click="onClickAddSpecsHeader">Add Specs Group</v-btn>
            </div>
        </div>
        <div style="padding-left: 20px; padding-right: 20px; margin-top: 20px">
            <div style="overflow-y: auto">
                <div v-for="(group, index) in master" :key="index">
                    <v-text-field
                            label="Group"
                            filled
                            v-model="group.header"
                    ></v-text-field>
                    <div style="margin-bottom: 5px">
                        <v-btn outlined small color="primary" @click="onClickAddSpecs(index)">Add Specs</v-btn>
                    </div>
                    <div>
                        <div v-for="(spec, specindex) in group.child" :key="specindex">
                            <div class="d-flex justify-content-between align-items-center gutter">
                                <v-text-field
                                        label="Key"
                                        filled
                                        dense
                                        style="margin-right: 10px"
                                        v-model="spec.key"
                                ></v-text-field>
                                <v-text-field
                                        label="Value"
                                        filled
                                        dense
                                        style="margin-left: 10px"
                                        v-model="spec.value"
                                ></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {
        CreateProductVariantSpecificationDocument,
        GetSingleProductVariantDocument,
        UpdateProductVariantSpecificationDocument
    } from '../../../../../../gql';

    @Component({
        layout: 'console',
        apollo: {
            productVariant: {
                query: GetSingleProductVariantDocument,
                variables(){
                    return {
                        id: this.$route.params.id
                    }
                }
            }
        }
    })
    export default class ProductSpecification extends Vue {
        private specsId = ''
        private master: any = []
        private productVariant

        @Watch('productVariant')
        onProdVariant() {
            if (this.productVariant.specs !== null) {
                this.specsId = this.productVariant.specs.id
                this.master = this.productVariant.specs.specs
            }
        }

        onClickAddSpecsHeader() {
            this.master.push({
                header: '',
                child: []
            })
            console.log(this.master)
        }

        onClickAddSpecs(index) {
            this.master[index].child.push({
                key: '',
                value: ''
            })
        }

        onSave() {
            if (this.specsId !== '') {
                this.$apollo.mutate({
                    mutation: UpdateProductVariantSpecificationDocument,
                    variables: {
                        id: this.specsId,
                        specs: this.master
                    }
                }).then(value => {
                    this.$router.back()
                })
            } else {
                this.$apollo.mutate({
                    mutation: CreateProductVariantSpecificationDocument,
                    variables: {
                        variantId: this.$route.params.id,
                        specs: this.master
                    }
                }).then(value => {
                    this.$router.back()
                })
            }
        }
    }
</script>
