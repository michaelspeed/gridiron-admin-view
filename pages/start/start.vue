<template>
    <v-app>
        <div class="container">
            <v-card>
                <div class="row">
                    <div class="col-md-6">
                        <a href="javascript: void(0);" class="air__menuLeft__logo">
                            <img src="/components/core/img/air-logo.png" alt="Air UI" />
                            <div class="air__menuLeft__logo__name">{{$t('pages.appname')}}</div>
                            <div class="air__menuLeft__logo__descr">{{$t('pages.tag-line')}}</div>
                        </a>
                        <div class="ml-6">
                            <h5 class="mt-2 text-dark">Welcome to Air-Ecommerce</h5>
                        </div>
                    </div>
                </div>
                <hr/>
                <div style="padding: 20px">
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
                        <div class="col-md-6 col-lg-6 col-sm-12">
                            <div class="form-group">
                                <label>{{$t('store.storecountry')}}</label>
                                <div>
                                    <a-select v-model="country" filterable placeholder="Select Default Country" style="width: 100%">
                                        <a-select-option
                                                show-search
                                                v-for="item in allCountry"
                                                :key="item.id"
                                                :value="item.id">
                                            {{item.name}}
                                        </a-select-option>
                                    </a-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <v-card-actions>
                    <v-btn
                            @click="onCreateStore"
                            color="primary"
                            title
                    >
                        Create Store
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {Country, CreateDefaultStoreDocument, GetAllCountriesDocument, Store} from '../../gql';

    @Component({
        layout: 'start',
        apollo: {
            GetAllCountries: {
                query: GetAllCountriesDocument
            }
        }
    })
    export default class  DefaultStore extends Vue {
        private GetAllCountries

        private storename: string = ''
        private storenumber: string = ''
        private officialemail: string = ''
        private zipcode: string = ''
        private add1: string = ''
        private add2: string = ''
        private gstin: string = ''
        private phonenumber: string = ''
        private country: string = ''
        private store: Store | null
        private allCountry: Country[] = []

        @Watch('GetAllCountries')
        onLoadCountry() {
            this.allCountry = this.GetAllCountries
        }

        onCreateStore() {
            this.$apollo.mutate({
                mutation: CreateDefaultStoreDocument,
                variables: {
                    countryId: this.country,
                    zipcode: this.zipcode,
                    streetAddress2: this.add2,
                    streetAddress1: this.add1,
                    GSTIN: this.gstin,
                    officialemail: this.officialemail,
                    phoneNumber: this.phonenumber,
                    storeName: this.storename
                }
            }).then(value => {
                this.$router.push('/app/dashboard')
            }).catch(error => {
                this.$message.error(error.message)
            })
        }

    }
</script>
