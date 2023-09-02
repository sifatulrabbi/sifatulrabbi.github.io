import { Suspense } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { Navbar, MobileBar, ThemeProvider } from "../modules";
import { Footer } from "../components";
import { RecoilRoot } from "recoil";
import { LoadingScreen } from "../modules/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ThemeProvider>
                <Suspense fallback={<LoadingScreen />}>
                    <Navbar />
                    <MobileBar />
                    <Component {...pageProps} />
                    <Footer />
                </Suspense>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default MyApp;
