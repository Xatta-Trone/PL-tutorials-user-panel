<template>
  <div>
    <CustomHeader title="Register" />
    <div>
      <b-container class="pt-5">
        <b-row>
          <b-col>
            <div>
              <b-tabs pills content-class="mt-3" align="center">
                <b-tab title="For Current Students" active>
                  <div v-if="!userRegisterd">
                    <div class="accordion" role="tablist">
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block v-b-toggle.accordion-1 variant="info">Click to see registration
                            process.</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                          <b-card-body class="text-center">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3U3P6OKBV4o"
                              title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen></iframe>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>

                    <b-form @submit.prevent="register" novalidate>
                      <b-form-group label="Select Your Graduation Level ::">
                        <b-form-radio v-model="form.grad_level" name="grad_level"
                          value="UG">Undergraduate</b-form-radio>
                        <b-form-radio v-model="form.grad_level" name="grad_level" value="PG">Post
                          Graduate</b-form-radio>
                      </b-form-group>

                      <b-form-group id="input-group-1" label="Official Name [as per document] ::" label-for="input-1"
                        description="Including dots also if you have in your name i.e. Md. Monzurul ISLAM.">
                        <b-form-input id="input-1" v-model="form.name" type="text"
                          placeholder="Official name (as per document)"></b-form-input>

                        <b-form-invalid-feedback :state="!$v.form.name.$error">
                          Name is required.
                        </b-form-invalid-feedback>

                        <custom-error :servererrors="serverErrors" chkkey="name" />
                      </b-form-group>

                      <b-form-group id="input-group-2" label="Email address ::" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.email" type="email"
                          placeholder="Enter your email address"></b-form-input>
                        <b-form-invalid-feedback :state="!$v.form.email.$error">
                          Email is required & must be a valid email address.
                        </b-form-invalid-feedback>

                        <custom-error :servererrors="serverErrors" chkkey="email" />
                      </b-form-group>

                      <b-form-group v-show="form.grad_level == 'UG'" id="input-group-3" label="Merit position ::"
                        label-for="input-3">
                        <b-form-input id="input-3" v-model="form.merit_position" type="number" min="1"
                          placeholder="Enter your merit position"></b-form-input>
                        <b-form-invalid-feedback :state="!$v.form.merit_position.$error">
                          Merit position is required & must be a valid number.
                        </b-form-invalid-feedback>

                        <custom-error :servererrors="serverErrors" chkkey="merit_position" />
                      </b-form-group>

                      <b-form-group v-show="form.grad_level == 'UG'" id="input-group-4" label="Hall Name ::"
                        label-for="input-4">
                        <b-form-select v-model="form.hall_name" :options="halls">
                          <template #first>
                            <b-form-select-option value="" disabled selected="true">-- Please select an option
                              --</b-form-select-option>
                          </template>
                        </b-form-select>
                        <b-form-invalid-feedback :state="!$v.form.hall_name.$error">
                          Please select your hall.
                        </b-form-invalid-feedback>

                        <custom-error :servererrors="serverErrors" chkkey="hall_name" />
                      </b-form-group>

                      <b-form-group id="input-group-5" label="Back side photo of student id ::" label-for="input-5">
                        <ImageBarcodeReader @decode="onDecode" @error="onError" :key="barcodeKey" ref="inputFile"
                          class="form-control"></ImageBarcodeReader>

                        <div id="preview">
                          <span class="text-danger d-block">
                            Selected file will be previewed below. Please ignore
                            when the input says no file selected after file
                            selection.
                          </span>
                          <img v-if="url" class="mt-2" height="200" :src="url" />
                        </div>

                        <b-form-invalid-feedback :state="!$v.form.student_id.$error">
                          Please upload your backside of student id.
                        </b-form-invalid-feedback>

                        <custom-error :servererrors="serverErrors" chkkey="student_id" />
                      </b-form-group>

                      <b-alert :show="showContactErr > 1" variant="warning">Still having problem with registration ?
                        Send a message
                        <a target="_blank" style="color:#000;" href="https://m.me/thepltutorials">here
                          https://m.me/thepltutorials</a>
                        with your student id and email address.
                      </b-alert>

                      <b-button type="submit" variant="primary" class="text-white w-100" :disabled="loading">{{ btntxt
                        }}</b-button>

                      <b-form-group class="mt-5">
                        <b-row>
                          <b-col md="6">
                            <nuxt-link to="/login" class="
                                ml-auto
                                d-inline-block
                                text-left text-danger
                              ">Already have an account ? Log in</nuxt-link>
                            <b-link href="/register"></b-link></b-col>
                        </b-row>
                      </b-form-group>
                    </b-form>
                  </div>
                  <div v-else class="text-center my-5">
                    <b-alert variant="success" show>
                      Your account has been created. Please check your email
                      (spam folder also) for your login ID and password.
                    </b-alert>
                    <div class="text-center my-3">
                      <p>
                        Scan or click the link below to install the
                        Android app.
                      </p>
                      <qrcode-vue value="https://play.google.com/store/apps/details?id=com.pltutorials.plandroid"
                        size="150" level="H" margin="2" />
                      <a href="https://play.google.com/store/apps/details?id=com.pltutorials.plandroid"
                        target="_blank"><img src="~/assets/img/googleplay.png" height="110" /></a>
                    </div>
                  </div>
                </b-tab>
                <b-tab title="For Alumni/Foreign Students">
                  <p class="p-5 text-center">
                    Please send a message to our Facebook page here at

                    <a href="https://www.facebook.com/thepltutorials"
                      target="_blank">https://www.facebook.com/thepltutorials</a>
                    to open your account.
                  </p>
                  <div class="text-center my-3">
                    <p>
                      Scan or click the link below to install the
                      Android app.
                    </p>
                    <qrcode-vue value="https://play.google.com/store/apps/details?id=com.pltutorials.plandroid"
                      size="150" level="H" margin="2" />
                    <a href="https://play.google.com/store/apps/details?id=com.pltutorials.plandroid"
                      target="_blank"><img src="~/assets/img/googleplay.png" height="110" /></a>
                  </div>
                </b-tab>
                <b-tab title="For Non-buetians">
                  <p class="p-5 text-center">
                    We are sorry, this website is only for the undergraduate
                    students of BUET. However, you can still access the
                    <b-link to="/books">Books</b-link> section. <br />
                    Have a good day!!
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
import { required, email, numeric, requiredIf } from "vuelidate/lib/validators";
import { ImageBarcodeReader } from "vue-barcode-reader";
import QrcodeVue from "qrcode.vue";

export default {
  layout: "content",
  components: { CustomError, ImageBarcodeReader, QrcodeVue },
  middleware: ["guest"],
  head() {
    return {
      title: "Register - PL Tutorials",
      script: [{ src: "//unpkg.com/javascript-barcode-reader", body: true }],
    };
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        merit_position: "",
        hall_name: "",
        student_id: "",
        grad_level: "UG",
      },
      btntxt: "Register",
      departments: [],
      halls: [],
      loading: false,
      userRegisterd: false,
      url: null,
      barcodeKey: 0,
      showContactErr: 0,
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
        this.showContactErr += 1;
        return this.$toast.error("Fill-up the required fields!!");
      }
      let vm = this;

      if (this.form.grad_level == "PG") {
        this.form.merit_position = 0;
        this.form.hall_name = "Unknown Hall";
      }

      this.$axios
        .post("register", this.form)
        .then((res) => {
          vm.loading = false;
          vm.userRegisterd = false;
          console.log(res);
          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }

          if (res.data.hasOwnProperty("message") && res.data.message == 'ACCOUNT_CREATED_CHECK_YOUR_EMAIL_FOR_PASSWORD') {
            vm.userRegisterd = true;
          }

          this.$v.$reset();
          if (res.data.hasKey("status")) this.getmessage();
        })
        .catch((err) => {
          vm.loading = false;
          this.showContactErr += 1;
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

      this.url = URL.createObjectURL(this.$refs.inputFile.$el.files[0]);
      this.barcodeKey += 1;

      if ((result?.trim()?.length || 0) == 10) {
        // alert(result);

        this.form.student_id = result?.trim();
        this.$toast.success(`All good. ${result}`);
        this.barcodeKey += 1;
        // this.$refs.inputFile.reset();
      } else {
        this.form.student_id = "";
        this.barcodeKey += 1;
        this.showContactErr += 1;
        return this.$toast.error(
          "Error!! please use a different image or fix the image rotation."
        );
      }
    },
    onError(err) {
      // this.$refs.inputFile.reset();
      this.url = URL.createObjectURL(this.$refs.inputFile.$el.files[0]);
      console.log(err);
      console.log("Vue barcode reader failed, trying another library");
      this.barcodeKey += 1;

      // try another library
      javascriptBarcodeReader({
        /* Image ID || HTML5 Image || HTML5 Canvas || HTML5 Canvas ImageData || Image URL */
        image: this.url,
        barcode: "code-39",
        // barcodeType: 'industrial',
        options: {
          useAdaptiveThreshold: true, // for images with sahded portions
          // singlePass: true
        },
      })
        .then((code) => {
          console.log(code);
          if ((code?.trim()?.length || 0) == 10) {
            // alert(code);
            this.form.student_id = code?.trim();
            this.$toast.success(`All good. ${code}`);
          } else {
            this.form.student_id = "";
            this.showContactErr += 1;
            return this.$toast.error(
              "Error!! please use a different image or fix the image rotation."
            );
          }
        })
        .catch((err) => {
          console.log(err);
          this.form.student_id = "";
          this.showContactErr += 1;
          return this.$toast.error(
            "Error!! please use a different image or fix the image rotation."
          );
        });
    },
  },
  watch: {
    "form.grad_level": {
      handler: function (after, before) {
        // Changes detected. Do work...
        console.log(after, before, this.form.l_t);

        if (after == 'PG') {
          this.form.merit_position = 0;
          this.form.hall_name = "Unknown Hall";
        } else {
          this.form.merit_position = "";
          this.form.hall_name = "";
        }



      },
      deep: true,
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
        required: requiredIf((value) => value.grad_level === 'UG'),
      },
      student_id: {
        required,
      },
    },
  },
};
</script>
