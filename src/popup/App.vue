<template lang="pug">
  div
      ListFight(v-loading="loading" :datas="fights")
  
</template>

<script>

import ListFight from '@/components/ListFights'
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters(['fights']),
  },
  components: { 
     ListFight  
  },
  mounted () {
    this.getFights().then(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions(['getFights']),
  }
}
</script>

<style>
html {
  width: 531px;
  height: 400px;
}
</style>
