import React from "react";
import {Card} from "./card";
import {portfolioData} from "../../assets/data";
import {v4} from "uuid";

export const Cards: React.FC = () => {
    return (
        <div className="mt-[8vh] flex flex-col gap-8 justify-start items-center">
            {portfolioData.projects.map((data, index) => (
                <Card key={v4()} {...data} reverse={index % 2 !== 0} />
            ))}
        </div>
    );
};
