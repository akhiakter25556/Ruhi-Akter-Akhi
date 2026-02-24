import { motion } from 'framer-motion';

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        // Create a blob with the resume content
        const resumeContent = `
AKHI AKTER
Full Stack Developer

Contact Information:
Email: akhiakterherpower70@gmail.com
Phone: 01815225556
Address: Raypur, Lokkhipur, Bangladesh
LinkedIn: https://www.linkedin.com/in/akhi-akter-578880396/
GitHub: https://github.com/akhiakter25556

CAREER OBJECTIVE
Full Stack Developer skilled in building scalable, responsive web applications using the MERN and Next.js ecosystems. Proficient in React.js, Next.js, Node.js, and MongoDB, with hands-on experience creating secure, full-stack projects using JWT and OAuth authentication. Strong ability to design, follow clean code practices, and work with modern web tools.

TECHNICAL SKILLS
Frontend: HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js
Backend: Node.js, Express.js, REST API development
Database: MongoDB, Mongoose
Authentication: JWT, NextAuth, OAuth, Firebase
Tools: Git, GitHub, VS Code, IntelliJ, Vercel, Netlify
Other: Responsive UI, API Integration

PROJECTS

1. FreelancerMarketer (MERN)
Tech: React, MongoDB, Express.js, Node.js
A full-featured platform that enables users to register, authenticate, and manage car rentals securely.
Key Contributions:
• Built a responsive, user-friendly UI with React
• Integrated JWT authentication for user login, authorization, and security
• Developed backend APIs using Node.js & Express, including full CRUD operations

2. E-commerce With Next.js
Tech: Next.js, MongoDB, Express, Node.js, NextAuth
Live: https://e-commerch-client.vercel.app/
Key Contributions:
• Built a full-featured event management system with secure authentication
• Integrated Firebase for user login and authorization
• Developed backend services with Express and MongoDB for event creation, retrieval, and user role management

3. ContestHub (Coding Contest Management Platform)
Tech: React, Tailwind CSS, Node.js, Express, MongoDB, JWT

4. 
ContestHub Website
Tech: React, Tailwind CSS, Framer Motion
Live: https://wondrous-treacle-6f0d09.netlify.app/

5. Skills Hub Platform
Tech: React, Node.js, MongoDB, Tailwind CSS
Live: https://skills-hub-murex.vercel.app/

6. Assignment Management System
Tech: React, Firebase, Material-UI, Authentication
Live: https://assainment9.vercel.app/

EDUCATION
Raipur Govt University
Graduated: February 2025
        `;

        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Akhi_Akter_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-white text-black p-8 print:p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center border-b-4 border-blue-600 pb-6 mb-8">
                    <h1 className="text-4xl font-bold text-blue-800 mb-2">AKHI AKTER</h1>
                    <h2 className="text-xl text-blue-600 mb-4">Full Stack Developer</h2>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <span>📧 ruhiakterakhi@gmail.com</span>
                        <span>📱 01815225556</span>
                        <span>📍 Raypur, Lokkhipur, Bangladesh</span>
                        <span>💼 LinkedIn: linkedin.com/in/akhi-akter-578880396</span>
                        <span>🔗 GitHub: github.com/akhiakter25556</span>
                    </div>
                </div>

                {/* Print/Download Buttons */}
                <div className="flex gap-4 mb-8 print:hidden">
                    <button
                        onClick={handlePrint}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Print Resume
                    </button>
                    <button
                        onClick={handleDownload}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Download as Text
                    </button>
                </div>

                {/* Career Objective */}
                <section className="mb-8">
                    <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-600 pb-2 mb-4">CAREER OBJECTIVE</h3>
                    <p className="text-justify leading-relaxed">
                        Full Stack Developer skilled in building scalable, responsive web applications using the MERN and Next.js ecosystems. 
                        Proficient in React.js, Next.js, Node.js, and MongoDB, with hands-on experience creating secure, full-stack projects using 
                        JWT and OAuth authentication. Strong ability to design, follow clean code practices, and work with modern web tools.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-8">
                    <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-600 pb-2 mb-4">TECHNICAL SKILLS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2">Frontend</h4>
                            <p>HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2">Backend</h4>
                            <p>Node.js, Express.js, REST API development</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2">Database</h4>
                            <p>MongoDB, Mongoose</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2">Authentication</h4>
                            <p>JWT, NextAuth, OAuth, Firebase</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2">Tools</h4>
                            <p>Git, GitHub, VS Code, IntelliJ, Vercel, Netlify</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2">Other</h4>
                            <p>Responsive UI, API Integration</p>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-8">
                    <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-600 pb-2 mb-4">PROJECTS</h3>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                            <h4 className="font-bold text-blue-700 text-lg mb-2">1. E-commerce With Next.js</h4>
                            <p className="text-blue-600 italic mb-2">Tech: Next.js, MongoDB, Express, Node.js, NextAuth</p>
                            <p className="mb-2">Live: https://e-commerch-client.vercel.app/</p>
                            <p className="mb-2">A full-featured e-commerce platform with secure authentication and payment integration.</p>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Built a full-featured event management system with secure authentication</li>
                                <li>Integrated Firebase for user login and authorization</li>
                                <li>Developed backend services with Express and MongoDB</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                            <h4 className="font-bold text-blue-700 text-lg mb-2">2. Skills Hub Platform</h4>
                            <p className="text-blue-600 italic mb-2">Tech: React, Node.js, MongoDB, Tailwind CSS</p>
                            <p className="mb-2">Live: https://skills-hub-murex.vercel.app/</p>
                            <p>A comprehensive skills development platform with interactive learning modules.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                            <h4 className="font-bold text-blue-700 text-lg mb-2">3. Assignment Management System</h4>
                            <p className="text-blue-600 italic mb-2">Tech: React, Firebase, Material-UI, Authentication</p>
                            <p className="mb-2">Live: https://assainment9.vercel.app/</p>
                            <p>Educational assignment management system with submission tracking and grading.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                            <h4 className="font-bold text-blue-700 text-lg mb-2">4. ContestHub</h4>
                            <p className="text-blue-600 italic mb-2">Tech: React, Tailwind CSS, Framer Motion</p>
                            <p className="mb-2">Live: https://wondrous-treacle-6f0d09.netlify.app/</p>
                            <p>Modern, responsive portfolio website with smooth animations and professional design.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                            <h4 className="font-bold text-blue-700 text-lg mb-2">5. FreelancerMarketer (MERN)</h4>
                            <p className="text-blue-600 italic mb-2">Tech: React, MongoDB, Express.js, Node.js</p>
                            <p className="mb-2">A full-featured platform for user registration and car rental management.</p>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Built a responsive, user-friendly UI with React</li>
                                <li>Integrated JWT authentication for user login and security</li>
                                <li>Developed backend APIs with full CRUD operations</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-600 pb-2 mb-4">EDUCATION</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <h4 className="font-bold text-blue-700">Raipur Govt University</h4>
                        <p className="text-gray-600">Graduated: February 2025</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resume;