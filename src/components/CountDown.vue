<template lang="pug">
div.container-fight-info--counter
  p.container-fight-info--counter-finish(v-show="isNow")
    span.container-fight-info--counter-finish-now(v-show="!hasPassed") {{ 'NOW' }}
    span.container-fight-info--counter-finish-passed(v-show="hasPassed") {{ 'passed' }}
  p(v-show="!isNow")
    span.container-fight-info--counter--number {{ jours }}
    span.container-fight-info--counter--delimiter {{':'}}
    span.container-fight-info--counter--number {{ heures }}
    span.container-fight-info--counter--delimiter {{':'}}
    span.container-fight-info--counter--number {{ minutes }}
    span.container-fight-info--counter--delimiter {{':'}}
    span.container-fight-info--counter--number {{ seconds }}
  
</template>

<script lang="js">

import { ref, computed } from "vue";

export default {
  props: {
    date: {
      type: String,
      required: true,
    }
  },
  setup (props) {
    let dateSyncro = new Date(props.date).getTime()
    let dateNow = ref(new Date().getTime())
    const isNow = (dateSyncro <= dateNow.value)
    const hasPassed = ((dateSyncro + 18000000 <= dateNow.value ))
    setInterval(() => {
      dateNow.value = new Date().getTime()
    }, 1000)

    const addZero = (number) => {
      return (number >= 10) ? number : `0${number}`
    }

    return {
      seconds: computed(() => addZero(Math.trunc(((dateSyncro - dateNow.value) / 1000) % 60))),
      minutes: computed(() => addZero(Math.trunc((((dateSyncro - dateNow.value) / 1000) / 60) % 60 ))),
      heures: computed(() => addZero(Math.trunc((((dateSyncro - dateNow.value) / 1000) / 60 / 24) % 60))),
      jours: computed(() => addZero(Math.trunc((((dateSyncro - dateNow.value) / 60000) / 60) / 24))),
      isNow,
      hasPassed
    }
  }
}
</script>

<style lang="scss" scoped>
  .fight-now {
    &__countdown {
      text-align: right;
    }
  }
  .container {
    &-fight {
      &-info {
        &--counter {
          width: 14%;
          &-finish {
            color: #e61610;
            &-now {
              color: #e61610;
              text-shadow: 1px 1px 2px #e61610;
              font-weight: bold;
              font-family: 'Days One', sans-serif;
              font-style: italic;
              font-size: 0.75rem;
            }
          }
          &--number {
            color: white
          }
          &--delimiter {
            color: rgb(230, 22, 16);
          }
          & p {
            font-weight: bold;
            font: small-caps bold 16px/1 sans-serif;
          }
          & span {
            font-weight: bold;
          }
        }
      }
    }
  }
</style>