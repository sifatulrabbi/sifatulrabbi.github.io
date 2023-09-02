import Link from "next/link";
import React from "react";
import {
    SiGithub,
    SiFacebook,
    SiTwitter,
    SiLinkedin,
    SiGmail,
} from "react-icons/si";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full p-4 mt-[5vh] mb-[60px] lg:mb-0 theme-styles">
            <section className="border-t-[1px] flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center items-center gap-4">
                    <Link href="https://github.com/sifatulrabbi">
                        <a target="_blank">
                            <SiGithub className="text-2xl lg:hover:text-primary" />
                        </a>
                    </Link>
                    <Link href="https://linkedin.com/in/sfiatulrabbi">
                        <a target="_blank">
                            <SiLinkedin className="text-2xl lg:hover:text-primary" />
                        </a>
                    </Link>
                    <Link href="https://twitter.com/sifatul_rabbi">
                        <a target="_blank">
                            <SiTwitter className="text-2xl lg:hover:text-primary" />
                        </a>
                    </Link>
                    <Link href="mailto:sifatul@sifatul.com">
                        <a target="_blank">
                            <SiGmail className="text-2xl lg:hover:text-primary" />
                        </a>
                    </Link>
                </div>
                <span className="font-primary text-sm text-center">
                    &copy; 2022 Md Sifatul Islam Rabbi
                </span>
            </section>
        </footer>
    );
};
