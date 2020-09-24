<template>
    <div class="mt-5">
        <ProgressIndicator :percentage="calculateProgress()" :header="false"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ProgressIndicator from "../progress/progress-indicator.vue";

@Component({
    components: {
        ProgressIndicator
    }
})
export default class OrderProgress extends Vue {
    private params

    calculateProgress() {
        switch (this.params.data.stage) {
            case 'CREATED': {
                return 20
            }
                break;
            case 'PACKAGED': {
                return 40
            }
                break;
            case 'PROCESSED': {
                return 60
            }
                break;
            case 'SHIPPED': {
                return 80
            }
                break;
            case 'DELIVERED': {
                return 100
            }
                break;
            case 'RETURNINITIATED': {
                return 30
            }
                break;
            case 'RETURNED': {
                return 90
            }
                break;
            case 'RETURNEDREFUNDED': {
                return 100
            }
                break;
            default: {
                return 10
            }
        }
    }
}
</script>
