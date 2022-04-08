import React from "react";
import {v4} from "uuid";
import {links} from "./data";
import Link from "next/link";
import {
    BiHomeAlt,
    BiMessageSquareDetail,
    BiReceipt,
    BiArchive,
} from "react-icons/bi";
import {useNavbar} from "../../hooks";

interface BtnProps {
    name: string;
    active: boolean;
}

function Icon({name}: BtnProps) {
    return name === "Home" ? (
        <BiHomeAlt />
    ) : name === "Projects" ? (
        <BiArchive />
    ) : name === "Contact" ? (
        <BiMessageSquareDetail />
    ) : name === "Resume" ? (
        <BiReceipt />
    ) : (
        <span />
    );
}

export const MobileBar: React.FC = () => {
    const {darkMode, active} = useNavbar();

    return (
        <nav
            className={`z-50 fixed lg:hidden bottom-0 right-0 left-0 h-[60px] flex ${
                darkMode ? "dark" : "light"
            }`}
        >
            <div className="w-container flex flex-row justify-between items-center px-6 theme-styles bg-white dark:bg-slate-700 bg-opacity-95 dark:opacity-95">
                {links.map((link) => (
                    <Link key={v4()} href={link.path}>
                        <a
                            className={`flex flex-col justify-center items-center p-2 text-2xl ${
                                active === link.path ? "text-primary" : ""
                            }`}
                        >
                            <Icon
                                name={link.name}
                                active={active === link.path}
                            />
                            <span className="text-[10px] leading-4 font-primary">
                                {link.name}
                            </span>
                        </a>
                    </Link>
                ))}
            </div>
        </nav>
    );
};
