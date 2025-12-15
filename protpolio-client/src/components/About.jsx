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
                            I'm a dedicated full-stack developer with 3+ years of experience creating scalable web applications. 
                            My expertise spans modern JavaScript frameworks, backend technologies, and database management. 
                            I'm passionate about writing clean, efficient code and staying updated with the latest industry trends.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            When I'm not coding, I enjoy contributing to open-source projects, learning new technologies, 
                            and sharing knowledge with the developer community. I believe in continuous learning and 
                            always strive to deliver high-quality solutions that exceed expectations.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                            <div className="space-y-4">
                                <div>
                                    <span className="font-bold text-accent block">Name:</span>
                                    <span className="text-lg">Akhi Akter</span>
                                </div>
                                <div>
                                    <span className="font-bold text-accent block">Email:</span>
                                    <span className="text-lg">ruhiakterakhi@gmail.com</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <span className="font-bold text-accent block">Location:</span>
                                    <span className="text-lg">Raypur Lokkhipur, Bangladesh</span>
                                </div>
                                <div>
                                    <span className="font-bold text-accent block">Status:</span>
                                    <span className="text-lg text-green-400">Available for Projects</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="bg-primary px-4 py-2 rounded-lg border border-accent/20">
                                <span className="text-accent font-semibold">3+</span> Years Experience
                            </div>
                            <div className="bg-primary px-4 py-2 rounded-lg border border-accent/20">
                                <span className="text-accent font-semibold">50+</span> Projects Completed
                            </div>
                            <div className="bg-primary px-4 py-2 rounded-lg border border-accent/20">
                                <span className="text-accent font-semibold">100%</span> Client Satisfaction
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
