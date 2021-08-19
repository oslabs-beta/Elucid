
import React from 'react';

const TeamMember = (props) => {
  const { src, bio, name, linkedin, github } = props;

  return (
    <div className="profiles">
      <img src={src} alt="Elucid Team"></img>
      <p className="team-member-name">{name}</p>
      <p>{bio}</p>
      <ul className="icons">
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon brands alt fa-linkedin-in" >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer" className="icon brands alt fa-github" >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamMember;
