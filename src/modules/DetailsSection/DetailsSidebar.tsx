import React, { useState } from "react";
import { homePageTabs, liveAppUrls } from "@/constants";
import { startCase } from "lodash";
import { FaChevronDown, FaGithub, FaTerminal, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoBtn from "@/components/LogoBtn";

const DetailsSidebar: React.FC<{
    activeTab: string;
    showSidebar: boolean;
    setShowSidebar: (v: boolean) => void;
}> = ({ activeTab, showSidebar, setShowSidebar }) => {
    const [expandLiveApps, setExpandLiveApps] = useState(false);

    return (
        <aside
            className={`z-[100] fixed top-0 left-0 bottom-0 bg-slate-950 border-r border-slate-800/50 backdrop-blur-lg min-w-max w-full lg:max-w-[320px] flex flex-col p-6 gap-2 transition-all duration-300 overflow-y-auto font-display shadow-2xl
            ${showSidebar ? "" : "-translate-x-full lg:translate-x-0"}`}
        >
            <div className="w-full flex items-start justify-between mb-6">
                <LogoBtn />
                <button
                    onClick={() => setShowSidebar(false)}
                    className="p-2 rounded-xl text-slate-300 bg-slate-800/50 hover:bg-slate-700 transition-colors duration-300 lg:hidden"
                >
                    <FaTimes />
                </button>
            </div>

            <Link
                to="/terminal"
                onClick={() => setShowSidebar(false)}
                className="flex items-center justify-between min-w-max w-full px-4 py-3 text-slate-200 text-left text-sm rounded-xl transition-all duration-300 hover:bg-slate-800/70 hover:shadow-glow-cyan bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 border border-primary-500/30 font-medium"
            >
                Terminal Mode
                <FaTerminal className="text-primary-400" />
            </Link>
            <hr className="w-full border-slate-800/50 my-4" />

            {Object.values(homePageTabs).map((t) => {
                const to = `/${t}`;
                return (
                    <Link
                        key={"homepage-sidebar-" + t}
                        to={to}
                        onClick={() => setShowSidebar(false)}
                        className={`min-w-max w-full px-4 py-3 text-slate-300 text-left rounded-xl transition-all duration-300 text-sm font-medium
                    ${
                        activeTab === t
                            ? "bg-slate-800/70 text-primary-400 shadow-glow"
                            : "hover:bg-slate-800/50 hover:text-slate-100"
                    }`}
                    >
                        {startCase(t)}
                    </Link>
                );
            })}

            <hr className="w-full border-slate-800/50 my-2" />

            <div className="w-full flex flex-col gap-2 min-h-max">
                <button
                    onClick={() => setExpandLiveApps((p) => !p)}
                    className="flex min-w-max w-full px-4 py-3 text-slate-300 text-left text-sm rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:text-slate-100 justify-between items-center outline-none font-medium"
                >
                    Live Apps
                    <FaChevronDown
                        className={`transition-transform duration-300 ${
                            expandLiveApps ? "rotate-180" : ""
                        }`}
                    />
                </button>
                {expandLiveApps && (
                    <div className="flex flex-col pl-2 gap-1 animate-slide-down">
                        {Object.keys(liveAppUrls).map((item) => (
                            <Link
                                key={item}
                                className="flex min-w-max w-full px-4 py-2 text-slate-400 text-left rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:text-primary-400 justify-between items-center outline-none text-sm"
                                to={liveAppUrls[item]}
                                onClick={() => setShowSidebar(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* <hr className="w-full border-slate-700" />
            <Link
                to="/blogs"
                className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left text-sm rounded-lg transition-colors duration-300 hover:bg-slate-800/50"
            >
                Blogs
            </Link>
            <hr className="w-full border-slate-700" />
            <Link
                to="/personal-finance"
                className="flex items-center justify-between min-w-max w-full px-4 py-2 text-slate-300 text-left text-sm rounded-lg transition-colors duration-300 hover:bg-slate-800/50"
            >
                Personal Finance
                <FaArrowRight className="text-xs -rotate-45" />
            </Link> */}

            <div className="mt-auto pt-6 flex items-center justify-between font-body border-t border-slate-800/50">
                <small className="text-slate-400 text-xs mt-4">
                    Built with <span className="font-semibold text-primary-400">React</span> {"& "}
                    <span className="font-semibold text-primary-400">Go</span>
                </small>
                <a
                    href="https://github.com/sifatulrabbi/sifatulrabbi.github.io"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 text-xl hover:text-primary-400 transition-colors duration-300 mt-4"
                >
                    <FaGithub />
                </a>
            </div>
        </aside>
    );
};

export default DetailsSidebar;
