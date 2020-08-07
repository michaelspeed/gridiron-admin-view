<template>
    <div>
        <button type="button" class="btn btn-light-primary btn-xs" style="line-height: 0.5px; height: 30px" @click="editRule = true">Edit / View</button>
        <button type="button" class="btn btn-light-danger btn-xs" style="line-height: 0.5px; height: 30px" :disabled="!admin">Delete</button>
        <v-bottom-sheet
                v-model="editRule"
                inset
        >
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="editRule = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Edit Tax Rule</span>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Rule Name</label>
                        <a-input v-model="params.data.name" :disabled="!admin"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-sm btn-light-primary" :disabled="!admin">Update Rule</button>
                        <button type="button" class="btn btn-sm btn-light-danger" @click="editRule = false">Cancel</button>
                    </div>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapState} from "vuex";

    @Component({
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                vendor: (store: any) => store.admin.vendor,
            }),
        },
    })
    export default class TaxRulesActions extends Vue {
        private editRule = false
        private params
        private admin
        private vendor

        mounted() {
            console.log(this.params)
        }

    }
</script>
