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
      color: "from-[#678E76] to-[#557366]",
      stats: ["Medical Support", "Nutrition Care", "Education", "Counseling"]
    },
    {
      title: "Medical Outreach",
      location: "Rural Karnataka",
      icon: Stethoscope,
      children: 200,
      description: "Mobile healthcare services reaching remote communities with essential medical care",
      color: "from-[#8BAA92] to-[#678E76]",
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
      color: "from-red-500 to-pink-500"
    },
    {
      icon: ActivityIcon,
      title: "Vital Monitoring",
      description: "Continuous health parameter tracking",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Psychological support and counseling",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Cross,
      title: "Emergency Care",
      description: "24/7 medical emergency support",
      color: "from-orange-500 to-red-500"
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
        className="text-white/15"
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
                    Specialized Medical Care
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
                  Special
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block bg-gradient-to-r from-[#C0A58B] to-[#D4BFA3] bg-clip-text text-transparent"
                >
                  Medical Care
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
                Advanced Healthcare for Vulnerable Communities
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl md:text-2xl text-white/80 mt-4 max-w-2xl mx-auto"
              >
                Transforming lives through comprehensive medical care and specialized treatment
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

      {/* Impact Statistics */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-[#FAF8F5] to-white p-6 rounded-2xl shadow-lg border border-[#678E76]/20"
              >
                <stat.icon className="h-12 w-12 text-[#678E76] mx-auto mb-4" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="text-3xl font-black text-[#678E76] mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
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
                OUR MEDICAL PROGRAMS
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                Healthcare Initiatives
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto mb-8 rounded-full"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#678E76]/20 to-[#C0A58B]/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white to-[#FAF8F5] rounded-3xl shadow-2xl border border-[#678E76]/10 h-full overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          animate={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          <program.icon className="h-16 w-16 text-[#678E76]" />
                        </motion.div>
                        
                        <div className="text-right">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", delay: 0.3 }}
                            className="text-4xl font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-1"
                          >
                            {program.children}
                          </motion.div>
                          <div className="text-gray-600 font-semibold text-sm">Lives Impacted</div>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-heading font-bold text-[#678E76] mb-2">
                        {program.title}
                      </h3>
                      <p className="text-lg text-[#8BAA92] font-semibold mb-4">{program.location}</p>
                      
                      <div className={`h-1 w-24 bg-gradient-to-r ${program.color} rounded-full mb-6`}></div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
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
                            className="bg-gradient-to-r from-[#678E76]/10 to-[#8BAA92]/10 px-3 py-1 rounded-full text-sm text-[#678E76] font-medium border border-[#678E76]/20"
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
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  FOCUS AREA
                </motion.div>
                
                <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                  HIV Care Centre - Bidar
                </h2>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto rounded-full"
                />
              </div>

              {/* Context Section with Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-16"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#678E76]/20 to-[#C0A58B]/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white to-[#FAF8F5] rounded-3xl shadow-2xl border border-[#678E76]/10 overflow-hidden">
                  <div className="p-8 md:p-12">
                    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                      In <span className="font-bold text-[#678E76]">Bidar, Karnataka</span>, HIV prevalence remains relatively low, with an estimated{" "}
                      <span className="font-bold text-[#8BAA92]">0.32% among pregnant women</span> in the Gulbarga region.
                    </p>
                    <p className="text-2xl text-gray-700 leading-relaxed">
                      However, the impact on children and families is significant, especially in{" "}
                      <span className="font-bold text-red-600">marginalized communities</span>.
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
                className="mb-16"
              >
                <h3 className="text-4xl font-heading font-bold text-center text-[#678E76] mb-12">Comprehensive Medical Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {medicalServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white to-[#FAF8F5] p-6 rounded-2xl shadow-lg border border-[#678E76]/20 text-center group hover:shadow-xl transition-all"
                    >
                      <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-[#678E76] mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {hivServices.map((service, index) => (
                  <motion.div
                    key={service.title}
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
                        <service.icon className="h-16 w-16 text-[#678E76] mx-auto" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-heading font-bold text-[#678E76] mb-4 text-center">
                        {service.title}
                      </h3>
                      
                      <div className="h-1 w-12 bg-gradient-to-r from-[#678E76] to-[#8BAA92] rounded-full mb-4 mx-auto"></div>
                      
                      <p className="text-gray-700 leading-relaxed text-center mb-4">
                        {service.description}
                      </p>
                      
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", delay: 0.3 }}
                          className="text-3xl font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent"
                        >
                          {service.stat}
                        </motion.div>
                        <div className="text-gray-600 text-sm font-semibold">{service.statLabel}</div>
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
              Specialized Medical Care
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Supporting vulnerable communities with specialized medical needs, breaking stigma, and building healthier futures through comprehensive healthcare.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
            >
              Support Medical Care
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
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
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
        title="Medical Care Impact"
        images={[
          "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
        ]}
        className="bg-white"
      />

      <Footer />
    </div>
  );
};

export default SpecialCare;