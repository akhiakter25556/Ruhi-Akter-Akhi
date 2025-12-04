import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-400" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-red-500" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary p-6 rounded-xl flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-accent/20 transition-all duration-300 border border-white/5"
                        >
                            {skill.icon}
                            <span className="font-medium text-lg">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
