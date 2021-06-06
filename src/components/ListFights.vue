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
             img(src="img/rmc.png")
             img(src="img/rmc.png")
          CountDown(:date="date")

</template>

<script>
import CountDown from '@/components/CountDown'

  export default {
    components: {
      CountDown
    },
    data () {
      return {
        date: '2021-07-21T03:00:00.000+00:00'
      }
    },
    methods: {
      getImageBroadcast (broadcast) {
        return require(`@/assets/broadcast/${broadcast.toLowerCase()}.png`)
      }
    },
    props: ['datas']
  }
  
</script>

<style lang="scss" scoped>
  .now {
    font-family: 'Dosis', sans-serif;
    font-weight: 800;
    text-shadow: 1px 1px 2px red, 0 0 1em red, 0 0 0.2em #ff00bc;
    color: red !important;
  }
  .container {
    display: flex;
    flex-direction: column;
    &-fight-info {
      &--counter {
        width: 71px;
        & .now {
          text-align: center;
        }
      }
    }
      
    &-fight {
      &--col {
        padding: 0 !important;
      }
      padding: 0 !important;
      border: 2.5px solid #c61713;
      margin: 0 !important;
      margin-bottom: 12px;
      &-info {
        display: flex;
        justify-content: space-between;
        &--type {
          width: 10%;
          &-img {
            height: 100%;
             & img {
               width: 100%;
               padding-top: 0.59rem
             }
          }
        }
        &--location-text {
          p {
            font-style: italic;
            font-size: 0.68rem;
            white-space: nowrap;
            padding-top: 0.36rem;
          }
        }
        &--title {
          width: 35%;
          &--subtitle {
            font-size: 0.7rem;
            padding-left: 0.4rem;
            padding-top: 0.13rem;
          }
          & h3 {
            color: white;
            display: flex;
            justify-content: flex-start
          }
          & h3 , & span {
            font-weight: 800;
            font-family: Helvetica, Arial, sans-serif;
          }
          & span {
            color: #c61713;
            font-weight: 600;
          }
        }
        &--brodcast {
          width: 120px;
          &-icon img {
            padding-top: 15px;
            width: 48px;
          }
          
        }
        &--counter {
            
          }
      }
    }
    & p {
      color: white;
    }
  }
  p {
    font-weight: 400;
    font-family: Helvetica, Arial, sans-serif;
  }

</style>