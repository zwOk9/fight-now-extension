module.exports = {
  "pages": {
    "popup": {
      "template": "public/browser-extension.html",
      "entry": "./src/popup/main.js",
      "title": "Fight now"
    },
    "options" : {
      "template": "public/index.html",
      "entry": "./src/options/main.js",
      "title": "Options fight now"
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