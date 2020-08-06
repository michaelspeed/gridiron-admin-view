<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Zone Configuration: <span v-if="!$apollo.queries.ZoneFindOne.loading">{{ZoneFindOne.name}}</span></h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total" v-if="ZoneFindOne">{{ZoneFindOne.members.length}} Total</span>
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
                            <a href="javascript:;" class="btn btn-light-primary font-weight-bold ml-2" @click="addmember = true">
                                Add Member
                            </a>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <div class="card">
                    <div class="d-flex justify-content-center align-items-center m-20 w-100" v-if="$apollo.queries.ZoneFindOne.loading">
                        <div class="spinner spinner-primary spinner-lg mr-15"></div>
                    </div>
                    <div class="card-body" v-if="!$apollo.queries.ZoneFindOne.loading">
                        <ag-grid-vue
                            style="height: 100vh"
                            ref="agGridTable"
                            :gridOptions="gridOptions"
                            class="ag-theme-material"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="ZoneFindOne.members"
                            colResizeDefault="shift"
                            :animateRows="true"
                            :floatingFilter="true"
                            :pagination="false"
                            @grid-ready="onGridReady"
                            :suppressPaginationPanel="true" :enableRtl="false">
                        </ag-grid-vue>
                        <v-bottom-sheet inset v-model="addmember">
                            <div class="card">
                                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                                    <h3 class="card-title align-items-start flex-column">
                                        <a href="javascript:;" @click="addmember = false">
                                            <i class="fas fa-arrow-left font-size-h3 text-primary"></i>
                                        </a>
                                        <span class="card-label font-weight-bolder text-dark ml-6">Add Member Country</span>
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 col-lg-6 col-sm-12">
                                            <div class="form-group">
                                                <label>{{$t('store.storecountry')}}</label>
                                                <div>
                                                    <a-select
                                                        show-search
                                                        v-model="countryId"
                                                        filterable
                                                        placeholder="Select Default Country"
                                                        style="width: 100%"
                                                        :filter-option="filterOption"
                                                    >
                                                        <a-select-option
                                                            v-for="item in GetAllCountries"
                                                            :key="item.id"
                                                            :value="item.id">
                                                            {{item.name}}
                                                        </a-select-option>
                                                    </a-select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-white">
                                        <button type="button" class="btn btn-primary" @click="onAddCountryToZone">Add Member Country</button>
                                    </div>
                                </div>
                            </div>
                        </v-bottom-sheet>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {AddCountryToZoneDocument, GetAllCountriesDocument, ZoneFindOneDocument} from '../../../../gql';

    @Component({
        layout: 'console',
        apollo: {
            ZoneFindOne: {
                query: ZoneFindOneDocument,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                pollInterval: 5000
            },
            GetAllCountries: {
                query: GetAllCountriesDocument
            }
        }
    })
    export default class ZoneId extends Vue {
        private ZoneFindOne
        private GetAllCountries

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
                filter: true,
                field: 'name'
            },
            {
                headerName: 'Code',
                filter: false,
                field: 'code'
            },
            {
                headerName: 'Active',
                filter: false,
                valueFormatter: (data) => data.data.enabled ? 'Active': 'Disabled'
            },
        ]
        private addmember = false
        private countryId = ''

        @Watch('ZoneFindOne')
        onZoneFind() {
            console.log(this.ZoneFindOne)
        }

        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        }


        mounted() {
            this.gridApi = this.gridOptions.api;
            if (this.gridApi !== undefined) {
                this.gridApi.sizeColumnsToFit();
            }
        }

        onGridReady() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

        onAddCountryToZone() {
            const loading: any = this.$Message.loading('Action in progress..');
            this.$apollo.mutate({
                mutation: AddCountryToZoneDocument,
                variables: {
                    id: this.$route.params.id,
                    countryId: this.countryId
                }
            }).then(value => {
                loading()
                this.$message.success('Added member to Zone');
                this.countryId = ''
                this.addmember = false
            }).catch(error => {
                loading()
                this.$message.error(error.message);
            })
        }
    }
</script>
