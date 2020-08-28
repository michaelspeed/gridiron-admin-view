<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="d-flex flex-column-fluid mt-20">
                    <!--begin::Container-->
                    <div class=" container-fluid ">
                        <div class="card">
                            <div class="card-header border-0 d-flex justify-content-between align-items-center">
                                <h3 class="card-title align-items-start flex-column">
                                    <a href="javascript:;" @click="$router.back()">
                                        <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                                    </a>
                                    <span class="card-label font-weight-bolder text-dark ml-6">Order Preview</span>
                                </h3>
                            </div>
                            <div class="card-body">
                                <OrderLinePreview :id="$route.params.id" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import OrderLinePreview from "~/components/order/OrderLInePreview.vue";

    @Component({
        components: {
            OrderLinePreview
        },
        layout: 'console'
    })
    export default class VendorOrders extends Vue{

    }
</script>
