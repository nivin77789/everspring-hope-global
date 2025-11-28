import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Users, Heart, MapPin, Sparkles } from "lucide-react";
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
    },
    {
      name: "Jeevanahalli",
      path: "/homes/jeevanahalli",
      description: "A safe haven in the heart of the community",
      icon: Sparkles,
      childrenCount: "38",
      established: "2021"
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-gold/30"
              >
                <Link to={home.path} className="block h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <home.icon className="h-32 w-32 text-primary rotate-12 transform translate-x-8 -translate-y-8" />
                  </div>

                  <div className="p-8 flex flex-col h-full relative z-10">
                    <motion.div
                      className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4A7C] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-gold/20 transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    >
                      <home.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-heading font-black text-[#1E3A5F] mb-3 group-hover:text-[#C9A96A] transition-colors">
                      {home.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {home.description}
                    </p>

                    <div className="pt-6 border-t border-gray-100 mt-auto">
                      <div className="flex justify-between items-center text-sm font-semibold text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-[#C9A96A]" />
                          {home.childrenCount} Children
                        </span>
                        <span className="flex items-center gap-1">
                          <Sparkles className="h-4 w-4 text-[#C9A96A]" />
                          Est. {home.established}
                        </span>
                      </div>

                      <div className="flex items-center text-[#1E3A5F] font-bold group-hover:text-[#C9A96A] transition-colors">
                        Learn More
                        <motion.span
                          className="ml-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.span>
                      </div>
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