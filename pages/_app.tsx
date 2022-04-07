import type {AppProps} from "next/app";
import "../styles/globals.css";
import {Navbar} from "../features";
import {Footer} from "../components";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
