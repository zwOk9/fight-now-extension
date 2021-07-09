<template lang="pug">
div()
  list-fights(v-if="loading" :fights="fights", :limit="1")
</template>

<script lang="js">

import ListFights from '@/components/ListFights.vue'

import { ref, defineComponent, onMounted, computed } from "vue";
import  { useStore } from 'vuex';

export default defineComponent({
    name: "App",
    components: {
      ListFights
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
p {
    color: red;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>