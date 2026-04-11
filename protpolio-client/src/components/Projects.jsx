import { motion } from "framer-motion";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: 'Treacle Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing creative design and smooth animations. Built with attention to user experience and visual appeal, featuring interactive elements and professional presentation.',
        tags: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
        link: 'https://smartlms-pro.vercel.app',
        github: 'https://github.com/akhiakter25556'
    },
    {
        title: 'Skills Hub Platform',
        description: 'A comprehensive skills development platform where users can learn, practice, and showcase their abilities. Features interactive learning modules, progress tracking, and skill assessments.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        link: 'https://contesthub-omega.vercel.app/',
        github: 'https://github.com/akhiakter25556'
    },
    {
        title: 'Intern Govt Project',
        description: 'A complete assignment management system for educational institutions. Features assignment creation, submission tracking, grading system, and student-teacher collaboration tools.',
        tags: ['React', 'Firebase', 'Material-UI', 'Authentication'],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
        link: 'https://ictd-lab-gsi-project-frontend.vercel.app/',
        github: 'https://github.com/akhiakter25556/assignment-management'
    },
    {
        title: 'Client Project — Full Stack TypeScript App',
        description: 'Successfully delivered a full-stack web application for a client on a project basis. Built with React.js and Next.js with TypeScript for structured and maintainable code. The project focused on creating a clean, responsive UI, smooth user experience, and optimized performance.',
        tags: ['FullStack', 'TypeScript', 'ReactJS', 'NextJS', 'WebDevelopment'],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
        link: 'https://vizualgraphics.vercel.app/',
        github: 'https://github.com/akhiakter25556/vizualgraphics.git'
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
        title: 'Smart Inventory & Order Management System',
        description: 'Built a Smart Inventory & Order Management System using TypeScript, Node.js, and Next.js. Manage products, categories, stock levels, and customer orders with proper validation and workflow handling.',
        tags: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Full-Stack'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        link: 'https://l-msystemproject-92x9.vercel.app/',
        github: 'https://github.com/akhiakter25556/LMsystemproject.git'
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
    },
    {
        title: 'Fresh Flower Shop',
        description: 'A beautiful and responsive flower shop website with elegant design and smooth user experience. Features product showcase, shopping functionality, and modern web design principles.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
        link: 'https://akhiakter25556.github.io/freshFlower/',
        github: 'https://github.com/akhiakter25556/freshFlower'
    },
    {
        title: 'Ruhi Buiya Portfolio',
        description: 'A professional portfolio website showcasing creative work and projects. Built with modern design principles, featuring smooth animations and responsive layout for optimal user experience.',
        tags: ['React', 'CSS3', 'JavaScript', 'Portfolio Design'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        link: 'https://2-ruhi-buiya.vercel.app/',
        github: 'https://github.com/akhiakter25556/ruhi-buiya-portfolio'
    }
];

const PER_PAGE = 3;

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(projects.length / PER_PAGE);
    const start = (currentPage - 1) * PER_PAGE;
    const pageProjects = projects.slice(start, start + PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="projects" className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
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

                {/* Project Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    >
                        {pageProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:-translate-y-2"
                            >
                                {/* Image */}
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
                                                    className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-sm"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-primary text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/10 transition-colors duration-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Numbers */}
                <div className="flex justify-center items-center gap-3">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 border
                                ${currentPage === page
                                    ? 'bg-accent text-primary border-accent scale-110'
                                    : 'bg-transparent text-gray-400 border-accent/30 hover:border-accent hover:text-accent hover:scale-105'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;