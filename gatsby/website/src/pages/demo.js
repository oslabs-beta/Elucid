import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Graphiql from '../components/Graphiql'

import pic07 from '../assets/images/pic07.jpg'

const Demo = props => (
  <Layout>
    <Helmet>
      <title>Demo - Landed by HTML5 UP</title>
      <meta name="description" content="Demo Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>ELUCIDATE</h2>
          <p>
            It is time to see the magic power of Elucid!
          </p>
        </header>

        <section id="content">
          <a href="#" className="image fit">
            <img src={pic07} alt="" />
            
          </a>
          <Graphiql/>
          <h3>No Sidebar</h3>
          <p>
            Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est.
            Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus
            justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna
            consectetur non, malesuada quis augue. Morbi tincidunt pretium
            interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper,
            porta cursus justo. Cras vel neque eros. Vestibulum diam cubilia
            adipiscing interdum aliquet aliquet placerat cubilia accumsan cep
            ante nullam adipiscing tortor odio. Iaculis adipiscing accumsan
            nascetur in cras. Lacinia placerat.
          </p>
          
          <ul>
            <li>Faucibus orci lobortis ac adipiscing integer.</li>
            <li>Col accumsan arcu mi aliquet placerat.</li>
            <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
            <li>Blandit massa non blandit tempor interdum.</li>
            <li>Lacinia mattis arcu nascetur lobortis.</li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
)

export default Demo
