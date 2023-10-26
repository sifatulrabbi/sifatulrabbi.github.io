import React, { useState } from "react";
import { homePageTabs } from "@/constants";

import DetailsSidebar from "./DetailsSidebar";
import ExperiencesSection from "./ExperiencesSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const DetailsSection: React.FC = () => {
    const [tab, setTab] = useState(homePageTabs.experiences);

    return (
        <div className="w-full h-full max-w-full max-h-full overflow-y-auto flex flex-row justify-start items-start gap-6">
            <DetailsSidebar activeTab={tab} setActiveTab={setTab} />
            {tab === homePageTabs.experiences && <ExperiencesSection />}
            {tab === homePageTabs.projects && <ProjectsSection />}
            {tab === homePageTabs.skills && <SkillsSection />}
        </div>
    );
};

export default DetailsSection;
