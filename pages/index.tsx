import type {NextPage, NextPageContext} from "next";
import {Head, Intro, Projects, Services} from "../components";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title={"Home"} />
            <Intro />
            <Services />
            <Projects />
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {message: "Hello Next.js"},
    };
}

export default Home;
