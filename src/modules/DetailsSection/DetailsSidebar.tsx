import React from "react";
import { homePageTabs } from "@/constants";
import { startCase } from "lodash";
import { FaTimes } from "react-icons/fa";
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
        if (tab.includes("terminal")) {
            enterTerminalMode();
            return;
        }
        setActiveTab(tab);
        setShowSidebar(false);
    };

    return (
        <aside
            className={`z-[100] fixed top-0 left-0 bottom-0 bg-gray-900 min-w-max w-full md:max-w-[250px] flex flex-col p-4 gap-2 transition-transform duration-300 overflow-y-auto font-display
            ${showSidebar ? "" : "-translate-x-full lg:translate-x-0"}`}
        >
            <div className="w-full flex items-center justify-between mb-4">
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
                    className="p-2 rounded-lg text-slate-300 bg-slate-800/50 lg:hidden"
                >
                    <FaTimes />
                </button>
            </div>
            {Object.values(homePageTabs).map((t) => (
                <button
                    key={"homepage-sidebar-" + t}
                    onClick={() => handleActiveTabUpdate(t)}
                    className={`min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300
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
            <Link
                to="/blogs"
                className="flex min-w-max w-full px-4 py-2 text-slate-300 text-left rounded-lg transition-colors duration-300 hover:bg-slate-800/50"
            >
                Blogs
            </Link>
            <div className="mt-auto pt-6">
                <small className="text-slate-300">
                    Built with{" "}
                    <span className="text-primary-400">TypeScript</span> &{" "}
                    <span className="text-primary-400">Go</span>
                </small>
            </div>
        </aside>
    );
};

export default DetailsSidebar;
