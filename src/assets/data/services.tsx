import { VscCode, VscServerProcess } from "react-icons/vsc"
import { AiOutlineApi, AiOutlineCloudServer } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { FaAws } from "react-icons/fa"
import { IPackage } from "@/interfaces"
import { PackageType, ServiceType } from "@/app/constants"

export const myServices = [
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
		color: "#E300E8",
	},
	{
		icon: <FcGoogle />,
		name: "Google Cloud Services",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		color: "#FF4A4A",
	},
	{
		icon: <AiOutlineCloudServer />,
		name: "Server Adminstration",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		color: "#5328FF",
	},
	{
		icon: <FaAws />,
		name: "AWS Web Services",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		color: "#FF9C28",
	},
]

export const myPackages: IPackage[] = [
	{
		id: "pack-001",
		title: "Backend developer",
		description: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		],
		packType: PackageType.hourly,
		tags: [{ name: ServiceType.backend, color: "#1778F2" }],
		active: true,
		rate: 30,
	},
	{
		id: "pack-002",
		title: "Frontend developer",
		description: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		],
		packType: PackageType.hourly,
		tags: [{ name: ServiceType.frontend, color: "#00C274" }],
		active: true,
		rate: 30,
	},
	{
		id: "pack-003",
		title: "Fullstack developer",
		description: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		],
		packType: PackageType.hourly,
		tags: [{ name: ServiceType.fullstack, color: "#4A51FF" }],
		active: false,
		rate: 30,
	},
	{
		id: "pack-004",
		title: "Build and deploy a webapp",
		description: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam nostrum accusamus quis!",
		],
		packType: PackageType.flat,
		tags: [{ name: ServiceType.fullstack, color: "#4A51FF" }],
		active: true,
		rate: 1000,
	},
]
