require("dotenv").config();
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "PL Tutorials",
    titleTemplate: "%s - PL Tutorials",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "PL Tutorials is a website dedicated for students of buet. At first it was only for the students of Civil Engineering Department, but now the site serves all student. It was launched on year May 2015 . A big number of student were helped by this site and currently this site is also serving for all current students of buet.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "PL Tutuorials, CE Course Materials BUET, P.L. Tutorials, The home of soft materials, pl tutorials buet, ce course materials, pl tutorials weebly, civil materials buet, buet civil engineering, pl-tutorials.com, pl tuts",
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "PBMxea_eN0W8LipvPuiASvMq_DjiV5aV_8MlUE_hQ2k",
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "Mymz826nHXOhX0iO-maMnE5J2dQjIGPqwTXqnqIQVgY",
      },
      {
        hid: "og:title",
        name: "og:title",
        content:
          "PL Tutuorials || CE Course Materials BUET - P.L. Tutorials | The home of soft materials",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "PL Tutorials is a website dedicated for students of buet. At first it was only for the students of Civil Engineering Department, but now the site serves all student. It was launched on year May 2015 . A big number of student were helped by this site and currently this site is also serving for all current students of buet.",
      },

      {
        hid: "og:url",
        name: "og:url",
        content: "https://pl-tutorials.com",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "PL Tutorials",
      },

      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://pl-tutorials.com" },
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
    {
      src: "~/plugins/echo.js",
    },
    {
      src: "~/plugins/particles.js",
      mode: "client",
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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: ["@nuxtjs/ngrok"],

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
    // localStorage: false,
    resetOnError: true,
    rewriteRedirects: true,
    watchLoggedIn: true,
    cookie: {
      options: {
        maxAge: 7 * 24 * 60 * 60,
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    // use vue mixins
    transpile: ["mixins"],
    // analyze: true,
  },

  buildModules: [
    "@nuxtjs/ngrok",
    [
      "@nuxtjs/laravel-echo",
      {
        broadcaster: "pusher",
        key: "0d804a37eb14ea67a5ce",
        cluster: "ap1",
        forceTLS: true,
      },
    ],
    "@nuxtjs/google-analytics",
  ],
  echo: {},
  googleAnalytics: {
    id: "UA-90874165-1",
  },
};
