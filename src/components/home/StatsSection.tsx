import { motion } from "framer-motion";
import { Users, Home, BookOpen, Award } from "lucide-react";

const StatsSection = () => {
    const stats = [
        { icon: Users, value: "1000+", label: "Lives Transformed" },
        { icon: Home, value: "8", label: "Active Centres" },
        { icon: BookOpen, value: "500+", label: "Children Educated" },
        { icon: Award, value: "25", label: "Years of Service" },
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#0f172a] to-[#1e293b] bg-clip-text text-transparent mb-6">
                            Our Impact in Numbers
                        </h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-2 w-32 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto rounded-full"
                        />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="text-center bg-gradient-to-br from-white to-[#f8fafc] p-8 rounded-3xl shadow-xl border border-[#0f172a]/20 hover:shadow-2xl transition-all duration-300"
                            >
                                <stat.icon className="h-16 w-16 text-[#0f172a] mx-auto mb-6" />
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 100 }}
                                    className="text-5xl font-heading font-black bg-gradient-to-r from-[#0f172a] to-[#1e293b] bg-clip-text text-transparent mb-4"
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
