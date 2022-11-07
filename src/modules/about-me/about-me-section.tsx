import React from "react"

export const AboutMeSection: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-start items-start mt-[10vh]">
			{/* top section */}
			<div className="w-full justify-start items-center flex flex-col">
				<h1 className="text-dark text-h1 mb-6 lg:mb-8">
					<span className="text-primary">About</span> Me
				</h1>
				<p className="text-base md:text-lg lg:text-xl w-full text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate aperiam
				</p>
			</div>
			{/* description section */}
			<div className="grid gird-cols-1 lg:grid-cols-[1.5fr_1fr] mt-[8vh]">
				{/* about image */}
				<div className="w-full relative justify-start items-center flex"></div>
				<div className="w-full justify-start items-start flex flex-col gap-8">
					<div className="flex flex-col justify-start items-start gap-6 max-w-md">
						<h5 className="uppercase text-sm text-primary">
							Who am I
						</h5>
						<h3 className="text-h3 w-full text-left">
							&ldquo;Learning never has{" "}
							<span className="text-primary">Limits</span>&rdquo;
						</h3>
						<p>
							I love coding, solving problems, building amazing
							projects, reading books & many other cool stuffs. I
							love coding, solving problems, building amazing
							projects, reading books & many other cool stuffs.
							<br />
							<br />I love coding, solving problems, building
							amazing projects, reading books & many other cool
							stuffs. I love coding, solving problems, building
							amazing projects, reading books.
						</p>
					</div>

					<div></div>

					<div className="w-full flex flex-row justify-start items-start gap-6">
						<button className="btn btn-primary">
							View My Projects
						</button>
						<button className="btn btn-dark">Contact Me</button>
					</div>
				</div>
			</div>
		</div>
	)
}
