import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'

const Header = () => {
    const [showMenu, setShowMenu] = useState()

  return (
    <header className="border-b border-slate-400 border-opacity-40">
        <div className="flex  flex-row items-center mx-auto px-5  justify-between py-5 max-w-full  container">
        <a href="/" className="text-white ">
            <Image
            src="/images/logo.png"
            width={130}
            height={0}
            alt="logo"
            />
        </a>
        <nav className="hidden sm:flex justify-between items-center gap-8 transition-all ">
            <a href="#" className="text-white hover:text-red-400">Services</a>
            <a href="#" className="text-white hover:text-red-400">Projects</a>
            <a href="#" className="text-white hover:text-red-400">About Us</a>
            <a href="#" className="text-white hover:text-red-400">Contact Us</a>
        </nav>

        <button href="#" className="bg-red-400 px-7 py-3 text-white rounded-[4px] hover:opacity-90 transition-all">Contact Now</button>
        
        <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="sm:hidden font-bold text-xl hover:text-gray-500"
            >
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
            </button>
            { showMenu && (
            <>
                <a href="#" className="hover:text-gray-500">
                Home
                </a>
                <a href="#" className="hover:text-gray-500">
                About
                </a>
                <a href="#" className="hover:text-gray-500">
                Contact
                </a>
            </>
            )}
        </nav>
        </div>
        
    </header>
  )
}

export default Header