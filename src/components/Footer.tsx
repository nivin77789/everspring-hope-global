import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, ArrowUp, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "newsletter"), {
        email,
        subscribedAt: new Date().toISOString(),
      });
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    } catch {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name: contactName,
        email: contactEmail,
        message: contactMessage,
        submittedAt: new Date().toISOString(),
      });
      toast({
        title: "Success!",
        description: "Your message has been sent.",
      });
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative font-body" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)" }}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-gold to-blue-400"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
              EverSpring International
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Empowering vulnerable children and communities across India through holistic care,
              education, and spiritual guidance since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              {["Genesis", "Elder Care", "Special Care", "Jordan Community"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/80 hover:text-gold transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Homes */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Our Homes</h4>
            <ul className="space-y-2">
              {["Bangalore", "Bhadrachalam", "Raibag", "Ambur"].map((home) => (
                <li key={home}>
                  <Link
                    to={`/homes/${home.toLowerCase()}`}
                    className="text-white/80 hover:text-gold transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {home}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Contact Us</h4>
            <form onSubmit={handleContactSubmit} className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                required
              />
              <Textarea
                placeholder="Your Message"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-[80px] focus:border-blue-400 focus:ring-blue-400/20"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-slate-900 font-semibold shadow-lg hover:shadow-gold/50 transition-all duration-300"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Newsletter</h4>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Subscribe to get updates on our work and impact.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-slate-900 font-semibold shadow-lg hover:shadow-gold/50 transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/5 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-blue-400"
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} EverSpring International. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-blue-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-blue-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-slate-900 p-3 rounded-full shadow-lg hover:shadow-gold/50 z-40 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;