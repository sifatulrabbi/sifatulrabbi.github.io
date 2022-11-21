import React, { useEffect, useState } from "react"
import { v4 } from "uuid"

import { FaChevronRight } from "react-icons/fa"
import { ReviewCard } from "./review-card"
import { myReviews } from "@/app/assets/data"

export const ReviewsSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const [prevIndex, setPrevIndex] = useState<number>(-1)
	const [isRight, setIsRight] = useState(true)

	const nextReview = () => {
		const newIndex = activeIndex + 1
		if (newIndex > myReviews.length - 1) {
			setActiveIndex(activeIndex)
		} else {
			setIsRight(true)
			setActiveIndex(newIndex)
			setPrevIndex(activeIndex)
		}
	}

	const prevReview = () => {
		const newIndex = activeIndex - 1
		if (newIndex < 0) {
			setActiveIndex(activeIndex)
		} else {
			setIsRight(false)
			setActiveIndex(newIndex)
			setPrevIndex(activeIndex)
		}
	}

	const updateActiveIndex = (i: number) => {
		if (activeIndex === i) return
		setPrevIndex(activeIndex)
		setActiveIndex(i)
		setIsRight(activeIndex < i)
	}

	return (
		<div className="w-full flex flex-col justify-start items-center">
			<h2 className="text-h2 mb-4">
				My <span className="text-primary">Happy</span> Clients
			</h2>
			<p className="opacity-80">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Dolorum, beatae quos.
			</p>
			{/* review viewer */}
			<div className="relative w-full flex flex-col justify-center items-center mt-10 gap-4 max-w-full">
				{/* review flipping button */}
				<button
					onClick={prevReview}
					className="z-[5] absolute top-1/2 -translate-y-1/2 p-2 -left-4 md:left-[5%] rounded-full shadow-md bg-white text-textSecondary hover:text-primary"
				>
					<FaChevronRight className="rotate-180 text-sm lg:text-base" />
				</button>
				<button
					onClick={nextReview}
					className="z-[5] absolute top-1/2 -translate-y-1/2 p-2 -right-4 md:right-[5%] rounded-full shadow-md bg-white text-textSecondary hover:text-primary"
				>
					<FaChevronRight className="text-sm lg:text-base" />
				</button>

				<div className="w-full flex justify-center items-center relative min-h-[600px]">
					{myReviews.map((review, index) => (
						<ReviewCard
							key={v4()}
							review={review}
							activeIndex={activeIndex}
							index={index}
							isRight={isRight}
							prevIndex={prevIndex}
						/>
					))}
				</div>

				<div className="w-full flex justify-center items-center gap-4 mt-6">
					{myReviews.map((_, i) => (
						<button
							key={v4()}
							onClick={() => updateActiveIndex(i)}
							className="rounded-full h-3 w-3 md:h-5 md:w-5 overflow-hidden flex justify-center items-center"
						>
							<span
								className={`block h-3 w-3 md:h-4 md:w-4 hover:h-5 hover:w-5 transition-all duration-300 rounded-full 
								${i === activeIndex ? " bg-primary" : "bg-gray-200"}`}
							></span>
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
