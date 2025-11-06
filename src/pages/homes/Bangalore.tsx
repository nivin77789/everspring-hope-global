import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { Home, GraduationCap, Heart, Target, Users, Shield, Sparkles, ArrowRight, Star } from "lucide-react";

const Bangalore = () => {
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

  const uniqueFeatures = [
    {
      icon: Users,
      title: "Family Atmosphere",
      description: "Children grow up not in an institution, but in a home filled with love, acceptance, and belonging.",
      color: "from-[#1E3A5F] to-[#2D4A7C]",
    },
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "All children attend reputed English medium schools in Bengaluru, giving them a strong foundation for their future.",
      color: "from-[#C9A96A] to-[#D4B77D]",
    },
    {
      icon: Shield,
      title: "Healthcare & Wellbeing",
      description: "Special care is given to HIV-affected and physically weak children, ensuring health and dignity.",
      color: "from-[#2D4A7C] to-[#3D5A8C]",
    },
    {
      icon: Heart,
      title: "Faith & Values",
      description: "Children are nurtured with strong moral and spiritual values that shape their character.",
      color: "from-[#D4B77D] to-[#DFC690]",
    },
    {
      icon: Sparkles,
      title: "Future Empowerment",
      description: "Beyond academics, children are encouraged to develop skills, talents, and leadership qualities.",
      color: "from-[#1E3A5F] to-[#2D4A7C]",
    },
  ];

  const missionPoints = [
    "To provide holistic care—physical, emotional, spiritual, and educational.",
    "To nurture children in a family-like atmosphere where they are loved and valued.",
    "To ensure access to quality education through reputed English medium schools in Bengaluru.",
    "To build resilience and self-confidence so that every child can break the cycle of poverty and hopelessness.",
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
                    Est. December 23, 2001
                    <Star className="h-5 w-5 text-[#C9A96A]" fill="currentColor" />
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-7xl md:text-9xl font-heading font-black text-white mb-6 tracking-tight leading-none">
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
                  Children Home
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
                className="text-3xl md:text-4xl font-light text-white/95"
              >
                Bengaluru
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl md:text-2xl text-white/80 mt-4 max-w-2xl mx-auto"
              >
                A Safe Haven of Love and Transformation
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

      {/* Who We Are */}
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
                  className="inline-block bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  OUR STORY
                </motion.div>
                
                <h2 className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] bg-clip-text text-transparent mb-6">
                  Who We Are
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
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A96A]/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white to-[#F8F9FA] p-12 md:p-16 rounded-3xl shadow-2xl border border-[#1E3A5F]/10">
                  <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                    New Hope Children Home in Bengaluru is a <span className="font-bold text-[#1E3A5F]">safe haven</span> for some of the most vulnerable children in society. Currently, it is home to{" "}
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="inline-block font-black text-3xl bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] bg-clip-text text-transparent cursor-default"
                    >
                      40 children
                    </motion.span>{" "}
                    who come from backgrounds of orphanhood, semi-orphanhood, abandonment, and children rescued from streets and slums.
                  </p>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    Referrals come through recognised institutions, government officials, police departments, village elders, and community leaders, ensuring that children most in need are given a new beginning.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey, Vision & Mission */}
      <section className="py-32 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A5F_1px,transparent_1px),linear-gradient(to_bottom,#1E3A5F_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Our Journey */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-[#1E3A5F]/20 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A7C] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                  >
                    <Home className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-4xl font-heading font-black text-[#1E3A5F] mb-6">
                    Our Journey
                  </h3>
                  
                  <div className="h-1 w-16 bg-gradient-to-r from-[#C9A96A] to-[#D4B77D] rounded-full mb-6"></div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Home began on <span className="font-bold text-[#1E3A5F]">23rd December 2001</span> in a modest way with just 10 children. By God's grace and through committed service, what began as a small initiative has now become a family of hope, care, and transformation.
                  </p>
                </div>
              </motion.div>

              {/* Our Vision */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2D4A7C] to-[#C9A96A] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-[#2D4A7C]/20 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#2D4A7C] to-[#C9A96A] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                  >
                    <Heart className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-4xl font-heading font-black text-[#2D4A7C] mb-6">
                    Our Vision
                  </h3>
                  
                  <div className="h-1 w-16 bg-gradient-to-r from-[#C9A96A] to-[#D4B77D] rounded-full mb-6"></div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To see every vulnerable child in our care restored with dignity, nurtured in love, strengthened in faith, and equipped with education and life skills to become responsible citizens and shining lights in society.
                  </p>
                </div>
              </motion.div>

              {/* Our Mission */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A96A] to-[#D4B77D] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-[#C9A96A]/20 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#C9A96A] to-[#D4B77D] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                  >
                    <Target className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-4xl font-heading font-black text-[#C9A96A] mb-6">
                    Our Mission
                  </h3>
                  
                  <div className="h-1 w-16 bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] rounded-full mb-6"></div>
                  
                  <ul className="space-y-4">
                    {missionPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="bg-gradient-to-br from-[#C9A96A] to-[#D4B77D] rounded-full p-1.5 mt-1 flex-shrink-0">
                          <div className="h-2 w-2"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-32 bg-gradient-to-br from-[#1E3A5F] via-[#2D4A7C] to-[#3D5A8C] relative overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(255,255,255,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(255,255,255,0.05)_75%,_rgba(255,255,255,0.05))] [background-size:20px_20px] opacity-30"></div>

        
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
                OUR UNIQUENESS
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6">
                What Makes Us Unique
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-2 w-32 bg-gradient-to-r from-[#C9A96A] to-white mx-auto rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30 hover:bg-white/20 transition-all duration-500 h-full">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    
                    <div className="h-1 w-12 bg-gradient-to-r from-[#C9A96A] to-white rounded-full mb-4"></div>
                    
                    <p className="text-white/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-r from-[#C9A96A] via-[#D4B77D] to-[#C9A96A] relative overflow-hidden">
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
              Join Us in Transforming Lives
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every child deserves a chance to dream, grow, and shine. Be part of their journey towards a brighter future.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#1E3A5F] to-[#2D4A7C] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3 border-4 border-white/30"
            >
              Support Our Mission
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
                { number: "40+", label: "Children" },
                { number: "23", label: "Years" },
                { number: "180+", label: "Lives Transformed" },
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
        title="New Hope Children Home Gallery"
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

export default Bangalore;