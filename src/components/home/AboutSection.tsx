import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
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

                        <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6 leading-tight">
                            25 Years of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-amber-200">
                                Faithful Service
                            </span>
                        </h2>

                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            Since 2000, EverSpring International (Helping Hands India) has been transforming
                            lives across India. What began with one man's compassion has grown into a movement
                            of hope, reaching vulnerable children, elders, and communities with love, care, and
                            opportunity.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white text-[#0f172a] px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
                            onClick={() => (window.location.href = "/genesis")}
                        >
                            Read Our Story
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="h-5 w-5" />
                            </motion.div>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl group">
                            <img
                                src="/images/george.jpg"
                                alt="Dr. Rev. George Fernandes"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <h3 className="text-2xl font-bold text-white mb-1">Dr. Rev. George Fernandes</h3>
                                <p className="text-amber-400 font-medium">Founder & Visionary</p>
                            </div>
                        </div>

                        {/* Decorative elements behind image */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fbbf24]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
