
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
          <a href={linkedin} className="icon brands alt fa-linkedin-in" target="_blank">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={github} className="icon brands alt fa-github" target="_blank">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamMember;
