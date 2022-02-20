<template>
  <div>
    <CustomHeader :title="page ? page.title : 'Page'" />
    <b-container>
      <b-row class="my-4">
        <b-col sm="12" v-if="page" >
          <div v-html="page.body"></div>
        </b-col>
        <b-col v-else class="text-center">
          <h4>Page does not exists <span class="text-danger">:(</span></h4>
        </b-col>
      </b-row>


    </b-container>
  </div>
</template>
<script>
export default {
  layout: "content",


  data() {
    return {
      department: null,
      page:null,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$axios
        .get("page/" + this.$nuxt.$route.params.slug)
        .then((res) => {
          this.page = res.data.data;
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
          // alert('Page does not exists. Err::',err.response.status);
        });
    },
  },
};
</script>
