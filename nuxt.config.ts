// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:["~/assets/css/main.css"],
  devtools: { enabled: true },
  app:{
    head:{
      title: 'Vx7'
    }
  },
  modules: [
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-vue3-google-signin',
  ],
  googleSignIn:{
    clientId: '',
  },
  runtimeConfig:{
    GET_ALL_ARTICLES: process.env.GET_ALL_ARTICLES
  },

  


})


