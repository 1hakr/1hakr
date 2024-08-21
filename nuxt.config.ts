// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@nuxtjs/i18n',
    '@nuxtjs/device',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    'nuxt-delay-hydration',
    'nuxt-build-cache',
    'nuxt-date-fns',
    'nuxt-og-image',
    'nuxt-gtag',
  ],
  delayHydration: { 
    mode: 'mount'
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  i18n: {
    compilation: {
      // jit: false,
      strictMessage: false,
      escapeHtml: true
    },
    bundle: {
      // dropMessageCompiler: true
    },
    langDir: 'locales',
    lazy: true,
    strategy: 'prefix_except_default',
    baseUrl: 'https://1hakr.com',
    defaultLocale: 'en',
    experimental: {
      localeDetector: './localeDetector.ts',
      switchLocalePathLinkSSR: true,
      autoImportTranslationFunctions: true
    },
    debug: false,
    dynamicRouteParams: true,
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
  },
  build: {
    transpile: ['nuxt-date-fns']
  },
  gtag: {
    id: 'G-GZT3TP9CSP'
  },
  compatibilityDate: '2024-08-21'
})
