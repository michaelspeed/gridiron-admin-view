<template>
    <div>
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
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {GetStoreOrderDataDocument} from "~/gql";
import {GridironViewSettings} from "~/utils/theme.settings";

@Component({
    apollo:{
        GetStoreOrderData: {
            query: GetStoreOrderDataDocument,
            variables() {
                return {
                    storeId: this.id,
                    type: 'MONTH'
                }
            }
        }
    }
})
export default class VueDashboardStats extends Vue {
    @Prop() id: string
    private GetStoreOrderData

    private options: any = null
    private series: any[] = []

    @Watch('GetStoreOrderData')
    onGetRenderData() {
        console.log(this.GetStoreOrderData)
        const serione = {
            name: 'Amount',
            data: this.GetStoreOrderData.datasource.map(item => item.amount)
        }
        const seritow = {
            name: 'Orders',
            data: this.GetStoreOrderData.datasource.map(item => item.sum)
        }
        this.series.push(serione)
        this.series.push(seritow)
        this.options = {
            chart: {
                type: 'area',
                height: 'auto',
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
                categories: this.GetStoreOrderData.labels,
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
}
</script>
