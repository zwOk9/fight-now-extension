module.exports = {
  "pages": {
    "popup": {
      "template": "public/browser-extension.html",
      "entry": "./src/popup/main.js",
      "title": "Popup"
    },
    "options" : {
      "template": "public/index.html",
      "entry": "./src/options/main.js",
      "title": "Options"
    } 
  },
  "pluginOptions": {
    "browserExtension": {
      "componentOptions": {
        "background": {
          "entry": "src/background.js"
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}