import Link from "next/link"
import React from "react"

import {NavbarMenu} from "./navbar-menu"

export const Navbar: React.FC = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 lg:h-[80px] border-b-[1px] border-slate-100 bg-white z-[100] flex flex-row items-center px-4 md:px-[10vw] justify-between">
			<Link href="/">
				<a className="flex justify-center items-end w-max h-max">
					<span className="font-bold text-xl uppercase">Sifatul</span>
					<span className="text-primary font-bold">.dev</span>
				</a>
			</Link>
			<NavbarMenu />
		</nav>
	)
}
