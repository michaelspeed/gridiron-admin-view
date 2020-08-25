<template>
    <div>
        <v-card-text style="height: 300px;">
            <v-text-field
                v-model="code"
                label="search zip code"
                type="number"
            ></v-text-field>
            <v-radio-group v-model="allZipsOfVendor" column multiple>
                <v-radio :label="pins.code.toString()" :value="pins.id" v-for="pins of zips" :key="pins.id"></v-radio>
            </v-radio-group>
        </v-card-text>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {AllZipsDocument, SearchAllZipDocument} from "~/gql";

    @Component({
        apollo: {
            zips: {
                query: SearchAllZipDocument,
                variables() {
                    return {
                        code: this.codeval,
                        limit: 10,
                        offset: 0
                    }
                },
                pollInterval: 4000
            }
        }
    })
    export default class ZipAddVendor extends Vue {

        private allZipsOfVendor: any[] = []
        private zips

        private code = ''
        private codeval = 0

        @Watch('allZipsOfVendor')
        onZipsChange() {
            this.$emit('onchangezip', this.allZipsOfVendor)
        }

        @Watch('code')
        onCodeChange() {
            this.codeval = parseFloat(this.code)
        }

    }
</script>
