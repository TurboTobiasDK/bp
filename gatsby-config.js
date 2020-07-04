module.exports = {
  siteMetadata: {
    siteUrl: "https://bolig-partner.dk",
    author: "Louise Birkedal",
    title: "BoligPartner",
    description: "",
    image: "/koeberaftale.jpg",
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
        icon: `src/images/BoligPartner_huse-logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
