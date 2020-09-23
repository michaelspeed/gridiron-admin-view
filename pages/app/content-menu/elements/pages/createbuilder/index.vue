<template>
    <div>
        <div class="d-flex flex-column-fluid">
            <div class=" container-fluid ">
                <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
                    <div class=" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100">
                        <!--begin::Details-->
                        <div class="d-flex align-items-center flex-wrap mr-2">

                            <!--begin::Title-->
                            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Page Builder</h5>
                            <!--end::Title-->

                            <!--begin::Separator-->
                            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                            <!--end::Separator-->

                            <!--begin::Search Form-->
                            <div class="d-flex align-items-center" id="kt_subheader_search">
                                <span class="text-dark-50 font-weight-bold" id="kt_subheader_total"
                                ></span>
                                <div class="ml-5">
                                    <!--<div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                                        <input type="text" class="form-control" id="kt_subheader_search_form"
                                               placeholder="Search..." v-model="search"/>
                                        <div class="input-group-append">
                                            <i class="fas fa-search"></i>
                                        </div>
                                    </div>-->
                                </div>
                            </div>
                            <!--end::Search Form-->
                        </div>
                        <!--end::Details-->

                        <!--begin::Toolbar-->
                        <div class="d-flex align-items-center">
                            <!--begin::Button-->
                            <a href="#" class="">

                            </a>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <a-dropdown-button >
                                {{pageType !== '' ? pageType : 'Select Page Type'}}
                                <a-menu slot="overlay" @click="handleMenuClick">
                                    <a-menu-item key="HOME">Home Page </a-menu-item>
                                    <a-menu-item key="CATEGORY">Category Page </a-menu-item>
                                    <!--<a-menu-item key="SINGLEPROD">Single Page</a-menu-item>
                                    <a-menu-item key="PRODVARIANT">Product Variants Page</a-menu-item>-->
                                </a-menu>
                            </a-dropdown-button>
                            <!--end::Button-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>

                <HomePage v-if="pageType === 'HOME'"/>
                <PageBuilder v-if="pageType !== 'HOME'" :type="pageType"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HomePage from "~/components/pages/HomePageBuilder.vue";
    import PageBuilder from "~/components/pages/PageBuilder.vue";

    @Component({
        layout: 'console',
        components: {
            HomePage,
            PageBuilder
        }
    })
    export default class CreatePageBuilder extends Vue {
        private pageType = ''

        handleMenuClick(e) {
            this.pageType = e.key
        }
    }
</script>
