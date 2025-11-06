import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VolunteerDialog } from "@/components/VolunteerDialog";
import { ImageGallery } from "@/components/ImageGallery";
import {
  Heart, Home, Utensils, Shield, Users, BookOpen, Calendar,
  Star, ArrowRight, Sparkles, Award, Stethoscope, Church,
  Shirt, Smile, TrendingUp, MapPin, Clock, Ribbon
} from "lucide-react";

const HeartParticle = ({ i, left, top, size = 28, delay = 0 }) => {
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
      initial={{ y: 0, opacity: 0.12, scale: 0.9, rotate: 0 }}
      animate={{
        y: [-10, -120 - (i % 3) * 30, -8],
        opacity: [0.12, 0.28, 0.12],
        rotate: 360,
      }}
      transition={{
        duration: 18 + (i % 4) * 3,
        repeat: Infinity,
        repeatType: "loop",
        delay,
        ease: "linear",
      }}
      className="text-[#B8860B]/20"
    >
      <Heart className={`h-${Math.min(14, Math.ceil(size / 2))} w-${Math.min(14, Math.ceil(size / 2))}`} />
    </motion.div>
  );
};

const ElderCare = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Safe Shelter",
      description: "Permanent and visiting residence for elderly widows",
      color: "from-[#0F1B3A] to-[#1E3A8A]",
      stat: "31",
      statLabel: "Women Served"
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Three wholesome meals every day",
      color: "from-[#B8860B] to-[#D4AF37]",
      stat: "3",
      statLabel: "Meals Daily"
    },
    {
      icon: Stethoscope,
      title: "Medical Care",
      description: "Basic healthcare and hygiene support",
      color: "from-[#0F1B3A] to-[#2563EB]",
      stat: "100%",
      statLabel: "Care Coverage"
    },
    {
      icon: Church,
      title: "Spiritual Care",
      description: "Counseling and fellowship",
      color: "from-[#B8860B] to-[#F59E0B]",
      stat: "24/7",
      statLabel: "Support"
    },
  ];

  const impactStats = [
    { icon: Users, number: "31", label: "Elderly Women Supported", color: "text-[#0F1B3A]" },
    { icon: Calendar, number: "10+", label: "Years of Service", color: "text-[#B8860B]" },
    { icon: Heart, number: "100%", label: "Dignity Restored", color: "text-[#1E3A8A]" },
    { icon: Star, number: "∞", label: "Smiles Created", color: "text-[#D4AF37]" },
  ];

  const achievements = [
    {
      icon: Shield,
      title: "Restored Dignity",
      description: "Helping elderly women regain self-respect and belonging",
      progress: 95,
    },
    {
      icon: TrendingUp,
      title: "Independence",
      description: "No longer dependent on others for daily care or survival",
      progress: 90,
    },
    {
      icon: Stethoscope,
      title: "Improved Health",
      description: "Regular meals and medical check-ups strengthen health",
      progress: 88,
    },
    {
      icon: Smile,
      title: "Fulfilment of Life",
      description: "Peaceful and dignified final years",
      progress: 92,
    },
  ];

  // Generate stable particle positions per render
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        left: 6 + Math.round(Math.random() * 88),
        top: 6 + Math.round(Math.random() * 70),
        delay: i * 1.3,
        size: 20 + (i % 3) * 6,
      })),
    []
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.55 } }),
  };

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

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B3A] via-[#1E3A8A] to-[#B8860B]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>

        {/* Heart particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <HeartParticle key={i} i={i} left={p.left} top={p.top} size={p.size} delay={p.delay} />
          ))}
        </div>

        {/* Content */}
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
                    Since 2014
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
                  Elder & Widows
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent"
                >
                  Care
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
                Jeevanahalli, Bengaluru
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl mx-auto"
              >
                Restoring dignity, care and companionship in the golden years
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-8 flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-[#0F1B3A] px-6 py-3 rounded-full font-bold text-base shadow-2xl transition-all duration-300 inline-flex items-center gap-2 border-2 border-white/30"
              >
                Support Elder Care
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-base border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/40 hover:bg-white/30 transition-all">
            <ArrowRight className="h-5 w-5 text-white rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* CONTEXT SECTION */}
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
                  THE NEED WE ADDRESS
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] bg-clip-text text-transparent mb-4">
                  Caring for Our Elders
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
                    The slums of <span className="font-bold text-[#0F1B3A]">Bengaluru</span> are home to many elderly people — in some communities over{" "}
                    <span className="font-bold text-[#1E3A8A]">6% are aged 60 or above</span>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Widowed women are often left without support, facing illiteracy, malnutrition, health issues and social exclusion.
                  </p>
                  
                  <div className="relative bg-gradient-to-br from-[#0F1B3A]/5 to-[#1E3A8A]/5 p-6 rounded-2xl border-l-4 border-[#0F1B3A]">
                    <p className="text-lg text-gray-800 leading-relaxed font-semibold italic">
                      "In one study of women living in 40 slums, 19 out of 30 interviewed were widowed at a young age, highlighting the urgent need for intervention."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Impact Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center bg-white p-4 rounded-2xl shadow-lg border border-[#0F1B3A]/10"
                  >
                    <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-3`} />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                      className="text-2xl font-black text-[#0F1B3A] mb-1"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 font-semibold text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
                  COMPREHENSIVE CARE
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] bg-clip-text text-transparent mb-4">
                What We Provide
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#0F1B3A] to-[#B8860B] mx-auto mb-6 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
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
                      <service.icon className="h-12 w-12 text-[#0F1B3A] mx-auto" />
                    </motion.div>
                    
                    <h3 className="text-xl font-heading font-bold text-[#0F1B3A] mb-3 text-center">
                      {service.title}
                    </h3>
                    
                    <div className={`h-1 w-10 bg-gradient-to-r ${service.color} rounded-full mb-3 mx-auto`}></div>
                    
                    <p className="text-gray-700 leading-relaxed text-center mb-3 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="text-2xl font-black bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] bg-clip-text text-transparent"
                      >
                        {service.stat}
                      </motion.div>
                      <div className="text-gray-600 text-xs font-semibold">{service.statLabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
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
                TRANSFORMATION STORY
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
                Nanjamma's Journey
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#B8860B] to-white mx-auto mb-6 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-[#B8860B] to-[#D4AF37] p-12 rounded-3xl shadow-2xl w-full h-64 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-[#0F1B3A]" fill="currentColor" />
                  <Sparkles className="absolute top-4 right-4 h-6 w-6 text-[#0F1B3A]" />
                  <Sparkles className="absolute bottom-4 left-4 h-6 w-6 text-[#0F1B3A]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/30"
              >
                <h3 className="text-2xl font-heading font-bold text-white mb-4">From Abandonment to Dignity</h3>
                <p className="text-white/90 leading-relaxed mb-3 text-sm">
                  One of the women who found refuge at the New Hope Elder and Widows Home had endured years of
                  neglect and abandonment. Left without family support, she struggled daily with hunger, illness,
                  and loneliness.
                </p>
                <p className="text-white/90 leading-relaxed mb-4 text-sm">
                  Through Helping Hands India, she received nutritious meals, medical attention, clothing and shelter,
                  and guidance to access government benefits. Most importantly, she found a community of love and
                  spiritual care.
                </p>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 text-[#B8860B] font-bold text-base"
                >
                  <Sparkles className="h-5 w-5" />
                  She died with smiles and joy on her face
                  <Sparkles className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center"
                >
                  <achievement.icon className="h-8 w-8 text-[#B8860B] mx-auto mb-3" />
                  <h4 className="text-base font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-white/80 text-xs mb-2">{achievement.description}</p>
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${achievement.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-[#B8860B] h-1 rounded-full"
                    />
                  </div>
                  <div className="text-right text-white/70 text-xs mt-1">{achievement.progress}% Success</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
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
              A Testament to Compassion
            </h2>
            
            <p className="text-lg text-[#0F1B3A]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              With compassion and consistent care, even the most vulnerable can live a full, dignified life.
              Join us in supporting elder care in Jeevanahalli.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#0F1B3A] to-[#1E3A8A] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-2 border-4 border-white/30"
              >
                Support Elder Care
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
              
              <VolunteerDialog
                trigger={
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white/20 backdrop-blur-md text-[#0F1B3A] px-8 py-4 rounded-full font-bold text-lg border-4 border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    Volunteer Today
                  </motion.button>
                }
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { number: "31", label: "Women Supported" },
                { number: "10+", label: "Years of Service" },
                { number: "100%", label: "Dignity Restored" },
                { number: "∞", label: "Love Shared" },
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
        title="Elder Care in Action"
        images={[
          "/images/elder/1.jpeg?w=800&q=80",
          "/images/elder/2.jpeg?w=800&q=80",
          "/images/elder/3.jpeg?w=800&q=80",
          "/images/elder/4.jpeg?w=800&q=80",
          "/images/elder/5.jpeg?w=800&q=80",
        ]}
        className="bg-white"
      />

      <Footer />
    </div>
  );
};

export default ElderCare;