import type {NextPage, NextPageContext} from "next";
import {Head} from "../components";
import {
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiNextdotjs,
} from "react-icons/si";
import {BiBriefcase, BiUser} from "react-icons/bi";
import Link from "next/link";
import {FeaturedProjectsView} from "../features";
import Image from "next/image";
import {introImg} from "../assets/images";

interface Props {
    bio: string;
}

const Home: NextPage<Props> = ({bio}) => {
    return (
        <>
            <Head title="Home" />
            {/* hero section */}
            <section className="justify-start mt-[60px] pt-[8vh] lg:grid lg:grid-cols-2 theme-styles">
                <div>
                    <div className="mb-4">
                        <h1 className="w-max font-primary opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_forwards]">
                            Hi, I am Sifatul Rabbi
                        </h1>
                        <span className="block mt-4 w-max font-monospace relative z-0 hero-text theme-styles">
                            Full stack developer
                        </span>
                    </div>
                    <p className="text-sm leading-6 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.2s_forwards]">
                        {bio}
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Link href="/projects">
                            <a className="flex justify-center items-center btn-primary gap-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.4s_forwards]">
                                My projects <BiBriefcase />
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a className="flex justify-center items-center btn-secondary gap-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.5s_forwards]">
                                About me <BiUser />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full hidden justify-end lg:flex">
                    <div className="max-w-[250px] max-h-[250px] min-h-[100px] min-w-[100px] h-[30vw] w-[30vw] opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_3.7s_forwards]">
                        <Image
                            src={introImg}
                            alt="Md Sifatul Islam Rabbi"
                            layout="intrinsic"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* fav tech-stack */}
            <section className="mt-[5vh] theme-styles">
                <h3 className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.7s_forwards]">
                    Current favorite tech-stack
                </h3>
                <div className="flex justify-start items-center gap-4">
                    <SiTypescript className="text-4xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.7s_forwards]" />
                    <SiNextdotjs className="text-4xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.75s_forwards]" />
                    <SiNodedotjs className="text-4xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.8s_forwards]" />
                    <SiExpress className="text-4xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.85s_forwards]" />
                    <SiPostgresql className="text-4xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.9s_forwards]" />
                </div>
            </section>

            {/* featured projects section */}
            <section className="flex flex-col gap-6 mt-[5vh] theme-styles theme-styles opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.7s_forwards]">
                <FeaturedProjectsView />
                <Link href="/projects">
                    <a className="btn-alt w-full max-w-xs mx-auto text-center">
                        See more projects
                    </a>
                </Link>
            </section>
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {
            bio: "I provide web development services to businesses and individuals to grow their business on the web. I am skilled in both front-end and back-end development. Let's work together and build your desired web services.",
        },
    };
}

export default Home;
