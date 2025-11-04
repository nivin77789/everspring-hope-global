import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, Heart, GraduationCap } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const TheologicalSeminary = () => {
  const images = [
    "/images/theo/1.jpeg",
    "/images/theo/2.jpeg",
    "/images/theo/3.jpeg",
    "/images/theo/4.jpeg",
    "/images/theo/5.jpeg",
    "/images/theo/6.jpeg",
    "/images/theo/7.jpeg",
    "/images/theo/8.jpeg",
    "/images/theo/9.jpeg",
    "/images/theo/10.jpeg",
    "/images/theo/11.jpeg",
    "/images/theo/12.jpeg", 
  ];

  const stats = [
    {
      icon: GraduationCap,
      number: "80+",
      label: "Students Trained",
    },
    {
      icon: Users,
      number: "2018",
      label: "Year Established",
    },
    {
      icon: Heart,
      number: "100%",
      label: "Committed to Gospel",
    },
    {
      icon: BookOpen,
      number: "All",
      label: "South India Coverage",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0 bg-[url('/images/theo/9.jpeg?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              EverSpring International <br />Theological Seminary
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Raising Indigenous Gospel Workers for Unreached Communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                EverSpring International Theological Seminary was established in 2018, birthed out of the vision to raise indigenous Gospel workers to serve unreached communities in India. So far, we have trained <strong>80+ students</strong> across South India, equipping them with sound doctrine, biblical leadership, and a passion to reach their own people for Christ.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Through classroom instruction, ministry internships, and spiritual formation, our graduates are actively involved in church planting, discipleship, and community transformation. This seminary is a strategic part of our long-term vision to multiply leaders who carry the Gospel to the hardest places.
              </p>
            </div>

            {/* Key Areas Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 bg-card rounded-2xl shadow-elegant p-8"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-primary">
                Training Focus Areas
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">Sound Doctrine</h3>
                  <p className="text-sm text-muted-foreground">
                    Biblical theology and systematic teaching
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">Biblical Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Character development and ministry skills
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">Missionary Passion</h3>
                  <p className="text-sm text-muted-foreground">
                    Heart for the unreached and lost
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 bg-primary/5 rounded-2xl p-8"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-primary">
                Graduate Impact
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  <span className="text-foreground">Actively involved in church planting across South India</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  <span className="text-foreground">Leading discipleship programs in unreached communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  <span className="text-foreground">Driving community transformation through Gospel-centered ministry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  <span className="text-foreground">Multiplying leaders to reach the hardest places with the Gospel</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <ImageGallery images={images} title="Seminary Life" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheologicalSeminary;
