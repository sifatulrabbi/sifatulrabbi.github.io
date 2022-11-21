import React from "react"
import { myServices, myPackages } from "@/app/assets/data"

import { ServiceCard } from "./service-card"
import { v4 } from "uuid"
import { PackagesCard } from "./packages-card"

export const ServicesSection: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-start items-center mt-[14vh]">
			<h2 className="text-h1 text-dark mb-12">
				My <span className="text-primary">Services</span>
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
				{myServices.map((service) => (
					<ServiceCard key={v4()} {...service} />
				))}
			</div>

			{/* <button className="btn-big btn-primary mt-12">
				Get a Free Quote
			</button> */}

			{/* companies */}
			{/* <div className="w-full flex flex-row justify-between"></div> */}

			{/* packages */}
			<div className="mt-[8vh] flex flex-col justify-start items-center">
				<h1 className="text-h1 text-dark w-full text-center mb-4">
					Suitable <span className="text-primary">Packages</span> For
					You!
				</h1>
				<p className="text-lg w-full text-center">
					Pick the best package that suits you. Or send me a custom
					offer if needed!
				</p>

				<div className="w-full flex flex-col justify-start items-center gap-10 mt-10">
					{myPackages.map((pack) => (
						<PackagesCard key={pack.id} data={pack} />
					))}
				</div>
				<button className="btn-big btn-primary mt-12">
					Custom Offer
				</button>
			</div>
		</div>
	)
}
