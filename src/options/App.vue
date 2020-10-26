<template lang="pug">
  div
    div.fight-now-option.fight-now-option--heading
      img(:src="getUrl()" height="40" alt="")
      h1 {{ 'Fight now Options' }} 
    div.fight-now-option.fight-now-option--options
      div.fight-now-option--option
        el-checkbox(v-model="options.boxing" @change="handleCheckBoxing") {{ 'Be notified of BOXING events.' }}
      div.fight-now-option--option
       el-checkbox(v-model="options.mma" @change="handleCheckMMA") {{ 'Be notified of MMA events.' }}
      transition(name="fade")
        div.fight-now-option--status(v-if="statusText.length > 0")
          p {{ statusText }}

</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
        options: {
          boxing: false,
          mma: false
        },
        statusText: '',
        time: null
    }
  },
  mounted () {
      chrome.storage.sync.get([
        'notificationMMA', 'notificationBoxing'], (items) => {
          if (_.isNil(items.notificationBoxing)) {
            chrome.storage.sync.set({
              notificationBoxing: false
            })
          } else {
            this.options.boxing = items.notificationBoxing
          }

          if (_.isNil(items.notificationMMA)) {
            chrome.storage.sync.set({
              notificationMMA: false
            })
          } else {
            this.options.mma = items.notificationMMA
          }
        })
  },
  methods: {
    getUrl () {
      return chrome.extension.getURL('icons/32.png')
    },
    handleCheckBoxing () {
      clearTimeout(this.time)
      chrome.storage.sync.set({
        notificationBoxing: this.options.boxing
      })

      this.statusText = 'Options Boxing saved'
      this.timer =  setTimeout(()=>{ this.statusText = '' }, 2000)
    },
    handleCheckMMA () {
      clearTimeout(this.timer)
      chrome.storage.sync.set({
        notificationMMA: this.options.mma
      })

      this.statusText = 'Options MMA saved'
      this.timer =  setTimeout(()=>{ this.statusText = '' }, 2000)
    },
    
  }

}
</script>
<style scoped lang="scss">
html, body { height: 100%; }

body {font-family: arial, helvetica, sans-serif; font-size: 14px; margin: 25px; }
body {  background: url('data:image/jpeg;base64,%2F9j%2F4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP%2FsABFEdWNreQABAAQAAABQAAD%2F7gAOQWRvYmUAZMAAAAAB%2F9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz%2FwAARCABkAGQDAREAAhEBAxEB%2F8QAZAABAQEBAAAAAAAAAAAAAAAAAQACCQEBAAAAAAAAAAAAAAAAAAAAABAAAgEDBAEEAgICAwAAAAAAAREhADECQVFhEiJxgTJCkaHwwbHR8WJTEQEAAAAAAAAAAAAAAAAAAAAA%2F9oADAMBAAIRAxEAPwDvGWDplgRM60GQEBAlP%2Fmg1LaIdwL0GYQuTY%2BlBYhoAZHj9RQXkQGW4IMFigRBT6kiAdXQSQgZAC2V4OlAMjG5I0NpFBQSFDMuzSoJSJLRGRH6oJgZhpmxEGgex7Ln5a0Fyrto60BYY6IEEc0DrGwBwG%2FFBAkAEWdjzNAG5gRKF%2FagiwAySoHI5oGWQVbx19KAxHikiCCCNaBcGSCC2Lmdt6CyEyDk78%2BlBXB11R4oL5gIjDJsPegew7dvulQZN7AGRaOKCBjyx2ehB1oEoHykO8UEAQ1wHu7UFKIIGWB%2FIoJZAJfHSggDdIXG1qAOPj5YrK5TRO%2FFA5CxOXUkSbvY0F2JAJ8vrkNnrQBYNgMjjugVQILC6ogHWglquXFBCyGTxZAe1BQO2Be41VBSNiCAnyZFAoMIwbBbaUGAB5QeuUKgoAQ8hzBjmgUJBE3c%2FsUEIAOORRsRIoIEDRo6cbigTwOsyLCKCfl4wUXiaC3ynrkETtzQDjSy782tvQJAZYPXJ2nigCSAJYiPegUCDoygf6oDHJFZ7xlvQKBAuRkWI1dBNnH7DJ%2Fmggfie2WOWOqEigE8UxZlXiaCM%2BRJGS%2BQF6BIJYIZBg7q9BEG3r0c0AIBxEOwtQa7auF2SmgCUSsSCLzpvQM7FS8VHqDQZ8QDdG%2F9MUCymPIan19aCR%2BQHLEF0Afk5BBb3oEkByQ21QQcF9uvieRQAD7AAgZARYg0CwYymdW5igP%2BnYEiceRrQJ7q5IUA6Ec0CyvhPW%2FFADyMicVfY7GgMbY%2BM4nyX%2BqBAIB6oAAnnegiwsgYy2kKgAVlbxI8xedxQRsHcMDYigWxYjcX9xQUTJtr%2BKAFplGfSgSEupLxMB8UEToYGj0%2FFAT4kazAPvQai82S43oAonqbzLoBggk%2BOQN%2F7oIgDLtjC2mDQIU9bFnFROxFAaD6uCFLoIfbqUflj7waBQ40MUE0USWNx%2FL0B1uGAdKBQiBi7gCRQa1RZBU6EWoMKxxuCSL%2BlAMKxSs9NnQbnbst1QZBABM9bHHbmg0AocHagywcZjK5y19aBNkSQSjbXegm0SgYP42oBwDBIuN%2FegZlBwFzQRHyWIkXBuKDOXDEPEmQ9RQJUEjgnigl1BD7D6u496B6%2FZG9tPzQQDZxAdziqAFgCY34oKcbsEa2tQIIKd8oOvNBAZAoZPHT2oJ5AEvLICEQP80Bb4wDoRQMdgLHEwDrFBCUC9GgoNjQEojLIOz3W9A%2Bd8T2BFqC0uQMgRQKP%2Fqei7cvagyOzaM3e%2BlAp9oBExqItQTTgrYHUjY0EG0L3xJIRPpQCcpEQRe9Ah6hnUiKCGuOrRxNpoJvxMEf43dAGD2BCSKuFvQMEFWKkaUAGxDgsWvqDQUdjKi6iKCU9YaT4oFsB5emVwaABCLAk6H80Erq2UMDazoGSNIBfCoLyFvKx6oWoKw1glMaGgdoEGE1trQZLABJAQnEzegWHaCJFqBARIMfxCgziX0GRLaB14oEHIGQwfzQU7Hqr8O1BGx6fNTtQJSlWDe%2BlBnC8vVp0ENU0j8qCjx7P22oIP7tSndUEV9bx2X6oNalPqvJ29qDE9fL9%2Fqg2E%2FHaVQE9Jb7eKvQOvg9HtQZh%2FXr770H%2F9k%3D'); }
h1 { font-size: 22px; margin: 10px 0 10px 52px; }
.fight-now-option {
    background: #fff;
    border: 1px solid #ddd;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;
    color: #333;
    width: 640px;
    margin: 10px auto;
    &--heading {
      padding: 14px 20px;
      text-shadow: 1px 1px 0px #fff;
      background: -webkit-linear-gradient(top, #ffffff 0%,#e0e0e0 50%,#ffffff 100%);
    }
    &--heading img {
      float: left; 
      margin-left: -5px;
    }
    &--option {
      padding-top: 29px ;
    }
    &--status {
      margin-left: 5px; 
      color: #02893D; 
      font-weight: bold;
    }
 }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>