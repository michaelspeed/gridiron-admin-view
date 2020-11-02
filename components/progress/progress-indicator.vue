<template>
    <div>
        <div class="d-flex flex-column w-100 mr-2">
            <div class="d-flex align-items-center justify-content-between mb-2" v-if="header">
                <span class="text-muted mr-2 font-size-sm font-weight-bold">
                    {{percentage}}%
                </span>
                <span class="text-muted font-size-sm font-weight-bold">
                    Progress
                </span>
            </div>
            <div class="progress progress-xs w-100" v-if="percentage <= 40">
                <div class="progress-bar bg-danger" role="progressbar" :style="{'width': `${percentage}%`}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress progress-xs w-100" v-if="percentage > 40 && percentage <= 70">
                <div class="progress-bar bg-warning" role="progressbar" :style="{'width': `${percentage}%`}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress progress-xs w-100" v-if="percentage > 70 && percentage <= 99">
                <div class="progress-bar bg-success" role="progressbar" :style="{'width': `${percentage}%`}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress progress-xs w-100" v-if="percentage === 100">
                <div class="progress-bar bg-primary" role="progressbar" :style="{'width': `${percentage}%`}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class ProgressIndicator extends Vue {
    @Prop() percentage: number
    @Prop() header: boolean
}
</script>
