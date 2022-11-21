import React from "react"
import { ContactForm } from "./contact-form"

export const ContactsSection: React.FC = () => {
	return (
		<div className="relative mt-[6vh] py-[12vh] w-full flex flex-col justify-start-start items-center overflow-hidden">
			<h1 className="text-h1 text-dark mb-4 lg:mb-6">
				Get in <span className="text-primary">Touch</span>
			</h1>
			<p className="text-lg w-full text-center">
				Let&apos;s talk about your project!
			</p>
			<ContactForm />
		</div>
	)
}
