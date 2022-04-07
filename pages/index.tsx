import type {NextPage, NextPageContext} from "next";
import {Head, FeaturedProjectCard} from "../components";
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

const Home: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title={"Home"} />
            {/* hero section */}
            <section className="justify-start mt-[60px] pt-[8vh]">
                <h1>Hi, I am Sifatul Rabbi</h1>
                <p className="text-sm leading-6">
                    Currently working as a freelancing Full Stack Developer. I
                    have passion for software development and want to learn
                    more.
                </p>
                <div className="flex gap-4 mt-8">
                    <Link href="/">
                        <a className="flex justify-center items-center btn-primary">
                            See my works
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="flex justify-center items-center btn-secondary">
                            Learn about me
                        </a>
                    </Link>
                </div>
            </section>

            {/* fav tech-stack */}
            <section className="mt-[5vh]">
                <h4>Current favorite tech-stack</h4>
                <div className="flex justify-start items-center gap-4">
                    <SiTypescript className="text-4xl text-black" />
                    <SiNextdotjs className="text-4xl text-black" />
                    <SiNodedotjs className="text-4xl text-black" />
                    <SiExpress className="text-4xl text-black" />
                    <SiPostgresql className="text-4xl text-black" />
                </div>
            </section>

            {/* featured projects section */}
            <section className="flex flex-row flex-wrap gap-4 mt-[5vh]">
                <FeaturedProjectCard
                    title="Full Stack Blogging Website"
                    img={fullstackBlogBanner}
                    link="/"
                />
                <FeaturedProjectCard
                    title="ToDo Application"
                    img={todoAppBanner}
                    link="/"
                />
                <Link href="/">
                    <a className="btn-alt w-full text-center">
                        See More Projects
                    </a>
                </Link>
            </section>
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {message: "Hello Next.js"},
    };
}

export default Home;
