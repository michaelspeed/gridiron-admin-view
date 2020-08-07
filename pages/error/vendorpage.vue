<template>
    <div class="d-flex flex-column flex-root" style="height: 100vh">
        <!--begin::Error-->
        <div class="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30" style="background-image: url(/media/error/bg1.jpg);">
            <!--begin::Content-->
            <h1 class="font-weight-boldest text-dark-75 mt-15" style="font-size: 10rem">403</h1>
            <p class="font-size-h3 text-muted font-weight-normal">Vendors Only Page</p>
            <a href="#" class="btn btn-light-primary font-weight-bold mr-2 w-375px" @click="$router.back()">Go Back</a>
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
        layout: 'console'
    })
    export default class Page403 extends Vue {

    }
</script>
