<template>
  <div>
    <CustomHeader title="FAQ" />
    <b-container>
      <b-row class="my-4">
        <b-col sm="12">
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
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  layout: "content",

  data() {
    return {
      faqs: [],
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$axios
        .get("faqs/")
        .then((res) => {
          this.faqs = res.data.data;
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
