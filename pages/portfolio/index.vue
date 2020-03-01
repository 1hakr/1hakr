<template>
  <v-layout>
    <v-layout ma-0 pa-4 mt-5 justify-center row wrap>
      <div class="page-content">
        <header class="mb-6">
          <h1>{{ $store.state.currentTitle }}</h1>
          <div class="intro">
            This is my design work.
          </div>
        </header>
        <v-divider class="my-6" />
        <template v-for="item in content">
          <section :key="item.name" class="project" :class="item.extra_classes">
            <div class="info-block">
              <h2> {{ item.name }}</h2>
              <p class="date" />
              <p>
                {{ item.description }}
              </p>
              <div class="actions">
                <template v-for="action in item.actions">
                  <a :key="action.url" :href="action.url" target="_blank">{{ action.caption }}</a>
                </template>
              </div>
            </div>
            <carousel :items="item.pages" />
          </section>
        </template>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
import content from '~/static/data/portfolio.yaml'
import Carousel from '~/components/Carousel.vue'
export default {
  components: {
    Carousel
  },
  fetch({
    store
  }) {
    store.commit('SET_CURRENT_TITLE', 'Portfolio')
  },
  data() {
    return {
      content
    }
  },
  mounted() {

  }
}

</script>
