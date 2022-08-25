<template>
  <div>
    <CustomHeader title="Register" />
    <div>
      <b-container class="pt-5">
        <b-row>
          <b-col col="8">
            <div>
              <b-tabs pills content-class="mt-3" align="center">
                <b-tab title="For Current Students" active>
                  <div v-if="!userRegisterd">
                    <div class="accordion" role="tablist">
                      <b-card no-body class="mb-1">
                        <b-card-header
                          header-tag="header"
                          class="p-1"
                          role="tab"
                        >
                          <b-button block v-b-toggle.accordion-1 variant="info"
                            >Click to see registration process.</b-button
                          >
                        </b-card-header>
                        <b-collapse
                          id="accordion-1"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body class="text-center">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube-nocookie.com/embed/MeC42p1wuaM"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>

                    <b-form @submit.prevent="register">
                      <b-form-group
                        id="input-group-1"
                        label="Official Name [as per document] ::"
                        label-for="input-1"
                        description="Including dots also if you have in your name i.e. Md. Monzurul ISLAM."
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.name"
                          type="text"
                          placeholder="Official name (as per document)"
                        ></b-form-input>

                        <b-form-invalid-feedback :state="!$v.form.name.$error">
                          Name is required.
                        </b-form-invalid-feedback>

                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="name"
                        />
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

                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="email"
                        />
                      </b-form-group>

                      <b-form-group
                        id="input-group-3"
                        label="Merit position ::"
                        label-for="input-3"
                      >
                        <b-form-input
                          id="input-3"
                          v-model="form.merit_position"
                          type="number"
                          min="1"
                          placeholder="Enter your merit position"
                        ></b-form-input>
                        <b-form-invalid-feedback
                          :state="!$v.form.merit_position.$error"
                        >
                          Merit position is required & must be a valid number.
                        </b-form-invalid-feedback>

                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="merit_position"
                        />
                      </b-form-group>

                      <b-form-group
                        id="input-group-4"
                        label="Hall Name ::"
                        label-for="input-4"
                      >
                        <b-form-select
                          v-model="form.hall_name"
                          :options="halls"
                        >
                          <template #first>
                            <b-form-select-option
                              value=""
                              disabled
                              selected="true"
                              >-- Please select an option
                              --</b-form-select-option
                            >
                          </template>
                        </b-form-select>
                        <b-form-invalid-feedback
                          :state="!$v.form.hall_name.$error"
                        >
                          Please select your hall.
                        </b-form-invalid-feedback>

                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="hall_name"
                        />
                      </b-form-group>

                      <b-form-group
                        id="input-group-5"
                        label="Back side photo of student id ::"
                        label-for="input-5"
                      >
                        <ImageBarcodeReader
                          @decode="onDecode"
                          @error="onError"
                        ></ImageBarcodeReader>
                        <b-form-invalid-feedback
                          :state="!$v.form.student_id.$error"
                        >
                          Please upload your backside of student id.
                        </b-form-invalid-feedback>

                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="student_id"
                        />
                      </b-form-group>

                      <b-button
                        type="submit"
                        variant="primary"
                        class="text-white w-100"
                        :disabled="loading"
                        >{{ btntxt }}</b-button
                      >

                      <b-form-group class="mt-5">
                        <b-row>
                          <b-col md="6">
                            <nuxt-link
                              to="/login"
                              class="ml-auto d-inline-block text-dark text-left"
                              >Already have an account ? Log in</nuxt-link
                            >
                            <b-link href="/register"></b-link
                          ></b-col>
                        </b-row>
                      </b-form-group>
                    </b-form>
                  </div>
                  <div v-else class="text-center my-5">
                    <b-alert variant="success" show>
                      Your account has been created. Please check your email
                      (spam folder too) for your login id and password.
                    </b-alert>
                  </div>
                </b-tab>
                <b-tab title="For Alumni/Foreign Students">
                  <p class="p-5 text-center">
                    Please send a message to our Facebook page here at

                    <a
                      href="https://www.facebook.com/thepltutorials"
                      target="_blank"
                      >https://www.facebook.com/thepltutorials</a
                    >
                    to open your account.
                  </p>
                </b-tab>
              </b-tabs>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import CustomError from "~/components/vuelidate/CustomError.vue";
import { required, email, numeric } from "vuelidate/lib/validators";
import { ImageBarcodeReader } from "vue-barcode-reader";

export default {
  layout: "content",
  components: { CustomError, ImageBarcodeReader },
  // middleware: ["guest"],

  data() {
    return {
      form: {
        name: "",
        email: "",
        merit_position: "",
        hall_name: "",
        student_id: "",
      },
      btntxt: "Register",
      departments: [],
      halls: [],
      loading: false,
      userRegisterd: true,
    };
  },
  mounted() {
    // this.getDepatments();
    this.getHall();
  },
  methods: {
    getDepatments() {
      this.$axios
        .get("departments")
        .then((res) => (this.departments = res.data.data))
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },

    getHall() {
      this.$axios
        .get("halls")
        .then((res) => (this.halls = res.data.data))
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },

    register() {
      this.loading = true;
      console.log("submit!");
      this.$v.$touch();
      this.serverErrors = [];
      this.userRegisterd = false;

      if (this.$v.$invalid) {
        this.loading = false;
        return this.$toast.error("Fill-up the required fields!!");
      }
      let vm = this;
      this.$axios
        .post("register", this.form)
        .then((res) => {
          vm.loading = false;
          vm.userRegisterd = true;
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
          if (err.response.data.hasOwnProperty("message")) {
            this.getmessage(err.response.data.message);
          }

          if (err.response.data.hasOwnProperty("errors")) {
            this.serverErrors = Object.entries(err.response.data.errors);
          }
        });
    },

    onDecode(result) {
      // console.log(result);
      // alert(result);
      this.form.student_id = result;
      this.$toast.success("All good.");
    },
    onError(err) {
      console.log(err);
      this.$toast.error("Error!! please use a different image.");
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
      merit_position: {
        required,
        numeric,
      },
      hall_name: {
        required,
      },
      student_id: {
        required,
      },
    },
  },
};
</script>
