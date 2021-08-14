import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'

const Elements = props => (
  <Layout>
    <Helmet>
      <title>Elements - Landed by HTML5 UP</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Elements</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>

        <section>
          <h3>Text</h3>
          <p>
            This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
            <i>italic</i> and this is <em>emphasized</em>. This is{' '}
            <sup>superscript</sup> text and this is <sub>subscript</sub> text.
            This is <u>underlined</u> and this is code: <code>for (;;) </code>.
            Finally, <a href="#">this is a link</a>.
          </p>

          <hr />

          <header>
            <h3>Heading with a Subtitle</h3>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <header>
            <h4>Heading with a Subtitle</h4>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>

          <hr />

          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>

          <hr />

          <h4>Blockquote</h4>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.
          </blockquote>

          <h4>Preformatted</h4>
          <pre>
            <code>
              i = 0; print 'It took ' + 5 + ' iterations to sort the deck.';
            </code>
          </pre>
        </section>

        <section>
          <h3>Lists</h3>
          <div className="row">
            <div className="col-6 col-12-xsmall">
              <h4>Unordered</h4>
              <ul>
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Sagittis adipiscing lorem eleifend.</li>
                <li>Felis enim feugiat dolore viverra.</li>
              </ul>

              <h4>Alternate</h4>
              <ul className="alt">
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Sagittis adipiscing lorem eleifend.</li>
                <li>Felis enim feugiat dolore viverra.</li>
                <li>Lobortis adipiscing condimentum lorem.</li>
                <li>Integer eleifend erat sed accumsan.</li>
              </ul>
            </div>
            <div className="col-6 col-12-xsmall">
              <h4>Ordered</h4>
              <ol>
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Etiam vel felis at lorem sed viverra.</li>
                <li>Felis enim feugiat dolore viverra.</li>
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Etiam vel felis at lorem sed viverra.</li>
                <li>Felis enim feugiat dolore viverra.</li>
              </ol>

              <h4>Icons</h4>
              <ul className="icons">
                <li>
                  <a href="#" className="icon brands fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-github">
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-dribbble">
                    <span className="label">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-tumblr">
                    <span className="label">Tumblr</span>
                  </a>
                </li>
              </ul>
              <ul className="icons">
                <li>
                  <a href="#" className="icon brands alt fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-github">
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-dribbble">
                    <span className="label">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-tumblr">
                    <span className="label">Tumblr</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h4>Actions</h4>
          <ul className="actions">
            <li>
              <a href="#" className="button primary">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
          <ul className="actions small">
            <li>
              <a href="#" className="button primary small">
                Small
              </a>
            </li>
            <li>
              <a href="#" className="button small">
                Small
              </a>
            </li>
          </ul>
          <div className="row">
            <div className="col-3 col-6-medium col-12-xsmall">
              <ul className="actions stacked">
                <li>
                  <a href="#" className="button primary">
                    Default
                  </a>
                </li>
                <li>
                  <a href="#" className="button">
                    Default
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 col-6-medium col-12-xsmall">
              <ul className="actions stacked">
                <li>
                  <a href="#" className="button primary small">
                    Small
                  </a>
                </li>
                <li>
                  <a href="#" className="button small">
                    Small
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 col-6-medium col-12-xsmall">
              <ul className="actions stacked">
                <li>
                  <a href="#" className="button primary fit">
                    Default
                  </a>
                </li>
                <li>
                  <a href="#" className="button fit">
                    Default
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 col-6-medium col-12-xsmall">
              <ul className="actions stacked">
                <li>
                  <a href="#" className="button primary small fit">
                    Small
                  </a>
                </li>
                <li>
                  <a href="#" className="button small fit">
                    Small
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3>Table</h3>
          <h4>Default</h4>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td> Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 4</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 5</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <h4>Alternate</h4>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td> Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 4</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 5</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <section>
          <h3>Buttons</h3>
          <ul className="actions">
            <li>
              <a href="#" className="button primary">
                Primary
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#" className="button primary large">
                Large
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button small">
                Default
              </a>
            </li>
          </ul>
          <div className="row">
            <div className="col-6 col-12-xsmall">
              <ul className="actions fit">
                <li>
                  <a href="#" className="button primary fit">
                    Fit
                  </a>
                </li>
                <li>
                  <a href="#" className="button fit">
                    Fit
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-12-xsmall">
              <ul className="actions fit small">
                <li>
                  <a href="#" className="button primary fit small">
                    Fit + Small
                  </a>
                </li>
                <li>
                  <a href="#" className="button fit small">
                    Fit + Small
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="actions">
            <li>
              <a href="#" className="button primary icon solid fa-download">
                Icon
              </a>
            </li>
            <li>
              <a href="#" className="button icon solid fa-download">
                Icon
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <span className="button primary disabled">Primary</span>
            </li>
            <li>
              <span className="button disabled">Default</span>
            </li>
          </ul>
        </section>

        <section>
          <h3>Form</h3>
          <form method="post" action="#">
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
                <select name="category" id="category">
                  <option value="">- Category -</option>
                  <option value="1">Manufacturing</option>
                  <option value="1">Shipping</option>
                  <option value="1">Administration</option>
                  <option value="1">Human Resources</option>
                </select>
              </div>
              <div className="col-4 col-12-medium">
                <input
                  type="radio"
                  id="priority-low"
                  name="priority"
                  defaultChecked
                />
                <label htmlFor="priority-low">Low Priority</label>
              </div>
              <div className="col-4 col-12-medium">
                <input type="radio" id="priority-normal" name="priority" />
                <label htmlFor="priority-normal">Normal Priority</label>
              </div>
              <div className="col-4 col-12-medium">
                <input type="radio" id="priority-high" name="priority" />
                <label htmlFor="priority-high">High Priority</label>
              </div>
              <div className="col-6 col-12-medium">
                <input type="checkbox" id="copy" name="copy" />
                <label htmlFor="copy">Email me a copy of this message</label>
              </div>
              <div className="col-6 col-12-medium">
                <input type="checkbox" id="human" name="human" defaultChecked />
                <label htmlFor="human">I am a human and not a robot</label>
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

        <section>
          <h3>Image</h3>
          <h4>Fit</h4>
          <div className="box alt">
            <div className="row gtr-50 gtr-uniform">
              <div className="col-12">
                <span className="image fit">
                  <img src={pic07} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
            </div>
          </div>

          <h4>Left &amp; Right</h4>
          <p>
            <span className="image left">
              <img src={pic08} alt="" />
            </span>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Cras aliquet accumsan curae accumsan arcu amet egestas
            placerat odio morbi mi adipiscing col morbi felis faucibus in
            gravida sollicitudin interdum commodo. Ante aliquam vis iaculis
            accumsan lorem ipsum dolor sit amet nullam. Cras aliquet accumsan
            curae accumsan arcu amet egestas placerat odio morbi mi adipiscing
            col morbi felis faucibus in gravida sollicitudin interdum commodo.
            Ante aliquam vis iaculis accumsan lorem ipsum dolor sit amet nullam.
          </p>
          <p>
            <span className="image right">
              <img src={pic08} alt="" />
            </span>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Cras aliquet accumsan curae accumsan arcu amet egestas
            placerat odio morbi mi adipiscing col morbi felis faucibus in
            gravida sollicitudin interdum commodo. Ante aliquam vis iaculis
            accumsan lorem ipsum dolor sit amet nullam. Cras aliquet accumsan
            curae accumsan arcu amet egestas placerat odio morbi mi adipiscing
            col morbi felis faucibus in gravida sollicitudin interdum commodo.
            Ante aliquam vis iaculis accumsan lorem ipsum dolor sit amet nullam.
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default Elements
