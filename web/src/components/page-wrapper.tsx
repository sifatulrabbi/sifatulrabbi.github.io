import React from "react"
import Head from "next/head"

interface Props {
	children: React.ReactNode
	title?: string
}

export const PageWrapper: React.FC<Props> = ({children, title}) => {
	return (
		<div className="flex flex-col justify-start items-start px-4 md:px-[10vw] mt-[60px] lg:mt-[80px] p-4">
			<Head>
				<title>
					{title ? "Sifatul.dev | " + title : "Sifatul.dev"}
				</title>
			</Head>
			{children}
		</div>
	)
}
