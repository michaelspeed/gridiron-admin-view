<template>
    <div>
        <div class="air__utils__heading">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5>Roles</h5>
                <button type="button" class="btn btn-primary btn-sm mr-2 mb-2" @click="$router.push('/app/administrator-menu/roles/createrole')">
                    Add Roles
                </button>
            </div>
        </div>
        <v-card>
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="roles === undefined ? [] : roles.edges"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    :suppressPaginationPanel="true" :enableRtl="false">
            </ag-grid-vue>
        </v-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {GetAllRolesDocument} from '../../../../gql';
    import RoleActions from '../../../../components/roles/RoleActions.vue';

    @Component({
        layout: 'console',
        components: {
            RoleActions
        },
        apollo: {
            roles: {
                query: GetAllRolesDocument,
                pollInterval: 3000,
                error (error) {
                    console.error('We\'ve got an error!', error)
                },
            }
        }
    })
    export default class Index extends Vue {
        private gridOptions: any = {};
        private gridApi: any = null;
        private columnDefs = [
            {
                headerName: 'Code',
                filter: false,
                field: 'node.code'
            },
            {
                headerName: 'Description',
                filter: false,
                field: 'node.description'
            },
            {
                headerName: 'Actions',
                cellRendererFramework: 'RoleActions'
            }
        ]
        private defaultColDef = {
            sortable: true,
            editable: false,
            resizable: true,
            suppressMenu: true,
            filter: false
        };
        private roles

        @Watch('roles')
        onRoles() {
            console.log(this.roles)
        }

        mounted() {
            this.gridApi = this.gridOptions!.api;
            this.gridApi!.sizeColumnsToFit();
        }

    }
</script>

