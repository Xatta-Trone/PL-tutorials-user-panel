<template>
  <div class="testimonial-area my-5 py-2">
    <b-container>
      <b-row>
        <carousel
          :perPageCustom="[
            [480, 2],
            [768, 3],
          ]"
          :autoplay="true"
        >
          <slide v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="testimonial text-center px-2">
              <div class="author mb-3">
                <b-badge variant="light">{{ testimonial.name.toUpperCase() }}</b-badge>
                <b-badge variant="danger">{{
                  testimonial.dept_batch
                }}</b-badge>
              </div>
              <span class="msg text-justify">
                {{ testimonial.message }}
              </span>
            </div>
          </slide>
        </carousel>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      testimonials: [],
    };
  },
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    this.getTestimonials();
  },
  methods: {
    getTestimonials() {
      if (localStorage.hasOwnProperty("testimonials")) {
        this.testimonials = JSON.parse(localStorage.getItem("testimonials"));
      } else {
        this.$axios
          .get("testimonials")
          .then((res) => {
            this.testimonials = res.data.data;
            localStorage.setItem("testimonials", JSON.stringify(res.data.data));
          })
          .catch(function (err) {
            console.log(err);
            alert(err.response.status);
          });
      }
    },
  },
};
</script>
<style lang="css" scoped>
.VueCarousel {
  width: 100%;
}
</style>
