import React from "react"

export const Content: React.FC = () => {
	return (
		<>
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
		</>
	)
}
