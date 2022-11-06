import React from "react"

export const ScrollDownIndicator: React.FC = () => {
	return (
		<div className="relative w-6 h-12 border-2 border-textSecondary rounded-full">
			<div className="scroll-indicator"></div>
		</div>
	)
}
