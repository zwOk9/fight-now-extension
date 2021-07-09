<template lang="pug">
div.container-fight-info--counter
  p 
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

    setInterval(() => {
      dateNow.value = new Date().getTime()
    }, 1000)

    const addZero = (number) => {
      return (number >= 10) ? number : `0${number}`
    }
    // console.log((((dateSyncro - dateNow.value) / 60000) / 60) / 24))
    return {
      seconds: computed(() => addZero(Math.trunc(((dateSyncro - dateNow.value) / 1000) % 60))),
      minutes: computed(() => addZero(Math.trunc((((dateSyncro - dateNow.value) / 1000) / 60) % 60 ))),
      heures: computed(() => addZero(Math.trunc(((((dateSyncro - dateNow.value) / 1000) / 60) / 3600) % 60 ))),
      jours: computed(() => addZero(Math.trunc((((dateSyncro - dateNow.value) / 60000) / 60) / 24)))
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