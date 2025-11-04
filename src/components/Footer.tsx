import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    } catch (error) {
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
    } catch (error) {
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
    <footer className="bg-primary text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold">
              EverSpring International
            </h3>
            <p className="text-white/80 mb-4">
              Empowering vulnerable children and communities across India through holistic care,
              education, and spiritual guidance since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/genesis" className="text-white/80 hover:text-gold transition-colors">
                  Genesis
                </Link>
              </li>
              <li>
                <Link to="/elder-care" className="text-white/80 hover:text-gold transition-colors">
                  Elder Care
                </Link>
              </li>
              <li>
                <Link
                  to="/special-care"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Special Care
                </Link>
              </li>
              <li>
                <Link
                  to="/jordan-community"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Jordan Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Homes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Homes</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/homes/bangalore"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Bangalore
                </Link>
              </li>
              <li>
                <Link
                  to="/homes/bhadrachalam"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Bhadrachalam
                </Link>
              </li>
              <li>
                <Link
                  to="/homes/raibag"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Raibag
                </Link>
              </li>
              <li>
                <Link
                  to="/homes/ambur"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Ambur
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <form onSubmit={handleContactSubmit} className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Textarea
                placeholder="Your Message"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[80px]"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-gold-foreground"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4 text-sm">
              Subscribe to get updates on our work and impact.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-gold-foreground"
              >
                Subscribe
              </Button>
            </form>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-gold p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gold p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gold p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} EverSpring International. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gold hover:bg-gold-dark text-gold-foreground p-3 rounded-full shadow-lg hover-glow z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
