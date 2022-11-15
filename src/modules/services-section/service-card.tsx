import React from "react"

interface Props {
	icon: React.ReactNode
	name: string
	description: string
	color: string
}

export const ServiceCard: React.FC<Props> = ({
	icon,
	name,
	description,
	color,
}) => {
	return (
		<div className="flex flex-col justify-start items-center  md:items-start gap-4 max-w-xs sm:max-w-sm md:max-w-auto">
			<span
				className="text-3xl p-4 rounded-lg"
				style={{ backgroundColor: color + "15", color: color }}
			>
				{icon}
			</span>
			<h3 className="text-h3">{name}</h3>
			<p className="opacity-80 md:text-[1.1rem]">{description}</p>
		</div>
	)
}
