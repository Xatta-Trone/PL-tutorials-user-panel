<template>
  <div>
    <CustomHeader title="Password Reset" />
    <div>
      <b-container class="pt-5">
        <b-row>
          <b-col col="8">
            <div>
              <b-form @submit.prevent="resetPassword">
                <b-form-group
                  id="input-group-2"
                  label="Type your new password ::"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    placeholder="Type your new password"
                    @input="$v.form.password.$touch()"
                  ></b-form-input>
                  <b-form-invalid-feedback :state="!$v.form.password.$error">
                    Password length has to be minimum 8 characters long.
                  </b-form-invalid-feedback>

                  <custom-error
                    :servererrors="serverErrors"
                    chkkey="password"
                  />
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Re-type your new password ::"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.password_confirmation"
                    @input="$v.form.password_confirmation.$touch()"
                    type="password"
                    placeholder="re-type your new password"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    :state="!$v.form.password_confirmation.$error"
                  >
                    Passwords do not match.
                  </b-form-invalid-feedback>

                  <custom-error
                    :servererrors="serverErrors"
                    chkkey="password"
                  />
                </b-form-group>

                <div class="mb-2" v-if="errMsg || successMsg">
                  <small v-if="errMsg" class="text-danger">{{ errMsg }}</small>
                  <small v-if="successMsg" class="text-success"
                    >Password changed successfully. Please login now.</small
                  >
                </div>

                <b-button
                  type="submit"
                  variant="primary"
                  class="text-white w-100"
                  :disabled="loading"
                  >{{
                    loading ? "Changing password" : "Change password"
                  }}</b-button
                >

                <b-form-group class="mt-5">
                  <b-row>
                    <b-col md="6">
                      <nuxt-link
                        to="/login"
                        class="ml-auto d-inline-block text-danger text-left"
                        >Already have an account ? Log in</nuxt-link
                      >
                    </b-col>
                    <b-col md="6">
                      <nuxt-link
                        to="/register"
                        class="ml-auto d-inline-block text-danger text-right"
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
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  layout: "content",
  components: { CustomError },
   middleware: "guest",
    head(){
    return {
      title: 'Reset password - PL Tutorials'
    }
  },

  data() {
    return {
      form: {
        email: this.$route.query.email,
        token: this.$route.query.token,
        password: "",
        password_confirmation: "",
      },
      errMsg: "",
      successMsg: "",
      loading: false,
    };
  },
  mounted() {},
  methods: {
    resetPassword() {
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
        .post("reset-password", this.form)
        .then((res) => {
          vm.loading = false;
          this.successMsg = res.data.message;

          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }

          this.$v.$reset();
          this.form.password = "";
          this.form.password_confirmation = "";
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
      password: {
        required,
        minLength: minLength(8),
      },
      password_confirmation: {
        sameAsPassword: sameAs("password"),
      },
    },
  },
};
</script>
