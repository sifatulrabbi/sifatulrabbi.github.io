import React from "react"

import Image from "next/image"

export const Avatar: React.FC = () => {
	return (
		<div className="rounded-full bg-white shadow-xl min-w-[150px] min-h-[150px] w-[12vw] h-[12vw] max-h-[250px] max-w-[250px] overflow-hidden">
			<Image
				src="/hero-avatar.png"
				alt="hero avatar"
				width="500px"
				height="500px"
				className="object-cover h-full w-full"
			/>
		</div>
	)
}
