import type {NextPage, NextPageContext} from "next";
import {Head} from "../components";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({message}) => {
    return (
        <>
            <Head title={"Home"} />
            <div>
                <h1>{message}</h1>
            </div>
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {message: "Hello Next.js"},
    };
}

export default Home;
