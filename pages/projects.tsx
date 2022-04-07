import type {NextPage, NextPageContext} from "next";
import {Head, FeaturedProjectCard, ProjectCard} from "../components";
import {
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiNextdotjs,
} from "react-icons/si";
import {fullstackBlogBanner, todoAppBanner} from "../assets/images";
import Link from "next/link";

interface Props {
    message: string;
}

const Projects: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title="Projects" />
            <section className="mt-[60px]">
                <h2 className="text-2xl font-bold font-primary text-black mb-4">
                    Projects
                </h2>
                <p className="text-sm">
                    Here are my previous works, freelancing experiences, and
                    personal projects
                </p>
            </section>
            <section>
                <h3 className="text-xl font-medium font-primary text-black">
                    Featured projects
                </h3>
                <div>
                    <ProjectCard
                        title="Full Stack Blogging Website"
                        img={fullstackBlogBanner}
                        summary="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used."
                        icons={[
                            SiTypescript,
                            SiNodedotjs,
                            SiNextdotjs,
                            SiExpress,
                        ]}
                        link="/"
                    />
                </div>
            </section>
        </>
    );
};

export default Projects;
