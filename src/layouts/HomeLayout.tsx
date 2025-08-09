import React, { useEffect, useState } from "react";
import { HeroSection } from "@/modules";
import { useNavigate } from "react-router-dom";

const HomeLayout: React.FC = () => {
    const [revealUnderneath, setRevealUnderneath] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.setAttribute("data-theme", "dark");
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <main className="w-full min-h-[100vh] flex flex-col justify-start items-start 2xl:items-center">
            <div
                className={`z-[100] w-full fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-start transition-[transform,background-color] duration-500 ease-in-out bg-gray-950 ${
                    revealUnderneath ? "md:bg-gray-950/60" : ""
                } backdrop-blur-sm`}
            >
                <HeroSection
                    setShowHero={() => {}}
                    setTerminalMode={() => {}}
                    setRevealUnderneath={setRevealUnderneath}
                    onEnter={() => navigate("/experiences")}
                />
            </div>
        </main>
    );
};

export default HomeLayout;
