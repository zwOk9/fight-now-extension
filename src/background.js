
import store from './store'

import _ from 'lodash'

window.setInterval(() => {
  store.dispatch('getFights').then(() => {
    let fights = store.getters.fights
    _.forEach(fights, (fight) => {
      let id = fight._id
      try {
        chrome.storage.local.get(id, (result) => {
          if (_.isNil(result[id]._id)) {
            if (new Date(fight.dateFight).getTime() > Date.now) {
              chrome.storage.local.set({[id]: fight})
            } 
          } else {
            if (new Date(result[id].dateFight).getTime() <= Date.now) {
              showNotif(fight)
              chrome.storage.local.remove([id])
            }
          }
        })
        } catch(e) { 
          console.log(e)
        }
    
    })
  })
}, 60000)

function showNotif (data) {
    let notification = new Notification(data.title, {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: 'Hey there! You\'ve been notified!',
    })
    notification.onclick = () => {
      window.open('http://stackoverflow.com/a/13328397/1269037')
    }
}
