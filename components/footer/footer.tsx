import React from "react";
import {Header} from "../header";
import {Form} from "./form";
import {Links} from "./links";

export const Footer: React.FC = () => {
    return (
        <div className="mt-[10vh] flex flex-col">
            <div className="flex flex-col px-container py-6 mb-8">
                <hr className="mb-6 bg-dark opacity-30" />
                <Header
                    caption="Contact Me"
                    title="Let's start building something amazing"
                />
                <div className="w-full flex flex-col lg:flex-row mt-14 justify-between">
                    <Form />
                    <Links />
                </div>
            </div>
            <div className="bg-black p-6 flex flex-col justify-center items-center">
                <span className="text-sm text-light font-primary">
                    Built with{" "}
                    <span className="text-white text-sm font-bold">
                        Next.Js
                    </span>{" "}
                    and{" "}
                    <span className="text-white text-sm font-bold">
                        TypeScript
                    </span>
                </span>
            </div>
        </div>
    );
};
