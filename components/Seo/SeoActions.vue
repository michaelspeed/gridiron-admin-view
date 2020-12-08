<template>
    <div>
        <v-btn color="primary" text @click="$router.push(`/app/seo-menu/url-rewrites/${params.data.id}`)">Edit</v-btn>
        <v-btn color="red" text :class="{'btn-light-danger': !checkData(), 'btn-light-dark': checkData()}" :disabled="checkData()">Delete</v-btn>
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
