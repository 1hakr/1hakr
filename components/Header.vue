<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary app class="nav-drawer">
      <v-list>
        <v-list-item v-for="item in items" :key="item.text" :to="item.to" :title="item.text" @click="drawer = !drawer">
          <v-list-item-avatar>
            <v-icon class="min-icon" v-text="item.icon" />
          </v-list-item-avatar>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
        <v-flex shrink>
          <div v-if="deferredPrompt">
            <v-list-item @click="installApp()">
              <v-list-item-avatar>
                <v-icon class="min-icon">
                  mdi-download
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Install app</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-flex>
      </v-list>
      <template #append>
        <v-flex shrink>
          <v-switch v-model="darkTheme" inset class="pl-3" color="teritiary" pl-3>
            <template #label>
              <span>
                &nbsp; &nbsp; {{ `${darkTheme ? `🌒 Dark` : `☀️ Light `} Mode` }}
              </span>
            </template>
          </v-switch>
        </v-flex>
      </template>
    </v-navigation-drawer>
    <v-app-bar :color="toolbarColor" :dark="showDarkToolbar" app fixed :height="!colored ? 64 : 0" :flat="!colored" class="toolbar-index">
      <v-btn v-if="showHamburger" icon @click.stop="showNavigation()">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn v-else icon @click.stop="handleBack()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title v-show="title" class="ml-0">
        <h1 v-show="title" class="title">
          {{ title }}
        </h1>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon aria-label="share" @click="share()">
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <v-bottom-sheet v-model="sheet" class="bottom-index">
        <v-list>
          <v-subheader>Share</v-subheader>
          <v-list-item v-for="tile in $store.state.shareItems" :key="tile.title" @click="shareUrl(tile.title)">
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img :src="`${tile.img}`" :alt="tile.title">
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-app-bar>
  </div>
</template>

<script>
import themeMixin from '~/plugins/themeMixin'
export default {
  mixins: [themeMixin],
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    },
    colored: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    dialog: false,
    color: 'transparent',
    drawer: false,
    sheet: false,
    home: '/',
    deferredPrompt: null,
    shareText: 'I found this website of an Indie Hacker'
  }),
  computed: {
    toolbarColor() {
      return this.colored ? 'primary' : 'transparent'
    },
    shareTitle() {
      return this.$store.state.appName
    },
    showHamburger() {
      return true
    },
    showDarkToolbar() {
      if (this.$route.path === '/') {
        return false
      }
      return this.darkTheme
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.deferredPrompt = e
    })
  },
  methods: {
    getFullUrl(path) {
      const host = process.server
        ? this.$store.state.appDomain
        : window.location.host // this.$ssrContext.req.headers.host
      const barehost = host.replace('www.', '').replace('amp.', '')
      return `https://${barehost}${path}`
    },
    share() {
      if (navigator.share) {
        const url = this.getFullUrl(this.$route.path)
        navigator.share({
          title: this.shareTitle,
          text: this.shareText,
          url
        })
      } else {
        this.sheet = true
      }
    },
    showNavItem(item) {
      return true
    },
    showNavigation() {
      this.drawer = !this.drawer
    },
    installApp() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt()
        this.deferredPrompt.userChoice.then(function(choiceResult) {
          this.deferredPrompt = null
        })
      }
    },
    shareUrl(social) {
      this.sheet = false
      const url = this.getFullUrl(this.$route.path)

      let shareUrl
      switch (social) {
        case 'Facebook':
          shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url
          break

        case 'Twitter':
          shareUrl = 'https://twitter.com/share?text=' + this.shareText + '&url=' + url
          break

        case 'LinkedIn':
          shareUrl = 'https://www.linkedin.com/shareArticle?mini=true&title=' +
              this.shareTitle + '&summary=' + this.shareText + '&url=' + url
          break
        case 'Reddit':
          shareUrl = 'http://www.reddit.com/submit?newwindow=1&title=' +
              this.shareTitle + '&summary=' + this.shareText + '&url=' + url
          break
        case 'Telegram':
          shareUrl = 'https://telegram.me/share/url?text=' +
              this.shareTitle + '&summary=' + this.shareText + '&url=' + url
          break
        case 'Email':
          shareUrl = 'mailto:?Subject=' +
              this.shareTitle + '&body=' + this.shareText + '%0A%0a' + url
          break
      }
      window.open(shareUrl, 'sharer', 'width=626,height=436')
    },
    handleNavigation(item) {
      switch (item.icon) {
        default:
          if (item.to) {
            this.$router.push(item.to)
          }
      }
    },
    handleBack() {
      if (window.history.length > 1) {
        this.$router.back()
      } else {
        this.$router.push('/')
      }
    }
  }
}

</script>
