import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id='contact' className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8 mt-20 font-sans border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">

                {/* Left Side - Form */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Feel free to reach out for collaborations, inquiries, or just a friendly hello.
                    </p>

                    <form action="https://formsubmit.co/subhamsinghkk34@gmail.com" method="POST" className="space-y-6">
                        {/* Hidden fields for FormSubmit configuration */}
                        <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio!" />
                        <input type="hidden" name="_captcha" value="false" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-400 mb-2 font-medium" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="your name"
                                    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-400 mb-2 font-medium" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your@example.com"
                                    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm text-gray-400 mb-2 font-medium" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+91 1111111111"
                                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm text-gray-400 mb-2 font-medium" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                placeholder="How can I help you?"
                                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-emerald-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-500/25"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side - Contact Info & Copyright */}
                <div className="w-full lg:w-1/3 flex flex-col justify-between h-full space-y-12 lg:space-y-24 lg:mt-12">

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-white">Contact Information</h3>

                        <div className="flex flex-col space-y-6">
                            <a href="mailto:your.email@example.com" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500">Email Me At</span>
                                    <span className="text-lg font-medium">subhamsinghkk34@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+1234567890" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500">Call Me At</span>
                                    <span className="text-lg font-medium">+91 7319522543</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Subham Singh. All rights reserved.</p>
                <p className="mt-4 md:mt-0">Designed & Built with React & Tailwind CSS</p>
            </div>
        </footer>
    );
}
