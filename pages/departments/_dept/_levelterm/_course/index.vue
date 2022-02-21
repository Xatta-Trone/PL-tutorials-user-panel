<template>
  <div>
    <CustomHeader
      :title="course ? course.slug : 'Course Code'"
      :subtitle="course ? course.course_name : 'Course'"
    />
    <b-container>
      <b-row v-if="course" class="mt-5">
        <b-col
          cols="3"
          v-for="post in course.active_posts"
          :key="post.id"
          class="mb-3"
        >
          <b-card :title="post.name" class="mb-2 h-100">
            <b-card-text>
              {{ post.name }}
            </b-card-text>

            <template #footer>
              <b-button target="_blank" :href="post.link" variant="primary"
                >Click here</b-button
              >
            </template>
          </b-card>
        </b-col>
      </b-row>
      <b-row v-else class="mt-5 text-center">
        <h2>No course found.</h2>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  layout: "content",
  middleware: "auth",

  data() {
    return {
      course: null,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
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
          console.log(err);
          alert(err.response.status);
        });
    },
  },
};
</script>
