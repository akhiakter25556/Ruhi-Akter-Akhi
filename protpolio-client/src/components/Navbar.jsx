import { motion } from "framer-motion";
import React, { useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi'; // Added for the button arrow

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.documentElement.dataset.theme = newMode ? 'dark' : 'light';
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/akhi-akter-578880396/' },
        { icon: <FaInstagram />, href: '#' }, // Add Instagram link here if you have one
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/akhi.akter.751291' },
        { icon: <FaGithub />, href: 'https://github.com/akhiakter25556' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20"> {/* Increased height slightly for better spacing */}

                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 font-semibold text-xl tracking-wide text-white"
                    >
                        Akhi <span className="text-purple-500">Akter</span>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:block bg-[#0a0a0c]/50 px-6 py-2 rounded-full border border-white/5">
                        <div className="flex items-baseline space-x-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    className="text-gray-400 hover:text-white uppercase tracking-wider text-[11px] font-bold transition-colors duration-300"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Theme, Socials, and CTA Button */}
                    <div className="hidden md:flex items-center space-x-5">
                        <button
                            onClick={toggleTheme}
                            className="text-gray-400 hover:text-yellow-400 focus:outline-none"
                        >
                            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 border-r border-white/10 pr-5">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-400 hover:text-white transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Get In Touch Button */}
                        <a
                            href="#contact"
                            className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-purple-900 hover:text-white transition-all duration-300 group"
                        >
                            GET IN TOUCH
                            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button onClick={toggleTheme} className="mr-4 text-gray-400">
                            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-primary border-b border-white/10"
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex space-x-6 pt-4 px-3">
                            {socialLinks.map((social, i) => (
                                <a key={i} href={social.href} className="text-gray-400 text-xl">{social.icon}</a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;