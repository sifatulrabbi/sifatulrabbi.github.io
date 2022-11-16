import React from "react"
import type { ISkill } from "@/interfaces"

import Image from "next/image"

interface Props {
	skill: ISkill
}

export const SkillCard: React.FC<Props> = ({ skill }) => {
	return (
		<div className="flex flex-col md:flex-row justify-start items-start md:items-center bg-white rounded-lg border-1 shadow-lg p-4 gap-4">
			<div className="flex justify-center items-center h-[30px] w-[30px] min-w-[30px] rounded overflow-hidden">
				<Image
					src={skill.icon}
					alt=""
					height="100px"
					width="100px"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col justify-start items-start">
				<p className="font-medium text-dark">{skill.name}</p>
				<p className="text-sm opacity-80">{skill.description}</p>
			</div>
		</div>
	)
}
