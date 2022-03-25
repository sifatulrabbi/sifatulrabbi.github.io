import React from "react";
import Link from "next/link";
import {siteLinks, profileLinks} from "../../assets/data";
import {v4} from "uuid";
import {logo} from "../../assets/images";
import Img from "next/image";

interface Props {
    show: boolean;
}

export const NavMenu: React.FC<Props> = ({show}) => {
    return (
        <div
            className={`fixed flex top-0 bottom-0 right-0 left-0 bg-white transition-transform ease-in-out duration-300 z-40 ${
                show ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-full bg-black md:w-1/2 lg:mr-12 w-12" />
            <div className="flex flex-col p-6">
                <Link href="/">
                    <a>
                        <Img
                            src={logo}
                            alt="Sifatul Rabbi logo"
                            height={50}
                            width={46}
                            layout="fixed"
                        />
                    </a>
                </Link>
                <div className="w-full mb-16" />
                {siteLinks.map((link) => (
                    <Link key={v4()} href={link.path}>
                        <a
                            className={`block font-primary font-bold text-3xl pb-4 hover:text-blue hover:translate-x-1 transition-all ease-out duration-200`}
                        >
                            {link.name}
                        </a>
                    </Link>
                ))}
                <div className="w-auto mt-10" />
                {profileLinks.map((link) => (
                    <Link key={v4()} href={link.path}>
                        <a
                            className={`
                            block font-secondary 
                            text-dark pb-3 hover:text-blue hover:translate-x-1 transition-all ease-out duration-200`}
                        >
                            {link.name}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};