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
    chromOpenOption () {
      chrome.tabs.create({ url: "options.html" })
    }
  }
}
</script>

<style>
html {
  width: 700px;
}
body {
    background-color: #161c33;
  }
</style>
