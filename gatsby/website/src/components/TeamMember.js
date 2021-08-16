
import React from 'react';
import Linkedin from '../assets/images/icons/ELUCID-icons-linkedin.svg';
import Github from '../assets/images/icons/ELUCID-icons-github.svg';

/* 
  Reusable component to generate each team member
*/

const TeamMember = (props) => {
  const { src, bio, name, linkedin, github } = props;

  return (
    <div className="profiles">
      <img src={src} alt="Elucid Team"></img>
      <p className="team-member-name">{name}</p>
      <p>{bio}</p>
      <span className="social-icons">
        <a href={linkedin} target="_blank">
          <img src={Linkedin}></img>
        </a>
        <a href={github} target="_blank">
          <img src={Github}></img>
        </a>
      </span>
    </div>
  );
};

export default TeamMember;
