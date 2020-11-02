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
                                 v-if="$apollo.queries.invoice.loading">
                                <div class="spinner spinner-primary spinner-lg mr-15"></div>
                            </div>
                            <div class="card-body p-0" v-if="!$apollo.queries.invoice.loading">
                                <!-- begin: Invoice-->
                                <!-- begin: Invoice header-->
                                <div class="row justify-content-center bgi-size-cover bgi-no-repeat py-8 px-8 py-md-27 px-md-0" style="background-image: url(/media/bg/bg-6.jpg);">
                                    <div class="col-md-9">
                                        <div class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                                            <h1 class="display-4 text-white font-weight-boldest mb-10">Invoice</h1>
                                            <div class="d-flex flex-column align-items-md-end px-0">
                                                <!--begin::Logo-->
                                                <a href="#" class="mb-5" v-if="invoice.type === 'STORE'">
                                                    <h4 style="color: white">{{invoice.line.store.storeName}}</h4>
                                                </a>
                                                <a href="#" class="mb-5" v-if="invoice.type === 'CONSUMER'">
                                                    <h4 style="color: white">{{invoice.line.order.user.email}}</h4>
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
                                                <span class="opacity-70">{{invoice.id}}</span>
                                            </div>
                                            <!--<div class="d-flex flex-column flex-root">
                                                <span class="font-weight-bolder mb-2">ORDER TO.</span>
                                                <span class="opacity-70">
                                                    <h4 style="color: white" class="font-weight-bolder">{{order.user.firstName}} {{order.user.lastName}}</h4>
                                                    <br/>
                                                    <p>{{order.address}}</p>
                                                </span>
                                            </div>-->
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
                                                    <th class="pl-0 font-weight-bold text-muted  text-uppercase">Type</th>
                                                    <th class="pl-0 font-weight-bold text-muted  text-uppercase">Amount</th>
                                                    <th class="pl-0 font-weight-bold text-muted  text-uppercase">fees</th>
                                                    <th class="pl-0 font-weight-bold text-muted  text-uppercase">Tax</th>
                                                    <th class="text-right font-weight-bold text-muted text-uppercase">Total</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="font-weight-boldest font-size-lg">
                                                    <td class="pl-0 pt-7">{{invoice.type}}</td>
                                                    <td class="pl-0 pt-7">₹ {{invoice.amount}}</td>
                                                    <td class="pl-0 pt-7">₹ {{invoice.fees}}</td>
                                                    <td class="text-right pt-7">₹ {{invoice.tax}}</td>
                                                    <td class="text-right pt-7">₹ {{invoice.total}}</td>
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
                                                <span class="font-size-h2 font-weight-boldest text-danger mb-1">₹{{invoice.total}}</span>
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
import {GetSingleInvoiceDocument, Invoice} from "~/gql";
import moment from "moment";

@Component({
    layout: 'console',
    apollo: {
        invoice: {
            query: GetSingleInvoiceDocument,
            variables() {
                return {
                    id: this.$route.params.id
                }
            }
        }
    }
})
export default class SingleInvoice extends Vue {
    private invoice: Invoice

    @Watch('Invoice')
    onChangeInv() {
        console.log(this.invoice)
    }

    getDate() {
        return moment(this.invoice.createdAt).format('DD MMM YYYY')
    }
}
</script>
