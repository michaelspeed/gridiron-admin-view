<template>
    <div style="margin-right: 10px; margin-left: 10px; margin-bottom: 10px">
        <a-collapse v-model="activeNames" style="margin-top: 10px">
            <a-collapse-panel key="1" header="General">
                <div slot="title" style="margin-top: 10px">
                    <h6 class="text-primary">General</h6>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storename')}}</label>
                            <a-input v-model="storename"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storenumber')}}</label>
                            <a-input v-model="storenumber"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storeemail')}}</label>
                            <a-input v-model="officialemail"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storezipcode')}}</label>
                            <a-input v-model="zipcode"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storeadd1')}}</label>
                            <a-input v-model="add1"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storeadd2')}}</label>
                            <a-input v-model="add2"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storegstin')}}</label>
                            <a-input v-model="gstin"></a-input>
                            <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                        </div>
                    </div>
                    <!--<div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{$t('store.storecountry')}}</label>
                            <div>
                                <a-select v-model="country" show-search :filter-option="filterOption" placeholder="Select Default Country" style="width: 100%">
                                    <a-select-option
                                            v-for="item in GetAllCountries"
                                            :key="item.id"
                                            :value="item.id">
                                        {{item.name}}
                                    </a-select-option>
                                </a-select>
                            </div>
                        </div>
                    </div>-->
                </div>
                <button type="button" class="btn btn-light-primary btn-sm" @click="onUpdateStore">Update</button>
            </a-collapse-panel>
            <!--<a-collapse-panel key="2" header="Store Configuration">
                <div slot="title" style="margin-top: 10px">
                    <h6 class="text-primary">Store Configurations</h6>
                </div>
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-sm-12">
                        <div class="d-flex justify-content-between">
                            <label>{{$t('store.singleStore')}}</label>
                            <a-checkbox v-model="singleStore"></a-checkbox>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-12">
                        <div class="d-flex justify-content-between">
                            <label>{{$t('store.rentalStore')}}</label>
                            <a-checkbox v-model="rentalStore"></a-checkbox>
                        </div>
                    </div>
                </div>
            </a-collapse-panel>-->
        </a-collapse>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {
        Country,
        GetAllCountriesDocument,
        Store,
        UpdateOneStoreDocument,
        UpdateOneStoreMutationVariables
    } from '../../gql';
    import {mapState} from 'vuex';

    @Component({
        computed: {
            ...mapState({
              store: (store: any) => {
                  if (store.admin.vendorStore) {
                      return store.admin.vendorStore
                  } else {
                      return store.admin.store
                  }
              },
            }),
        },
        apollo: {
            GetAllCountries: {
                query: GetAllCountriesDocument
            }
        }
    })
    export default class  StoreConfiguration extends Vue {
      private store
        // collapse
        private activeNames = ['1']
        // store
        private storename: string = ''
        private storenumber: string = ''
        private officialemail: string = ''
        private zipcode: string = ''
        private add1: string = ''
        private add2: string = ''
        private gstin: string = ''
        private country: string = ''
        private singleStore: boolean = true
        private rentalStore: boolean = true
        private storeId: string = ''

        private GetAllCountries

        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        }

        onUpdateStore() {
            const loading: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate<{updateOneStore: Store}, UpdateOneStoreMutationVariables>({
                mutation: UpdateOneStoreDocument,
                variables: {
                    storeName: this.storename,
                    phoneNumber: this.storenumber,
                    officialemail: this.officialemail,
                    zipcode: this.zipcode,
                    streetAddress1: this.add1,
                    streetAddress2: this.add2,
                    GSTIN: this.gstin,
                    singleStore: this.singleStore,
                    rentalStore: this.rentalStore,
                    id: this.store!.id
                }
            }).then(value => {
                loading()
                this.$Message.success('Store Updated')
            }).catch(error => {
                loading()
                this.$Message.error(error.message)
            })
        }

        mounted() {
          if (this.store !== undefined && this.store !== null) {
            this.storename = this.store!.storeName
            this.storenumber = this.store!.phoneNumber
            this.officialemail = this.store!.officialemail
            this.zipcode = this.store!.zipcode
            this.add1 = this.store!.streetAddress1
            this.add2 = this.store!.streetAddress2
            this.gstin = this.store!.GSTIN
            this.singleStore = this.store!.singleStore
            this.rentalStore = this.store!.rentalStore
          }
        }

        @Watch('store')
        onMountStore() {
            this.storename = this.store!.storeName
            this.storenumber = this.store!.phoneNumber
            this.officialemail = this.store!.officialemail
            this.zipcode = this.store!.zipcode
            this.add1 = this.store!.streetAddress1
            this.add2 = this.store!.streetAddress2
            this.gstin = this.store!.GSTIN
            this.country = this.store!.country!.id
            this.singleStore = this.store!.singleStore
            this.rentalStore = this.store!.rentalStore
        }
    }
</script>
