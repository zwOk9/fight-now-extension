<template lang="pug">
div()
  nav-bar
  list-fights(v-if="loading" :fights="fights", :limit="1")
</template>

<script lang="js">

import ListFights from '@/components/ListFights.vue'
import NavBar from '@/components/NavBar.vue'

import { ref, defineComponent, onMounted, computed } from "vue";
import  { useStore } from 'vuex';

export default defineComponent({
    name: "App",
    components: {
      ListFights,
      NavBar
    },
    setup () {
      const store = useStore();
      let loading = ref(false)
      onMounted(async () => {
        await store.dispatch('getFights')
        loading.value = true
      })
      return {
        fights: computed(() => store.getters.fights),
        loading
      }
    }
})
</script>

<style>

html {
  width: 657px;
}
body {
  background-color: #161c33;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>