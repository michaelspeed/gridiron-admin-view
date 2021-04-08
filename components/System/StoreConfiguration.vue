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
                            <label>{{ $t('store.storename') }}</label>
                            <a-input v-model="storename"></a-input>
                            <small class="form-text text-muted">{{ $t('store.storenameinfo') }}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('store.storenumber') }}</label>
                            <a-input v-model="storenumber"></a-input>
                            <small class="form-text text-muted">{{ $t('store.storenameinfo') }}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('store.storeemail') }}</label>
                            <a-input v-model="officialemail"></a-input>
                            <small class="form-text text-muted">{{ $t('store.storenameinfo') }}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('store.storezipcode') }}</label>
                            <a-input v-model="zipcode"></a-input>
                            <small class="form-text text-muted">{{ $t('store.storenameinfo') }}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('store.storeadd1') }}</label>
                            <a-input v-model="add1"></a-input>
                            <small class="form-text text-muted">{{ $t('store.storenameinfo') }}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('store.storeadd2') }}</label>
                            <a-input v-model="add2"></a-input>
                            <small class="form-text text-muted">{{ $t('store.storenameinfo') }}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('store.storegstin') }}</label>
                            <a-input v-model="gstin"></a-input>
                            <small class="form-text text-muted">{{ $t('store.storenameinfo') }}</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Serviceable</label>
                            <div>
                                <v-switch
                                    v-model="serviceable"
                                    label="Enable Serviceable"
                                ></v-switch>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-light-primary btn-sm" @click="onUpdateStore">Update</button>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="Logo Configuration">
                <div slot="title" style="margin-top: 10px">
                    <h6 class="text-primary">Logo Configuration</h6>
                </div>
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-sm-12">
                        <div class="d-flex flex-row justify-content-between">
                            <v-img
                                contain
                                v-if="logo"
                                :src="`${assetUL}${logo.preview}`"
                                style="height: 200px"
                            ></v-img>
                            <input type="file" style="display: none" ref="fileInput" accept="image/*"
                                   v-on:change="onImageChange($event)"/>
                            <button type="button" class="btn btn-light-primary btn-sm" @click="onClickUpload">Change
                                Logo
                            </button>
                        </div>
                    </div>
                    <!--                    <div class="col-md-3 col-lg-3 col-sm-12">
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
                                        </div>-->
                </div>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="Api Configuration">
                <div slot="title" style="margin-top: 10px">
                    <h6 class="text-primary">Api Configuration</h6>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Asset API</label>
                            <a-input v-model="assetApi"></a-input>
                            <small class="form-text text-muted">Once set you do not need to change</small>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Main API</label>
                            <a-input v-model="mainApi"></a-input>
                            <small class="form-text text-muted">Once set you do not need to change</small>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-light-primary btn-sm" @click="onUpdateStore">Update</button>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import {
    Country, CreateAssetDocument,
    GetAllCountriesDocument, SetLogoOnStoreDocument,
    Store,
    UpdateOneStoreDocument,
    UpdateOneStoreMutationVariables
} from '../../gql';
import {mapState} from 'vuex';
import {assetsURL} from "~/constants/GlobalURL";

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
export default class StoreConfiguration extends Vue {
    private store
    // collapse
    private activeNames = ['1', '2', '3']
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
    private assetApi = ''
    private mainApi = ''
    private serviceable = false

    private logo: any = undefined
    private assetUL: any = assetsURL;
    private GetAllCountries

    public $refs: Vue['$refs'] & {
        fileInput: HTMLInputElement
    };

    filterOption(input, option) {
        return (
            option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
    }

    onUpdateStore() {
        const loading: any = this.$Message.loading('Action in progress..');
        this.$apollo.mutate<{ updateOneStore: Store }, UpdateOneStoreMutationVariables>({
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
                id: this.store!.id,
                mainAPI: this.mainApi,
                assetAPI: this.assetApi,
                services: this.serviceable
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
            console.log(this.store)
            this.storename = this.store!.storeName
            this.storenumber = this.store!.phoneNumber
            this.officialemail = this.store!.officialemail
            this.zipcode = this.store!.zipcode
            this.add1 = this.store!.streetAddress1
            this.add2 = this.store!.streetAddress2
            this.gstin = this.store!.GSTIN
            this.singleStore = this.store!.singleStore
            this.rentalStore = this.store!.rentalStore
            this.logo = this.store.logo
            this.mainApi = this.store.mainAPI
            this.assetApi = this.store.assetAPI
            this.assetUL = this.store.assetAPI
            this.serviceable = this.store.services
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
        this.logo = this.store.logo
        this.mainApi = this.store.mainAPI
        this.assetApi = this.store.assetAPI
        this.assetUL = this.store.assetAPI
        this.serviceable = this.store.services
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
            this.$apollo.mutate({
                mutation: SetLogoOnStoreDocument,
                variables: {
                    id: this.store.id,
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
                })
        }).catch(error => {
            load()
            console.log(error);
        })
    }
}
</script>
