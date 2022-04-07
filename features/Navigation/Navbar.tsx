import React from "react";
import {Logo} from "../../components";
import Link from "next/link";
import {v4} from "uuid";
import {useRouter} from "next/router";
import {links} from "./data";
import {BiMoon, BiSun} from "react-icons/bi";
import {useRecoilState} from "recoil";
import {darkModeState} from "../../states";

export const Navbar: React.FC = () => {
    const router = useRouter();
    const [active, setActive] = React.useState("/");
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    function toggleDarkMode() {
        setDarkMode((prev) => !prev);
    }

    React.useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    return (
        <header
            className="z-[50] fixed top-0 left-0 right-0 bg-white bg-opacity-95 px-4 flex justify-center items-center h-[60px]"
            style={{borderTop: "5px solid #0077ff"}}
        >
            <div className="w-container w-full flex justify-between items-center">
                <Logo height={40} width={40} />
                <div className="flex flex-row justify-center items-center gap-4">
                    <div className="hidden lg:flex flex-row justify-center items-center gap-4">
                        {links.map((link) => (
                            <Link key={v4()} href={link.path}>
                                <a
                                    className={`font-primary p-1 hover:border-b-2 border-secondary ${
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
                        className="flex justify-center items-center text-2xl p-1 bg-gray-200 rounded-full"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <BiSun /> : <BiMoon />}
                    </button>
                </div>
            </div>
        </header>
    );
};
