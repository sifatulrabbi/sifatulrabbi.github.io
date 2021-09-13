import React from 'react';
import Button from '../Button/Button';

const ProjectCard = ({ img, title, desc, links }) => {
  return (
    <div className="projectCard">
      <img className="projectCard_img" src={img} alt="project" />
      <div className="projectCard_content">
        <h3 className="projectCard_content_title">{title}</h3>
        <p className="projectCard_content_desc">{desc}</p>
        <div className="projectCard_content_actions">
          {links && links.github && <Button text label="Github" />}
          {links && links.live && <Button text label="Live site" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
