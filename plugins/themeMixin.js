export default {
  computed: {
    darkTheme: {
      get () {
        return this.$store.state.darkTheme
      },
      set (value) {
        this.$store.commit('SET_DARK_THEME', value)
        this.$vuetify.theme.dark = value
      }
    }
  },
  mounted() {
    this.setDarkMode(this.darkTheme)
    this.setAutoTheme()
  },
  methods: {
    setAutoTheme() {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches
      const isNotSpecified = window.matchMedia('(prefers-color-scheme: no-preference)').matches
      const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified

      let darkMode = false
      const that = this
      window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
        if (e.matches) {
          that.setDarkMode(true)
        }
      })
      window.matchMedia('(prefers-color-scheme: light)').addListener(function (e) {
        if (e.matches) {
          that.setDarkMode(false)
        }
      })

      if (isDarkMode) {
        darkMode = true
      }
      if (isLightMode) {
        darkMode = false
      }
      if (isNotSpecified || hasNoSupport) {
        const now = new Date()
        const hour = now.getHours()
        if (hour < 4 || hour >= 16) {
          darkMode = true
        }
      }
      this.setDarkMode(darkMode)
    },
    setDarkMode(darkMode) {
      this.darkTheme = darkMode
    }
  }
}
