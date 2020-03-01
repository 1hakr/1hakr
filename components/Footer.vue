<template>
  <v-footer dark :color="toolbarColor" class="ma-0" height="auto">
    <v-layout ma-2 column>
      <v-layout justify-center row wrap>
        <v-btn v-for="item in this.$store.state.footerItems" :key="item.title" color="white" pa-0 :title="item.title"
               :target="item.to.startsWith('https') ? `_blank` : ``" text small rounded :to="item.to">
          {{ item.title }}
        </v-btn>
      </v-layout>
      <v-layout row justify-center wrap>
        <div class="mx-5 my-2 justify-center">
          <div>
            &copy; {{ new Date().getFullYear() }} -
            <strong>{{ this.$store.state.appName }}</strong>
          </div>
        </div>
      </v-layout>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  props: {
    colored: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme
    },
    toolbarColor() {
      return !this.colored ? (this.darkTheme ? 'secondary' : 'primary') : 'secondary'
    }
  }
}
</script>
