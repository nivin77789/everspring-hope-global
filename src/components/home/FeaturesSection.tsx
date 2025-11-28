import { motion } from "framer-motion";
import { Home, Heart, Users, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
    const features = [
        {
            icon: Home,
            title: "Children's Homes",
            description: "Safe havens providing shelter, education, and love to 150+ children",
            stat: "150+",
            statLabel: "Children"
        },
        {
            icon: Heart,
            title: "Elder Care",
            description: "Restoring dignity and hope to widows and elderly in their golden years",
            stat: "31",
            statLabel: "Elders"
        },
        {
            icon: Users,
            title: "Community Centres",
            description: "Empowering families within villages through holistic support",
            stat: "4",
            statLabel: "Centres"
        },
        {
            icon: TrendingUp,
            title: "Special Care",
            description: "HIV care and specialized programs for marginalized communities",
            stat: "88",
            statLabel: "Lives"
        },
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem'
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-block bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
                        >
                            OUR SERVICES
                        </motion.div>

                        <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#0f172a] to-[#1e293b] bg-clip-text text-transparent mb-6">
                            How We Serve
                        </h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-2 w-32 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mx-auto mb-8 rounded-full"
                        />

                        <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Holistic care addressing physical, emotional, educational, and spiritual needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative h-full"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0f172a]/40 to-[#1e293b]/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-[#0f172a]/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                                    <div className="mb-6 flex-shrink-0">
                                        <feature.icon className="h-16 w-16 text-[#0f172a] mx-auto group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-[#0f172a] mb-4 text-center">
                                        {feature.title}
                                    </h3>

                                    <div
                                        className={`h-1 w-12 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full mb-4 mx-auto`}
                                    ></div>

                                    <p className="text-gray-700 leading-relaxed text-center mb-6 flex-grow">
                                        {feature.description}
                                    </p>

                                    <div className="text-center mt-auto">
                                        <div className="text-3xl font-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                                            {feature.stat}
                                        </div>
                                        <div className="text-gray-600 text-sm font-semibold">
                                            {feature.statLabel}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
