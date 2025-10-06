"use client"

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const TeamCard = ({ name, role, image, bio }) => (
    <div className="bg-white/80 dark:bg-gray-900/70 rounded-lg shadow-md p-6 text-center">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
            <Image 
                width={112}
                height={112}
                src={image} 
                alt={`${name} photo`} 
                className="w-full h-full object-cover" 
                />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
        <p className="text-sm text-indigo-600 mb-2">{role}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{bio}</p>
    </div>
)

const AboutPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">                
                <div className="flex-1">
                    {/* Hero */}
                    <section className="relative overflow-hidden">
                        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                    We build meaningful digital experiences
                                </h1>
                                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                                    Enigma is a creative development studio focused on crafting elegant, usable
                                    interfaces and reliable web experiences. We partner with product teams to ship
                                    designs that scale and code that performs.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-5 rounded-md shadow">
                                        Work with us
                                    </Link>
                                    <a href="#mission" className="inline-block border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-3 px-5 rounded-md">Our mission</a>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <Image width={200} height={200} src="/images/portfolio3.jpg" alt="Team working" className="w-full h-72 object-cover" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission & Values */}
                    <section id="mission" className="container mx-auto px-6 py-16">
                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            <div className="md:col-span-1">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our mission</h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    To help companies turn ideas into polished digital products. We emphasize clarity,
                                    performance, and human-centered design on every project.
                                </p>
                            </div>

                            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white/80 dark:bg-gray-900/70 rounded-lg shadow">
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Design with purpose</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">We focus on usability and clarity to make products that people enjoy using.</p>
                                </div>

                                <div className="p-6 bg-white/80 dark:bg-gray-900/70 rounded-lg shadow">
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Reliable engineering</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">Clean, maintainable code that scales with your business needs.</p>
                                </div>

                                <div className="p-6 bg-white/80 dark:bg-gray-900/70 rounded-lg shadow">
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Collaborative process</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">We integrate with teams to deliver predictable outcomes on time.</p>
                                </div>

                                <div className="p-6 bg-white/80 dark:bg-gray-900/70 rounded-lg shadow">
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Continuous improvement</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">We learn from data and iterate rapidly to improve product-market fit.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats */}
                    <section className="bg-indigo-50 dark:bg-indigo-900/20 py-12">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">120+</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Projects delivered</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">10 yrs</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Average experience</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">98%</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Client satisfaction</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">24/7</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Support & maintenance</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team */}
                    <section className="container mx-auto px-6 py-16">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Meet the team</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A small, cross-functional group of designers and engineers who care about craft.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <TeamCard name="Mohit Singh" role="Founder & CEO" image="/images/char1.png" bio="Product-minded founder focused on design and delivery." />
                            <TeamCard name="Riya Kapoor" role="Lead Designer" image="/images/char4.png" bio="Designs delightful, accessible interfaces." />
                            <TeamCard name="Arjun Verma" role="Senior Engineer" image="/images/char45.webp" bio="Builds reliable systems and frontend architecture." />
                        </div>
                    </section>

                    {/* Call to action */}
                    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
                        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold">Ready to start your project?</h3>
                                <p className="mt-2 text-indigo-100">Let&apos;s discuss your product and how we can help make it real.</p>
                            </div>

                            <div className="flex gap-3">
                                <Link href="/contact" className="bg-white text-indigo-600 font-semibold py-3 px-5 rounded-md">Get in touch</Link>
                                <a href="/project" className="border border-white/30 text-white/90 py-3 px-5 rounded-md">See our work</a>
                            </div>
                        </div>
                    </section>
                </div>                
            </main>
            <Footer />
        </>
    )
}

export default AboutPage