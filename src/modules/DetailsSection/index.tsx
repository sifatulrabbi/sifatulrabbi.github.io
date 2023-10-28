import React, { useState } from "react";
import { homePageTabs } from "@/constants";
import { FaBars } from "react-icons/fa";

import DetailsSidebar from "./DetailsSidebar";
import ExperiencesSection from "./ExperiencesSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactPage from "./ContactPage";

const DetailsSection: React.FC = () => {
    const [tab, setTab] = useState(homePageTabs.experiences);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="w-full h-full max-w-full flex flex-row justify-start items-start gap-6">
            <button
                onClick={() => setShowSidebar(true)}
                className="fixed top-6 left-6 max-h-max p-2 text-lg rounded-lg text-slate-400 bg-slate-800 md:hidden z-[100]"
            >
                <FaBars />
            </button>
            <DetailsSidebar
                activeTab={tab}
                setActiveTab={setTab}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            {tab === homePageTabs.experiences && <ExperiencesSection />}
            {tab === homePageTabs.projects && <ProjectsSection />}
            {tab === homePageTabs.skills && <SkillsSection />}
            {tab === homePageTabs.contact && <ContactPage />}
        </div>
    );
};

export default DetailsSection;
