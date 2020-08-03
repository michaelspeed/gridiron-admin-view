<template>
    <div class="air__layout air__layout--hasSider">
        <div class="air__layout">
            <v-app>
                <div class="air__layout__content">
                    <div class="air__layout__content">
                        <div class="air__utils__content">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </v-app>
        </div>
    </div>
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
                class: 'air__menu--flyout air__menu--white air__menu__submenu--blue air__layout--grayBackground air__layout--cardsShadow',
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
