import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import GradientText from "@/components/atoms/GradientText";
import SocialIcon from "@/components/molecules/SocialIcon";
import AnimatedPlaceholder from "@/components/molecules/AnimatedPlaceholder";
import ScrollIndicator from "@/components/molecules/ScrollIndicator";
import landingService from "@/services/api/landingService";
import { toast } from "react-toastify";

const HeroSection = () => {
  const [ctas, setCtas] = useState([]);

  useEffect(() => {
    const loadCtas = async () => {
      try {
        const ctaData = await landingService.getCTAs();
        setCtas(ctaData);
      } catch (error) {
        console.error("Error loading CTAs:", error);
      }
    };

    loadCtas();
  }, []);

  const handleCTAClick = async (cta) => {
    try {
      await landingService.trackCTAClick(cta.trackingId);
      
      if (cta.href.startsWith("#")) {
        const element = document.getElementById(cta.href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      
      toast.success(`Welcome to SocialTrends! 🚀`);
    } catch (error) {
      console.error("Error tracking CTA click:", error);
    }
  };

  const primaryCTA = ctas.find(cta => cta.variant === "primary");
  const secondaryCTA = ctas.find(cta => cta.variant === "secondary");

  const socialPlatforms = ["tiktok", "instagram", "youtube", "x"];

  return (
    <Section 
      id="hero" 
      padding="xl" 
      background="wave"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Animated Social Icons */}
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <SocialIcon 
                  platform={platform}
                  size={24}
                  className="hover:shadow-lg hover:shadow-primary/20"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-shadow">
              Ride the Next Wave.{" "}
              <br className="hidden md:block" />
              <GradientText>Before it Breaks.</GradientText>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SocialTrends.app is your AI-powered compass to discover emerging trends, 
            generate viral-worthy content, and post directly to all your social channels. 
            <span className="text-white font-semibold"> Stop guessing, start trending.</span>
          </motion.p>

          {/* Animated Placeholder */}
          <motion.div
            className="flex justify-center py-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <AnimatedPlaceholder 
              type="wave" 
              size="xl"
              className="shadow-2xl shadow-primary/20"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {primaryCTA && (
              <Button
                variant="accent"
                size="xl"
                onClick={() => handleCTAClick(primaryCTA)}
                className="text-lg font-semibold shadow-2xl shadow-accent/30 touch-target"
              >
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant="secondary"
                size="xl"
                onClick={() => handleCTAClick(secondaryCTA)}
                className="text-lg touch-target"
              >
                {secondaryCTA.text}
              </Button>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex justify-center items-center space-x-8 text-gray-400 text-sm pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Real-time Trends</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Multi-platform</span>
            </div>
          </motion.div>
        </div>

        <ScrollIndicator />
      </Container>
    </Section>
  );
};

export default HeroSection;