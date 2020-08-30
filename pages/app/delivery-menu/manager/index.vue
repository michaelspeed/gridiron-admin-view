<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Delivery Manager</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"></span>
                            </div>
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
                <div v-if="GetDeliveryStrandedCount">
                    <div class="card card-custom card-stretch gutter-b" :class="{'bg-light-success': count < 40, 'bg-light-warning': (count > 40 && count < 80), 'bg-light-danger': count > 80}">
                        <!--begin::Body-->
                        <div class="card-body my-3">
                            <a href="#" class="card-title font-weight-bolder text-primary text-hover-state-dark font-size-h6 mb-4 d-block">Stranded Order Load</a>

                            <div class="font-weight-bold text-muted font-size-sm"><span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">{{count}}</span>
                                <span class="text-success" v-if="count < 40">Low</span>
                                <span class="text-warning" v-if="count > 40 && count < 80">Normal</span>
                                <span class="text-danger" v-if="count > 80">Heavy</span>
                            </div>

                            <div class="progress progress-xs mt-7 bg-success-o-60" >
                                <div class="progress-bar"
                                     :class="{'bg-success': count < 40, 'bg-warning': (count > 40 && count < 80), 'bg-danger': count > 80}"
                                     role="progressbar" :style="{width: `${count}%`}" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <!--end:: Body-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {GetDeliveryStrandedCountDocument} from "~/gql";

    @Component({
        layout: 'console',
        apollo: {
            GetDeliveryStrandedCount: {
                query: GetDeliveryStrandedCountDocument
            }
        }
    })
    export default class Manager extends Vue {
        private count = 0

        private GetDeliveryStrandedCount

        @Watch('GetDeliveryStrandedCount')
        onCheckDelivery() {
            if (this.GetDeliveryStrandedCount) {
                this.count = this.GetDeliveryStrandedCount.count
            }
        }
    }
</script>
