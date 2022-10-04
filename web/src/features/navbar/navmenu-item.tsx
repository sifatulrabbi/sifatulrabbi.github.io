import React, {useState} from "react"
import {v4} from "uuid"

import Link from "next/link"

interface Props {
	name: string
	path: string
	nestedItems?: {name: string; path: string}[]
}

export const NavMenuItem: React.FC<Props> = ({name, path, nestedItems}) => {
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<li
			className="relative"
			onMouseMove={() => setShowDropdown(true)}
			onMouseLeave={() => setShowDropdown(false)}
		>
			<Link href={path}>
				<a className="navbar-link">{name}</a>
			</Link>
			{nestedItems && nestedItems.length > 0 && (
				<div
					className="absolute top-full right-0 flex flex-col justify-start items-start p-2 rounded-lg shadow bg-white transition-opacity duration-300"
					style={{opacity: showDropdown ? "1" : "0"}}
				>
					{nestedItems.map(({name, path}) => (
						<Link href={path} key={v4()}>
							<a className="flex flex-row justify-start items-center gap-2 px-2 py-1 text-sm transition-colors duration-300 hover:text-dark">
								{name}
							</a>
						</Link>
					))}
				</div>
			)}
		</li>
	)
}
