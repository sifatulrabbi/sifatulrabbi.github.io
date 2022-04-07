import type {NextPage, NextPageContext} from "next";
import {Head} from "../components";
import {
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiNextdotjs,
} from "react-icons/si";
import Link from "next/link";
import {FeaturedProjectsView} from "../features";
import Image from "next/image";
import {introImg} from "../assets/images";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title="Home" />
            {/* hero section */}
            <section className="justify-start mt-[60px] pt-[8vh] lg:grid lg:grid-cols-2">
                <div>
                    <h1>Hi, I am Sifatul Rabbi</h1>
                    <p className="text-sm leading-6">
                        Currently working as a freelancing Full Stack Developer.
                        I have passion for software development and want to
                        learn more.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Link href="/projects">
                            <a className="flex justify-center items-center btn-primary">
                                See my works
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="flex justify-center items-center btn-secondary">
                                Learn about me
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full hidden justify-end lg:flex">
                    <div className="max-w-[300px] max-h-[300px] min-h-[100px] min-w-[100px] h-[30vw] w-[30vw]">
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
            <section className="mt-[5vh]">
                <h3>Current favorite tech-stack</h3>
                <div className="flex justify-start items-center gap-4">
                    <SiTypescript className="text-4xl text-black" />
                    <SiNextdotjs className="text-4xl text-black" />
                    <SiNodedotjs className="text-4xl text-black" />
                    <SiExpress className="text-4xl text-black" />
                    <SiPostgresql className="text-4xl text-black" />
                </div>
            </section>

            {/* featured projects section */}
            <section className="flex flex-col gap-6 mt-[5vh]">
                <FeaturedProjectsView />
                <Link href="/projects">
                    <a className="btn-alt w-full max-w-xs mx-auto text-center">
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
