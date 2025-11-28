import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-block mb-6"
                        >
                            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/40">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-[#fbbf24]" />
                                    Since 2000
                                    <Calendar className="h-5 w-5 text-[#fbbf24]" />
                                </span>
                            </div>
                        </motion.div>

                        <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6">
                            25 Years of Faithful Service
                        </h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-2 w-32 bg-gradient-to-r from-[#fbbf24] to-white mx-auto mb-8 rounded-full"
                        />

                        <p className="text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Since 2000, EverSpring International (Helping Hands India) has been transforming
                            lives across India. What began with one man's compassion has grown into a movement
                            of hope, reaching vulnerable children, elders, and communities with love, care, and
                            opportunity.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white text-[#0f172a] px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
                            onClick={() => (window.location.href = "/genesis")}
                        >
                            Read Our Story
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="h-6 w-6" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
