<template>
    <div>
        <button type="button" class="btn btn-light-primary btn-xs" style="line-height: 0.5px; height: 30px" @click="updateRate = true">Edit / View</button>
        <button type="button" class="btn btn-light-danger btn-xs" style="line-height: 0.5px; height: 30px" :disabled="!admin">Delete</button>
        <v-bottom-sheet
            v-model="updateRate"
            inset
        >
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="updateRate = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Update Tax Rate</span>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Enter Name</label>
                        <a-input v-model="name" :disabled="!admin" size="large"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Enter Rate</label>
                            <a-input-number :disabled="!admin" size="large" v-model="rate"></a-input-number>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Enabled</label>
                            <a-switch size="large"
                                      v-model="enabled"
                                      :disabled="!admin"
                                      active-color="#13ce66"
                                      inactive-color="#ff4949">
                            </a-switch>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Tax Rule</label>
                            <a-select size="large"
                                      style="width: 300px"
                                      :disabled="!admin"
                                      v-model="rule"
                                      :filter-option="filterOption"
                                      placeholder="Search Your Tax Rule">
                                <a-select-option
                                    v-for="item in GetAllTaxCategory"
                                    :key="item.id"
                                    :value="item.id">
                                    {{item.name}}
                                </a-select-option>
                            </a-select>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Zone</label>
                            <a-select size="large"
                                      style="width: 300px"
                                      :disabled="!admin"
                                      v-model="zone"
                                      :filter-option="filterOption"
                                      placeholder="Search Your Zone">
                                <a-select-option
                                    v-for="item in zones"
                                    :key="item.id"
                                    :value="item.id">
                                    {{item.name}}
                                </a-select-option>
                            </a-select>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-light-primary" :disabled="!admin">Update Rate</button>
                        <button type="button" class="btn btn-light-danger" @click="updateRate = false">Cancel</button>
                    </div>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapState} from "vuex";
    import {GetAllTaxCategoryDocument, GetAllZonesDocument} from "~/gql";

    @Component({
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
            }),
        },
        apollo: {
            GetAllTaxCategory: {
                query: GetAllTaxCategoryDocument
            },
            zones: {
                query: GetAllZonesDocument
            },
        }
    })
    export default class TaxRatesActions extends Vue {
        private admin
        private vendor

        private params

        private updateRate = false
        private GetAllTaxRates
        private GetAllTaxCategory
        private zones

        private name: string = ''
        private rate: number = 0
        private enabled: boolean = true
        private allRules: any[] = []
        private allZones: any[] = []
        private zone: string = ''
        private rule: string = ''

        mounted() {
            console.log(this.params)
            this.name = this.params.data.name
            this.rate = this.params.data.value
            this.enabled = this.params.data.enabled
            this.rule = this.params.data.category.id
            this.zone = this.params.data.zone.id
        }


        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        }

    }
</script>
