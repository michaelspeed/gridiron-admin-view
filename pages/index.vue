<template>
 <v-app>
        <div class="d-flex flex-column flex-root">
            <!--begin::Login-->
            <div class="login login-3 login-signin-on d-flex flex-row-fluid" id="kt_login">
                <div class="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid"
                     style="background-image: url(/media/bg/bg-1.jpg);">
                    <div class="login-form text-center text-white p-7 position-relative overflow-hidden">
                        <!--begin::Login Header-->
                        <div class="d-flex flex-center mb-15">
                            <a href="javascript:;">
                                <img src="/images/airecommerce.png" class="max-h-100px" alt="" v-if="!GetDefaultStore"/>
                                <img :src="`${images}${GetDefaultStore.logo.preview}`" class="max-h-100px" alt="" v-if="GetDefaultStore && GetDefaultStore.logo"/>
                            </a>
                        </div>
                        <!--end::Login Header-->

                        <!--begin::Login Sign in form-->
                        <v-expand-transition>
                            <div class="login-signin" v-if="!forgot">
                                <div class="mb-20">
                                    <h1 class="text-white" v-if="!GetDefaultStore">Sign In To Admin</h1>
                                    <h1 class="text-white" v-if="GetDefaultStore">Sign In To {{GetDefaultStore.storeName}}</h1>
                                    <p class="opacity-60 font-weight-bold">Enter your details to login to your
                                        account:</p>
                                </div>
                                <div class="form" id="kt_login_signin_form">
                                    <div class="form-group">
                                        <input v-model="email"
                                               class="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8 mb-5"
                                               type="text" placeholder="Email" name="username" autocomplete="off"/>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="password"
                                               class="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8 mb-5"
                                               type="password" placeholder="Password" name="password"/>
                                    </div>
                                    <div
                                        class="form-group d-flex flex-wrap justify-content-between align-items-center px-8">
                                        <a href="javascript:;" @click="forgot = true" id="kt_login_forgot"
                                           class="text-white font-weight-bold">Forget Password ?</a>
                                    </div>
                                    <div class="form-group text-center mt-10" v-if="!loading">
                                        <button id="kt_login_signin_submit" @click="onAdminLogin"
                                                class="btn btn-pill btn-outline-white font-weight-bold opacity-90 px-15 py-3">
                                            Sign In
                                        </button>
                                    </div>
                                    <div v-if="loading">
                                        <v-progress-linear
                                            color="lime"
                                            indeterminate
                                            reverse
                                        ></v-progress-linear>
                                    </div>
                                </div>
                                <div class="mt-10">
                                    <span class="opacity-70 mr-4">
                                        New Here? head over to vendor login
                                    </span>
                                    <a href="javascript:;" @click="$router.push('/vendors/register')"
                                       id="kt_login_signup" class="text-white font-weight-bold">Sign Up</a>
                                </div>
                            </div>
                        </v-expand-transition>
                        <!--end::Login Sign in form-->

                        <!--begin::Login forgot password form-->
                        <v-expand-transition>
                            <div class="login-forgot" v-if="forgot">
                                <div class="mb-20">
                                    <h3>Forgotten Password ?</h3>
                                    <p class="opacity-60">Enter your email to reset your password</p>
                                </div>
                                <div class="form" id="kt_login_forgot_form">
                                    <div class="form-group mb-10">
                                        <input v-model="email"
                                               class="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8"
                                               type="text" placeholder="Email" name="email" autocomplete="off"/>
                                    </div>
                                    <div class="form-group">
                                        <button id="kt_login_forgot_submit"
                                                class="btn btn-pill btn-outline-white font-weight-bold opacity-90 px-15 py-3 m-2">
                                            Request
                                        </button>
                                        <button id="kt_login_forgot_cancel" @click="forgot = false"
                                                class="btn btn-pill btn-outline-white font-weight-bold opacity-70 px-15 py-3 m-2">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </v-expand-transition>
                        <!--end::Login forgot password form-->
                    </div>
                </div>
            </div>
            <!--end::Login-->
        </div>
        <!--    <div class="d-flex flex-column flex-root">
              <div
                class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
                id="kt_login"
              >
                &lt;!&ndash;begin::Aside&ndash;&gt;
                <div
                  class="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-15"
                  :style="{ backgroundImage: `url(/images/main.jpg)` }"
                >
                &lt;!&ndash;begin: Aside Container &ndash;&gt;
                  <div class="d-flex flex-row-fluid flex-column justify-content-between">
                    &lt;!&ndash;begin: Aside header &ndash;&gt;
                    <a href="#" class="flex-column-auto">
                      <img src="/master/logo/air.png" class="h-25" />
                    </a>
                    &lt;!&ndash;end: Aside header &ndash;&gt;
                    &lt;!&ndash;begin: Aside content &ndash;&gt;
                    <div
                      class="flex-column-fluid d-flex flex-column justify-content-center"
                    >
                    <h1 class="font-weight-bold mt-10 mb-5 text-primary">
                        Welcome to THELOCALDUKAN
                      </h1>
                      <p class="font-weight-bold text-danger opacity-80">
                        The ultimate Ecommerce Framework
                      </p>
                        <p class="font-weight-bold text-success">
                            [ASSAM MART BUILD: 0.16.3]
                        </p>
                    </div>
                    &lt;!&ndash;end: Aside content &ndash;&gt;
                    &lt;!&ndash;begin: Aside footer for desktop &ndash;&gt;
                    <div
                      class="d-none flex-column-auto d-lg-flex justify-content-between mt-15"
                    >
                      <div class="opacity-70 font-weight-bold text-primary">
                        © 2020 [THELOCALDUKAN] BUILD 0.16.1
                      </div>
                      <div class="d-flex">
                        <a href="#" class="text-white">Privacy</a>
                      </div>
                    </div>
                    &lt;!&ndash;end: Aside footer for desktop &ndash;&gt;
                  </div>
                  &lt;!&ndash;end: Aside Container &ndash;&gt;
                </div>
                &lt;!&ndash;begin::Aside&ndash;&gt;

                &lt;!&ndash;begin::Content&ndash;&gt;
                <div
                  class="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden bg-primary-o-80"
                >
                  <div class="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
                    <div>
                      &lt;!&ndash;begin::Content header&ndash;&gt;
                      <div
                        class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
                      >
              <span class="font-weight-bold font-size-3 text-dark-60">
                Are you a vendor?
              </span>
                        <a
                            href="/vendors/register"
                          class="font-weight-bold font-size-3 ml-2"
                        >
                          Sign Up!
                        </a>
                          <a
                            href="/vendors/login"
                          class="font-weight-bold text-success font-size-3 ml-2"
                        >
                          Sign In!
                        </a>
                      </div>
                      &lt;!&ndash;end::Content header&ndash;&gt;

                      &lt;!&ndash;begin::Signin&ndash;&gt;
                      <div class="login-form login-signin">
                        <div class="text-center mb-10 mb-lg-20">
                            <img src="/images/logo.png" style="width: 300px; object-fit: contain"/>
                          <h3 class="font-size-h1">Sign In</h3>
                          <p class="text-muted font-weight-semi-bold">
                            Enter your username and password
                          </p>
                        </div>

                        &lt;!&ndash;begin::Form&ndash;&gt;
                        <div style="width: 30vw">

                          <b-form-group
                            id="example-input-group-1"
                            label=""
                            label-for="example-input-1"
                          >
                            <b-form-input
                              class="form-control form-control-solid h-auto py-5 px-6"
                              id="example-input-1"
                              name="example-input-1"
                              placeholder="email"
                              v-model="email"
                              aria-describedby="input-1-live-feedback"
                            ></b-form-input>

                          </b-form-group>

                          <b-form-group
                            id="example-input-group-2"
                            label=""
                            label-for="example-input-2"
                          >
                            <b-form-input
                              class="form-control form-control-solid h-auto py-5 px-6"
                              type="password"
                              id="example-input-2"
                              name="example-input-2"
                              placeholder="password"
                              v-model="password"
                              aria-describedby="input-2-live-feedback"
                            ></b-form-input>

                          </b-form-group>

                          &lt;!&ndash;begin::Action&ndash;&gt;
                          <div
                            class="form-group d-flex flex-wrap justify-content-between align-items-center"
                          >
                            <a
                              href="#"
                              class="text-dark-60 text-hover-primary my-3 mr-2"
                              id="kt_login_forgot"
                            >
                              Forgot Password ?
                            </a>
                            <button
                              ref="kt_login_signin_submit"
                              @click="onAdminLogin"
                              class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3"
                              :class="{'spinner spinner-white spinner-right': loading}"
                            >
                              Sign In
                            </button>
                          </div>
                          &lt;!&ndash;end::Action&ndash;&gt;
                        </div>
                        &lt;!&ndash;end::Form&ndash;&gt;
                      </div>
                      &lt;!&ndash;end::Signin&ndash;&gt;
                    </div>
                  </div>
                </div>
                &lt;!&ndash;end::Content&ndash;&gt;
              </div>
            </div>-->
    </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import { assetsURL } from "../constants/GlobalURL";
import {
    AdministratorLoginDocument,
    AdministratorLoginMutationVariables,
    GetDefaultStoreDocument,
    Store,
    User
} from '../gql';

@Component({
    apollo: {
        GetDefaultStore: {
            query: GetDefaultStoreDocument
        }
    }
})
export default class Index extends Vue {
    private email: string = ''
    private password: string = ''
    private loading = false
    private images = assetsURL

    private forgot = false

    private GetDefaultStore

    onAdminLogin() {
        this.loading = true
        this.$apollo.mutate<{ administratorLogin: { user: User, token: string, store: Store } }, AdministratorLoginMutationVariables>({
            mutation: AdministratorLoginDocument,
            variables: {
                email: this.email,
                password: this.password
            }
        }).then(value => {
            setTimeout(() => {
                this.loading = false
                if (value.data!.administratorLogin.store === null) {
                    this.$router.push({
                        path: '/start/start'
                    })
                } else {
                    this.$apolloHelpers.onLogin(value!.data!.administratorLogin!.token)
                    this.$router.push({
                        path: '/app/dashboard'
                    })
                }
            }, 3000)
        }).catch(error => {
            this.loading = false
            this.$Message.error(error.message)
            console.log(error)
        })
    }

}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
