import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
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
        <Contact />
      </main>
      <footer className="bg-secondary py-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
