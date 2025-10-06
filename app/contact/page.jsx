"use client"

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import LocationCard from '../components/LocationCard';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
        reset,
    } = useForm();

     const [captchaToken, setCaptchaToken] = useState("");
     const [captchaError, setCaptchaError] = useState("");

    const onSubmit = async (data) => {
       

        setCaptchaError(""); 

        if (!captchaToken) {
            setCaptchaError("Please complete the captcha.");
            toast.error("Please complete the captcha.");
            return;
        }

        const toastId = toast.loading("Sending email...");
        try {
            const res = await fetch("/api/sendContactMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, captchaToken }),
            });

            if (res.ok) {
                reset();
                setCaptchaToken("");
                toast.success("Email sent successfully", { id: toastId });
            } else {
                toast.error("Failed to send email", { id: toastId });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.", { id: toastId });
        }
    };


    useEffect(() => {
        (window ).onCaptchaSuccess = (token) => {
            setCaptchaToken(token);
            setCaptchaError("");
        };

        (window).onCaptchaError = () => {
            setCaptchaToken("");
        };
    }, []);

    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="flex-1">
                    {/* Contact Section */}
                    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {/* Left Column - Contact Info (Omitted for brevity, assumed unchanged) */}
                            {/* ... (Your Contact Info JSX remains here) ... */}
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact us</h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                    Got a question or need more info? We&apos;re on standby to help.
                                    Just enter your details and we&apos;ll be with you shortly.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                                    Or, give us a call on{' '}
                                    <a
                                        href="tel:+919519262619" 
                                        title='+91 9519262619' 
                                        className="text-rose-500 hover:text-rose-600 dark:text-rose-400"
                                    >
                                    +91 9519262619
                                    </a>
                                </p>

                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Locations</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
                                        <LocationCard
                                            city="Lucknow"
                                            address="417/245 Niwajganj, Thakurganj Chowk"
                                            details="Lucknow, Uttar Pradesh 226003"
                                        />                                        
                                    </div>

                                </div>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">                               
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" method='POST'>                                    
                                    <div>
                                        <label className="block mb-1 text-white">Full Name</label>
                                        <input
                                            placeholder='Enter your full name.'
                                            type="text"
                                            {...register("fullName", {
                                                required: "Full Name is required",
                                                minLength: { value: 3, message: "At least 3 characters" },
                                                maxLength: { value: 30, message: "Max 30 characters" },
                                                pattern: { value: /^[A-Za-z\s]+$/, message: "Only alphabets allowed" },
                                            })}
                                            className={`w-full border rounded px-3 py-2 focus:outline-none ${errors.fullName ? "border-red-500" : "border-gray-300"
                                                }`}
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-1 text-white">Email</label>
                                        <input
                                            placeholder='Enter your email.'
                                            type="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                                            })}
                                            className={`w-full border rounded px-3 py-2 focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                                                }`}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block mb-1 text-white">Phone</label>
                                        <input
                                            placeholder='Enter 10-digit number'
                                            type="tel"
                                            {...register("phone", {
                                                required: false,
                                                pattern: { value: /^[0-9]{10}$/, message: "Phone must be 10 digits" },
                                            })}
                                            className={`w-full border rounded px-3 py-2 focus:outline-none ${errors.phone ? "border-red-500" : "border-gray-300"
                                                }`}
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                    </div>

                                    {/* Service Dropdown */}
                                    <div>
                                        <label className="block mb-1 text-white">Service</label>
                                        <select
                                            {...register("service", { required: "Please select a service" })}
                                            className={`w-full border rounded px-3 py-2 focus:outline-none ${errors.service ? "border-red-500" : "border-gray-300"
                                                }`}
                                        >
                                            <option value="">Select a Service</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="E-Commerce">E-Commerce</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="SEO Optimization">SEO Optimization</option>
                                        </select>
                                        {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
                                    </div>

                                    {/* Budget Dropdown */}
                                    <div>
                                        <label className="block mb-1 text-white">Budget</label>
                                        <select
                                            {...register("budget", { required: "Please select a budget" })}
                                            className={`w-full border rounded px-3 py-2 focus:outline-none ${errors.budget ? "border-red-500" : "border-gray-300"
                                                }`}
                                        >
                                            <option value="">Select Budget</option>
                                            <option value="$0 to $2000">$0 to $2000</option>
                                            <option value="$2000 to $5000">$2000 to $5000</option>
                                            <option value="$5000 to $10000">$5000 to $10000</option>
                                            <option value="$10000 to $20000">$10000 to $20000</option>
                                            <option value="More than $20000">More than $20000</option>
                                        </select>
                                        {errors.budget && <p className="text-red-500 text-sm">{errors.budget.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-white">Message</label>
                                        <textarea
                                            placeholder='Your message here...'
                                            rows={5}
                                            name="message"
                                            id="message"
                                            className={`w-full border rounded px-3 py-2 focus:outline-none ${errors.phone ? "border-red-500" : "border-gray-300"
                                                }`}
                                            {...register("message", {
                                                required: false,
                                            })}
                                        ></textarea>

                                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                    </div>
                                    {/* END Input fields */}

                                    {/* Cloudflare Turnstile */}
                                    <div
                                        className="cf-turnstile"
                                        data-sitekey={process.env.TURNSTILE_SITE_KEY}
                                        data-callback="onCaptchaSuccess"
                                        data-error-callback="onCaptchaError"
                                    />
                                    {/* Captcha Error Display */}
                                    {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}

                                    
                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className={`w-full p-2 rounded text-white ${
                                            isSubmitting ? "bg-gray-400 cursor-not-allowed transition-all w-full" : "bg-red-400 hidden md:block px-7 py-3 text-white rounded-[4px] hover:opacity-90 transition-all w-full"
                                        }`}
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;