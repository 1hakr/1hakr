<template>
  <v-main :dark="$store.state.darkTheme">
    <v-container pa-2 full-height>
      <v-layout pt-5 column justify-content-start align-center align-content-center>
        <v-flex pb-5>
          <div class="center-content pa-3">
            <img src="/error.gif">
          </div>
        </v-flex>
        <v-flex align-content-center>
          <h1 v-if="is404" class="ma-3 headline font-weight 800">
            You reached stone age
          </h1>
          <h2 v-else>
            {{ errorMessage }}
          </h2>
        </v-flex>
        <v-flex>
          <div class="ma-3 text-center">
            <p>
              You have travalled here through our secret time machine.<br>
              Sorry! Go back  <nuxt-link to="/">
                <span class="action-link">Home</span>
              </nuxt-link>
            </p>
            <h4 class="grey--text body-2 pt-2">
              Current status: <span class="blue-grey--text">{{ errorStatus }}</span>
            </h4>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  layout: 'plain',
  props: ['error'],
  fetch({ app, store }) {
    store.commit('SET_CURRENT_TITLE', '')
  },
  computed: {
    isJSDisabled() {
      return this.$route.path === '/noscript'
    },
    is404() {
      return this.error.statusCode === 404 && !this.isJSDisabled
    },
    errorMessage() {
      return this.isJSDisabled ? 'JavaScript is disabled. Enable JavaScript to use Visa List' : this.error.message
    },
    errorStatus() {
      return this.isJSDisabled ? '📜JavaScript disabled' : this.error.statusCode
    }
  }
}
</script>
