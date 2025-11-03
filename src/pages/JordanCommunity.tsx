import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { FaUserSlash, FaBriefcase, FaUtensils, FaBook } from "react-icons/fa";
import { Heart, Home, Utensils, Shield, Smile, TrendingUp, ArrowRight, Star, Users, Stethoscope, Calendar, Cross, Sparkles, Award } from "lucide-react";

const JordanCommunity = () => {
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

  const achievements = [
    {
      icon: Heart,
      title: "Restored Dignity",
      description: "Individuals regained self-respect, no longer needing to beg on streets",
      stat: "100%",
      statLabel: "Dignity Restored",
      color: "from-[#678E76] to-[#557366]",
    },
    {
      icon: Shield,
      title: "Health Protection",
      description: "No fatalities during COVID-19 pandemic through effective healthcare",
      stat: "0",
      statLabel: "COVID Fatalities",
      color: "from-[#8BAA92] to-[#678E76]",
    },
    {
      icon: Stethoscope,
      title: "Medical Care",
      description: "Daily wound care by dedicated nurse with necessary medications",
      stat: "24/7",
      statLabel: "Care Available",
      color: "from-[#C0A58B] to-[#A88D73]",
    },
    {
      icon: Utensils,
      title: "Basic Needs",
      description: "Regular food, shelter, and stipend for daily necessities",
      stat: "100%",
      statLabel: "Needs Met",
      color: "from-[#D4BFA3] to-[#C0A58B]",
    },
    {
      icon: Smile,
      title: "Peaceful Departures",
      description: "Those who passed did so peacefully with smiles and comfort",
      stat: "∞",
      statLabel: "Peace Achieved",
      color: "from-[#678E76] to-[#8BAA92]",
    },
    {
      icon: TrendingUp,
      title: "Social Inclusion",
      description: "Breaking isolation and building community support",
      stat: "50+",
      statLabel: "Lives Transformed",
      color: "from-[#8BAA92] to-[#C0A58B]",
    },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      items: [
        "Dedicated nurse providing daily wound care",
        "Access to necessary medications",
        "Regular health check-ups",
        "Disease management support"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Living Support",
      items: [
        "Regular nutritious meals",
        "Safe shelter and accommodation",
        "Monthly stipend for necessities",
        "Clothing and hygiene supplies"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Social Integration",
      items: [
        "Community building activities",
        "Stigma reduction education",
        "Fellowship and support groups",
        "Spiritual care and counseling"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#678E76] via-[#7A9B82] to-[#C0A58B]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
        
        {/* Floating Dove Symbols */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/20 text-6xl"
              initial={{
                x: -100,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: window.innerWidth + 100,
                y: [null, Math.random() * 100 - 50, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 25 + i * 4,
                repeat: Infinity,
                delay: i * 3,
                ease: "linear",
              }}
            >
              🕊
            </motion.div>
          ))}
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
                    <Star className="h-5 w-5 text-[#C0A58B]" fill="currentColor" />
                    Since 2015
                    <Star className="h-5 w-5 text-[#C0A58B]" fill="currentColor" />
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-heading font-black text-white mb-6 tracking-tight leading-none">
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block"
                >
                  Jordan
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block bg-gradient-to-r from-[#C0A58B] to-[#D4BFA3] bg-clip-text text-transparent"
                >
                  Community
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-2 w-48 bg-gradient-to-r from-[#C0A58B] to-white mx-auto mb-8 rounded-full"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl md:text-4xl font-light text-white/95"
              >
                Jagurupadu, Andhra Pradesh
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl md:text-2xl text-white/80 mt-4 max-w-2xl mx-auto"
              >
                Restoring Dignity for the Marginalized
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

      {/* Context Section */}
      <section className="py-32 bg-white relative z-10">
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
                  className="inline-block bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  OUR MISSION
                </motion.div>
                
                <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                  Serving the Most Vulnerable
                </h2>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto rounded-full"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-16"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#678E76]/20 to-[#C0A58B]/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white to-[#FAF8F5] p-12 md:p-16 rounded-3xl shadow-2xl border border-[#678E76]/10">
                  <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                    In <span className="font-bold text-[#678E76]">2015</span>, a community support initiative was established in{" "}
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="inline-block font-black text-3xl bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent cursor-default"
                    >
                      Jagurupadu
                    </motion.span>
                    , a village approximately 20 km from Peddapuram, Andhra Pradesh.
                  </p>
                  <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                    This area is home to a significant population affected by{" "}
                    <span className="font-bold text-red-600">leprosy</span>—a chronic infectious disease that historically leads to social stigma, discrimination, and isolation.
                  </p>
                  <div className="relative bg-gradient-to-br from-[#678E76]/10 to-[#8BAA92]/10 p-8 rounded-2xl border-l-4 border-[#678E76]">
                    <p className="text-2xl text-gray-800 leading-relaxed font-semibold">
                      "People affected by leprosy often face poverty, lack of access to healthcare, and exclusion from society, making them one of the most vulnerable groups in rural India."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vulnerability Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <h3 className="text-4xl font-heading font-bold text-[#678E76] mb-8">Understanding the Vulnerability</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: <FaUserSlash className="text-red-500" />, title: "Social Isolation", desc: "Excluded from community" },
  { icon: <FaBriefcase className="text-yellow-500" />, title: "Unemployment", desc: "Limited job opportunities" },
  { icon: <FaUtensils className="text-green-500" />, title: "Malnutrition", desc: "Lack of proper nutrition" },
  { icon: <FaBook className="text-blue-500" />, title: "No Education", desc: "Limited access to learning" },

                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-br from-[#FAF8F5] to-white p-6 rounded-2xl shadow-lg border border-[#678E76]/20"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="font-bold text-[#678E76] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-32 bg-gradient-to-b from-[#FAF8F5] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #678E76 1px, transparent 1px), linear-gradient(to bottom, #678E76 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
              >
                TRANSFORMATION STORIES
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                Key Achievements
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto mb-8 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
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
                      <achievement.icon className="h-16 w-16 text-[#678E76] mx-auto" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-heading font-bold text-[#678E76] mb-4 text-center">
                      {achievement.title}
                    </h3>
                    
                    <div className={`h-1 w-12 bg-gradient-to-r ${achievement.color} rounded-full mb-4 mx-auto`}></div>
                    
                    <p className="text-gray-700 leading-relaxed text-center mb-4">
                      {achievement.description}
                    </p>
                    
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="text-3xl font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent"
                      >
                        {achievement.stat}
                      </motion.div>
                      <div className="text-gray-600 text-sm font-semibold">{achievement.statLabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Support */}
      <section className="py-32 bg-gradient-to-br from-[#678E76] via-[#7A9B82] to-[#8BAA92] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 border border-white/30"
              >
                COMPREHENSIVE SUPPORT
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6">
                Our Holistic Approach
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#C0A58B] to-white mx-auto mb-8 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30 hover:bg-white/20 transition-all duration-500 h-full">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-[#C0A58B] to-[#D4BFA3] w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-6"
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">
                      {service.title}
                    </h3>
                    
                    <div className="h-1 w-12 bg-gradient-to-r from-[#C0A58B] to-white rounded-full mb-6 mx-auto"></div>
                    
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-3 text-white/90"
                        >
                          <div className="w-2 h-2 bg-[#C0A58B] rounded-full"></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/30">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="h-16 w-16 text-[#C0A58B]" />
                </motion.div>
                <p className="text-3xl text-white leading-relaxed italic mb-6">
                  "This program demonstrates the power of targeted community support in improving health, dignity, and social inclusion for one of the most marginalized groups in rural Andhra Pradesh."
                </p>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-3 text-[#C0A58B] font-bold text-xl"
                >
                  <Award className="h-8 w-8" />
                  From being outcasts to living with dignity
                  <Award className="h-8 w-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Join Our Mission of Hope
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your support can help us continue providing essential care, dignity, and hope to those who have been forgotten by society.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
            >
              Support Jordan Community
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { number: "50+", label: "Lives Transformed" },
                { number: "8+", label: "Years of Service" },
                { number: "100%", label: "Dignity Restored" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    className="text-5xl font-black text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/80 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ImageGallery
        title="Community Transformation"
        images={[
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
          "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&q=80",
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
          "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
          "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=800&q=80",
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
        ]}
        className="bg-white"
      />

      <Footer />
    </div>
  );
};

export default JordanCommunity;