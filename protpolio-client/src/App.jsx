import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-secondary py-12 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Akhi Akter</h3>
              <p className="text-sm leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions 
                with modern technologies and best practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
              <p className="text-sm mb-2">ruhiakterakhi@gmail.com</p>
              <p className="text-sm mb-4">Raypur Lokkhipur, Bangladesh</p>
              <p className="text-sm">Available for freelance projects</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Akhi Akter. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
