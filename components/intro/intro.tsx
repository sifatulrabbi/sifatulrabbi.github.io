import React from "react";
import {Logo} from "../logo";
import {IntroGx} from "./intro-gx";

export const Intro: React.FC = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="flex flex-col flex-1 justify-between px-container py-6 lg:flex-row">
                <div>
                    <Logo />
                    <h6 className="text-dark mt-14 text-caption">
                        Hi, I&apos;m Sifatul
                    </h6>
                    <h1 className="text-black text-h1 mt-4 mb-[10vh] lg:max-w-lg">
                        Full Stack Web Developer to help you grow your business
                        online
                    </h1>
                    <button className="btn-primary mb-[10vh]">
                        My Services
                    </button>
                </div>
                <div className="w-[25vw] self-center min-w-[200px] h-auto mb-[5vh]">
                    <IntroGx />
                </div>
            </div>
        </div>
    );
};
