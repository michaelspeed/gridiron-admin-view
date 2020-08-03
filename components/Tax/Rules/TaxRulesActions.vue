<template>
    <div>
        <button type="button" class="btn btn-outline-primary btn-xs" style="line-height: 0.5px; height: 30px" @click="editRule = true">Edit</button>
        <button type="button" class="btn btn-outline-danger btn-xs" style="line-height: 0.5px; height: 30px">Delete</button>
        <v-bottom-sheet
                v-model="editRule"
                inset
        >
            <v-sheet>
                <v-toolbar flat>
                    <v-btn fab @click="editRule = false"><v-icon>arrow_back</v-icon></v-btn>
                    <v-toolbar-title>Edit Tax Rule</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <div class="p-3 bg-white">
                    <div class="form-group">
                        <label>Rule Name</label>
                        <a-input v-model="params.data.node.name"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary">Update Rule</button>
                        <button type="button" class="btn btn-danger" @click="editRule = false">Cancel</button>
                    </div>
                </div>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class TaxRulesActions extends Vue {
        private editRule = false
        private params

        mounted() {
            console.log(this.params)
        }

    }
</script>
