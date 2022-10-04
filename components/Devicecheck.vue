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
            <b-button variant="danger" @click="addDevice"
              >Add to saved devices</b-button
            >
            <h4 class="my-3">For temporary use</h4>
            <b-button variant="danger" @click="addGuest"
              >Continue as a guest</b-button
            >

            <b-alert show variant="info" class="my-3"
              >If you are using this device frequently and is not in your saved
              devices lest, your account may get restricted by the system
              automatically.</b-alert
            >
            <b-alert show variant="danger" class="my-3"
              >You can manage your saved devices form your
              <b-link to="/profile"
                >profile page in
                <b-badge variant="primary">Saved devices</b-badge> tab
              </b-link>
            </b-alert>
          </b-col>
        </b-row>
        <b-row>
        <b-list-group
          v-if="deviceResponse && deviceResponse.devices.length > 0"
        >
          <b-list-group-item
            v-for="device in deviceResponse.devices"
            :key="device.id"
            class="my-3"
          >
            <b-badge variant="primary">{{ device.ip_address }}</b-badge>
            <b-badge variant="danger" v-show="device.fingerprint == fingerprint">This device</b-badge>
            {{ device.device }} <br />

            {{ device.location }}<br />
            Last updated: {{ formatDateToString(device.updated_at) }}<br />

            <b-button @click="removeDevice(device.id)" variant="danger"
              >Remove device</b-button
            >
          </b-list-group-item>
        </b-list-group>
        <b-alert v-else show variant="info" class="w-100 mx-auto text-center "
          >No device registered</b-alert
        >
      </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
import Loading from "./loading/Loading.vue";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default {
  layout: "content",
  middleware: "auth",

  beforeRouteEnter(_to, from, next) {
    next((vm) => {
      console.log("router guard", from);
      next();
    });
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
     this.getDevice();
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

    getDevice() {
      let vm = this;
      vm.isInAsyncCall = true;
      this.$axios
        .get("user-devices")
        .then((res) => {
          console.log(res);
          this.deviceResponse = res.data;

          if (res.data.devices) {
            var check = res.data.devices.find(
              (device) => device.fingerprint == vm.fingerprint
            );
            if (check != null) {
              vm.isInSavedDevice = true;
              vm.$store.commit("device/addCurrentDevice");
            } else {
              vm.isInSavedDevice = false;
            }
          }

          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }
        })
        .catch(function (err) {
          console.log(err);

          if (err.response.data.hasOwnProperty("message")) {
            this.getmessage(err.response.data.message);
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
      console.log("Visitor Id called");
      let vm = this;
      let fingerprint = null;

       // check if visitor id exists
      let dId = localStorage.getItem("deviceId");


      if(dId){
        vm.fingerprint = dId;
      }

      let ec = new evercookie();
      ec.get("deviceId", function (value) {
        console.log("Cookie value is " + value);
        if (value.includes("<!doctype html>") == false) {
          fingerprint = value;
          vm.fingerprint = fingerprint;
          localStorage.setItem("deviceId",fingerprint);
          console.log('form ec deviceId',fingerprint);
          // return;
        } else {
          // Initialize an agent at application startup.
          const fpPromise = FingerprintJS.load();
          (async () => {
            // Get the visitor identifier when you need it.
            const fp = await fpPromise;
            const result = await fp.get();

            // This is the visitor identifier:
            const visitorId = result.visitorId;
            fingerprint = visitorId;
            vm.fingerprint = fingerprint;
            ec.set("deviceId", visitorId);
            localStorage.setItem("deviceId",visitorId);
          })();
        }
      });
    },
    removeDevice(id) {
      if (confirm("Are you sure ?")) {
        let vm = this;
        vm.isInAsyncCall = true;
        this.$axios
          .delete(`user-devices/${id}`)

          .then((res) => {
            console.log(res);

            if (res.data.status == "true") {
              this.getDevice();
              vm.$store.commit("device/removeCurrentDevice");
            }

            if (res.data.hasOwnProperty("message")) {
              this.getmessage(res.data.message);
            }
          })
          .catch(function (err) {
            console.log(err);

            if (err.response.data.hasOwnProperty("message")) {
              this.getmessage(err.response.data.message);
            }

            if (err.response.data.hasOwnProperty("errors")) {
              this.serverErrors = Object.entries(err.response.data.errors);
            }
          })
          .finally(() => {
            vm.isInAsyncCall = false;
          });
      }
    },
  },
};
</script>


<style lang="css" scoped>
h4 {
  letter-spacing: normal;
}
</style>

