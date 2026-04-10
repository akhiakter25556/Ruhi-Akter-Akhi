// Resume content data - centralized for both HTML and PDF rendering
export const resumeData = {
    name: 'AKHI AKTER',
    title: 'Full Stack Developer',
    email: 'akhiakterherpower70@gmail.com',
    phone: '01815225556',
    address: 'Raypur, Lokkhipur, Bangladesh',
    linkedin: 'https://www.linkedin.com/in/akhi-akter-578880396/',
    github: 'https://github.com/akhiakter25556',
    googleDriveResume: 'https://drive.google.com/file/d/1BDdWD5l5ZHafVx0vPGR-PdNSMO7QctzZ/view?usp=drive_link',

    objective: `Full Stack Developer skilled in building scalable, responsive web applications using the MERN and Next.js ecosystems. Proficient in React.js, Next.js, Node.js, and MongoDB, with hands-on experience creating secure, full-stack projects using JWT and OAuth authentication. Strong ability to design, follow clean code practices, and work with modern web tools.`,

    skills: {
        frontend: 'HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js',
        backend: 'Node.js, Express.js, REST API development',
        database: 'MongoDB, Mongoose',
        authentication: 'JWT, NextAuth, OAuth, Firebase',
        tools: 'Git, GitHub, VS Code, IntelliJ, Vercel, Netlify',
        other: 'Responsive UI, API Integration'
    },

    projects: [
        {
            id: 1,
            title: 'E-commerce With Next.js',
            tech: 'Next.js, MongoDB, Express, Node.js, NextAuth',
            liveUrl: 'https://e-commerch-client.vercel.app/',
            githubUrl: 'https://github.com/akhiakter25556',
            description: 'A full-featured e-commerce platform with secure authentication and payment integration. Built with modern technologies and best practices for scalable web applications.'
        },
        {
            id: 2,
            title: 'Skills Hub Platform',
            tech: 'React, Node.js, MongoDB, Tailwind CSS',
            liveUrl: 'https://skills-hub-murex.vercel.app/',
            githubUrl: 'https://github.com/akhiakter25556',
            description: 'A comprehensive skills development platform where users can learn, practice, and showcase their abilities. Features interactive learning modules, progress tracking, and skill assessments.'
        },
        {
            id: 3,
            title: 'Assignment Management System',
            tech: 'React, Firebase, Material-UI, Authentication',
            liveUrl: 'https://assignment9.vercel.app/',
            githubUrl: 'https://github.com/akhiakter25556',
            description: 'A complete assignment management system for educational institutions. Features assignment creation, submission tracking, grading system, and student-teacher collaboration tools.'
        },
        {
            id: 4,
            title: 'Portfolio Website',
            tech: 'React, Tailwind CSS, Framer Motion',
            liveUrl: 'https://wondrous-treacle-6f0d09.netlify.app/',
            githubUrl: 'https://github.com/akhiakter25556',
            description: 'Modern, responsive portfolio website showcasing creative design and smooth animations. Built with attention to user experience and visual appeal, featuring interactive elements and professional presentation.'
        },
        {
            id: 5,
            title: 'Frangipane Creative Website',
            tech: 'HTML5, CSS3, JavaScript, Animation, Responsive',
            liveUrl: 'https://endearing-frangipane-8a1f51.netlify.app/',
            githubUrl: 'https://github.com/akhiakter25556',
            description: 'A beautifully designed creative website with modern aesthetics and smooth user interactions. Features elegant animations, responsive design, and optimized performance for excellent user experience.'
        }
    ],

    education: {
        school: 'Raipur Govt University',
        graduationDate: 'February 2025'
    }
};

export const generateResumeHTML = (data) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.7;
            color: #2d3748;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #f8fafc;
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 25px;
            margin-bottom: 30px;
            background: white;
            padding: 25px;
            border-radius: 8px;
        }
        
        .name {
            font-size: 2.8em;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }
        
        .title {
            font-size: 1.5em;
            color: #2563eb;
            margin-bottom: 18px;
            font-weight: 600;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 18px;
            font-size: 0.95em;
            margin-bottom: 12px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .contact-item a {
            color: #2563eb;
            text-decoration: none;
        }
        
        .contact-item a:hover {
            text-decoration: underline;
        }
        
        .section {
            margin-bottom: 30px;
            background: white;
            padding: 20px;
            border-radius: 8px;
        }
        
        .section-title {
            font-size: 1.5em;
            font-weight: 700;
            color: #1e40af;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
            margin-bottom: 18px;
        }
        
        .objective {
            text-align: justify;
            line-height: 1.8;
            color: #475569;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .skill-category {
            background: #f0f9ff;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }
        
        .skill-category h4 {
            color: #1e40af;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .skill-category p {
            color: #475569;
            font-size: 0.95em;
        }
        
        .project {
            margin-bottom: 22px;
            padding: 18px;
            background: #f0f9ff;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }
        
        .project:last-child {
            margin-bottom: 0;
        }
        
        .project-title {
            font-weight: 700;
            color: #1e40af;
            font-size: 1.2em;
            margin-bottom: 6px;
        }
        
        .project-tech {
            color: #2563eb;
            font-style: italic;
            margin-bottom: 10px;
            font-size: 0.95em;
        }
        
        .project-description {
            color: #475569;
            margin-bottom: 8px;
            font-size: 0.95em;
        }
        
        .project-links {
            margin-top: 8px;
            font-size: 0.9em;
        }
        
        .project-links a {
            color: #2563eb;
            text-decoration: none;
            margin-right: 18px;
            font-weight: 500;
        }
        
        .project-links a:hover {
            text-decoration: underline;
        }
        
        .education {
            background: #f0f9ff;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }
        
        .education strong {
            color: #1e40af;
            font-size: 1.05em;
        }
        
        .education em {
            color: #64748b;
            display: block;
            margin-top: 6px;
        }
        
        .download-buttons {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: #e0f2fe;
            border-radius: 10px;
            border: 2px solid #2563eb;
        }
        
        .download-btn {
            display: inline-block;
            padding: 12px 28px;
            margin: 0 10px;
            background: #2563eb;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background 0.3s;
            font-size: 0.95em;
        }
        
        .download-btn:hover {
            background: #1e40af;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #94a3b8;
            font-size: 0.9em;
        }
        
        @media print {
            .download-buttons {
                display: none;
            }
            body {
                padding: 0;
                font-size: 11px;
                background: white;
            }
            .section {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="download-buttons">
        <button class="download-btn" onclick="window.print()">🖨️ Print Resume</button>
        <button class="download-btn" onclick="window.close()">✕ Close</button>
    </div>

    <div class="header">
        <h1 class="name">${data.name}</h1>
        <h2 class="title">${data.title}</h2>
        <div class="contact-info">
            <div class="contact-item">
                <span>📧</span>
                <span>${data.email}</span>
            </div>
            <div class="contact-item">
                <span>📱</span>
                <span>${data.phone}</span>
            </div>
            <div class="contact-item">
                <span>📍</span>
                <span>${data.address}</span>
            </div>
        </div>
        <div class="contact-info">
            <div class="contact-item">
                <span>💼</span>
                <a href="${data.linkedin}" target="_blank">LinkedIn</a>
            </div>
            <div class="contact-item">
                <span>🔗</span>
                <a href="${data.github}" target="_blank">GitHub</a>
            </div>
        </div>
    </div>

    <div class="section">
        <h3 class="section-title">CAREER OBJECTIVE</h3>
        <p class="objective">${data.objective}</p>
    </div>

    <div class="section">
        <h3 class="section-title">TECHNICAL SKILLS</h3>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Frontend</h4>
                <p>${data.skills.frontend}</p>
            </div>
            <div class="skill-category">
                <h4>Backend</h4>
                <p>${data.skills.backend}</p>
            </div>
            <div class="skill-category">
                <h4>Database</h4>
                <p>${data.skills.database}</p>
            </div>
            <div class="skill-category">
                <h4>Authentication</h4>
                <p>${data.skills.authentication}</p>
            </div>
            <div class="skill-category">
                <h4>Tools & Deployment</h4>
                <p>${data.skills.tools}</p>
            </div>
            <div class="skill-category">
                <h4>Other Skills</h4>
                <p>${data.skills.other}</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h3 class="section-title">FEATURED PROJECTS</h3>
        ${data.projects.map(project => `
            <div class="project">
                <div class="project-title">${project.id}. ${project.title}</div>
                <div class="project-tech">🛠️ ${project.tech}</div>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank">🔗 Live Demo</a>
                    <a href="${project.githubUrl}" target="_blank">💻 GitHub</a>
                </div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h3 class="section-title">EDUCATION</h3>
        <div class="education">
            <strong>${data.education.school}</strong>
            <em>Graduated: ${data.education.graduationDate}</em>
        </div>
    </div>

    <div class="footer">
        <p>Generated from ${data.name}'s Professional Portfolio</p>
        <p>📧 ${data.email} | 🌐 Portfolio & More</p>
    </div>
</body>
</html>`;
};
