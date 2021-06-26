const themeColor = '#009688'
const name = 'Hari Krishna Dulipudi'
const appName = '1HaKr'
const isProd = process.env.NODE_ENV === 'production'
const stripeKey = isProd ? 'pk_live_mb9W784ENBOgLl2LAHbRaPzC00cpxZMLK6' : 'pk_test_F3lp6SlCvBMBrtrUkia2ygTp00pgGllyml'
module.exports = {
  target: 'static',
  env: {
    isDev: !isProd
  },
  head: {
    title: appName,
    titleTemplate: '%s - ' + name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1,user-scalable=0,viewport-fit=cover' },
      { name: 'application-name', content: appName },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'startups, microstartups, opensource, apps, websites' }
    ],
    link: [
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', color: '#009688', href: '/safari-pinned-tab.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#FFFFFF' },
  components: true,
  css: [
    '~/assets/app'
  ],
  plugins: [
    '~/plugins/common.js',
    '~/plugins/analytics.js'
  ],
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxtjs/vuetify',
    '@nuxtjs/sitemap'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: process.env.ANALYTICS_ID,
      debug: { sendHitTask: process.env.ANALYTICS_ENABLED }
    }],
    ['nuxt-stripe-module', {
      publishableKey: stripeKey
    }],
    'cookie-universal-nuxt'
  ],
  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js'
  },
  pwa: {
    manifest: {
      name,
      short_name: appName,
      description: 'to make a small difference in the world.',
      author: 'Hari Krishna Dulipudi',
      background_color: themeColor,
      theme_color: themeColor,
      scope: '/'
    },
    meta: {
      nativeUI: true,
      mobileApp: false,
      mobileAppIOS: false
    }
  },
  webfontloader: {
    custom: {
      families: ['Material Design Icons'],
      urls: ['https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.7.95/css/materialdesignicons.min.css']
    }
  },
  purgeCSS: {
    mode: 'postcss',
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      './node_modules/vuetify/dist/vuetify.js'
    ],
    whitelist: ['html', 'body', 'nuxt-link-exact-active', 'nuxt-progress', 'wf-active'],
    whitelistPatterns: [/^v-/, /wf.*/, /nuxt.*/]
  },
  sitemap: {
    hostname: 'https://1hakr.com',
    gzip: true
  },
  render: {
    http2: {
      push: true,
      pushAssets: (file, type) => type === 'script'
    },
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    },
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  },
  generate: {
    dir: 'public'
  },
  build: {
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[chunkhash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[id].[contenthash].css'
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
