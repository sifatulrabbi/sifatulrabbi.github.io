import React from "react";
import { homePageTabs } from "@/constants";
import { FaBars, FaTimes } from "react-icons/fa";
import DetailsSidebar from "./DetailsSidebar";
import ExperiencesSection from "./ExperiencesSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactPage from "./ContactPage";
import { useLocation } from "react-router-dom";

// import ChatSection from "../ChatSection";

const DetailsSection: React.FC = () => {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = React.useState(false);

    const getActiveTabFromPath = (pathname: string) => {
        if (pathname.startsWith("/projects")) return homePageTabs.projects;
        if (pathname.startsWith("/skills")) return homePageTabs.skills;
        if (pathname.startsWith("/contact")) return homePageTabs.contact;
        return homePageTabs.experiences;
    };

    const activeTab = getActiveTabFromPath(location.pathname);

    return (
        <div className="w-full h-full max-w-full flex flex-row justify-start items-start gap-6">
            <button
                onClick={() => setShowSidebar((p) => !p)}
                className="fixed top-6 right-6 max-h-max p-2 text-lg rounded-lg text-slate-400 bg-slate-800 lg:hidden z-[100]"
            >
                {showSidebar ? <FaTimes /> : <FaBars />}
            </button>
            <DetailsSidebar
                activeTab={activeTab}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            {activeTab === homePageTabs.experiences && <ExperiencesSection />}
            {activeTab === homePageTabs.projects && <ProjectsSection />}
            {activeTab === homePageTabs.skills && <SkillsSection />}
            {activeTab === homePageTabs.contact && <ContactPage />}
            {/* activeTab === homePageTabs.chat && <ChatSection /> */}
        </div>
    );
};

export default DetailsSection;
