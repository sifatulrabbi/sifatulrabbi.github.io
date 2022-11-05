import React from "react"

import {PageWrapper} from "@/components"
import {HeroSection} from "@/modules"

const HomePage: React.FC = () => {
	return (
		<PageWrapper title="Home">
			<HeroSection />
		</PageWrapper>
	)
}

export default HomePage
