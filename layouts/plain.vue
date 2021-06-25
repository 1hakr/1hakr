<template>
  <v-app id="inspire" :dark="darkTheme">
    <v-main class="plain">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import themeMixin from '~/plugins/themeMixin'
export default {
  mixins: [themeMixin],
  data: () => ({
    title: 'Hari'
  }),
  computed: {
    toolbarTile () {
      return this.$store.state.currentTitle
    }
  }
}
</script>
