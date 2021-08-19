import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'


const contact = () => (
  <Layout location="/contact">
    <Helmet>
      <title>Contact - Elucid</title>
      <meta name="description" content="Contact Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Contact us</h2>
          <p>
          Feel free to email us for any questions or concerns       
          </p>
          <h3>
          elucid.elucidate@gmail.com
          </h3>
        </header>
        <section>
          <form method="post" action="404">
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      href="/404"
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </section>
        </div>
    </div>
  </Layout>
)

export default contact;
