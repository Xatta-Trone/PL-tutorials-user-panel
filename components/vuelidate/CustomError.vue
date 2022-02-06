<template>
  <div>
    <span v-for="(error, i) in servererrors" :key="i">
      <span class="text-danger" v-show="error[0] == chkkey">
        {{ error[1].join(",") }}</span
      >
    </span>
  </div>
</template>
<script>
export default {
  props: ["servererrors", "chkkey"],
};
</script>

