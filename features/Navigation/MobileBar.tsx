import React from "react";
import {v4} from "uuid";
import {links} from "./data";
import {useRouter} from "next/router";
import Link from "next/link";
import {useRecoilState} from "recoil";
import {activePathState} from "../../states";
import {
    BiHomeAlt,
    BiMessageSquareDetail,
    BiReceipt,
    BiArchive,
} from "react-icons/bi";

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
    const [active, setActive] = useRecoilState(activePathState);
    const router = useRouter();

    React.useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname, setActive]);

    return (
        <nav className="z-50 fixed lg:hidden bottom-0 right-0 left-0 h-[60px] flex">
            <div className="w-container flex flex-row justify-around items-center px-4 bg-white bg-opacity-95">
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
