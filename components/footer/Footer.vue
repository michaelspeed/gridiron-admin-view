<template>
  <div class="footer py-2 py-lg-0 my-5 d-flex flex-lg-column " id="kt_footer">
    <!--begin::Container-->
    <div class=" container-fluid  d-flex flex-column flex-md-row align-items-center justify-content-between">
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1 d-flex align-items-center">
        <span class="text-muted font-weight-bold mr-2">2020&copy;</span>
        <a href="javascript:;" target="_blank" class="text-dark-75 text-hover-primary">
            <span class="opacity-70 font-weight-bold text-muted" v-if="GetDefaultStore">
                [{{GetDefaultStore.storeName}}]
            </span>
        </a>
      </div>
      <!--end::Copyright-->

      <!--begin::Nav-->
      <div class="nav nav-dark order-1 order-md-2">
      </div>
      <!--end::Nav-->
    </div>
    <!--end::Container-->
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {mapState} from "vuex";
  import {GetDefaultStoreDocument} from "~/gql";

  @Component({
      apollo: {
          GetDefaultStore: {
              query: GetDefaultStoreDocument
          }
      }
  })
  export default class Footer extends Vue {
      private GetDefaultStore
  }
</script>
