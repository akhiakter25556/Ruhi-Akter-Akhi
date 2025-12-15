import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: <FaReact size={40} className="text-cyan-400" />, level: 95 },
            { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" />, level: 90 },
            { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-300" />, level: 88 },
            { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" />, level: 95 },
            { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" />, level: 90 },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" />, level: 85 },
            { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-400" />, level: 80 },
            { name: 'Express.js', icon: <FaNodeJs size={40} className="text-gray-400" />, level: 85 },
        ]
    },
    {
        title: 'Tools & Others',
        skills: [
            { name: 'Git', icon: <FaGitAlt size={40} className="text-red-500" />, level: 90 },
            { name: 'VS Code', icon: <FaJs size={40} className="text-blue-400" />, level: 95 },
            { name: 'Figma', icon: <FaJs size={40} className="text-purple-400" />, level: 75 },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 glass p-8">
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

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-accent mb-6 text-center">{category.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-accent/20 transition-all duration-300 border border-white/5"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="icon-bg p-2 rounded-lg">{skill.icon}</span>
                                            <div className="flex-1">
                                                <span className="font-semibold text-lg block">{skill.name}</span>
                                                <span className="text-accent text-sm">{skill.level}% Proficiency</span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1 }}
                                                viewport={{ once: true }}
                                                className="bg-gradient-to-r from-accent to-cyan-400 h-2 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
