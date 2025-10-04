import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'

const Header = () => {
    const [showMenu, setShowMenu] = useState()

  return (
    <header className="border-b border-slate-400 border-opacity-40 relative">
        { showMenu && (
            <div className='transition ease-in duration-300    sm:hidden bg-black h-[100vh] w-[300px] z-20 fixed'>
                <a href="/" className="text-white bg-black block py-5 px-5 border-b border-slate-400 border-opacity-20 ">
                <Image
                src="/images/logo.png"
                width={130}
                height={0}
                alt="logo"
                /></a>
                <div className='w-full py-4 px-4 text-white text-lg'>
                    <ul>
                        <li className='border-b py-3 border-slate-400 border-opacity-20'><a href="#" className="hover:text-gray-500 uppercase">Home</a></li>
                        <li className='border-b py-3 border-slate-400 border-opacity-20'><a href="#" className="hover:text-gray-500 uppercase">Services</a></li>
                        <li className='border-b py-3 border-slate-400 border-opacity-20'><a href="#" className="hover:text-gray-500 uppercase">About</a></li>
                        <li className='border-b py-3 border-slate-400 border-opacity-20'><a href="#" className="hover:text-gray-500 uppercase">Contact</a></li>
                    </ul>                                      
                </div>
            </div>
        )}
        

       
        <div className="flex  flex-row items-center mx-auto px-5  justify-between py-5 max-w-full  container">
            <a href="/" className="text-white ">
                <Image
                src="/images/logo.png"
                width={130}
                height={0}
                alt="logo"
                />
            </a>
            <nav className="hidden uppercase sm:flex justify-between items-center gap-8 transition-all ">
                <a href="/service" className="text-white hover:text-red-400">Services</a>
                <a href="/project" className="text-white hover:text-red-400">Projects</a>
                <a href="/about" className="text-white hover:text-red-400">About Us</a>
                <a href="/contact" className="text-white hover:text-red-400">Contact Us</a>
            </nav>

        <button href="#" className="bg-red-400 hidden md:block px-7 py-3 text-white rounded-[4px] hover:opacity-90 transition-all">Contact Now</button>
        
        <button
                onClick={() => setShowMenu(!showMenu)}
                className="sm:hidden 
                font-bold 
                text-xl
                absolute
                right-8
                text-white"
            >
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
            </button>        
        </div>
        
    </header>
  )
}

export default Header