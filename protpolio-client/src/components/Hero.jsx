import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import img from '../assets/g5.jpeg';

const Hero = () => {
    const handleViewResume = () => {
        const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Akhi Akter - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: white;
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #1E40AF;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .name {
            font-size: 2.5em;
            font-weight: bold;
            color: #1E40AF;
            margin-bottom: 5px;
        }
        
        .title {
            font-size: 1.3em;
            color: #2563EB;
            margin-bottom: 15px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.9em;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 1.4em;
            font-weight: bold;
            color: #1E40AF;
            border-bottom: 2px solid #2563EB;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        
        .objective {
            text-align: justify;
            line-height: 1.7;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .skill-category {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2563EB;
        }
        
        .skill-category h4 {
            color: #1E40AF;
            margin-bottom: 8px;
            font-weight: bold;
        }
        
        .project {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #2563EB;
        }
        
        .project-title {
            font-weight: bold;
            color: #1E40AF;
            font-size: 1.1em;
            margin-bottom: 5px;
        }
        
        .project-tech {
            color: #2563EB;
            font-style: italic;
            margin-bottom: 8px;
        }
        
        .project-links {
            margin-top: 8px;
            font-size: 0.9em;
        }
        
        .project-links a {
            color: #2563EB;
            text-decoration: none;
            margin-right: 15px;
        }
        
        .education {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2563EB;
        }
        
        .download-buttons {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: #f0f9ff;
            border-radius: 10px;
            border: 2px solid #2563EB;
        }
        
        .download-btn {
            display: inline-block;
            padding: 12px 24px;
            margin: 0 10px;
            background: #2563EB;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            transition: background 0.3s;
        }
        
        .download-btn:hover {
            background: #1E40AF;
        }
        
        @media print {
            .download-buttons {
                display: none;
            }
            body {
                padding: 0;
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="download-buttons">
        <button class="download-btn" onclick="window.print()">Print Resume</button>
        <button class="download-btn" onclick="window.close()">Close Preview</button>
    </div>

    <div class="header">
        <h1 class="name">AKHI AKTER</h1>
        <h2 class="title">Full Stack Developer</h2>
        <div class="contact-info">
            <div class="contact-item">
                <span>📧</span>
                <span>akhiakterherpower70@gmail.com</span>
            </div>
            <div class="contact-item">
                <span>📱</span>
                <span>01815225556</span>
            </div>
            <div class="contact-item">
                <span>📍</span>
                <span>Raypur, Lokkhipur, Bangladesh</span>
            </div>
        </div>
        <div class="contact-info" style="margin-top: 10px;">
            <div class="contact-item">
                <span>💼</span>
                <a href="https://www.linkedin.com/in/akhi-akter-578880396/" target="_blank">LinkedIn Profile</a>
            </div>
            <div class="contact-item">
                <span>🔗</span>
                <a href="https://github.com/akhiakter25556" target="_blank">GitHub Profile</a>
            </div>
        </div>
    </div>

    <div class="section">
        <h3 class="section-title">CAREER OBJECTIVE</h3>
        <p class="objective">
            Full Stack Developer skilled in building scalable, responsive web applications using the MERN and Next.js ecosystems. 
            Proficient in React.js, Next.js, Node.js, and MongoDB, with hands-on experience creating secure, full-stack projects using 
            JWT and OAuth authentication. Strong ability to design, follow clean code practices, and work with modern web tools.
        </p>
    </div>

    <div class="section">
        <h3 class="section-title">TECHNICAL SKILLS</h3>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Frontend</h4>
                <p>HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js</p>
            </div>
            <div class="skill-category">
                <h4>Backend</h4>
                <p>Node.js, Express.js, REST API development</p>
            </div>
            <div class="skill-category">
                <h4>Database</h4>
                <p>MongoDB, Mongoose</p>
            </div>
            <div class="skill-category">
                <h4>Authentication</h4>
                <p>JWT, NextAuth, OAuth, Firebase</p>
            </div>
            <div class="skill-category">
                <h4>Tools</h4>
                <p>Git, GitHub, VS Code, IntelliJ, Vercel, Netlify</p>
            </div>
            <div class="skill-category">
                <h4>Other</h4>
                <p>Responsive UI, API Integration</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h3 class="section-title">PROJECTS</h3>
        
        <div class="project">
            <div class="project-title">1. E-commerce With Next.js</div>
            <div class="project-tech">Tech: Next.js, MongoDB, Express, Node.js, NextAuth</div>
            <div class="project-links">
                <a href="https://e-commerch-client.vercel.app/" target="_blank">Live Demo</a>
                <a href="https://github.com/akhiakter25556" target="_blank">GitHub</a>
            </div>
            <p>A full-featured e-commerce platform with secure authentication and payment integration. Built with modern technologies and best practices for scalable web applications.</p>
        </div>

        <div class="project">
            <div class="project-title">2. Skills Hub Platform</div>
            <div class="project-tech">Tech: React, Node.js, MongoDB, Tailwind CSS</div>
            <div class="project-links">
                <a href="https://skills-hub-murex.vercel.app/" target="_blank">Live Demo</a>
                <a href="https://github.com/akhiakter25556" target="_blank">GitHub</a>
            </div>
            <p>A comprehensive skills development platform where users can learn, practice, and showcase their abilities. Features interactive learning modules, progress tracking, and skill assessments.</p>
        </div>

        <div class="project">
            <div class="project-title">3. Assignment Management System</div>
            <div class="project-tech">Tech: React, Firebase, Material-UI, Authentication</div>
            <div class="project-links">
                <a href="https://assainment9.vercel.app/" target="_blank">Live Demo</a>
                <a href="https://github.com/akhiakter25556" target="_blank">GitHub</a>
            </div>
            <p>A complete assignment management system for educational institutions. Features assignment creation, submission tracking, grading system, and student-teacher collaboration tools.</p>
        </div>

        <div class="project">
            <div class="project-title">4. Portfolio Website</div>
            <div class="project-tech">Tech: React, Tailwind CSS, Framer Motion</div>
            <div class="project-links">
                <a href="https://wondrous-treacle-6f0d09.netlify.app/" target="_blank">Live Demo</a>
                <a href="https://github.com/akhiakter25556" target="_blank">GitHub</a>
            </div>
            <p>Modern, responsive portfolio website showcasing creative design and smooth animations. Built with attention to user experience and visual appeal, featuring interactive elements and professional presentation.</p>
        </div>

        <div class="project">
            <div class="project-title">5. Frangipane Creative Website</div>
            <div class="project-tech">Tech: HTML5, CSS3, JavaScript, Animation, Responsive</div>
            <div class="project-links">
                <a href="https://endearing-frangipane-8a1f51.netlify.app/" target="_blank">Live Demo</a>
                <a href="https://github.com/akhiakter25556" target="_blank">GitHub</a>
            </div>
            <p>A beautifully designed creative website with modern aesthetics and smooth user interactions. Features elegant animations, responsive design, and optimized performance for excellent user experience.</p>
        </div>
    </div>

    <div class="section">
        <h3 class="section-title">EDUCATION</h3>
        <div class="education">
            <strong>Raipur Govt University</strong><br>
            <em>Graduated: February 2025</em>
        </div>
    </div>

    <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 0.9em;">
        <p>Generated from Akhi Akter's Portfolio Website</p>
        <p>Contact: akhiakterherpower70@gmail.com | Portfolio: https://wondrous-treacle-6f0d09.netlify.app/</p>
    </div>
</body>
</html>`;

        const newWindow = window.open('', '_blank');
        newWindow.document.write(resumeHTML);
        newWindow.document.close();
    };

    const handleDownloadResume = () => {
        const doc = new jsPDF();
        
        // Set font
        doc.setFont('helvetica');
        
        // Header
        doc.setFontSize(24);
        doc.setTextColor(30, 64, 175); // Blue color
        doc.text('AKHI AKTER', 105, 30, { align: 'center' });
        
        doc.setFontSize(16);
        doc.setTextColor(37, 99, 235); // Lighter blue
        doc.text('Full Stack Developer', 105, 45, { align: 'center' });
        
        // Contact Information
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('Email: akhiakterherpower70@gmail.com | Phone: 01815225556', 105, 55, { align: 'center' });
        doc.text('Address: Raypur, Lokkhipur, Bangladesh', 105, 62, { align: 'center' });
        doc.text('LinkedIn: linkedin.com/in/akhi-akter-578880396 | GitHub: github.com/akhiakter25556', 105, 69, { align: 'center' });
        
        // Line separator
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(0.5);
        doc.line(20, 75, 190, 75);
        
        let yPosition = 85;
        
        // Career Objective
        doc.setFontSize(14);
        doc.setTextColor(30, 64, 175);
        doc.text('CAREER OBJECTIVE', 20, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        const objective = 'Full Stack Developer skilled in building scalable, responsive web applications using the MERN and Next.js ecosystems. Proficient in React.js, Next.js, Node.js, and MongoDB, with hands-on experience creating secure, full-stack projects using JWT and OAuth authentication.';
        const splitObjective = doc.splitTextToSize(objective, 170);
        doc.text(splitObjective, 20, yPosition);
        yPosition += splitObjective.length * 5 + 10;
        
        // Technical Skills
        doc.setFontSize(14);
        doc.setTextColor(30, 64, 175);
        doc.text('TECHNICAL SKILLS', 20, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        const skills = [
            'Frontend: HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js',
            'Backend: Node.js, Express.js, REST API development',
            'Database: MongoDB, Mongoose',
            'Authentication: JWT, NextAuth, OAuth, Firebase',
            'Tools: Git, GitHub, VS Code, IntelliJ, Vercel, Netlify',
            'Other: Responsive UI, API Integration'
        ];
        
        skills.forEach(skill => {
            doc.text(`• ${skill}`, 25, yPosition);
            yPosition += 6;
        });
        yPosition += 5;
        
        // Projects
        doc.setFontSize(14);
        doc.setTextColor(30, 64, 175);
        doc.text('PROJECTS', 20, yPosition);
        yPosition += 8;
        
        const projects = [
            {
                title: '1. E-commerce With Next.js',
                tech: 'Tech: Next.js, MongoDB, Express, Node.js, NextAuth',
                live: 'Live: https://e-commerch-client.vercel.app/',
                description: 'A full-featured e-commerce platform with secure authentication and payment integration.'
            },
            {
                title: '2. Skills Hub Platform',
                tech: 'Tech: React, Node.js, MongoDB, Tailwind CSS',
                live: 'Live: https://skills-hub-murex.vercel.app/',
                description: 'A comprehensive skills development platform with interactive learning modules.'
            },
            {
                title: '3. Assignment Management System',
                tech: 'Tech: React, Firebase, Material-UI, Authentication',
                live: 'Live: https://assainment9.vercel.app/',
                description: 'Educational assignment management system with submission tracking and grading.'
            },
            {
                title: '4. Portfolio Website',
                tech: 'Tech: React, Tailwind CSS, Framer Motion',
                live: 'Live: https://wondrous-treacle-6f0d09.netlify.app/',
                description: 'Modern, responsive portfolio website with smooth animations and professional design.'
            }
        ];
        
        projects.forEach(project => {
            // Check if we need a new page
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            doc.setFontSize(11);
            doc.setTextColor(30, 64, 175);
            doc.text(project.title, 20, yPosition);
            yPosition += 6;
            
            doc.setFontSize(9);
            doc.setTextColor(37, 99, 235);
            doc.text(project.tech, 25, yPosition);
            yPosition += 5;
            
            if (project.live) {
                doc.setTextColor(37, 99, 235);
                doc.text(project.live, 25, yPosition);
                yPosition += 5;
            }
            
            doc.setFontSize(9);
            doc.setTextColor(0, 0, 0);
            const splitDesc = doc.splitTextToSize(project.description, 165);
            doc.text(splitDesc, 25, yPosition);
            yPosition += splitDesc.length * 4 + 8;
        });
        
        // Education
        if (yPosition > 260) {
            doc.addPage();
            yPosition = 20;
        }
        
        doc.setFontSize(14);
        doc.setTextColor(30, 64, 175);
        doc.text('EDUCATION', 20, yPosition);
        yPosition += 8;
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text('Raipur Govt University', 20, yPosition);
        yPosition += 6;
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text('Graduated: February 2025', 20, yPosition);
        
        // Footer
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('Generated from Akhi Akter\'s Portfolio Website', 105, 285, { align: 'center' });
        
        // Save the PDF
        doc.save('Akhi_Akter_Resume.pdf');
    };
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary relative overflow-hidden py-20">
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

            <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        >
                            Hi, I'm <span className="text-accent">Akhi Akter</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent mb-4"
                        >
                            Full Stack Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
                        >
                            Passionate about creating innovative web solutions with modern technologies. 
                            Specializing in React, Node.js, and full-stack development to bring ideas to life.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                            >
                                View My Work
                            </a>
                            <button
                                onClick={handleViewResume}
                                className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-105"
                            >
                                View Resume
                            </button>
                            <button
                                onClick={handleDownloadResume}
                                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            >
                                Download PDF
                            </button>
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-transparent border-2 border-purple-500/30 text-purple-300 font-bold rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                            >
                                Get In Touch
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                            <div className="absolute -inset-2 bg-accent/20 rounded-full"></div>
                            
                            {/* Profile Image */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl"
                            >
                                <img 
                                    src={img} 
                                    alt="Akhi Akter - Full Stack Developer" 
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </motion.div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full shadow-lg"
                            ></motion.div>
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
