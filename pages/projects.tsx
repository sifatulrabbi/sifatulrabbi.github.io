import type {NextPage} from "next";
import {Head} from "../components";
import {FeaturedProjectsView, ProjectsView} from "../features";

interface Props {
    message: string;
}

const Projects: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title="Projects" />
            <section className="mt-[60px] theme-styles">
                <h2 className="text-2xl font-bold font-primary text-black mb-4">
                    Projects
                </h2>
                <p className="text-sm">
                    Here are my previous works, freelancing experiences, and
                    personal projects
                </p>
            </section>
            <section className="flex flex-col gap-8 theme-styles">
                <FeaturedProjectsView />
                <ProjectsView />
            </section>
        </>
    );
};

export default Projects;
