module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'ELUCID HOME',
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
            name: 'Something Here',
            link: '/right-sidebar',
          },
          // {
          //   name: 'Left Sidebar',
          //   link: '/left-sidebar',
          // },
          {
            name: 'Articles',
            link: '#',
            items: [
              {
                name: 'Medium',
                link: '#',
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
          },
        ],
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Install ELUCID',
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
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
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
