<template>
  <div>
    <CustomHeader
      :title="levelterms ? levelterms.department.name : 'Department'"
      :subtitle="levelterms ? levelterms.name : 'Level Term'"
    />
    <b-container>
      <b-row v-if="levelterms" class="mt-5">
        <b-col cols="3" v-for="course in levelterms.course" :key="course.id">
          <b-card :title="course.course_name" class="mb-2">
            <b-card-text>
              {{ course.slug }}
            </b-card-text>

            <b-button
              :to="$nuxt.$route.params.levelterm + '/' + course.slug"
              variant="primary"
              >Click here</b-button
            >
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
      levelterms: null,
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
            this.$nuxt.$route.params.levelterm
        )
        .then((res) => {
          this.levelterms = res.data.data;
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
