import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="py-32 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.2),transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.2),transparent_50%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-block mb-8"
                    >
                        <Heart
                            className="h-20 w-20 text-[#fbbf24]"
                            fill="currentColor"
                        />
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-tight">
                        Join the Movement of Hope
                    </h2>

                    <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Your partnership can transform lives and restore dignity to vulnerable
                        children, elders, and communities across India.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-[#0f172a] px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
                            onClick={() => (window.location.href = '/donate')}
                        >
                            Make a Donation
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="h-6 w-6" />
                            </motion.div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white/10 backdrop-blur-md text-white px-12 py-6 rounded-full font-bold text-xl border-4 border-white/30 hover:bg-white/20 transition-all duration-300"
                            onClick={() => (window.location.href = '/genesis')}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
