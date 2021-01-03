<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Channels</h5>
                <button type="button" class="btn btn-primary" @click="createChannel = true">Add Channel</button>
            </div>
        </div>
        <v-card>
            <v-card-title>
                <div class="d-flex align-items-center">
                    <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                            style="width: 500px"
                            v-model="search"
                    />
                    <v-btn class="mx-2" fab dark small color="primary" @click="onClickSearch">
                        <v-icon dark>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small color="#F44336" @click="onClearSearch" v-if="search !== ''">
                        <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                </div>
            </v-card-title>
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="allChannels"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    :suppressPaginationPanel="true" :enableRtl="false">
            </ag-grid-vue>
            <v-card-actions>
                <div class="d-flex justify-content-end" style="width: 100%">
                    <nav aria-label="Page navigation">
                        <ul class="pagination pagination-circle justify-content-end">
                            <li class="page-item" v-if="hasPrev"><a class="page-link" href="#" @click="onClickPrevious">Previous</a></li>
                            <li class="page-item" v-if="hasNext"><a class="page-link" href="#" @click="onClickNext">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </v-card-actions>
        </v-card>
        <el-drawer
                title="creat"
                :visible.sync="createChannel"
                :with-header="false"
        >
            <div class="card">
                <div class="card-header" slot="title">
                    <h5 class="card-title text-primary" id="exampleModalCenterTitle">Create Channel</h5>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Enter Channel Code</label>
                        <el-input v-model="name"></el-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Enter Channel Token</label>
                        <el-input v-model="channelToken"></el-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Enter Default Currency</label>
                        <el-select v-model="currency" filterable placeholder="Select Currency" style="width: 100%">
                            <el-option
                                    v-for="item in allCurrency"
                                    :key="item.value"
                                    :label="item.name"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Enter Default Language</label>
                        <el-select v-model="language" filterable placeholder="Select Language Code" style="width: 100%">
                            <el-option
                                    v-for="item in allLanguage"
                                    :key="item.value"
                                    :label="item.name"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <label>Price Included in Tax</label>
                            <el-switch
                                    v-model="priceIncluded"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                            </el-switch>
                        </div>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary" @click="onCreateChannel">Create Channel</button>
                        <button type="button" class="btn btn-danger" @click="createChannel = false">Cancel</button>
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import uniqid from 'uniqid'
    import {CurrencyCode} from '../../../../constants/CurrencyCode';
    import {
        Channel,
        CreateOneChannelDocument,
        CreateOneChannelMutationVariables,
        GetAllChannelsDocument
    } from '../../../../gql';
    import {LanguageCode} from '../../../../constants/LanguageCode';
    import ChannelAction from '../../../../components/Channel/ChannelAction.vue';
    import ApolloClient from 'apollo-client';
    import {values} from 'ag-grid-community/dist/lib/utils/generic';

    @Component({
        layout: 'console',
        components: {
            ChannelAction
        },
        apollo: {
            channels: {
                query: GetAllChannelsDocument,
                variables() {
                    return {
                        first: this.first,
                        last: this.last === 0 ? undefined : this.last,
                        after: this.after === null ? undefined : this.after,
                        before: this.before === null ? undefined : this.before,
                        search: this.search === '' ? undefined : `${this.search}%`
                    }
                },
                pollInterval: 3000,
                error (error) {
                    console.error('We\'ve got an error!', error)
                },
            },
        }
    })
    export default class Channels extends Vue {
        private createChannel = false;
        private name = ""
        private channelToken = ""
        private allCurrency = CurrencyCode()
        private allLanguage = LanguageCode()
        private currency: any = ""
        private language: any = ""
        private priceIncluded: boolean = true
        private allChannels: any[] = []
        private apolloClient: any = null

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'Name',
                filter: false,
                field: 'node.code'
            },
            {
                headerName: 'Default Language Code',
                filter: false,
                field: 'node.defaultLanguageCode'
            },
            {
                headerName: 'Currency Code',
                filter: false,
                field: 'node.currencyCode'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'ChannelAction'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filter: false
        };

        //paging
        private last: number = 0
        private first: number = 10
        private after: any = null
        private before: any = null
        private search: string = ''
        private hasPrev: boolean = false;
        private hasNext: boolean = false;
        private page: number = 1

        private channelQuery: any = null
        private searchInit = false

        private channels

        @Watch('page')
        onChangePage(newValue, previousValue) {
            console.log(newValue, previousValue)
            if (newValue > previousValue) {
                this.after = this.channels!.pageInfo!.endCursor
                this.before = null
            } else {
                if (newValue === 1) {
                    this.first = 10 - 1
                }
                this.after = null
                this.before = this.channels!.edges[this.channels!.edges!.length - 1]
            }
        }

        @Watch('channels')
        onChangeChannels() {
            console.log(this.channels)
            this.allChannels = this.channels.edges
            this.hasPrev = this.channels!.pageInfo.hasPreviousPage
            this.hasNext = this.channels!.pageInfo.hasNextPage
        }

        onClickNext() {
            this.page = this.page + 1
        }

        onClickPrevious() {
            this.page = this.page - 1
        }

        onClickSearch() {
            this.searchInit = true

        }

        mounted() {
            this.channelToken = uniqid('channel-')
            console.log(this.allLanguage)
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        onClearSearch() {
            this.search = ''
        }

        onCreateChannel() {
            this.$apollo.mutate<{createOneChannel: Channel}, CreateOneChannelMutationVariables>({
                mutation: CreateOneChannelDocument,
                variables: {
                    code: this.name,
                    token: this.channelToken,
                    currencyCode: this.currency,
                    pricesIncludeTax: this.priceIncluded,
                    defaultLanguageCode: this.language
                }
            }).then(value => {
                this.$notify({
                    type: 'success',
                    message: 'Channel has been created',
                    title: 'Channel Created'
                })
                this.createChannel = false
                this.name = ""
                this.channelToken = uniqid('channel-')
                this.currency = ""
                this.priceIncluded = true
            }).catch(error  => {
                this.$notify({
                    type: 'error',
                    message: error.message,
                    title: 'Channel Creation Error'
                })
            })
        }
    }
</script>
