<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Create New Orders</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->

                            <!--end::Search Form-->
                        </div>
                        <!--end::Details-->

                        <!--begin::Toolbar-->
                        <div class="d-flex align-items-center">
                            <!--begin::Button-->
                            <a href="#" class="">

                            </a>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center">
                            <a-input-search placeholder="search user" style="width: 500px" enter-button @search="onSearch" />
                        </div>
                        <div>
                            <v-card style="margin-left: 20px; margin-right: 20px; margin-top: 20px; margin-bottom: 20px" v-if="searchUser.length > 0" outlined>
                                <v-list
                                    flat
                                    two-line
                                >
                                    <v-list-item-group
                                        v-model="selectedUser"
                                        active-class=""
                                    >
                                        <v-list-item v-for="user of searchUser" :key="user.id">
                                            <template v-slot:default="{ active }">
                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active"></v-checkbox>
                                                </v-list-item-action>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{user.firstName}} {{user.lastName}}</v-list-item-title>
                                                    <v-list-item-subtitle>{{user.phoneNumber}}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" v-if="searchUser.length === 0" style="margin-top: 20px; margin-bottom: 20px">
                            <h3>No users found! or not selected</h3>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <a-input-search placeholder="search Products" style="width: 500px" enter-button @search="onSearchProdVars" />
                        </div>
                        <v-card style="width: 100%; margin-left: 20px; margin-right: 20px; margin-top: 20px; margin-bottom: 20px" v-if="prodsSearch.length > 0" outlined>
                            <v-list
                                flat
                                two-line
                            >
                                <v-list-item-group
                                    v-model="prodSelect"
                                    active-class=""
                                >
                                    <v-list-item v-for="prod of prodsSearch" :key="prod.id">
                                        <template v-slot:default="{ active }">
                                            <v-list-item-action>
                                                <v-checkbox :input-value="active"></v-checkbox>
                                            </v-list-item-action>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <h4>{{prod.name}}</h4>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card>
                        <div v-if="prodSelect !== undefined && prodSelect !== ''">
                            <div class="row">
                                <div class="col-md-6">
                                    <div>
                                        <div>
                                            <span class="font-weight-bold text-dark-25">Selected Product</span>
                                        </div>
                                        <div>
                                            <h5>{{prodName}}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div>
                                        <span class="font-weight-bold text-dark-25">Select Price</span>
                                    </div>
                                    <a-select default-value="lucy" style="width: 100%" v-model="priceId" v-if="allPriceTags && allPriceTags.length > 0">
                                        <a-select-option :value="price.id" v-for="price of allPriceTags" :key="price.id">
                                            ₹ {{price.price}} -- {{price.store && price.store.storeName}}
                                        </a-select-option>
                                    </a-select>
                                </div>
                                <div class="col-md-3">
                                    <div>
                                        <span class="font-weight-bold text-dark-25">Select Quantity</span>
                                    </div>
                                    <div>
                                        <a-input-number v-model="quantity" style="width: 100%"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="javascript:;" class="btn btn-light-primary font-weight-bold" @click="onAddItem">
                                        Add Product
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column-fluid mt-20" v-if="masterUser && masterUser !== ''">
                    <!--begin::Container-->
                    <div class=" container-fluid ">
                        <!-- begin::Card-->
                        <div class="card card-custom overflow-hidden">
                            <div class="card-body p-0">
                                <!-- begin: Invoice-->
                                <!-- begin: Invoice header-->
                                <div class="row justify-content-center bgi-size-cover bgi-no-repeat py-8 px-8 py-md-27 px-md-0" style="background-image: url(/media/bg/bg-6.jpg);">
                                    <div class="col-md-9">
                                        <div class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                                            <h1 class="display-4 text-white font-weight-boldest mb-10">Order</h1>
                                            <div class="d-flex flex-column align-items-md-end px-0">
                                                <!--begin::Logo-->
                                                <a href="#" class="mb-5">
                                                    <h4 style="color: white">{{masterUser.firstName}} {{masterUser.lastName}}</h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="border-bottom w-100 opacity-20"></div>
                                        <div class="d-flex justify-content-between text-white pt-6">
                                            <div class="d-flex flex-column flex-root">
                                                <span class="font-weight-bolde mb-2r">DATA</span>
                                                <span class="opacity-70">{{getDate()}}</span>
                                            </div>
                                            <div class="d-flex flex-column flex-root">
                                                <span class="font-weight-bolder mb-2">INVOICE NO.</span>
                                                <span class="opacity-70">AutoGenerated</span>
                                            </div>
                                            <div class="d-flex flex-column flex-root">
                                                <span class="font-weight-bolder mb-2">INVOICE TO.</span>
                                                <span class="opacity-70"><h4 style="color: white" class="font-weight-bolder">{{masterUser.firstName}} {{masterUser.lastName}}</h4><br/>
                                                    <a-textarea
                                                        placeholder="Address"
                                                        :auto-size="{ minRows: 2, maxRows: 6 }"
                                                        v-model="address"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end: Invoice header-->

                                <!-- begin: Invoice body-->
                                <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                                    <div class="col-md-9">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th class="pl-0 font-weight-bold text-muted  text-uppercase">Description</th>
                                                    <th class="text-right font-weight-bold text-muted text-uppercase">Quantity</th>
                                                    <th class="text-right font-weight-bold text-muted text-uppercase">Rate</th>
                                                    <th class="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="font-weight-boldest font-size-lg" v-for="allvars of orderList" :key="allvars.prod.id">
                                                    <td class="pl-0 pt-7">{{allvars.prod.name}}</td>
                                                    <td class="text-right pt-7">{{allvars.quantity}}</td>
                                                    <td class="text-right pt-7">₹ {{allvars.price.price}}</td>
                                                    <td class="text-danger pr-0 pt-7 text-right">₹{{allvars.quantity * allvars.price.price}} </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <!-- end: Invoice body-->

                                <!-- begin: Invoice footer-->
                                <div class="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0">
                                    <div class="col-md-9">
                                        <div class="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                                            <div class="d-flex flex-column mb-10 mb-md-0">

                                            </div>
                                            <div class="d-flex flex-column text-md-right">
                                                <span class="font-size-lg font-weight-bolder mb-1">TOTAL AMOUNT</span>
                                                <span class="font-size-h2 font-weight-boldest text-danger mb-1">₹{{getAllTotal()}}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- end: Invoice footer-->

                                <!-- begin: Invoice action-->
                                <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                                    <div class="col-md-9">
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-light-primary font-weight-bold" @click="onCreateNewOrder">Create Order</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- end: Invoice action-->

                                <!-- end: Invoice-->
                            </div>
                        </div>
                        <!-- end::Card-->
                    </div>
                    <!--end::Container-->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {
        CreateOrderAdminDocument,
        CreateOrderAdminMutationVariables, OrderLineDto,
        QueryUSerByEmailOrPhoneDocument,
        SearchProductVariantsDocument
    } from "~/gql";
    import {assetsURL} from "~/constants/GlobalURL";
    import moment from "moment";
    import {OrderCreateInterFace} from "~/utils/orderCreateInterFace";

    @Component({
        layout: 'console'
    })
    export default class CreateOrder extends Vue {
        private search = ''
        private searchUser: any[] = []
        private selectedUser = ''
        private prodsSearch: any[] = []
        private prodSelect: any = ''
        private assetURL = this.$store.state.store.store ? this.$store.state.store.store.assetAPI : assetsURL
        private priceId = ''
        private allPriceTags: any[] = []
        private prodName = ''
        private masterUser = ''
        private quantity = 1
        private orderList: OrderCreateInterFace[] = []
        private address = ''

        getDate() {
            return moment().format('DD MMM YYYY')
        }

        @Watch('selectedUser')
        onSetUser(value){
            this.masterUser = this.searchUser[value]
        }

        @Watch('prodSelect')
        onProdSelect(value) {
            if (this.prodSelect !== undefined) {
                this.allPriceTags = this.prodsSearch[value].prices
                this.prodName = this.prodsSearch[value].name
            } else {
                this.allPriceTags = []
                this.prodName = ''
            }
        }

        getAllTotal() {
            let totalAmount = 0
            for (const prod of this.orderList) {
                totalAmount = totalAmount + (prod.price.price * prod.quantity)
            }
            return totalAmount
        }

        onAddItem() {
            const price = this.allPriceTags.find(item => item.id === this.priceId)
            const proInf: OrderCreateInterFace = {
                prod: this.prodsSearch[this.prodSelect],
                price: price,
                quantity: this.quantity
            }
            this.orderList.push(proInf)
            this.prodsSearch = []
            this.prodSelect = undefined
            this.priceId = ''
            this.prodName = ''
            this.quantity = 0
        }

        onSearch(value) {
            this.$apollo.query({
                query: QueryUSerByEmailOrPhoneDocument,
                variables: {
                    type: `%${value}%`
                }
            }).then(value => {
                this.searchUser = value.data.users
            })
        }

        onSearchProdVars(value) {
            this.$apollo.query({
                query: SearchProductVariantsDocument,
                variables: {
                    search: `%${value}%`
                }
            }).then(value1 => {
                this.prodsSearch = value1.data.productVariants
            })
        }

        onCreateNewOrder() {
            this.$Message.loading('Action in progress ....')
            const orderLineDTO: OrderLineDto[] = this.orderList.map(item => ({
                priceId: item.price.id,
                quantity: item.quantity
            }))
            this.$apollo.mutate({
                mutation: CreateOrderAdminDocument,
                variables: {
                    userId: this.searchUser[this.selectedUser].id,
                    address: this.address,
                    orderLineDto: orderLineDTO
                }
            }).then(value => {
                this.$Message.success('Order Created')
                this.$router.back()
                this.search = ''
                this.searchUser = []
                this.selectedUser = ''
                this.prodsSearch = []
                this.prodSelect = ''
                this.priceId = ''
                this.allPriceTags = []
                this.prodName = ''
                this.masterUser = ''
                this.address = ''
            }).catch(error => {
                this.$Message.error(error.message)
            })
        }

    }
</script>
