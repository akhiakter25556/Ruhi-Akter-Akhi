import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create email content
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        
        // Create mailto link
        const mailtoLink = `mailto:ruhiakterakhi@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    return (
        <section id="contact" className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="flex items-center text-3xl md:text-4xl font-bold mb-4"><FaPhone className="mr-2" /> Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                        <p className="text-gray-300 mb-8">
                            I'm open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 icon-bg flex items-center justify-center">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500">Email</span>
                                    <a href="mailto:ruhiakterakhi@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                                        ruhiakterakhi@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 icon-bg flex items-center justify-center">
                                    <FaWhatsapp size={20} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500">WhatsApp</span>
                                    <a href="https://wa.me/8801234567890" className="text-lg font-medium hover:text-accent transition-colors">
                                        +880 123 456 7890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 icon-bg flex items-center justify-center">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500">Location</span>
                                    <span className="text-lg font-medium">Raypur Lokkhipur, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4 text-accent">Connect With Me</h4>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/akhi-akter-578880396/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 icon-bg flex items-center justify-center hover:bg-accent/20 transition-colors group">
                                    <FaLinkedin size={20} className="group-hover:text-accent transition-colors" />
                                </a>
                                <a href="https://github.com/akhiakter25556" target="_blank" rel="noopener noreferrer" className="w-12 h-12 icon-bg flex items-center justify-center hover:bg-accent/20 transition-colors group">
                                    <FaGithub size={20} className="group-hover:text-accent transition-colors" />
                                </a>
                                <a href="https://twitter.com/akhiakter" target="_blank" rel="noopener noreferrer" className="w-12 h-12 icon-bg flex items-center justify-center hover:bg-accent/20 transition-colors group">
                                    <FaTwitter size={20} className="group-hover:text-accent transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-secondary p-8 rounded-xl shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500" 
                                    placeholder="Your Name" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500" 
                                    placeholder="Your Email" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea 
                                    rows="4" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 resize-none" 
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
