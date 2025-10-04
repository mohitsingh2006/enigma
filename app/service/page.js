"use client"

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const page = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom web applications built with cutting-edge technologies",
            icon: "🌐",
            features: ["Responsive Design", "Modern Frameworks", "SEO Optimization"]
        },
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications",
            icon: "📱",
            features: ["iOS & Android", "React Native", "Performance Optimization"]
        },
        {
            title: "UI/UX Design",
            description: "User-centered design that delivers exceptional experiences",
            icon: "🎨",
            features: ["User Research", "Wireframing", "Prototyping"]
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and deployment",
            icon: "☁️",
            features: ["AWS/Azure", "Cloud Migration", "DevOps"]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />
            
            {/* Hero Section */}
            <main className="flex-1">
                <section className="relative py-20 bg-gradient-to-r from-rose-400 to-rose-500 dark:from-rose-500 dark:to-rose-600">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Our Professional Services
                            </h1>
                            <p className="text-xl text-rose-100 mb-8">
                                Empowering businesses with cutting-edge solutions and exceptional expertise
                            </p>
                            <Link href="/contact" 
                                className="inline-block bg-white text-rose-500 font-medium py-3 px-5 rounded-md shadow hover:bg-gray-50 transition duration-300">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-gray-800"></div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white/80 dark:bg-gray-900/70 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                                                <svg className="w-4 h-4 mr-2 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-gray-100 dark:bg-gray-800/50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            What Our Clients Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: "The team delivered exceptional results that exceeded our expectations.",
                                    author: "John Smith",
                                    role: "CEO, TechCorp"
                                },
                                {
                                    quote: "Professional, responsive, and incredibly skilled. Highly recommended!",
                                    author: "Sarah Johnson",
                                    role: "Marketing Director, Innovate Inc"
                                },
                                {
                                    quote: "Their expertise transformed our business processes completely.",
                                    author: "Michael Brown",
                                    role: "CTO, Future Systems"
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="bg-white/80 dark:bg-gray-900/70 rounded-lg p-6 shadow-md">
                                    <div className="text-gray-600 dark:text-gray-300 italic mb-4">&quot;{testimonial.quote}&quot;</div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.author}</div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-rose-400 to-rose-500 dark:from-rose-500 dark:to-rose-600">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss how our services can help you achieve your business goals
                        </p>
                        <Link href="/contact"
                            className="inline-block bg-white text-rose-500 font-medium py-3 px-5 rounded-md shadow hover:bg-gray-50 transition duration-300">
                            Schedule a Consultation
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default page;