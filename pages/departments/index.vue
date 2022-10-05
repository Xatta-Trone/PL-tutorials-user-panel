<template>
  <div>
    <CustomHeader title="departments" />
    <b-container>
      <template v-if="loading">
        <b-row class="my-5">
          <b-col>
            <loading></loading>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-row v-if="dept_notice" class="mt-3">
          <b-col>
            <b-alert show dismissible>
              {{ dept_notice.value }}
            </b-alert>
          </b-col>
        </b-row>

        <b-row v-if="departments" class="mt-3 mb-5" align-v="stretch">
          <b-col cols="3" v-for="dept in departments" :key="dept.id">
            <b-card :title="dept.slug.toUpperCase()" class="mb-2">
              <b-card-text>
                {{ dept.name }}
              </b-card-text>

              <b-card-text>
                Accessible to: {{ dept.can_be_accessed_by.toUpperCase() }}
              </b-card-text>

              <b-button
                :to="$nuxt.$route.fullPath + '/' + dept.slug"
                variant="primary"
                >Browse</b-button
              >
            </b-card>
          </b-col>
        </b-row>
        <b-row v-else class="my-5 text-center">
          <h2 class="text-center" align-self="center">No department found.</h2>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
import Loading from "../../components/loading/Loading.vue";

export default {
  layout: "content",
  head() {
    return {
      title: "Departments - PL Tutorials",
    };
  },

  data() {
    return {
      departments: null,
      dept_notice: null,
      loading: false,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.getDepatments();
    this.getDeptNotice();
  },

  methods: {
    getDepatments() {
      this.loading = true;
      this.$axios
        .get("departments")
        .then((res) => {
          this.departments = res.data.data;
        })
        .catch(function (err) {
          console.log(err.response);
          // alert(err.response.status);
          vm.getmessage(err.response.data.message);
        })
        .finally(() => (this.loading = false));
    },
    getDeptNotice() {
      this.$axios
        .get("get-value?key=dept_notice")
        .then((res) => {
          this.dept_notice = res.data.data;
        })
        .catch(function (err) {
          console.log(err.response);
        });
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

