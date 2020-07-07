var plugins = [{
      plugin: require('C:/Users/Tobias/Desktop/Gatsby/bp/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Tobias/Desktop/Gatsby/bp/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"bolig-partner-en-tryg-bolighandel","short_name":"BoligPartner","start_url":"/","background_color":"#1a315d","theme_color":"#1a315d","display":"minimal-ui","icon":"src/images/BoligPartner_huse-logo.jpg"},
    },{
      plugin: require('C:/Users/Tobias/Desktop/Gatsby/bp/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","exclude":["/tak-for-din-henvendelse"],"query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n  \n            allSitePage {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n        }"},
    },{
      plugin: require('C:/Users/Tobias/Desktop/Gatsby/bp/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
