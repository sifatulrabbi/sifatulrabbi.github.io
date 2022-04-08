import {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {me} from "../assets/images";
import {Head, SkillsSection} from "../components";
import {
    SiLinkedin,
    SiGmail,
    SiGithub,
    SiUpwork,
    SiFiverr,
} from "react-icons/si";
import {AiOutlineFilePdf} from "react-icons/ai";
import {BiMessageSquareDetail} from "react-icons/bi";
import {WorkSection} from "../features";
import {
    databaseData,
    frameworksData,
    languagesData,
    softSkills,
    toolsData,
} from "../assets/data";

const Resume: NextPage = () => {
    return (
        <>
            <Head title="Resume" />
            <section className="mt-[60px] gap-6 theme-styles">
                <div className="flex flex-row flex-wrap justify-start items-end gap-8">
                    {/* image with fixed height and width */}
                    <div className="flex border-[1px] rounded-md">
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
                        <h2 className="mb-2">Md Sifatul Islam Rabbi</h2>
                        <p>
                            <i>Full Stack Developer</i>
                        </p>

                        {/* contact links */}
                        <div className="w-full flex flex-row justify-start items-center text-xl gap-4 mt-4">
                            <Link href="https://github.com/sifatulrabbi">
                                <a target="_blank">
                                    <SiGithub />
                                </a>
                            </Link>
                            <Link href="mailto:mdsifatulislam.rabbi@gmail.com">
                                <a target="_blank">
                                    <SiGmail />
                                </a>
                            </Link>
                            <Link href="https://linkedin.com/in/temujins">
                                <a target="_blank">
                                    <SiLinkedin />
                                </a>
                            </Link>
                            <Link href="#">
                                <a target="_blank">
                                    <SiUpwork className="text-2xl " />
                                </a>
                            </Link>
                            <Link href="https://www.fiverr.com/temujins">
                                <a target="_blank">
                                    <SiFiverr className="text-2xl " />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* about me section */}
                <div>
                    <h3 className="mb-2">A bit about me</h3>
                    <p className="text-sm leading-6">
                        In an online forum, I saw how to show text in the
                        browser console. That idea and the process caught my
                        interest, and I had started learning about web
                        development and its fundamentals. Solving problems and
                        struggling to learn something new every day motivates me
                        more than anything. I want to work with a team to learn
                        and build more applications to solve cloud-computing
                        problems.
                    </p>
                </div>

                {/* work experience section */}
                <div>
                    <h3 className="mb-2">Works</h3>
                    <WorkSection />
                    <Link href="/projects">
                        <a className="block w-max btn-primary mt-4">
                            See personal projects
                        </a>
                    </Link>
                </div>

                {/* Tech skills section */}
                <div className="flex flex-col gap-4">
                    <h3 className="mb-0">Skills</h3>
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
                            Tools
                        </span>
                        <SkillsSection data={toolsData} />
                    </div>
                    <div>
                        <span className="block mb-2 font-medium font-primary text-black dark:text-white">
                            Soft skills
                        </span>
                        <SkillsSection data={softSkills} />
                    </div>
                </div>

                {/* education section */}
                <div>
                    <h3 className="mb-2">Education</h3>
                    <div className="p-4 border-[1px] rounded-md">
                        <h4 className="font-medium font-primary mb-2">
                            B.Sc in Psychology
                            <br />
                            <i className="text-base">
                                Dhaka College, Dhaka, Bangladesh
                            </i>
                        </h4>
                        <p className="text-sm">
                            <strong>Start: </strong>
                            01 January, 2020
                            <br />
                            <strong>End: </strong>
                            2025 {"(expected)"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    <Link href="https://drive.google.com/drive/folders/1qsKxVt3KroW4zP9RyvKCdgKqUiEaJUTz">
                        <a className="btn-primary flex items-center gap-2">
                            Get PDF <AiOutlineFilePdf />
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
