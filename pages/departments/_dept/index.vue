<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else lazy>
      <CustomHeader
        :title="$nuxt.$route.params.dept"
        :subtitle="department ? department.name : ''"
      />

      <b-container>
        <template v-if="loading">
          <b-row class="my-5">
            <b-col>
              <loading></loading>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <b-row v-if="department && department.levelterms.length" class="my-4">
            <b-col
             xs="12" sm="12" md="6" lg="3"
              v-for="levelterm in department.levelterms"
              :key="levelterm.id"
            >
              <b-card :title="levelterm.slug" class="my-2">
                <b-card-text>
                  {{ levelterm.name }}
                </b-card-text>

                <template #footer>
                  <b-button
                    :to="$nuxt.$route.params.dept + '/' + levelterm.slug"
                    variant="primary"
                    >Browse</b-button
                  >
                </template>
              </b-card>
            </b-col>
          </b-row>
          <b-row
            v-if="department && department.levelterms.length == 0"
            class="mt-5 text-center"
            align-self="center"
          >
            <b-col><h2>No level-term found.</h2></b-col>
          </b-row>
        </template>
      </b-container>
    </template>
  </div>
</template>
<script>
import Devicecheck from "../../../components/Devicecheck.vue";
import Loading from "../../../components/loading/Loading.vue";

export default {
  layout: "content",
  middleware: ["auth"],

  head() {
    return {
      title: `Department:: ${this.$nuxt.$route.params.dept.toUpperCase()} - PL Tutorials`,
    };
  },

  data() {
    return {
      department: null,
      loading: false,
    };
  },
  components: {
    Loading,
    Devicecheck,
  },
  mounted() {
    this.getData();
  },

  computed: {
    deviceCheck() {
      return this.$store.state.device;
    },
  },

  methods: {
    getData() {
      let vm = this;
      vm.loading = true;
      this.$axios
        .get("departments/" + this.$nuxt.$route.params.dept)
        .then((res) => {
          this.department = res.data.data;
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err.response);
          // alert(err.response.status);
          vm.getmessage(err.response.data.message);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
