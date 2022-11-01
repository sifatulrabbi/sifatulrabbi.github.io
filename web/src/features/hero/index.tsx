import React from "react"
import Image from "next/image"

export const HeroSection: React.FC = () => {
	return (
		<div className="flex flex-col justify-start items-center w-full min-h-[88vh] pt-4 gap-[6vh] border-b-[1px] mb-8 md:mb-0">
			{/* avatar/vector art */}
			<div className="rounded-full bg-white shadow-xl min-w-[150px] min-h-[150px] w-[12vw] h-[12vw] max-h-[250px] max-w-[250px] overflow-hidden">
				<Image
					src="/hero-avatar.png"
					alt="hero avatar"
					width="500px"
					height="500px"
					className="object-cover h-full w-full"
				/>
			</div>
			<h1
				style={{
					fontSize: "clamp(48px, 5vw, 90px)",
					lineHeight: "1.1",
				}}
				className="font-bold text-dark text-center w-full"
			>
				Hi<span className="text-primary">,</span> I&apos;m{" "}
				<span className="text-primary">Sifatul Rabbi</span>
				<br />
				Developer for your next{" "}
				<span className="text-primary">Project</span>
			</h1>
			<p className="text-lg md:text-xl xl:text-2xl text-center max-w-[60vw]">
				Robust modern{" "}
				<span className="text-primary">Web Applications</span>{" "}
				development made easy by developers like me! I develop, test and
				hack modern websites and applications, mostly web based on
				demand
			</p>
			{/* cta section */}
			<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
				<button className="btn-big btn-primary">Learn More</button>
				<button className="btn-big">Get started</button>
			</div>
			{/* animated scroll down indicator */}
			<div className="relative w-6 h-12 border-2 border-textSecondary rounded-full">
				<div className="scroll-indicator"></div>
			</div>
		</div>
	)
}
