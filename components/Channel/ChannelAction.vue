<template>
    <div>
        <button type="button" class="btn btn-outline-primary btn-xs" style="line-height: 0.5px; height: 30px">Edit</button>
        <button type="button" class="btn btn-outline-danger btn-xs" style="line-height: 0.5px; height: 30px">Delete</button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class ChannelAction extends Vue {

    }
</script>
