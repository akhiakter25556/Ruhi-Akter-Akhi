import { motion } from "framer-motion";
import React from 'react';
import { FaTwitter, FaRegCommentDots } from 'react-icons/fa';

const testimonials = [
    {
        name: 'ALEXANDER VOSS',
        position: 'CEO, TECHFLOW',
        text: "Akhi's ability to translate complex data into beautiful visual systems is unmatched. A true visionary in frontend development.",
        tag: 'ROI +40%',
        color: 'text-purple-400'
    },
    {
        name: 'SARAH JENKINS',
        position: 'FOUNDER, BLOOMLY',
        text: "The brand identity and web architecture Akhi created for us became our biggest competitive advantage. Pure genius.",
        tag: 'BRAND LIFT',
        color: 'text-cyan-400'
    },
    {
        name: 'MARCUS RIVERA',
        position: 'CREATIVE DIRECTOR',
        text: "Innovative, fast, and highly technical. She understands the user journey better than anyone I have worked with.",
        tag: '10/10 FLOW',
        color: 'text-pink-400'
    },
    {
        name: 'NATALIA PETROV',
        position: 'PRODUCT MANAGER',
        text: "Working with Akhi was like seeing our vision come to life in high-definition. Remarkable attention to component logic.",
        tag: 'SYSTEM SYNC',
        color: 'text-blue-400'
    }
];

const Testimonials = () => {
    // Duplicate the array to create a seamless infinite loop
    const scrollItems = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-24 bg-[#050505] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-16 relative">
                {/* Header Style from Image */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] tracking-[0.3em] text-cyan-400 font-bold uppercase">Verified_Feed_Input</span>
                        </div>
                        <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-none">
                            CLIENT <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>SIGNALS.</span>
                        </h2>
                    </div>

                    <div className="text-right pb-2">
                        <h3 className="text-4xl font-bold text-white/10 tracking-widest">TRUST_0.98</h3>
                        <p className="text-[10px] tracking-[0.2em] text-slate-500 italic">DECODING SATISFACTION LEVELS...</p>
                    </div>
                </div>
            </div>

            {/* Infinite Scroll Container */}
            <div className="flex relative">
                <motion.div
                    className="flex gap-6 pr-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear"
                        }
                    }}
                >
                    {scrollItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-[#0d0d10] border border-white/5 p-8 rounded-[2rem] relative group hover:border-white/20 transition-all duration-500"
                        >
                            {/* Card Top Icons */}
                            <div className="flex justify-between items-start mb-8">
                                <div className={`px-3 py-1 rounded-full bg-white/5 text-[9px] font-bold tracking-widest ${item.color} border border-white/5`}>
                                    {item.tag}
                                </div>
                                <FaRegCommentDots className="text-white/10 group-hover:text-white/30 transition-colors" size={24} />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-xl md:text-2xl font-medium text-slate-300 mb-12 leading-relaxed">
                                "{item.text}"
                            </p>

                            {/* Card Footer */}
                            <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-xs font-bold">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black tracking-widest uppercase">{item.name}</h4>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{item.position}</p>
                                    </div>
                                </div>
                                <FaTwitter className="text-white/20 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for the edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Testimonials;