<template>
  <b-form @submit.prevent="submit">
    <b-form-group id="input-group-1" label="Name ::" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.name"
        type="text"
        placeholder="your name"
      ></b-form-input>

      <b-form-invalid-feedback :state="!$v.form.name.$error">
        Name is required.
      </b-form-invalid-feedback>

      <custom-error :servererrors="serverErrors" chkkey="name" />
    </b-form-group>

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

      <custom-error :servererrors="serverErrors" chkkey="email" />
    </b-form-group>

    <b-form-group id="input-group-3" label="Subject ::" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="form.subject"
        type="text"
        placeholder="Email subject"
      ></b-form-input>

      <b-form-invalid-feedback :state="!$v.form.subject.$error">
        Email subject is required.
      </b-form-invalid-feedback>

      <custom-error :servererrors="serverErrors" chkkey="subject" />
    </b-form-group>

    <b-form-group
      id="input-group-4"
      label="Message body ::"
      label-for="input-4"
    >
      <b-form-textarea
        id="input-4"
        v-model="form.body"
        placeholder="Write your message"
        rows="1"
      ></b-form-textarea>

      <b-form-invalid-feedback :state="!$v.form.body.$error">
        Message is required.
      </b-form-invalid-feedback>

      <custom-error :servererrors="serverErrors" chkkey="body" />
    </b-form-group>

    <b-button
      type="submit"
      variant="primary"
      class="text-white w-100"
      :disabled="loading"
      >{{ btntxt }}</b-button
    >
  </b-form>
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
        name: "",
        email: "",
        subject: "",
        body: "",
      },
      btntxt: "Submit",
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
        .post("submit-response", this.form)
        .then((res) => {
          vm.loading = false;
          console.log(res);
          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }

          this.$v.$reset();
          this.form.name = "";
          this.form.email = "";
          this.form.subject = "";
          this.form.body = "";
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
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      subject: {
        required,
      },
      body: {
        required,
      },
    },
  },
};
</script>

