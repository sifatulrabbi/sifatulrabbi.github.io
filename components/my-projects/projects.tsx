import React from "react";
import {Header} from "../header";
import {Cards} from "./cards";
import {BgText} from "../bg-text";

export const Projects: React.FC = () => {
    return (
        <section className="overflow-hidden pt-12 mt-[10vh]">
            <div className="relative px-container flex flex-col">
                <BgText text="Projects" />
                <Header
                    caption="My Projects"
                    title="Applications and websites I have built"
                />
                <Cards />
            </div>
        </section>
    );
};
