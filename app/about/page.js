 "use client"
import { useState } from "react"
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";


const page = () => {
    const [showMenu, setShowMenu] = useState()

  return (
    <>
        <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 ">
            <a href="/" className="">Title</a>
            <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
                <a href="#" className="hover:text-gray-500">Home</a>
                <a href="#" className="hover:text-gray-500">About</a>
                <a href="#" className="hover:text-gray-500">Services</a>
                <a href="#" className="hover:text-gray-500">Contact</a>
            </nav>
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
        </header>
    </>
  )
}

export default page