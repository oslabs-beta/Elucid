module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Home',
    author: 'ELUCID TEAM',
    description: 'A Gatsby.js V2 Starter based on Landed by HTML5 UP',
    menuLinks: [
      {
        name: 'Demo',
        link: '/demo',
      },
      {
        name: 'Links',
        link: '#',
        items: [
          {
            name: 'GitHub',
            link: 'https://github.com/oslabs-beta/Elucid',
          },

          {
            name: 'Medium',
            link:
              'https://medium.com/@gioiacobucci/introducing-elucid-a-graphql-error-handler-for-the-rest-of-us-1edd161bc38a',
          },
          {
            name: 'NPM',
            link: 'https://www.npmjs.com/package/package',
          },

          /*{
            name: 'Articles',
            link: '#',
            items: [
              {
                name: 'Medium',
                link:
                  'https://medium.com/@weblab_tech/graphql-everything-you-need-to-know-58756ff253d8',
              },
              {
                name: 'article 2',
                link: '#',
              },
              {
                name: 'article 3',
                link: '#',
              },
              {
                name: 'article 4',
                link: '#',
              },
            ],
          },*/
        ],
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Install Elucid',
        link: 'https://www.npmjs.com/package/package',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/Elucid_Logo.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
