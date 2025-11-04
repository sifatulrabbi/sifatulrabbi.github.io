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
        <main className="w-full min-h-[100vh] flex flex-col justify-start items-start 2xl:items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

            <div
                className={`z-[100] w-full fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-start transition-all duration-500 ease-in-out ${
                    revealUnderneath ? "md:bg-slate-950/70 backdrop-blur-lg" : "bg-transparent"
                }`}
            >
                <HeroSection
                    setRevealUnderneath={setRevealUnderneath}
                    onEnter={() => navigate("/experiences")}
                />
            </div>
        </main>
    );
};

export default HomeLayout;
