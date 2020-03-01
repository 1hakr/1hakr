<template>
  <div class="pages pannable"
       style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
    <div class="page-scroll animate-scroll" />
    <div class="edge-clicker prev" style="width: 32px;" />
    <div class="edge-clicker next" style="width: 32px;" />
    <v-sheet class="mx-auto" color="transparent" max-width="1400">
      <v-slide-group v-model="onboarding" class="py-4" center-active :show-arrows="false">
        <v-slide-item v-for="page in items" :key="page.image" v-slot:default="{ active, toggle }">
          <v-card :color="active ? '#c2d6f2' : '#c2d6f2'" class="mx-2 ma-auto" :max-width="cardWidth"
                  @click="toggle">
            <div class="page image">
              <div tabindex="0" class="media loader-parent" style="color:#3c6caf">
                <div class="device-frame" :class="`device-${ page.device_frame }`">
                  <img :src="`/media/${page.image}`">
                </div>
                <svg v-if="false" class="loading-spinner" width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="20" fill="none" stroke-width="6" stroke-miterlimit="10"
                          stroke="#ccc" />
                </svg>
              </div>
              <div v-if="page.caption" class="caption">
                {{ page.caption }}
                <nuxt-link :to="page.link">
                  {{ page.link_text }}
                </nuxt-link>
              </div>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <v-card-actions class="justify-space-between">
        <v-btn fab small text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item v-for="n in length" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn fab small text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      onboarding: 0
    }
  },
  computed: {
    cardWidth() {
      return this.$isMobile ? 300 : 400
    },
    length() {
      return this.items ? this.items.length : 0
    }
  },
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    }
  }
}
</script>
