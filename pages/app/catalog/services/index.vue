<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Serviceable</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <div class="ml-5">
                                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..."/>
                                        <div class="input-group-append">
                                            <i class="fas fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Search Form-->
                        </div>
                        <!--end::Details-->

                        <!--begin::Toolbar-->
                        <div class="d-flex align-items-center">
                            <!--begin::Button-->
                            <a href="#" class="">

                            </a>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="add = true">
                                Add Serviceable
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-sheet elevation="4">
                    <div class="card-body">
                        <ag-grid-vue
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="serviceables"
                            colResizeDefault="shift"
                            :animateRows="true"
                            :floatingFilter="true"
                            :pagination="true"
                            @grid-ready="onGridReady"
                            :suppressPaginationPanel="true" :enableRtl="false">
                        </ag-grid-vue>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination pagination-circle justify-content-end">
                                <li class="page-item"><a class="page-link" href="javascript:;" @click="onOffsetMinus"><v-icon color="primary">
                                    mdi-chevron-left
                                </v-icon></a></li>
                                <li class="page-item"><a class="page-link" href="javascript:;" @click="onOffsetAdd"><v-icon color="primary">
                                    mdi-chevron-right
                                </v-icon></a></li>
                            </ul>
                        </nav>
                    </div>
                </v-sheet>
            </div>
        </div>
        <v-bottom-sheet v-model="add" inset>
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="add = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Add Serviceable</span>
                    </h3>
                </div>
                <div class="card-body" v-if="!loading">
                    <div class="form-group">
                        <label>Enter Name</label>
                        <a-input v-model="name"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Select Type</label>
                        <a-select style="width: 100%; z-index: 10000" @change="handleChange">
                            <a-select-option value="VENDOR">
                                VENDOR
                            </a-select-option>
                            <a-select-option value="PRODUCT">
                                PRODUCT
                            </a-select-option>
                        </a-select>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Select Mode</label>
                        <a-select style="width: 100%" @change="handleModeChange">
                            <a-select-option value="IMMEDIATE">
                                IMMEDIATE
                            </a-select-option>
                            <a-select-option value="DATE">
                                DATE
                            </a-select-option>
                        </a-select>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="row">
                        <a href="javascript:;" class="btn btn-light-primary font-weight-bolder font-size-sm" @click="onCreateServiceable">Create Serviceable</a>
                    </div>
                </div>
                <div class="card-body" v-if="loading">
                    <v-progress-linear
                        color="lime"
                        indeterminate
                        reverse
                    ></v-progress-linear>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CreateOneServiceableDocument, GetServiceablesDocument, Serviceable} from "~/gql";

@Component({
    layout: 'console',
    apollo: {
        serviceables: {
            query: GetServiceablesDocument,
            variables() {
                return {
                    limit: this.limit,
                    offset: this.offset * this.limit,
                    iLike: `%${this.search}%`
                }
            },
            pollInterval: 3000
        }
    }
})
export default class Services extends Vue {
    private add: boolean = false

    private name = ''
    private type = ''
    private mode = ''

    private serviceables: Serviceable[]

    private limit = 50
    private offset = 0
    private search: string = ''

    private loading = false

    private hasPrev: boolean = false;
    private hasNext: boolean = false;

    private gridOptions: any = {};
    private gridApi: any = null;
    private defaultColDef = {
        sortable: true,
        editable: false,
        resizable: true,
        suppressMenu: true
    };
    private columnDefs = [
        {
            headerName: 'Name',
            filter: false,
            field: 'name'
        },
        {
            headerName: 'Type',
            filter: false,
            field: 'type'
        },
        {
            headerName: 'Mode',
            filter: false,
            field: 'mode'
        }
    ]

    onOffsetAdd() {
        this.offset = this.offset + 1;
    }

    onOffsetMinus() {
        if (this.offset !== 0) {
            this.offset = this.offset - 1;
        }
    }

    onGridReady() {
        this.gridApi = this.gridOptions!.api;
        this.gridApi!.sizeColumnsToFit();
    }

    handleChange(value) {
        this.type = value;
    }

    handleModeChange(value) {
        this.mode = value
    }

    onCreateServiceable() {
        this.loading = true
        this.$apollo.mutate({
            mutation: CreateOneServiceableDocument,
            variables: {
                name: this.name,
                type: this.type,
                mode: this.mode
            }
        })
        .then(() => {
            this.loading = false
            this.add = false
        })
        .catch(e => {
            this.loading = false
            this.$message.error(e.message)
        })
    }
}
</script>

<style>
.ant-select-dropdown {
    z-index: 1000;
}
</style>
