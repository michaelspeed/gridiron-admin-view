<template>
    <div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        layout: 'console',
        middleware: 'adminonly',
    })
    export default class AllReviews extends Vue {

    }
</script>
