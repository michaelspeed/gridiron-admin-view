<template>
    <div >
        <div class="air__utils__heading">
            <h5>System Configuration</h5>
        </div>
        <v-card>
            <v-tabs dark background-color="#161537" v-model="tabs">
                <v-tab>
                    Store Configuration
                </v-tab>
                <v-tab>
                    Zip Codes
                </v-tab>
                <v-tab>
                    Integrations
                </v-tab>
                <v-tab>
                    Task
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabs">
                <v-tab-item :key="1" style="padding: 10px">
                    <StoreConfiguration/>
                </v-tab-item>
                <v-tab-item :key="2">
                    <ZipConfiguration/>
                </v-tab-item>
                <v-tab-item :key="3">
                </v-tab-item>
                <v-tab-item :key="4">
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import StoreConfiguration from '../../../../components/System/StoreConfiguration.vue';
    import ZipConfiguration from '../../../../components/System/ZipConfiguration.vue';

    @Component({
        components: {ZipConfiguration, StoreConfiguration},
        layout: 'console',
    })
    export default class SystemConfig extends Vue {
        private tabs = '1'

    }
</script>
