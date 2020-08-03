<template>
    <div>
        <a-button type="primary" size="small" @click="$router.push(`/app/seo-menu/url-rewrites/${params.data.node.id}`)">Edit</a-button>
        <a-button type="danger" size="small" :disabled="checkData()">Delete</a-button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class SeoActions extends Vue {
        private params

        checkData() {
            return !(this.params.data.node.variant === null && this.params.data.node.collection === null);
        }
    }
</script>
