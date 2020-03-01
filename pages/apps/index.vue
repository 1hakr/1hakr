<template>
  <v-layout>
    <v-layout ma-0 pa-4 mt-5 justify-center row wrap>
      <div class="page-content">
        <header class="mb-6">
          <h1>{{ $store.state.currentTitle }}</h1>
          <div class="intro">
            These are my apps, covering all my side projects.
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
                <ul>
                  <li v-for="(point, i) in item.points" :key="i">
                    {{ point.text }}
                  </li>
                </ul>
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
import content from '~/static/data/apps.yaml'
import Carousel from '~/components/Carousel.vue'
export default {
  components: {
    Carousel
  },
  fetch({
    store
  }) {
    store.commit('SET_CURRENT_TITLE', 'Apps')
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
