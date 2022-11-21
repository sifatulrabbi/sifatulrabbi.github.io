import React from "react"

import { PageWrapper } from "@/components"
import {
	HeroSection,
	AboutModule,
	ServicesModule,
	SkillsModule,
	CTASection,
	ReviewsModule,
	ContactsModule,
} from "@/modules"

const HomePage: React.FC = () => {
	return (
		<PageWrapper title="Home">
			<HeroSection />
			<AboutModule.AboutMeSection />
			<ServicesModule.ServicesSection />
			<SkillsModule.SkillsSection />
			<CTASection />
			<ReviewsModule.ReviewsSection />
			<ContactsModule.ContactsSection />
		</PageWrapper>
	)
}

export default HomePage
