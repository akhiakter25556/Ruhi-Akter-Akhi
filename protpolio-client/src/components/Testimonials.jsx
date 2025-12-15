import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Sarah Johnson',
        position: 'Project Manager at TechCorp',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        text: 'Akhi delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise made the project a huge success.',
        rating: 5
    },
    {
        name: 'Michael Chen',
        position: 'CEO at StartupXYZ',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        text: 'Working with Akhi was a pleasure. She understood our requirements perfectly and delivered a robust solution ahead of schedule.',
        rating: 5
    },
    {
        name: 'Emily Rodriguez',
        position: 'Marketing Director',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        text: 'The website Akhi built for us has significantly improved our online presence. Her modern design approach is exactly what we needed.',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gradient text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what some of my clients have to say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-primary p-6 rounded-xl shadow-lg border border-white/5 relative"
                        >
                            <div className="absolute top-4 left-4 text-accent/20">
                                <FaQuoteLeft size={24} />
                            </div>
                            
                            <div className="flex items-center gap-1 mb-4 justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" size={16} />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed text-center italic">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-accent text-sm">{testimonial.position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;