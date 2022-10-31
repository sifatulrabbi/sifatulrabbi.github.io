import React from "react"
import {PageWrapper} from "@/components"

export const HeroSection: React.FC = () => {
	return (
		<div className="flex flex-col justify-start items-center">
			<h1>
				Hi<span className="text-primary">,</span> I&apos;m{" "}
				<span className="text-primary">Sifatul Rabbi</span>
				<br />
				Developer for your <span className="text-primary">Project</span>
			</h1>
		</div>
	)
}
