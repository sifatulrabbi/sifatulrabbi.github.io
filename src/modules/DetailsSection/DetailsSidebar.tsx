import React, { useState } from "react";
import { homePageTabs, liveAppUrls } from "@/constants";
import { startCase } from "lodash";
import { FaChevronDown, FaGithub, FaTerminal, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoBtn from "@/components/LogoBtn";

const DetailsSidebar: React.FC<{
    activeTab: string;
    showSidebar: boolean;
    setActiveTab: (v: string) => void;
    setShowSidebar: (v: boolean) => void;
    enterTerminalMode: () => void;
}> = ({
    activeTab,
    showSidebar,
    setActiveTab,
    setShowSidebar,
    enterTerminalMode,
}) => {
    const [expandLiveApps, setExpandLiveApps] = useState(false);

    const handleActiveTabUpdate = (tab: string) => {
        setActiveTab(tab);
        setShowSidebar(false);
    };

    return (
        <aside
            className={`z-[100] fixed top-0 left-0 bottom-0 bg-gray-900 min-w-max w-full lg:max-w-[300px] flex flex-col p-6 gap-2 transition-transform duration-300 overflow-y-auto font-display
            ${showSidebar ? "" : "-translate-x-full lg:translate-x-0"}`}
        >
            <div className="w-full flex items-start justify-between mb-4">
                <LogoBtn />
                <button
                    onClick={() => setShowSidebar(false)}
                    className="p-2 rounded-lg text-slate-300 bg-slate-800 lg:hidden"
                >
                    <FaTimes />
                </button>
            </div>

            <button
                onClick={enterTerminalMode}
                className="flex items-center justify-between min-w-max w-full px-4 py-2 text-slate-300 text-left text-sm rounded-lg transition-colors duration-300 hover:bg-slate-800/50 bg-primary-400/10"
            >
                Terminal Mode
                <FaTerminal />
            </button>
            <hr className="w-full border-slate-700 my-4" />

            {Object.values(homePageTabs).map((t) => (
                <button
                    key={"homepage-sidebar-" + t}
                    onClick={() => handleActiveTabUpdate(t)}
                    className={`min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 text-sm
                    ${
                        activeTab === t
                            ? "bg-slate-800"
                            : " hover:bg-slate-800/50"
                    }`}
                >
                    {startCase(t)}
                </button>
            ))}

            <hr className="w-full border-slate-700" />

            <div className="w-full flex flex-col gap-2 min-h-max">
                <button
                    onClick={() => setExpandLiveApps((p) => !p)}
                    className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left text-sm rounded-lg transition-colors duration-300 hover:bg-slate-800/50 justify-between items-center outline-none"
                >
                    Live Apps
                    <FaChevronDown
                        className={`transition-transform ${
                            expandLiveApps ? "rotate-180" : ""
                        }`}
                    />
                </button>
                {expandLiveApps && (
                    <div className="flex flex-col pl-4 gap-2">
                        {Object.keys(liveAppUrls).map((item) => (
                            <Link
                                key={item}
                                className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 hover:bg-slate-800/50 justify-between items-center outline-none text-sm"
                                to={liveAppUrls[item]}
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

            <div className="mt-auto pt-6 flex items-center justify-between font-body">
                <small className="text-slate-300">
                    Built with <span className="font-medium">React</span> {"& "}
                    <span className="font-medium">Go</span>
                </small>
                <a
                    href="https://github.com/sifatulrabbi/sifatulrabbi.github.io"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 text-xl"
                >
                    <FaGithub />
                </a>
            </div>
        </aside>
    );
};

export default DetailsSidebar;
