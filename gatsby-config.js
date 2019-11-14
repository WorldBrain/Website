require('dotenv').config()

module.exports = {
  siteMetadata: {
    defaultTitle: `Memex by WorldBrain`,
    titleTemplate: ``,
    defaultDescription: `Eliminate time spent bookmarking, retracing steps to recall a webpage, or copy-pasting notes into scattered documents.`,
    twitterUsername: `@worldbrain`,
    siteUrl: `https://worldbrain.io/`,
    defaultImage: `https://worldbrain.io/icons/icon-270x270.png`,
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `./src/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./common/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `./common/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Memex by worldbrain.io`,
        short_name: `Memex`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://worldbrain.io',
    //     sitemap: 'https://worldbrain.io/sitemap.xml',
    //     policy: [
    //       { userAgent: '*', allow: '/' },
    //       { userAgent: 'Baiduspider', disallow: ['/'] },
    //       { userAgent: 'YandexBot', disallow: ['/'] },
    //       { userAgent: 'Sogou', disallow: ['/'] },
    //       { userAgent: 'Exabot', disallow: ['/'] },
    //       { userAgent: 'AhrefsBot', disallow: ['/'] },
    //       { userAgent: 'BLEXBot', disallow: ['/'] },
    //       { userAgent: 'ia_archiver', disallow: ['/'] },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://worldbrain.us9.list-manage.com/subscribe/post?u=de9ed6b3382658d5ebebfe2a4&amp;id=f1b887a214',
      },
    },
    'gatsby-plugin-typescript',
    // 'gatsby-plugin-postcss',
    'gatsby-plugin-sass',

    /*{
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },*/
    //'gatsby-plugin-layout'
    `gatsby-plugin-offline`,
  ],
}
