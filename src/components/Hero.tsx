import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #5D866C 0%, #3F5D4F 50%, #2C4438 100%)",
              "radial-gradient(circle at 80% 50%, #678E76 0%, #5D866C 50%, #3F5D4F 100%)",
              "radial-gradient(circle at 50% 80%, #5D866C 0%, #4A6F5C 50%, #3F5D4F 100%)",
              "radial-gradient(circle at 20% 50%, #5D866C 0%, #3F5D4F 50%, #2C4438 100%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated mesh gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(194, 166, 140, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(230, 216, 195, 0.2) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Moving light beams */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(245, 245, 240, 0.03) 50%, transparent 70%)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      

      {/* Enhanced Floating Particles with Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const icons = [Heart, Star, Sparkles, Zap];
          const Icon = icons[i % icons.length];
          const isShape = i % 3 === 0;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                y: [null, Math.random() * -200 - 100],
                x: [null, Math.random() * 150 - 75],
                rotate: [0, 360],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
              }}
            >
              {isShape ? (
                <div 
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-[#C2A68C] to-[#E6D8C3]"
                  style={{
                    boxShadow: "0 0 20px rgba(194, 166, 140, 0.6)",
                  }}
                />
              ) : (
                <Icon className="w-6 h-6 text-[#E6D8C3]" strokeWidth={1.5} />
              )}
            </motion.div>
          );
        })}
      </div>

     

      {/* Floating Cross Symbols - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`cross-${i}`}
            className="absolute text-4xl md:text-5xl font-bold"
            style={{
              color: "rgba(230, 216, 195, 0.15)",
              textShadow: "0 0 20px rgba(230, 216, 195, 0.3)",
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              rotate: Math.random() * 360,
              scale: 0.5,
            }}
            animate={{
              y: -150,
              rotate: [null, Math.random() * 360 + 360],
              scale: [0.5, 1.2, 0.8],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          >
            ✟
          </motion.div>
        ))}
      </div>

      

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Content */}
        <div className="text-white">
          {/* Logo Image - Only shows after text animation */}
          <div className="mb-8 flex justify-center items-center relative" style={{ minHeight: '320px' }}>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="relative flex justify-center items-center"
              >
                {/* Rotating Ring around Logo */}
                <motion.div
                  className="absolute w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 flex justify-center items-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E6D8C3]/30" />
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-[#C2A68C] rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: '-6px',
                        marginTop: '-6px',
                        transform: `rotate(${i * 45}deg) translateY(-${typeof window !== 'undefined' && window.innerWidth >= 1024 ? 192 : typeof window !== 'undefined' && window.innerWidth >= 768 ? 144 : 112}px)`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.img
                  src="/images/logo.png"
                  alt="Everspring International Logo"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(194, 166, 140, 0.8))"
                  }}
                  animate={{
                    y: [0, -10, 0],
                    filter: [
                      "drop-shadow(0 0 20px rgba(194, 166, 140, 0.8))",
                      "drop-shadow(0 0 40px rgba(255, 255, 255, 1))",
                      "drop-shadow(0 0 20px rgba(194, 166, 140, 0.8))",
                    ],
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    filter: { duration: 3, repeat: Infinity }
                  }}
                />
              </motion.div>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 px-4 py-4 h-24 md:h-32 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentText}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-[#E6D8C3] via-[#F5F5F0] to-[#C2A68C] bg-clip-text text-transparent font-serif"
                style={{ backgroundSize: "200% 200%" }}
              >
                {currentText === 0 ? "25 Years of God's Faithfulness" : "Everspring International"}
              </motion.span>
            </AnimatePresence>
          </h1>
          
          <p className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto mb-12 px-4">
            <motion.span
              animate={{
                opacity: [0.9, 1, 0.9],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Serving with compassion and faith since 2000
            </motion.span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.a
              href="/genesis"
              className="relative bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#3F5D4F] px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden group"
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 40px rgba(194, 166, 140, 0.8)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E6D8C3] to-[#C2A68C]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Heart className="w-5 h-5" />
                Our Story
              </span>
            </motion.a>
            <motion.a
              href="/donate"
              className="relative bg-transparent border-2 border-[#F5F5F0] text-white hover:bg-[#F5F5F0] hover:text-[#5D866C] px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden group"
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 40px rgba(245, 245, 240, 0.5)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "linear-gradient(90deg, transparent, rgba(245, 245, 240, 0.1), transparent)",
                    "linear-gradient(90deg, transparent, rgba(245, 245, 240, 0.1), transparent)",
                  ],
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Sparkles className="w-5 h-5" />
                Make a Difference
              </span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          className="relative cursor-pointer group"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 w-12 h-16 border-2 border-[#E6D8C3]/40 rounded-full -translate-x-3 -translate-y-3"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-[#F5F5F0] rounded-full flex items-start justify-center p-2 hover:border-[#C2A68C] transition-colors backdrop-blur-sm bg-white/5"
          >
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-[#F5F5F0] to-[#C2A68C] rounded-full"
              animate={{ 
                opacity: [1, 0.3, 1],
                scaleY: [1, 0.5, 1],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>

          <motion.p
            className="text-[#F5F5F0] text-xs mt-2 text-center font-semibold tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            SCROLL
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;