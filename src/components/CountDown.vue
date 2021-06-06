
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

<script>

export default {
  data () {
    return {
      dateSyncro: new Date(this.date).getTime(),
      dateNow: new Date().getTime(),
      interval: '',
      loadingDate: true
    }
  },
  props: {
    date: {
      type: String,
      required: true,
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.dateNow =  new Date().getTime()
    }, 1000)
  },
  computed: {
    seconds () {
      return this.addZero(Math.trunc(((this.dateSyncro - this.dateNow) / 1000) % 60))
    },
    minutes () {
      return this.addZero(Math.trunc((((this.dateSyncro - this.dateNow) / 1000) / 60) % 60 ))
    },
    heures () {
      return this.addZero(Math.trunc(((((this.dateSyncro - this.dateNow) / 1000) / 60) / 3600) % 60 ))
    },
    jours () {
      return this.addZero(Math.trunc(((this.dateSyncro - this.dateNow) / 86400) % 60))
    }
  },
  methods: {
    addZero (number) {
      return (number >= 10) ? number : `0${number}`
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