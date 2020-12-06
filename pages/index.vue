<template>
  <v-app>
    <div class="d-flex flex-column flex-root">
      <div
        class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
        id="kt_login"
      >
        <!--begin::Aside-->
        <div
          class="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-15"
          :style="{ backgroundImage: `url(/images/main.jpg)` }"
        >
          <!--begin: Aside Container -->
          <div class="d-flex flex-row-fluid flex-column justify-content-between">
            <!--begin: Aside header -->
            <a href="#" class="flex-column-auto">
              <img src="/master/logo/air.png" class="h-25" />
            </a>
            <!--end: Aside header -->
            <!--begin: Aside content -->
            <div
              class="flex-column-fluid d-flex flex-column justify-content-center"
            >
              <h1 class="font-weight-bold mb-5 text-primary">
                Welcome to OI HELP
              </h1>
              <p class="font-weight-lighter text-danger opacity-80">
                The ultimate Ecommerce Framework
              </p>
                <p class="font-weight-bold text-success">
                    [OI HELP BUILD: 0.16.3]
                </p>
            </div>
            <!--end: Aside content -->
            <!--begin: Aside footer for desktop -->
            <div
              class="d-none flex-column-auto d-lg-flex justify-content-between mt-15"
            >
              <div class="opacity-70 font-weight-bold text-muted">
                © 2020 Air Ecommerce by Atmiyo [OI HELP BUILD: 0.16.1]
              </div>
              <div class="d-flex">
                <a href="#" class="text-white">Privacy</a>
              </div>
            </div>
            <!--end: Aside footer for desktop -->
          </div>
          <!--end: Aside Container -->
        </div>
        <!--begin::Aside-->

        <!--begin::Content-->
        <div
          class="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden bg-primary-o-80"
        >
          <div class="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
            <div>
              <!--begin::Content header-->
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
              <!--end::Content header-->

              <!--begin::Signin-->
              <div class="login-form login-signin">
                <div class="text-center mb-10 mb-lg-20">
                    <!--<img src="/images/logo.png" style="width: 300px; object-fit: contain"/>-->
                    <h1 class="text-primary" style="font-size: 40px; font-weight: bold">Oi Help</h1>
                    <hr>
                  <h3 class="font-size-h1">Sign In</h3>
                  <p class="text-muted font-weight-semi-bold">
                    Enter your username and password
                  </p>
                </div>

                <!--begin::Form-->
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

                  <!--begin::Action-->
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
                  <!--end::Action-->
                </div>
                <!--end::Form-->
              </div>
              <!--end::Signin-->
            </div>
          </div>
        </div>
        <!--end::Content-->
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {AdministratorLoginDocument, AdministratorLoginMutationVariables, Store, User} from '../gql';

@Component({
})
export default class Index extends Vue {
  private email: string = ''
  private password: string = ''
  private loading = false

  onAdminLogin(){
    this.loading = true
    this.$apollo.mutate<{administratorLogin: {user: User, token: string, store: Store}}, AdministratorLoginMutationVariables>({
      mutation: AdministratorLoginDocument,
      variables: {
        email: this.email,
        password: this.password
      }
    }).then(value => {
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
