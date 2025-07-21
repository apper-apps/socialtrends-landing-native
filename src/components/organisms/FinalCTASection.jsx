import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import GradientText from "@/components/atoms/GradientText";
import AnimatedPlaceholder from "@/components/molecules/AnimatedPlaceholder";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import landingService from "@/services/api/landingService";
import { toast } from "react-toastify";

const FinalCTASection = () => {
  const [ctas, setCtas] = useState([]);
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.3);

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
      toast.success("🎉 Get ready to ride the wave!");
    } catch (error) {
      console.error("Error tracking CTA click:", error);
    }
  };

  const primaryCTA = ctas.find(cta => cta.variant === "primary");
  const secondaryCTA = ctas.find(cta => cta.variant === "secondary");
  const textCTA = ctas.find(cta => cta.variant === "text");

  return (
    <Section 
      id="signup" 
      ref={sectionRef}
      padding="xl"
      background="wave"
      className="scroll-snap-section relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Animated Background Element */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isSectionVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
          >
            <AnimatedPlaceholder 
              type="pulse" 
              size="lg"
              className="shadow-2xl shadow-accent/30"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-shadow">
              Stay Ahead of{" "}
              <GradientText>Every Trend.</GradientText>
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join creators, marketers, and founders already surfing the social wave 
            with <span className="gradient-text font-semibold">AI on their side.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {primaryCTA && (
              <Button
                variant="accent"
                size="xl"
                onClick={() => handleCTAClick(primaryCTA)}
                className="text-lg font-semibold shadow-2xl shadow-accent/30 animate-glow touch-target"
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

          {/* Text CTA */}
          {textCTA && (
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={isSectionVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => handleCTAClick(textCTA)}
                className="text-accent hover:text-accent/80 font-semibold text-lg underline hover:no-underline transition-all duration-200 touch-target"
              >
                {textCTA.text}
              </button>
            </motion.div>
          )}

          {/* Social Proof */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                4.9/5
              </div>
              <div className="text-gray-400 text-sm">
                User Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                50K+
              </div>
              <div className="text-gray-400 text-sm">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                1M+
              </div>
              <div className="text-gray-400 text-sm">
                Posts Created
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                99.9%
              </div>
              <div className="text-gray-400 text-sm">
                Uptime
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCTASection;