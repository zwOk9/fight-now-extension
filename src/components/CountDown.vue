
<template lang="pug">
    div.fight-now__countdown(v-loading='loadingDate')
      p {{dateSyncro}}
</template>

<script>

export default {
  data () {
    return {
      dateSyncro: '',
      loadingDate: true
    }
  },
  created() {
    this.countDownTimer()
  },
  methods: {
    countDownTimer () {
      setInterval(() => {
        let days, hours, minutes, seconds;
        let currentDate = new Date().getTime();
        let targetDate = new Date(this.date).getTime();
        let secondsLeft = ((targetDate - currentDate) / 1000) - 1000
        days = this.pad( Math.floor( secondsLeft / 86400 ) )
        
        secondsLeft %= 86400
        hours = this.pad( Math.floor( secondsLeft / 3600 ) )
        secondsLeft %= 3600
        minutes = this.pad( Math.floor( secondsLeft / 60 ) )
        seconds = this.pad( Math.floor( secondsLeft % 60 ) )
        let countDownInner = ''
        if (days > 0) {
          countDownInner = `${days} : ${hours} : ${minutes} : ${seconds}`
        } else if (days <= 0 && hours > 0 && (minutes > 0)) {
          countDownInner = `${hours} : ${minutes} : ${seconds}`
        }  else if (days <= 0 && hours <= 0 && (minutes > 0)) {
          countDownInner = `${minutes} : ${seconds}`
        } else if (days <= 0 && hours <= 0 && minutes <= 0 && (seconds > 0)) {
          countDownInner = `${seconds}`
        } else {
          countDownInner = `now`
        }
        this.dateSyncro = countDownInner
        this.loadingDate = false
      }, 1000)
    },
    pad (n) {
			return (n < 10 ? '0' : '') + n;
		}
  },
  props: ['date']
}
</script>

<style lang="scss" scoped>
  .fight-now {
    &__countdown {
      text-align: right;
    }
  }
</style>