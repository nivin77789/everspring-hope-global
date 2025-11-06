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
      color: "from-[#0F1B3A] to-[#1E3A8A]",
    },
    {
      icon: Shield,
      title: "Health Protection",
      description: "No fatalities during COVID-19 pandemic through effective healthcare",
      stat: "0",
      statLabel: "COVID Fatalities",
      color: "from-[#1E3A8A] to-[#3B82F6]",
    },
    {
      icon: Stethoscope,
      title: "Medical Care",
      description: "Daily wound care by dedicated nurse with necessary medications",
      stat: "24/7",
      statLabel: "Care Available",
      color: "from-[#B8860B] to-[#D4AF37]",
    },
    {
      icon: Utensils,
      title: "Basic Needs",
      description: "Regular food, shelter, and stipend for daily necessities",
      stat: "100%",
      statLabel: "Needs Met",
      color: "from-[#0F1B3A] to-[#3B82F6]",
    },
    {
      icon: Smile,
      title: "Peaceful Departures",
      description: "Those who passed did so peacefully with smiles and comfort",
      stat: "∞",
      statLabel: "Peace Achieved",
      color: "from-[#B8860B] to-[#F59E0B]",
    },
    {
      icon: TrendingUp,
      title: "Social Inclusion",
      description: "Breaking isolation and building community support",
      stat: "50+",
      statLabel: "Lives Transformed",
      color: "from-[#1E3A8A] to-[#B8860B]",
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
      color: "from-[#0F1B3A] to-[#1E3A8A]"
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
      color: "from-[#B8860B] to-[#D4AF37]"
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
      color: "from-[#1E3A8A] to-[#3B82F6]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#0F1B3A]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -mousePosition.x / 40,
            y: -mousePosition.y / 40,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute top-1/3 -right-40 w-96 h-96 bg-[#B8860B]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x / 60,
            y: -mousePosition.y / 60,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#1E3A8A]/15 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B3A] via-[#1E3A8A] to-[#B8860B]">
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
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-4"
              >
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40">
                  <span className="text-white font-semibold flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-[#B8860B]" fill="currentColor" />
                    Since 2015
                    <Star className="h-4 w-4 text-[#B8860B]" fill="currentColor" />
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4 tracking-tight leading-none">
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
                  className="inline-block bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent"
                >
                  Community
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-1 w-32 bg-gradient-to-r from-[#B8860B] to-white mx-auto mb-6 rounded-full"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl font-light text-white/95"
              >
                Jagurupadu, Andhra Pradesh
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl mx-auto"
              >
                Restoring Dignity for the Marginalized
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-8"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block cursor-pointer"
              >
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40 hover:bg-white/30 transition-all">
                  <ArrowRight className="h-5 w-5 text-white rotate-90" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4"
                >
                  OUR MISSION
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] bg-clip-text text-transparent mb-4">
                  Serving the Most Vulnerable
                </h2>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 w-24 bg-gradient-to-r from-[#0F1B3A] to-[#B8860B] mx-auto rounded-full"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-12"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0F1B3A]/10 to-[#B8860B]/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-[#0F1B3A]/10">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In <span className="font-bold text-[#0F1B3A]">2015</span>, a community support initiative was established in{" "}
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="inline-block font-black text-2xl bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] bg-clip-text text-transparent cursor-default"
                    >
                      Jagurupadu
                    </motion.span>
                    , a village approximately 20 km from Peddapuram, Andhra Pradesh.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    This area is home to a significant population affected by{" "}
                    <span className="font-bold text-[#B8860B]">leprosy</span>—a chronic infectious disease that historically leads to social stigma, discrimination, and isolation.
                  </p>
                  <div className="relative bg-gradient-to-br from-[#0F1B3A]/5 to-[#1E3A8A]/5 p-6 rounded-2xl border-l-4 border-[#0F1B3A]">
                    <p className="text-lg text-gray-800 leading-relaxed font-semibold">
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
                <h3 className="text-3xl font-heading font-bold text-[#0F1B3A] mb-6">Understanding the Vulnerability</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { icon: <FaUserSlash className="text-[#B8860B]" />, title: "Social Isolation", desc: "Excluded from community" },
                    { icon: <FaBriefcase className="text-[#1E3A8A]" />, title: "Unemployment", desc: "Limited job opportunities" },
                    { icon: <FaUtensils className="text-[#0F1B3A]" />, title: "Malnutrition", desc: "Lack of proper nutrition" },
                    { icon: <FaBook className="text-[#3B82F6]" />, title: "No Education", desc: "Limited access to learning" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white p-4 rounded-2xl shadow-lg border border-[#0F1B3A]/10"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h4 className="font-bold text-[#0F1B3A] mb-2 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #0F1B3A 1px, transparent 1px), linear-gradient(to bottom, #0F1B3A 1px, transparent 1px)`,
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
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] text-white px-4 py-1 rounded-full text-xs font-semibold mb-6"
              >
                TRANSFORMATION STORIES
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] bg-clip-text text-transparent mb-4">
                Key Achievements
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#0F1B3A] to-[#B8860B] mx-auto mb-6 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0F1B3A]/20 to-[#B8860B]/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-[#0F1B3A]/10 hover:shadow-2xl transition-all duration-500 h-full">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="mb-4"
                    >
                      <achievement.icon className="h-12 w-12 text-[#0F1B3A] mx-auto" />
                    </motion.div>
                    
                    <h3 className="text-xl font-heading font-bold text-[#0F1B3A] mb-3 text-center">
                      {achievement.title}
                    </h3>
                    
                    <div className={`h-1 w-10 bg-gradient-to-r ${achievement.color} rounded-full mb-3 mx-auto`}></div>
                    
                    <p className="text-gray-700 leading-relaxed text-center mb-3 text-sm">
                      {achievement.description}
                    </p>
                    
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="text-2xl font-black bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] bg-clip-text text-transparent"
                      >
                        {achievement.stat}
                      </motion.div>
                      <div className="text-gray-600 text-xs font-semibold">{achievement.statLabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Support */}
      <section className="py-24 bg-gradient-to-br from-[#0F1B3A] via-[#1E3A8A] to-[#0F1B3A] relative overflow-hidden">
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
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-semibold mb-6 border border-white/30"
              >
                COMPREHENSIVE SUPPORT
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
                Our Holistic Approach
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#B8860B] to-white mx-auto mb-6 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
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
                  <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/30 hover:bg-white/20 transition-all duration-500 h-full">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-[#B8860B] to-[#D4AF37] w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-4"
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-heading font-bold text-white mb-4 text-center">
                      {service.title}
                    </h3>
                    
                    <div className="h-1 w-10 bg-gradient-to-r from-[#B8860B] to-white rounded-full mb-4 mx-auto"></div>
                    
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-2 text-white/90 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-[#B8860B] rounded-full flex-shrink-0"></div>
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
              className="mt-12 text-center"
            >
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Sparkles className="h-12 w-12 text-[#B8860B]" />
                </motion.div>
                <p className="text-xl text-white leading-relaxed italic mb-4">
                  "This program demonstrates the power of targeted community support in improving health, dignity, and social inclusion for one of the most marginalized groups in rural Andhra Pradesh."
                </p>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 text-[#B8860B] font-bold text-lg"
                >
                  <Award className="h-6 w-6" />
                  From being outcasts to living with dignity
                  <Award className="h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] relative overflow-hidden">
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
              className="inline-block mb-6"
            >
              <Heart className="h-16 w-16 text-[#0F1B3A]" fill="currentColor" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#0F1B3A] mb-6 leading-tight">
              Join Our Mission of Hope
            </h2>
            
            <p className="text-lg text-[#0F1B3A]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your support can help us continue providing essential care, dignity, and hope to those who have been forgotten by society.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-2 border-4 border-white/30"
            >
              Support Jordan Community
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
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
                  className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    className="text-3xl font-black text-[#0F1B3A] mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-[#0F1B3A]/80 font-semibold text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ImageGallery
        title="Community Transformation"
        images={[
          "/images/jord/1.jpeg?w=800&q=80",
          "/images/jord/2.jpeg?w=800&q=80",
          "/images/jord/3.jpeg?w=800&q=80",
          "/images/jord/4.jpeg?w=800&q=80",
          "/images/jord/5.jpeg?w=800&q=80",
          "/images/jord/6.jpeg?w=800&q=80",
          "/images/jord/7.jpeg?w=800&q=80",
          "/images/jord/8.jpeg?w=800&q=80",
          "/images/jord/9.jpeg?w=800&q=80",
        ]}
        className="bg-white"
      />

      <Footer />
    </div>
  );
};

export default JordanCommunity;