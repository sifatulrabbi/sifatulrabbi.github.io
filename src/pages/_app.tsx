import "../styles/globals.scss"
import {Suspense} from "react"
import type {AppProps} from "next/app"
import {Navbar, MobileBar} from "../features"
import {Footer} from "../components"
import {RecoilRoot} from "recoil"
import {LoadingScreen} from "../features/LoadingScreen"

function MyApp({Component, pageProps}: AppProps) {
	return (
		<RecoilRoot>
			<Suspense fallback={<LoadingScreen />}>
				<Navbar />
				<MobileBar />
				<Component {...pageProps} />
				<Footer />
			</Suspense>
		</RecoilRoot>
	)
}

export default MyApp
