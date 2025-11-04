import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Users, Heart, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";

const Homes = () => {
  const homes = [
    {
      name: "Bangalore",
      path: "/homes/bangalore",
      description: "Our flagship children's home in the heart of Karnataka",
      icon: Home,
      childrenCount: "50+",
      established: "2005"
    },
    {
      name: "Bhadrachalam",
      path: "/homes/bhadrachalam",
      description: "Transforming tribal children's lives in Telangana",
      icon: Users,
      childrenCount: "40",
      established: "2010"
    },
    {
      name: "Raibag",
      path: "/homes/raibag",
      description: "Community transformation in Karnataka villages",
      icon: Heart,
      childrenCount: "30",
      established: "2010"
    },
    {
      name: "Ambur",
      path: "/homes/ambur",
      description: "Success story of community empowerment in Tamil Nadu",
      icon: MapPin,
      childrenCount: "30",
      established: "2011"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-responsive-3xl md:text-7xl font-heading font-bold mb-4 md:mb-6"
          >
            Our Homes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-responsive-lg md:text-2xl max-w-2xl mx-auto"
          >
            Transforming lives through love, care, and education across India
          </motion.p>
        </div>
      </section>

      {/* Homes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homes.map((home, index) => (
              <motion.div
                key={home.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <Link to={home.path}>
                  <div className="p-6 text-center">
                    <motion.div 
                      className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <home.icon className="h-8 w-8 text-gold" />
                    </motion.div>
                    <h3 className="text-responsive-xl md:text-2xl font-heading font-bold text-primary mb-2">
                      {home.name}
                    </h3>
                    <p className="text-responsive-sm text-foreground/70 mb-4">
                      {home.description}
                    </p>
                    <div className="flex justify-between text-responsive-xs text-foreground/60">
                      <span>{home.childrenCount} Children</span>
                      <span>Since {home.established}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImageGallery
        title="Our Children's Homes"
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
        className="bg-gradient-to-b from-white to-[#FAF8F5]"
      />

      <Footer />
    </div>
  );
};

export default Homes;