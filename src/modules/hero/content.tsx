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
				Lorem ipsum dolor sit amet
			</h1>
			<p className="text-base md:text-lg lg:text-xl text-center max-w-[60vw]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
				voluptas, ex ullam provident quis dolorum dolores dignissimos
				Lorem ipsum Lorem ipsum dolor sit ipsum dolor sit
			</p>
		</>
	)
}
