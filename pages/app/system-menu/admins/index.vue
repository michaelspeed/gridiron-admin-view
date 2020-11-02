<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Administrator</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"></span>
                                <div class="ml-5">
                                    <!--<div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..." v-model="search"/>
                                        <div class="input-group-append">
                                            <i class="fas fa-search"></i>
                                        </div>
                                    </div>-->
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
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="create = true">
                                Add Administrator
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-scale-transition>
                    <div class="card">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.GetAllAdministrator.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <div class="card-body" v-if="!$apollo.queries.GetAllAdministrator.loading">
                            <ag-grid-vue
                                style="height: 100vh"
                                ref="agGridTable"
                                :gridOptions="gridOptions"
                                class="ag-theme-material"
                                :columnDefs="columnDefs"
                                :defaultColDef="defaultColDef"
                                :rowData="GetAllAdministrator"
                                colResizeDefault="shift"
                                :animateRows="true"
                                :floatingFilter="true"
                                :pagination="true"
                                @grid-ready="onGridReady"
                                :suppressPaginationPanel="true" :enableRtl="false">
                            </ag-grid-vue>
                        </div>
                    </div>
                </v-scale-transition>
            </div>
        </div>
        <v-bottom-sheet v-model="create" inset transition="scroll-y-transition">
            <div class="card">
                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                    <h3 class="card-title align-items-start flex-column">
                        <a href="javascript:;" @click="create = false">
                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                        </a>
                        <span class="card-label font-weight-bolder text-dark ml-6">Add Administrator</span>
                    </h3>
                </div>
                <div class="card-body" style="margin-top: -50px">
                    <div class="form-group">
                        <label>Enter First Name</label>
                        <a-input v-model="fname"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Enter Last Name</label>
                        <a-input v-model="lname"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Enter Email</label>
                        <a-input v-model="email"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <a-input v-model="phone"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <a-input v-model="password" type="password"></a-input>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="form-group">
                        <label>Administrator Type</label>
                        <v-select
                            v-model="adminType"
                            :items="adminMenu"
                        ></v-select>
                        <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                    </div>
                    <div class="p-3 bg-white">
                        <button type="button" class="btn btn-light-primary" @click="onCreateAdministrator">Create Administrator</button>
                        <button type="button" class="btn btn-light-danger" @click="create = false">Cancel</button>
                    </div>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {CreateAdministratorDocument, GetAllAdministratorDocument} from '../../../../gql';
    import {AdministratorEnum} from '../../../../utils/AdministratorEnum';
    import AdministratorActions from "~/components/administrator/administratorActions.vue";

    @Component({
        layout: 'console',
        middleware: 'adminonly',
        apollo: {
            GetAllAdministrator: {
                query: GetAllAdministratorDocument,
                variables() {
                    return {
                        search: this.search
                    }
                },
                pollInterval: 3000
            }
        },
        components: {
            AdministratorActions
        }
    })
    export default class Admins extends Vue {
        private GetAllAdministrator
        private search = ''
        private create = false
        private loading = false

        // Create
        private fname = ''
        private lname = ''
        private email = ''
        private adminMenu = Object.values(AdministratorEnum)
        private adminType = ''
        private phone = ''
        private password = ''

        //table
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'First Name',
                filter: false,
                field: 'firstName'
            },
            {
                headerName: 'Last Name',
                filter: false,
                field: 'lastName'
            },
            {
                headerName: 'Email',
                filter: false,
                field: 'emailAddress'
            },
            {
                headerName: 'Type',
                filter: false,
                field: 'type'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'AdministratorActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filter: false
        };

        mounted() {
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        onCreateAdministrator() {
            console.log(this.phone)
            this.loading = true
            this.$apollo.mutate({
                mutation: CreateAdministratorDocument,
                variables: {
                    type: this.adminType,
                    email: this.email,
                    fname: this.fname,
                    lname: this.lname,
                    phone: this.phone,
                    password: this.password
                }
            }).then(value => {
                this.loading = false
                this.create = false
            }).catch(error => {
                this.loading = false
                console.log(error);
            })
        }

        @Watch('GetAllAdministrator')
        onChangeAdmin() {
            console.log(this.GetAllAdministrator)
        }
    }
</script>
