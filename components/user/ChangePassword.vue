
<template>
  <div>
    <b-row class="text-left py-1 my-5">
      <b-col sm="12">
        <b-form @submit.prevent="submit">
          <b-form-group id="input-group-1" label="Old password ::" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.old_password"
              type="password"
              placeholder="Old password"
            ></b-form-input>
            <b-form-invalid-feedback :state="!$v.form.old_password.$error">
              Old password is required.
            </b-form-invalid-feedback>
            <custom-error :servererrors="serverErrors" chkkey="old_password" />
          </b-form-group>

           <b-form-group id="input-group-2" label="New password ::" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="New password"
            ></b-form-input>
            <b-form-invalid-feedback :state="!$v.form.password.$error">
              New password is required & must be minimum 8 characters.
            </b-form-invalid-feedback>
            <custom-error :servererrors="serverErrors" chkkey="password" />
          </b-form-group>

          <b-form-group id="input-group-3" label="Retype new password ::" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password_confirmation"
              type="password"
              placeholder="Retype new password"
            ></b-form-input>
            <b-form-invalid-feedback :state="!$v.form.password_confirmation.$error">
              Passwords do not match.
            </b-form-invalid-feedback>
            <custom-error :servererrors="serverErrors" chkkey="password_confirmation" />
          </b-form-group>


          <b-button
            type="submit"
            variant="primary"
            class="text-white w-100"
            :disabled="loading"
            >{{ btntxt }}</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CustomError from "~/components/vuelidate/CustomError.vue";
import { required, sameAs, minLength  } from "vuelidate/lib/validators";
export default {
  layout: "content",
  components: { CustomError },

  data() {
    return {
      form: {
        old_password:'',
        password:'',
        password_confirmation:''
      },
      btntxt: "Change password",
      loading: false,
    };
  },
  mounted() {

  },
  methods: {
    submit() {
      this.loading = true;
      console.log("submit!");
      this.$v.$touch();
      this.serverErrors = [];

      if (this.$v.$invalid) {
        this.loading = false;
        return this.$toast.error("Fill-up the required fields!!");
      }
      let vm = this;
      this.$axios
        .post("reset-user-password", this.form)
        .then((res) => {
          vm.loading = false;
          console.log(res);
          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }

          this.$v.$reset();
          this.form.password_confirmation = "";
          this.form.password = "";
          this.form.old_password = "";
          if (res.data.hasKey("status")) this.getmessage();
        })
        .catch((err) => {
          vm.loading = false;
          console.log("Errrr", err);
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

      old_password: {
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      password_confirmation: {
        sameAsPassword: sameAs('password'),
      },
    },
  },
};
</script>
