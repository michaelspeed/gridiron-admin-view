<template>
    <div>
        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.viewCodes.loading">
            <div class="spinner spinner-primary spinner-lg mr-15"></div>
        </div>
        <div class="card card-custom gutter-b" v-if="!$apollo.queries.viewCodes.loading">
            <!--begin::Header-->
            <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-dark">View Codes</span>
                    <span class="text-muted mt-3 font-weight-bold font-size-sm">Manage View Codes Here</span>
                </h3>
                <div class="card-toolbar">
                    <a href="javascript:;" class="btn btn-sm btn-success font-weight-bolder font-size-sm" @click="addView = true">
                        Add View Codes
                    </a>
                </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body py-0">
                <div class="alert alert-danger mb-5 p-5" role="alert">
                    <h4 class="alert-heading">Developers Only!</h4>
                    <p>This Section is strictly for <strong>DEVELOPERS ONLY</strong></p>
                    <div class="border-bottom border-white opacity-20 mb-5"></div>
                    <p class="mb-0">If you are not a developer. Please do not modify any of these!!!</p>
                </div>
                <!--begin::Table-->
                <div class="table-responsive">
                    <table class="table table-head-custom table-vertical-center">
                        <thead>
                        <tr class="text-left">
                            <th class="pr-0">id</th>
                            <th style="min-width: 150px">name</th>
                            <th style="min-width: 150px">value</th>
                            <th style="min-width: 150px">Description</th>
                            <th class="pr-0 text-right" style="min-width: 150px">action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="code of viewCodes">
                            <td class="pl-0">
                                <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{{code.id}}</a>
                            </td>
                            <td>
                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    {{code.name}}
                                </span>
                            </td>
                            <td>
                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    {{code.value}}
                                </span>
                            </td>
                            <td>
                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                    {{code.description}}
                                </span>
                            </td>
                            <td class="pr-0 text-right">
                                <a href="#" class="btn btn-icon btn-light btn-hover-danger btn-sm">
                                <span class="svg-icon svg-icon-md svg-icon-danger"><!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"></path>
        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"></path>
    </g>
</svg><!--end::Svg Icon--></span>                            </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--end::Table-->
            </div>
            <!--end::Body-->
        </div>
        <v-dialog v-model="addView" width="500" transition="scale-transition">
            <v-card>
                <v-card-title class="bg-primary text-white">
                    Add View Code
                </v-card-title>

                <v-card-text class="mt-5">
                    <div class="form-group">
                        <label>Name</label>
                        <a-input v-model="name"></a-input>
                    </div>
                    <div class="form-group">
                        <label>Value</label>
                        <a-input v-model="value"></a-input>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <a-textarea
                            v-model="description"
                            placeholder="Description"
                            :auto-size="{ minRows: 3, maxRows: 5 }"
                        />
                    </div>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions v-if="loading">
                    <v-progress-linear
                        color="lime"
                        indeterminate
                        reverse
                    ></v-progress-linear>
                </v-card-actions>
                <v-card-actions v-if="!loading">
                    <v-spacer></v-spacer>
                    <a href="javascript:;" class="btn btn-sm btn-light-primary font-weight-bold mr-2" @click="onAddViewCode">
                        Add View Code
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-light-danger font-weight-bold mr-2" @click="addView = !addView">
                        Cancel
                    </a>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {CreateOneViewCodeDocument, GetAllViewCodesDocument} from "~/gql";

@Component({
    apollo: {
        viewCodes: {
            query: GetAllViewCodesDocument,
            variables() {
                return {
                    limit: this.limit,
                    offset: this.offset
                }
            },
            pollInterval: 3000
        }
    }
})
export default class ViewCodes extends Vue {
    private addView = false
    private name = ''
    private value = ''
    private description = ''
    private loading = false

    private limit = 10
    private offset = 0

    private viewCodes: ViewCodes[]

    onAddViewCode(){
        this.loading = true
        this.$apollo.mutate({
            mutation: CreateOneViewCodeDocument,
            variables: {
                name: this.name,
                value: this.value,
                description: this.description
            }
        })
        .then(value => {
            this.loading = false
            this.addView = false
        })
        .catch(error => {
            this.loading = false
        })
    }
}
</script>
