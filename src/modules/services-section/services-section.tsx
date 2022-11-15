import React from "react"
import { ServiceCard } from "./service-card"
import { VscCode, VscServerProcess } from "react-icons/vsc"
import { AiOutlineApi } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { v4 } from "uuid"

const services = [
	{
		icon: <VscCode />,
		name: "Web Development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		color: "#1778F2",
	},
	{
		icon: <VscServerProcess />,
		name: "Server Applications",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		color: "#00C274",
	},
	{
		icon: <AiOutlineApi />,
		name: "API Development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		color: "#FF9C28",
	},
	{
		icon: <FcGoogle />,
		name: "Google Cloud Services",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		color: "#FF4A4A",
	},
]

export const ServicesSection: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-start items-center mt-[12vh]">
			<h2 className="text-h1 text-dark mb-10">
				My <span className="text-primary">Services</span>
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
				{services.map((service) => (
					<ServiceCard key={v4()} {...service} />
				))}
			</div>
		</div>
	)
}
