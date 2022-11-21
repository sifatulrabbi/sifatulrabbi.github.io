import React, { useState } from "react"

import { ContactFormInfo } from "./contact-form-info"
import { Inputs } from "@/components"

export const ContactForm: React.FC = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [subject, setSubject] = useState("")
	const [startBudget, setStartBudget] = useState<number>()
	const [endBudget, setEndBudget] = useState<number>()

	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const convertStrToNum = (v: string): number | undefined => {
		let result = 0
		result = parseInt(v)
		if (result.toString() === "NaN") {
			return undefined
		}
		return result
	}

	return (
		<div className="max-w-full w-full h-full rounded-2xl border-2 border-primary shadow-lg bg-white p-4 mt-12 grid grid-cols-1 lg:grid-cols-[0.7fr_1fr]">
			<ContactFormInfo />
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col justify-start items-start p-4 lg:p-6 gap-6"
			>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full overflow-hidden">
					<Inputs.BasicInput
						name="fullname"
						label="Name"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
					/>
					<Inputs.BasicInput
						name="email"
						label="Email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
					/>
				</div>
				<Inputs.BasicInput
					name="subject"
					label="Subject"
					placeholder="Enter the subject/title"
					value={subject}
					onChange={(e) => setSubject(e.currentTarget.value)}
				/>

				<div className="flex flex-col justify-start items-start gap-6 mt-2">
					<h6 className="text-base lg:text-lg font-medium text-dark">
						What kind of service do you need?
					</h6>
					<div></div>
				</div>

				<div className="w-full flex flex-col justify-start items-start gap-6 mt-2">
					<h6 className="text-base lg:text-lg font-medium text-dark">
						What is your initial budget?
					</h6>
					<div className="w-full grid grid-cols-2 gap-6">
						<Inputs.BasicInput
							name="from$"
							label="Starting from"
							type="number"
							value={startBudget}
							onChange={(e) =>
								setStartBudget(
									convertStrToNum(e.currentTarget.value),
								)
							}
							placeholder="$500"
						/>
						<Inputs.BasicInput
							name="to$"
							label="To"
							type="number"
							value={endBudget}
							onChange={(e) =>
								setEndBudget(
									convertStrToNum(e.currentTarget.value),
								)
							}
							placeholder="$10,000"
						/>
					</div>
				</div>
			</form>
		</div>
	)
}
