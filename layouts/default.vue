<template>
  <v-app :dark="$store.state.darkTheme">
    <span itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="DWorkS">
      <link itemprop="url" href="https://dworks.io/">
      <span itemprop="logo" itemscope itemtype="https://www.schema.org/ImageObject">
        <link itemprop="url" href="https://dworks.io/logo.png">
      </span>
      <link itemprop="sameAs" href="https://facebook.com/1hakr">
      <link itemprop="sameAs" href="https://twitter.com/1hakr">
      <link itemprop="sameAs" href="https://instagram.com/1hakr">
    </span>
    <div itemscope itemtype="http://schema.org/WebSite">
      <meta itemprop="name" content="1HaKr">
      <meta itemprop="alternateName" content="The personal website of Hari Krishna Dulipudi, an Indie Maker">
      <meta itemprop="url" content="https://1hakr.com/">
    </div>
    <Header :colored="isColored" :items="$store.state.headerItems" :title="toolbarTile" />
    <v-main>
      <nuxt />
    </v-main>
    <Footer v-if="showFooter" :colored="isColored" />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import themeMixin from '~/plugins/themeMixin'
export default {
  components: {
    Header,
    Footer
  },
  mixins: [themeMixin],
  data () {
    return {
      sidebar: false,
      colored: false
    }
  },
  head () {
    const formattedTitle = 'Hari Krishna Dulipudi'
    const description = 'Personal profile'
    const head = {
      title: formattedTitle,
      meta: [
        { name: 'description', hid: 'description', content: description },
        { property: 'og:title', hid: 'og:title', content: formattedTitle },
        { property: 'og:site_name', hid: 'og:site_name', content: formattedTitle },
        { property: 'og:description', hid: 'og:description', content: description },
        { property: 'og:url', content: this.getFullUrl(this.$route.path) },
        { property: 'og:image', content: this.getFullUrl('/media/feature_graphic.jpg') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: formattedTitle },
        { name: 'twitter:site', content: '@1HaKr' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:site', content: this.getFullUrl(this.$route.path) },
        { name: 'twitter:image', content: this.getFullUrl('/media/feature_graphic.jpg') }
      ],
      link: [{ rel: 'canonical', href: this.getFullUrl(this.$route.path) }],
      script: [{ src: '/pwacompat.js', async: true }]
    }
    return head
  },
  computed: {
    toolbarTile () {
      if (this.$route.path === '/') {
        return ''
      }
      return this.$store.state.currentTitle || this.$store.state.appName
    },
    toolbarColor () {
      return this.colored ? 'primary' : 'transparent'
    },
    isColored () {
      return this.$route.path !== '/'
    },
    showFooter () {
      return this.$route.path !== '/'
    }
  },
  methods: {
    getFullUrl (path) {
      const host = process.server ? this.$store.state.appDomain : window.location.host
      const barehost = host.replace('www.', '')
      return `https://${barehost}${path}`
    }
  }
}

</script>
