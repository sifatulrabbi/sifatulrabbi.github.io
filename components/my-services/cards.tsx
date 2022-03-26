import React from "react";
import {servicesData} from "../../assets/data";
import {Card} from "./card";

export const Cards: React.FC = () => {
    return (
        <div className="flex flex-row flex-wrap gap-8 justify-start align-center mt-[8vh]">
            {servicesData.services.map((data) => (
                <Card
                    key={data.name}
                    title={data.name}
                    description={data.summary}
                    path={data.id}
                />
            ))}
        </div>
    );
};
