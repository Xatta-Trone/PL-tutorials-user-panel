<template>
  <b-container fluid class="vh-100">
    <b-row class="h-100 overflow-hidden" align-v="center" align-h="center">
      <b-col md="6" class="overflow-x p-5">
        <b-form @submit.prevent="userLogin">
          <h3>Login to <strong class="text-primary">PL Tutorials</strong></h3>
          <b-form-group
            id="input-group-1"
            label="Email address ::"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email address"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password ::"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Enter your password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <p v-show="errMsg" class="text-danger text-sm">
            {{ errMsg }}
          </p>

          <b-button type="submit" variant="primary" class="text-white">{{
            btntxt
          }}</b-button>

          <b-form-group class="mt-5">
            <b-row>
              <b-col sm="4">
                <nuxt-link
                  to="/"
                  class="ml-auto d-inline-block text-dark text-left"
                  >Home</nuxt-link
                >
                <b-link href="/register"></b-link
              ></b-col>
              <b-col sm="4">
                <nuxt-link
                  to="/register"
                  class="ml-auto d-inline-block text-dark text-left"
                  >Create new account</nuxt-link
                >
                <b-link href="/register"></b-link
              ></b-col>

              <b-col sm="4" class="text-right">
                <nuxt-link
                  to="/request-password"
                  class="ml-auto d-inline-block text-danger text-left"
                  >forgot your password ?</nuxt-link
                >
              </b-col>
            </b-row>
          </b-form-group>
        </b-form>
      </b-col>
      <b-col class="bg-img h-100 hidden-sm"> </b-col>
    </b-row>
  </b-container>
</template>
<script>
import FingerprintJS from "@fingerprintjs/fingerprintjs";
export default {
  layout: "auth",
  // middleware: "guest",
  data() {
    return {
      form: {
        email: "",
        password: "",
        fingerprint: "",
      },
      btntxt: "Log in",
      errMsg: "",
    };
  },
  mounted() {
    this.visitorId();
  },
  methods: {
    async userLogin() {
      this.errMsg = "";
      this.visitorId();
      try {
        this.btntxt = "Logging in.....";
        let response = await this.$auth
          .loginWith("laravelSanctum", {
            data: this.form,
          })
          .then((res) => {
            this.btntxt = "Login successful";
            console.log("asdfsf", res.data);
            // set loggedin user
            localStorage.setItem('auth_user',JSON.stringify(res.data));


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
        this.form.fingerprint = visitorId;
      })();

      // // console.log("from compoenent", window.fingerprint.visitorId);
      // if (window.fingerprint) {
      //   this.fingerprint = window.fingerprint.visitorId;
      // }
    },
  },
};
</script>

<style lang="css">
.bg-img {
  background-image: url("~/assets/img/login-bg.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
/* .row {
  background-color: #f6f7fc;
} */
</style>
