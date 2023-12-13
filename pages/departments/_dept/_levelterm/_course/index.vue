<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else>
      <CustomHeader :title="$nuxt.$route.params.course" :subtitle="course ? course.course_name : 'Course Name'" />

      <b-container>
        <template v-if="loading">
          <b-row class="my-5">
            <b-col>
              <loading></loading>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <b-row v-if="course && course.active_posts.length > 0" class="my-4">
            <b-col xs="12" sm="2">
              <b-list-group>
                <b-list-group-item style="cursor:pointer;" @click="setActive(post)" :active="post == selectedPost" v-for="(post) in course.active_posts" :key="post.id">{{post.name}}</b-list-group-item>
              </b-list-group>

            </b-col>
            <b-col sm="10">
              <google-drive-folder v-show="selectedPost" :post="selectedPost" :key="postKey" />
            </b-col>
            <!-- <b-col xs="12" sm="2" v-for="(post) in course.active_posts" :key="post.id" class="my-2">

            <div class="accordion" role="tablist" :key="post.id" >
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab" @click="currentCourse = post.id">
                        <b-button block v-b-toggle="'accordion-' + post.id" variant="info">{{ post.name }}</b-button>
                      </b-card-header>
                      <b-collapse :id="'accordion-' + post.id" accordion="my-accordion" role="tabpanel" :visible="index == 0">
                        <b-card-body>
                          {{ getFolderIdFromUrl(post.link)[0] }}
                          <google-drive-folder v-show="currentCourse == post.id" :post="post" :key="post.id" />
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
              {{ post.name }}

            </b-col> -->

            <!-- <b-col xs="12" sm="12" md="6" lg="3" v-for="post in course.active_posts" :key="post.id" class="my-2">
              <b-card :title="post.name" class="mb-2 h-100">
                <b-card-text>
                  {{ post.name }}
                </b-card-text>

                <template #footer>
                  <b-button :to="$nuxt.$route.path + '/' + getFolderIdFromUrl(post.link)
                    " @click="handleGdrive(post)" v-show="getFolderIdFromUrl(post.link) != null"
                    variant="primary btn-sm" class="mx-auto">Open here</b-button>

                  <b-button @click="handleClick(post)" variant="primary btn-sm" class="mx-auto">Open in drive</b-button>
                </template>
              </b-card>
            </b-col> -->
          </b-row>
          <b-row v-else class="mt-5 mb-5 text-center" align-self="center">
            <b-col>
              <h2>No content found.</h2>
            </b-col>
          </b-row>
        </template>
      </b-container>
    </template>
  </div>
</template>
<script>
import Loading from "../../../../../components/loading/Loading.vue";
import GoogleDriveFolder from "../../../../../components/GoogleDriveFolder.vue";
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
      currentCourse: null,
      selectedPost: null,
      postKey: (new Date()).getTime()

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
    GoogleDriveFolder,
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
          if (res.data.data.active_posts.length > 0) {
            this.currentCourse = res.data.data.active_posts[0].id;
            this.setActive(res.data.data.active_posts[0]);
          }
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
    async setActive(post) {
      if (this.selectedPost == post) return;
      this.selectedPost = post;
      this.postKey++;
      await this.$router.replace({ query: {course: post.id} })
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
</style>
