import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import img from '../assets/g5.jpeg';
const About = () => {
    return (
        <section id="about" className="relative py-20 bg-gradient text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 glass p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="flex items-center text-3xl md:text-4xl font-bold mb-4"><span className="icon-bg mr-2"><FaUser /></span> About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Placeholder for an image or illustration */}
                        <div className="w-full h-64 md:h-96 rounded-lg flex items-center justify-center overflow-hidden">
                            <img src={img} alt="Profile" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="flex items-center text-2xl font-bold mb-4"><span className="icon-bg mr-2"><FaBriefcase /></span> Passionate Full Stack Developer</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I am a dedicated developer with a passion for creating beautiful and functional web applications.
                            With expertise in modern technologies like React, Node.js, and Tailwind CSS, I turn ideas into reality.
                            I love solving complex problems and learning new things every day.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-gray-300">
                            <div>
                                <span className="font-bold text-accent block">Name:</span>
                                Akhi Akter
                            </div>
                            <div>
                                <span className="font-bold text-accent block">Email:</span>
                                ruhiakterakhi@gmail.com
                            </div>
                            <div>
                                <span className="font-bold text-accent block">Location:</span>
                                Raypur Lokkhipur
                            </div>
                            <div>
                                <span className="font-bold text-accent block">Availability:</span>
                                Open to work
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
