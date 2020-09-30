<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="d-flex flex-column-fluid mt-20">
                    <!--begin::Container-->
                    <div class=" container-fluid ">
                        <!-- begin::Card-->
                        <div class="card card-custom overflow-hidden">
                            <div class="d-flex justify-content-center align-items-center m-20 w-100"
                                 v-if="$apollo.queries.order.loading">
                                <div class="spinner spinner-primary spinner-lg mr-15"></div>
                            </div>
                            <div class="card-body p-0" v-if="!$apollo.queries.order.loading">
                                <!-- begin: Invoice-->
                                <!-- begin: Invoice header-->
                                <div class="row justify-content-center bgi-size-cover bgi-no-repeat py-8 px-8 py-md-27 px-md-0" style="background-image: url(/media/bg/bg-6.jpg);">
                                    <div class="col-md-9">
                                        <div class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                                            <h1 class="display-4 text-white font-weight-boldest mb-10">Order</h1>
                                            <div class="d-flex flex-column align-items-md-end px-0">
                                                <!--begin::Logo-->
                                                <a href="#" class="mb-5">
                                                    <h4 style="color: white">{{order.user.firstName}} {{order.user.lastName}}</h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="border-bottom w-100 opacity-20"></div>
                                        <div class="d-flex justify-content-between text-white pt-6">
                                            <div class="d-flex flex-column flex-root">
                                                <span class="font-weight-bolde mb-2r">DATE</span>
                                                <span class="opacity-70">{{getDate()}}</span>
                                            </div>
                                            <div class="d-flex flex-column flex-root">
                                                <span class="font-weight-bolder mb-2">ORDER NO.</span>
                                                <span class="opacity-70">{{order.id}}</span>
                                            </div>
                                            <div class="d-flex flex-column flex-root">
                                                <span class="font-weight-bolder mb-2">ORDER TO.</span>
                                                <span class="opacity-70">
                                                    <h4 style="color: white" class="font-weight-bolder">{{order.user.firstName}} {{order.user.lastName}}</h4>
                                                    <br/>
                                                    <p>{{order.address}}</p>
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
                                                    <th class="pl-0 font-weight-bold text-muted  text-uppercase">Store</th>
                                                    <th class="pl-0 font-weight-bold text-muted  text-uppercase">Progress</th>
                                                    <th class="text-right font-weight-bold text-muted text-uppercase">Quantity</th>
                                                    <th class="text-right font-weight-bold text-muted text-uppercase">Rate</th>
                                                    <th class="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="font-weight-boldest font-size-lg" v-for="allvars of order.lines" :key="allvars.item.productVariant.id">
                                                    <td class="pl-0 pt-7">{{allvars.item.productVariant.name}}</td>
                                                    <a-popover title="Store Info">
                                                        <template slot="content">
                                                            <p>Phone: {{allvars.priceField.store.phoneNumber}}</p>
                                                            <p>Email: {{allvars.priceField.store.officialemail}}</p>
                                                        </template>
                                                        <td class="pl-0 pt-7">{{allvars.priceField.store.storeName}}</td>
                                                    </a-popover>
                                                    <td class="pl-0 pt-7">
                                                        <ProgressIndicator :percentage="checkProgress(allvars.stage)" :header="true"/>
                                                    </td>
                                                    <td class="text-right pt-7">{{allvars.item.quantity}}</td>
                                                    <td class="text-right pt-7">₹ {{allvars.priceField.price}}</td>
                                                    <td class="text-danger pr-0 pt-7 text-right">₹{{allvars.item.quantity * allvars.priceField.price}} </td>
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
                                                <span class="font-size-h2 font-weight-boldest text-danger mb-1">₹{{order.totalPrice}}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- end: Invoice footer-->

                                <!-- begin: Invoice action-->
                                <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                                    <div class="col-md-9">
                                        <div class="d-flex justify-content-between">
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
    import {GetOrderByIdDocument, Order} from "~/gql";
    import moment from "moment";
    import ProgressIndicator from "~/components/progress/progress-indicator.vue";
    import {checkOrderProgress} from "~/utils/OrderStageType";

    @Component({
        layout: 'console',
        components:{
            ProgressIndicator
        },
        apollo: {
            order: {
                query: GetOrderByIdDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                }
            }
        }
    })
    export default class OrderSingle extends Vue {
        private order: Order

        @Watch('order')
        onChangeOrder() {
            console.log(this.order)
        }

        getDate() {
            return moment(this.order.createdAt).format('DD MMM YYYY')
        }

        checkProgress(stage) {
            return checkOrderProgress(stage)
        }
    }
</script>
