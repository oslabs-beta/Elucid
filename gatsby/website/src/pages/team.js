import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import TeamMember from '../components/TeamMember'
import pic07 from '../assets/images/pic07.jpg'
import Khayal from '../assets/images/team_photos/Khayal.jpg'
import Vivian from '../assets/images/team_photos/Vivian.jpg'
import Spencer from '../assets/images/team_photos/Spencer.jpg'
import Gary from '../assets/images/team_photos/Gary.jpg'


const khayal = {
  name: 'Khayal Alasgarov',
  src: Khayal,
  bio:
    'Khayal is a full-stack software engineer specializing in React, Express, and relational databases, with a passion for code dependability, optimization, and test driven development. His devotion to open-source projects, and strong interest in GraphQL, makes him an ideal candidate for Elucid. Outside of coding, Khayal enjoys travelling, drawing abstract art, and learning foreign languages.',
  linkedin: 'https://www.linkedin.com/in/khayal-alasgaroff/',
  github: 'https://github.com/Alasgaroff',
};

const vivian = {
  name: 'Vivian Wu',
  src: Vivian,
  bio:
    'Khayal is a full-stack software engineer specializing in React, Express, and relational databases, with a passion for code dependability, optimization, and test driven development. His devotion to open-source projects, and strong interest in GraphQL, makes him an ideal candidate for Elucid. Outside of coding, Khayal enjoys travelling, drawing abstract art, and learning foreign languages.',
  linkedin: 'https://www.linkedin.com/in/khayal-alasgaroff/',
  github: 'https://github.com/Alasgaroff',
};

const spencer = {
  name: 'Spencer Szu',
  src: Spencer,
  bio:
    'Khayal is a full-stack software engineer specializing in React, Express, and relational databases, with a passion for code dependability, optimization, and test driven development. His devotion to open-source projects, and strong interest in GraphQL, makes him an ideal candidate for Elucid. Outside of coding, Khayal enjoys travelling, drawing abstract art, and learning foreign languages.',
  linkedin: 'https://www.linkedin.com/in/khayal-alasgaroff/',
  github: 'https://github.com/Alasgaroff',
};

const gary = {
  name: 'Gary Lacobucci',
  src: Gary,
  bio:
    'Khayal is a full-stack software engineer specializing in React, Express, and relational databases, with a passion for code dependability, optimization, and test driven development. His devotion to open-source projects, and strong interest in GraphQL, makes him an ideal candidate for Elucid. Outside of coding, Khayal enjoys travelling, drawing abstract art, and learning foreign languages.',
  linkedin: 'https://www.linkedin.com/in/khayal-alasgaroff/',
  github: 'https://github.com/Alasgaroff',
};


const Team = props => (
  <Layout>
    <Helmet>
      <title>Team - Landed by HTML5 UP</title>
      <meta name="description" content="Team Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>TEAM ELUCID</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
          <a href="#" className="image fit">
            <img src={pic07} alt="" />
          </a>
        </header>

        <section id="content">
          <div id="team">
        <TeamMember
          src={khayal.src}
          bio={khayal.bio}
          name={khayal.name}
          linkedin={khayal.linkedin}
          github={khayal.github}
        />
        <TeamMember
          src={vivian.src}
          bio={vivian.bio}
          name={vivian.name}
          linkedin={vivian.linkedin}
          github={vivian.github}
        />
         <TeamMember
          src={spencer.src}
          bio={spencer.bio}
          name={spencer.name}
          linkedin={spencer.linkedin}
          github={spencer.github}
        />
         <TeamMember
          src={gary.src}
          bio={gary.bio}
          name={gary.name}
          linkedin={gary.linkedin}
          github={gary.github}
        />
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Team
