<template>
  <v-app>
    <client-only>
      <div id="kt_header_mobile" class="header-mobile  header-mobile-fixed ">
        <!--begin::Logo-->
        <a href="index.html">
          <img alt="Logo" src="/media/logos/logo-letter-1.png" class="logo-default max-h-30px"/>
        </a>
        <!--end::Logo-->

        <!--begin::Toolbar-->
        <div class="d-flex align-items-center">
          <button class="btn rounded-0 p-0 burger-icon burger-icon-left" id="kt_header_mobile_toggle">
            <span></span>
          </button>

          <button class="btn btn-hover-icon-primary p-0 ml-5" id="kt_sidebar_mobile_toggle">
				<span class="svg-icon svg-icon-xl"><!--begin::Svg Icon | path:assets/media/svg/icons/Design/Substract.svg--><svg
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
          viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <path
          d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z"
          fill="#000000" fill-rule="nonzero"/>
        <path
          d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z"
          fill="#000000" opacity="0.3"/>
    </g>
</svg><!--end::Svg Icon--></span></button>

          <button class="btn btn-hover-icon-primary p-0 ml-2" id="kt_aside_mobile_toggle">
				<span class="svg-icon svg-icon-xl"><!--begin::Svg Icon | path:assets/media/svg/icons/General/User.svg--><svg
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
          viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24"/>
        <path
          d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
          fill="#000000" fill-rule="nonzero" opacity="0.3"/>
        <path
          d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
          fill="#000000" fill-rule="nonzero"/>
    </g>
</svg><!--end::Svg Icon--></span></button>
        </div>
        <!--end::Toolbar-->
      </div>
      <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="d-flex flex-row flex-column-fluid page">
          <!--begin::Aside-->
          <div class="aside aside-left d-flex flex-column " id="kt_aside">
            <!--begin::Brand-->
            <div class="aside-brand d-flex flex-column align-items-center flex-column-auto pt-5 pt-lg-18 pb-10">
              <!--begin::Logo-->
              <div class="btn p-0 symbol symbol-60 symbol-light-primary" href="?page=index" id="kt_quick_user_toggle">
                <div class="symbol-label ">
                  <img alt="Logo" src="/media/svg/avatars/001-boy.svg" class="h-75 align-self-end"/>
                </div>
              </div>
              <!--end::Logo-->
            </div>
            <!--end::Brand-->

            <!--begin::Nav Wrapper-->
            <div class="aside-nav d-flex flex-column align-items-center flex-column-fluid pb-10">
              <!--begin::Nav-->
              <ul class="nav flex-column">
                <!--begin::Item-->
                <a-tooltip placement="right" v-for="(menitem, index) of menu" :key="index">
                  <template slot="title">
                    {{$t(`${menitem.label}`)}}
                  </template>
                  <li class="nav-item mb-2">
                    <a href="javascript:;" @click="onClickMenu(menitem)" class="nav-link btn btn-icon btn-hover-text-primary btn-lg active">
                      <i :class="menitem.icon"></i>
                    </a>
                  </li>
                </a-tooltip>
              </ul>
              <!--end::Nav-->
            </div>
            <!--end::Nav Wrapper-->

            <!--begin::Footer-->
            <div class="aside-footer d-flex flex-column align-items-center flex-column-auto py-8">

              <!--begin::Quick Panel-->
              <a href="#" class="btn btn-icon btn-hover-text-primary btn-lg mb-1" id="kt_quick_panel_toggle"
                 data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window"
                 title="Quick Panel">
				<span class="svg-icon svg-icon-xxl"><!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg--><svg
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
          viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"/>
        <path
          d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
          fill="#000000" opacity="0.3"/>
    </g>
</svg><!--end::Svg Icon--></span> </a>
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
  import menudata from "../constants/menu";

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
        subs: []
      }
    },
    mounted() {
      const merpath = this.$route.path.split('/')
      const findMenu = menudata.find(item => item.id === merpath[2])
      if (findMenu.subs) {
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
      }
    },
    watch: {
      $route: function(val){
        const merpath = val.path.split('/')
        const findMenu = menudata.find(item => item.id === merpath[2])
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
