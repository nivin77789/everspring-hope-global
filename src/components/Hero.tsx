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
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80')"
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Navy Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-slate-900/75 to-indigo-950/80" />

        {/* Additional depth with radial gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at top left, rgba(251, 191, 36, 0.15) 0%, transparent 40%), radial-gradient(ellipse at top right, rgba(251, 191, 36, 0.15) 0%, transparent 40%)"
          }}
        />
      </div>

      {/* Optimized Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const icons = [Heart, Star, Sparkles, Zap];
          const Icon = icons[i % icons.length];
          const isShape = i % 3 === 0;

          return (
            <motion.div
              key={i}
              className="absolute will-change-transform"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            >
              {isShape ? (
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "hsl(45 90% 60%)",
                    boxShadow: "0 0 10px hsl(45 90% 60% / 0.5)",
                  }}
                />
              ) : (
                <Icon className="w-5 h-5" style={{ color: "hsl(45 90% 65%)" }} strokeWidth={1.5} />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Reduced Floating Cross Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`cross-${i}`}
            className="absolute text-4xl md:text-5xl font-bold will-change-transform"
            style={{
              color: "hsl(45 85% 70% / 0.1)",
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: -100,
              rotate: [null, Math.random() * 180 + 180],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              delay: i * 4,
              ease: "linear",
            }}
          >
            ✟
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Content */}
        <div className="text-white">
          {/* Logo Image */}
          <div className="mb-8 flex justify-center items-center relative" style={{ minHeight: '320px' }}>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-center items-center"
              >
                {/* Simplified Rotating Ring */}
                <motion.div
                  className="absolute w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 flex justify-center items-center will-change-transform"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border border-dashed" style={{ borderColor: "hsl(45 90% 65% / 0.2)" }} />
                </motion.div>

                <motion.img
                  src="/images/logo.png"
                  alt="EverSpring International Logo"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain relative z-10 will-change-transform"
                  style={{
                    filter: "drop-shadow(0 0 20px hsl(45 90% 55% / 0.6))"
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
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-block bg-clip-text text-transparent font-serif"
                style={{
                  backgroundImage: "linear-gradient(90deg, hsl(45 90% 75%), hsl(0 0% 100%), hsl(45 90% 65%))",
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
                scale: 1.05,
                boxShadow: "0 0 30px hsl(45 90% 55% / 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Heart className="w-5 h-5" />
                Our Story
              </span>
            </motion.a>
            <motion.a
              href="/donate"
              className="relative bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px hsl(0 0% 100% / 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Sparkles className="w-5 h-5" />
                Make a Difference
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;