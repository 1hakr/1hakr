<template>
  <v-layout column justify-center align-center fill-height class="content-container">
    <div class="content">
      <div class="avatar" />
      <p>Hello, I’m 👨🏼‍🎤 HaKr</p>
      <p>
        Building microstartups @ 😈 <a href="https://dworks.io?referrer=1hakr">DWorkS</a>
        and currently building ✈️ <a href="https://visalist.io?referrer=1hakr">Visa List</a>
      </p>
      <p>Running 🇦🇺 <a href="https://t.me/aussiemakers">Aussie Makers</a> community</p>
      <p>
        I also made 💱 <a href="https://acrypto.io?referrer=1hakr">ACrypto</a>,
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
    </div>
    <v-layout class="content-home" justify-center row wrap>
      <div v-for="item in this.$store.state.contactItems" :key="item.title" shrink>
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
  computed: {
    iconBig() {
      return !this.$isMobile
    }
  },
  mounted() {

  }
}
</script>
