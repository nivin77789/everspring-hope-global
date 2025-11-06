import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { Home, Heart, Target, Users, Sparkles, ArrowRight, Star, TrendingUp, Award, GraduationCap, Shield } from "lucide-react";

const Bhadrachalam = () => {
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

  const provisions = [
    {
      icon: "🍽️",
      title: "Three Nutritious Meals",
      description: "Every day, no child goes hungry anymore",
      color: "from-[#1E3A5F] to-[#2D4A7C]",
    },
    {
      icon: "🏠",
      title: "Safe Shelter & Care",
      description: "A home filled with warmth and security",
      color: "from-[#2D4A7C] to-[#3D5A8C]",
    },
    {
      icon: "📚",
      title: "Access to Education",
      description: "Opening doors to a brighter future",
      color: "from-[#C9A96A] to-[#D4B77D]",
    },
    {
      icon: "💝",
      title: "Moral Nurturing",
      description: "Building character and values for life",
      color: "from-[#D4B77D] to-[#DFC690]",
    },
  ];

  const transformations = [
    {
      icon: Heart,
      title: "From Hunger to Health",
      description: "Children who once ate mud to survive are now thriving with proper nutrition and care",
      stat: "40+",
      statLabel: "Lives Saved",
    },
    {
      icon: GraduationCap,
      title: "From Despair to Education",
      description: "Access to quality education has opened doors they never knew existed",
      stat: "100%",
      statLabel: "In School",
    },
    {
      icon: TrendingUp,
      title: "From Forgotten to Empowered",
      description: "Once invisible to society, now standing tall with dignity and confidence",
      stat: "14+",
      statLabel: "Years Impact",
    },
    {
      icon: Shield,
      title: "From Hopeless to Hopeful",
      description: "A future once impossible is now within reach for every child",
      stat: "∞",
      statLabel: "Possibilities",
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
                    <Star className="h-4 w-4 text-[#C9A96A]" fill="currentColor" />
                    Established 2010
                    <Star className="h-4 w-4 text-[#C9A96A]" fill="currentColor" />
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 tracking-tight leading-none">
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block"
                >
                  New Hope
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block bg-gradient-to-r from-[#C9A96A] to-[#D4B77D] bg-clip-text text-transparent"
                >
                  Tribal Children's Home
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-1 w-32 bg-gradient-to-r from-[#C9A96A] to-white mx-auto mb-6 rounded-full"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl font-light text-white/95"
              >
                Bhadrachalam
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-xl text-white/80 mt-2 max-w-2xl mx-auto"
              >
                From Despair to Dignity
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-8"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
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

      {/* A Heart-Breaking Discovery */}
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
                  className="inline-block bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4"
                >
                  THE BEGINNING
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] bg-clip-text text-transparent mb-4">
                  A Heart-Breaking Discovery
                </h2>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 w-24 bg-gradient-to-r from-[#1E3A5F] to-[#C9A96A] mx-auto rounded-full"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-12"
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A96A]/20 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-white to-[#F8F9FA] p-8 md:p-12 rounded-2xl shadow-xl border border-[#1E3A5F]/10">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    When Executive Director <span className="font-bold text-[#1E3A5F]">George Fernandes</span> first visited the remote tribal villages of{" "}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block font-black text-xl bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] bg-clip-text text-transparent cursor-default"
                    >
                      Bhadrachalam
                    </motion.span>{" "}
                    in <span className="font-bold text-[#2D4A7C]">2010</span>, his heart was broken by the sight before him.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Small children were sitting on the ground, <span className="font-bold text-red-600">eating mud to fill their empty stomachs</span>, leading to swollen bellies, disease, and hopelessness.
                  </p>
                  <div className="relative bg-gradient-to-br from-[#1E3A5F]/10 to-[#2D4A7C]/10 p-6 rounded-xl border-l-4 border-[#1E3A5F]">
                    <p className="text-lg text-gray-800 leading-relaxed font-semibold">
                      Compelled by compassion, George made a bold decision—he purchased a piece of land and established a Children's Home for{" "}
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="inline-block font-black text-2xl bg-gradient-to-r from-[#C9A96A] to-[#D4B77D] bg-clip-text text-transparent"
                      >
                        40 tribal children
                      </motion.span>
                      .
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Today's Reality - What We Provide */}
      <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #1E3A5F 1px, transparent 1px), linear-gradient(to bottom, #1E3A5F 1px, transparent 1px)`,
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
                className="inline-block bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] text-white px-4 py-1 rounded-full text-xs font-semibold mb-6"
              >
                TODAY'S REALITY
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] bg-clip-text text-transparent mb-4">
                Testimonies of Love & Provision
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#1E3A5F] to-[#C9A96A] mx-auto mb-6 rounded-full"
              />
              
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Today, these children, once deprived of food, clothing, and shelter, are{" "}
                <span className="font-bold bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] bg-clip-text text-transparent">
                  grateful testimonies of love and provision
                </span>
                . Through Helping Hands India, they now receive:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {provisions.map((provision, index) => (
                <motion.div
                  key={provision.title}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1E3A5F]/30 to-[#C9A96A]/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-[#1E3A5F]/20 hover:shadow-xl transition-all duration-500 h-full">
                    <motion.div
                      animate={{ rotate: [0, -8, 8, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="text-5xl mb-4"
                    >
                      {provision.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-heading font-bold text-[#1E3A5F] mb-3">
                      {provision.title}
                    </h3>
                    
                    <div className={`h-1 w-10 bg-gradient-to-r ${provision.color} rounded-full mb-3`}></div>
                    
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {provision.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A5F] via-[#2D4A7C] to-[#3D5A8C] relative overflow-hidden">
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
                THE TRANSFORMATION
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
                From Despair to Hope
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#C9A96A] to-white mx-auto mb-6 rounded-full"
              />
              
              <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                What once was a place of despair has now become a <span className="font-bold">home of hope</span> where children are not only surviving but <span className="font-bold">thriving with dignity and a brighter future</span>.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {transformations.map((transformation, index) => (
                <motion.div
                  key={transformation.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/40 to-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/30 hover:bg-white/20 transition-all duration-500 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, -8, 0], scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-[#C9A96A] to-[#D4B77D] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <transformation.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <div className="text-right">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                          className="text-2xl font-black text-white"
                        >
                          {transformation.stat}
                        </motion.div>
                        <div className="text-white/70 text-xs font-semibold">{transformation.statLabel}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {transformation.title}
                    </h3>
                    
                    <div className="h-1 w-10 bg-gradient-to-r from-[#C9A96A] to-white rounded-full mb-3"></div>
                    
                    <p className="text-white/90 leading-relaxed text-sm">
                      {transformation.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-white/20 rounded-2xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/30 text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Sparkles className="h-12 w-12 text-[#C9A96A]" />
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-4">
                  Restoring Dignity, Opening Doors
                </h3>
                
                <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
                  The Children's Home is not only providing food and shelter but also{" "}
                  <span className="font-bold text-[#C9A96A]">restoring dignity</span> and{" "}
                  <span className="font-bold text-[#C9A96A]">opening the doors of education</span>. These children, once forgotten, are now being elevated to stand with confidence and compete in today's society—even among the elite.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-[#C9A96A] via-[#D4B77D] to-[#C9A96A] relative overflow-hidden">
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
              <Heart className="h-16 w-16 text-white" fill="currentColor" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
              Be Part of Their Journey
            </h2>
            
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              From eating mud to achieving dreams. Every child deserves a chance to thrive. Help us continue this transformation.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 inline-flex items-center gap-2 border-4 border-white/30"
            >
              Support These Children
              <motion.div
                animate={{ x: [0, 4, 0] }}
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
                { number: "40", label: "Children" },
                { number: "14+", label: "Years" },
                { number: "100%", label: "Hope Restored" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    className="text-3xl font-black text-white mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/80 font-semibold text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ImageGallery
        title="Bhadrachalam Home Gallery"
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

export default Bhadrachalam;