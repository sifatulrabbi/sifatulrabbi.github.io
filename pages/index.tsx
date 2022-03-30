import type {NextPage, NextPageContext} from "next";
import {Head, SectionHeader, Section, Text} from "../components";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title={"Home"} />
            {/* hero section */}
            <Section className="justify-center h-screen">
                <Text mono primary>
                    Hi, I am
                </Text>
                <h1 className="text-h1 text-black mt-4 max-w-lg">
                    Sifatul Rabbi
                </h1>
                <h1 className="text-h1 text-secondary max-w-xl mb-4">
                    A Full Stack Web Developer
                </h1>
                <Text paragraph className="mt-6 max-w-lg">
                    I am a Hard-working self-taught web developer. I love
                    learning about software architecture and cloud-computing
                </Text>
                <button className="btn-primary mt-8">me.Explore{"()"}</button>
            </Section>
            {/* portfolio section */}
            <Section>
                <SectionHeader title="Thinks I've built" />
            </Section>
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {message: "Hello Next.js"},
    };
}

export default Home;
