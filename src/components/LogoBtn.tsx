import React from "react";
import { Link } from "react-router-dom";

const LogoBtn: React.FC<{ size?: number }> = ({ size = 50 }) => {
    return (
        <Link to="/">
            <img
                src="/me.jpg"
                alt="Sifatul Rabbi"
                height={size}
                width={size}
                className="rounded-full"
            />
        </Link>
    );
};

export default LogoBtn;
