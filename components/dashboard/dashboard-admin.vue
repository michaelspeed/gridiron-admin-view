<template>
    <div v-if="store">
        <div class="card card-custom gutter-b">
            <div class="card-body">
                <div class="d-flex">
                    <!--begin: Pic-->
                    <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                        <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                            <span class="font-size-h3 symbol-label font-weight-boldest"></span>
                        </div>
                    </div>
                    <!--end: Pic-->

                    <!--begin: Info-->
                    <div class="flex-grow-1">
                        <!--begin: Title-->
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <div class="mr-3">
                                <!--begin::Name-->
                                <a href="#" class="d-flex align-items-center text-success text-hover-primary font-size-h5 font-weight-bold mr-3">
                                    {{store.storeName}}
                                </a>
                                <!--end::Name-->

                                <!--begin::Contacts-->
                                <div class="d-flex flex-wrap my-2">
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                        <i class="la la-mail-bulk"></i>
                                        {{store.officialemail}}
                                    </a>
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                        <i class="la la-phone"></i>
                                        {{store.phoneNumber}}
                                    </a>
                                    <a href="#" class="text-muted text-hover-primary font-weight-bold">
                                        <i class="la la-receipt"></i>
                                        {{store.GSTIN}}
                                    </a>
                                </div>
                                <!--end::Contacts-->
                            </div>
                        </div>
                        <!--end: Title-->
                    </div>
                    <!--end: Info-->
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
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
    import {mapState} from "vuex";
    import {GetDeliveryStrandedCountDocument} from "~/gql";

    @Component({
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                store: (store: any) => store.admin.store,
                vendorStore: (store: any) => store.admin.vendorStore,
                vendor: (store: any) => store.admin.vendor
            })
        },
        apollo: {
            GetDeliveryStrandedCount: {
                query: GetDeliveryStrandedCountDocument
            }
        }
    })
    export default class DashboardAdmin extends Vue {
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
