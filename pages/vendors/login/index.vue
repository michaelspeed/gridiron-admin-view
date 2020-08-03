<template>
    <div>
        <div class="air__auth">
            <div class="pt-5 pb-5 d-flex align-items-end mt-auto">
                <img src="/components/core/img/air-logo.png" alt="AIR UI Logo" />
                <div class="air__utils__logo__text">
                    <div class="air__utils__logo__name text-uppercase text-dark font-size-21">{{$t('pages.appname')}}</div>
                    <div class="air__utils__logo__descr text-uppercase font-size-12 text-gray-6">
                        {{$t('pages.tag-line')}}
                    </div>
                </div>
            </div>
            <div class="air__auth__container pl-5 pr-5 pt-5 pb-5 bg-white text-center">
                <div class="text-dark font-size-30 mb-4 font-weight-bold">Vendor</div>
                <div class="mb-4">
                    <div class="form-group mb-4">
                        <input type="email" class="form-control" placeholder="Email Address" v-model="email" />
                    </div>
                    <div class="form-group mb-4">
                        <input type="password" class="form-control" placeholder="Password" v-model="password"/>
                    </div>
                    <button class="text-center btn btn-success w-100 font-weight-bold font-size-18" @click="onLogin">
                        Log In
                    </button>
                </div>
                <div class="mb-4">
                    <div class="row">
                        <div class="col-md-6">
                            <v-btn class="ma-2" text color="#1b55e3" href="/vendors/register">Vendor Registration</v-btn>
                        </div>
                        <div class="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div class="mt-auto pb-5 pt-5">
                <ul class="air__auth__footerNav list-unstyled d-flex mb-2 flex-wrap justify-content-center">
                    <li>
                        <a href="#">Terms of Use</a>
                    </li>
                    <li>
                        <a href="#">Compliance</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
                <div class="text-gray-4 text-center">{{$t('general.copyright')}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';
    import {LoginVendorDocument} from '../../../gql';

    @Component
    export default class Index extends Vue {
        private email: string = ''
        private password: string = ''

        onLogin() {
            this.$apollo.mutate({
                mutation: LoginVendorDocument,
                variables: {
                    email: this.email,
                    password: this.password
                }
            }).then(value => {
                console.log(value)
                this.$apolloHelpers.onLogin(value!.data!.LoginVendor!.token)
                this.$router.push({
                    path: '/app/dashboard'
                })
            }).catch(error => {
                console.log(error)
                this.$message.error(error.message)
            })
        }

    }
</script>
