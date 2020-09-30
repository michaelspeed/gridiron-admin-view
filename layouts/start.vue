<template>
    <v-app>
        <router-view/>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Header from '../components/Navigation/Header.vue';

    @Component({
        components: {
            Header
        },
        head: {
            bodyAttrs: {
                "data-app": "data-app"
            }
        },
    })
    export default class  Start extends Vue {

    }
</script>

<style>
    page-enter-active, .page-leave-active {
        transition: all .30s ease-out;
    }
    .page-enter, .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }
</style>
