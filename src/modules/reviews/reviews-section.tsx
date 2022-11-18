import React, { useEffect, useState } from "react"
import { v4 } from "uuid"

import { FaChevronRight } from "react-icons/fa"
import { ReviewCard } from "./review-card"
import { myReviews } from "@/app/assets/data"
import { IReview } from "../../interfaces"

export const ReviewsSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const [reviewCards, setReviewCards] = useState<React.ReactNode[]>([])

	useEffect(() => {
		setReviewCards(
			myReviews.map((r) => <ReviewCard key={v4()} review={r} />),
		)
	}, [])

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
			<div className="relative w-full flex flex-col justify-center items-center mt-10 gap-4">
				{/* review flipping button */}
				<button className="absolute top-1/2 -translate-y-1/2 p-2 -left-4 md:left-[5%] rounded-full shadow-md bg-white z-[1] text-textSecondary hover:text-primary">
					<FaChevronRight className="rotate-180 text-sm lg:text-base" />
				</button>
				<button className="absolute top-1/2 -translate-y-1/2 p-2 -right-4 md:right-[5%] rounded-full shadow-md bg-white z-[1] text-textSecondary hover:text-primary">
					<FaChevronRight className="text-sm lg:text-base" />
				</button>

				<div className="w-full flex justify-center items-center">
					{reviewCards[activeIndex]}
				</div>

				<div className="w-full flex justify-center items-center gap-4 mt-6">
					{myReviews.map((_, i) => (
						<button
							key={v4()}
							className="rounded-full h-3 w-3 md:h-5 md:w-5 overflow-hidden flex justify-center items-center"
						>
							<span
								className={`block h-3 w-3 md:h-4 md:w-4 hover:h-5 hover:w-5 transition-all duration-300 rounded-full 
								${i === 1 ? " bg-primary" : "bg-gray-200"}`}
							></span>
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
