import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Treacle Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing creative design and smooth animations. Built with attention to user experience and visual appeal, featuring interactive elements and professional presentation.',
        tags: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
        link: 'https://wondrous-treacle-6f0d09.netlify.app/',
        github: 'https://github.com/akhiakter25556'
    },
    {
        title: 'Skills Hub Platform',
        description: 'A comprehensive skills development platform where users can learn, practice, and showcase their abilities. Features interactive learning modules, progress tracking, and skill assessments.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        link: 'https://skills-hub-murex.vercel.app/',
        github: 'https://github.com/akhiakter25556'
    },
    {
        title: 'Assignment Management System',
        description: 'A complete assignment management system for educational institutions. Features assignment creation, submission tracking, grading system, and student-teacher collaboration tools.',
        tags: ['React', 'Firebase', 'Material-UI', 'Authentication'],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
        link: 'https://assainment9.vercel.app/',
        github: 'https://github.com/akhiakter25556'
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product management, order tracking, shopping cart, and secure checkout process.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        link: 'https://e-commerch-client.vercel.app/',
        github: 'https://github.com/akhiakter25556'
    },
    {
        title: 'Frangipane Creative Website',
        description: 'A beautifully designed creative website with modern aesthetics and smooth user interactions. Features elegant animations, responsive design, and optimized performance for excellent user experience.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Animation', 'Responsive'],
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
        link: 'https://endearing-frangipane-8a1f51.netlify.app/',
        github: 'https://github.com/akhiakter25556'
    },
    {
        title: 'Weather Dashboard',
        description: 'Interactive weather application with location-based forecasts, historical data visualization, and weather alerts. Features beautiful charts and responsive design with real-time weather updates.',
        tags: ['React', 'Chart.js', 'Weather API', 'CSS3'],
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
        link: '#',
        github: 'https://github.com/akhiakter25556'
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
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <div className="flex gap-3">
                                        {project.link !== '#' && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1 bg-primary text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/10 transition-colors duration-200">
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
