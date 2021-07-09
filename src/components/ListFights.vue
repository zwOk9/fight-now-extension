<template lang="pug">
div
  div.container
    el-row.container-fight(:gutter="20")
      el-col.container-fight--col()
        div.container-fight-info
          div.container-fight-info--type
            div.container-fight-info--type-img
              img(src="@/assets/boxe.png")
          div.container-fight-info--title
            h3.container-fight-info--title-principal {{ 'ufc 243' }}
              span.container-fight-info--title--subtitle {{ 'conor mcgregor vs khabib' }}
          div.container-fight-info--location
            div.container-fight-info--location-text
              p {{'Saitama Super Arena, Saitama'}}
                span
                  country-flag(country='fr' size='small')
          div.container-fight-info--brodcast
            div.container-fight-info--brodcast-icon
          count-down(:date="date")
</template>


<script lang="js">

import CountDown from '@/components/CountDown.vue'
import CountryFlag from 'vue-country-flag-next'

export default {
    components: {
      CountDown,
      CountryFlag
    },
    props: {
      fights: {
        type: Object,
        required: true
      }
    },
    setup () {
      const date = '2021-07-06T03:00:00.000+00:00'
      return {
        date
      }
    }
}
</script>