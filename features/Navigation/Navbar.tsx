import React from "react";
import {Logo} from "../../components";
import Link from "next/link";
import {v4} from "uuid";
import {links} from "./data";
import {BiMoon, BiSun} from "react-icons/bi";
import {useNavbar} from "../../hooks";

export const Navbar: React.FC = () => {
    const {active, toggleDarkMode, darkMode} = useNavbar();

    return (
        <header
            className={`z-[50] fixed top-0 left-0 right-0 bg-white dark:bg-slate-700 bg-opacity-95 dark:opacity-95 px-6 flex justify-center items-center h-[60px] -translate-y-full animate-[navbarAnim_500ms_ease_forwards] ${
                darkMode ? "dark" : "light"
            }`}
            style={{borderTop: "5px solid #0077ff"}}
        >
            <div className="w-container w-full flex justify-between items-center theme-styles bg-transparent dark:bg-transparent">
                <Logo height={40} width={40} />
                <div className="flex flex-row justify-center items-center gap-4">
                    <div className="hidden lg:flex flex-row justify-center items-center gap-4">
                        {links.map((link) => (
                            <Link key={v4()} href={link.path}>
                                <a
                                    className={`font-primary p-1 hover:border-b-2 theme-styles bg-transparent dark:bg-transparent ${
                                        active === link.path
                                            ? "font-bold"
                                            : "font-normal"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <button
                        className="flex justify-center items-center text-2xl p-1 bg-gray-200 dark:bg-gray-600 rounded-full"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <BiSun /> : <BiMoon />}
                    </button>
                </div>
            </div>
        </header>
    );
};
