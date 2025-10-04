"use client"

import { useState } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProjectCard = ({ title, category, description, image, technologies }) => (
    <div className="bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-64 w-full">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
        <div className="p-6">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <span className="px-3 py-1 text-sm rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                    {category}
                </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const page = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce'];

    const projects = [
        {
            title: "E-Commerce Platform",
            category: "E-commerce",
            description: "A full-featured e-commerce platform with advanced filtering and real-time inventory management.",
            image: "/images/portfolio.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Redux"]
        },
        {
            title: "Portfolio Management",
            category: "Web Development",
            description: "Custom portfolio tracking system with real-time market data integration.",
            image: "/images/portfolio2.jpg",
            technologies: ["Next.js", "TailwindCSS", "Firebase"]
        },
        {
            title: "Mobile Trading App",
            category: "Mobile Apps",
            description: "Cross-platform trading application with advanced charting capabilities.",
            image: "/images/squAREOFF.png",
            technologies: ["React Native", "GraphQL", "WebSocket"]
        },
        {
            title: "Interior Design Portfolio",
            category: "UI/UX Design",
            description: "Stunning portfolio website for an interior design firm with 3D visualization.",
            image: "/images/woodcraft.png",
            technologies: ["Three.js", "GSAP", "Next.js"]
        },
        {
            title: "Construction Management",
            category: "Web Development",
            description: "Project management platform for construction companies with resource tracking.",
            image: "/images/construction-work.jpg",
            technologies: ["Angular", "Node.js", "PostgreSQL"]
        },
        {
            title: "Healthcare Portal",
            category: "Web Development",
            description: "Patient management system with telemedicine integration.",
            image: "/images/1portfolio.png",
            technologies: ["Vue.js", "Express", "MySQL"]
        }
    ];

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="flex-1 py-16">
                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        Our Latest Projects
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Explore our portfolio of successful projects delivered with passion, 
                        innovation, and technical excellence.
                    </p>
                </section>

                {/* Category Filter */}
                <section className="container mx-auto px-6 mb-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                                    activeCategory === category
                                        ? 'bg-rose-500 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-rose-100 dark:hover:bg-rose-900/30'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-6 mt-20">
                    <div className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-600 dark:to-rose-700 rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Have a Project in Mind?
                        </h2>
                        <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help bring your vision to life with our expertise in design and development.
                        </p>
                        <button 
                            onClick={() => window.location.href = '/contact'}
                            className="bg-white text-rose-500 hover:bg-rose-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                            Start a Project
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default page;