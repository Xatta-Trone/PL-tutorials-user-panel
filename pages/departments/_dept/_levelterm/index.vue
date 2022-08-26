<template>
  <div>
    <CustomHeader
      :title="$nuxt.$route.params.dept"
      :subtitle="levelterms ? levelterms.name : $nuxt.$route.params.levelterm"
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
        <b-row v-if="levelterms" class="my-4">
          <b-col
            cols="3"
            v-for="course in levelterms.course"
            :key="course.id"
            class="my-2"
          >
            <b-card :title="course.slug.toUpperCase()" class="h-100">
              <b-card-text>
                {{ course.course_name }}
              </b-card-text>

              <b-button
                :to="$nuxt.$route.params.levelterm + '/' + course.slug"
                variant="primary"
                >Click here</b-button
              >
            </b-card>
          </b-col>
        </b-row>
        <b-row v-else class="mt-5 text-center" align-self="center">
        <b-col><h2>No course found.</h2></b-col>
      </b-row>
      </template>
    </b-container>

  </div>
</template>
<script>
import Loading from "../../../../components/loading/Loading.vue";

export default {
  layout: "content",
  middleware: "auth",

  data() {
    return {
      levelterms: null,
      loading:false,
    };
  },
  mounted() {
    this.getData();
  },
  components: {
    Loading,
  },

  methods: {
    getData() {
      let vm = this;
      vm.loading = true;
      this.$axios
        .get(
          "departments/" +
            this.$nuxt.$route.params.dept +
            "/" +
            this.$nuxt.$route.params.levelterm
        )
        .then((res) => {
          this.levelterms = res.data.data;
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
