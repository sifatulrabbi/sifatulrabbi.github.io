import type { NextPage } from "next";
import { Head } from "../components";
import { FeaturedProjectsView, ProjectsView } from "../modules";
import CurrentPersonalProject from "../modules/CurrentPersonalProject";

interface Props {
    message: string;
}

const MyWorks: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title="My Works" />
            <CurrentPersonalProject className="mt-[60px]" />
            <section className="flex flex-col gap-8 theme-styles">
                <FeaturedProjectsView className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.9s_forwards]" />
                <ProjectsView className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.1s_forwards]" />
            </section>
        </>
    );
};

export default MyWorks;
