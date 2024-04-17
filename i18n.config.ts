import type { I18nOptions } from 'vue-i18n'

export default{
  langDir: 'locales',
  lazy: true,
  strategy: 'prefix_except_default',
  baseUrl: 'https://1hakr.com',
  defaultLocale: 'en',
  customRoutes: 'config',
  pages: {
    about: false
  },
  detectBrowserLanguage: false,
  skipSettingLocaleOnNavigate: true,
  dynamicRouteParams: true,
  locales: [
    {
      code: 'en',
      iso: 'en',
      name: 'English',
      file: 'en.json'
    }
  ],
 } as I18nOptions