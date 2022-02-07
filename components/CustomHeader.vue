<template>
  <div class="section_padding hero_title_section">
    <b-container fluid class="">
      <b-row class="text-center tr-bg">
        <b-col class="header-div">
          <h3 v-show="title">{{ title.toUpperCase() }}</h3>
          <span></span>
          <p v-show="subtitle">{{ subtitle }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    subtitle: {
      default: null,
      type: String,
    },
  },
};
</script>

<style lang="css" scoped>
.hero_title_section {
  background-image: url("~/assets/img/pencil.jpg");
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
  background-color: #333;
  position: relative;
}
.hero_title_section:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: #000;
  opacity: 0.6;
}
.hero_title_section {
  font-size: 30px;
  padding: 150px 0 100px;
  color: #fff;
  text-transform: uppercase;
}
.hero_title_section h3 {
  font-size: 50px;
  line-height: 50px;
  margin: 0;
}
.hero_title_section span {
  display: inline-block;
  height: 5px;
  width: 45%;
  background: #17a2b8;
  margin: 0 0 10px;
  border-radius: 3px;
}
.hero_title_section p {
  margin: 0;
}
.section_padding {
  padding: 150px 0 100px 0;
}
</style>
