import React from "react";
import { FaX } from "react-icons/fa6";

type Props = {
    closeTerminal: () => void;
};

const Navbar: React.FC<Props> = ({ closeTerminal }) => {
    return (
        <nav className="fixed top-0 right-0 left-0 h-[60px] z-[100] flex flex-row items-center justify-between px-4 text-white border-b border-slate-800 bg-slate-900">
            <button>
                <img
                    src="/me.jpg"
                    height="34px"
                    width="34px"
                    className="rounded-full"
                />
            </button>
            <button
                onClick={closeTerminal}
                className="flex p-2 text-sm rounded bg-slate-700 hover:rounded-full"
            >
                <FaX className="text-white" />
            </button>
        </nav>
    );
};

export default Navbar;
