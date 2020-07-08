module.exports = {
  siteMetadata: {
    siteUrl: "https://bolig-partner.dk",
    author: "Louise Birkedal",
    title: "BoligPartner",
    description: "",
    image:
      "https://bolig-partner.dk/static/8f427c4be6256c72240ea53cc8f506fe/OpenGraph_Boligpartner_Web.png",
    keywords: [
      "Boligrådgivning",
      "Skilsmisseskøde",
      "Bolighandel",
      "Køberrådgivning",
    ],
  },
  plugins: [
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://bp.turbotobias.xyz/graphql",

        // refetch interval in seconds
        refetchInterval: 60,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    "gatsby-plugin-netlify-cache",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bolig-partner-en-tryg-bolighandel`,
        short_name: `BoligPartner`,
        start_url: `/`,
        background_color: `#1a315d`,
        theme_color: `#1a315d`,
        display: `minimal-ui`,
        icon: `src/images/BoligPartner_huse-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: ['.price-box'],
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/tak-for-din-henvendelse`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    "gatsby-plugin-offline",
  ],
}
