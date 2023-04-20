<template>
  <v-layout column justify-center align-center fill-height class="content-container">
    <div class="content">
      <div class="avatar" />
      <p>Hello, I’m 👨🏼‍🎤 HaKr</p>
      <p>
        Building microstartups @ <a href="https://dworks.io?referrer=1hakr">DWorkS</a> and running <a href="https://t.me/aussiemakers">Aussie Makers</a> community
      </p>
      <p>
        I made ✈️ <a href="https://visalist.io?referrer=1hakr">Visa List</a>, 🖥️ <a href="https://simpleops.io?referrer=1hakr">Simple Ops</a>,
        💱 <a href="https://acrypto.io?referrer=1hakr">ACrypto</a>,
        📁 <a href="https://anexplorer.io?referrer=1hakr">AnExplorer</a> and
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
          <v-btn rounded light color="#ffeb3b" large @click="openMeeting()">
            <v-icon left>
              mdi-video
            </v-icon>
            Video Chat
          </v-btn>
        </v-flex>
        <v-flex shrink ma-1>
          <v-btn rounded light large @click="openMentorship()">
            <v-icon left>
              mdi-school
            </v-icon>
            Mentorship
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
  methods: {
    isEmpty (obj) {
      return !obj || Object.keys(obj).length === 0
    },
    openMeeting() {
      window.open('https://cal.com/1hakr/meeting?referrer=1hakr', '_blank').focus()
    },
    openMentorship() {
      window.open('https://mentorcruise.com/mentor/HariDulipudi/apply?referrer=1hakr', '_blank').focus()
    },
    openConsultation() {
      window.open('https://mentorcruise.com/sessions/expert-consultation/book/4829?referrer=1hakr', '_blank').focus()
    }
  }
}
</script>
