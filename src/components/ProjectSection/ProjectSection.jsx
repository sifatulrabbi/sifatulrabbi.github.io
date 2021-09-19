import React from 'react';
import './projectSection.scss';
import SmallCard from '../SmallCard/SmallCard';
import { categories } from './data';

const ProjectSection = () => {
    return (
        <section id="projects" className="projectSection">
            <div className="projectSection_projectCat">
                <h5 className="caption">My Projects</h5>
                <h2 className="title">
                    Lorem ipsum dolor <span className="colored">consectetur</span> elit
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    consequuntur tempore cumque iusto recusandae saepe
                </p>
                <div className="projectSection_projectCatCards">
                    {categories.map((cat, index) => (
                        <SmallCard
                            key={cat.id}
                            title={cat.title}
                            text={cat.desc}
                            icon={cat.icon}
                            active={index === 1}
                        />
                    ))}
                </div>
            </div>
            <div className="projectSection_projects"></div>
        </section>
    );
};

export default ProjectSection;
