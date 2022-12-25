import React, { useState } from "react"
import { myServices } from "@/app/assets/data"
import { mailerService } from "@/services"

import { ContactFormInfo } from "./contact-form-info"
import { Inputs } from "@/components"
import { v4 } from "uuid"
import { MdCircle, MdPanoramaFishEye, MdSend } from "react-icons/md"

export const ContactForm: React.FC = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [subject, setSubject] = useState("")
	const [startBudget, setStartBudget] = useState<number | string>("")
	const [endBudget, setEndBudget] = useState<number | string>("")
	const [serviceType, setServiceType] = useState("")

	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!name || !email || !subject || !message) {
			return
		}
		const { data, error } = await mailerService.sendEmail(
			subject,
			"<" + name + ">" + email,
			message,
		)
		if (!data || error) {
			console.error(error)
		}
		console.error(data)
	}

	const convertStrToNum = (v: string): number | undefined => {
		let result = 0
		result = parseInt(v)
		if (result.toString() === "NaN") {
			return undefined
		}
		return result
	}

	const getServiceNames = (): string[] => {
		return [...myServices.map((service) => service.name), "Other"]
	}

	return (
		<div className="max-w-full w-full h-full rounded-2xl border-2 border-primary shadow-lg bg-white p-4 mt-12 grid grid-cols-1 lg:grid-cols-[0.7fr_1fr]">
			<ContactFormInfo />
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col justify-start items-start p-4 lg:p-6 gap-6"
			>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full overflow-hidden">
					<Inputs.Input
						name="fullname"
						label="Name"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
						required
					/>
					<Inputs.Input
						name="email"
						label="Email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
						required
					/>
				</div>
				<Inputs.Input
					name="subject"
					label="Subject"
					placeholder="Enter the subject/title"
					value={subject}
					onChange={(e) => setSubject(e.currentTarget.value)}
					required
				/>

				<div className="flex flex-col justify-start items-start gap-2 mt-2">
					<h6 className="text-base lg:text-lg font-medium text-dark">
						What kind of service do you need?
					</h6>
					<div className="flex flex-row flex-wrap justify-start items-start gap-1">
						{getServiceNames().map((name) => (
							<button
								key={v4()}
								type="button"
								onClick={() => setServiceType(name)}
								className="flex flex-row justify-start items-center gap-2 max-w-max mr-2"
							>
								{serviceType === name ? (
									<MdCircle className="text-primary" />
								) : (
									<MdPanoramaFishEye />
								)}
								{name}
							</button>
						))}
					</div>
				</div>

				<div className="w-full flex flex-col justify-start items-start gap-2 mt-2">
					<h6 className="text-base lg:text-lg font-medium text-dark">
						What is your initial budget?
					</h6>
					<div className="w-full grid grid-cols-2 gap-6">
						<Inputs.Input
							name="from$"
							label="Starting from"
							type="number"
							value={startBudget}
							onChange={(e) =>
								setStartBudget(
									convertStrToNum(e.currentTarget.value) ||
										"",
								)
							}
							required
							placeholder="$500"
						/>
						<Inputs.Input
							name="to$"
							label="To"
							type="number"
							value={endBudget}
							onChange={(e) =>
								setEndBudget(
									convertStrToNum(e.currentTarget.value) ||
										"",
								)
							}
							required
							placeholder="$10,000"
						/>
					</div>
				</div>

				<div className="mt-2 w-full">
					<Inputs.Textarea
						name="message"
						label="Message"
						value={message}
						onChange={(e) => setMessage(e.currentTarget.value)}
						required
						placeholder="Write your message..."
					/>
				</div>

				<div className="w-full flex justify-end items-center">
					<button type="submit" className="btn btn-primary">
						<span className="block mr-2">Send</span>
						<MdSend />
					</button>
				</div>
			</form>
		</div>
	)
}
