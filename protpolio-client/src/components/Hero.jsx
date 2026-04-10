import { motion } from 'framer-motion';
import img from '../assets/profationalimg.jpg';
import { resumeData, generateResumeHTML } from '../data/resumeData';
import { generateResumePDF } from '../utils/generatePDF';

const Hero = () => {
    const handleViewResume = () => {
        const resumeHTML = generateResumeHTML(resumeData);
        const newWindow = window.open('', '_blank');
        newWindow.document.write(resumeHTML);
        newWindow.document.close();
    };

    const handleDownloadResume = () => {
        generateResumePDF(resumeData);
    };

    const handleViewGoogleDriveResume = () => {
        window.open(resumeData.googleDriveResume, '_blank');
    };

    // Animation variants for consistent, reusable animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const backgroundShapeVariants = {
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const buttonBaseClass = "px-8 py-3 border-2 font-bold rounded-full transition-all duration-300 hover:scale-105";

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary relative overflow-hidden py-20"
            role="banner"
            aria-label="Hero section - Full Stack Developer Introduction"
        >
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    variants={backgroundShapeVariants}
                    animate="animate"
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"
                    aria-hidden="true"
                />
                <motion.div
                    variants={{
                        animate: {
                            scale: [1, 1.5, 1],
                            rotate: [0, -90, 0],
                            transition: {
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }
                    }}
                    animate="animate"
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"
                    aria-hidden="true"
                />
            </div>

            {/* Main Content */}
            <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.h1
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        >
                            Hi, I'm <span className="text-accent">Akhi Akter</span>
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent mb-6"
                        >
                            Full Stack Developer
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl"
                        >
                            Building scalable, modern web applications with cutting-edge technologies.
                            Passionate about creating seamless user experiences and robust backend solutions.
                        </motion.p>

                        {/* Call-to-Action Buttons */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 flex-wrap"
                        >
                            {/* View Work Button */}
                            <motion.a
                                variants={itemVariants}
                                href="#projects"
                                className={`${buttonBaseClass} bg-gradient-to-r from-accent to-purple-500 text-primary hover:shadow-lg hover:shadow-accent/30`}
                                role="button"
                                tabIndex={0}
                            >
                                View My Work
                            </motion.a>

                            {/* View Resume Button */}
                            <motion.button
                                variants={itemVariants}
                                onClick={handleViewResume}
                                className={`${buttonBaseClass} border-accent bg-transparent text-accent hover:bg-accent hover:text-primary hover:shadow-lg hover:shadow-accent/25`}
                                aria-label="View resume in browser"
                            >
                                View Resume
                            </motion.button>

                            {/* Download PDF Button */}
                            <motion.button
                                variants={itemVariants}
                                onClick={handleDownloadResume}
                                className={`${buttonBaseClass} border-white/30 text-white bg-transparent hover:bg-white/10 hover:shadow-lg hover:shadow-white/20`}
                                aria-label="Download resume as PDF"
                            >
                                Download PDF
                            </motion.button>

                            {/* View Full Resume Button */}
                            <motion.a
                                variants={itemVariants}
                                href={resumeData.googleDriveResume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${buttonBaseClass} border-blue-400 text-blue-300 bg-transparent hover:bg-blue-500/20 hover:text-white hover:shadow-lg hover:shadow-blue-500/25`}
                                role="button"
                                aria-label="View full resume on Google Drive"
                            >
                                📄 Full Resume
                            </motion.a>

                            {/* Get in Touch Button */}
                            <motion.a
                                variants={itemVariants}
                                href="#contact"
                                className={`${buttonBaseClass} border-purple-500 text-purple-300 bg-transparent hover:bg-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/25`}
                                role="button"
                                tabIndex={0}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glowing Background */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"
                                aria-hidden="true"
                            />
                            <div className="absolute -inset-2 bg-accent/20 rounded-full"
                                aria-hidden="true"
                            />

                            {/* Profile Image Container */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl"
                            >
                                <img
                                    src={img}
                                    alt="Akhi Akter - Full Stack Developer"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                                    aria-hidden="true"
                                />
                            </motion.div>

                            {/* Floating Accent Elements */}
                            <motion.div
                                animate={floatingVariants.animate}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full shadow-lg"
                                aria-hidden="true"
                            />
                            <motion.div
                                animate={{
                                    y: [10, -10, 10],
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
                                aria-hidden="true"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
