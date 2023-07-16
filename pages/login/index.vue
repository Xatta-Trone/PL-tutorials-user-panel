<template>
  <b-container fluid class="vh-100">
    <b-row class="h-100 overflow-hidden" align-v="center" align-h="center">
      <b-col md="6" class="overflow-x p-5">
        <b-form @submit.prevent="userLogin">
          <h3>Login to <strong class="text-primary">PL Tutorials</strong></h3>
              <b-form-group id="input-group-1" label="Email address ::" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email address"
                  required></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password ::" label-for="input-2">
                <b-form-input id="input-2" v-model="form.password" placeholder="Enter your password" type="password"
                  required></b-form-input>
              </b-form-group>

              <b-alert v-show="errMsg != ''" variant="danger" dismissible fade show>
                {{ errMsg }}
              </b-alert>

              <b-button type="submit" :disabled="isInAsyncCall" variant="primary" class="text-white">{{ btntxt }}</b-button>

              <b-form-group class="mt-5">
                <b-row>
                  <b-col sm="4">
                    <nuxt-link to="/" class="ml-auto d-inline-block text-dark text-left">Home</nuxt-link>
                    <b-link href="/register"></b-link></b-col>
                  <b-col sm="4">
                    <nuxt-link to="/register" class="ml-auto d-inline-block text-dark text-left">Create new
                      account</nuxt-link>
                    <b-link href="/register"></b-link></b-col>

                  <b-col sm="4" class="text-right">
                    <nuxt-link to="/request-password" class="ml-auto d-inline-block text-danger text-left">forgot your
                      password ?</nuxt-link>
              </b-col>
            </b-row>
          </b-form-group>
        </b-form>
      </b-col>
      <b-col class="bg-img h-100 d-none d-md-block"> </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { ClientJS } from 'clientjs';
export default {
  layout: "auth",
  middleware: "guest",
  head() {
    return {
      title: "Login - PL Tutorials",
    };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        fingerprint: "",
        fingerprint_alt: "",
      },
      btntxt: "Log in",
      errMsg: "",
      isInAsyncCall: false,
    };
  },
  mounted() {
    this.visitorId();
  },
  methods: {
    async userLogin() {
      this.isInAsyncCall = true;
      this.errMsg = "";
      // this.visitorId();
      try {
        this.btntxt = "Logging in.....";
        let response = await this.$auth
          .loginWith("laravelSanctum", {
            data: this.form,
          })
          .then((res) => {
            this.btntxt = "Login successful";
            // console.log("asdfsf", res.data);
            // set loggedin user
            // localStorage.setItem("auth_user", JSON.stringify(res.data));
          });
      } catch (err) {
        this.btntxt = "Log in";
        console.log(err);

        if ((err.response.status = 401)) {
          // this.getmessage(err.response.data.message);
          this.errMsg = err.response.data.message;
          return this.$toast.error(err.response.data.message);
        } else {
          this.errMsg = "Something went wrong! :(";
          this.getmessage("Something went wrong");
        }
      } finally {
        this.isInAsyncCall = false;
      }
    },
    visitorId() {
      console.log("Visitor Id called");
      let vm = this;
      // check if visitor id exists
      let dId = localStorage.getItem("deviceId");
      let dId_alt = localStorage.getItem("deviceId_alt");
      console.log(dId_alt, "fingerprint2");

      if (dId) {
        vm.form.fingerprint = dId;
        console.log("visitor id login page", dId);

        // add the clientJs Id
        // Create a new ClientJS object
        const client = new ClientJS();

        // Get the client's fingerprint id
        let fingerprint2 = client.getFingerprint();

        // Print the 32bit hash id to the console
        vm.form.fingerprint_alt = fingerprint2;
        localStorage.removeItem("deviceId");
        localStorage.setItem("deviceId_alt", fingerprint2);

      } else if (dId_alt) {
        vm.form.fingerprint = dId_alt;
      } else {
        // add the clientJs Id
        // Create a new ClientJS object
        const client = new ClientJS();

        // Get the client's fingerprint id
        const fingerprint2 = client.getFingerprint();

        // Print the 32bit hash id to the console
        vm.form.fingerprint = fingerprint2;
        localStorage.removeItem("deviceId");
        localStorage.setItem("deviceId_alt", fingerprint2);
      }

    },
  },
};
</script>

<style lang="css" scoped>
.bg-img {
  /* background-image: url("~/assets/img/login-bg.jpg"); */
  background-image: url("~/assets/img/play-store.svg");
  background-position: center;
  background-size: 75%;
  background-repeat: no-repeat;
  background-color: #fbfbfbb8;
}

/* .row {
  background-color: #f6f7fc;
} */
</style>
