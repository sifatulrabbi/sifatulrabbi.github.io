import React, { useEffect } from "react";
import DetailsSection from "@/modules/DetailsSection";
import { useNavigate } from "react-router-dom";

const PortfolioLayout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.setAttribute("data-theme", "dark");
        document.body.style.overflow = "auto";
    }, []);

    return (
        <main className="w-full min-h-max flex flex-col justify-start items-start 2xl:items-center py-6 px-8 lg:pl-[332px] 2xl:pl-8 mt-[50px] gap-12">
            <DetailsSection enterTerminalMode={() => navigate("/terminal")} />
        </main>
    );
};

export default PortfolioLayout;
