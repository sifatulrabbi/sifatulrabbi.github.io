import React from 'react';
import './projectCard.scss';
import { VscGlobe } from 'react-icons/vsc';
import { AiOutlineGithub } from 'react-icons/ai';

const ProjectCard = ({ img, links, title, desc }) => {
    const openGithub = () => {
        links.github && window.open(links.github, '_black');
    };

    const openLiveSite = () => {
        links.live && window.open(links.live, '_black');
    };

    return (
        <div className="projectCard" /*style={{ backgroundImage: `url(${img})` }}*/>
            <div>
                <h3 className="projectCard_title">{title}</h3>
                <p
                    className="projectCard_desc"
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
            </div>
            <div className="projectCard_action">
                <button className="projectCard_action_icon" onClick={openLiveSite}>
                    <VscGlobe />
                </button>
                <button className="projectCard_action_icon" onClick={openGithub}>
                    <AiOutlineGithub />
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
