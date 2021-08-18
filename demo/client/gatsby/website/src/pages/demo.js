import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import pic02 from '../assets/images/pic02.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Graphiql from '../components/Graphiql'


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
          <p>
          Let's take a closer look at some of what Elucid can do.        
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Resource not found</h3>
                <p>
                When querying a database using GraphQL, 
                it's typical to specify a unique argument value such as an id number. 
                If no data point with a matching value can be found, GraphQL will return 
                an ambiguous null value. Is it null because the datapoint 
                doesn't exist, or because it holds an empty value? Null value responses 
                are often caused by other issues with the query or 
                GraphQL server, too. Elucid helps you know when a specified resource 
                simply isn't found. 
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        Copy query to clipboard
                      </a>
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
              <a href="#" className="image fit">
                <img src={pic02} alt="" />
              </a>
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
                  If a GraphQL resolver isn't constructed properly, it will likely
                  result in strange and incomplete responses. Elucid can help identify
                  and tell you about these.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                      Copy query to clipboard
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
                <img src={pic06} alt="" />
              </a>
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
                  Elucid can identify and message about multiple simultaneous errors
                  in queries and from the server.
                </p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                      Copy query to clipboard
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
                <img src={pic06} alt="" />
              </a>
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
            <Graphiql/>
      </div>
      
      {/* <div className="container">
        <header className="major">
          <h2>Second Example</h2>
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
              <section>
                <a href="#" className="image fit">
                  <img src={pic06} alt="" />
                </a>
                <h3>Amet Lorem Tempus</h3>
                <p>
                  Sed tristique purus vitae volutpat commodo suscipit amet sed
                  nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                  vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                  ipsum dolore.
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
            </section>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={pic05} alt="" />
              </a>
              <h3>Dolore Amet Consequat</h3>
              <p>
                Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod
                est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta
                cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis
                at magna consectetur non, malesuada quis augue. Morbi tincidunt
                pretium interdum est. Curabitur mi justo, tincidunt vel eros
                ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum
                diam.
              </p>
              <p>
                Vestibulum diam quam, mollis at consectetur non, malesuada quis
                augue. Morbi tincidunt pretium interdum. Morbi mattis elementum
                orci, nec dictum porta cursus justo. Quisque ultricies lorem in
                ligula condimentum, et egestas turpis sagittis. Cras ac nunc
                urna. Nullam eget lobortis purus. Phasellus vitae tortor non est
                placerat tristique.
              </p>
              <h3>Sed Magna Ornare</h3>
              <p>
                In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu
                in odio vulputate luctus. Suspendisse euismod lorem eget lacinia
                fringilla. Sed sed felis justo. Nunc sodales elit in laoreet
                aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus
                nisi rutrum metus.
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
      </div> */}
    </div>
  </Layout>
)

export default Demo
