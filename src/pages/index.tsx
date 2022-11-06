import React from "react"

import {PageWrapper} from "@/components"
import {HeroSection, AboutModule} from "@/modules"

const HomePage: React.FC = () => {
	return (
		<PageWrapper title="Home">
			<HeroSection />
			<AboutModule.AboutMeSection />
		</PageWrapper>
	)
}

export default HomePage
