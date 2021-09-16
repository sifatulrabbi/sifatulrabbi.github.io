import React from 'react';
import Title from '../Title/Title';
import ProjectCard from '../ProjectCard/ProjectCard';
import data from './data';

const ProjectSection = () => {
    return (
        <section id="projects" className="projectSection">
            <Title title="My Projects" />
            <div className="projectSection_wrapper">
                {data.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        desc={project.desc}
                        img={project.img}
                        links={project.links}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
