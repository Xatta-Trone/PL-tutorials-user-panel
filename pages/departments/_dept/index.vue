<template>
  <div>
    <CustomHeader :title="$nuxt.$route.params.dept" />

    <b-container>
      <template v-if="loading">
        <b-row class="my-5">
          <b-col>
            <loading></loading>
            </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-row v-if="department" class="my-4">
        <b-col
          cols="3"
          v-for="levelterm in department.levelterms"
          :key="levelterm.id"
        >
          <b-card :title="levelterm.slug" class="my-2">
            <b-card-text>
              {{ levelterm.name }}
            </b-card-text>

            <b-button
              :to="$nuxt.$route.params.dept + '/' + levelterm.slug"
              variant="primary"
              >Browse</b-button
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row v-else class="mt-5 text-center" align-self="center">
        <b-col><h2>No level-term found.</h2></b-col>
      </b-row>
      </template>
    </b-container>


  </div>
</template>
<script>
import Loading from "../../../components/loading/Loading.vue";

export default {
  layout: "content",
  middleware: "auth",

  data() {
    return {
      department: null,
      loading: false,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.getData();
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
        }).finally(() => (this.loading = false));
    },
  },
};
</script>
