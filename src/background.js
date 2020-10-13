
import store from './store'


store.dispatch('getFights').then(() => {
    console.log(store.getters.fights)
})
// browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log('Hello from the background')
// })


// window.setInterval(() => {
//     // chrome.browserAction.setIcon({path: {16: "./assets/icons/default1.png"}});
//     let notification = new Notification('Notification title', {
//         icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
//         body: 'Hey there! You\'ve been notified!',
//     })
//     notification.onclick = () => {
//     console.log('dd')
//     window.open('http://stackoverflow.com/a/13328397/1269037')
//     }
// }, 5000)