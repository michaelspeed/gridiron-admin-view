<template>
  <div class="d-flex flex-column-fluid">
    <div class=" container-fluid ">
      <div class="card" v-if="productVariant !== undefined">
        <div class="card-header border-0 d-flex justify-content-between align-items-center">
          <h3 class="card-title align-items-start flex-column">
            <a href="javascript:;" @click="$router.back()">
              <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
            </a>
            <span class="card-label font-weight-bolder text-dark ml-6">Specs for: {{productVariant.name}}</span>
          </h3>
          <div class="card-toolbar">
            <a href="#" class="btn btn-light-primary font-weight-bolder font-size-sm" @click="onSave">Save</a>
            <a href="#" class="btn btn-light-primary font-weight-bolder font-size-sm" @click="onClickAddSpecsHeader">Add Specs Group</a>
          </div>
        </div>
        <div class="card-body">
          <div>
            <div>
              <div style="overflow-y: auto">
                <div v-for="(group, index) in master" :key="index">
                  <v-text-field
                    label="Group"
                    filled
                    v-model="group.header"
                  ></v-text-field>
                  <div style="margin-bottom: 5px">
                    <a href="#" class="btn btn-light-primary font-weight-bolder font-size-sm" @click="onClickAddSpecs(index)">Add Specs</a>
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
