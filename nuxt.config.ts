import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  build: {
    transpile: ["gsap"],
  },

  modules: [
    [
      "nuxt-microcms-module",
      {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
      },
    ],

    [
      "@nuxtjs/tailwindcss",
      {
        config: {
          content: [],
          plugins: [tailwindTypography],
        },
      },
    ],

    "@vueuse/nuxt",

    "nuxt-lenis",
  ],
});
