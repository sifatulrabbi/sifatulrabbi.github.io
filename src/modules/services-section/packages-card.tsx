import React from "react"
import type { IPackage } from "@/interfaces"
import { v4 } from "uuid"

import { MdCircle } from "react-icons/md"
import { AiOutlineDollar } from "react-icons/ai"
import { HiOutlineGlobe } from "react-icons/hi"
import { PackageType } from "../../constants"

interface Props {
	data: IPackage
}

export const PackagesCard: React.FC<Props> = ({ data }) => {
	return (
		<div className="w-full max-w-xl p-6 rounded-lg shadow-lg bg-white flex flex-col justify-start items-start gap-6">
			{/* top bar */}
			<div className="flex flex-row flex-wrap justify-start items-start">
				{data.tags.map((tag) => (
					<div
						key={v4()}
						className="rounded-full px-2 p-1 text-sm"
						style={{
							backgroundColor: tag.color + "1a",
							color: tag.color,
						}}
					>
						{tag.name}
					</div>
				))}
			</div>
			{/* body */}
			<h5 className="text-h5 font-medium">{data.title}</h5>
			<p>{data.description}</p>
			{/* footer */}
			<div className="flex flex-row justify-start items-center flex-wrap gap-2">
				<p className="text-sm flex flex-row justify-start items-center gap-2 font-[600] mr-4">
					<MdCircle
						className={`text-[10px] ${
							data.active ? "text-green-400" : "text-gray-400"
						}`}
					/>
					<span className="opacity-80">
						{data.active ? "Available" : "Unavailable"}
					</span>
				</p>
				<p className="text-sm flex flex-row justify-start items-center font-[600] opacity-80 mr-4 gap-2">
					<AiOutlineDollar className="text-2xl" />
					<span>
						From{" "}
						<span className="text-primary">
							${data.rate}
							{data.packType === PackageType.hourly && "/hr"}
						</span>
					</span>
				</p>
				<p className="font-[600] opacity-80 text-sm flex flex-row justify-start items-center gap-2">
					<HiOutlineGlobe className="text-2xl" /> Remote
				</p>
			</div>
		</div>
	)
}
