"use client"
import Image from 'next/image'
import React, { useEffect,useRef  } from 'react'
import { FaPhoneSquareAlt, FaFacebook, FaInstagram  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";
import { TextPlugin,ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

const Footer = () => {

    const textRefsFooter = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            textRefsFooter.current,
                { y: 100, opacity: 0 }, // Start below and invisible
                {
                    y: 0, // Animate to original position
                    opacity: 1,
                    duration: 1, // Animation duration
                    ease: "power2.out", // Easing function
                    stagger: 0.2, // Delay between animations
                    scrollTrigger: {
                    trigger: textRefsFooter.current, // Element that triggers the animation
                    start: "top 80%", // When the element is 80% of the way down the viewport
                    end: "bottom 20%", // When the bottom reaches 20% of the viewport
                    toggleActions: "play none none none", // Only play the animation once
                    },
                }
            );
    },[])

  return (
    <footer className="m-10 pb-0 bg-gray-900 bg-opacity-30">
        <div className=" container mx-auto p-10 rounded-md ">
            <div className=" text-gray-300 mb-20 ">
                <div className="flex  justify-center  min-h-80 items-center">
                    <div className="text-center">
                        <h3 className="text-5xl mb-4 text-white" ref={(el) => (textRefsFooter.current[0] = el)}>Tell us about your project</h3>
                        <p className="text-lg mb-4" ref={(el) => (textRefsFooter.current[1] = el)}>Whether you are planning a large web or mobile app project or a small one.<br/>
Enigma Info Systems will help you with the right foot to start with right tools and technologies.
</p>
                        <div ref={(el) => (textRefsFooter.current[2] = el)} >
                        <button href="#" className="bg-red-400 px-7 py-2 mt-4 text-lg text-white rounded-[4px] hover:opacity-90 transition-all">Let&apos;s Discuss</button>
                        </div>
                    </div>
                </div>
                <hr className="opacity-10" />
            </div>
            <div className="grid grid-cols-4">
                <div className="logo ">
                    <Image
                    src="/images/logo.png"
                    width={130}
                    height={0}
                    alt="logo"
                    />
                    <div className="flex text-gray-300 mt-7">
                        <div className="pt-1"><FaPhoneSquareAlt /></div>
                        <div className="ps-3"><a href="phone:+91-9519262619">+91-9519262619</a></div>
                    </div>

                    {/* <div className="flex text-white mt-3">
                        <div className="pt-1"><FaPhoneSquareAlt /></div>
                        <div className="ps-3">+91-9519262619</div>
                    </div> */}

                    <div className="flex text-gray-300 mt-3">
                        <div className="pt-1"><HiOutlineMail /></div>
                        <div className="ps-3">
                            <a href="mailto:info@enigmainfosystems.com">info@enigmainfosystems.com</a>
                        </div>
                    </div>   
                </div>
                <div>
                    <h3 className="text-2xl text-red-400 mb-4 ">Services</h3>
                    <ul className="text-gray-300 leading-8 text-lg ">
                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Logo & Branding</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Website Development</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Mobile App Development</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Seo Services</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">CMS</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">eCommerce</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl text-red-400 mb-4">Explore</h3>
                    <ul className="text-gray-300 leading-8 text-lg">
                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Home</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">About Us</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Services</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Our Work</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-red-400 transition-all">Blog</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl text-red-400 mb-4">Follow Us</h3>
                    <div className="flex">
                        <a href="#" className="hover:bg-black mr-3 transition-all w-8 h-8 bg-red-400 text-white rounded flex justify-center items-center">
                            <FaInstagram />
                        </a>

                        <a href="#" className="hover:bg-black mr-3 transition-all w-8 h-8 bg-red-400 text-white rounded flex justify-center items-center">
                            <FaFacebook />
                        </a>

                        <a href="#" className="hover:bg-black mr-3 transition-all w-8 h-8 bg-red-400 text-white rounded flex justify-center items-center">
                            <IoLogoLinkedin />
                        </a>
                        
                    </div>
                </div>                    
            </div>
            <hr className="opacity-10 my-10" />
            <div className="text-center text-gray-300">
                &copy; Enigma Info Systems. All rights reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer