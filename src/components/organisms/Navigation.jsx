import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import GradientText from "@/components/atoms/GradientText";
import ApperIcon from "@/components/ApperIcon";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <ApperIcon name="TrendingUp" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">
              <GradientText>SocialTrends</GradientText>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("personas")}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Who It's For
            </button>
            <Button 
              variant="accent" 
              size="sm"
              onClick={() => scrollToSection("signup")}
              className="touch-target"
            >
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <ApperIcon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-white"
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-white/10 mt-4">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 touch-target"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("personas")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 touch-target"
            >
              Who It's For
            </button>
            <Button 
              variant="accent" 
              size="sm"
              onClick={() => scrollToSection("signup")}
              className="w-full touch-target"
            >
              Start Free
            </Button>
          </div>
        </motion.div>
      </Container>
    </motion.header>
  );
};

export default Navigation;