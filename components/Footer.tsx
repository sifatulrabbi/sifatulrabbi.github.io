import Link from "next/link";
import React from "react";
import {
    SiGithub,
    SiUpwork,
    SiFiverr,
    SiFacebook,
    SiTwitter,
    SiLinkedin,
} from "react-icons/si";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full p-4 mt-[5vh]">
            <section className="border-t-[1px] border-gray-400 flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <a>
                            <SiGithub className="text-2xl " />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <SiLinkedin className="text-2xl " />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <SiTwitter className="text-2xl " />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <SiFacebook className="text-2xl " />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <SiUpwork className="text-2xl " />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <SiFiverr className="text-2xl " />
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
