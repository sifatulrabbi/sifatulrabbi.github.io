import React from "react"
import { v4 } from "uuid"

import { NavMenuItem } from "./navmenu-item"
import { MdOutlineWbSunny } from "react-icons/md"

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "Projects", path: "#projects" },
	{ name: "Services", path: "#services" },
	{ name: "About", path: "#about" },
	{ name: "Contact", path: "#contact" },
]

export const NavbarMenu: React.FC<{ show: boolean }> = ({ show }) => {
	return (
		<ul
			className={`bg-white flex flex-col fixed top-[60px] left-0 items-start lg:flex-row justify-start lg:items-center gap-6 transition-[transform] duration-300 ease-in p-4 w-full md:px-[10vw]
			${show ? "-translate-x-0" : "-translate-x-full"}
			lg:relative lg:top-0 lg:left-0 lg:-translate-x-0 lg:p-0 lg:px-0 lg:w-max`}
		>
			{navItems.map(({ name, path }) => (
				<NavMenuItem key={v4()} name={name} path={path} />
			))}
			<button
				onClick={() => console.log("Get a quote")}
				className="btn btn-primary btn-small"
			>
				Get a Quote
			</button>
			<div className="hidden lg:block h-[1px] w-full lg:h-6 lg:w-[1px] bg-gray-300"></div>
			<button
				name="dark mode toggler"
				className="absolute top-4 right-4 md:right-[10vw] lg:relative lg:top-0 lg:right-0 rounded-full hover:bg-gray-100 p-2 text-xl"
			>
				<MdOutlineWbSunny />
			</button>
		</ul>
	)
}
