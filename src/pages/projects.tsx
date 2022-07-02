import type { NextPage } from "next";
import { Head } from "../components";
import { FeaturedProjectsView, ProjectsView } from "../features";

interface Props {
  message: string;
}

const Projects: NextPage<Props> = ({}) => {
  return (
    <>
      <Head title="Projects" />
      <section className="mt-[60px] theme-styles">
        <h2 className="text-2xl font-bold font-primary text-black mb-4 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.5s_forwards]">
          Projects
        </h2>
        <p className="text-sm opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.7s_forwards]">
          Here are my previous works, freelancing experiences, and personal
          projects
        </p>
      </section>
      <section className="flex flex-col gap-8 theme-styles">
        <FeaturedProjectsView className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.9s_forwards]" />
        <ProjectsView className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.1s_forwards]" />
      </section>
    </>
  );
};

export default Projects;
