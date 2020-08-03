<template>
    <div class="air__menuLeft">
        <div class="air__menuLeft__outer">
            <div class="air__menuLeft__mobileToggleButton air__menuLeft__mobileActionToggle">
                <span></span>
            </div>
            <div class="air__menuLeft__toggleButton air__menuLeft__actionToggle">
                <span></span>
                <span></span>
            </div>
            <a href="javascript: void(0);" class="air__menuLeft__logo">
                <img src="/components/core/img/air-logo.png" alt="Air UI" />
                <div class="air__menuLeft__logo__name">{{$t('pages.appname')}}</div>
                <div class="air__menuLeft__logo__descr">{{$t('pages.tag-line')}}</div>
            </a>
            <perfect-scrollbar>
                <div class="air__menuLeft__container air__customScroll">
                    <ul class="air__menuLeft__list">
                        <li class="air__menuLeft__category">
                            <span>Menu</span>
                        </li>
                        <li :class="{'air__menuLeft__item': true, 'air__menuLeft__submenu': menuitem.subs !== undefined}" v-for="menuitem of menu" :key="menuitem.id">
                            <a href="javascript: void(0)" class="air__menuLeft__link ">
                                <i class="material-icons air__menuLeft__icon" style="font-size: 16px">{{menuitem.icon}}</i>
                                <span>{{$t(`${menuitem.label}`)}}</span>
                            </a>
                            <ul class="air__menuLeft__list" v-if="menuitem.subs !== undefined">
                                <li class="air__menuLeft__item" v-for="subs of menuitem.subs">
                                    <a :href="subs.subs === undefined ? subs.to : '#'" class="air__menuLeft__link">
                                        <span>{{$t(`${subs.label}`)}}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </perfect-scrollbar>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {PerfectScrollbar} from "vue2-perfect-scrollbar";
    import menudata from "../../constants/menu";

    @Component({
        components:{
            PerfectScrollbar
        }
    })
    export default class SideBar extends Vue{
        private tempscript: any = null;
        private scrollbarscript: any = null
        private menu: any[] = menudata

        mounted() {
            console.log(this.$route.path)
            this.tempscript = document.createElement('script');
            this.scrollbarscript = document.createElement('script');
            this.tempscript.src = '/components/menu-left/index.js';
            this.scrollbarscript.src = '/vendors/perfect-scrollbar/js/perfect-scrollbar.jquery.js';
            this.tempscript.async = true;
            this.scrollbarscript.async = true
            document.body.appendChild(this.tempscript)
            document.body.appendChild(this.scrollbarscript)
        }

        beforeDestroy(){
            if (this.tempscript !== null) {
                document.body.removeChild(this.tempscript)
            }
            if (this.scrollbarscript !== null) {
                document.body.removeChild(this.scrollbarscript)
            }
        }
    }
</script>

<style scoped>
    .air__menuLeft {

    }
</style>
