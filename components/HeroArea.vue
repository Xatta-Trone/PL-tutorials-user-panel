<template>
  <div class="hero-area">
       <b-container>
        <b-row class="vh-100 text-center" align-v="center">
          <b-col sm="12" class="center-content">
            <!-- <div v-if="quote">
              <h4 class="text-danger">
                <font-awesome-icon :icon="['fas', 'quote-left']" />{{
                  quote.quote
                }}
              </h4>
              <p>{{ quote.author }}</p>
            </div> -->
            <h1>All you need is <span class="text-primary">PL Tutorials</span></h1>
            <b-row class="text-center">
              <b-col class="mt-4">
              <b-button v-if="$auth.loggedIn" to="/search" variant="danger" size="lg" class="px-4 mr-2">Search<font-awesome-icon class="ml-2" :icon="['fas', 'search']" /></b-button>
              <b-button v-if="!$auth.loggedIn" to="/register" variant="danger" size="lg" class="px-4 mr-2">Register<font-awesome-icon class="ml-2" :icon="['fas', 'user-plus']" /></b-button>
              <b-button v-if="$auth.loggedIn" to="/departments" variant="primary" size="lg" class="px-4 ml-2">Browse<font-awesome-icon class="ml-2" :icon="['fas', 'location-arrow']" /></b-button>
              <b-button v-if="!$auth.loggedIn" to="/login" variant="primary" size="lg" class="px-4 ml-2">Login<font-awesome-icon class="ml-2" :icon="['fas', 'sign-in-alt']" /></b-button>
              </b-col>

            </b-row>

            <!-- <h1>
              This website is owned by
              <span class="text-primary">Sumiya Shamim <br />#1604144</span>
            </h1> -->
          </b-col>
        </b-row>
      </b-container>

      <vue-particles shapeType="triangle" linesColor="#17A2B8" color="#fff"></vue-particles>

    </div>
</template>
<script>
export default {
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

<style lang="css" scoped>
.hero-area {
  position: relative;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  background-image: url("~/assets/img/bg5.jpg");
  background-size: cover;
  background-position: center center;
  /* background-attachment: fixed; */
}


.center-content{
  position:relative;
  z-index: 9;
}

#particles-js {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>
