import React from "react";
import {Header} from "../header";
import {servicesImg} from "../../assets/images";
import Img from "next/image";
import {Cards} from "./cards";

export const Services: React.FC = () => {
    return (
        <div className="flex flex-col flex-1 justify-between mt-[10vh] px-container">
            <div className="flex flex-col justify-between lg:flex-row">
                <div className="mb-8">
                    <Header
                        caption="My Services"
                        title="Personalized solutions for your web applications"
                    />
                    <p className="mt-8 max-w-xl text-dark">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quidem, architecto dolore iure aperiam eaque quas?
                        Modi at voluptas quam hic perspiciatis dolores ullam
                        corrupti!
                    </p>
                </div>
                <div className="w-[20vw] h-auto max-w-[300px] min-w-[200px] self-center">
                    <Img
                        src={servicesImg}
                        alt="Full stack Web development"
                        layout="intrinsic"
                    />
                </div>
            </div>
            <Cards />
        </div>
    );
};
