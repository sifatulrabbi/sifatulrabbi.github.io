import type {NextPage, NextPageContext} from "next";
import {Head, Intro, Projects, Services, Footer} from "../components";

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
            <Footer />
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {message: "Hello Next.js"},
    };
}

export default Home;
