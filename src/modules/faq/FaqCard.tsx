import React, { useState } from "react"
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md"

export const FaqCard: React.FC<{
	question: string
	answer: string
}> = ({ question, answer }) => {
	const [expand, setExpand] = useState(false)

	const toggleFaq = () => {
		setExpand((p) => !p)
	}

	return (
		<div className="p-6 bg-white flex flex-col justify-start items-start w-full lg:max-w-[50vw] max-w-[100vw] md:max-w-[70vw] xl:max-w-[40vw] shadow-lg first:rounded-t-lg last:rounded-b-lg">
			<button
				onClick={toggleFaq}
				className="w-full text-dark mb-2 flex flex-row justify-between items-center"
			>
				{question}
				{expand ? (
					<MdOutlineRemove className="text-primary text-2xl" />
				) : (
					<MdOutlineAdd className="text-primary text-2xl" />
				)}
			</button>
			<div className="hidden">
				<p>{answer}</p>
			</div>
		</div>
	)
}
