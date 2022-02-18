require("dotenv").config();
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "pl-tutorials-user",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:400,700",
      },

      // {
      //   rel: "stylesheet",
      //   href: "https://pl-tutorials.com/user/css/style.min.css",
      // },

      // {
      //   rel: "stylesheet",
      //   href: "https://pl-tutorials.com/user/css/responsive.css",
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/custom.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {
    //   src: "~/plugins/bootstrap.js",
    // },
    {
      src: "~/plugins/toastnotification.js",
    },
    {
      src: "~/plugins/vuelidate.js",
    },
    {
      src: "~/plugins/can.js",
    },
    {
      src: "~/plugins/vue-tables-2.js",
    },
    {
      src: "~/plugins/fontawesome.js",
    },
    {
      src: "~/plugins/mixin.js",
    },
    {
      src: "~/plugins/fingerprint.js",
    },
  ],

  // specify module rules for css and scss
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  // use these settings to use custom css
  // bootstrapVue: {
  //   bootstrapCSS: false,
  //   icons: true,
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.SERVER_URL,
    credentials: true,
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: process.env.LOGIN_URL,

        endpoints: {
          login: { url: "/login", method: "post" },
          logout: { url: "/logout", method: "get" },
          user: { url: "/me", method: "get" },
        },
        user: {
          // property: 'user',
          autoFetch: true,
        },
        token: {
          property: "access_token",
          global: true,
          required: true,
          type: "Bearer",
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: "/profile",
    },
    localStorage: false,
    resetOnError: true,
    rewriteRedirects: true,
    watchLoggedIn: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    // use vue mixins
    transpile: ["mixins"],
  },
};
