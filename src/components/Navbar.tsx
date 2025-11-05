import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/genesis" },
    {
      name: "Homes",
      path: "/homes",
      dropdown: [
        { name: "Bangalore", path: "/homes/bangalore" },
        { name: "Bhadrachalam", path: "/homes/bhadrachalam" },
        { name: "Raibag", path: "/homes/raibag" },
        { name: "Ambur", path: "/homes/ambur" },
      ],
    },
    {
      name: "Care's",
      path: "/elder-care",
      dropdown: [
        { name: "Elder Care", path: "/elder-care" },
        { name: "Special Care", path: "/special-care" },
      ],
    },
    {
      name: "Community",
      path: "/jordan-community",
      dropdown: [
        { name: "Jordan Community", path: "/jordan-community" },
        { name: "Church Planting", path: "/church-planting" },
      ],
    },
    { name: "Theological Seminary", path: "/theological-seminary" },
  ];

  const handleHomesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/homes");
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownItemClick = (path: string) => {
    navigate(path);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    const link = navLinks.find(l => l.name === linkName);
    if (link) {
      navigate(link.path);
      setOpenDropdown(null);
      setIsMobileMenuOpen(false);
    }
  };

  const handleDropdownButtonClick = (e: React.MouseEvent, linkName: string) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-all group-hover:shadow-xl group-hover:shadow-gold/30"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/logo.png"
                alt="EverSpring International Logo"
                className="h-10 w-10 object-contain"
              />
            </motion.div>
            <div className={`text-2xl font-heading font-bold transition-colors ${
              isScrolled ? "text-primary group-hover:text-gold" : "text-white group-hover:text-gold"
            }`}>
              EverSpring International
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center space-x-1">
                    <Link
                      to={link.path}
                      className={`hover:text-gold transition-colors font-medium ${
                        isScrolled ? "text-primary" : "text-white"
                      }`}
                      onClick={(e) => handleDropdownClick(e, link.name)}
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={(e) => handleDropdownButtonClick(e, link.name)}
                      className={`hover:text-gold transition-colors ${
                        isScrolled ? "text-primary" : "text-white"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-card shadow-elegant rounded-lg overflow-hidden z-50 border border-border"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                            onClick={() => handleDropdownItemClick(item.path)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:text-gold transition-colors font-medium ${
                    location.pathname === link.path 
                      ? "text-gold" 
                      : isScrolled ? "text-primary" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link to="/donate">
              <Button className="bg-gold hover:bg-gold-dark text-gold-foreground font-semibold px-6 hover-glow">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md pb-6"
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        className="flex-1 px-4 py-3 text-white hover:text-gold transition-colors"
                        onClick={(e) => handleDropdownClick(e, link.name)}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className="px-4 py-3 text-white hover:text-gold transition-colors"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-primary-dark overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-8 py-2 text-white/90 hover:text-gold transition-colors"
                              onClick={() => handleDropdownItemClick(item.path)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-white hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="px-4 pt-3">
                <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gold hover:bg-gold-dark text-gold-foreground font-semibold">
                    Donate
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;