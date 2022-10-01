<template>
  <div>
    <CustomHeader title="FAQ" />
    <b-container>
      <template v-if="loading">
        <b-row class="my-5">
          <b-col>
            <loading></loading>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-row class="my-4" align-self="center">
          <b-col sm="12" v-if="faqs.length">
            <div
              class="accordion"
              role="tablist"
              v-for="faq in faqs"
              :key="faq.id"
            >
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle="'accordion-' + faq.id"
                    variant="info"
                    >{{ faq.title }}</b-button
                  >
                </b-card-header>
                <b-collapse
                  :id="'accordion-' + faq.id"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      <span v-html="faq.body"></span>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>

          <b-col v-else align-self="center" class="text-center"><h2>No FAQ found!!</h2></b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>
<script>
import Loading from "../../components/loading/Loading.vue";
export default {
  layout: "content",
  components: {
    Loading,
  },

  data() {
    return {
      faqs: [],
      loading: false,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.loading = true;
      this.$axios
        .get("faqs")
        .then((res) => {
          this.faqs = res.data.data;
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
