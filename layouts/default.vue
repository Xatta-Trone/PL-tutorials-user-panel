<template>
  <b-container>
    <NavBar />
    <Nuxt />
  </b-container>
</template>

<script>
export default {
  head: {
    titleTemplate: "%s - Nuxt.js",
    meta: [],
    link: [
      // {
      //   rel: 'stylesheet',
      //   href: '/assets/css/pages/auth.css',
      // },
    ],
  },
};
</script>
