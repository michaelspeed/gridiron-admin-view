<template>
    <div >
      <div class="d-flex flex-column-fluid">
        <div class=" container-fluid ">
          <div class="subheader py-2 py-lg-4  subheader-transparent " id="kt_subheader">
            <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
              <!--begin::Details-->
              <div class="d-flex align-items-center flex-wrap mr-2">

                <!--begin::Title-->
                <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">System Configuration</h5>
                <!--end::Title-->

                <!--begin::Separator-->
                <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                <!--end::Separator-->

                <!--begin::Search Form-->
                <div class="d-flex align-items-center" id="kt_subheader_search">

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

                <!--end::Button-->
              </div>
              <!--end::Toolbar-->
            </div>
          </div>
          <div class="card card-custom gutter-b">
            <div class="card-body">
              <div class="row">
                <v-tabs v-model="tabs">
                  <v-tab>
                    Store Configuration
                  </v-tab>
                  <v-tab>
                    Zip Codes
                  </v-tab>
                  <v-tab>
                    Integrations
                  </v-tab>
                    <v-tab>
                    View Codes
                  </v-tab>
                    <v-tab>
                    Hsn Codes
                  </v-tab>
                </v-tabs>
              </div>
              <v-tabs-items v-model="tabs">
                <v-tab-item :key="1" style="padding: 10px">
                  <StoreConfiguration/>
                </v-tab-item>
                <v-tab-item :key="2">
                  <ZipConfiguration/>
                </v-tab-item>
                <v-tab-item :key="3">
                    <PaymentIntegration/>
                </v-tab-item>
                  <v-tab-item :key="4">
                      <ViewCodes/>
                  </v-tab-item>
                  <v-tab-item :key="5">
                      <HsnCodes/>
                  </v-tab-item>
              </v-tabs-items>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import StoreConfiguration from '../../../../components/System/StoreConfiguration.vue';
    import ZipConfiguration from '../../../../components/System/ZipConfiguration.vue';
    import PaymentIntegration from "~/components/integration/PaymentIntegration.vue";
    import ViewCodes from "~/components/viewcodes/viewcodes.vue";
    import HsnCodes from "~/components/hsn/hsn.vue";

    @Component({
        components: {ZipConfiguration, StoreConfiguration, PaymentIntegration, ViewCodes, HsnCodes},
        layout: 'console',
        middleware: 'adminonly',
    })
    export default class SystemConfig extends Vue {
        private tabs = '1'

    }
</script>
