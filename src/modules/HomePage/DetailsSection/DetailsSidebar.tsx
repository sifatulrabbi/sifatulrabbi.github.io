import React from "react";
import { homePageTabs } from "@/constants";
import { startCase } from "lodash";

const DetailsSidebar: React.FC<{
    activeTab: string;
    setActiveTab: (v: string) => void;
}> = ({ activeTab, setActiveTab }) => {
    return (
        <aside className="fixed top-0 left-0 bottom-0 bg-gray-900 min-w-max w-full md:max-w-[200px] lg:max-w-[250px] flex flex-col p-4 gap-2">
            {Object.values(homePageTabs).map((t) => (
                <button
                    key={"homepage-sidebar-" + t}
                    onClick={() => setActiveTab(t)}
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
