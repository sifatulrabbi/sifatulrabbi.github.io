import React from "react"
import {v4} from "uuid"

import {NavMenuItem} from "./navmenu-item"

const navItems = [
	{name: "Home", path: "/"},
	{
		name: "Projects",
		path: "#projects",
		nestedItems: [
			{name: "Backend", path: "#projects"},
			{name: "Frontend", path: "#projects"},
		],
	},
	{name: "Services", path: "#services"},
	{name: "About", path: "#about"},
	{name: "Contact", path: "#contact"},
]

export const NavbarMenu: React.FC = () => {
	return (
		<ul className="flex flex-row justify-start items-center gap-2">
			{navItems.map(({name, path, nestedItems}) => (
				<NavMenuItem
					key={v4()}
					name={name}
					path={path}
					nestedItems={nestedItems}
				/>
			))}
		</ul>
	)
}
