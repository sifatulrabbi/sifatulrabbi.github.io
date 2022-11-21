import React from "react"

import Image from "next/image"
import Link from "next/link"
import { HiOutlinePhone } from "react-icons/hi"
import { HiOutlineEnvelope } from "react-icons/hi2"

export const ContactFormInfo: React.FC = () => {
	return (
		<div className="bg-dark rounded-xl flex flex-col justify-start items-start w-full min-h-max h-full">
			<article className="p-4 lg:p-6">
				<h4 className="text-h4 font-medium text-white mb-4">
					Contact Information
				</h4>
				<p className="text-gray-400 text-sm md:text-base">
					Fill up the form and send me a message and I will get back
					to you withing 24 hours!
				</p>
			</article>
			<div className="w-full max-w-full overflow-hidden mt-8 flex flex-col justify-start items-start gap-6 p-4 lg:p-6">
				<Link href="tel:+8801882970400">
					<a className="max-w-full flex flex-row justify-start items-center gap-4 text-white text-sm lg:text-base">
						<HiOutlinePhone className="text-primary text-xl" />
						+8801882970400
					</a>
				</Link>
				<Link href="mailto:mdsifatulislam.rabbi@gmail.com">
					<a className="max-w-full flex flex-row justify-start items-center gap-4 text-white text-sm lg:text-base">
						<HiOutlineEnvelope className="text-primary text-xl" />
						<span className="truncate">
							mdsifatulislam.rabbi@gmail.com
						</span>
					</a>
				</Link>
			</div>
			<div className="w-full min-h-[60px] mt-8 flex justify-end items-end pb-4">
				<Image
					src="/contact-card-bg.svg"
					alt=""
					height="169.5px"
					width="1000px"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	)
}
