// Simple script to create a PDF version of the resume
// This is a placeholder - in a real scenario, you would use a tool like Puppeteer or similar

const fs = require('fs');
const path = require('path');

// For now, we'll create a simple text-based resume that can be downloaded
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

4. Portfolio Website
Tech: React, Tailwind CSS, Framer Motion
Live: https://wondrous-treacle-6f0d09.netlify.app/

EDUCATION
Raipur Govt University
Graduated: February 2025
`;

// Write the resume content to a text file that can be downloaded
fs.writeFileSync(path.join(__dirname, 'public', 'resume.txt'), resumeContent);

console.log('Resume file created successfully!');