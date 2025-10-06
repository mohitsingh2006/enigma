import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'
import Link from 'next/link';

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
                        <li className='border-b py-3 border-slate-400 border-opacity-20'>
                            <Link href="/" title='Home' className="hover:text-gray-500 uppercase">Home</Link>
                        </li>
                        <li className='border-b py-3 border-slate-400 border-opacity-20'>
                            <Link href="/service" title='Services' className="hover:text-gray-500 uppercase">Services</Link>
                        </li>
                        <li className='border-b py-3 border-slate-400 border-opacity-20'>
                            <Link href="about" title='About' className="hover:text-gray-500 uppercase">About</Link>
                        </li>
                        <li className='border-b py-3 border-slate-400 border-opacity-20'>
                            <Link href="/contact" title='Contact' className="hover:text-gray-500 uppercase">Contact</Link>
                        </li>
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
                <Link href="/service" title='Services' className="text-white hover:text-red-400">Services</Link>
                <Link href="/project" title='Projects' className="text-white hover:text-red-400">Projects</Link>
                <Link href="/about" title='About Us'   className="text-white hover:text-red-400">About Us</Link>
                <Link href="/contact" title='Contact Us' className="text-white hover:text-red-400">Contact Us</Link>
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