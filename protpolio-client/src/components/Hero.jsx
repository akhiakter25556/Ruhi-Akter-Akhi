import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    Hi, I'm <span className="text-accent">Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    Building modern web experiences with React and Tailwind CSS.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-transform hover:scale-105"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
