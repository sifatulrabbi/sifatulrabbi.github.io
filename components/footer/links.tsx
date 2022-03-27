import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaPhone,
} from "react-icons/fa";
import Link from "next/link";

export const Links: React.FC = () => {
    return (
        <div className="flex flex-col flex-wrap gap-4 justify-start items-start p-6 mt-12 lg:mt-0 min-w-[250px]">
            <Link href="/">
                <a className="text-black flex gap-2 items-center font-primary transition-all duration-[150ms] ease-in hover:gap-4">
                    <FaGithub className="text-2xl" />
                    Github
                </a>
            </Link>
            <Link href="/">
                <a className="text-black flex gap-2 items-center font-primary transition-all duration-[150ms] ease-in hover:gap-4">
                    <FaLinkedin className="text-2xl" />
                    Linked In
                </a>
            </Link>
            <Link href="/">
                <a className="text-black flex gap-2 items-center font-primary transition-all duration-[150ms] ease-in hover:gap-4">
                    <FaTwitter className="text-2xl" />
                    Twitter
                </a>
            </Link>
            <Link href="/">
                <a className="text-black flex gap-2 items-center font-primary transition-all duration-[150ms] ease-in hover:gap-4">
                    <FaFacebook className="text-2xl" />
                    Facebook
                </a>
            </Link>
            <Link href="/">
                <a className="text-black flex gap-2 items-center font-primary transition-all duration-[150ms] ease-in hover:gap-4">
                    <FaPhone className="text-2xl" />
                    +88 01882970400
                </a>
            </Link>
        </div>
    );
};
