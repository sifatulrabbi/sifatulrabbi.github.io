import React from "react";
import {Logo} from "../../components";

export const Navbar: React.FC = () => {
    return (
        <header
            className="z-[50] fixed top-0 left-0 right-0 bg-white bg-opacity-95 px-4 flex justify-between items-center h-[60px]"
            style={{borderTop: "5px solid #0077ff"}}
        >
            <div className="w-container w-full">
                <Logo height={40} width={40} />
            </div>
        </header>
    );
};
