import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { me } from "../assets/images";
import { Head, SkillsSection } from "../components";
import { SiLinkedin, SiGmail, SiGithub, SiGoogledrive } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { WorkSection } from "../modules";
import {
    databaseData,
    frameworksData,
    languagesData,
    skills,
    othersData,
} from "../assets/data";

const Resume: NextPage = () => {
    return (
        <>
            <Head title="About" />
            <section className="mt-[60px] gap-8 theme-styles">
                <div className="flex flex-row flex-wrap justify-start items-end gap-8">
                    {/* image with fixed height and width */}
                    <div className="flex border border-slate-600 dark:border-slate-300 rounded-lg opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.5s_forwards] p-1">
                        <Image
                            src={me}
                            alt="Md Sifatul Islam Rabbi"
                            height={140}
                            width={140}
                            className="border-[1px] rounded-md"
                        />
                    </div>

                    {/* bottom aligned name and designation */}
                    <div className="flex flex-col">
                        <h2 className="mb-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.7s_forwards]">
                            Md Sifatul Islam Rabbi
                        </h2>
                        <p className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.9s_forwards]">
                            <i>Full Stack Developer</i>
                        </p>

                        {/* contact links */}
                        <div className="w-full flex flex-row justify-start items-center text-xl gap-4 mt-4">
                            <Link href="https://github.com/sifatulrabbi">
                                <a
                                    target="_blank"
                                    className="opacity-0 translate-y-4 lg:hover:text-primary animate-[textSlideUp_0.5s_ease_1.1s_forwards]"
                                >
                                    <SiGithub />
                                </a>
                            </Link>
                            <Link href="mailto:sifatul@sifatul.com">
                                <a
                                    target="_blank"
                                    className="opacity-0 translate-y-4 lg:hover:text-primary animate-[textSlideUp_0.5s_ease_1.2s_forwards]"
                                >
                                    <SiGmail />
                                </a>
                            </Link>
                            <Link href="https://linkedin.com/in/sifatulrabbi">
                                <a
                                    target="_blank"
                                    className="opacity-0 translate-y-4 lg:hover:text-primary animate-[textSlideUp_0.5s_ease_1.3s_forwards]"
                                >
                                    <SiLinkedin />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* about me section */}
                <div>
                    <h3 className="mb-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.7s_forwards]">
                        My Goal
                    </h3>
                    <p className="text-sm leading-6 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.9s_forwards]">
                        I am an experienced full-stack developer proficient in
                        building robust web and server applications. My
                        freelance journey provided valuable insights into
                        software development. And with a genuine passion for
                        creating software, I am eager to collaborate remotely
                        within a team, delivering tangible value to your
                        company.
                    </p>
                </div>

                {/* work experience section */}
                <div className="w-full opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_2.1s_forwards]">
                    <h3 className="mb-2">Experiences</h3>
                    <WorkSection />
                    <Link href="/projects">
                        <a className="w-max btn-secondary mt-4">
                            My Projects
                            <BiLinkExternal />
                        </a>
                    </Link>
                </div>

                {/* Tech skills section */}
                <div className="flex flex-col gap-4">
                    <h3 className="mb-0">Skills</h3>
                    <div>
                        <SkillsSection data={skills} />
                    </div>
                    <div>
                        <span className="block mb-2 font-medium font-primary text-black dark:text-white">
                            Programming languages
                        </span>
                        <SkillsSection data={languagesData} />
                    </div>
                    <div>
                        <span className="block mb-2 font-medium font-primary text-black dark:text-white">
                            Frameworks
                        </span>
                        <SkillsSection data={frameworksData} />
                    </div>
                    <div>
                        <span className="block mb-2 font-medium font-primary text-black dark:text-white">
                            Databases
                        </span>
                        <SkillsSection data={databaseData} />
                    </div>
                    <div>
                        <span className="block mb-2 font-medium font-primary text-black dark:text-white">
                            Others
                        </span>
                        <SkillsSection data={othersData} />
                    </div>
                </div>

                {/* education section */}
                <div>
                    <h3 className="mb-4">Education</h3>
                    <h4 className="font-medium font-primary">
                        B.Sc in Psychology
                    </h4>
                    <i className="text-base font-normal">
                        Dhaka College, Dhaka, Bangladesh
                    </i>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    <Link href="https://drive.google.com/file/d/1qDVutyfAVCArOU5QAYwUm1W_F1Yj7Y1x/view?usp=sharing">
                        <a className="btn-primary flex items-center gap-2">
                            Get PDF <FaGoogleDrive />
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="btn-secondary flex items-center gap-2">
                            Contact me
                            <BiMessageSquareDetail />
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Resume;
