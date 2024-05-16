import React from "react";
import { homePageTabs } from "@/constants";
import { startCase } from "lodash";
import { FaGithub, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                <button onClick={() => window.location.reload()}>
                    <img
                        src="/logo.png"
                        alt="Sifatul Rabbi"
                        height={50}
                        width={50}
                    />
                </button>
                <button
                    onClick={() => setShowSidebar(false)}
                    className="p-2 rounded-lg text-slate-300 bg-slate-800 lg:hidden"
                >
                    <FaTimes />
                </button>
            </div>
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
            <button
                onClick={enterTerminalMode}
                className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left text-sm rounded-lg transition-colors duration-300 hover:bg-slate-800/50"
            >
                Terminal Mode
            </button>
            <hr className="w-full border-slate-700" />
            <Link
                to="/blogs"
                className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left text-sm rounded-lg transition-colors duration-300 hover:bg-slate-800/50"
            >
                Blogs
            </Link>
            <div className="mt-auto pt-6 flex items-center justify-between font-body">
                <small className="text-slate-300">
                    Built with <span className="font-medium">TypeScript</span> &{" "}
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
