import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import GradientText from "@/components/atoms/GradientText";
import PersonaCard from "@/components/molecules/PersonaCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import landingService from "@/services/api/landingService";

const PersonasSection = () => {
  const [personas, setPersonas] = useState([]);
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.2);

  useEffect(() => {
    const loadPersonas = async () => {
      try {
        const personaData = await landingService.getPersonas();
        setPersonas(personaData);
      } catch (error) {
        console.error("Error loading personas:", error);
      }
    };

    loadPersonas();
  }, []);

  return (
    <Section 
      id="personas" 
      ref={sectionRef}
      padding="xl"
      background="surface"
      className="scroll-snap-section"
    >
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Who Is <GradientText>SocialTrends</GradientText> For?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're creating content, marketing brands, or building companies, 
            SocialTrends gives you the intelligence to stay ahead of the conversation.
          </p>
        </motion.div>

        {/* Persona Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {personas.map((persona, index) => (
            <PersonaCard
              key={persona.Id}
              persona={persona}
              index={index}
              isVisible={isSectionVisible}
              className="h-full"
            />
          ))}
        </div>

        {/* Bottom Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              10M+
            </div>
            <div className="text-gray-300">
              Trends Analyzed Daily
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              50K+
            </div>
            <div className="text-gray-300">
              Active Creators
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              95%
            </div>
            <div className="text-gray-300">
              Trend Accuracy Rate
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default PersonasSection;