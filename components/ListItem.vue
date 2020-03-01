<template>
  <v-list-item @click="openLinks(id)">
    <v-list-item-icon>
      <v-avatar v-if="image" size="35">
        <simple-image v-if="layoutLoaded" :src="image" />
      </v-avatar>
      <v-btn v-else-if="circle" text small class="ma-0 primary" fab dark>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
      <v-icon v-else>
        {{ icon }}
      </v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['icon', 'image', 'title', 'id'],
  methods: {
    openLinks(id) {
      switch (id) {
        case 'Email':
          // const email = 'support@dworks.io'
          // const subject = 'DWorkS Feedback'
          // document.location = 'mailto:' + email + '?subject=' + subject
          break
        case 'Dworks':
          window.open('https://dworks.io/', '_blank').focus()
          break
        case 'Facebook':
          window.open('https://www.facebook.com/1DWorkS', '_blank').focus()
          break
        case 'Twitter':
          window.open('https://twitter.com/1hakr', '_blank').focus()
          break
        case 'Google+':
          window
            .open('https://plus.google.com/+HariKrishnaDulipudi', '_blank')
            .focus()
          break
      }
    }
  }
}

</script>
