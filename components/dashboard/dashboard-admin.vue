<template>
    <div v-if="store">
        <div class="row">
            <div class="col-md-6">
                <div class="card card-custom gutter-b card-stretch">
                    <!--begin::Header-->
                    <div class="card-header border-0 pt-5">
                        <div class="card-title">
                            <div class="card-label">
                                <div class="font-weight-bolder text-primary">Sale Stats</div>
                                <div class="font-size-sm mt-2">Last 30 Days</div>
                            </div>
                        </div>
                    </div>
                    <!--end::Header-->

                    <!--begin::Body-->
                    <div class="card-body d-flex flex-column px-0">
                        <apexchart height="100px" :options="options" :series="series" v-if="options !== null"></apexchart>
                    </div>
                    <!--end::Body-->
                </div>
            </div>
            <div class="col-md-6">
                <div class="card card-custom gutter-b card-stretch">
                    <!--begin::Header-->
                    <div class="card-header border-0 pt-5">
                        <div class="card-title">
                            <div class="card-label">
                                <div class="font-weight-bolder text-danger">Activity Stats</div>
                                <div class="font-size-sm mt-2">Last 30 Days</div>
                            </div>
                        </div>
                    </div>
                    <!--end::Header-->

                    <!--begin::Body-->
                    <div class="card-body d-flex flex-column px-0">
                        <apexchart height="100px" :options="viewoptions" :series="viewseries" v-if="viewoptions !== null"></apexchart>
                    </div>
                    <!--end::Body-->
                </div>
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
                                   data-toggle="pill" href="javascript:;" @click="$router.push('/app/delivery-menu/guys')">
                                        <span class="nav-icon py-2 w-auto">
                                            <span class="svg-icon svg-icon-3x"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo6\dist/../src/media/svg/icons\Design\Brush.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <path d="M13.5,6 C13.33743,8.28571429 12.7799545,9.78571429 11.8275735,10.5 C11.8275735,10.5 12.5,4 10.5734853,2 C10.5734853,2 10.5734853,5.92857143 8.78777106,9.14285714 C7.95071887,10.6495511 7.00205677,12.1418252 7.00205677,14.1428571 C7.00205677,17 10.4697177,18 12.0049375,18 C13.8025422,18 17,17 17,13.5 C17,12.0608202 15.8333333,9.56082016 13.5,6 Z" fill="#000000"/>
        <path d="M9.72075922,20 L14.2792408,20 C14.7096712,20 15.09181,20.2754301 15.2279241,20.6837722 L16,23 L8,23 L8.77207592,20.6837722 C8.90818997,20.2754301 9.29032881,20 9.72075922,20 Z" fill="#000000" opacity="0.3"/>
    </g>
</svg><!--end::Svg Icon--></span></span>
                                    <span class="nav-text font-size-lg py-2 font-weight-bolder text-center">
                                            Delivery Guys
                                        </span>
                                </a>
                            </li>
                            <!--end::Item-->

                            <!--begin::Item-->
                            <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                <a class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                                   data-toggle="pill" href="javascript:;" @click="$router.push('/app/delivery-menu/manager')">
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
                                            Delivery Manager
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
            <div class="col-md-4">
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
    import {GetAdminOrderDataDocument, GetAdminViewsDocument, GetDeliveryStrandedCountDocument} from "~/gql";
    import {GridironViewSettings} from "~/utils/theme.settings";

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
            },
            GetAdminOrderData: {
                query: GetAdminOrderDataDocument,
                variables() {
                    return {
                        type: this.type
                    }
                }
            },
            GetAdminViews: {
                query: GetAdminViewsDocument,
                variables() {
                    return {
                        type: this.type
                    }
                }
            }
        }
    })
    export default class DashboardAdmin extends Vue {
        private count = 0

        private type = 'MONTH'

        private GetDeliveryStrandedCount
        private GetAdminOrderData
        private GetAdminViews

        private options: any = null
        private series: any[] = []

        private viewoptions: any = null
        private viewseries: any[] = []

        @Watch('GetAdminOrderData')
        onGetOrderRenderData() {
            console.log(this.GetAdminOrderData)
            this.series = []
            this.options = null
            const serione = {
                name: 'Amount',
                data: this.GetAdminOrderData.datasource.map(item => item.amount)
            }
            const seritow = {
                name: 'Orders',
                data: this.GetAdminOrderData.datasource.map(item => item.sum)
            }
            this.series.push(serione)
            this.series.push(seritow)
            this.options = {
                chart: {
                    type: 'area',
                    height: 100,
                    width: '100%',
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                    opacity: 1,
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 0.55,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.2,
                        stops: [25, 50, 100],
                        colorStops: []
                    }
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [GridironViewSettings['colors']['theme']['base']['primary']]
                },
                xaxis: {
                    categories: this.GetAdminOrderData.labels,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: [GridironViewSettings['colors']['gray']['gray-500']],
                            fontSize: '12px',
                            fontFamily: GridironViewSettings['font-family']
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: GridironViewSettings['colors']['gray']['gray-300'],
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px',
                            fontFamily: GridironViewSettings['font-family']
                        }
                    }
                },
                /*yaxis: {
                    min: 0,
                    max: 37,
                    labels: {
                        show: false,
                        style: {
                            colors: GridironViewSettings['colors']['gray']['gray-500'],
                            fontSize: '12px',
                            fontFamily: GridironViewSettings['font-family']
                        }
                    }
                },*/
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px',
                        fontFamily: GridironViewSettings['font-family']
                    }
                },
                colors: [GridironViewSettings['colors']['theme']['light']['primary']],
                markers: {
                    colors: [GridironViewSettings['colors']['theme']['light']['primary']],
                    strokeColor: [GridironViewSettings['colors']['theme']['base']['primary']],
                    strokeWidth: 3
                },
                padding: {
                    top: 0,
                    bottom: 0
                }
            }
        }

        @Watch('GetAdminViews')
        onGetViewRenderData() {
            console.log(this.GetAdminViews)
            this.viewoptions = null
            this.viewseries = []
            const seritow = {
                name: 'Activity',
                data: this.GetAdminViews.datasource.map(item => item.sum)
            }
            this.viewseries.push(seritow)
            this.viewoptions = {
                chart: {
                    type: 'area',
                    height: 100,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [GridironViewSettings['colors']['theme']['base']['danger']]
                },
                xaxis: {
                    categories: this.GetAdminViews.labels,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: GridironViewSettings['colors']['gray']['gray-500'],
                            fontSize: '12px',
                            fontFamily: GridironViewSettings['font-family']
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: GridironViewSettings['colors']['gray']['gray-300'],
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        offsetY: 0,
                        style: {
                            fontSize: '12px',
                            fontFamily: GridironViewSettings['font-family']
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px',
                        fontFamily: GridironViewSettings['font-family']
                    },
                },
                colors: [GridironViewSettings['colors']['theme']['light']['danger']],
                markers: {
                    colors: [GridironViewSettings['colors']['theme']['light']['danger']],
                    strokeColor: [GridironViewSettings['colors']['theme']['base']['danger']],
                    strokeWidth: 3
                }
            }
        }

        @Watch('GetDeliveryStrandedCount')
        onCheckDelivery() {
            if (this.GetDeliveryStrandedCount) {
                this.count = this.GetDeliveryStrandedCount.count
            }
        }
    }
</script>
