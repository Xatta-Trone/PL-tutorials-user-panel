
<template>
  <div>
    <CustomHeader title="Get In touch" />
    <b-container>
      <b-row class="text-left py-1 my-5">
        <b-col sm="7">
          <Contact-form />
        </b-col>
        <b-col sm="5">
          <p>
            Links:: Since, we do not have any physical address
            😊
          </p>
          <b-list-group v-for="links in socialLinks" :key="links.key">
            <b-list-group-item class="my-1"
              v-if="links.key == 'email'"
              :href="'mailto:' + links.value"
              ><font-awesome-icon :icon="['fas', 'at']" />
              {{ links.value }}</b-list-group-item
            >
            <b-list-group-item class="my-1"
              v-if="links.key == 'facebook'"
              :href="links.value"
              target="_blank"
              ><font-awesome-icon :icon="['fab', 'facebook']" />
              {{ links.value }}</b-list-group-item
            >
            <b-list-group-item class="my-1"
              v-if="links.key == 'youtube'"
              :href="links.value"
              target="_blank"
              ><font-awesome-icon :icon="['fab', 'youtube']" />
              {{ links.value }}</b-list-group-item
            >
            <b-list-group-item class="my-1"
              v-if="links.key == 'messenger'"
              :href="links.value"
              target="_blank"
              ><font-awesome-icon :icon="['fab', 'facebook-messenger']" />
              {{ links.value }}</b-list-group-item
            >
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "content",
  head(){
    return {
      title: 'Contact - PL Tutorials'
    }
  },

  data() {
    return {
      socialLinks: [],
    };
  },
  mounted() {
    this.getSocialLinks();
  },
  methods: {
    getSocialLinks() {
      this.$axios
        .get("social-links")
        .then((res) => (this.socialLinks = res.data.data))
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },
  },
};
</script>

