import React from "react"
import { MdCircle } from "react-icons/md"

export const CTASection: React.FC = () => {
	return (
		<div className="relative py-[18vh] w-full flex flex-col justify-start-start items-center overflow-hidden">
			<p className="uppercase flex flex-row justify-center items-center gap-2 tracking-wider leading-[1] text-dark text-lg">
				<MdCircle className="text-success" /> Available now
			</p>
			<h1
				style={{
					fontSize: "clamp(42px, 4.5vw, 70px)",
					lineHeight: "1.1",
				}}
				className="w-full text-center max-w-xl text-dark font-bold mt-8"
			>
				Have a <span className="text-primary">Project</span> in mind?
				Let&apos;s talk
			</h1>
			<button className="btn-big btn-green mt-12">Let&apos;s Chat</button>
		</div>
	)
}
