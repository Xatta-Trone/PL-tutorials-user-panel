<template>
  <div>
    <CustomHeader title="departments" />
    <b-container>
      <b-row v-if="departments" class="mt-5">
        <b-col cols="3" v-for="dept in departments" :key="dept.id">
          <b-card :title="dept.slug.toUpperCase()" class="mb-2">
            <b-card-text>
              {{ dept.name }}
            </b-card-text>

            <b-button
              :to="$nuxt.$route.fullPath + '/' + dept.slug"
              variant="primary"
              >Browse</b-button
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row v-else class="mt-5 text-center">
        <h2 class="text-center">No department found.</h2>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { RotateSquare5 } from "vue-loading-spinner";

export default {
  layout: "content",

  data() {
    return {
      departments: null,
      loading: false,
    };
  },
  components: {
    RotateSquare5,
  },
  mounted() {
    this.getDepatments();
  },

  methods: {
    getDepatments() {
      this.loading = true;
      this.$axios
        .get("departments")
        .then((res) => (this.departments = res.data.data))
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
      // .finally(() => (this.loading = false));
    },
  },
};
</script>


<style lang="css">
.full-height {
  position: relative;
  height: 100vh;
}
</style>

