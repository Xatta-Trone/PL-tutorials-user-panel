<template>
  <div>
    <b-row>
      <b-alert show class="w-100" variant="secondary">
        You can manage your regular devices from here.
      </b-alert>
      <h3 class="text-center w-100" v-if="deviceResponse">
        Max allowed device: {{ deviceResponse.max_allowed_device }}
      </h3>
      <hr />
    </b-row>

    <template v-if="isInAsyncCall">
      <b-row class="my-5">
        <b-col>
          <loading></loading>
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-row>
        <b-list-group
          v-if="deviceResponse && deviceResponse.devices.length > 0"
        >
          <b-list-group-item
            v-for="device in deviceResponse.devices"
            :key="device.id"
          >
            <b-badge variant="primary">{{ device.ip_address }}</b-badge>
            {{ device.device }} <br/>

            {{ device.location }}<br/>
            Last updated: {{ formatDateToString(device.updated_at) }}<br/>

            <b-button @click="removeDevice(device.id)" variant="danger">Remove device</b-button>


          </b-list-group-item>
        </b-list-group>
        <b-alert v-else show variant="info" class="w-50 mx-auto text-center"
          >No device registered</b-alert
        >
      </b-row>
      <b-row v-if="!isInSavedDevice" class="my-3" >
        <b-button @click="addDevice" :disabled="isInAsyncCall" variant="primary"
          >Add this device</b-button
        >
      </b-row>
    </template>
  </div>
</template>
<script>
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default {
  data() {
    return {
      deviceResponse: null,
      fingerprint: null,
      isInSavedDevice: false,
      isInAsyncCall: false,
    };
  },

  mounted() {
    this.visitorId();
    this.getDevice();
  },

  methods: {
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
            } else {
              vm.isInSavedDevice = false;
            }
          }

          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }

          if (res.data.hasKey("status")) this.getmessage();
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
            this.getDevice();
          }

          if (res.data.hasOwnProperty("message")) {
            vm.getmessage(res.data.message);
          }


        })
        .catch(function (err) {
          console.log(err);

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
            }

            if (res.data.hasOwnProperty("message")) {
              this.getmessage(res.data.message);
            }

            if (res.data.hasKey("status")) this.getmessage();
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
