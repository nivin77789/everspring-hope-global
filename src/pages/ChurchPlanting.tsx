import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { Church, Users, Heart, Book, Globe, TrendingUp, ArrowRight, Star, MapPin, Target, GraduationCap, Award, Sparkles, Cross } from "lucide-react";

const ChurchPlanting = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "Serving communities with love and practical support",
      color: "from-[#678E76] to-[#557366]",
      stat: "1,500+",
      statLabel: "Villages Reached"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating spaces of fellowship and belonging",
      color: "from-[#8BAA92] to-[#678E76]",
      stat: "24",
      statLabel: "People Groups"
    },
    {
      icon: Book,
      title: "Biblical Teaching",
      description: "Grounded in scripture and sound doctrine",
      color: "from-[#C0A58B] to-[#A88D73]",
      stat: "120+",
      statLabel: "Leaders Trained"
    },
    {
      icon: TrendingUp,
      title: "Holistic Development",
      description: "Spiritual, social, and economic empowerment",
      color: "from-[#D4BFA3] to-[#C0A58B]",
      stat: "80+",
      statLabel: "Seminary Students"
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Respecting and embracing local traditions",
      color: "from-[#678E76] to-[#8BAA92]",
      stat: "500M+",
      statLabel: "Hearing Gospel"
    },
    {
      icon: Church,
      title: "Indigenous Leadership",
      description: "Raising up local leaders for sustainability",
      color: "from-[#8BAA92] to-[#C0A58B]",
      stat: "7",
      statLabel: "Years of Growth"
    },
  ];

  const impactStats = [
    { number: "1,500+", label: "Villages Reached", icon: MapPin },
    { number: "24", label: "Unreached People Groups", icon: Target },
    { number: "120+", label: "Church Planters Trained", icon: Users },
    { number: "80+", label: "Seminary Graduates", icon: GraduationCap },
  ];

  const seminaryInfo = [
    {
      icon: GraduationCap,
      title: "Jeevajala Theological Seminary",
      year: "Founded 2018",
      description: "Training indigenous Gospel workers for unreached communities across South India",
      achievements: ["80+ students trained", "Sound doctrine & biblical leadership", "Church planting focus", "Community transformation"]
    }
  ];

  // Floating cross component
  const FloatingCross = ({ i, left, top, delay = 0 }) => {
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
        <Cross className="h-8 w-8" />
      </motion.div>
    );
  };

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
        
        {/* Floating Cross Symbols */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <FloatingCross
              key={i}
              i={i}
              left={10 + Math.random() * 80}
              top={10 + Math.random() * 70}
              delay={i * 2}
            />
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
                    Great Commission Ministry
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
                  Church
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block bg-gradient-to-r from-[#C0A58B] to-[#D4BFA3] bg-clip-text text-transparent"
                >
                  Planting
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
                Building Communities of Faith, Hope, and Transformation
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl md:text-2xl text-white/80 mt-4 max-w-2xl mx-auto"
              >
                Reaching India's 500,000+ villages without church presence
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

      {/* India Reality Section */}
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                  INDIA'S SPIRITUAL LANDSCAPE
                </motion.div>
                
                <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                  The Urgent Need
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
                    India has over <span className="font-bold text-[#678E76]">600,000 villages</span>, and over{" "}
                    <span className="font-bold text-[#8BAA92]">500,000 still have no church presence</span>.
                  </p>
                  <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                    Among <span className="font-bold text-red-600">1,200+ people groups</span>,{" "}
                    <span className="font-bold text-[#678E76]">256+ remain unreached</span>.
                  </p>
                  
                  <div className="relative bg-gradient-to-br from-[#678E76]/10 to-[#8BAA92]/10 p-8 rounded-2xl border-l-4 border-[#678E76]">
                    <p className="text-2xl text-gray-800 leading-relaxed font-semibold italic">
                      "India is home to the largest number of unreached people groups in the world. Over 500 million people have never heard the name of Jesus."
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
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center bg-gradient-to-br from-white to-[#FAF8F5] p-6 rounded-2xl shadow-lg border border-[#678E76]/20"
                  >
                    <stat.icon className="h-12 w-12 text-[#678E76] mx-auto mb-4" />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                      className="text-3xl font-black text-[#678E76] mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rev. George Fernandes Story */}
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
                THE VISIONARY LEADER
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                Rev. Dr. George Fernandes
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto mb-8 rounded-full"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#678E76]/20 to-[#C0A58B]/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-white to-[#FAF8F5] p-8 rounded-3xl shadow-2xl border border-[#678E76]/10">
                  <h3 className="text-3xl font-heading font-bold text-[#678E76] mb-6">Two Unchanging Goals</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#678E76] to-[#8BAA92] w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#678E76] mb-2">To Glorify the Lord</h4>
                        <p className="text-gray-700">Keeping Christ at the center of all ministry efforts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#C0A58B] to-[#D4BFA3] w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#678E76] mb-2">To Win a Perishing Soul</h4>
                        <p className="text-gray-700">Reaching the lost with the transformative power of the Gospel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-xl leading-relaxed text-gray-700">
                  Even during his theological studies, his heart burned for the lost. He reached out to rickshaw pullers and stone cutters, sharing the love of Christ with them, and planted two churches—one in Nacharam and another in Warasiguda, Hyderabad.
                </p>
                <p className="text-xl leading-relaxed text-gray-700">
                  After completing his theological education, he was burdened to train lay leaders and pastors who lacked the opportunity to attend Bible colleges. Despite limited resources, he began on-site Biblical training programs in 2005 in Bangalore, Jammikunta, and Kaluvai, where he successfully trained 120 church planters.
                </p>
              </motion.div>
            </div>

            {/* Koya Tribe Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#678E76]/10 to-[#C0A58B]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-[#678E76] to-[#8BAA92] p-12 rounded-3xl text-white">
                <h3 className="text-4xl font-heading font-bold mb-6 text-center">The Koya Tribe Breakthrough</h3>
                <p className="text-xl leading-relaxed mb-6 text-center">
                  In 2009, Pastor George accepted an invitation from his friend, Pastor Danasari Sreenu, to visit the Koya tribal community in Bhadrachalam. Deeply moved by the sight of children suffering from malnutrition and eating mud due to extreme poverty, he stepped out in faith—despite financial challenges—to start a Children's Home and support Pastor Sreenu in spreading the Gospel among the Koya people.
                </p>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-3 text-[#C0A58B] font-bold text-xl mx-auto justify-center"
                >
                  <Sparkles className="h-8 w-8" />
                  What began with one faithful church planter soon grew to three, then to fifty within seven years
                  <Sparkles className="h-8 w-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
                OUR IMPACT
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6">
                Ministry Reach & Values
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#C0A58B] to-white mx-auto mb-8 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      <value.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-heading font-bold text-white mb-4 text-center">
                      {value.title}
                    </h3>
                    
                    <div className="h-1 w-12 bg-gradient-to-r from-[#C0A58B] to-white rounded-full mb-4 mx-auto"></div>
                    
                    <p className="text-white/90 leading-relaxed text-center mb-4">
                      {value.description}
                    </p>
                    
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="text-3xl font-black text-white"
                      >
                        {value.stat}
                      </motion.div>
                      <div className="text-white/70 text-sm font-semibold">{value.statLabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Theological Seminary */}
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                  LEADERSHIP DEVELOPMENT
                </motion.div>
                
                <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-6">
                  Jeevajala Theological Seminary
                </h2>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-2 w-32 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto rounded-full"
                />
              </div>

              {seminaryInfo.map((seminary, index) => (
                <motion.div
                  key={seminary.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#678E76]/20 to-[#C0A58B]/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-white to-[#FAF8F5] p-12 rounded-3xl shadow-2xl border border-[#678E76]/10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="bg-gradient-to-br from-[#678E76] to-[#8BAA92] w-16 h-16 rounded-2xl flex items-center justify-center">
                            <seminary.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-heading font-bold text-[#678E76]">{seminary.title}</h3>
                            <p className="text-[#8BAA92] font-semibold">{seminary.year}</p>
                          </div>
                        </div>
                        <p className="text-xl leading-relaxed text-gray-700 mb-6">
                          {seminary.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {seminary.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + idx * 0.1 }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="w-2 h-2 bg-[#678E76] rounded-full"></div>
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-[#678E76] to-[#8BAA92] p-8 rounded-2xl text-white text-center">
                        <GraduationCap className="w-16 h-16 mx-auto mb-4" />
                        <div className="text-4xl font-black mb-2">80+</div>
                        <div className="text-lg opacity-90">Students Trained</div>
                        <div className="mt-4 text-sm opacity-80">
                          Equipping indigenous leaders for unreached communities
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <Cross className="h-20 w-20 text-white" />
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-tight">
              Join the Great Commission
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              "How can they believe in the one of whom they have not heard?" — Romans 10:14
            </p>
            
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 mb-12">
              <p className="text-xl text-white leading-relaxed italic mb-4">
                "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne..."
              </p>
              <p className="text-white font-semibold">— Revelation 7:9</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
            >
              Support Church Planting
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
                { number: "1,500+", label: "Villages" },
                { number: "24", label: "People Groups" },
                { number: "120+", label: "Planters Trained" },
                { number: "80+", label: "Seminary Graduates" },
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
        title="Church Planting Journey"
        images={[
          "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
          "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
          "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&q=80",
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
          "https://images.unsplash.com/photo-1525026198548-4baa812f1183?w=800&q=80",
        ]}
        className="bg-white"
      />

      <Footer />
    </div>
  );
};

export default ChurchPlanting;