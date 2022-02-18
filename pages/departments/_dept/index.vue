<template>
  <div>
    <CustomHeader :title="department ? department.name : 'Department'" />
    <b-container>
      <b-row v-if="department" class="mt-5">
        <b-col
          cols="3"
          v-for="levelterm in department.levelterms"
          :key="levelterm.id"
        >
          <b-card :title="levelterm.name" class="mb-2">
            <b-card-text>
              {{ levelterm.slug }}
            </b-card-text>

            <b-button
              :to="$nuxt.$route.params.dept + '/' + levelterm.slug"
              variant="primary"
              >Click here</b-button
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row v-else class="mt-5 text-center">
        <h2>No level term found.</h2>
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
      department: null,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$axios
        .get("departments/" + this.$nuxt.$route.params.dept)
        .then((res) => {
          this.department = res.data.data;
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
