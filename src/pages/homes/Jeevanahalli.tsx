import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { Heart, BookOpen, Target, Users, Utensils, ArrowRight, Star, Sparkles } from "lucide-react";

const Jeevanahalli = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const provisions = [
        {
            icon: BookOpen,
            title: "Education Support",
            description: "Helping children with homework and academic challenges.",
            color: "from-[#1E3A5F] to-[#2D4A7C]",
        },
        {
            icon: Heart,
            title: "Moral Guidance",
            description: "Instilling values to help them navigate life's choices.",
            color: "from-[#2D4A7C] to-[#3D5A8C]",
        },
        {
            icon: Target,
            title: "Goal Setting",
            description: "Encouraging children to dream big and plan for their future.",
            color: "from-[#C9A96A] to-[#D4B77D]",
        },
        {
            icon: Users,
            title: "Role Models",
            description: "Connecting them with mentors who inspire success.",
            color: "from-[#D4B77D] to-[#DFC690]",
        },
        {
            icon: Utensils,
            title: "Nutritious Meals",
            description: "Providing healthy evening meals to support physical growth.",
            color: "from-[#1E3A5F] to-[#2D4A7C]",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            <Navbar />

            {/* Animated Background Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        x: mousePosition.x / 50,
                        y: mousePosition.y / 50,
                    }}
                    transition={{ type: "spring", damping: 30 }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-[#1E3A5F]/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: -mousePosition.x / 40,
                        y: -mousePosition.y / 40,
                    }}
                    transition={{ type: "spring", damping: 30 }}
                    className="absolute top-1/3 -right-40 w-96 h-96 bg-[#C9A96A]/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: mousePosition.x / 60,
                        y: -mousePosition.y / 60,
                    }}
                    transition={{ type: "spring", damping: 30 }}
                    className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#2D4A7C]/20 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#2D4A7C] to-[#C9A96A]">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-full h-full" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                    </div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        style={{ opacity, scale }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-block mb-6"
                            >
                                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/40">
                                    <span className="text-white font-semibold flex items-center gap-2">
                                        <Star className="h-5 w-5 text-[#C9A96A]" fill="currentColor" />
                                        New Hope Community Centre
                                        <Star className="h-5 w-5 text-[#C9A96A]" fill="currentColor" />
                                    </span>
                                </div>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 tracking-tight leading-none">
                                <motion.span
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="inline-block"
                                >
                                    Jeevanahalli
                                </motion.span>
                            </h1>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="h-2 w-48 bg-gradient-to-r from-[#C9A96A] to-white mx-auto mb-8 rounded-full"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-2xl md:text-3xl font-light text-white/95 max-w-3xl mx-auto"
                            >
                                Born from a deep connection to roots, serving the community where it matters most.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="pt-12"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-block cursor-pointer"
                            >
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/40 hover:bg-white/30 transition-all">
                                    <ArrowRight className="h-6 w-6 text-white rotate-90" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Origin Story */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-center mb-16">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-block bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
                                >
                                    OUR ROOTS
                                </motion.div>

                                <h2 className="text-4xl md:text-6xl font-heading font-black bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] bg-clip-text text-transparent mb-6">
                                    A Personal Connection
                                </h2>

                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="h-2 w-32 bg-gradient-to-r from-[#1E3A5F] to-[#C9A96A] mx-auto rounded-full"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative mb-16"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A96A]/20 rounded-3xl blur-2xl" />
                                <div className="relative bg-gradient-to-br from-white to-[#F8F9FA] p-12 md:p-16 rounded-3xl shadow-2xl border border-[#1E3A5F]/10">
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                        The New Hope Community Centre in Jeevanahalli was born from <span className="font-bold text-[#1E3A5F]">George Fernandes’s</span> deep connection to his roots.
                                    </p>
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        He established this Centre in the very <span className="font-bold text-[#2D4A7C]">Jeevanahalli slum</span> where he himself grew up, desiring to give back to the community that shaped him.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Turning Point */}
            <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, #1E3A5F 1px, transparent 1px), linear-gradient(to bottom, #1E3A5F 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-heading font-black text-[#1E3A5F] mb-6">
                                    A Heartbreaking Incident
                                </h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-[#C9A96A] to-[#D4B77D] rounded-full mb-8"></div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Three years ago, a tragedy shook the community. A <span className="font-bold text-red-600">12-year-old girl committed suicide</span> after failing her 7th-grade exams.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    This heartbreaking event highlighted the immense pressure and lack of support children in the slum faced. It was a wake-up call that something needed to be done to support these vulnerable young minds.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A96A]/20 rounded-3xl blur-2xl" />
                                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-[#1E3A5F]/10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#1E3A5F]/10 p-3 rounded-full">
                                            <Heart className="h-8 w-8 text-[#1E3A5F]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#1E3A5F]">A Safe Haven</h3>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        "We realized that these children didn't just need academic help; they needed hope, guidance, and a safe place to belong."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Provide */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-[#1E3A5F] mb-6">
                                Holistic Support
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The Centre now serves as a beacon of hope, providing comprehensive support to ensure every child thrives.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {provisions.map((provision, index) => (
                                <motion.div
                                    key={provision.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A96A]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-[#1E3A5F]/10 h-full">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className={`bg-gradient-to-br ${provision.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                                        >
                                            <provision.icon className="h-7 w-7 text-white" />
                                        </motion.div>

                                        <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">
                                            {provision.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {provision.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-gradient-to-br from-[#1E3A5F] via-[#2D4A7C] to-[#3D5A8C] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block mb-6"
                        >
                            <Sparkles className="h-16 w-16 text-[#C9A96A]" />
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">
                            Transforming Lives Today
                        </h2>

                        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30">
                            <p className="text-2xl text-white leading-relaxed font-semibold">
                                Today, the Centre benefits <span className="text-[#C9A96A] font-black text-3xl">38 children</span>, giving them the confidence, skills, and values they need to succeed in life.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ImageGallery
                title="Jeevanahalli Home Gallery"
                images={[
                    "/images/child/1.jpeg?w=800&q=80",
                    "/images/child/2.jpeg?w=800&q=80",
                    "/images/child/3.jpeg?w=800&q=80",
                    "/images/child/4.jpeg?w=800&q=80",
                    "/images/child/5.jpeg?w=800&q=80",
                    "/images/child/6.jpeg?w=800&q=80",
                    "/images/child/7.jpeg?w=800&q=80",
                    "/images/child/8.jpeg?w=800&q=80",
                ]}
                className="bg-white"
            />

            <Footer />
        </div>
    );
};

export default Jeevanahalli;
