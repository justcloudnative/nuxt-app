// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', 'nuxt-security'],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        // 'default-src': ["'self'"],
        // 'img-src': ["'self'"],
        // 'script-src': ["'self'"],
        // 'style-src': ["'self'"],
      },
    },
  },
})