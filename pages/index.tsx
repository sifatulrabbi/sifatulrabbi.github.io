import type { NextPage, NextPageContext } from "next";
import { Head } from "../components";
import { BiMailSend, BiUser } from "react-icons/bi";
import Link from "next/link";
import { FeaturedProjectsView } from "../modules";
import Image from "next/image";
import { me } from "../assets/images";
import CurrentPersonalProject from "../modules/CurrentPersonalProject";

interface Props {
    bio: string;
}

const Home: NextPage<Props> = ({ bio }) => {
    return (
        <>
            <Head title="Home" />
            {/* hero section */}
            <section className="justify-start mt-[60px] pt-[8vh] lg:grid lg:grid-cols-[60%_40%] theme-styles">
                <div>
                    <div className="mb-4">
                        <h4 className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_forwards]">
                            Hi, I am
                        </h4>
                        <h1 className="font-primary opacity-0 translate-y-4 animate-[textSlideUp_0.55s_ease_forwards]">
                            Md Sifatul Islam Rabbi
                        </h1>
                        <span
                            className="block mt-4 w-max font-monospace relative z-0 hero-text theme-styles"
                            aria-label="full stack developer"
                        >
                            full_stack_developer()
                        </span>
                    </div>
                    <p className="text-sm leading-6 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.2s_forwards]">
                        {bio}
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Link href="/about">
                            <a className="flex justify-center items-center btn-primary gap-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.4s_forwards]">
                                About Me <BiUser />
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="flex justify-center items-center btn-secondary gap-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.5s_forwards]">
                                Contact Me <BiMailSend />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full hidden justify-end lg:flex">
                    <div className="max-w-[200px] max-h-[200px] min-h-[100px] min-w-[100px] h-[30vw] w-[30vw] opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.5s_forwards] rounded-full overflow-hidden border border-slate-600 dark:border-slate-300 p-1">
                        <Image
                            src={me}
                            alt="Md Sifatul Islam Rabbi"
                            layout="intrinsic"
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
            </section>

            <CurrentPersonalProject />

            {/* featured projects section */}
            <section className="flex flex-col gap-6 mt-[5vh] theme-styles theme-styles opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.7s_forwards]">
                <FeaturedProjectsView />
                <Link href="/works">
                    <a className="btn-alt w-full max-w-xs mx-auto text-center">
                        All Works
                    </a>
                </Link>
            </section>
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {
            bio: "I am an experienced full-stack developer proficient in building robust web and server applications.",
        },
    };
}

export default Home;
