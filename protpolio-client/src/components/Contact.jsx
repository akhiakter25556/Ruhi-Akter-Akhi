import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
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

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500">Email</span>
                                <span className="text-lg font-medium">email@example.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                <FaPhone size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500">Phone</span>
                                <span className="text-lg font-medium">+1 234 567 890</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500">Location</span>
                                <span className="text-lg font-medium">City, Country</span>
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
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors">
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
