<template>
  <b-navbar toggleable="lg" type="light" variant="primary">
    <b-navbar-brand href="#">PL Tutorials</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Departments" right href="#">
          <div v-for="department in departments" :key="department">
            <b-dropdown-item href="#">{{
              department.slug.toUpperCase()
            }}</b-dropdown-item>
          </div>
        </b-nav-item-dropdown>

        <b-nav-item href="#">Books</b-nav-item>
        <b-nav-item href="#">Softwares</b-nav-item>

        <b-nav-item href="#">Contact</b-nav-item>
        <b-nav-item href="#">Login</b-nav-item>
        <b-nav-item href="#">Register</b-nav-item>

        <b-nav-item-dropdown text="FAQ" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#">Search</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  // asyncData(ctx) {
  //   return {
  //     name: process.server ? "server" : "client",
  //     dev: ctx.isDev,
  //   };
  // },

  data() {
    return {
      departments: [],
    };
  },

  mounted() {
    console.log(process.env.SERVER_URL);
    this.getDepatments();
  },
  methods: {
    getDepatments() {
      this.$axios
        .get("departments")
        .then((res) => (this.departments = res.data.data))
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },
  },
};
</script>
