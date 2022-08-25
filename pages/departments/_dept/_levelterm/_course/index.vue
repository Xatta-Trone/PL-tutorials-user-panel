<template>
  <div>
    <CustomHeader
      :title="$nuxt.$route.params.course"
      :subtitle="course ? course.course_name : 'Course Name'"
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
        <b-row v-if="course" class="my-4">
          <b-col
            cols="3"
            v-for="post in course.active_posts"
            :key="post.id"
            class="my-2"
          >
            <b-card :title="post.name" class="mb-2 h-100">
              <b-card-text>
                {{ post.name }}
              </b-card-text>

              <b-button target="_blank" :href="post.link" variant="primary"
                >Click here</b-button
              >
            </b-card>
          </b-col>
        </b-row>
        <b-row v-else class="mt-5 text-center">
          <h2>No post found.</h2>
        </b-row>
      </template>
    </b-container>

  </div>
</template>
<script>

import Loading from "../../../../../components/loading/Loading.vue";
export default {
  layout: "content",
  middleware: "auth",

  data() {
    return {
      course: null,
      loading: false
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
            this.$nuxt.$route.params.levelterm +
            "/" +
            this.$nuxt.$route.params.course
        )
        .then((res) => {
          this.course = res.data.data;
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

<style lang="css">
.card-title {
  text-overflow: ellipsis !important;
  overflow: hidden;
}
</style>
