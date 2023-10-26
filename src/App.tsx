import React, { useState } from "react";
import { HeroSection, DetailsSection } from "@/modules/HomePage";

const App: React.FC = () => {
    const [showHero, setShowHero] = useState(true);

    return (
        <main className="w-full max-w-full bg-gray-900 min-h-[100vh] max-h-[100vh] overflow-hidden">
            <div
                className={`w-full fixed top-0 right-0 left-0 bottom-0 z-[1] flex flex-col justify-start items-start bg-gray-900 transition-transform duration-500 ${
                    showHero ? "" : "translate-x-full"
                }`}
            >
                <HeroSection setShowHero={setShowHero} />
            </div>
            <DetailsSection />
        </main>
    );
};

export default App;
