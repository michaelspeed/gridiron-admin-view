<template>
    <div class="d-flex flex-column flex-root">
        <!--begin::Error-->
        <div class="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30" style="background-image: url(assets/media/error/bg1.jpg);">
            <!--begin::Content-->
            <h1 class="font-weight-boldest text-dark-75 mt-15" style="font-size: 10rem">404</h1>
            <p class="font-size-h3 text-muted font-weight-normal">OOPS! Something went wrong here</p>
            <!--end::Content-->
        </div>
        <!--end::Error-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        head: {
            bodyAttrs: {
                class: 'header-fixed header-mobile-fixed subheader-enabled sidebar-enabled page-loading',
                id: 'kt_body'
            }
        },
    })
    export default class Page404 extends Vue {

    }
</script>
