import React from "react"

import { PageWrapper } from "@/components"
import {
	HeroSection,
	AboutModule,
	ServicesModule,
	SkillsModule,
} from "@/modules"

const HomePage: React.FC = () => {
	return (
		<PageWrapper title="Home">
			<HeroSection />
			<AboutModule.AboutMeSection />
			<ServicesModule.ServicesSection />
			<SkillsModule.SkillsSection />
		</PageWrapper>
	)
}

export default HomePage
