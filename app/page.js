"use client"
import { useEffect, useRef} from "react"
import { gsap } from "gsap";
import Image from 'next/image'
import Link from "next/link";
import Header from "./components/Header";
import { TextPlugin,ScrollTrigger } from "gsap/all";
import { FaArrowLeftLong  } from "react-icons/fa6";
import Footer from "./components/Footer";


gsap.registerPlugin(TextPlugin,ScrollTrigger);

const Page = () => {
    const textRefs = useRef([]);
    const textRefsHeading = useRef([]);
    const textRefsWork = useRef([]);
    const textRefsExpertise = useRef([]);
    const textRef = useRef(null);
    const circleText = "Creating.Seamless.Experience.";

    useEffect(function(){   
        gsap.to(textRef.current, {
            rotation: 360,
            repeat: -1,
            duration: 20,
            ease: "linear"
        });

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
        <Header/>

        <section className="section-1">
            <div className="max-w-7xl mx-auto hero container relative px-5">
                <div className="flex items-center 
                        2xl:min-h-[800px] 
                        xl:min-h-[800px] 
                        lg:min-h-[800px]
                        md:min-h-[500px]
                        min-h-[500px]"
                    >
                    <div className="mt-[-40px]">
                        <h1 className="
                        text-[3em]
                        md:text-[3em] 
                        xl:text-[4.5em] 
                        lg:text-[3.5em] 
                        2xl:text-[5.5em] 
                        leading-tight text-white">
                            <span className="flex" ref={(el) => (textRefs.current[0] = el)}>Your business deserves</span>
                            <span className="flex" ref={(el) => (textRefs.current[1] = el)}> outstanding service</span>
                        </h1>
                        <p  ref={(el) => (textRefs.current[2] = el)} className="text-[1em] xl:text-[2.5em] lg:text-[2em] 2xl:text-[3em] text-white text-opacity-75">And we’re dedicated to providing it.</p>                        
                        <div ref={(el) => (textRefs.current[3] = el)} className="mt-8">
                            <Link  href="#" className="bg-red-400 px-6 py-3 tracking-[0.5px] text-white rounded-[4px] hover:opacity-90 transition-all text-lg">Book a free conultation</Link>
                        </div>
                    </div>                    
                </div>  

                {/* Animated Object */}
                <div className=" absolute hidden lg:block   bottom-0 
                    2xl:top-[8%]
                    2xl:right-20
                    xl:right-20
                    xl:top-[13%]
                    lg:right-[100px]
                    lg:top-[20%]
                    
                    ">
                    <Image
                        src="/images/logo.png"
                        width={160}
                        height={0}
                        className="absolute 
                        2xl:top-[262px] 
                        2xl:left-[224px] 
                        xl:top-[229px] 
                        xl:left-[177px]
                        lg:top-[175px] 
                        lg:left-[133px]
                        "
                        alt="logo"
                    />
                    <div
                        ref={textRef}
                        className="relative   
                        2xl:w-[600px] 
                        2xl:h-[600px] 
                        xl:w-[500px]
                        xl:h-[500px]
                        lg:w-[400px]
                        lg:h-[400px]
                        md:w-[300px]
                        md:h-[300px]
                        text-white rounded-full flex items-center justify-center"
                    >
                        {circleText.split("").map((char, index) => (
                        <span
                            key={index}
                            style={{ transform: `rotate(${index * 12.4}deg)` }}
                            className="rotate-text xl:origin-[] 2xl:origin-[0_280px]"
                        >
                            {char}
                        </span>
                        ))}
                    </div>
                </div>
            </div>          
        </section>

        <section className="section-2 overflow-hidden mt-[-52px] bg-gradient-to-r from-red-500 to-transparent">
           <div className="marquee 
            text-3xl
            md:text-4xl
            lg:text-5xl 
            xl:text-5xl
            2xl:text-7xl
           text-white 
           " data-marquee-duration="30">
                <div className="marquee__inner flex gap-5 py-5">
                    <div className="marquee__content">Data-powered, user-first, and always value-driven. Data-powered, user-first, and always value-driven.</div>
                </div>
            </div>                       
        </section>

        <section className="section-3 
            py-[30px]   
            sm:py-[30px] 
            md:py-[30px] 
            lg:py-[60px] 
            xl:py-[60px] 
            2xl:py-[60px]             
            px-5">
            <div className="container mx-auto text-white ">
                <div className="flex-row">
                    <div className="w-full py-5">
                        <h2 ref={(el) => (textRefsHeading.current[1] = el)}>1. Who are we?</h2>
                    </div>

                    <div  className="w-full 
                    text-2xl
                    md:text-4xl
                    lg:text-5xl 
                    xl:text-5xl
                    2xl:text-6xl
                    mb-10">
                        <p ref={(el) => (textRefsHeading.current[2] = el)}>A creative web design and branding agency based in Lucknow, established in 2017, known for delivering innovative solutions, fostering strong client relationships, and earning recognition for excellence.
                        </p>    
                    </div>    
                    <Link ref={(el) => (textRefsHeading.current[3] = el)} href="/" className="bg-red-400 btn px-6 py-3 tracking-[0.5px] text-white rounded-[4px] hover:opacity-90 transition-all text-lg">Read More</Link>                
                </div>                   
            </div>            
        </section>

        <section className="section-4 
            py-[30px]   
            sm:py-[30px] 
            md:py-[30px] 
            lg:py-[60px] 
            xl:py-[60px] 
            2xl:py-[60px]             
            px-5">
            <div className="container mx-auto text-white ">
                <div className="flex-row">
                    <div className="w-full py-5">
                        <h2 ref={(el) => (textRefsWork.current[0] = el)}>2. Our Work</h2>
                    </div>

                    <div className="w-full 
                        text-3xl
                        md:text-4xl
                        lg:text-5xl 
                        xl:text-5xl
                        2xl:text-6xl
                    ">
                        <p ref={(el) => (textRefsWork.current[1] = el)}>Take a look at our projects</p>                            
                    </div>                    
                </div> 
                
                <div className="grid gap-10 
                    2xl:grid-cols-2 
                    xl:grid-cols-2 
                    lg:grid-cols-2 
                    md:grid-cols-2 
                    sm:grid-cols-1 
                    py-8">
                    <div className="card ">
                        <Image
                        ref={(el) => (textRefsWork.current[2] = el)}
                        className="w-100 rounded-2xl"
                        src="/images/1portfolio.png"
                        width={1200}
                        height={0}
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt=""
                        />    

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[3] = el)}>
                            <h3 className="
                            text-xl
                            md:text-xl
                            lg:text-xl 
                            xl:text-2xl
                            2xl:text-2xl
                            py-3">MMA Factory</h3>  
                            <a href="https://mmafactory.com.au/" target="_blank" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>
                    </div>

                    <div className="card ">
                        <Image
                        ref={(el) => (textRefsWork.current[4] = el)}
                        className="w-100 rounded-2xl"
                        src="/images/portfolio23.png"
                        width={1200}
                        height={0}
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt=""
                        />    

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[5] = el)}>
                            <h3 className="
                            text-xl
                            md:text-xl
                            lg:text-xl 
                            xl:text-2xl
                            2xl:text-2xl
                            py-3">Kreecooper</h3>  
                            <a href="#" target="_blank" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>
                    </div>

                    <div className="card ">
                        <Image
                        ref={(el) => (textRefsWork.current[6] = el)}
                        className="w-100 rounded-2xl"
                        src="/images/squAREOFF.png"
                        width={1200}
                        height={0}
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt=""
                        />    

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[7] = el)}>
                            <h3 className="
                            text-xl
                            md:text-xl
                            lg:text-xl 
                            xl:text-2xl
                            2xl:text-2xl
                            py-3">Square Off</h3>  
                            <a href="https://squareoffnow.com/" target="_blank" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>
                    </div>

                    <div className="card" ref={(el) => (textRefsWork.current[8] = el)}>

                        <Image
                            className="w-100 rounded-2xl"
                            src="/images/woodcraft.png"
                            width={1200}
                            height={0}
                            style={{ width: '100%', height: 'auto' }} // optional
                            alt="logo"
                            />

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[9] = el)}>
                            <h3 className="
                            text-xl
                            md:text-xl
                            lg:text-xl 
                            xl:text-2xl
                            2xl:text-2xl
                            py-3">Woodcraft Pizza Company</h3>  
                            <a href="https://woodcraftpizzacompany.co.uk/" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>
                        </div>

                    <div className="card">

                        <Image
                            ref={(el) => (textRefsWork.current[10] = el)}
                            className="w-100 rounded-2xl"
                            src="/images/portfolio2.jpg"
                            width={1200}
                            height={0}
                            style={{ width: '100%', height: 'auto' }} // optional
                            alt=""
                            />

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[11] = el)}>
                            <h3 className="
                            text-xl
                            md:text-xl
                            lg:text-xl 
                            xl:text-2xl
                            2xl:text-2xl
                            py-3">Superior Concrete Finishes</h3>  
                            <a href="#" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>

                    </div>

                    <div className="card">

                        <Image
                        ref={(el) => (textRefsWork.current[12] = el)}
                            className="w-100 rounded-2xl"
                            src="/images/portfolio3.jpg"
                            width={1200}
                            height={0}
                            style={{ width: '100%', height: 'auto' }} // optional
                            alt="logo"
                            />

                        <div className="flex justify-between py-3" ref={(el) => (textRefsWork.current[13] = el)}>
                            <h3 className="
                            text-xl
                            md:text-xl
                            lg:text-xl 
                            xl:text-2xl
                            2xl:text-2xl
                            py-3">Inscyd</h3>  
                            <a href="https://inscyd.com" className="w-10 h-10 arrow-link me-4 mt-3 bg-red-400 hover:opacity-90 rounded-[50%] inline-block p-3"><FaArrowLeftLong />
                            </a>
                        </div>

                    </div>

                   
                </div>                     
            </div>                     
        </section>

        <section className="section-5 
            py-[30px]   
            sm:py-[30px] 
            md:py-[30px] 
            lg:py-[60px] 
            xl:py-[60px] 
            2xl:py-[100px]             
            px-5
        bg-gray-900 bg-opacity-30">
            <div className="container mx-auto text-white ">
                <div className="flex-row">
                    <div className="w-full py-5">
                        <h2 ref={(el) => (textRefsExpertise.current[0] = el)}>3. Our Expertise</h2>
                    </div>

                    <div className="w-full relative">
                        <div className="
                         text-3xl md:text-4xl lg:text-5xl  xl:text-5xl 2xl:text-6xl text-left">
                            <p ref={(el) => (textRefsExpertise.current[1] = el)}>How we take your business to the next level</p>                            
                        </div>

                        <div className="w-100 py-10 sm:py-10 md:py-10 lg:py-20">
                           <div ref={(el) => (textRefsExpertise.current[2] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8 relative">
                                <h3 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">Logo & Branding</h3> 
                                <a href="#" 
                                className="
                                absolute right-0 top-[-40px] 2xl:top-[-20px]                                
                                arrow-link 
                                me-4 
                                mt-8 
                                bg-red-400 
                                hover:opacity-90 rounded-[50%] inline-block 
                                p-3
                                sm:p-3
                                md:p-4
                                lg:p-5 
                                xl:p-7
                                2xl:p-7
                                ">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[3] = el)} className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3  className="text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-8xl">Website Development</h3> 
                                <a href="#" 
                                className="
                                absolute right-0 top-[-40px] 2xl:top-[-20px]                                
                                arrow-link 
                                me-4 
                                mt-8 
                                bg-red-400 
                                hover:opacity-90 rounded-[50%] inline-block 
                                p-3
                                sm:p-3
                                md:p-4
                                lg:p-5 
                                xl:p-7
                                2xl:p-7
                                ">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[4] = el)} className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3  className="text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-8xl ">Mobile App Development</h3> 
                                <a href="#" 
                                className="
                                absolute right-0 top-[-40px] 2xl:top-[-20px]                                
                                arrow-link 
                                me-4 
                                mt-8 
                                bg-red-400 
                                hover:opacity-90 rounded-[50%] inline-block 
                                p-3
                                sm:p-3
                                md:p-4
                                lg:p-5 
                                xl:p-7
                                2xl:p-7
                                ">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div> 

                           <div ref={(el) => (textRefsExpertise.current[5] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-8xl">SEO Services</h3> 
                                <a href="#" 
                                className="
                                absolute right-0 top-[-40px] 2xl:top-[-20px]                                
                                arrow-link 
                                me-4 
                                mt-8 
                                bg-red-400 
                                hover:opacity-90 rounded-[50%] inline-block 
                                p-3
                                sm:p-3
                                md:p-4
                                lg:p-5 
                                xl:p-7
                                2xl:p-7
                                ">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[6] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-8xl ">CMS</h3> 
                                <a href="#" 
                                className="
                                absolute right-0 top-[-40px] 2xl:top-[-20px]                                
                                arrow-link 
                                me-4 
                                mt-8 
                                bg-red-400 
                                hover:opacity-90 rounded-[50%] inline-block 
                                p-3
                                sm:p-3
                                md:p-4
                                lg:p-5 
                                xl:p-7
                                2xl:p-7
                                ">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>

                           <div ref={(el) => (textRefsExpertise.current[7] = el)}  className="flex justify-between border-b border-gray-500 border-opacity-45 pb-8 mb-8">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-8xl ">eCommerce</h3> 
                                <a href="#" 
                                className="
                                absolute right-0 top-[-40px] 2xl:top-[-20px]                                
                                arrow-link 
                                me-4 
                                mt-8 
                                bg-red-400 
                                hover:opacity-90 rounded-[50%] inline-block 
                                p-3
                                sm:p-3
                                md:p-4
                                lg:p-5 
                                xl:p-7
                                2xl:p-7
                                ">
                                    <FaArrowLeftLong className="text-2xl"  />
                                </a>
                           </div>
                        </div>                        
                    </div>                    
                </div> 
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Page