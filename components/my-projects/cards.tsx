import React from "react";
import {Card} from "./card";
import {portfolioData} from "../../assets/data";
import {v4} from "uuid";

export const Cards: React.FC = () => {
    return (
        <div className="mt-[8vh] flex flex-col justify-start items-start mx-auto gap-12">
            {portfolioData.projects.map((data) => (
                <Card key={v4()} {...data} />
            ))}
        </div>
    );
};
