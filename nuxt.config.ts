// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active"
    }
  },
  runtimeConfig: {
    public: {
      serverUrl: process.env.NUXT_SERVER_URL
    }
  }
})
