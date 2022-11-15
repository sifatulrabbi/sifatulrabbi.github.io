import Image from "next/image"
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
			<div className="grid gird-cols-1 lg:grid-cols-[1.3fr_1fr] mt-[8vh] gap-8">
				{/* about image */}
				<div className="w-full relative justify-start items-center flex">
					<div className="absolute w-[120px] h-[120px]">
						<Image
							src="/3d-hat.png"
							height="200px"
							width="200px"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="absolute w-[120px] h-[120px]">
						<Image
							src="/3d-rocket.png"
							height="200px"
							width="200px"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="rounded-xl w-full h-full bg-gray-200"></div>
				</div>
				{/* about me content */}
				<div className="w-full justify-start items-center md:items-start flex flex-col gap-8">
					<div className="flex flex-col justify-start items-center md:items-start gap-6 max-w-md">
						<h5 className="uppercase text-sm text-primary text-left">
							Who am I
						</h5>
						<h3 className="text-h3 w-full text-center md:text-left">
							&ldquo;Learning never has
							<span className="text-primary"> Limits</span>&rdquo;
						</h3>
						<p className="text-center md:text-left">
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

					<div>
						<div className="flex flex-row justify-start items-center bg-white rounded-lg px-4 py-2 border-1 shadow-lg gap-2">
							<div>
								<Image
									src="/badge.png"
									height="30px"
									width="30px"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex flex-col justify-start items-start">
								<span className="text-green-600 text-sm font-medium tracking-wider">
									TOP RATED
								</span>
								<span className="text-sm">
									on <span className="font-bold">Upwork</span>
								</span>
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col md:flex-row justify-start items-center md:items-start gap-4 md:gap-6">
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
