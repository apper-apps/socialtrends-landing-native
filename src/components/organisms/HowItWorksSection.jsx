import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import FeatureCard from "@/components/molecules/FeatureCard";
import Section from "@/components/atoms/Section";
import GradientText from "@/components/atoms/GradientText";
import Container from "@/components/atoms/Container";
import landingService from "@/services/api/landingService";

function HowItWorksSection() {
  const [features, setFeatures] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Section animation
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.3)
  
  // Individual scroll animation hooks - must be called at top level
  const animation1 = useScrollAnimation(0.3)
  const animation2 = useScrollAnimation(0.3)
  const animation3 = useScrollAnimation(0.3)
  const animation4 = useScrollAnimation(0.3)
  const animation5 = useScrollAnimation(0.3)
  const animation6 = useScrollAnimation(0.3)
  
  // Array of animations for easy access
  const featureAnimations = [animation1, animation2, animation3, animation4, animation5, animation6]
  
  async function loadFeatures() {
    try {
      setLoading(true)
      setError(null)
      const featureData = await landingService.getFeatures()
      setFeatures(featureData)
    } catch (err) {
      setError(err.message || 'Failed to load features')
      console.error('Error loading features:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFeatures()
  }, [])

  if (loading) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-400">Loading features...</p>
        </div>
      </Section>
    )
  }

  if (error) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-error mb-4">Error: {error}</p>
          <button 
            onClick={loadFeatures}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            Retry
          </button>
        </div>
      </Section>
    )
  }

  return (
    <Section ref={sectionRef} className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <GradientText>How It Works</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover trending content and grow your social media presence with our powerful analytics platform
          </p>
        </div>
        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const [cardRef, isCardVisible] = featureAnimations[index] || [null, false];
            
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
  )
}

export default HowItWorksSection