import React, {useState} from "react"

import Link from "next/link"
import {NavbarMenu} from "./navbar-menu"

export const Navbar: React.FC = () => {
	const [show, setShow] = useState(false)

	return (
		<nav className="fixed top-0 left-0 right-0 h-[60px] lg:h-[80px] border-b-[1px] border-slate-100 bg-white z-[100] flex flex-row items-center px-4 md:px-[10vw] justify-between">
			<Link href="/">
				<a className="flex justify-center items-end w-max h-max">
					<span className="font-bold text-xl uppercase">Sifatul</span>
					<span className="text-primary font-bold">.dev</span>
				</a>
			</Link>
			<NavbarMenu show={show} />
			<button
				name="nav button"
				onClick={() => setShow((p) => !p)}
				className="lg:hidden relative h-[16px] w-[25px] flex justify-center items-center"
			>
				<div
					className={`w-full h-[2px] bg-gray-600 absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in
					${show ? "top-1/2 -translate-y-1/2 -rotate-45" : "-translate-y-0 top-0"}`}
				/>
				<div
					className={`w-[80%] h-[2px] bg-gray-600 absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in
					${show ? "opacity-0 -right-full" : "opacity-100 -right-0"}`}
				/>
				<div
					className={`w-full h-[2px] bg-gray-600 absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in
					${show ? "top-1/2 -translate-y-1/2 rotate-45" : "-translate-y-full top-full"}`}
				/>
			</button>
		</nav>
	)
}
