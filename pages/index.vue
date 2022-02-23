<template>
  <div>
    <Hero-area/>
    <Info-area/>
    <App-area/>
    <Testimonial-area/>
    <div class="contact-area my-5">
      <b-row class="justify-content-center">
        <b-col sm="7">
          <h4 class="text-center mb-4">Have a question ?</h4>
          <Contact-form/>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "content",
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>

<style lang="css">

body{
  overflow-x: hidden;
}

</style>
