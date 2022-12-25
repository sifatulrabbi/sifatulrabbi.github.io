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
	FaqModule,
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
			<FaqModule.FaqSection />
		</PageWrapper>
	)
}

export default HomePage
