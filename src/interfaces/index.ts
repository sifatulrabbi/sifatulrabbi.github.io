import type { PackageType, ServiceType } from "@/app/constants"
import type { SyntheticEvent } from "react"

export interface IPackage {
	id: string
	/** title of the package */
	title: string
	/** description of the package */
	description: string[]
	/** type of the pack hourly or flat rate */
	packType: PackageType
	/** tags such as Software, backend etc */
	tags: { name: ServiceType | string; color: string }[]
	/** if the service is available or not */
	active: boolean
	/** $/hour rate for this job */
	rate: number
}

export interface ISkill {
	icon: string
	name: string
	description: string
}

export interface IReview {
	avatar: string
	name: string
	company: string
	role: string
	text: string
}

export interface IInputGroup<V = string | number, Element = HTMLInputElement> {
	name: string
	value: V | undefined
	onChange: (e: SyntheticEvent<Element>) => void
	label?: string
	placeholder?: string
	type?:
		| "text"
		| "number"
		| "email"
		| "number"
		| "currency"
		| "formattedNumber"
	inputStyle?: string
	labelStyle?: string
}
