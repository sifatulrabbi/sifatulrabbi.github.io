import React, { useState } from "react"
import type { IInputGroup } from "@/interfaces"

export const BasicInput: React.FC<IInputGroup> = (p) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<div className="w-full flex flex-col justify-start items-start">
			{p.label && (
				<label
					htmlFor={p.name}
					className={`text-sm mb-1
					${isFocused ? "text-primary" : "text-textSecondary"}`}
				>
					{p.label}
				</label>
			)}
			<input
				id={p.name}
				name={p.name}
				type={p.type || "text"}
				value={p.value}
				onChange={p.onChange}
				placeholder={p.placeholder}
				className={`w-full outline-none border-b-2 py-1 text-sm text-dark
				${isFocused ? "focus:border-primary " : "border-textSecondary"}`}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</div>
	)
}
