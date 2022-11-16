import React from "react"
import { FaChevronCircleRight } from "react-icons/fa"
import { ReviewCard } from "./review-card"
import { myReviews } from "@/app/assets/data"
import { v4 } from "uuid"

export const ReviewsSection: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-start items-center">
			<h2 className="text-h2 mb-4">
				My <span className="text-primary">Happy</span> Clients
			</h2>
			<p className="opacity-80">
				A fresh breath of relief from my happy clients. Take a look why
				they&apos;re satisfied.
			</p>
			{/* review viewer */}
			<div className="relative w-full flex justify-center items-center mt-10">
				<div className="w-full flex justify-center items-center">
					<ReviewCard key={v4()} review={myReviews[0]} />
				</div>
				{/* <div className="w-full flex justify-center items-center"></div> */}
			</div>
		</div>
	)
}
