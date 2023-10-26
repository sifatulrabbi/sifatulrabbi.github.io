import type { NextPage } from "next";
import { Head } from "../components";
import { FeaturedProjectsView, ProjectsView } from "../modules";

interface Props {
    message: string;
}

const MyWorks: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title="My Works" />
            <section className="flex flex-col gap-8 theme-styles mt-[60px]">
                <FeaturedProjectsView className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.9s_forwards]" />
                <ProjectsView className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.1s_forwards]" />
            </section>
        </>
    );
};

export default MyWorks;
