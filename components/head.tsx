import React from "react";
import {default as NextHead} from "next/head";

interface Props {
    title: string;
}

const Head: React.FC<Props> = ({title}) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="description"
                content="Solving problems and struggling to learn something new every day motivates me more than anything."
            />
            <meta name="robots" content="index, follow" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="" />
            <title>
                Md Sifatul Islam Rabbi | Fullstack web developer | {title}
            </title>
        </NextHead>
    );
};

export default Head;
