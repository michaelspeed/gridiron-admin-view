<template>
  <v-app>
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
          <div class="text-dark font-size-30 mb-4 font-weight-bold">Administrator</div>
          <div class="mb-4">
            <div class="form-group mb-4">
              <input type="email" class="form-control" placeholder="Email Address" v-model="email" />
            </div>
            <div class="form-group mb-4">
              <input type="password" class="form-control" placeholder="Password" v-model="password"/>
            </div>
            <v-btn @click="onAdminLogin" color="primary" tile style="width: 100%" v-if="!loading">
              Log In
            </v-btn>
            <div v-if="loading">
              <div class="d-flex justify-content-center align-items-center">
                <v-progress-circular
                        indeterminate
                        color="primary"
                ></v-progress-circular>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="row">
              <div class="col-md-6">
                <v-btn class="ma-2" text color="#1b55e3" href="/vendors/register">Vendor Registration</v-btn>
              </div>
              <div class="col-md-6">
                <v-btn class="ma-2" text color="#1b55e3" href="/vendors/login">Vendor Login</v-btn>
              </div>
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
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {AdministratorLoginDocument, AdministratorLoginMutationVariables, Store, User} from '../gql';

@Component
export default class Index extends Vue {
  private email: string = ''
  private password: string = ''
  private loading = false

  onAdminLogin(){
    this.$apollo.mutate<{administratorLogin: {user: User, token: string, store: Store}}, AdministratorLoginMutationVariables>({
      mutation: AdministratorLoginDocument,
      variables: {
        email: this.email,
        password: this.password
      }
    }).then(value => {
      console.log(value)
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
    }).catch(error => console.log(error))
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
