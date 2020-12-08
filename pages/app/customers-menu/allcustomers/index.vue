<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">All Customers</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="!$apollo.queries.userAggregate.loading">{{userAggregate.count.id}} Total</span>
                                <div class="ml-5">
                                    <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..." v-model="search"/>
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

                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <v-sheet elevation="4">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.users.loading">
                            <div class="spinner spinner-primary spinner-lg mr-15"></div>
                        </div>
                        <ag-grid-vue
                            v-if="!$apollo.queries.users.loading"
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material ag-grid-table"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="users"
                            colResizeDefault="shift"
                            :animateRows="true"
                            :floatingFilter="true"
                            :pagination="true"
                            @grid-ready="onGridReady"
                            :suppressPaginationPanel="true" :enableRtl="false">
                        </ag-grid-vue>
                    </div>
                </v-sheet>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {GetAllUsersDocument, GetUsersAggregateDocument} from "~/gql";
    import UserActions from "~/components/users/userActions.vue";

    @Component({
        components: {
            UserActions
        },
        layout: 'console',
        apollo: {
            users: {
                query: GetAllUsersDocument,
                variables() {
                    return {
                        limit: this.limit,
                        iLike: `%${this.search}%`,
                        offset: (this.page - 1) * this.limit
                    }
                }
            },
            userAggregate: {
                query: GetUsersAggregateDocument,
                variables() {
                    return {
                        iLike: `%${this.search}%`
                    }
                }
            }
        }
    })
    export default class AllCustomers extends Vue {
        private search = ''
        private limit = 50
        private page = 1

        private users

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
                headerName: 'Actions',
                cellRendererFramework: 'UserActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true
        };

        @Watch('users')
        onChangUsers() {
            console.log(this.users)
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

    }
</script>
