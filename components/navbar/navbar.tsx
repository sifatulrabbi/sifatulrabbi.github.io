import React from "react";
import Img from "next/image";
import {logo} from "../../assets/images";
import NavBtn from "./nav-btn";

const Navbar: React.FC = () => {
    return (
        <div className="">
            <Img
                src={logo}
                alt="Md Sifatul Rabbi logo"
                height={50}
                width={46}
            />
            <NavBtn />
        </div>
    );
};

export default Navbar;
