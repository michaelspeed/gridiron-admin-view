<template>
    <div>
        <div class="d-flex justify-content-center align-items-center m-20 w-100"
             v-if="$apollo.queries.orderLine.loading">
            <div class="spinner spinner-primary spinner-lg mr-15"></div>
        </div>
        <div class="p-0" v-if="!$apollo.queries.orderLine.loading">
            <!-- begin: Invoice-->
            <!-- begin: Invoice header-->
            <div class="row justify-content-center bgi-size-cover bgi-no-repeat py-8 px-8 px-md-0"
                 style="background-image: url(/media/bg/bg-6.jpg); margin-top: -20px">
                <div class="col-md-9">
                    <div class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                        <h1 class="display-4 text-white font-weight-boldest mb-10">Order</h1>
                        <div class="d-flex flex-column align-items-md-end px-0">
                            <!--begin::Logo-->
                            <a href="#" class="mb-5">
                                <h4 style="color: white">{{ orderLine.order.user.firstName }}
                                    {{ orderLine.order.user.lastName }}</h4>
                            </a>
                        </div>
                    </div>
                    <div class="border-bottom w-100 opacity-20"></div>
                    <div class="d-flex justify-content-between text-white pt-6">
                        <div class="d-flex flex-column flex-root">
                            <span class="font-weight-bolde mb-2r">DATE</span>
                            <span class="opacity-70">{{ getDate() }}</span>
                        </div>
                        <div class="d-flex flex-column flex-root">
                            <span class="font-weight-bolder mb-2">ORDER NO.</span>
                            <span class="opacity-70">{{ orderLine.order.id }}</span>
                        </div>
                        <div class="d-flex flex-column flex-root">
                            <span class="font-weight-bolder mb-2">ORDER TO.</span>
                            <span class="opacity-70">
                                                    <h4 style="color: white"
                                                        class="font-weight-bolder">{{ orderLine.order.user.firstName }} {{ orderLine.order.user.lastName }}</h4>
                                                    <br/>
                                                    <p>{{orderLine.order.address}}</p>
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
                                <th class="pl-0 font-weight-bold text-muted  text-uppercase">State</th>
                                <th class="text-right font-weight-bold text-muted text-uppercase">Quantity</th>
                                <th class="text-right font-weight-bold text-muted text-uppercase">Rate</th>
                                <th class="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="font-weight-boldest font-size-lg">
                                <td class="pl-0 pt-7">{{ orderLine.item.productVariant.name }}</td>
                                <td class="pl-0 pt-7">
                                    <ProgressIndicator :percentage="checkProgress(orderLine.stage)" :header="true"/>
                                </td>
                                <td class="text-right pt-7">{{ orderLine.item.quantity }}</td>
                                <td class="text-right pt-7">₹ {{ orderLine.priceField.price }}</td>
                                <td class="text-danger pr-0 pt-7 text-right">
                                    ₹{{ orderLine.item.quantity * orderLine.priceField.price }}
                                </td>
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
                        <div class="d-flex flex-column text-md-right" v-if="orderStage !== orderStageType.DELIVERED">
                            <span class="font-size-lg font-weight-bolder mb-1">SELECT STAGE</span>
                            <span class="font-size-h2 font-weight-boldest text-danger mb-1"></span>
                            <div>
                                <a-select :value="orderStage" style="width: 120px" @change="handleChange">
                                    <a-select-option :value="orderStageType.CREATED">
                                        CREATED
                                    </a-select-option>
                                    <a-select-option :value="orderStageType.PROCESSED">
                                        PROCESSED
                                    </a-select-option>
                                    <a-select-option :value="orderStageType.PACKAGED">
                                        PACKAGED
                                    </a-select-option>
                                    <a-select-option :value="orderStageType.SHIPPED" :disabled="true">
                                        SHIPPED
                                    </a-select-option>
                                    <a-select-option :value="orderStageType.DELIVERED" :disabled="true">
                                        DELIVERED
                                    </a-select-option>
                                </a-select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- end: Invoice footer-->

            <!-- begin: Invoice action-->
            <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0" v-if="loading">
                <v-progress-linear
                    color="lime"
                    indeterminate
                    reverse
                ></v-progress-linear>
            </div>
            <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0" v-if="!loading">
                <div class="col-md-9">
                    <div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-light-primary font-weight-bold" @click="onUpdateOrderLine">
                            Update Order State
                        </button>
                    </div>
                </div>
            </div>
            <!-- end: Invoice action-->

            <!-- end: Invoice-->
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {GetSingleOrderLineDocument, OrderLine, UpdateOrderLineDocument} from "~/gql";
import moment from "moment";
import {checkOrderProgress, OrderStageType} from '~/utils/OrderStageType';
import ProgressIndicator from "~/components/progress/progress-indicator.vue";

@Component({
    components: {
        ProgressIndicator
    },
    apollo: {
        orderLine: {
            query: GetSingleOrderLineDocument,
            variables() {
                return {
                    id: this.id
                }
            }
        }
    }
})
export default class OrderLinePreview extends Vue {
    @Prop() id: string
    private orderStageType = OrderStageType
    private orderLine: OrderLine
    private orderStage = ''
    private loading = false

    @Watch('orderLine')
    onChangeOrderLine() {
        if (this.orderStage === '') {
            this.orderStage = this.orderLine.stage
        }
        console.log(this.orderLine)
    }

    getAddress(address) {
        return !!JSON.parse(address).id;
    }

    onUpdateOrderLine() {
        this.loading = true
        this.$Message.loading('Action in Progress ....')
        this.$apollo.mutate({
            mutation: UpdateOrderLineDocument,
            variables: {
                id: this.id,
                stage: this.orderStage
            }
        }).then(value => {
            this.$Message.success('Order Line Updated')
            this.loading = false
        }).catch(error => {
            this.$Message.error(error.message)
            this.loading = false
        })
    }

    handleChange(value) {
        this.orderStage = value
    }

    getDate() {
        return moment(this.orderLine.order.createdAt).format('DD MMM YYYY')
    }

    checkProgress(stage) {
        return checkOrderProgress(stage)
    }
}
</script>
