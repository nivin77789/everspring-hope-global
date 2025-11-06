import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { Heart, Users, Utensils, Activity, BookOpen, HeartPulse, ArrowRight, Star, Shield, Stethoscope, GraduationCap, Sparkles, Target, TrendingUp, Cross, Droplets, ActivityIcon, Brain } from "lucide-react";

const SpecialCare = () => {
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

  const programs = [
    {
      title: "HIV Care Centre",
      location: "Bidar, Karnataka",
      icon: HeartPulse,
      children: 50,
      description: "Comprehensive care for HIV-infected and affected children and families",
      color: "from-[#1E3A8A] to-[#3B82F6]",
      stats: ["Medical Support", "Nutrition Care", "Education", "Counseling"]
    },
    {
      title: "Medical Outreach",
      location: "Rural Karnataka",
      icon: Stethoscope,
      children: 200,
      description: "Mobile healthcare services reaching remote communities with essential medical care",
      color: "from-[#FBBF24] to-[#F59E0B]",
      stats: ["Mobile Clinics", "Vaccination", "Health Screenings", "Medication"]
    },
  ];

  const hivServices = [
    {
      icon: Stethoscope,
      title: "Medical Treatment",
      description: "Assistance with medical treatment and adherence to antiretroviral therapy",
      stat: "100%",
      statLabel: "Treatment Support",
    },
    {
      icon: Utensils,
      title: "Nutrition Support",
      description: "Nutritional meals to support growth and immune function for 50 children",
      stat: "50",
      statLabel: "Children Fed",
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Educational support to ensure continued learning and development",
      stat: "100%",
      statLabel: "In School",
    },
    {
      icon: Heart,
      title: "Psychosocial Care",
      description: "Counseling to address emotional and mental well-being of children and parents",
      stat: "24/7",
      statLabel: "Care Available",
    },
  ];

  const impactStats = [
    { number: "50+", label: "Children Supported", icon: Users },
    { number: "100%", label: "Treatment Adherence", icon: Activity },
    { number: "250+", label: "Families Impacted", icon: Heart },
    { number: "0", label: "Discrimination Cases", icon: Shield },
  ];

  const medicalServices = [
    {
      icon: Droplets,
      title: "Blood Testing",
      description: "Regular health monitoring and blood work",
      color: "from-[#1E3A8A] to-[#3B82F6]"
    },
    {
      icon: ActivityIcon,
      title: "Vital Monitoring",
      description: "Continuous health parameter tracking",
      color: "from-[#FBBF24] to-[#F59E0B]"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Psychological support and counseling",
      color: "from-[#1E3A8A] to-[#60A5FA]"
    },
    {
      icon: Cross,
      title: "Emergency Care",
      description: "24/7 medical emergency support",
      color: "from-[#F59E0B] to-[#D97706]"
    },
  ];

  // Floating medical icons
  const MedicalIconParticle = ({ i, left, top, delay = 0, icon: Icon }) => {
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
        className="text-[#FBBF24]/15"
      >
        <Icon className="h-8 w-8" />
      </motion.div>
    );
  };

  const medicalIcons = [
    { icon: HeartPulse },
    { icon: Stethoscope },
    { icon: Cross },
    { icon: Activity },
    { icon: Droplets },
    { icon: Brain },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -mousePosition.x / 40,
            y: -mousePosition.y / 40,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute top-1/3 -right-40 w-96 h-96 bg-[#FBBF24]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x / 60,
            y: -mousePosition.y / 60,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#FBBF24]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
        
        {/* Floating Medical Icons */}
        <div className="absolute inset-0">
          {medicalIcons.map((item, i) => (
            <MedicalIconParticle
              key={i}
              i={i}
              left={10 + Math.random() * 80}
              top={10 + Math.random() * 70}
              delay={i * 2}
              icon={item.icon}
            />
          ))}
        </div>
        
        {/* Floating Cross Symbols */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10 text-6xl font-light"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
              }}
              animate={{
                y: -100,
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25 + i * 4,
                repeat: Infinity,
                delay: i * 2,
              }}
            >
              ✚
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
                    <Star className="h-4 w-4 text-[#FBBF24]" fill="currentColor" />
                    Specialized Medical Care
                    <Star className="h-4 w-4 text-[#FBBF24]" fill="currentColor" />
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
                  Special
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block bg-gradient-to-r from-[#FBBF24] to-[#FDE68A] bg-clip-text text-transparent"
                >
                  Medical Care
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-1 w-32 bg-gradient-to-r from-[#FBBF24] to-white mx-auto mb-6 rounded-full"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl font-light text-white/95"
              >
                Advanced Healthcare for Vulnerable Communities
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl mx-auto"
              >
                Transforming lives through comprehensive medical care and specialized treatment
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
                className="group bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#1E3A8A] px-6 py-3 rounded-full font-bold text-base shadow-2xl transition-all duration-300 inline-flex items-center gap-2 border-2 border-white/30"
              >
                Support Medical Care
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
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-4 rounded-2xl shadow-lg border border-[#1E3A8A]/10"
              >
                <stat.icon className="h-10 w-10 text-[#1E3A8A] mx-auto mb-3" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="text-2xl font-black text-[#1E3A8A] mb-1"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-semibold text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #1E3A8A 1px, transparent 1px), linear-gradient(to bottom, #1E3A8A 1px, transparent 1px)`,
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
                className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white px-4 py-1 rounded-full text-xs font-semibold mb-6"
              >
                OUR MEDICAL PROGRAMS
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent mb-4">
                Healthcare Initiatives
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#1E3A8A] to-[#FBBF24] mx-auto mb-6 rounded-full"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A]/20 to-[#FBBF24]/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl border border-[#1E3A8A]/10 h-full overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          animate={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          <program.icon className="h-12 w-12 text-[#1E3A8A]" />
                        </motion.div>
                        
                        <div className="text-right">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", delay: 0.3 }}
                            className="text-3xl font-black bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent mb-1"
                          >
                            {program.children}
                          </motion.div>
                          <div className="text-gray-600 font-semibold text-xs">Lives Impacted</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-heading font-bold text-[#1E3A8A] mb-2">
                        {program.title}
                      </h3>
                      <p className="text-base text-[#3B82F6] font-semibold mb-3">{program.location}</p>
                      
                      <div className={`h-1 w-20 bg-gradient-to-r ${program.color} rounded-full mb-4`}></div>
                      
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                        {program.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {program.stats.map((stat, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="bg-gradient-to-r from-[#1E3A8A]/10 to-[#3B82F6]/10 px-3 py-1 rounded-full text-xs text-[#1E3A8A] font-medium border border-[#1E3A8A]/20"
                          >
                            {stat}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIV Care Centre Details */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
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
                  className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4"
                >
                  FOCUS AREA
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent mb-4">
                  HIV Care Centre - Bidar
                </h2>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1 w-24 bg-gradient-to-r from-[#1E3A8A] to-[#FBBF24] mx-auto rounded-full"
                />
              </div>

              {/* Context Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-12"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1E3A8A]/10 to-[#FBBF24]/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl border border-[#1E3A8A]/10 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      In <span className="font-bold text-[#1E3A8A]">Bidar, Karnataka</span>, HIV prevalence remains relatively low, with an estimated{" "}
                      <span className="font-bold text-[#3B82F6]">0.32% among pregnant women</span> in the Gulbarga region.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      However, the impact on children and families is significant, especially in{" "}
                      <span className="font-bold text-[#F59E0B]">marginalized communities</span>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Medical Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-12"
              >
                <h3 className="text-3xl font-heading font-bold text-center text-[#1E3A8A] mb-8">Comprehensive Medical Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {medicalServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-4 rounded-2xl shadow-lg border border-[#1E3A8A]/10 text-center group hover:shadow-xl transition-all"
                    >
                      <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-base font-bold text-[#1E3A8A] mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-xs">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hivServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50, rotateY: -30 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A]/20 to-[#FBBF24]/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-[#1E3A8A]/10 hover:shadow-2xl transition-all duration-500 h-full">
                      <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="mb-4"
                      >
                        <service.icon className="h-12 w-12 text-[#1E3A8A] mx-auto" />
                      </motion.div>
                      
                      <h3 className="text-xl font-heading font-bold text-[#1E3A8A] mb-3 text-center">
                        {service.title}
                      </h3>
                      
                      <div className="h-1 w-10 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full mb-3 mx-auto"></div>
                      
                      <p className="text-gray-700 leading-relaxed text-center mb-3 text-sm">
                        {service.description}
                      </p>
                      
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", delay: 0.3 }}
                          className="text-2xl font-black bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent"
                        >
                          {service.stat}
                        </motion.div>
                        <div className="text-gray-600 text-xs font-semibold">{service.statLabel}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#FBBF24] relative overflow-hidden">
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
              <Heart className="h-16 w-16 text-[#1E3A8A]" fill="currentColor" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#1E3A8A] mb-6 leading-tight">
              Specialized Medical Care
            </h2>
            
            <p className="text-lg text-[#1E3A8A]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Supporting vulnerable communities with specialized medical needs, breaking stigma, and building healthier futures through comprehensive healthcare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-2 border-4 border-white/30"
              >
                Support Medical Care
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/20 backdrop-blur-md text-[#1E3A8A] px-8 py-4 rounded-full font-bold text-lg border-4 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Volunteer Today
              </motion.button>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { number: "250+", label: "Patients Served" },
                { number: "2", label: "Medical Programs" },
                { number: "100%", label: "Care Commitment" },
                { number: "24/7", label: "Support Available" },
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
                    className="text-3xl font-black text-[#1E3A8A] mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-[#1E3A8A]/80 font-semibold text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
};

export default SpecialCare;