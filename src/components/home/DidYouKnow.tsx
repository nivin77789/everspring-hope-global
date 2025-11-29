import { motion } from "framer-motion";
import { Star, Heart, AlertCircle, Home, Users, BookOpen, Target, Sparkles, Quote } from "lucide-react";

const DidYouKnow = () => {
    const floatingIcons = [
        { icon: Heart },
        { icon: Users },
        { icon: Home },
        { icon: Star },
        { icon: Target },
        { icon: Sparkles },
    ];

    const FloatingParticle = ({ i, left, top, delay = 0, icon: Icon }: any) => {
        return (
            <motion.div
                key={i}
                style={{
                    position: "absolute",
                    left: `${left}%`,
                    top: `${top}%`,
                    pointerEvents: "none",
                    zIndex: 0,
                }}
                initial={{ y: 0, opacity: 0, scale: 0.5, rotate: 0 }}
                animate={{
                    y: [-20, -100, -20],
                    opacity: [0, 0.15, 0],
                    rotate: 360,
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 15 + (i % 5) * 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay,
                    ease: "easeInOut",
                }}
                className="text-gold/20"
            >
                <Icon className="h-12 w-12" />
            </motion.div>
        );
    };

    const stats = [
        { stat: "22,000", text: "Children die daily from poverty", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
        { stat: "1 in 6", text: "Children face food insecurity", icon: AlertCircle, color: "text-orange-500", bg: "bg-orange-50" },
        { stat: "3M+", text: "Children live on the streets", icon: Home, color: "text-blue-500", bg: "bg-blue-50" },
        { stat: "150M", text: "Children in bonded labour", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
        { stat: "50%", text: "Lack access to quality education", icon: BookOpen, color: "text-green-500", bg: "bg-green-50" },
        { stat: "2M", text: "Girls exploited in commercial work", icon: Target, color: "text-pink-500", bg: "bg-pink-50" },
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {floatingIcons.map((item, i) => (
                    <FloatingParticle
                        key={i}
                        i={i}
                        left={Math.random() * 100}
                        top={Math.random() * 100}
                        delay={i * 2}
                        icon={item.icon}
                    />
                ))}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark font-semibold text-sm mb-6 border border-gold/20"
                        >
                            <Star className="w-4 h-4 fill-current" />
                            <span>The Reality of India</span>
                            <Star className="w-4 h-4 fill-current" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6 tracking-tight"
                        >
                            Did You <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Know?</span>
                        </motion.h2>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 100 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-1.5 bg-gradient-to-r from-gold to-yellow-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Decorative Blur Behind */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-blue-600/30 rounded-[2.5rem] blur-2xl opacity-50" />

                        <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
                            <div className="grid lg:grid-cols-12 gap-0">

                                {/* Left Side: Context & Stats */}
                                <div className="lg:col-span-7 p-8 md:p-12 lg:border-r border-slate-100">
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                            <span className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                                                <span className="font-heading">IN</span>
                                            </span>
                                            A Nation of Contrast
                                        </h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            India is home to over 1.2 billion people. Despite economic growth, millions remain trapped in the cycle of poverty. The numbers tell a heartbreaking story that we cannot ignore.
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {stats.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                                className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
                                            >
                                                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <div className="text-3xl font-black text-slate-800 mb-1 group-hover:text-gold transition-colors">
                                                    {item.stat}
                                                </div>
                                                <div className="text-sm font-medium text-slate-500 leading-snug">
                                                    {item.text}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Founder & Mission */}
                                <div className="lg:col-span-5 bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                        </svg>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="relative">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-gold to-yellow-600 rounded-full blur opacity-75"></div>
                                                <img
                                                    src="/images/george.jpg"
                                                    alt="Dr. Rev. George Fernandes"
                                                    className="relative w-20 h-20 rounded-full border-2 border-white object-cover bg-white"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-xl">Dr. Rev. George Fernandes</div>
                                                <div className="text-gold text-sm font-medium tracking-wide uppercase">Founder & Visionary</div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="relative">
                                                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-gold/20 rotate-180" />
                                                <p className="text-slate-300 leading-relaxed italic pl-6 border-l-2 border-gold/30">
                                                    "Growing up as a semi-orphan and struggling under poverty, I stood on the brink of despair. But God transformed my life, igniting a passion to transform others."
                                                </p>
                                            </div>

                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                Known as <span className="text-white font-semibold">"Father to Hundreds"</span>, his compassion birthed Helping Hands India in 2001.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Sparkles className="w-5 h-5 text-gold" />
                                            <h4 className="font-bold text-lg">Our Response</h4>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            For 25 years, we've been a movement of hope—rescuing, educating, and empowering children regardless of caste or creed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DidYouKnow;
