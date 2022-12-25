import React from "react"
import { myFaqs } from "@/app/assets/data"
import { v4 } from "uuid"
import { FaqCard } from "./FaqCard"

export const FaqSection: React.FC = () => {
	return (
		<div className="mt-[12vh] w-full flex flex-col justify-start items-center">
			<h1 className="text-h1 text-dark mb-4 lg:mb-6 text-center w-full">
				<span className="text-primary">Frequently</span> Asked Questions
			</h1>
			<p className="max-w-3xl text-center text-lg mb-8">
				Checkout these Frequently Asked Questions before sending me an
				email.
			</p>

			{myFaqs.map((faq) => (
				<FaqCard key={v4()} {...faq} />
			))}
		</div>
	)
}
