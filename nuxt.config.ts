// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/fonts"],
  ui: {
    icons: ["mdi"],
  },
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: false,
  },
  colorMode: {
    preference: "light",
  },
});
