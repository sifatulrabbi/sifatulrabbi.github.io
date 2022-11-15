import React from "react"

import { PageWrapper } from "@/components"
import { HeroSection, AboutModule, ServicesModule } from "@/modules"

const HomePage: React.FC = () => {
	return (
		<PageWrapper title="Home">
			<HeroSection />
			<AboutModule.AboutMeSection />
			<ServicesModule.ServicesSection />
		</PageWrapper>
	)
}

export default HomePage
