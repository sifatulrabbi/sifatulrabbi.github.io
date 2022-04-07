import type {AppProps} from "next/app";
import "../styles/globals.css";
import {Navbar, MobileBar} from "../features";
import {Footer} from "../components";
import {RecoilRoot} from "recoil";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <Navbar />
            <MobileBar />
            <Component {...pageProps} />
            <Footer />
        </RecoilRoot>
    );
}

export default MyApp;
