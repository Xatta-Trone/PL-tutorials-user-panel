<template>
  <div>
    <CustomHeader title="Password Reset" />
    <div>
      <b-container class="pt-5">
        <b-row>
          <b-col col="8">
            <div>
              <b-form @submit.prevent="requestpassword">
                <b-form-group
                  id="input-group-2"
                  label="Email address ::"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter your email address"
                  ></b-form-input>
                  <b-form-invalid-feedback :state="!$v.form.email.$error">
                    Email is required & must be a valid email address.
                  </b-form-invalid-feedback>
                  <small v-if="errMsg" class="text-danger">{{ errMsg }}</small>
                  <small v-if="successMsg" class="text-success"
                    >Please check your email for password reset link.</small
                  >
                  <custom-error :servererrors="serverErrors" chkkey="email" />
                </b-form-group>

                <b-button
                  type="submit"
                  variant="primary"
                  class="text-white w-100"
                  :disabled="loading"
                  >{{
                    loading ? "Requesting" : "Request password reset link"
                  }}</b-button
                >

                <b-form-group class="mt-5">
                  <b-row>
                    <b-col md="6">
                      <nuxt-link
                        to="/login"
                        class="ml-auto d-inline-block text-dark text-left"
                        >Already have an account ? Log in</nuxt-link
                      >
                    </b-col>
                    <b-col md="6">
                      <nuxt-link
                        to="/register"
                        class="ml-auto d-inline-block text-dark text-right"
                        >Don't have an account ? Register</nuxt-link
                      >
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import CustomError from "~/components/vuelidate/CustomError.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  layout: "content",
  components: { CustomError },

  data() {
    return {
      form: {
        email: "",
      },
      errMsg: "",
      successMsg: "",
      loading: false,
    };
  },
  mounted() {},
  methods: {
    requestpassword() {
      this.loading = true;
      console.log("submit!");
      this.$v.$touch();
      this.serverErrors = [];
      this.errMsg = "";
      this.successMsg = "";

      if (this.$v.$invalid) {
        this.loading = false;
        return this.$toast.error("Filup the required fields!!");
      }
      let vm = this;
      this.$axios
        .post("request-password", this.form)
        .then((res) => {
          vm.loading = false;
          this.successMsg = res.data.message;
          console.log(res);
          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }

          this.$v.$reset();
          if (res.data.hasKey("status")) this.getmessage();
        })
        .catch((err) => {
          vm.loading = false;
          console.log("Errrr", err);
          this.errMsg = err.response.data.message;
          if (err.response.data.hasOwnProperty("message")) {
            this.getmessage(err.response.data.message);
          }

          if (err.response.data.hasOwnProperty("errors")) {
            this.serverErrors = Object.entries(err.response.data.errors);
          }
        });
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
    },
  },
};
</script>
