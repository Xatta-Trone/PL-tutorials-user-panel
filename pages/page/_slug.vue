<template>
  <div>
    <CustomHeader :title="page ? page.title : 'Page'" />

    <b-container>
      <template v-if="loading">
        <b-row class="my-5">
          <b-col>
            <loading></loading>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-row class="my-4">
          <b-col sm="12" v-if="page">
            <vue-markdown>{{ page.body }}</vue-markdown>
          </b-col>
          <b-col v-else class="text-center">
            <h4>Page does not exists <span class="text-danger">:(</span></h4>
          </b-col>
        </b-row>
      </template>
    </b-container>

  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
import Loading from "../../components/loading/Loading.vue";
export default {
  layout: "content",
  components: {
    "vue-markdown": VueMarkdown,
    Loading,
  },

  head(){
    return {
      title: `${this.$nuxt.$route.params.slug.replaceAll('-',' ').toLowerCase().replace(/\b\w/g, s => s.toUpperCase())} - PL Tutorials`
    }
  },

  data() {
    return {
      page: null,
      loading: false,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.loading = true;
      let vm = this;
      this.$axios
        .get("page/" + this.$nuxt.$route.params.slug)
        .then((res) => {
          this.page = res.data.data;
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err.response);
          // alert('Page does not exists. Err::',err.response.status);
          vm.getmessage(err.response.data.message);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
