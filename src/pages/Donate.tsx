import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, GraduationCap, Home, HandHeart, Building, Copy, CheckCircle2, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Donate = () => {
  const [copiedField, setCopiedField] = useState("");

  const impactAreas = [
    {
      icon: Home,
      title: "Children's Homes",
      description: "Provide shelter, food, and care for vulnerable children",
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Sponsor a child's education in reputed schools",
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Support widows and elderly with dignity",
    },
    {
      icon: Users,
      title: "Community Centres",
      description: "Empower families within their villages",
    },
    {
      icon: HandHeart,
      title: "Special Care",
      description: "HIV care and specialized support programs",
    },
    {
      icon: Building,
      title: "Church Planting",
      description: "Establish new centers of hope and transformation",
    },
  ];

  const stats = [
    { value: "1000+", label: "Lives Transformed" },
    { value: "180+", label: "Children Graduated" },
    { value: "25", label: "Years of Service" },
    { value: "8", label: "Active Centres" },
  ];

  const bankDetails = {
    accountName: "EverSpring International",
    accountNumber: "1234567890",
    ifscCode: "ABCD0001234",
    bankName: "State Bank of India",
    branch: "Main Branch, Bangalore",
    upiId: "everspring@upi"
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero text-white pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80')"
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-hero/85" />
        </div>
        
        {/* Floating hearts */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gold/20"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              }}
              animate={{
                y: -50,
                x: [null, Math.random() * 50 - 25],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 1,
                ease: "linear",
              }}
            >
              <Heart className="w-8 h-8" />
            </motion.div>
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-10 animate-float">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-6 text-gold animate-glow" />
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-4 md:mb-6 px-4">
              Transform Lives Today
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 md:mb-8 text-white/90 px-4">
              Your generosity brings hope, dignity, and a brighter future to vulnerable children,
              elders, and communities across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#donate-options"
                className="bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all inline-block"
              >
                Donate Now
              </a>
              <a
                href="#impact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
              >
                See Our Impact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donate-options" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 md:mb-6 px-4">
                Where Your Donation Goes
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto px-4">
                Choose the area where you'd like to make the most impact
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-card p-6 md:p-8 rounded-lg shadow-lg card-hover border-t-4 border-gold"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <area.icon className="h-12 w-12 md:h-16 md:w-16 text-gold mb-4" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Make Your Donation
              </h2>
              <p className="text-lg text-foreground/80">
                Choose your preferred payment method
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bank Transfer Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl shadow-xl border-2 border-gold/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="h-8 w-8 text-gold" />
                  <h3 className="text-2xl font-heading font-bold text-primary">Bank Transfer</h3>
                </div>

                <div className="space-y-4">
                  {/* Account Name */}
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm text-foreground/60 mb-1">Account Name</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">{bankDetails.accountName}</p>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
                        className="text-gold hover:text-gold-dark transition-colors"
                      >
                        {copiedField === 'accountName' ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm text-foreground/60 mb-1">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground font-mono">{bankDetails.accountNumber}</p>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                        className="text-gold hover:text-gold-dark transition-colors"
                      >
                        {copiedField === 'accountNumber' ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* IFSC Code */}
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm text-foreground/60 mb-1">IFSC Code</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground font-mono">{bankDetails.ifscCode}</p>
                      <button
                        onClick={() => copyToClipboard(bankDetails.ifscCode, 'ifscCode')}
                        className="text-gold hover:text-gold-dark transition-colors"
                      >
                        {copiedField === 'ifscCode' ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bank Name */}
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm text-foreground/60 mb-1">Bank Name</p>
                    <p className="font-semibold text-foreground">{bankDetails.bankName}</p>
                  </div>

                  {/* Branch */}
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm text-foreground/60 mb-1">Branch</p>
                    <p className="font-semibold text-foreground">{bankDetails.branch}</p>
                  </div>
                </div>
              </motion.div>

              {/* UPI Payment Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl shadow-xl border-2 border-gold/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="h-8 w-8 text-gold" />
                  <h3 className="text-2xl font-heading font-bold text-primary">UPI Payment</h3>
                </div>

                {/* QR Code Placeholder */}
                <div className="bg-secondary p-8 rounded-lg mb-6 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="w-48 h-48 bg-gradient-to-br from-gold/20 to-primary/20 rounded-lg flex items-center justify-center">
                      <p className="text-sm text-center text-foreground/60">QR Code<br/>Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* UPI ID */}
                <div className="bg-secondary p-4 rounded-lg mb-4">
                  <p className="text-sm text-foreground/60 mb-1">UPI ID</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground font-mono">{bankDetails.upiId}</p>
                    <button
                      onClick={() => copyToClipboard(bankDetails.upiId, 'upiId')}
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      {copiedField === 'upiId' ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-sm text-foreground/60 text-center">
                  Scan the QR code or use the UPI ID to make your donation
                </p>
              </motion.div>
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gold/10 border border-gold/30 p-6 rounded-lg"
            >
              <p className="text-foreground/80 text-center">
                <strong className="text-gold">Note:</strong> After making your donation, please send us the transaction details at{" "}
                <a href="mailto:donate@everspring.org" className="text-gold hover:underline">
                  donate@everspring.org
                </a>{" "}
                to receive your receipt and tax exemption certificate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Your Trust Matters
              </h2>
              
              {/* Trust Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
                  alt="Helping hands"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                We are committed to transparency and accountability. Every donation is used
                efficiently and effectively to maximize impact in the communities we serve.
              </p>
              <div className="bg-secondary p-8 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-gold mb-2">95%</div>
                    <p className="text-foreground/70">Directly to Programs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gold mb-2">5%</div>
                    <p className="text-foreground/70">Administrative Costs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gold mb-2">100%</div>
                    <p className="text-foreground/70">Transparency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-gold text-gold-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Be Part of the Transformation
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                For 25 years, we've witnessed miracles in the lives of vulnerable children, elders,
                and communities. Your gift today continues this legacy of hope and transformation.
              </p>
              <a
                href="#donate-options"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-12 py-6 rounded-lg hover-glow transition-all"
              >
                Make Your Donation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;