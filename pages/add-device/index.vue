<template>
  <div>
    <CustomHeader title="Device check" />
    <b-container>
      <template v-if="isInAsyncCall">
        <b-row class="my-5">
          <b-col>
            <loading></loading>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-row class="my-3 text-center">
          <b-col>
            <b-alert show variant="danger"
              >Attention !! This device is not in your saved device</b-alert
            >
            <h4 class="my-3">For regular use</h4>
            <b-button variant="danger" @click="addDevice">Add to saved devices</b-button>
            <h4 class="my-3">For temporary use</h4>
            <b-button variant="danger" @click="addGuest">Continue as a guest</b-button>

            <b-alert show variant="info" class="my-3"
              >If you are using this device frequently and is not in your saved
              devices lest, your account may get restricted by the system
              automatically.</b-alert
            >
          </b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
import Loading from "../../components/loading/Loading.vue";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default {
  layout: "content",
  middleware: "auth",

  beforeRouteEnter(_to, from, next) {
    next((vm) => {
      console.log('router guard', from)
      next()
    })
  },

  data() {
    return {
      deviceResponse: null,
      fingerprint: null,
      isInSavedDevice: false,
      isInAsyncCall: false,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.visitorId();
  },

  methods: {
    addDevice() {
      let vm = this;

      let data = {
        fingerprint: vm.fingerprint,
        platform: "web",
      };

      vm.isInAsyncCall = true;

      this.$axios
        .post("user-devices", data)
        .then((res) => {
          console.log(res);

          if (res.data.status == "true") {
            vm.$store.commit("device/addCurrentDevice");
          }

          if (res.data.hasOwnProperty("message")) {
            vm.getmessage(res.data.message);
          }
        })
        .catch(function (err) {
          console.log(err);

          if (
            err.response.data.hasOwnProperty("message") &&
            err.response.data.message == "DEVICE_ALREADY_ADDED"
          ) {
            vm.$store.commit("device/addCurrentDevice");
          }

          if (err.response.data.hasOwnProperty("message")) {
            vm.getmessage(err.response.data.message);
          }

          if (err.response.data.hasOwnProperty("errors")) {
            this.serverErrors = Object.entries(err.response.data.errors);
          }
        })
        .finally(() => {
          vm.isInAsyncCall = false;
        });
    },

    addGuest() {
      this.$store.commit("device/addGuest");
    },

    removeGuest() {
      this.$store.commit("device/removeGuestDevice");
    },

    visitorId() {
      console.log("function called");
      console.log(localStorage.getItem("visitorid"));

      // Initialize an agent at application startup.
      const fpPromise = FingerprintJS.load();

      (async () => {
        // Get the visitor identifier when you need it.
        const fp = await fpPromise;
        const result = await fp.get();

        // This is the visitor identifier:
        const visitorId = result.visitorId;
        this.fingerprint = visitorId;
      })();
    },

  },
};
</script>


<style lang="css" scoped>
h4 {
  letter-spacing: normal;
}
</style>

