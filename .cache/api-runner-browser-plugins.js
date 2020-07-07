module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"bolig-partner-en-tryg-bolighandel","short_name":"BoligPartner","start_url":"/","background_color":"#1a315d","theme_color":"#1a315d","display":"minimal-ui","icon":"src/images/BoligPartner_huse-logo.jpg"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
