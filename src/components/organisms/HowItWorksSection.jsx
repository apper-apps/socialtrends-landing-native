import React, { useState, useEffect } from "react";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import GradientText from "@/components/atoms/GradientText";
import FeatureCard from "@/components/molecules/FeatureCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import landingService from "@/services/api/landingService";

const HowItWorksSection = () => {
  const [features, setFeatures] = useState([]);
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.2);

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const featureData = await landingService.getFeatures();
        setFeatures(featureData);
      } catch (error) {
        console.error("Error loading features:", error);
      }
    };

    loadFeatures();
  }, []);

  return (
    <Section 
      id="how-it-works" 
      ref={sectionRef}
      padding="xl"
      background="gradient"
      className="scroll-snap-section"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            How <GradientText>SocialTrends</GradientText> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to transform you from trend follower to trend leader. 
            Let AI be your competitive advantage in the social media landscape.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const [cardRef, isCardVisible] = useScrollAnimation(0.3);
            
            return (
              <div key={feature.Id} ref={cardRef}>
                <FeatureCard
                  feature={feature}
                  index={index}
                  isVisible={isCardVisible}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {isSectionVisible && (
          <div className="text-center mt-20 pt-16 border-t border-white/10">
            <p className="text-lg text-gray-300 mb-6">
              Ready to get ahead of the curve?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("signup");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-accent hover:text-accent/80 font-semibold text-lg underline hover:no-underline transition-all duration-200 touch-target"
            >
              Start trending today →
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default HowItWorksSection;