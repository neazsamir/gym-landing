import { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa";
export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	
	return (
		<header className="bg-white w-full fixed top-0 left-0 text-black z-10">
			<div className="px-4 py-3 max-w-7xl mx-auto flex justify-between items-center">
				<figure><img className="h-[40px]" src="logo.png" /></figure>
			<nav className={`font-light fixed h-screen top-0 md:static md:h-fit bg-white w-[250px] p-5 md:p-0 z-30 transition-left duration-500 ease-in ${isOpen ? "left-0" : "left-[-500px]"}`}>
			<ul className="flex flex-col items-start justify-center md:flex-row md:items-center gap-5">
			<li><a href="#home" className="hover:text-primary transition duration-300 ease-in">Home</a></li>
			<li><a href="#about" className="hover:text-primary transition duration-300 ease-in">About</a></li>
			<li><a href="#services" className="hover:text-primary transition duration-300 ease-in">Services</a></li>
			<li><a href="#pricing" className="hover:text-primary transition duration-300 ease-in">Pricing</a></li>
			<li><a href="#blog" className="hover:text-primary transition duration-300 ease-in">Blog</a></li>
			<li><a href="#contact" className="hover:text-primary transition duration-300 ease-in">Contact</a></li>
			</ul>
			<div className="md:hidden mt-5"><GetStarted /></div>
			</nav>
			<div className="hidden md:block"><GetStarted /></div>
			<button className="md:hidden" onClick={toggleMenu}>
			<FaBars className="text-3xl" />
			</button>
			</div>
			{isOpen && (
  <div onClick={toggleMenu} className="bg-black fixed top-0 left-0 right-0 bottom-0 z-20 opacity-60 transition-opacity duration-300 ease-in"></div>
)}
		</header>
	)
}

const GetStarted = () => {
	return <a className="text-black font-open-sans font-bold bg-primary px-4 py-1 rounded-3xl hover:bg-secondary transition duration-300 ease-in" href="#">GET STARTED</a>
}