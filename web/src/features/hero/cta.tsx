import React from "react"

export const CTA: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
			<button className="btn-big btn-primary">Learn More</button>
			<button className="btn-big">Get started</button>
		</div>
	)
}
