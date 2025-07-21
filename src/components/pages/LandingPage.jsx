import React from "react";
import Navigation from "@/components/organisms/Navigation";
import HeroSection from "@/components/organisms/HeroSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import PersonasSection from "@/components/organisms/PersonasSection";
import FinalCTASection from "@/components/organisms/FinalCTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navigation />
      
      <main className="scroll-snap-container">
        <HeroSection />
        <HowItWorksSection />
        <PersonasSection />
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-surface/50 border-t border-white/10 py-12">
        <div className="container-width section-padding">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-xl font-bold gradient-text mb-4">
                SocialTrends
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ride the Wave. Before it Breaks.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>AI Trend Discovery</li>
                <li>Content Generation</li>
                <li>Multi-platform Publishing</li>
                <li>Real-time Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">For</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Content Creators</li>
                <li>Digital Marketers</li>
                <li>Startup Founders</li>
                <li>Social Media Managers</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 SocialTrends. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;