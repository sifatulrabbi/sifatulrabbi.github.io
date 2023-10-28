import React from "react";
import { homePageTabs } from "@/constants";
import { startCase } from "lodash";
import { FaTimes } from "react-icons/fa";

const DetailsSidebar: React.FC<{
    activeTab: string;
    showSidebar: boolean;
    setActiveTab: (v: string) => void;
    setShowSidebar: (v: boolean) => void;
}> = ({ activeTab, showSidebar, setActiveTab, setShowSidebar }) => {
    const handleActiveTabUpdate = (tab: string) => {
        setActiveTab(tab);
        setShowSidebar(false);
    };

    return (
        <aside
            className={`z-[100] fixed top-0 left-0 bottom-0 bg-gray-900 min-w-max w-full md:max-w-[200px] lg:max-w-[250px] flex flex-col p-4 gap-2 transition-transform duration-300
            ${showSidebar ? "" : "-translate-x-full md:translate-x-0"}`}
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
                    className="p-2 rounded-lg text-slate-400 bg-slate-800/50 md:hidden"
                >
                    <FaTimes />
                </button>
            </div>
            {Object.values(homePageTabs).map((t) => (
                <button
                    key={"homepage-sidebar-" + t}
                    onClick={() => handleActiveTabUpdate(t)}
                    className={`min-w-max w-full px-4 py-2 text-slate-400 text-left rounded-lg transition-colors duration-300
                    ${
                        activeTab === t
                            ? "bg-slate-800"
                            : " hover:bg-slate-800/50"
                    }`}
                >
                    {startCase(t)}
                </button>
            ))}
            <div className="mt-auto">
                <small className="text-slate-400">
                    Built with TypeScript and React
                </small>
            </div>
        </aside>
    );
};

export default DetailsSidebar;
