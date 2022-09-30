import "../../styles/global.scss"
import {Suspense} from "react"
import type {AppProps} from "next/app"
import {RecoilRoot} from "recoil"

function MyApp({Component, pageProps}: AppProps) {
	return (
		<RecoilRoot>
			<Suspense fallback={<div>Loading...</div>}>
				<Component {...pageProps} />
			</Suspense>
		</RecoilRoot>
	)
}

export default MyApp
