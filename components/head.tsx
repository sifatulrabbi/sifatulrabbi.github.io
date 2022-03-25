import React from "react";
import {default as NextHead} from "next/head";

interface Props {
    title: string;
}

const Head: React.FC<Props> = ({title}) => {
    return (
        <NextHead>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>
                Md Sifatul Islam Rabbi | Fullstack web developer | {title}
            </title>
        </NextHead>
    );
};

export default Head;
