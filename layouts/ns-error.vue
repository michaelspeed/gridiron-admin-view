<template>
    <div class="air__auth">
        <div class="pt-4 pb-4 d-flex align-items-end mt-auto">
            <img src="/components/core/img/air-logo.png" alt="AIR UI Logo" />
            <div class="air__utils__logo__text">
                <div class="air__utils__logo__name text-uppercase text-dark font-size-21">{{$t('pages.appname')}}</div>
                <div class="air__utils__logo__descr text-uppercase font-size-12 text-gray-6">
                    {{$t('pages.tag-line')}}
                </div>
            </div>
        </div>
        <div class="air__network__container pl-5 pr-5 pt-5 pb-5 mb-auto text-dark font-size-30">
            <div class="font-weight-bold mb-3">Page not found</div>
            <div>This page is deprecated, deleted, or does not exist at all</div>
            <div class="font-weight-bold font-size-70 mb-1">{{statusCode}} —</div>
            <a href="#" @click="$router.back()" class="btn btn-outline-primary width-100">Go Back</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NuxtError',
        props: {
            error: {
                type: Object,
                default: null
            }
        },
        computed: {
            statusCode () {
                return (this.error && this.error.statusCode) || 500
            },
            message () {
                return this.error.message || '<%= messages.client_error %>'
            }
        },
        head () {
            return {
                title: this.message,
                meta: [
                    {
                        name: 'viewport',
                        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
                    }
                ],
                bodyAttrs: {
                    class: 'air__menu--flyout air__menu--white air__menu__submenu--blue air__layout--grayBackground air__layout--cardsShadow',
                    "data-app": "data-app"
                }
            }
        }
    }
</script>
