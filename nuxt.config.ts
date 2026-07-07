export default defineNuxtConfig({
  compatibilityDate: '2026-07-07',
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-gtag',
  ],
  css: ['~/assets/main.css'],
  i18n: {
    compilation: {
      strictMessage: false,
      escapeHtml: true
    },
    langDir: 'locales',
    strategy: 'prefix_except_default',
    baseUrl: 'https://1hakr.com',
    defaultLocale: 'en',
    debug: false,
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
  },
  gtag: {
    id: 'G-GZT3TP9CSP',
    loadingStrategy: 'defer',
  },
  routeRules: {
    '/portfolio': { redirect: { to: '/design', statusCode: 301 } },
    '/apps': { redirect: { to: '/products', statusCode: 301 } },
    '/libraries': { redirect: { to: '/', statusCode: 301 } },
    '/profile': { redirect: { to: '/', statusCode: 301 } },
    '/destination': { redirect: { to: '/', statusCode: 301 } },
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
