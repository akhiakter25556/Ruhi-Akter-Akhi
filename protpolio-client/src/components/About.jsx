import { motion } from "framer-motion";
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator, SiFigma } from 'react-icons/si';

const About = () => {
  const circularIcons = [
    {
      icon: <SiAdobephotoshop className="text-[#66B2FF] text-2xl" />,
      bg: "rgba(255,255,255,0.06)",
      style: { top: '4%', left: '50%', transform: 'translateX(-50%)' },
      animate: { y: [0, -15, 0] } // Vertical floating
    },
    {
      icon: <SiAdobepremierepro className="text-[#8B5CF6] text-2xl" />,
      bg: "rgba(255,255,255,0.06)",
      style: { top: '50%', right: '4%', transform: 'translateY(-50%)' },
      animate: { x: [0, 15, 0] } // Horizontal floating
    },
    {
      icon: <SiAdobeillustrator className="text-[#FF9A00] text-2xl" />,
      bg: "rgba(255,255,255,0.06)",
      style: { bottom: '4%', left: '50%', transform: 'translateX(-50%)' },
      animate: { y: [0, 15, 0] } // Vertical floating
    },
    {
      icon: <SiFigma className="text-[#F24E1E] text-2xl" />,
      bg: "rgba(255,255,255,0.06)",
      style: { top: '50%', left: '4%', transform: 'translateY(-50%)' },
      animate: { x: [0, -15, 0] } // Horizontal floating
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#070b15] text-white py-20 px-6 relative overflow-hidden font-sans">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE: Glassy Icon Cards */}
        <div className="relative flex justify-center items-center h-[500px]">
          <div
            className="absolute inset-0 rounded-3xl border border-white/5 bg-black/20 backdrop-blur-xl"
            style={{ boxShadow: 'inset 0 0 80px rgba(255,255,255,0.04)' }}
          />

          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '70px 70px'
          }} />

          {circularIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                ...item.animate // This spreads the specific floating movement
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.12 * index },
                // Infinite floating animation settings:
                default: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2 // Staggered start for smoother effect
                }
              }}
              whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              className="absolute rounded-3xl border border-white/10 backdrop-blur-2xl flex items-center justify-center shadow-[0_18px_50px_rgba(0,0,0,0.25)] z-20"
              style={{ width: '72px', height: '72px', background: item.bg, ...item.style }}
            >
              {item.icon}
            </motion.div>
          ))}

          <div className="relative w-[340px] h-[340px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 blur-xl" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="relative w-56 h-56 rounded-full bg-[#0f172a] border border-cyan-400/15 shadow-[0_0_80px_rgba(34,211,238,0.14)] flex flex-col items-center justify-center">
              <p className="text-5xl font-black tracking-tight text-white">03+</p>
              <span className="text-xs uppercase tracking-[0.35em] text-cyan-300 mt-2">Years Active</span>
            </div>
          </div>

          <div className="absolute w-[380px] h-[380px] rounded-full border border-cyan-500/10 opacity-20" />
          <div className="absolute w-[260px] h-[260px] rounded-full border border-violet-500/10 opacity-30" />
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-cyan-400"></span>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">Full Stack Developer</p>
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              AKHI AKTER <br />
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent italic">
                RUHI.
              </span>
            </h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            I am <span className="text-white font-bold italic">Akhi Akter Ruhi</span>, a passionate Full Stack Developer specializing in building scalable web applications. With 3+ years of experience, I blend code and creativity to deliver seamless digital experiences.
          </p>

          <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Core Skills</p>
              <p className="text-sm text-slate-200">Next.js, React, Node.js, MongoDB, TypeScript, Tailwind CSS.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Location</p>
              <p className="text-sm text-slate-200">Raipur, Lakshmipur, Bangladesh — Working Worldwide.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-4 rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(124,58,237,0.3)]"
            >
              CONNECT WITH ME
            </motion.button>

            <button className="group flex items-center gap-3">
              <div className="p-3 border border-white/20 rounded-full group-hover:border-cyan-400 transition-colors">
                <FaDownload className="text-white group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase text-slate-500 font-bold">Download</p>
                <p className="text-sm font-bold border-b border-transparent group-hover:border-white transition-all">AKHI_AKTER_RESUME.PDF</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;