/** @type import('gatsby').GatsbyConfig */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://jezumbro.github.io',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-posthog',
      options: {
        apiKey: 'phc_1P0jj11b9N17pkpp9Z8CV5Wp7UHV8NZRlLunUFaU6pa',
        apiHost: 'https://app.posthog.com',
        head: true,
        isEnabledDevMode: false,
      },
    },
  ],
}
