import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of the project and the technologies used.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'https://via.placeholder.com/400x300', // Replace with actual images
        link: '#'
    },
    {
        title: 'Project Two',
        description: 'A brief description of the project and the technologies used.',
        tags: ['Next.js', 'Tailwind', 'Firebase'],
        image: 'https://via.placeholder.com/400x300',
        link: '#'
    },
    {
        title: 'Project Three',
        description: 'A brief description of the project and the technologies used.',
        tags: ['Vue.js', 'Express', 'PostgreSQL'],
        image: 'https://via.placeholder.com/400x300',
        link: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-accent/20 transition-shadow duration-300 group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a href={project.link} className="px-6 py-2 bg-accent text-primary font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Details
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1 bg-primary text-accent text-xs rounded-full border border-accent/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
