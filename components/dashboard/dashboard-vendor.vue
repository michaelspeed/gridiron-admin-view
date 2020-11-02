<template>
    <div v-if="vendorStore">
        <div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card card-custom card-stretch gutter-b">
                        <!--begin::Body-->
                        <div class="card-body d-flex align-items-center justify-content-between flex-wrap">
                            <div class="mr-2">
                                <h3 class="font-weight-bolder text-primary">{{ vendorStore.storeName }}</h3>
                                <div class="text-dark-50 font-size-lg mt-2">
                                    <i class="fas fa-envelope mr-2 text-danger"></i>{{ vendorStore.officialemail }}
                                    <br/>
                                    <i class="fas fa-phone mr-2 text-danger"></i>{{ vendorStore.phoneNumber }}
                                    <br/>
                                    <i class="fas fa-funnel-dollar mr-2 text-danger"></i>{{ vendorStore.GSTIN }}
                                    <br/>
                                </div>
                            </div>
                            <v-dialog v-model="addGst" scrollable max-width="300px">
                                <template v-slot:activator="{ on, attrs }">
                                    <a href="#" class="btn btn-sm btn-primary font-weight-bold py-3 px-6"
                                       v-if="vendorStore.GSTIN === ''" v-bind="attrs"
                                       v-on="on">Add GST</a>
                                </template>
                                <v-card>
                                    <v-card-title :style="{'background-color': theme.colors.theme.base.primary, 'color': 'white'}">Add GST</v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        <v-text-field
                                            label="GST"
                                            v-model="gst"
                                        ></v-text-field>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-progress-linear
                                        color="lime"
                                        indeterminate
                                        reverse
                                        v-if="loading"
                                    ></v-progress-linear>
                                    <v-card-actions v-if="!loading">
                                        <v-btn color="red" text @click="addGst = false">Close</v-btn>
                                        <v-btn color="primary" text @click="onSaveGst">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                        <!--end::Body-->
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-stretch card-custom bgi-no-repeat bgi-size-cover gutter-b"
                         style="background-image: url(/media/stock-600x400/img-45.jpg); background-size: cover">
                        <!--begin::Body-->
                        <div class="card-body">
                            <a href="#" class="text-dark-75 text-hover-primary font-weight-bolder font-size-h3">
                                Account Stats
                            </a>
                            <div class="text-dark-50 font-weight-bold font-size-lg pt-2"
                                 v-if="vendorStore && vendorStore.balance">
                                Account Balance <span
                                class="text-dark-50 font-weight-bold">₹</span>{{ vendorStore.balance.balance }}
                                <br/>
                                Lifetime Balance <span
                                class="text-dark-50 font-weight-bold">₹</span>{{ vendorStore.balance.balanceVolume }}
                            </div>
                        </div>
                        <!--end::Body-->
                    </div>
                </div>
                <div class="col-md-4">
                    <VendorLicense :id="vendor.id"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-custom gutter-b">
                        <!--begin::Body-->
                        <div class="card-body ">
                            <!--begin::Nav Tabs-->
                            <ul class="dashboard-tabs nav nav-pills nav-danger row row-paddingless m-0 p-0"
                                role="tablist">
                                <!--begin::Item-->
                                <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <a class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center active"
                                       data-toggle="pill" href="javascript:;" @click="$router.push('/app/sales-menu/orders')">
                                        <span class="nav-icon py-2 w-auto">
                        <span class="svg-icon svg-icon-3x"><!--begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg--><svg
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                            height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <path
            d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
            fill="#000000"></path>
        <rect fill="#000000" opacity="0.3"
              transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
              x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
    </g>
</svg><!--end::Svg Icon--></span>                    </span>
                                        <span class="nav-text font-size-lg py-2 font-weight-bold text-center">
                                            Orders
                                        </span>
                                    </a>
                                </li>
                                <!--end::Item-->

                                <!--begin::Item-->
                                <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <a class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                                       data-toggle="pill" href="javascript:;" @click="$router.push('/app/catalog/products')">
                                        <span class="nav-icon py-2 w-auto">
                        <span class="svg-icon svg-icon-3x"><!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg--><svg
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                            height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"></rect>
        <path
            d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
            fill="#000000" opacity="0.3"></path>
    </g>
</svg><!--end::Svg Icon--></span>                    </span>
                                        <span class="nav-text font-size-lg py-2 font-weight-bolder text-center">
                                            Products
                                        </span>
                                    </a>
                                </li>
                                <!--end::Item-->

                                <!--begin::Item-->
                                <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <a class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                                       data-toggle="pill" href="javascript:;" @click="$router.push('/app/stocks/stocks-management')">
                                        <span class="nav-icon py-2 w-auto">
                                            <span class="svg-icon svg-icon-3x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo6\dist/../src/media/svg/icons\Design\Brush.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <path d="M13.5,6 C13.33743,8.28571429 12.7799545,9.78571429 11.8275735,10.5 C11.8275735,10.5 12.5,4 10.5734853,2 C10.5734853,2 10.5734853,5.92857143 8.78777106,9.14285714 C7.95071887,10.6495511 7.00205677,12.1418252 7.00205677,14.1428571 C7.00205677,17 10.4697177,18 12.0049375,18 C13.8025422,18 17,17 17,13.5 C17,12.0608202 15.8333333,9.56082016 13.5,6 Z" fill="#000000"/>
        <path d="M9.72075922,20 L14.2792408,20 C14.7096712,20 15.09181,20.2754301 15.2279241,20.6837722 L16,23 L8,23 L8.77207592,20.6837722 C8.90818997,20.2754301 9.29032881,20 9.72075922,20 Z" fill="#000000" opacity="0.3"/>
    </g>
</svg><!--end::Svg Icon--></span></span>
                                        <span class="nav-text font-size-lg py-2 font-weight-bolder text-center">
                                            Stock Management
                                        </span>
                                    </a>
                                </li>
                                <!--end::Item-->

                                <!--begin::Item-->
                                <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                    <a class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                                       data-toggle="pill" href="javascript:;" @click="$router.push('/app/stocks/stocks-backorders')">
                                        <span class="nav-icon py-2 w-auto">
                                            <span class="svg-icon svg-icon-3x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo6\dist/../src/media/svg/icons\Code\Option.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <rect fill="#000000" opacity="0.3" x="12" y="7" width="10" height="2" rx="1"/>
        <path d="M2,9 C1.44771525,9 1,8.55228475 1,8 C1,7.44771525 1.44771525,7 2,7 L7.35012691,7 C8.14050434,7 8.85674733,7.46546704 9.17775001,8.18772307 L12.6498731,16 L22,16 C22.5522847,16 23,16.4477153 23,17 C23,17.5522847 22.5522847,18 22,18 L12.6498731,18 C11.8594957,18 11.1432527,17.534533 10.82225,16.8122769 L7.35012691,9 L2,9 Z" fill="#000000" fill-rule="nonzero"/>
    </g>
</svg><!--end::Svg Icon--></span>
                                        </span>
                                        <span class="nav-text font-size-lg py-2 font-weight-bolder text-center">
                                            Stock BackOrders
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--end::Body-->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <VueDashboardStats :id="vendorStore.id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {mapState} from "vuex";
import {GetVendorAccountDocument, UpdateOneStoreDocument} from "~/gql";
import VueDashboardStats from "~/components/dashboard/vendor-dashboard-stats.vue";
import VendorLicense from "~/components/vendor/vendor-license.vue";
import {GridironViewSettings} from "~/utils/theme.settings";

@Component({
    components: {
        VueDashboardStats,
        VendorLicense
    },
    computed: {
        ...mapState({
            admin: (store: any) => store.admin.administrator,
            store: (store: any) => store.admin.store,
            vendorStore: (store: any) => store.admin.vendorStore,
            vendor: (store: any) => store.admin.vendor
        })
    },
})
export default class DashboardVendor extends Vue {
    private GetVendorAccount

    private gst = ''
    private addGst = false
    private theme = GridironViewSettings

    private loading = false

    private vendorStore

    onSaveGst(){
        this.loading = true
        this.$apollo.mutate({
            mutation: UpdateOneStoreDocument,
            variables: {
                id: this.vendorStore.id,
                GSTIN: this.gst
            }
        }).then(value => {
            this.loading = false
            this.addGst = false
            this.$Message.success('GST Updated')
        }).catch(error => {
            this.loading = false
            this.$Message.error(error.message)
            this.addGst = false
        })
    }
}
</script>
