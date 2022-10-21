import React, {useEffect, useState} from "react"

interface Props {
	size?: "big" | "small" | "normal"
	className?: string
	children: React.ReactNode
	type?: "primary" | "secondary" | "white" | "btn"
}

export const Button: React.FC<Props> = ({
	size = "normal",
	className,
	children,
	type = "btn",
}) => {
	const [baseClasses, setBaseClasses] = useState("")

	useEffect(() => {
		let classes = ""

		switch (type) {
			case "primary":
				classes += "bg-"
				break
			case "secondary":
				break
			case "white":
				break
			default:
				break
		}

		switch (size) {
			case "big":
				break
			case "small":
				break
			default:
				break
		}

		setBaseClasses(classes)
	}, [size, type])

	return (
		<button
			className={`rounded-lg flex flex-row justify-center items-center gap-2 text-base ${baseClasses} ${className}`}
		>
			{children}
		</button>
	)
}
