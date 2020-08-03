<template>
    <div>
        <button
                v-if="onCheckTypes()"
                type="button" class="btn btn-outline-primary btn-xs" style="line-height: 0.5px; height: 30px" @click="$router.push(`/app/administrator-menu/roles/editrole/${params.data.node.id}`)">Edit</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {RoleType} from '../../utils/PermissionEnum';

    @Component
    export default class RoleActions extends Vue {
        params: any
        onCheckTypes() {
            return this.params.data.node.type !== RoleType.ADMINISTRATOR || this.params.data.node.type !== RoleType.VENDOR
        }
    }
</script>
