import React from "react"
import { mySkills } from "@/app/assets/data"
import { v4 } from "uuid"

import { SkillCard } from "./skill-card"

export const SkillsSection: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-start items-center mt-[12vh]">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{mySkills.map((skill) => (
					<SkillCard key={v4()} skill={skill} />
				))}
			</div>
			<button className="btn btn-dark mt-8">Github Profile</button>
		</div>
	)
}
