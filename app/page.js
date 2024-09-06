"use client"
import { useEffect, useRef, useState } from "react"
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { gsap } from "gsap";
import { TextPlugin,ScrollTrigger } from "gsap/all";
import Image from 'next/image'
import Link from "next/link";
import { FaArrowLeftLong  } from "react-icons/fa6";


gsap.registerPlugin(TextPlugin,ScrollTrigger);

const Page = () => {
    const [showMenu, setShowMenu] = useState()
    const textRefs = useRef([]);
    const textRefsHeading = useRef([]);
    const textRefsWork = useRef([]);
    const textRefsExpertise = useRef([]);

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


        },[])



    return (
    <>
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
                    <div className="marquee__content">Data driven user focused value based. Data driven user focused value based. </div>
                </div>
            </div>                       
        </section>

        <section className="section-3 py-[120px] ">
            <div className="container mx-auto text-white ">
                <div className="flex">
                    <div className="w-3/12">
                        <h2 ref={(el) => (textRefsHeading.current[1] = el)}>1. Who are we?</h2>
                    </div>

                    <div  className="w-9/12 text-6xl indent-[210px]">
                        <p ref={(el) => (textRefsHeading.current[2] = el)}>A creative web design and branding agency based in Lucknow, established in 2017, known for delivering innovative solutions, fostering strong client relationships, and earning recognition for excellence.
                        </p>    
                        
                        <Link ref={(el) => (textRefsHeading.current[3] = el)} href="/" className="bg-red-400 btn px-6 py-3 tracking-[0.5px] text-white rounded-[4px] hover:opacity-90 transition-all text-lg">Read More</Link>
                    </div>                    
                </div>                   
            </div>            
        </section>

        <section className="section-4 py-[120px] ">
            <div className="container mx-auto text-white ">
                <div className="flex">
                    <div className="w-3/12">
                        <h2 ref={(el) => (textRefsWork.current[0] = el)}>2. Our Work</h2>
                    </div>

                    <div className="w-9/12 text-6xl indent-[210px] text-right">
                        <p ref={(el) => (textRefsWork.current[1] = el)}>Take a look at our projects</p>                            
                    </div>                    
                </div> 
                <div className="grid gap-10 grid-cols-2 mt-20">
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
                <div className="flex">
                    <div className="w-3/12">
                        <h2 ref={(el) => (textRefsExpertise.current[0] = el)}>3. Our Expertise</h2>
                    </div>

                    <div className="w-9/12">
                        <div className="text-6xl indent-[210px] text-right">
                            <p ref={(el) => (textRefsExpertise.current[1] = el)}>How we take your business to the next level</p>                            
                        </div>

                        <div className="w-100 py-20">
                           <h3 ref={(el) => (textRefsExpertise.current[2] = el)} className="text-8xl border-b border-gray-500 border-opacity-45 pb-8 mb-8">UI/UX</h3> 
                           <h3 ref={(el) => (textRefsExpertise.current[3] = el)} className="text-8xl border-b border-gray-500 border-opacity-45 pb-8 mb-8">Web Development</h3> 
                           <h3 ref={(el) => (textRefsExpertise.current[4] = el)} className="text-8xl border-b border-gray-500 border-opacity-45 pb-8 mb-8">SEO</h3> 
                           <h3 ref={(el) => (textRefsExpertise.current[5] = el)} className="text-8xl border-b border-gray-500 border-opacity-45 pb-8 mb-8">CMS</h3> 
                           <h3 ref={(el) => (textRefsExpertise.current[6] = el)} className="text-8xl border-b border-gray-500 border-opacity-45 pb-8 mb-8">ECommerce </h3> 
                           <h3 ref={(el) => (textRefsExpertise.current[7] = el)} className="text-8xl border-b border-gray-500 border-opacity-45 pb-8 mb-8">Mobile Apps</h3> 
                        </div>                        
                    </div>                    
                </div> 

            </div>
        </section>

    </>
  )
}

export default Page