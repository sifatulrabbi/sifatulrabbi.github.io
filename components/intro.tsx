import React from "react";
import {logo, introImg} from "../assets/images";
import Img from "next/image";

export const Intro: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-black">
            <div className="flex flex-col flex-1 justify-between px-container lg:flex-row">
                <div>
                    <Img
                        src={logo}
                        alt="Sifatul Rabbi"
                        height={50}
                        width={46}
                        layout="fixed"
                    />
                    <h6 className="text-lg text-light mt-14 font-secondary">
                        Hello there, I&apos;m Sifatul
                    </h6>
                    <h1 className="text-white text-h1 mt-4 mb-[10vh] lg:max-w-lg font-primary">
                        A Full Stack Web Developer
                        <br />
                        to help you grow
                        <br />
                        your business online
                    </h1>
                    <button className="btn-primary font-primary">
                        My Services
                    </button>
                </div>
                <div className="w-[25vw] self-center min-w-[200px] h-auto">
                    <Img
                        src={introImg}
                        alt="Full stack web developer"
                        layout="intrinsic"
                    />
                </div>
            </div>
        </div>
    );
};
