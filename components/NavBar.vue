<template>
  <div class="pl-nav" :class="{ isSticky: isSticky }" id="pl_nav">
    <b-container>
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand to="/">PL Tutorials</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Departments" right to="#">
              <div v-for="department in departments" :key="department.slug">
                <b-dropdown-item :to="'/departments/' + department.slug">{{
                  department.slug.toUpperCase()
                }}</b-dropdown-item>
              </div>
            </b-nav-item-dropdown>

            <b-nav-item to="/books">Books</b-nav-item>
            <b-nav-item to="/softwares">Softwares</b-nav-item>


            <b-nav-item v-if="!$auth.loggedIn" to="/login">Login</b-nav-item>
            <b-nav-item v-if="!$auth.loggedIn" to="/register"
              >Register</b-nav-item
            >
            <b-nav-item v-if="$auth.loggedIn" to="/profile">Profile</b-nav-item>
            <b-nav-item v-if="$auth.loggedIn" @click="logout"
              >Logout</b-nav-item
            >

            <b-nav-item to="/faq">FAQ</b-nav-item>
             <b-nav-item to="/search">Search</b-nav-item>
             <b-nav-item to="/contact">Contact</b-nav-item>

            <b-nav-item-dropdown text="More" right>
              <div v-for="page in pages" :key="page.id">
                <b-dropdown-item :to="'/page/' + page.slug">{{
                  page.title
                    .split(" ")
                    .map(
                      (word) =>
                        word[0].toUpperCase() + word.slice(1).toLowerCase()
                    )
                    .join(" ")
                }}</b-dropdown-item>
              </div>
            </b-nav-item-dropdown>


          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
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
      isSticky: false,
      pages: [],
    };
  },

  mounted() {
    console.log(process.env.SERVER_URL);
    this.getDepatments();
    this.getPages();

    window.document.onscroll = () => {
      let navbar = document.getElementById("pl_nav");
      if (window.scrollY > navbar.offsetTop) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    };
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
    getPages() {
      this.$axios
        .get("pages")
        .then((res) => (this.pages = res.data.data))
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },
    async logout() {
      try {
        let response = await this.$auth.logout("laravelSanctum");
        console.log(response);
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style lang="css">
.pl-nav {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9999;
  color: #fff;
  transition: 0.3s;
}
.isSticky {
  position: fixed;
  background: #17a2b8;
}

.pl-nav a,
.navbar-light .navbar-nav .nav-link,
.nav-link span,
.navbar-brand {
  color: #fff !important;
}

.dropdown-menu.show {
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: red;
}
</style>
