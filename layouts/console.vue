<template>
    <v-app>
        <client-only>
            <div class="d-flex flex-column flex-root">
                <!--begin::Page-->
                <div class="d-flex flex-row flex-column-fluid page">
                    <!--begin::Aside-->
                    <div class="aside aside-left d-flex flex-column " id="kt_aside">

                        <!--begin::Nav Wrapper-->
                        <div
                            class="aside-nav d-flex flex-column align-items-center flex-column-fluid pb-10 pt-10 pt-lg-22">
                            <!--begin::Nav-->
                            <ul class="nav flex-column" v-if="admin">
                                <!--begin::Item-->
                                <a-popover placement="right" v-for="(menitem, index) of adminMenu" :key="index">
                                    <template slot="title">
                                        <span class="text-primary font-size-h3">{{$t(`${menitem.label}`)}}</span>
                                    </template>
                                    <template slot="content">
                                        <ul class="navi navi-hover navi-active navi-accent" v-if="!menitem.subs">
                                            <li class="navi-item">
                                                <a class="navi-link" href="javascript:;" @click="$router.push(menitem.to)">
                                                    <span class="navi-icon"><i class="flaticon2-dashboard"></i></span>
                                                    <span class="navi-text">{{$t(`${menitem.label}`)}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="navi navi-hover navi-active navi-accent" v-if="menitem.subs">
                                            <li class="navi-item" v-for="(subitem) of menitem.subs" :key="subitem.id">
                                                <a class="navi-link" href="javascript:;" @click="$router.push(subitem.to)">
                                                    <span class="navi-icon"><i class="flaticon2-hexagonal"></i></span>
                                                    <span class="navi-text">{{$t(`${subitem.label}`)}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </template>
                                    <li class="nav-item mb-2">
                                        <a href="javascript:;" @click="onClickMenu(menitem)"
                                           class="nav-link btn btn-icon btn-hover-text-primary btn-lg active">
                                            <i :class="menitem.icon"></i>
                                        </a>
                                    </li>
                                </a-popover>
                            </ul>
                            <ul class="nav flex-column" v-if="vendor">
                                <!--begin::Item-->
                                <a-popover placement="right" v-for="(menitem, index) of vendorMenu" :key="index">
                                    <template slot="title">
                                        <span class="text-primary font-size-h3">{{$t(`${menitem.label}`)}}</span>
                                    </template>
                                    <template slot="content">
                                        <ul class="navi navi-hover navi-active navi-accent" v-if="!menitem.subs">
                                            <li class="navi-item">
                                                <a class="navi-link" href="javascript:;" @click="$router.push(menitem.to)">
                                                    <span class="navi-icon"><i class="flaticon2-dashboard"></i></span>
                                                    <span class="navi-text">{{$t(`${menitem.label}`)}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="navi navi-hover navi-active navi-accent" v-if="menitem.subs">
                                            <li class="navi-item" v-for="(subitem) of menitem.subs" :key="subitem.id">
                                                <a class="navi-link" href="javascript:;" @click="$router.push(subitem.to)">
                                                    <span class="navi-icon"><i class="flaticon2-hexagonal"></i></span>
                                                    <span class="navi-text">{{$t(`${subitem.label}`)}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </template>
                                    <li class="nav-item mb-2">
                                        <a href="javascript:;" @click="onClickMenu(menitem)"
                                           class="nav-link btn btn-icon btn-hover-text-primary btn-lg active">
                                            <i :class="menitem.icon"></i>
                                        </a>
                                    </li>
                                </a-popover>
                            </ul>
                            <!--end::Nav-->
                        </div>
                        <!--end::Nav Wrapper-->

                        <!--begin::Footer-->
                        <div class="aside-footer d-flex flex-column align-items-center flex-column-auto py-8">

                            <!--begin::Quick Panel-->
                            <a href="javascript:;" @click="overlay = true"
                               class="btn btn-icon btn-hover-text-primary btn-lg mb-1"
                               id="kt_quick_panel_toggle">
                                <i class="la la-eject"></i>
                            </a>
                            <!--end::Quick Panel-->

                        </div>
                        <!--end::Footer-->
                    </div>
                    <!--end::Aside-->

                    <!--begin::Wrapper-->
                    <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <!--begin::Header-->
                        <Header :sub="subs"/>
                        <!--end::Header-->

                        <!--begin::Content-->
                        <div class="content  d-flex flex-column flex-column-fluid" id="kt_content">
                            <router-view/>
                        </div>
                        <!--end::Content-->

                        <!--begin::Footer-->
                        <Footer/>
                        <!--end::Footer-->
                    </div>
                    <!--end::Wrapper-->

                    <!--begin::Aside Secondary-->
                    <Sidebar/>
                    <!--end::Aside Secondary-->
                </div>
                <!--end::Page-->
            </div>
        </client-only>

        <!-- begin::Notifications Panel-->
        <Notifications/>
        <!-- end::Notifications Panel-->

        <!--begin::Quick Actions Panel-->
        <Actions/>
        <!--end::Quick Actions Panel-->

        <!-- begin::User Panel-->
        <UserPanel/>
        <!-- end::User Panel-->


        <!--begin::Quick Panel-->
        <QuickPanel/>
        <!--end::Quick Panel-->


        <!--begin::Scrolltop-->
        <div id="kt_scrolltop" class="scrolltop">
	<span class="svg-icon"><!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Up-2.svg--><svg
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
        viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24"/>
        <rect fill="#000000" opacity="0.3" x="11" y="10" width="2" height="10" rx="1"/>
        <path
            d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
            fill="#000000" fill-rule="nonzero"/>
    </g>
</svg><!--end::Svg Icon--></span></div>
        <!--end::Scrolltop-->
        <v-overlay :value="overlay">
            <div class="w-100">
                <div class="card card-custom card-stretch gutter-b">
                    <div class="card-body d-flex p-0">
                        <div class="flex-grow-1 bg-danger p-12 pb-40 card-rounded flex-grow-1 bgi-no-repeat"
                             style="background-position: calc(100% + 0.5rem) bottom; background-size: 35% auto; background-image: url(/media/svg/humans/custom-7.svg)">

                            <div class="d-flex justify-content-center align-items-center">
                                <p class="text-inverse-danger pt-10 pb-5 font-size-h3 font-weight-bolder line-height-lg">
                                    Leave?
                                </p>
                            </div>

                            <a href="javascript:;" class="btn btn-warning font-weight-bold py-2 px-6" @click="onLogout">Logout
                                Now</a>

                            <div class="d-flex justify-content-center align-items-center pt-10">
                                <a href="javascript:;" @click="overlay = false">
                                    <i class="fas fa-times text-primary font-size-h1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-overlay>
    </v-app>
</template>

<script>
    import Header from "../components/Navigation/Header";
    import Sidebar from "../components/Sidebar/Sidebar";
    import Footer from "../components/footer/Footer";
    import Notifications from "../components/notification/Notification";
    import Actions from "../components/actions/Actions";
    import UserPanel from "../components/actions/UserPanel";
    import QuickPanel from "../components/actions/QuickPanel";
    import {mapState} from "vuex";
    import {Component, Vue} from "vue-property-decorator";
    import {adminMenuData, menudata, vendorMenuData} from "../constants/menu";

    export default Vue.extend(({
        components: {
            Header,
            Footer,
            Notifications,
            Sidebar
        },
        head: {
            bodyAttrs: {
                class: 'header-fixed header-mobile-fixed sidebar-enabled page-loading',
                id: 'kt_body'
            },
        },
        data() {
            return {
                datascroll: 'off',
                menu: menudata,
                subs: [],
                overlay: false,
                adminMenu: adminMenuData,
                vendorMenu: vendorMenuData
            }
        },
        mounted() {
            const merpath = this.$route.path.split('/')
            const findMenu = this.admin ? this.adminMenu.find(item => item.id === merpath[2]) : this.vendorMenu.find(item => item.id === merpath[2])
            if (findMenu && findMenu.subs) {
                this.subs = findMenu.subs
            } else {
                this.subs = []
            }
            window.addEventListener("scroll", this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        },
        methods: {
            onScroll(event) {
                if (window.top.scrollY > 111) {
                    document.body.setAttribute('data-header-scroll', 'on')
                } else {
                    document.body.setAttribute('data-header-scroll', 'off')
                }
            },
            onClickMenu(item) {
                if (item.subs !== undefined) {
                    this.$router.push(item.subs[0].to)
                    this.subs = item.subs
                } else {
                    this.$router.push(item.to)
                    this.subs = []
                }
            },
            onLogout() {
                this.$store.dispatch('admin/resetAllStore')
                this.$apolloHelpers.onLogout().then(() => {
                    this.$router.push({
                        path: '/'
                    })
                })
            }
        },
        watch: {
            $route: function (val) {
                const merpath = val.path.split('/')
                const findMenu = this.admin ? this.adminMenu.find(item => item.id === merpath[2]) : this.vendorMenu.find(item => item.id === merpath[2])
                if (findMenu.subs) {
                    this.subs = findMenu.subs
                } else {
                    this.subs = []
                }
            },
            admin: function (val) {
                const merpath = this.$route.path.split('/')
                const findMenu = this.admin ? this.adminMenu.find(item => item.id === merpath[2]) : this.vendorMenu.find(item => item.id === merpath[2])
                if (findMenu.subs) {
                    this.subs = findMenu.subs
                } else {
                    this.subs = []
                }
            },
            vendor: function (val) {
                const merpath = this.$route.path.split('/')
                const findMenu = this.admin ? this.adminMenu.find(item => item.id === merpath[2]) : this.vendorMenu.find(item => item.id === merpath[2])
                if (findMenu.subs) {
                    this.subs = findMenu.subs
                } else {
                    this.subs = []
                }
            }
        },
        computed: {
            onGetRoutes() {
                const paths = this.$route.path.split('/')
                return paths
            },
            ...mapState({
                admin: (store) => store.admin.administrator,
                store: (store) => store.admin.store,
                vendorStore: (store) => store.admin.vendorStore,
                vendor: (store) => store.admin.vendor
            })
        },
    }))
</script>

<style>
    body {
        font-family: Poppins, Helvetica, "sans-serif" !important;
    }

    .page-enter-active, .page-leave-active {
        transition: all .30s ease-out;
    }

    .page-enter, .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }
</style>
