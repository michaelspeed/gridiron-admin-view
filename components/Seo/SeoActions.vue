<template>
    <div>
        <a href="javascript:;" class="btn btn-light-primary btn-sm" @click="$router.push(`/app/seo-menu/url-rewrites/${params.data.id}`)">Edit</a>
        <a href="javascript:;" class="btn btn-sm" :class="{'btn-light-danger': !checkData(), 'btn-light-dark': checkData()}" :disabled="checkData()">Delete</a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class SeoActions extends Vue {
        private params

        checkData() {
            return !(this.params.data.variant === null && this.params.data.collection === null);
        }
    }
</script>
