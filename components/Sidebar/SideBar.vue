<template>
    <div class="sidebar sidebar-left d-flex flex-row-auto flex-column " id="kt_sidebar">
        <!--begin::Aside Secondary Header-->
        <div class="sidebar-header flex-column-auto pt-5 pt-lg-19 pb-5 px-5 px-lg-10">
            <!--begin::Toolbar-->
            <div class="d-flex">
                <!--begin::Desktop Search-->
                <div class="quick-search quick-search-inline flex-grow-1" id="kt_quick_search_inline">
                    <!--begin::Form-->
                    <div class="quick-search-form">
                        <div class="input-group rounded bg-light">
                            <div class="input-group-prepend">
							<span class="input-group-text">
                                <i class="fas fa-search"></i>
                            </span>
                            </div>

                            <input type="text" class="form-control h-40px" placeholder="Search..."/>

                            <div class="input-group-append">
							<span class="input-group-text">
								<i class="quick-search-close ki ki-close icon-sm text-muted"></i>
							</span>
                            </div>
                        </div>
                    </div>
                    <!--end::Form-->

                    <!--begin::Search Toggle-->
                    <div id="kt_quick_search_toggle" data-toggle="dropdown" data-offset="0px,1px"></div>
                    <!--end::Search Toggle-->

                    <!--begin::Dropdown-->
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-anim-up">
                        <div class="quick-search-wrapper scroll" data-scroll="true" data-height="350"
                             data-mobile-height="200">
                        </div>
                    </div>
                    <!--end::Dropdown-->
                </div>
                <!--end::Desktop Search-->
            </div>
            <!--end::Toolbar-->
        </div>
        <!--end::Aside Secondary Header-->

        <!--begin::Aside Secondary Content-->
        <div class="sidebar-content flex-column-fluid pb-10 pt-9 px-5 px-lg-10">
            <!--Title Widget-->
            <div class="d-flex justify-content-center align-items-center m-20"
                 v-if="!store && !vendorStore">
                <div class="spinner spinner-primary spinner-lg mr-15"></div>
            </div>
            <div class="card card-custom bg-light-danger gutter-b" style="height: 130px"
                 v-if="vendorStore && vendorStore.balance">
                <!--begin::Body-->
                <div class="card-body d-flex flex-column">
                    <div>
                        <i class="fas fa-money-check-alt text-danger"></i>
                    </div>
                    <!--begin::Stats-->
                    <div class="flex-grow-1">
                        <div class="text-dark-50 font-weight-bold">Total Volume</div>
                        <div class="font-weight-bolder text-primary font-size-h3">{{ vendorStore.balance.balance }}
                            INR
                        </div>
                    </div>
                    <!--end::Stats-->

                </div>
                <!--end::Body-->
            </div>
            <v-sheet v-if="store && !vendorStore" class="card card-custom bgi-no-repeat gutter-b" elevation="4"
                 style="height: 250px; background-color: #1B283F; background-position: calc(100% + 0.5rem) calc(100% + 0.5rem); background-size: 100% auto; background-image: url(/media/svg/patterns/rhone-2.svg)">
                <!--begin::Body-->
                <div class="card-body">
                    <!--<img src="/master/logo/air.png" alt="" style="height: 80px; margin-top: -30px; margin-left: -35px">-->
                    <h3 class="text-white font-weight-bolder">{{ store.storeName }}</h3>
                    <p class="text-muted font-size-lg mt-5">
                        {{ store.streetAddress1 }}, {{ store.streetAddress2 }}
                    </p>
                    <a href="javascript:;" class="btn btn-link btn-link-warning font-weight-bold" @click="$router.push('/app/system-menu/system-config')">
                        Open Settings
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <!--end::Body-->
            </v-sheet>
            <v-sheet v-if="vendorStore" class="card card-custom bgi-no-repeat gutter-b" elevation="4"
                 style="height: 250px; background-color: #1B283F; background-position: calc(100% + 0.5rem) calc(100% + 0.5rem); background-size: 100% auto; background-image: url(/media/svg/patterns/rhone-2.svg)">
                <!--begin::Body-->
                <div class="card-body">
                    <img src="/master/logo/air.png" alt="" style="height: 80px; margin-top: -30px; margin-left: -35px">
                    <h3 class="text-white font-weight-bolder">{{ vendorStore.storeName }}</h3>
                    <p class="text-muted font-size-lg mt-5">
                        {{ vendorStore.streetAddress1 }}, {{ vendorStore.streetAddress2 }}
                    </p>
                    <a href="javascript:;" class="btn btn-link btn-link-warning font-weight-bold" @click="$router.push('/app/stores-menu/store-configuration')">
                        Open Settings
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <!--end::Body-->
            </v-sheet>
            <v-sheet class="card card-custom gutter-b" elevation="4">
                <div class="card-header border-0 pt-5">
                    <div class="card-title font-weight-bolder">
                        <div class="card-label">
                            <h3 class="text-primary">Status</h3>
                            <div class="font-size-sm text-muted mt-2">Server Status</div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="card-body d-flex flex-column" style="position: relative;" v-if="health">
                    <div class="mt-5 mb-5">
                        <div class="row row-paddingless">
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <v-icon
                                        color="primary"
                                    >
                                        mdi-database
                                    </v-icon>
                                    <!--end::Symbol-->

                                    <!--begin::Title-->
                                    <div style="margin-left: 5px">
                                        <div class="text-dark-75 font-weight-bolder">Database</div>
                                        <div class="font-size-sm text-muted font-weight-bold">{{this.health.database.status}}</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->

                            <!--begin::Item-->
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <v-icon
                                        color="red"
                                    >
                                        mdi-web
                                    </v-icon>

                                    <!--begin::Title-->
                                    <div style="margin-left: 5px">
                                        <div class="text-dark-75 font-weight-bolder">Socket</div>
                                        <div class="font-size-sm text-muted font-weight-bold">{{this.health.google.status}}</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->
                        </div>

                        <div class="row row-paddingless">
                            <!--begin::Item-->
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <v-icon
                                        color="amber"
                                    >
                                        mdi-memory
                                    </v-icon>

                                    <!--begin::Title-->
                                    <div style="margin-left: 5px">
                                        <div class="text-dark-75 font-weight-bolder">Memory Heap</div>
                                        <div class="font-size-sm text-muted font-weight-bold">{{this.health.memory_heap.status}}</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->

                            <!--begin::Item-->
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <v-icon
                                        color="cyan"
                                    >
                                        mdi-console-network
                                    </v-icon>

                                    <!--begin::Title-->
                                    <div style="margin-left: 5px">
                                        <div class="text-dark-75 font-weight-bolder">Memory RSS</div>
                                        <div class="font-size-sm text-muted font-weight-bold">{{this.health.memory_rss.status}}</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->
                        </div>
                        <div class="row row-paddingless">
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <v-icon
                                        color="light-green"
                                    >
                                        mdi-nas
                                    </v-icon>

                                    <!--begin::Title-->
                                    <div style="margin-left: 5px">
                                        <div class="text-dark-75 font-weight-bolder">Storage</div>
                                        <div class="font-size-sm text-muted font-weight-bold">{{this.health.storage.status}}</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="resize-triggers"><div class="expand-trigger"><div style="width: 268px; height: 482px;"></div></div><div class="contract-trigger"></div></div></div>
                <hr/>
                <div class="card-body d-flex flex-column" style="position: relative;">
                    <div class="mt-5 mb-5">
                        <div class="row row-paddingless">
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <div style="margin-left: 5px">
                                        <div class="text-primary font-weight-bolder">GridIron Core</div>
                                        <div class="font-size-sm text-muted font-weight-bold">0.17.1</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->

                            <!--begin::Item-->
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <div style="margin-left: 5px">
                                        <div class="text-danger font-weight-bolder">GridIron Orders</div>
                                        <div class="font-size-sm text-muted font-weight-bold">0.17.1</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->
                        </div>

                        <div class="row row-paddingless">
                            <!--begin::Item-->
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <div style="margin-left: 5px">
                                        <div class="text-info font-weight-bolder">Atmiyo MitoSIS</div>
                                        <div class="font-size-sm text-muted font-weight-bold">2.4.5</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->

                            <!--begin::Item-->
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <div style="margin-left: 5px">
                                        <div class="text-warning font-weight-bolder">GridIron Stocks</div>
                                        <div class="font-size-sm text-muted font-weight-bold">0.17.1</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <!--end::Item-->
                        </div>
                        <div class="row row-paddingless">
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <div style="margin-left: 5px">
                                        <div class="text-success font-weight-bolder">GridIron Shipping</div>
                                        <div class="font-size-sm text-muted font-weight-bold">0.17.1</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                            <div class="col">
                                <div class="d-flex align-items-center mr-2">
                                    <div style="margin-left: 5px">
                                        <div class="text-success font-weight-bolder">GridIron Admin UI</div>
                                        <div class="font-size-sm text-muted font-weight-bold">1.15.6</div>
                                    </div>
                                    <!--end::Title-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-sheet>
            <v-sheet class="card card-custom bg-light-success gutter-b" elevation="4">
                <!--begin::Header-->
                <div class="card-header align-items-center border-0 mt-4">
                    <h3 class="card-title align-items-start flex-column">
                        <span class="font-weight-bolder text-success">Recent Orders</span>
                        <span class="text-muted mt-3 font-weight-bold font-size-sm"></span>
                    </h3>
                </div>
                <!--end::Header-->

                <!--begin::Body-->
                <div class="card-body pt-4">
                    <div class="timeline timeline-5 mt-3" v-if="admin">
                        <!--begin::Item-->
                        <div class="timeline-item align-items-start" v-for="order of orders">
                            <!--begin::Label-->
                            <div class="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                {{ getDate(order.createdAt) }}
                            </div>
                            <!--end::Label-->

                            <!--begin::Badge-->
                            <div class="timeline-badge">
                                <i class="fa fa-genderless text-success icon-xl"></i>
                            </div>
                            <!--end::Badge-->

                            <!--begin::Content-->
                            <div class="timeline-content d-flex">
                                <span
                                    class="font-weight-bolder text-dark-75 pl-3 font-size-lg">{{ order.user.firstName }}{{ order.user.lastName }}</span>
                            </div>
                            <div>
                                <span class="text-muted">₹ {{ order.totalPrice }}</span>
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Item-->

                    </div>
                    <div class="timeline timeline-5 mt-3" v-if="vendorStore">
                        <!--begin::Item-->
                        <div class="timeline-item align-items-start" v-for="order of orderLines">
                            <!--begin::Label-->
                            <div class="timeline-label text-dark-75 font-size-sm">{{ getDate(order.order.createdAt) }}
                            </div>
                            <!--end::Label-->

                            <!--begin::Badge-->
                            <div class="timeline-badge">
                                <i class="fa fa-genderless text-success icon-xl"></i>
                            </div>
                            <!--end::Badge-->

                            <!--begin::Content-->
                            <div class="timeline-content d-flex">
                                <span
                                    class="font-weight-bolder text-dark-75 pl-3 font-size-lg">{{ order.order.user.firstName }}{{ order.order.user.lastName }}
                                    <br/>
                                    <span class="text-muted font-size-sm">{{ order.stage }}</span>
                                </span>
                            </div>
                            <div>
                                <span class="text-muted">₹ {{ order.order.totalPrice }}</span>
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Item-->

                    </div>
                    <!--end: Items-->
                </div>
                <!--end: Card Body-->
            </v-sheet>
        </div>
        <!--end::Aside Secondary Content-->
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import {PerfectScrollbar} from "vue2-perfect-scrollbar";
import {adminMenuData, menudata, vendorMenuData} from "../../constants/menu";
import {mapState} from "vuex";
import {GetOrderLinesDocument, GetVendorAccountDocument, SearchAllOrdersDocument} from "~/gql";
import moment from "moment";
import {mainAPI} from "~/constants/GlobalURL";

@Component({
    components: {
        PerfectScrollbar
    },
    computed: {
        ...mapState({
            admin: (store: any) => store.admin.administrator,
            store: (store: any) => store.admin.store,
            vendorStore: (store: any) => store.admin.vendorStore,
            vendor: (store: any) => store.admin.vendor
        })
    },
    apollo: {
        orders: {
            query: SearchAllOrdersDocument,
            variables() {
                return {
                    limit: 5,
                    offset: 0,
                }
            },
            pollInterval: 4000
        },
        orderLines: {
            query: GetOrderLinesDocument,
            variables() {
                return {
                    limit: 5,
                    offset: 0,
                    id: this.vendorStore ? this.vendorStore.id : undefined
                }
            },
            pollInterval: 4000
        }
    }
})
export default class SideBar extends Vue {
    private store
    private vendorStore
    private tempscript: any = null;
    private scrollbarscript: any = null
    private menu: any[] = menudata
    private adminMenu: any[] = adminMenuData
    private vendorMenu: any[] = vendorMenuData

    private orders
    private orderLines
    private GetVendorAccount

    private health: any = null

    getDate(date) {
        return moment(date).format('DD/MM HH:mm')
    }

    mounted() {
        this.tempscript = document.createElement('script');
        this.scrollbarscript = document.createElement('script');
        this.tempscript.src = '/components/menu-left/index.js';
        this.scrollbarscript.src = '/vendors/perfect-scrollbar/js/perfect-scrollbar.jquery.js';
        this.tempscript.async = true;
        this.scrollbarscript.async = true
        document.body.appendChild(this.tempscript)
        document.body.appendChild(this.scrollbarscript)
        this.$axios.$get(`${mainAPI}/health`)
        .then((response) => {
            console.log(response)
            this.health = response.details
        })
        .catch((error) => {
            console.log(error)
        })
    }

    @Watch('GetVendorAccount')
    onChangeStore() {
        console.log(this.GetVendorAccount)
    }

    beforeDestroy() {
        if (this.tempscript !== null) {
            document.body.removeChild(this.tempscript)
        }
        if (this.scrollbarscript !== null) {
            document.body.removeChild(this.scrollbarscript)
        }
    }
}
</script>

<style scoped>
.air__menuLeft {

}
</style>
