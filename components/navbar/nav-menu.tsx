import React from "react";
import Link from "next/link";
import {siteLinks, profileLinks} from "../../assets/data";
import {v4} from "uuid";
import {Logo} from "../logo";

interface Props {
    show: boolean;
}

export const NavMenu: React.FC<Props> = ({show}) => {
    return (
        <div
            className={`fixed flex top-0 bottom-0 right-0 left-0 bg-white transition-transform ease-in duration-300 z-40 ${
                show ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-full bg-black md:w-1/2 mr-8 w-[40%] flex justify-center items-center">
                <Logo width={75} height={80} white />
            </div>
            <div className="flex flex-col justify-center items-start pt-12">
                {siteLinks.map((link) => (
                    <Link key={v4()} href={link.path}>
                        <a
                            className={`block font-primary font-bold text-3xl pb-4 hover:translate-x-1 transition-all ease-out duration-200`}
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
                            text-dark pb-3 hover:translate-x-1 transition-all ease-out duration-200`}
                        >
                            {link.name}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};
