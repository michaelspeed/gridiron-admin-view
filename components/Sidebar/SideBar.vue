<template>
    <div class="sidebar sidebar-left d-flex flex-row-auto flex-column " id="kt_sidebar">
        <!--begin::Aside Secondary Header-->
        <div class="sidebar-header flex-column-auto pt-5 pt-lg-19 pb-5 px-5 px-lg-10">
            <!--begin::Toolbar-->
            <div class="d-flex">
                <!--begin::Desktop Search-->
                <div class="quick-search quick-search-inline flex-grow-1" id="kt_quick_search_inline">
                    <!--begin::Form-->
                    <div class="quick-search-form">
                        <div class="input-group rounded bg-light">
                            <div class="input-group-prepend">
							<span class="input-group-text">
                <i class="fas fa-search"></i>
              </span>
                            </div>

                            <input type="text" class="form-control h-40px" placeholder="Search..."/>

                            <div class="input-group-append">
							<span class="input-group-text">
								<i class="quick-search-close ki ki-close icon-sm text-muted"></i>
							</span>
                            </div>
                        </div>
                    </div>
                    <!--end::Form-->

                    <!--begin::Search Toggle-->
                    <div id="kt_quick_search_toggle" data-toggle="dropdown" data-offset="0px,1px"></div>
                    <!--end::Search Toggle-->

                    <!--begin::Dropdown-->
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-anim-up">
                        <div class="quick-search-wrapper scroll" data-scroll="true" data-height="350"
                             data-mobile-height="200">
                        </div>
                    </div>
                    <!--end::Dropdown-->
                </div>
                <!--end::Desktop Search-->
            </div>
            <!--end::Toolbar-->
        </div>
        <!--end::Aside Secondary Header-->

        <!--begin::Aside Secondary Content-->
        <div class="sidebar-content flex-column-fluid pb-10 pt-9 px-5 px-lg-10">
            <!--Title Widget-->
            <div class="d-flex justify-content-center align-items-center m-20"
                 v-if="!store && !vendorStore">
                <div class="spinner spinner-primary spinner-lg mr-15"></div>
            </div>
            <div v-if="store && vendorStore" class="card card-custom bgi-no-repeat gutter-b" style="background-position: right top; background-size: 30% auto; background-image: url(/media/svg/shapes/abstract-4.svg)">
                <!--begin::Body-->
                <div class="card-body">
                    <a href="#" class="card-title font-weight-bold text-muted text-hover-primary font-size-h1">{{store.storeName}}</a>
                </div>
                <!--end::Body-->
            </div>
            <div v-if="store && !vendorStore" class="card card-custom bgi-no-repeat gutter-b"
                 style="height: 250px; background-color: #1B283F; background-position: calc(100% + 0.5rem) calc(100% + 0.5rem); background-size: 100% auto; background-image: url(/media/svg/patterns/rhone-2.svg)">
                <!--begin::Body-->
                <div class="card-body">
                    <img src="/master/logo/air.png" alt="" style="height: 80px; margin-top: -30px; margin-left: -35px">
                    <h3 class="text-white font-weight-bolder">{{store.storeName}}</h3>
                    <p class="text-muted font-size-lg mt-5">
                        {{store.streetAddress1}}, {{store.streetAddress2}}
                    </p>
                    <a href="#" class="btn btn-link btn-link-warning font-weight-bold">
                        Open Settings
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <!--end::Body-->
            </div>
            <div v-if="vendorStore" class="card card-custom bgi-no-repeat gutter-b"
                 style="height: 250px; background-color: #1B283F; background-position: calc(100% + 0.5rem) calc(100% + 0.5rem); background-size: 100% auto; background-image: url(/media/svg/patterns/rhone-2.svg)">
                <!--begin::Body-->
                <div class="card-body">
                    <img src="/master/logo/air.png" alt="" style="height: 80px; margin-top: -30px; margin-left: -35px">
                    <h3 class="text-white font-weight-bolder">{{vendorStore.storeName}}</h3>
                    <p class="text-muted font-size-lg mt-5">
                        {{vendorStore.streetAddress1}}, {{vendorStore.streetAddress2}}
                    </p>
                    <a href="#" class="btn btn-link btn-link-warning font-weight-bold">
                        Open Settings
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <!--end::Body-->
            </div>
            <div class="card card-custom bg-light-success gutter-b">
                <!--begin::Header-->
                <div class="card-header align-items-center border-0 mt-4">
                    <h3 class="card-title align-items-start flex-column">
                        <span class="font-weight-bolder text-success">Recent Orders</span>
                        <span class="text-muted mt-3 font-weight-bold font-size-sm">890,344 Sales</span>
                    </h3>
                </div>
                <!--end::Header-->

                <!--begin::Body-->
                <div class="card-body pt-4">
                    <div class="timeline timeline-5 mt-3">
                        <!--begin::Item-->
                        <div class="timeline-item align-items-start">
                            <!--begin::Label-->
                            <div class="timeline-label font-weight-bolder text-dark-75 font-size-lg">08:42</div>
                            <!--end::Label-->

                            <!--begin::Badge-->
                            <div class="timeline-badge">
                                <i class="fa fa-genderless text-warning icon-xl"></i>
                            </div>
                            <!--end::Badge-->

                            <!--begin::Text-->
                            <div class="font-weight-mormal font-size-lg timeline-content text-muted pl-3">
                                Outlines keep you honest. And keep structure
                            </div>
                            <!--end::Text-->
                        </div>
                        <!--end::Item-->

                        <!--begin::Item-->
                        <div class="timeline-item align-items-start">
                            <!--begin::Label-->
                            <div class="timeline-label font-weight-bolder text-dark-75 font-size-lg">10:00</div>
                            <!--end::Label-->

                            <!--begin::Badge-->
                            <div class="timeline-badge">
                                <i class="fa fa-genderless text-success icon-xl"></i>
                            </div>
                            <!--end::Badge-->

                            <!--begin::Content-->
                            <div class="timeline-content d-flex">
                                <span class="font-weight-bolder text-dark-75 pl-3 font-size-lg">AEOL meeting</span>
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Item-->

                    </div>
                    <!--end: Items-->
                </div>
                <!--end: Card Body-->
            </div>
            <div class="card card-custom bg-light-danger gutter-b" style="height: 130px">
                <!--begin::Body-->
                <div class="card-body d-flex flex-column">
                    <!--begin::Stats-->
                    <div class="flex-grow-1">
                        <div class="text-dark-50 font-weight-bold">Total Sales</div>
                        <div class="font-weight-bolder font-size-h3">4,9M</div>
                    </div>
                    <!--end::Stats-->

                    <!--begin::Progress-->
                    <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <!--end::Progress-->
                </div>
                <!--end::Body-->
            </div>
            <div class="card card-custom gutter-b">
                <!--begin::Header-->
                <div class="card-header border-0">
                    <h3 class="card-title font-weight-bolder text-dark">Notifications</h3>
                </div>
                <!--end::Header-->

                <!--begin::Body-->
                <div class="card-body pt-0">
                    <!--begin::Item-->
                    <div class="mb-6">
                        <!--begin::Content-->
                        <div class="d-flex align-items-center flex-grow-1">
                            <!--begin::Checkbox-->
                            <label class="checkbox checkbox-lg checkbox-lg flex-shrink-0 mr-4">
                                <input type="checkbox" value="1">
                                <span></span>
                            </label>
                            <!--end::Checkbox-->

                            <!--begin::Section-->
                            <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
                                <!--begin::Info-->
                                <div class="d-flex flex-column align-items-cente py-2 w-75">
                                    <!--begin::Title-->
                                    <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                        Daily Standup Meeting
                                    </a>
                                    <!--end::Title-->

                                    <!--begin::Data-->
                                    <span class="text-muted font-weight-bold">
                            Due in 2 Days
                        </span>
                                    <!--end::Data-->
                                </div>
                                <!--end::Info-->

                                <!--begin::Label-->
                                <span class="label label-lg label-light-primary label-inline font-weight-bold py-4">Approved</span>
                                <!--end::Label-->
                            </div>
                            <!--end::Section-->
                        </div>
                        <!--end::Content-->
                    </div>
                    <!--end::Item-->

                </div>
                <!--end: Card Body-->
            </div>
        </div>
        <!--end::Aside Secondary Content-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {PerfectScrollbar} from "vue2-perfect-scrollbar";
    import menudata from "../../constants/menu";
    import {mapState} from "vuex";

    @Component({
        components: {
            PerfectScrollbar
        },
        computed: {
            ...mapState({
                admin: (store: any) => store.admin.administrator,
                store: (store: any) => store.admin.store,
                vendorStore: (store: any) => store.admin.vendorStore,
                vendor: (store: any) => store.admin.vendor
            })
        }
    })
    export default class SideBar extends Vue {
        private store
        private vendorStore
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

        @Watch('store')
        onChangeStore() {
            console.log(this.store)
        }

        beforeDestroy() {
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
