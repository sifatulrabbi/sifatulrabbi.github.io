import React, { useState } from "react"
import type { IInputGroup } from "@/interfaces"

export const Textarea: React.FC<IInputGroup<string, HTMLTextAreaElement>> = (
	p,
) => {
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
			<textarea
				id={p.name}
				name={p.name}
				value={p.value}
				onChange={p.onChange}
				required={p.required}
				placeholder={p.placeholder}
				className={`w-full outline-none border-b-2 py-1 text-sm text-dark resize-y min-h-[50px]
				${isFocused ? "focus:border-primary " : "border-textSecondary"}`}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</div>
	)
}
