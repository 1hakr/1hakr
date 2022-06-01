<template>
  <v-layout column justify-center align-center fill-height class="content-container">
    <div class="content">
      <div class="avatar" />
      <p>Hello, I’m 👨🏼‍🎤 HaKr</p>
      <p>Product Guy @ <a href="https://finder.com?referrer=1hakr">Finder</a></p>
      <p>
        Building microstartups @ <a href="https://dworks.io?referrer=1hakr">DWorkS</a> and running <a href="https://t.me/aussiemakers">Aussie Makers</a> community
      </p>
      <p>
        I made ✈️ <a href="https://visalist.io?referrer=1hakr">Visa List</a>, 🖥️ <a href="https://simpleops.io?referrer=1hakr">Simple Ops</a>,
        💱 <a href="https://acrypto.io?referrer=1hakr">ACrypto</a>,
        📁 <a href="https://anexplorer.co?referrer=1hakr">AnExplorer</a> and
        see more of my work
        <nuxt-link to="/apps">
          apps
        </nuxt-link>,
        <nuxt-link to="/libraries">
          libraries
        </nuxt-link> and
        <nuxt-link to="/portfolio">
          portfolio
        </nuxt-link>
      </p>
      <v-layout row wrap align-center justify-center mt-4 my-2>
        <v-flex shrink ma-1>
          <v-btn rounded light color="#ffeb3b" large @click="openMentorship()">
            <v-icon left>
              mdi-school
            </v-icon>
            Mentorship
          </v-btn>
        </v-flex>
        <v-flex shrink ma-1>
          <v-btn rounded light large @click="openConsultation()">
            <v-icon left>
              mdi-calendar
            </v-icon>
            Consultation
          </v-btn>
        </v-flex>
        <v-flex v-if="false" shrink ma-1>
          <v-btn rounded :loading="progress" large @click="openCheckout()">
            <v-icon left>
              mdi-calendar
            </v-icon>
            Book a call
          </v-btn>
        </v-flex>
      </v-layout>
      <div id="message" class="text-center">
        {{ message }}
      </div>
    </div>
    <v-layout class="content-home" justify-center row wrap>
      <div v-for="item in $store.state.contactItems" :key="item.title" shrink>
        <v-btn fab text color="white" pa-0 :title="item.title" :target="item.to.startsWith('https') ? `_blank` : ``"
               :large="iconBig" :small="!iconBig" :href="item.to" :class="{ 'ma-1' : !iconBig }">
          <v-icon :large="iconBig">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    success: 'success',
    message: '',
    progress: false
  }),
  computed: {
    iconBig() {
      return !this.$isMobile
    }
  },
  mounted() {
    const query = this.$route.query
    if (!this.isEmpty(query) && query.result) {
      if (query.result === this.success) {
        this.message = 'Thanks, You will be now redirected to choose a time'
        this.showBooking()
      } else {
        this.message = 'Your booking failed'
      }
    }
  },
  methods: {
    showBooking() {
      setTimeout(() => {
        window.open('https://calendly.com/1hakr', '_blank').focus()
      }, 2000)
    },
    isEmpty (obj) {
      return !obj || Object.keys(obj).length === 0
    },
    openMentorship() {
      window.open('https://mentorcruise.com/mentor/HariDulipudi/apply/?plan=c47a8fc8ea', '_blank').focus()
    },
    openConsultation() {
      window.open('https://mentorcruise.com/sessions/expert-consultation/book/570/', '_blank').focus()
    },
    async openCheckout() {
      this.progress = true
      const priceId = process.env.isDev ? 'price_1HBdkqCLMgqlslNLXtTSP9Tl' : 'price_1HBdlMCLMgqlslNLYyjj4f4U'
      const successUrl = process.env.isDev ? 'http://localhost:3000/?result=success' : 'https://1hakr.com/?result=success'
      const cancelUrl = process.env.isDev ? 'http://localhost:3000/?result=failure' : 'https://1hakr.com/?result=failure'
      const checkoutOptions = {
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'payment',
        successUrl,
        cancelUrl
      }
      let result = null
      let message = ''
      try {
        result = await this.$stripe.redirectToCheckout(checkoutOptions)
        if (result.error) {
          message = result.error.message
        }
      } catch (error) {
        message = error.message
      }
      this.progress = false
      if (message) {
        this.message = message
      }
    }
  }
}
</script>
