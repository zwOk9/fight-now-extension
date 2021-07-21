<template lang="pug">
div
  
  div.container
    el-row.container-fight(:gutter="20" )
      el-col.container-fight--col()
        div.container-fight-info(v-for="(fight, index) in fights" :key="index" :class="{ 'paire' : isPaire(index), 'impaire' : !isPaire(index) }")
          div.container-fight-info--type
            div.container-fight-info--type-img
              img.container-fight-info--type-img-boxe(v-if="fight.typeFight === 'boxe'" src=`@/assets/boxe.png`)
              img.container-fight-info--type-img-mma(v-else-if="fight.typeFight === 'mma'" src=`@/assets/mma.png`)
          div.container-fight-info--title
            h3.container-fight-info--title-principal {{ fight.title }}
            span.container-fight-info--title--subtitle {{ fight.subTitle }}
          div.container-fight-info--location
            div.container-fight-info--location-text
              span
                  country-flag(:country='fight.country' size='small')
              p {{  fight.location  }}
                
          div.container-fight-info--broadcast
            div.container-fight-info--broadcast-icon(v-for="broadcast in fight.broadcaster")
              img(:src="getImageBroadcast(broadcast)")
          count-down(:date="fight.dateFight")
</template>


<script lang="js">

import CountDown from '@/components/CountDown.vue'

import CountryFlag from 'vue-country-flag-next'
// import { computed } from "vue";

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
    setup (props) {
      const fights = props.fights
      const getImageBroadcast = (broadcast) =>{
        return require(`@/assets/broadcast/${broadcast.toLowerCase()}.png`)
      }
      const isPaire = (index) => {
        return index % 2 === 0
      }
      return {
        fights,
        isPaire,
        getImageBroadcast
      }
    }
}
</script>

<style scoped lang="scss">
.container-fight {
  margin: 0 !important;
  text-align: center;
}
.paire {
  border: 2px solid #c61612;
}
.impaire {
  border: 2px solid #ffffff;
}
.container-fight-info {
  box-shadow: inset 0 0 10px #000000;
  display: flex;
  margin-bottom: 11px;
  & > div:not(:first-child) {
    padding: 0.7rem;
  }
  &--title {
    width: 28%;
    margin-top: 5px;
    &-principal {
      margin: 0;
    }
    & h3, span {
      color: white
    }
  }
  &--broadcast {
    width: 10%;
    margin-top: 18px;
    &-icon {
      & img {
        width: 2.29rem
      }
    }
  }
  &--location {
    width: 28%;
    margin-top: 5px;
    & p {
      color: white;
      margin: 0;
    }
  }
  &--type {
    width: 5%;
    &-img {
      &-boxe {
      width: 5rem;
      margin-left: -10px;
      margin-top: 7px;
      }
      &-mma {
        width: 2.3rem;
        margin-left: 10px;
        margin-top: 14px;
      }
    }
  }
}
</style>