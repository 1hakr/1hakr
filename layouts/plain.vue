<template>
  <v-app id="inspire" :dark="darkTheme">
    <Header :colored="true" :items="this.$store.state.headerItems" :title="toolbarTile" />
    <v-content class="plain">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import themeMixin from '~/plugins/themeMixin'
export default {
  components: {
    Header
  },
  mixins: [themeMixin],
  data: () => ({
    title: 'Visa List'
  }),
  computed: {
    toolbarTile () {
      return this.$store.state.currentTitle
    }
  }
}
</script>
