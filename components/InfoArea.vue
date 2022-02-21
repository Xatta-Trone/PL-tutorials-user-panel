<template>
<div class="info-area">
      <b-container>
        <b-row>
          <b-col sm="4">
            <b-card  class="text-center info-card">
              <div class="icon text-dark"> <font-awesome-icon :icon="['fas', 'user-graduate']" /></div>
              <div class="text"><h5>For BUET student's</h5></div>
            </b-card>
          </b-col>

           <b-col sm="4">
            <b-card  class="text-center info-card">
              <div class="icon text-dark"> <font-awesome-icon :icon="['fas', 'address-card']" /></div>
              <div class="text"><h5>Student ID required</h5></div>
            </b-card>
          </b-col>

          <b-col sm="4">
            <b-card  class="text-center info-card">
              <div class="icon text-dark"> <font-awesome-icon :icon="['fas', 'ban']" /></div>
              <div class="text"><h5>No account sharing</h5></div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>

</template>

<style lang="css" scoped>
.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.info-card {
  box-shadow: 0 0 15px #ddd;
}
.info-area{
  margin: 5rem auto;
}

</style>
