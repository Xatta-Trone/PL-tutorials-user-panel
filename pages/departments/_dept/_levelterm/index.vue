<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else>
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
             xs="12" sm="12" md="6" lg="3"
              v-for="course in levelterms.course"
              :key="course.id"
              class="my-2"
            >
              <b-card :title="course.slug.toUpperCase()" class="h-100">
                <b-card-text>
                  {{ course.course_name }}
                </b-card-text>

                <template #footer>
                  <b-button
                    :to="$nuxt.$route.params.levelterm + '/' + course.slug"
                    variant="primary"
                    >Browse</b-button
                  >
                </template>
              </b-card>
            </b-col>
            <b-col
             xs="12" sm="12" md="6" lg="3"
              v-for="post in levelterms.additional_data"
              :key="post.id"
              class="my-2"
            >
              <b-card :title="post.name" class="mb-2 h-100">
                <b-card-text>
                  {{ post.name }}
                </b-card-text>

                <template #footer>
                  <!-- <b-button
                    :to="
                      $nuxt.$route.path + '/' + getFolderIdFromUrl(post.link)
                    "
                    @click="handleGdrive(post)"
                    v-show="getFolderIdFromUrl(post.link) != null"
                    variant="primary btn-sm"
                    class="mx-auto"
                    >Open here</b-button
                  > -->

                  <b-button
                    @click="handleClick(post)"
                    variant="primary "
                    class="mx-auto"
                    >Open in drive</b-button
                  >
                </template>
              </b-card>
            </b-col>
          </b-row>
          <b-row v-else class="mt-5 text-center" align-self="center">
            <b-col><h2>No course found.</h2></b-col>
          </b-row>
        </template>
      </b-container>
    </template>
  </div>
</template>
<script>
import Loading from "../../../../components/loading/Loading.vue";

export default {
  layout: "content",
  middleware: "auth",

  head() {
    return {
      title: `Department ${this.$nuxt.$route.params.dept.toUpperCase()}::${this.$nuxt.$route.params.levelterm.toUpperCase()}- PL Tutorials`,
    };
  },

  data() {
    return {
      levelterms: null,
      loading: false,
    };
  },
  computed: {
    deviceCheck() {
      return this.$store.state.device;
    },
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

    handleClick(data) {
      // console.log(data);
      this.saveActivity({
        activity: "downloaded",
        model_type: 'post',
        model_id: data.id,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: data.name,
        additionalData: `${this.$nuxt.$route.params.dept}/${this.$nuxt.$route.params.levelterm}`,
      });
      window.open(data.link, "_blank").focus();
    },

  },
};
</script>
