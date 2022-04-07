import type {AppProps} from "next/app";
import "../styles/globals.css";
import {Navbar, MobileBar, ThemeProvider} from "../features";
import {Footer} from "../components";
import {RecoilRoot} from "recoil";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <ThemeProvider>
                <Navbar />
                <MobileBar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default MyApp;
