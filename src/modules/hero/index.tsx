import React from "react"
import { ScrollDownIndicator } from "./scrolldown-indicator"
import { Avatar } from "./avatar"
import { Content } from "./content"
import { CTA } from "./cta"

export const HeroSection: React.FC = () => {
	return (
		<div className="flex flex-col justify-start items-center w-full min-h-[88vh] pt-4 gap-[6vh] mb-8 md:mb-0">
			<Avatar />
			<Content />
			<CTA />
			<ScrollDownIndicator />
		</div>
	)
}
