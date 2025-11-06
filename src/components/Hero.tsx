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
      {/* Background Image with Navy Gradient Overlay */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80')"
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Navy Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/75 via-slate-900/70 to-indigo-950/75" />
        
        {/* Additional depth with radial gradients - Golden glow on both sides */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at top left, rgba(251, 191, 36, 0.12) 0%, transparent 40%), radial-gradient(ellipse at top right, rgba(251, 191, 36, 0.15) 0%, transparent 40%), radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.08) 0%, transparent 50%)"
          }}
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
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(45 90% 55%), hsl(45 90% 65%))",
                    boxShadow: "0 0 20px hsl(45 90% 55% / 0.6)",
                  }}
                />
              ) : (
                <Icon className="w-6 h-6" style={{ color: "hsl(45 90% 65%)" }} strokeWidth={1.5} />
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
              color: "hsl(45 85% 70% / 0.15)",
              textShadow: "0 0 20px hsl(45 85% 70% / 0.3)",
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
                  <div className="absolute inset-0 rounded-full border-2 border-dashed" style={{ borderColor: "hsl(45 90% 65% / 0.3)" }} />
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: "hsl(45 90% 55%)",
                        left: '50%',
                        top: '50%',
                        marginLeft: '-6px',
                        marginTop: '-6px',
                        transform: `rotate(${i * 45}deg) translateY(-${typeof window !== 'undefined' && window.innerWidth >= 1024 ? 192 : typeof window !== 'undefined' && window.innerWidth >= 768 ? 144 : 112}px)`,
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.img
                  src="/images/logo.png"
                  alt="EverSpring International Logo"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 30px hsl(45 90% 55% / 0.9))"
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
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
                className="inline-block bg-clip-text text-transparent font-serif"
                style={{ 
                  backgroundImage: "linear-gradient(90deg, hsl(45 90% 65%), hsl(0 0% 100%), hsl(45 90% 55%))",
                  backgroundSize: "200% 200%" 
                }}
              >
                {currentText === 0 ? "25 Years of God's Faithfulness" : "EverSpring International"}
              </motion.span>
            </AnimatePresence>
          </h1>
          
          <p className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto mb-12 px-4">
            Serving with compassion and faith since 2001
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.a
              href="/genesis"
              className="relative text-lg px-8 py-4 rounded-xl font-bold transition-all overflow-hidden group"
              style={{
                background: "linear-gradient(90deg, hsl(45 90% 55%), hsl(45 90% 65%))",
                color: "hsl(45 20% 15%)"
              }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 40px hsl(45 90% 55% / 0.8)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, hsl(45 90% 65%), hsl(45 90% 55%))"
                }}
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
              className="relative bg-transparent border-2 border-white text-white hover:bg-white px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden group"
              style={{
                transition: "all 0.3s ease"
              }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 40px hsl(0 0% 100% / 0.5)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.1), transparent)",
                    "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.1), transparent)",
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;