"use client"
import { useEffect, useRef} from "react"
import { gsap } from "gsap";
import Image from 'next/image'
import Link from "next/link";
import Header from "./components/Header";
import { TextPlugin,ScrollTrigger } from "gsap/all";
import { FaArrowLeftLong  } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaFacebook, FaInstagram  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";



gsap.registerPlugin(TextPlugin,ScrollTrigger);

const Page = () => {
    const textRefs = useRef([]);
    const textRefsHeading = useRef([]);
    const textRefsWork = useRef([]);
    const textRefsExpertise = useRef([]);
    const textRefsFooter = useRef([]);

    useEffect(function(){    
        const marquee = document.querySelectorAll('.marquee')
        if(!marquee) return
        marquee.forEach(item => {
            const marqueeInner = item.querySelector('.marquee__inner')
            const marqueeContent = marqueeInner.querySelector('.marquee__content')
            
            // Duration
            const duration = item.getAttribute('data-marquee-duration')
            
            // Element Clone
            const marqueeContentClone = marqueeContent.cloneNode(true)
            marqueeInner.append(marqueeContentClone)
            
            // Marquee animation
            const marqueeContentAll = marqueeInner.querySelectorAll('.marquee__content')
            marqueeContentAll.forEach(element => {
                gsap.to(element, {
                    x: "-101%",
                    repeat: -1,
                    duration: duration,
                    ease: 'linear'
                })
            })
        })

        gsap.fromTo(
            textRefs.current,
            { y: 100, opacity: 0 },  // Start below and invisible
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 } 
        );

        gsap.fromTo(
            textRefsHeading.current,
            { y: 100, opacity: 0 }, // Start below and invisible
            {
              y: 0, // Animate to original position
              opacity: 1,
              duration: 1, // Animation duration
              ease: "power2.out", // Easing function
              stagger: 0.2, // Delay between animations
              scrollTrigger: {
                trigger: textRefsHeading.current, // Element that triggers the animation
                start: "top 80%", // When the element is 80% of the way down the viewport
                end: "bottom 20%", // When the bottom reaches 20% of the viewport
                toggleActions: "play", // Only play the animation once
              },
            }
        );

        gsap.fromTo(
            textRefsWork.current,
            { y: 100, opacity: 0 }, // Start below and invisible
            {
              y: 0, // Animate to original position
              opacity: 1,
              duration: 1, // Animation duration
              ease: "power2.out", // Easing function
              stagger: 0.2, // Delay between animations
              scrollTrigger: {
                trigger: textRefsWork.current, // Element that triggers the animation
                start: "top 80%", // When the element is 80% of the way down the viewport
                end: "bottom 20%", // When the bottom reaches 20% of the viewport
                toggleActions: "play", // Only play the animation once
              },
            }
        );

        gsap.fromTo(
        textRefsExpertise.current,
            { y: 100, opacity: 0 }, // Start below and invisible
            {
                y: 0, // Animate to original position
                opacity: 1,
                duration: 1, // Animation duration
                ease: "power2.out", // Easing function
                stagger: 0.2, // Delay between animations
                scrollTrigger: {
                trigger: textRefsExpertise.current, // Element that triggers the animation
                start: "top 80%", // When the element is 80% of the way down the viewport
                end: "bottom 20%", // When the bottom reaches 20% of the viewport
                toggleActions: "play none none none", // Only play the animation once
                },
            }
        );

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
    <>
        <Header/>

        <section className="section-1">
            <div className="max-w-7xl mx-auto hero container relative px-5">
                <div className="flex items-center min-h-[800px]" >
                    <div className="mt-[-40px]">
                        <h1 className="text-[7em] leading-none text-white" ref={(el) => (textRefs.current[0] = el)}>A web design and </h1>
                        <h1 className="text-[7em] leading-none text-white" ref={(el) => (textRefs.current[1] = el)}>branding</h1>
                        <h1 className="text-[7em] leading-none text-white" ref={(el) => (textRefs.current[2] = el)}>agency</h1>

                        <div ref={(el) => (textRefs.current[3] = el)} className="mt-5 ">
                            <Link  href="#" className="bg-red-400 px-6 py-3 tracking-[0.5px] text-white rounded-[4px] hover:opacity-90 transition-all text-lg">Book a free conultation</Link>
                        </div>
                    </div>                    
                </div>  

                {/* Animated Object */}
                <div className=" absolute top-[12%] bottom-0 right-0">
                   
                </div>
            </div>          
        </section>

        <section className="section-2 overflow-hidden mt-[-52px] bg-gradient-to-r from-red-500 to-transparent">
           <div className="marquee text-7xl  text-white " data-marquee-duration="30">
                <div className="marquee__inner flex gap-5 py-5">
                    <div className="marquee__content">Data-powered, user-first, and always value-driven. Data-powered, user-first, and always value-driven.</div>
                </div>
            </div>                       
        </section>

        <section className="section-3 py-[60px] ">
            <div className="container mx-auto text-white ">
                <div className="flex-row">
                    <div className="w-full py-5">
                        <h2 ref={(el) => (textRefsHeading.current[1] = el)}>1. Who are we?</h2>
                    </div>

                    <div  className="w-full text-6xl mb-10">
                        <p ref={(el) => (textRefsHeading.current[2] = el)}>A creative web design and branding agency based in Lucknow, established in 2017, known for delivering innovative solutions, fostering strong client relationships, and earning recognition for excellence.
                        </p>    
                    </div>    
                    <Link ref={(el) => (textRefsHeading.current[3] = el)} href="/" className="bg-red-400 btn px-6 py-3 tracking-[0.5px] text-white rounded-[4px] hover:opacity-90 transition-all text-lg">Read More</Link>                
                </div>                   
            </div>            
        </section>

        <section className="section-4 py-[60px] ">
            <div className="container mx-auto text-white ">
                <div className="flex-row">
                    <div className="w-full py-5">
                        <h2 ref={(el) => (textRefsWork.current[0] = el)}>2. Our Work</h2>
                    </div>

                    <div className="w-full text-6xl">
                        <p ref={(el) => (textRefsWork.current[1] = el)}>Take a look at our projects</p>                            
                    </div>                    
                </div> 
                <div className="grid gap-10 grid-cols-2 py-8">
                    <div className="card ">
                        <Image
                        ref={(el) => (textRefsWork.current[2] = el)}
                        className="w-100 rounded-2xl"
                        src="/images/construction-work.jpg"
                        width={1200}
                        height={0}
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt="logo"
                        />    

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[3] = el)}>
                            <h3 className="text-2xl py-3" >MMA Factory</h3>  
                            <a href="#" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>
                    </div>

                    <div className="card">

                        <Image
                            ref={(el) => (textRefsWork.current[4] = el)}
                            className="w-100 rounded-2xl"
                            src="/images/construction-work.jpg"
                            width={1200}
                            height={0}
                            style={{ width: '100%', height: 'auto' }} // optional
                            alt="logo"
                            />

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[5] = el)}>
                            <h3 className="text-2xl py-3">MMA Factory</h3>  
                            <a href="#" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>

                    </div>

                    <div className="card">

                        <Image
                        ref={(el) => (textRefsWork.current[6] = el)}
                            className="w-100 rounded-2xl"
                            src="/images/construction-work.jpg"
                            width={1200}
                            height={0}
                            style={{ width: '100%', height: 'auto' }} // optional
                            alt="logo"
                            />

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[7] = el)}>
                            <h3 className="text-2xl py-3">MMA Factory</h3>  
                            <a href="#" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>

                    </div>

                    <div className="card" ref={(el) => (textRefsWork.current[8] = el)}>

                        <Image
                            className="w-100 rounded-2xl"
                            src="/images/construction-work.jpg"
                            width={1200}
                            height={0}
                            style={{ width: '100%', height: 'auto' }} // optional
                            alt="logo"
                            />

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[9] = el)}>
                            <h3 className="text-2xl py-3">MMA Factory</h3>  
                            <a href="#" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>
                    </div>
                </div>                     
            </div>                     
        </section>

        <section className="section-5 py-[120px] bg-gray-900 bg-opacity-30">
            <div className="container mx-auto text-white ">
                <div className="flex-row">
                    <div className="w-full py-5">
                        <h2 ref={(el) => (textRefsExpertise.current[0] = el)}>3. Our Expertise</h2>
                    </div>

                    <div className="w-full">
                        <div className="text-6xl text-left">
                            <p ref={(el) => (textRefsExpertise.current[1] = el)}>How we take your business to the next level</p>                            
                        </div>

                        <div className="w-100 py-20 ">
                           <div ref={(el) => (textRefsExpertise.current[2] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3 className="text-8xl ">Logo & Branding</h3> 
                                <a href="#" className="w-20 h-20 arrow-link me-4 mt-8 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-7">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[3] = el)} className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3  className="text-8xl ">Website Development</h3> 
                                <a href="#" className="w-20 h-20 arrow-link me-4 mt-8 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-7">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[4] = el)} className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3  className="text-8xl ">Mobile App Development</h3> 
                                <a href="#" className="w-20 h-20 arrow-link me-4 mt-8 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-7">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div> 

                           <div ref={(el) => (textRefsExpertise.current[5] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3 className="text-8xl ">SEO Services</h3> 
                                <a href="#" className="w-20 h-20 arrow-link me-4 mt-8 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-7">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[6] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3 className="text-8xl ">CMS</h3> 
                                <a href="#" className="w-20 h-20 arrow-link me-4 mt-8 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-7">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[7] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3 className="text-8xl ">eCommerce</h3> 
                                <a href="#" className="w-20 h-20 arrow-link me-4 mt-8 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-7">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>
                        </div>                        
                    </div>                    
                </div> 
            </div>
        </section>
        <footer className="m-10 pb-0 bg-gray-900 bg-opacity-30">
            <div className=" container mx-auto p-10 rounded-md ">
                <div className=" text-gray-300 mb-20 ">
                    <div className="flex  justify-center  min-h-80 items-center">
                        <div className="text-center">
                            <h3 className="text-5xl mb-4 text-white" ref={(el) => (textRefsFooter.current[0] = el)}>Tell us about your project</h3>
                            <p className="text-lg mb-4" ref={(el) => (textRefsFooter.current[1] = el)}>Whether you’re planning a large web or mobile app project or a small one.<br/>
Enigma Info Systems will help you with the right foot to start with right tools and technologies.
</p>
                            <button href="#" ref={(el) => (textRefsFooter.current[2] = el)} className="bg-red-400 px-7 py-2 mt-4 text-lg text-white rounded-[4px] hover:opacity-90 transition-all">Let's Discuss</button>
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
                                <a href="mailto:mohitsingh2006@gmail.com">mohitsingh2006@gmail.com</a>
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
    </>
  )
}

export default Page