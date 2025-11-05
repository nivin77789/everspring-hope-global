import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Users, Home, TrendingUp, BookOpen, Award, ArrowRight, Star, Sparkles, Target, Calendar,AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: Home,
      title: "Children's Homes",
      description: "Safe havens providing shelter, education, and love to 150+ children",
      color: "from-[#678E76] to-[#557366]",
      stat: "150+",
      statLabel: "Children"
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Restoring dignity and hope to widows and elderly in their golden years",
      color: "from-[#8BAA92] to-[#678E76]",
      stat: "31",
      statLabel: "Elders"
    },
    {
      icon: Users,
      title: "Community Centres",
      description: "Empowering families within villages through holistic support",
      color: "from-[#C0A58B] to-[#A88D73]",
      stat: "4",
      statLabel: "Centres"
    },
    {
      icon: TrendingUp,
      title: "Special Care",
      description: "HIV care and specialized programs for marginalized communities",
      color: "from-[#D4BFA3] to-[#C0A58B]",
      stat: "88",
      statLabel: "Lives"
    },
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Lives Transformed" },
    { icon: Home, value: "8", label: "Active Centres" },
    { icon: BookOpen, value: "500+", label: "Children Educated" },
    { icon: Award, value: "25", label: "Years of Service" },
  ];

  // Floating particle component
  const FloatingParticle = ({ i, left, top, delay = 0, icon: Icon }) => {
    return (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          left: `${left}%`,
          top: `${top}%`,
          pointerEvents: "none",
          zIndex: 2,
        }}
        initial={{ y: 0, opacity: 0.08, scale: 0.8, rotate: 0 }}
        animate={{
          y: [-20, -150, -20],
          opacity: [0.08, 0.2, 0.08],
          rotate: 180,
        }}
        transition={{
          duration: 20 + (i % 6) * 4,
          repeat: Infinity,
          repeatType: "loop",
          delay,
          ease: "easeInOut",
        }}
        className="text-[#678E76]/15"
      >
        <Icon className="h-8 w-8" />
      </motion.div>
    );
  };

  const floatingIcons = [
    { icon: Heart },
    { icon: Users },
    { icon: Home },
    { icon: Star },
    { icon: Target },
    { icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      <Hero />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#678E76]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -mousePosition.x / 40,
            y: -mousePosition.y / 40,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute top-1/3 -right-40 w-96 h-96 bg-[#C0A58B]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x / 60,
            y: -mousePosition.y / 60,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#8BAA92]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Did You Know Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0">
          {floatingIcons.map((item, i) => (
            <FloatingParticle
              key={i}
              i={i}
              left={10 + Math.random() * 80}
              top={10 + Math.random() * 70}
              delay={i * 2}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #678E76 1px, transparent 1px), linear-gradient(to bottom, #678E76 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Title with reduced animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <div className="bg-[#678E76]/10 backdrop-blur-md px-5 py-2 rounded-full border border-[#678E76]/20">
                  <span className="text-[#678E76] font-semibold flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-[#C0A58B]" fill="currentColor" />
                    India's Reality
                    <Star className="h-4 w-4 text-[#C0A58B]" fill="currentColor" />
                  </span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-4">
                Did You Know?
              </h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto rounded-full" />
            </motion.div>

            {/* Main content card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#678E76]/10 to-[#C0A58B]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-white to-[#FAF8F5] p-6 md:p-10 rounded-3xl shadow-2xl border border-[#678E76]/10">
                {/* India illustration */}
                <div className="flex items-start gap-6 mb-10">
                  <div className="hidden md:block flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#678E76] to-[#8BAA92] rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 10 L90 90 L10 90 Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    India, the world's second most populous nation, is home to over 1.2 billion people across 29 states and 7 union territories. Despite decades of high economic growth, millions remain trapped in poverty. Alarming realities paint the picture:
                  </p>
                </div>

                {/* Statistics grid with reduced animations */}
                <div className="grid md:grid-cols-2 gap-6 my-12">
                  {[
                    { stat: "22,000", text: "children die every day due to poverty-related causes (UNICEF)", icon: Heart },
                    { stat: "1 in 6", text: "children globally face food insecurity and malnutrition", icon: AlertCircle },
                    { stat: "3M+", text: "children live on the streets", icon: Home },
                    { stat: "150M", text: "children are trapped in bonded labour", icon: Users },
                    { stat: "50%", text: "of children have access to education", icon: BookOpen },
                    { stat: "2M", text: "girls aged 5 - 15 exploited in commercial sex work", icon: Target },
                    
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-[#678E76]/20 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#678E76] to-[#8BAA92] flex items-center justify-center shadow-lg">
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-2xl md:text-3xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-2">
                              {item.stat}
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mission statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-r from-[#678E76]/10 to-transparent border-l-4 border-[#678E76] rounded-2xl p-6 md:p-8 my-12"
                >
                  <div className="absolute top-4 right-4 opacity-10">
                    <Heart className="w-16 h-16 text-[#678E76]" fill="currentColor" />
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-800 font-semibold relative z-10">
                    Amidst this vast socio-economic, religious, traditional, and caste-driven complexity, Helping Hands India was born in 2001 with a mission to empower and transform vulnerable children and communities—regardless of caste, creed, religion, or background.
                  </p>
                </motion.div>

                {/* Founder story */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="hidden md:block">
                      <div className="bg-gradient-to-br from-[#678E76] to-[#8BAA92] p-6 rounded-2xl text-white text-center shadow-xl">
                        <Users className="w-12 h-12 mx-auto mb-3" />
                        <div className="text-2xl font-black mb-2">"Appa"</div>
                        <div className="text-base opacity-90">Father to Hundreds</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                        The movement began when compassion and a divine call touched the heart of Dr. Rev. George Fernandes, a counsellor and theologian. Known lovingly by children as <span className="font-bold text-[#678E76]">"Appa" (Father)</span>, George drew strength from his own painful childhood.
                      </p>
                      <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        Growing up as a semi-orphan and struggling under poverty, he once stood on the brink of despair. But in that moment of brokenness, God transformed his life igniting in him a passion to transform the lives of countless others.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#C0A58B]/10 to-[#D4BFA3]/10 p-6 rounded-2xl border border-[#C0A58B]/20">
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      For the past 25 years, Helping Hands India has rendered restless service across the nation. What began with one man's compassion has grown into a movement of hope. Through these years of unwavering dedication, countless children have been rescued, educated, and empowered. Families have been restored, communities uplifted, and lives transformed.
                    </p>
                  </div>

                  {/* Final quote */}
                  <div className="relative mt-10 pt-10 border-t-2 border-[#678E76]/20">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-[#678E76] flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-[#678E76]" />
                      </div>
                    </div>
                    <p className="text-base md:text-xl leading-relaxed text-gray-800 font-semibold italic text-center">
                      Today, Helping Hands India stands as a living transforming power, reminding us that when faith meets compassion, despair turns into hope, poverty into possibility, and broken lives into testimonies of grace.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-br from-[#678E76] via-[#7A9B82] to-[#8BAA92] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/40">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#C0A58B]" />
                    Since 2000
                    <Calendar className="h-5 w-5 text-[#C0A58B]" />
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
                className="h-2 w-32 bg-gradient-to-r from-[#C0A58B] to-white mx-auto mb-8 rounded-full"
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
                className="group bg-white text-[#678E76] px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
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

      {/* Stats Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                Our Impact in Numbers
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto rounded-full"
              />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-white to-[#FAF8F5] p-8 rounded-3xl shadow-xl border border-[#678E76]/20"
                >
                  <stat.icon className="h-16 w-16 text-[#678E76] mx-auto mb-6" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="text-5xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-4"
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

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-[#FAF8F5] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #678E76 1px, transparent 1px), linear-gradient(to bottom, #678E76 1px, transparent 1px)`,
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
                className="inline-block bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
              >
                OUR SERVICES
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                How We Serve
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto mb-8 rounded-full"
              />
              
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Holistic care addressing physical, emotional, educational, and spiritual needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#678E76]/30 to-[#C0A58B]/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-[#678E76]/20 hover:shadow-2xl transition-all duration-500 h-full">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="mb-6"
                    >
                      <feature.icon className="h-16 w-16 text-[#678E76] mx-auto" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-heading font-bold text-[#678E76] mb-4 text-center">
                      {feature.title}
                    </h3>
                    
                    <div className={`h-1 w-12 bg-gradient-to-r ${feature.color} rounded-full mb-4 mx-auto`}></div>
                    
                    <p className="text-gray-700 leading-relaxed text-center mb-4">
                      {feature.description}
                    </p>
                    
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="text-3xl font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent"
                      >
                        {feature.stat}
                      </motion.div>
                      <div className="text-gray-600 text-sm font-semibold">{feature.statLabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-[#C0A58B] via-[#D4BFA3] to-[#C0A58B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-8"
            >
              <Heart className="h-20 w-20 text-white" fill="currentColor" />
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-tight">
              Join the Movement of Hope
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your partnership can transform lives and restore dignity to vulnerable children,
              elders, and communities across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
                onClick={() => (window.location.href = "/donate")}
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
                className="group bg-white/20 backdrop-blur-md text-white px-12 py-6 rounded-full font-bold text-xl border-4 border-white/30 hover:bg-white/30 transition-all duration-300"
                onClick={() => (window.location.href = "/genesis")}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;