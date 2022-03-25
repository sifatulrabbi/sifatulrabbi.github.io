import type {NextPage, NextPageContext} from "next";
import {Head, Intro, Services} from "../components";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title={"Home"} />
            <Intro />
            <Services />
        </>
    );
};

// export async function getStaticProps(ctx: NextPageContext) {
//     return {
//         props: {message: "Hello Next.js"},
//     };
// }

export default Home;
