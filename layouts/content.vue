<template>
  <div>
    <NavBar />

    <Nuxt />
    <TheFooter/>
  </div>
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
