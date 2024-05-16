import React, { useState } from "react";
import { homePageTabs } from "@/constants";
import { FaBars, FaTimes } from "react-icons/fa";
import DetailsSidebar from "./DetailsSidebar";
import ExperiencesSection from "./ExperiencesSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactPage from "./ContactPage";
// import ChatSection from "../ChatSection";

type Props = {
    enterTerminalMode: () => void;
};

const DetailsSection: React.FC<Props> = ({ enterTerminalMode }) => {
    const [tab, setTab] = useState(homePageTabs.experiences);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="w-full h-full max-w-full flex flex-row justify-start items-start gap-6">
            <button
                onClick={() => setShowSidebar((p) => !p)}
                className="fixed top-6 right-6 max-h-max p-2 text-lg rounded-lg text-slate-400 bg-slate-800 lg:hidden z-[100]"
            >
                {showSidebar ? <FaTimes /> : <FaBars />}
            </button>
            <DetailsSidebar
                activeTab={tab}
                setActiveTab={setTab}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                enterTerminalMode={enterTerminalMode}
            />

            {tab === homePageTabs.experiences && <ExperiencesSection />}
            {tab === homePageTabs.projects && <ProjectsSection />}
            {tab === homePageTabs.skills && <SkillsSection />}
            {tab === homePageTabs.contact && <ContactPage />}
            {/* tab === homePageTabs.chat && <ChatSection /> */}
        </div>
    );
};

export default DetailsSection;
