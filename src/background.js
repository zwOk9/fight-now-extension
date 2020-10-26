import store from './store'
import _ from 'lodash'


chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('refresh', { periodInMinutes: 2 });
});


chrome.alarms.onAlarm.addListener(() => {
  chrome.storage.sync.get([
    'notificationMMA', 'notificationBoxing'], (items) => {
      let mma = (_.isNil(items.notificationMMA) || !items.notificationMMA) ? false : items.notificationMMA
      let boxing = (_.isNil(items.notificationBoxing) || !items.notificationBoxing) ? false : items.notificationBoxing
      checkNotification (mma, boxing)
  })
});

function checkNotification (mma, boxing) {
  store.dispatch('getFights').then(() => {
    let fights = store.getters.fights
    _.forEach(fights, (fight) => {
      
      let id = fight._id
      try {
        chrome.storage.local.get(id, (result) => {
          if ((_.isNil(result[id]) && (new Date(fight.dateFight).getTime() + (5*60*60*1000)) <= Date.now()) || (result[id].typeFight === 'MMA' && !mma) || result[id].typeFight === 'boxing' && !boxing) {
            return
          }
          let modelFightCompare = {
            _id: '',
            broadcaster: [],
            dateFight: '',
            links: [],
            title: '',
            typeFight: ''
          }
          let modelFightApi = {
            _id: '',
            broadcaster: [],
            dateFight: '',
            links: [],
            title: '',
            typeFight: ''
          }
          modelFightCompare =  (_.isNil(result) || _.isNil(result[id])) ? [] : _.pick(result[id], _.keys(modelFightCompare))
          modelFightApi = _.pick(fight, _.keys(modelFightApi))
          if (_.isNil(result) || _.isNil(result[id]) || _.isNil(result[id]._id)) {
            if ((new Date(fight.dateFight).getTime()) > Date.now()) {
              let modelFightStorage = {
                _id: fight._id,
                broadcaster: fight.broadcaster,
                dateFight: fight.dateFight,
                links: fight.links,
                title: fight.title,
                typeFight: fight.typeFight,
                notification: false
              }
              chrome.storage.local.set({[id]: modelFightStorage})
            } 
          } else if (!_.isEqual(modelFightApi, modelFightCompare)) {
            chrome.storage.local.set({[id]: modelFightApi})
          } else {
            if ((new Date(result[id].dateFight).getTime()) <= Date.now() && !result[id].notification) {
              showNotif(fight)
              result[id].notification = true
              chrome.storage.local.set({[id]: result[id]})
            } else if ((new Date(result[id].dateFight).getTime() + (5*60*60*1000)) <= Date.now()) {
              clearStorage([id])
            }
          }
        })
        } catch(e) { 
          console.log(e)
        }
    
    })
  })
}

function showNotif (data) {
    let notification = new Notification(data.title, {
      icon: '',
      body: 'Hey there! You\'ve been notified!',
    })
    notification.onclick = () => {
      window.open('')
    }
}


function clearStorage (idStorage) {
  chrome.storage.local.get(idStorage, (result) => {
    delete result[idStorage]
  })
}
