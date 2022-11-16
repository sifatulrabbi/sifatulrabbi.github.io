import { PackageType, ServiceType } from "@/app/constants"

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
