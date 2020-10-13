<template lang="pug">
  div
    el-row(:gutter="20" v-for="data, i in datas" :key="i")
      el-col(:span="8").fight-now
        div.grid-content.fight-now__icons
          img(v-if="data.typeFight === 'boxe'" src="@/assets/boxe.png")
          img(v-if="data.typeFight === 'mma'" src="@/assets/mma.png")
      el-col(:span="10")
        div.grid-content
          p {{ data.title }}
          div.fight-now__broadcast
            img(v-for="broadcast in data.broadcaster" :src="getImageBroadcast(broadcast)")
      el-col(:span="10")
        CountDown(:date="data.dateFight")
</template>

<script>
import CountDown from '@/components/CountDown'

  export default {
    components: {
      CountDown
    },
    methods: {
      showNotification () {
        // chrome.browserAction.setIcon({path: {16: "./assets/icons/default1.png"}});
        let notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: 'Hey there! You\'ve been notified!',
        })
        notification.onclick = () => {
          console.log('dd')
          window.open('http://stackoverflow.com/a/13328397/1269037')
        }
        console.log(notification)
      }, 
      getImageBroadcast (broadcast) {
        console.log(broadcast)
        return require(`@/assets/broadcast/${broadcast.toLowerCase()}.png`)
      }
    },
    props: ['datas']
  }
  
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .fight-now {
    width: 12%;
    padding-top: 3px;
    &__icons img {
      width: 25px;
    }
    &__broadcast img {
      width: 20px;
    }
  }
</style>