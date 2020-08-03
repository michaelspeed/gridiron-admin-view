<template>
    <div class="air__layout air__layout--hasSider">
        <client-only>
            <SideBar/>
        </client-only>
        <div class="air__layout">
            <client-only>
                <Header/>
            </client-only>
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

<script>
    import SideBar from "../components/Sidebar/SideBar";
    import Header from "../components/Navigation/Header";

    export default {
        components: {
            SideBar,
            Header
        },
        head: {
            bodyAttrs: {
                class: 'air__menu--flyout air__menu--dark air__menu__submenu--blue',
                "data-app": "data-app"
            }
        },
        mounted() {
        },
        computed: {
            onGetRoutes(){
                const paths = this.$route.path.split('/')
                return paths
            }
        },
        /*head() {
            return {
                bodyAttrs: {
                    class: 'dark-theme'
                }
            }
        }*/
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
