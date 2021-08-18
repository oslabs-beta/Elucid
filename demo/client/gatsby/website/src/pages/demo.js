import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import pic01 from '../assets/images/Elucid-Before-And-After-14.png'
import pic02 from '../assets/images/Elucid-Before-And-After-23.png'
import pic03 from '../assets/images/Elucid-Before-And-After-Too-Many.png'
import Graphiql from '../components/Graphiql'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const query1 = '{\n person { \n   name \n } \n}'
const query2 = '{\n person (id: 1) { \n   name \n } \n}'
const query3 =
  '{\n Person2: person (id:2) {\n   name\n   gender\n } \n Person1: person (id:9) {\n  name\n }\n \n person {\n   name\n }\n}'

const Demo = props => (
  <Layout>
    <Helmet>
      <title>Demo - Elucid</title>
      <meta name="description" content="Demo Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Lighting the Way</h2>
          <p>Let's take a closer look at some of what Elucid can do.</p>
        </header>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Resource not found</h3>
                <p>
                  When querying a database using GraphQL, it's typical to
                  specify a unique argument value such as an id number. If no
                  data point with a matching value can be found, GraphQL will
                  return an ambiguous null value. Is it null because the
                  datapoint doesn't exist, or because it holds an empty value?
                  Null value responses are often caused by other issues with the
                  query or GraphQL server, too. Elucid helps you know when a
                  specified resource simply isn't found.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <CopyToClipboard text={query1}>
                        <button className="button">Copy to clipboard</button>
                      </CopyToClipboard>
                    </li>
                  </ul>
                </footer>
              </section>
              <hr />
            </section>
          </div>
          <div className="col-8  imp-medium">
            {/*<section id="content">
               <iframe  className="juxtapose" width="100%" height="780" frameborder="0" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=2629c36a-ff8b-11eb-abb7-b9a7ff2ee17c"></iframe>
              </section>
            <section id="content">
              <a href="#" className="image fit">
                <video controls autoplay loop src={pic05} width="auto" type="video/mp4" alt="" />
              </a>
            </section>*/}
            <section id="content">
              <div className="image fit">
                <img src={pic01} alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container">
        {/*<header className="major">
          <h2>Second Demo Example </h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>*/}
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Bad Resolver</h3>
                <p>
                  If a GraphQL resolver isn't constructed properly, it will
                  likely result in strange and incomplete responses. Elucid can
                  help identify and tell you about these.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <CopyToClipboard text={query2}>
                        <button className="button">Copy to clipboard</button>
                      </CopyToClipboard>
                    </li>
                  </ul>
                </footer>
              </section>
              <hr />
            </section>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            <section id="content">
              <div className="image fit">
                <img src={pic02} alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Multiple Errors</h3>
                <p>
                  Elucid can identify and message about multiple simultaneous
                  errors in queries and from the server.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <CopyToClipboard text={query3}>
                        <button className="button">Copy to clipboard</button>
                      </CopyToClipboard>
                    </li>
                  </ul>
                </footer>
              </section>
              <hr />
            </section>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            <section id="content">
              <div className="image fit">
                <img src={pic03} alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container">
        <header className="major">
          <h2>Graphiql Demo </h2>
          <p>
            Test Elucid out yourself! Copy and paste sample code from the
            examples above, or plug in your own.
          </p>
        </header>
        <Graphiql />
      </div>
    </div>
  </Layout>
)

export default Demo
