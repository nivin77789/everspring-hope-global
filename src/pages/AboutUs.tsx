import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { Heart, Users, BookOpen, TrendingUp } from "lucide-react";

const Genesis = () => {
  const stats = [
    { icon: Heart, value: "25+", label: "Years of Service" },
    { icon: Users, value: "1000+", label: "Lives Transformed" },
    { icon: BookOpen, value: "500+", label: "Children Educated" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero text-white pt-20 overflow-hidden">
        {/* Background Image */}
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/85 to-indigo-950/90" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
              }}
              animate={{
                y: -50,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-responsive-3xl md:text-7xl font-heading font-bold mb-4 md:mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-responsive-lg md:text-2xl max-w-3xl mx-auto"
          >
            A Journey of Faith, Hope, and Transformation
          </motion.p>
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
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5, rotate: [0, -5, 5, 0] }}
                className="text-center"
              >
                <stat.icon className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-gold" />
                <div className="text-responsive-2xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-responsive-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-responsive-2xl md:text-4xl font-heading font-bold text-primary mb-4 md:mb-6">
                The Heart of India's Need
              </h2>
              
        
              
              <p className="text-responsive-base text-foreground/80 leading-relaxed mb-6">
                India, the world's second most populous nation, is home to over 1.2 billion people
                across 29 states and 7 union territories. Despite decades of high economic growth,
                millions remain trapped in poverty. Alarming realities paint the picture:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-foreground/80 mb-8">
                <li>22,000 children die every day due to poverty-related causes (UNICEF)</li>
                <li>Over 3 million children live on the streets</li>
                <li>150 million children are trapped in bonded labour</li>
                <li>Only 50% of children have access to education</li>
                <li>
                  Nearly 2 million girls between the ages of 5 and 15 are exploited in commercial
                  sex work
                </li>
              </ul>

              <h2 className="text-4xl font-heading font-bold text-primary mb-6 mt-12">
                Our Beginning
              </h2>
              
              {/* Founder Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Community service"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Amidst this vast socio-economic, religious, traditional, and caste-driven
                complexity, Helping Hands India was born in 2001 with a mission to empower and
                transform vulnerable children and communities—regardless of caste, creed, religion,
                or background.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The movement began when compassion and a divine call touched the heart of Dr. Rev.
                George Fernandes, a counsellor and theologian. Known lovingly by children as "Appa"
                (Father), George drew strength from his own painful childhood. Growing up as a
                semi-orphan and struggling under poverty, he once stood on the brink of despair.
                But in that moment of brokenness, God transformed his life—igniting in him a
                passion to transform the lives of countless others.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-6 my-8 rounded-r-lg">
                <p className="text-lg text-foreground italic">
                  "For the past 25 years, Helping Hands India has rendered restless service across
                  the nation. What began with one man's compassion has grown into a movement of
                  hope."
                </p>
              </div>

              <h2 className="text-4xl font-heading font-bold text-primary mb-6 mt-12">
                Our Impact Today
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Through these years of unwavering dedication, countless children have been rescued,
                educated, and empowered. Families have been restored, communities uplifted, and
                lives transformed.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Today, Helping Hands India stands as a living transforming power, reminding us that
                when faith meets compassion, despair turns into hope, poverty into possibility, and
                broken lives into testimonies of grace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Genesis;
