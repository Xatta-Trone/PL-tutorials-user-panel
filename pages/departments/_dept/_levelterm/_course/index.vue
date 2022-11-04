<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else>
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

                <template #footer>
                  <b-button
                    :to="
                      $nuxt.$route.path + '/' + getFolderIdFromUrl(post.link)
                    "
                    @click="handleGdrive(post)"
                    v-show="getFolderIdFromUrl(post.link) != null"
                    variant="primary btn-sm"
                    class="mx-auto"
                    >Open here</b-button
                  >

                  <b-button
                    @click="handleClick(post)"
                    variant="primary btn-sm"
                    class="mx-auto"
                    >Open in drive</b-button
                  >
                </template>
              </b-card>
            </b-col>
          </b-row>
          <b-row v-else class="mt-5 text-center" align-self="center">
            <b-col><h2>No content found.</h2></b-col>
          </b-row>
        </template>
      </b-container>
    </template>
  </div>
</template>
<script>
import Loading from "../../../../../components/loading/Loading.vue";
export default {
  layout: "content",
  middleware: "auth",

  head() {
    return {
      title: `${this.$nuxt.$route.params.dept.toUpperCase()}::${this.$nuxt.$route.params.levelterm.toUpperCase()}::${this.$nuxt.$route.params.course.toUpperCase()}- PL Tutorials`,
    };
  },

  data() {
    return {
      course: null,
      loading: false,
    };
  },
  computed: {
    deviceCheck() {
      return this.$store.state.device;
    },
  },
  mounted() {
    console.log(this.$nuxt.$route);
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

    handleClick(data) {
      // console.log(data);
      this.saveActivity({
        activity: "downloaded",
        model_type: data.post_type,
        model_id: data.id,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: data.name,
        additionalData: `${this.$nuxt.$route.params.dept}/${this.$nuxt.$route.params.levelterm}/${this.$nuxt.$route.params.course}`,
      });
      window.open(data.link, "_blank").focus();
    },

    handleGdrive(data) {
      // console.log(data);
      this.saveActivity({
        activity: "downloaded",
        model_type: data.post_type,
        model_id: data.id,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: data.name,
        additionalData: `${this.$nuxt.$route.params.dept}/${this.$nuxt.$route.params.levelterm}/${this.$nuxt.$route.params.course}`,
      });

      // window.location.href =
      //   window.location.origin +
      //   window.location.pathname +
      //   "/" +
      //   this.getFolderIdFromUrl(data.link);

      // window.open(, "_blank").focus();
    },

    getFolderIdFromUrl(url) {
      return url.match(/[-\w]{25,}/);
    },
  },
};
</script>

<style lang="css">
.card-title {
  text-overflow: ellipsis !important;
  overflow: hidden;
}

.card-footer {
  background: transparent;
  border: none;
}
</style>
