import React from "react"

import {PageWrapper} from "@/components"
import {HeroSection} from "@/features"

const HomePage: React.FC = () => {
	return (
		<PageWrapper title="Home">
			<HeroSection />
		</PageWrapper>
	)
}

export default HomePage
