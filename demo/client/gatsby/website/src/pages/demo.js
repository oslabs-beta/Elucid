import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import pic05 from '../assets/images/pic02.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Graphiql from '../components/Graphiql'


const Demo = props => (
  <Layout>
    <Helmet>
      <title>Demo - Landed by HTML5 UP</title>
      <meta name="description" content="Demo Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>First Demo Example </h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Magna Feugiat</h3>
                <p>
                  Sed tristique purus vitae volutpat commodo suscipit amet sed
                  nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                  vitae volutpat commodo suscipit ullamcorper commodo suscipit
                  amet sed nibh. Proin a ullamcorper sed blandit..
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        Learn More
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
              <hr />
            </section>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={pic05} alt="" />
              </a>
            </section>
          </div>
        </div>
      </div>
      
      <div className="container">
        <header className="major">
          <h2>Second Demo Example </h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Magna Feugiat</h3>
                <p>
                  Sed tristique purus vitae volutpat commodo suscipit amet sed
                  nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                  vitae volutpat commodo suscipit ullamcorper commodo suscipit
                  amet sed nibh. Proin a ullamcorper sed blandit..
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        Learn More
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
              <hr />
            </section>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={pic05} alt="" />
              </a>
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <header className="major">
          <h2>Graphiql Demo </h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>
            <Graphiql/>
      </div>
    </div>
  </Layout>
)

export default Demo
