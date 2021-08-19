import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/Home1'
import Two from '../components/Home2'
import Three from '../components/Home3'
import Legal from '../components/Legal'


class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Elucid: Added Insight for GraphQL"
          meta={[
            { name: 'description', content: 'Landed Elucid Starter' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <Two />
        <Three />
        <Legal />
      </Layout>
    )
  }
};

export default Home
