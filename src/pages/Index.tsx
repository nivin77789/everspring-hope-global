import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";

// Lazy load sections
const DidYouKnow = lazy(() => import("@/components/home/DidYouKnow"));
const AboutSection = lazy(() => import("@/components/home/AboutSection"));
const StatsSection = lazy(() => import("@/components/home/StatsSection"));
const FeaturesSection = lazy(() => import("@/components/home/FeaturesSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const Index = () => {
  const { scrollYProgress } = useScroll();

  // Use motion values for smoother mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the background orbs
  const springConfig = { damping: 25, stiffness: 150 };
  const x1 = useSpring(useTransform(mouseX, [0, window.innerWidth], [-50, 50]), springConfig);
  const y1 = useSpring(useTransform(mouseY, [0, window.innerHeight], [-50, 50]), springConfig);

  const x2 = useSpring(useTransform(mouseX, [0, window.innerWidth], [50, -50]), springConfig);
  const y2 = useSpring(useTransform(mouseY, [0, window.innerHeight], [50, -50]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <Hero />

      {/* Animated Background Orbs - Optimized */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ x: x1, y: y1 }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#0f172a]/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: x2, y: y2 }}
          className="absolute top-1/3 -right-40 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: x1, y: y2 }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#1e293b]/10 rounded-full blur-3xl"
        />
      </div>

      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <DidYouKnow />
      </Suspense>

      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <CTASection />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;