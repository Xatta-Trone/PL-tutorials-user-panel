<template>
  <div>
    <div class="hero-area">
      <b-container>
        <b-row class="vh-100 text-center" align-v="center">
          <b-col sm="12">
            <!-- <div v-if="quote">
              <h4 class="text-danger">
                <font-awesome-icon :icon="['fas', 'quote-left']" />{{
                  quote.quote
                }}
              </h4>
              <p>{{ quote.author }}</p>
            </div> -->
            <h1>
              This website is owned by
              <span class="text-primary">Sumiya Shamim <br />#1604144</span>
            </h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Info-area/>
    <App-area/>
    <Testimonial-area/>






  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "content",
  data() {
    return {
      quote: null,
    };
  },
  mounted() {
    this.getQuote();
  },
  methods: {
    getQuote() {
      if (localStorage.hasOwnProperty("quote")) {
        this.quote = JSON.parse(localStorage.getItem("quote"));
      }
      this.$axios
        .get("quote")
        .then((res) => {
          this.quote = res.data.data;
          localStorage.setItem("quote", JSON.stringify(res.data.data));
        })
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },
  },
};
</script>

<style lang="css">
.hero-area {
  position: relative;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  background-image: url("~/assets/img/bg1.jpg");
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
}

.row{
  background: transparent;
}
</style>
