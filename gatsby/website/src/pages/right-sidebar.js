import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'
import pic06 from '../assets/images/pic06.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Right Sidebar - Landed by HTML5 UP</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Right Sidebar</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-8 col-12-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={pic06} alt="" />
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
                  <img src={pic07} alt="" />
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
        </div>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
