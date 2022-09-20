
<template>
  <div>
    <CustomHeader title="Contribute" subtitle="Help to grow PL Tutorials" />
    <b-container>
      <b-row class="text-left py-1 my-5">
        <b-col sm="12">
          <b-alert show>You can contribute to grow PL Tutorials.</b-alert>
          <p>How to contribute ::</p>
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-start align-items-center"
            >
              <b-badge variant="primary" pill>1</b-badge>
              Upload your materials on Google Drive or a similar service.
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-start align-items-center"
            >
              <b-badge variant="primary" pill>2</b-badge>
              Send the Google drive link to our page here.  <a href="https://www.facebook.com/thepltutorials" target="_blank" rel="noopener noreferrer"> https://www.facebook.com/thepltutorials</a>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-start align-items-center"
            >
              <b-badge variant="primary" pill>3</b-badge>
             The contents will be shared on PL Tutorials with credits to your name.
            </b-list-group-item>
          </b-list-group>
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

    };
  },

};
</script>

<style lang="css" scoped>

.badge.badge-primary.badge-pill {
  margin-right: 10px;
}
</style>
