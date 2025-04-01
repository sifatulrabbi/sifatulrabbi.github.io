import React from "react";

const LogoBtn: React.FC<{ size?: number }> = ({ size = 50 }) => {
    const onCLick = () => {
        if (window.location.pathname === "/") {
            window.location.reload();
        } else {
            window.location.href = "/";
        }
    };

    return (
        <button onClick={onCLick}>
            <img
                src="/me.jpg"
                alt="Sifatul Rabbi"
                height={size}
                width={size}
                className="rounded-full"
            />
        </button>
    );
};

export default LogoBtn;
