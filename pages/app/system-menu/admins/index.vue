<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Administrator</h5>
                <button type="button" class="btn btn-primary" @click="create = true">Add Administrator</button>
            </div>
        </div>
        <v-card>
            <v-card-title>
                <div class="d-flex align-items-center">
                    <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                            style="width: 500px"
                            v-model="search"
                    />
                    <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small color="#F44336" v-if="search !== ''">
                        <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                </div>
            </v-card-title>
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
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
        </v-card>
        <v-bottom-sheet v-model="create" inset>
            <v-toolbar flat>
                <v-btn fab @click="create = false"><v-icon>arrow_back</v-icon></v-btn>
                <v-toolbar-title>Add Administrator</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="p-3 bg-white">
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
                    <label>Administrator Type</label>
                    <v-select
                            v-model="adminType"
                            :items="adminMenu"
                            solo
                    ></v-select>
                    <small class="form-text text-muted">{{$t('store.storenameinfo')}}</small>
                </div>
            </div>
            <div class="p-3 bg-white" v-if="!loading">
                <button type="button" class="btn btn-primary" @click="onCreateAdministrator">Create Administrator</button>
                <button type="button" class="btn btn-danger" @click="create = false">Cancel</button>
            </div>
            <div class="p-3 bg-white" v-if="loading">
                <v-progress-circular
                        :size="50"
                        color="primary"
                        indeterminate
                ></v-progress-circular>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {CreateAdministratorDocument, GetAllAdministratorDocument} from '../../../../gql';
    import {AdministratorEnum} from '../../../../utils/AdministratorEnum';

    @Component({
        layout: 'console',
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
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
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
                    phone: this.phone
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
