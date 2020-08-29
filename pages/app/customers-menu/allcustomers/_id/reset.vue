<template>
    <div>
        <div class="card card-custom">
            <!--begin::Header-->
            <div class="card-header py-3">
                <div class="card-title align-items-start flex-column">
                    <h3 class="card-label font-weight-bolder text-dark">Reset Password</h3>
                </div>
                <div class="card-toolbar">
                </div>
            </div>
            <!--end::Header-->
            <!--begin::Form-->
            <form class="form">
                <div class="card-body">
                    <!--begin::Heading-->
                    <div class="row">
                        <label class="col-xl-3"></label>
                        <div class="col-lg-9 col-xl-6">
                            <button type="reset" class="btn btn-success mr-2">Send Reset Password Email</button>
                        </div>
                    </div>
                </div>
            </form>
            <!--end::Form-->
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Reset extends Vue {

    }
</script>
