<template>
  <div class="android">
      <b-container>
        <b-row align-v="center">
          <b-col sm="6">
            <h4>Download the app!</h4>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.pl-tutorials.app"><img src="~/assets/img/googleplay.png" height="110"/></a>

          </b-col>
          <b-col sm="6" class="text-center">
            <img class="" src="~/assets/img/app2.svg" height="400"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>


<style lang="css" scoped>


.android {
  position: relative;
  background: rgba(255,255, 255, 0.5);
  /* background-image: url("~/assets/img/appbg.jpg"); */
  background-size: cover;
  background-position: center center;
  padding: 150px 0;
}

.rotateimg45 {
  -webkit-transform:rotate(-30deg);
  -moz-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  -o-transform: rotate(-30deg);
  transform: rotate(-30deg);
}

</style>
